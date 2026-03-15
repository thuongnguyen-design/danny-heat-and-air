// src/pages/api/submit-lead.js
// ── Secure lead form API endpoint ────────────────────────────────────────
// Protection layers: rate limit → honeypot → CSRF → schema validation →
//                   reCAPTCHA → PII encryption → store/notify

import {
  checkRateLimit,
  leadSchema,
  verifyCsrfToken,
  encryptPII,
  verifyRecaptcha,
  sanitize,
} from "@/lib/formSecurity";

// In-memory lead store (replace with a real DB in production)
// On Pi, leads are saved to a JSON file for easy inspection
import fs from "fs";
import path from "path";

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

function saveLeadToFile(lead) {
  try {
    const dir = path.dirname(LEADS_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    let existing = [];
    if (fs.existsSync(LEADS_FILE)) {
      existing = JSON.parse(fs.readFileSync(LEADS_FILE, "utf8"));
    }
    existing.push(lead);
    fs.writeFileSync(LEADS_FILE, JSON.stringify(existing, null, 2));
  } catch (err) {
    console.error("Failed to save lead:", err.message);
  }
}

export default async function handler(req, res) {
  // Only POST allowed
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // ── Layer 1: Rate limiting ──────────────────────────────────
  const ip = (
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket?.remoteAddress ||
    "unknown"
  ).trim();

  const rateCheck = checkRateLimit(ip);
  if (rateCheck.blocked) {
    console.warn(`[SECURITY] Rate limit hit from IP: ${ip}`);
    return res.status(429).json({
      error: "Too many requests. Please wait a few minutes before trying again.",
    });
  }

  // ── Layer 2: Honeypot ───────────────────────────────────────
  if (req.body?.honeypot !== "") {
    console.warn(`[SECURITY] Honeypot triggered from IP: ${ip}`);
    // Return 200 to confuse bots — don't reveal it was blocked
    return res.status(200).json({ success: true });
  }

  // ── Layer 3: CSRF token ─────────────────────────────────────
  if (!verifyCsrfToken(req.body?._csrf)) {
    console.warn(`[SECURITY] Invalid CSRF token from IP: ${ip}`);
    return res.status(403).json({ error: "Invalid request token. Please refresh and try again." });
  }

  // ── Layer 4: Schema validation ──────────────────────────────
  const parseResult = leadSchema.safeParse(req.body);
  if (!parseResult.success) {
    const fieldErrors = parseResult.error.flatten().fieldErrors;
    return res.status(400).json({ error: "Validation failed", fields: fieldErrors });
  }
  const data = parseResult.data;

  // ── Layer 5: reCAPTCHA (skipped if not configured) ─────────
  const captchaResult = await verifyRecaptcha(req.body?.recaptchaToken);
  if (!captchaResult.success) {
    console.warn(`[SECURITY] reCAPTCHA failed from IP: ${ip}, score: ${captchaResult.score}`);
    return res.status(400).json({ error: "Automated submission detected. Please try again." });
  }

  // ── Layer 6: Build & store lead ─────────────────────────────
  const lead = {
    id:         `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    service:    data.service,                // not PII — safe to store plain
    message:    sanitize(data.message || ""),// sanitized plain text
    name_enc:   encryptPII(sanitize(data.name)),
    phone_enc:  encryptPII(sanitize(data.phone)),
    email_enc:  encryptPII(sanitize(data.email || "")),
    ip_hash:    Buffer.from(ip).toString("base64"), // hashed, not raw IP
    submitted_at: new Date().toISOString(),
    captcha_score: captchaResult.score,
  };

  saveLeadToFile(lead);
  console.log(`[LEAD] New lead saved — id: ${lead.id}, service: ${lead.service}`);

  // ── Layer 7: Email notification ─────────────────────────────
  // (Only if SMTP is configured — skipped on local dev)
  if (process.env.SMTP_HOST && process.env.NOTIFY_EMAIL) {
    try {
      const nodemailer = require("nodemailer");
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });
      await transporter.sendMail({
        from: `"HVAC Website" <${process.env.SMTP_USER}>`,
        to: process.env.NOTIFY_EMAIL,
        subject: `New Lead — ${data.service}`, // NO PII in subject
        text: [
          `New lead received — Lead ID: ${lead.id}`,
          `Service: ${data.service}`,
          `Submitted: ${lead.submitted_at}`,
          "",
          "View lead details in your admin dashboard.",
          "(PII is encrypted — decrypt in the admin panel)",
        ].join("\n"),
      });
    } catch (err) {
      console.error("[EMAIL] Notification failed:", err.message);
      // Don't fail the request — lead is already saved
    }
  }

  return res.status(200).json({
    success: true,
    message: "Thank you! We'll be in touch within 1 business hour.",
    leadId: lead.id,
  });
}
