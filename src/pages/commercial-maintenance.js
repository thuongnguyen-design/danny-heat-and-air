import Head from "next/head";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/Service.module.css";

export default function CommercialMaintenance() {
  return (
    <>
      <Head>
        <title>Commercial HVAC & Refrigeration Maintenance in {config.city} | {config.siteName}</title>
        <meta name="description" content={`Preventive maintenance for commercial HVAC and refrigeration in ${config.city}. ${config.siteName} keeps your equipment running efficiently. Call ${config.phoneMain}.`} />
      </Head>

      <section className={`${styles.hero} ${styles.themeAir}`}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Commercial Services</span>
          <h1 className={styles.heroH1}>Commercial Maintenance</h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>Prevent breakdowns before they cost you money.</p>
        </div>
      </section>

      <section className={`${styles.mainLayout} ${styles.themeAir}`}>
        <div className={`container ${styles.grid}`}>

          <div className={styles.contentWrapper}>
            <h2>The Cheapest Repair Is the One You Never Need</h2>
            <p>
              Commercial HVAC and refrigeration equipment works harder and longer than residential systems. Without regular maintenance, that wear adds up — leading to unexpected failures, emergency repair bills, and shortened equipment life.
            </p>
            <p>
              {config.siteName} offers scheduled preventive maintenance for all your commercial equipment. We catch small problems before they become expensive emergencies, keeping your business running smoothly year-round.
            </p>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>What's Included:</h3>
            <ul className={styles.benefitsList}>
              <li>• Full system inspection and performance testing</li>
              <li>• Filter replacement and coil cleaning</li>
              <li>• Refrigerant level checks and leak detection</li>
              <li>• Electrical connection inspection and tightening</li>
              <li>• Thermostat and controls calibration</li>
              <li>• Condensate drain clearing</li>
            </ul>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Equipment We Maintain:</h3>
            <ul className={styles.benefitsList}>
              <li>• Rooftop units and commercial split systems</li>
              <li>• Walk-in coolers and freezers</li>
              <li>• Reach-in refrigerators and freezers</li>
              <li>• Ice machines</li>
              <li>• Ventilation and exhaust systems</li>
            </ul>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Protect Your Investment</h3>
            <p>
              Regular maintenance extends equipment life, improves energy efficiency, and keeps you in compliance with health and safety codes. Contact us to set up a maintenance schedule that works for your business.
            </p>
          </div>

          <div className={styles.formSidebar}>
            <QuoteForm />
          </div>

        </div>
      </section>
    </>
  );
}
