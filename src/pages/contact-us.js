import Head from "next/head";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/Contact.module.css";

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us | {config.siteName}</title>
        <meta name="description" content={`Get in touch with ${config.siteName} for fast, reliable HVAC service in ${config.city}.`} />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Contact Us</span>
          <h1 className={styles.heroH1}>Get in Touch</h1>
          <p className={styles.heroSub}>Stop in, give us a call, or send an email. We're ready to restore your comfort.</p>
        </div>
      </section>

      <section className={styles.mapSection}>
        {/* LIVE GOOGLE MAP WITH YOUR EXACT ADDRESS */}
        <iframe
          src="https://maps.google.com/maps?q=3686+Popolo+Cir,+Stockton,+CA&t=&z=14&ie=UTF8&iwloc=&output=embed"
          className={styles.mapIframe}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Service Area Map"
        ></iframe>
        
        <div className="container" style={{ position: "relative", zIndex: 2, display: "flex", width: "100%" }}>
          <div className={styles.formWrapper}>
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="container">
        <div className={`${styles.infoGrid} reveal-stagger`}>
          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brand-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3>Service Area</h3>
            <p>3686 Popolo Cir<br />Stockton, CA 95212</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brand-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <h3>Call Us</h3>
            <p><a href={`tel:${config.phoneMain.replace(/\D/g, "")}`}>Main: {config.phoneMain}</a></p>
            <p><a href={`tel:${config.phoneAlt.replace(/\D/g, "")}`}>Alt: {config.phoneAlt}</a></p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brand-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <h3>Email Us</h3>
            <p><a href={`mailto:${config.email}`}>{config.email}</a></p>
          </div>
        </div>
      </section>

      <section className={styles.emergencyBanner}>
        <div className={`container ${styles.emergencyInner}`}>
          <div className={styles.emergencyText}>
            <h2>Emergency Services</h2>
            <p>Have an HVAC emergency? Call for immediate service. Available 24/7.</p>
          </div>
          <a href={`tel:${config.phoneAlt.replace(/\D/g, "")}`} className="btn btn-primary">
            Call {config.phoneAlt}
          </a>
        </div>
      </section>
    </>
  );
}
