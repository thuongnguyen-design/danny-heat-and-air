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

export default function QuoteForm({ compact }) {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    // Grab the values the customer typed in
    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      service: e.target.service.value,
    };

    try {
      // Send the data to your new backend API
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
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

      <button type="submit" className={styles.submit} disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Book Now"}
      </button>

      {status === "error" && (
        <p className={styles.errorBanner}>Oops! Something went wrong. Please call us instead.</p>
      )}
      
      <p className={styles.privacy}>Your information is secure.</p>
    </form>
  );
}
