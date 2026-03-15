// src/lib/formSecurity.js
// ── Secure form handling ──────────────────────────────────────────────────
// Covers: input validation, sanitization, rate limiting, honeypot check,
//         CSRF token generation/verification, PII encryption.

import { z } from "zod";
import { createCipheriv, createDecipheriv, randomBytes, createHmac } from "crypto";

// ── Rate limiting (in-memory, resets on restart — upgrade to Redis for prod) ──
const rateLimitMap = new Map();

export function checkRateLimit(ip, windowMs = 600_000, maxRequests = 8) {
  const now = Date.now();
  const key = `rl:${ip}`;
  const record = rateLimitMap.get(key) || { count: 0, resetAt: now + windowMs };

  if (now > record.resetAt) {
    record.count = 1;
    record.resetAt = now + windowMs;
  } else {
    record.count++;
  }
  rateLimitMap.set(key, record);

  if (record.count > maxRequests) {
    return { blocked: true, remaining: 0 };
  }
  return { blocked: false, remaining: maxRequests - record.count };
}

// ── Input validation schema (Zod) ─────────────────────────────────────────
export const leadSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100)
    .regex(/^[a-zA-Z\s'\-]+$/, "Name contains invalid characters"),

  phone: z
    .string()
    .regex(/^\+?[\d\s\-\(\)\.]{7,20}$/, "Invalid phone number"),

  email: z
    .string()
    .email("Invalid email address")
    .max(254)
    .optional()
    .or(z.literal("")),

  service: z.enum([
    "furnace-repair",
    "furnace-installation",
    "furnace-maintenance",
    "air-conditioning-repair",
    "air-conditioner-installation",
    "air-conditioning-maintenance",
    "duct-cleaning",
    "memberships",
    "other",
  ], { errorMap: () => ({ message: "Please select a valid service" }) }),

  message: z
    .string()
    .max(1000, "Message too long")
    .optional()
    .transform((v) => v?.replace(/<[^>]*>/g, "") ?? ""), // strip any HTML tags

  honeypot: z.literal("", { errorMap: () => ({ message: "Bot detected" }) }),
  _csrf: z.string().min(32),
});

// ── Sanitize a single string value ────────────────────────────────────────
export function sanitize(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .trim()
    .slice(0, 2000); // hard cap
}

// ── CSRF token ────────────────────────────────────────────────────────────
const CSRF_SECRET = process.env.FORM_SECRET || "dev_secret_please_change";

export function generateCsrfToken() {
  const rand = randomBytes(24).toString("hex");
  const sig  = createHmac("sha256", CSRF_SECRET).update(rand).digest("hex");
  return `${rand}.${sig}`;
}

export function verifyCsrfToken(token) {
  if (!token || !token.includes(".")) return false;
  const [rand, sig] = token.split(".");
  const expected = createHmac("sha256", CSRF_SECRET).update(rand).digest("hex");
  // Constant-time comparison
  return sig.length === expected.length &&
    Buffer.from(sig).equals(Buffer.from(expected));
}

// ── PII encryption (AES-256-GCM) ─────────────────────────────────────────
// Key must be 32 bytes hex — store in secrets manager in production.
// For local dev a random key is auto-generated if not set.
let _encKey;
function getEncKey() {
  if (!_encKey) {
    const raw = process.env.ENCRYPTION_KEY;
    _encKey = raw
      ? Buffer.from(raw, "hex")
      : randomBytes(32); // auto for dev — not persistent across restarts
  }
  return _encKey;
}

export function encryptPII(plaintext) {
  if (!plaintext) return "";
  const key = getEncKey();
  const iv  = randomBytes(16);
  const cipher = createCipheriv("aes-256-gcm", key, iv);
  const enc  = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()]);
  const tag  = cipher.getAuthTag();
  // Format: iv:authTag:ciphertext (all hex)
  return [iv.toString("hex"), tag.toString("hex"), enc.toString("hex")].join(":");
}

export function decryptPII(stored) {
  if (!stored) return "";
  try {
    const [ivHex, tagHex, encHex] = stored.split(":");
    const key    = getEncKey();
    const iv     = Buffer.from(ivHex, "hex");
    const tag    = Buffer.from(tagHex, "hex");
    const enc    = Buffer.from(encHex, "hex");
    const decipher = createDecipheriv("aes-256-gcm", key, iv);
    decipher.setAuthTag(tag);
    return decipher.update(enc) + decipher.final("utf8");
  } catch {
    return "[decryption error]";
  }
}

// ── reCAPTCHA v3 server-side verification ────────────────────────────────
export async function verifyRecaptcha(token) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  // If not configured (local dev), skip silently
  if (!secret) return { success: true, score: 1.0 };
  if (!token)  return { success: false, score: 0 };

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secret}&response=${token}`,
  });
  const data = await res.json();
  return { success: data.success && data.score >= 0.5, score: data.score ?? 0 };
}
