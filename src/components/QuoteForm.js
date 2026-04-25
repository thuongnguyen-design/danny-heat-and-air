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

    const name = e.target.name.value;
    const service = e.target.service.value;

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `🔧 New ${service} Request from ${name}`,
      from_name: name,
      replyto: e.target.email.value,
      "Customer Name": name,
      "Phone Number": e.target.phone.value,
      "Email": e.target.email.value,
      "Service Needed": service,
      "Message": e.target.message.value || "No message provided",
      botcheck: "",
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

      <textarea
        name="message"
        placeholder="Describe your issue (optional)"
        rows={3}
        className={`${styles.input} ${styles.fullWidth}`}
      />

      <input type="hidden" name="botcheck" value="" />

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
