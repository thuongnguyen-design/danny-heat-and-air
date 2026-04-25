import { useState } from "react";
import styles from "./QuoteForm.module.css";

const SERVICES = [
  "AC Repair",
  "AC Installation",
  "Furnace Repair",
  "Furnace Installation",
  "Water Heater Repair",
  "Water Heater Installation",
  "Duct Cleaning",
  "Maintenance / Tune-up",
  "Other"
];

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

export default function QuoteForm({ compact }) {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New service request from danny-heat-and-air.com",
      from_name: "DANNY Heat & Air Website",
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      service: e.target.service.value,
      botcheck: e.target.botcheck.value,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>•</div>
        <h3>Request Sent!</h3>
        <p>We've received your info and will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form className={`${styles.form} ${compact ? styles.compact : ""}`} onSubmit={handleSubmit}>
      <h3 className={styles.formTitle}>Book Service Now</h3>
      <p className={styles.formSub}>Fast, reliable HVAC service.</p>

      <div className={styles.grid}>
        <input type="text" name="name" placeholder="Your Name" required className={styles.input} />
        <input type="tel" name="phone" placeholder="Phone Number" required className={styles.input} />
      </div>

      <input type="email" name="email" placeholder="Email Address" required className={`${styles.input} ${styles.fullWidth}`} />

      <select name="service" required defaultValue="" className={`${styles.input} ${styles.fullWidth}`}>
        <option value="" disabled>Select Service Needed...</option>
        {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
      </select>

      {/* Honeypot — bots fill it, humans don't see it */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex="-1"
        autoComplete="off"
        style={{ display: "none" }}
      />

      <button type="submit" className={`btn btn-primary ${styles.submit}`} disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Book Now"}
      </button>

      {status === "error" && (
        <p className={styles.errorBanner}>Oops! Something went wrong. Please call us instead.</p>
      )}

      <p className={styles.privacy}>Your information is secure.</p>
    </form>
  );
}
