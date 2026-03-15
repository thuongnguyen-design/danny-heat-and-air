import Head from "next/head";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/Service.module.css";

export default function WaterHeaterReplacement() {
  return (
    <>
      <Head>
        <title>Water Heater Replacement & Installation | {config.siteName}</title>
        <meta name="description" content={`Upgrade your old, leaking water heater with a high-efficiency tank installed by ${config.siteName} in ${config.city}.`} />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Plumbing & Heating</span>
          <h1 className={styles.heroH1}>Water Heater Replacement</h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>Reliable, energy-efficient hot water for your whole home.</p>
        </div>
      </section>

      <section className={styles.mainLayout}>
        <div className={`container ${styles.grid}`}>
          
          <div className={styles.contentWrapper}>
            <h2>Upgrade Before It Floods</h2>
            <p>
              Traditional tank water heaters typically last between 8 and 12 years. If yours is reaching that age, replacing it proactively can save you from a catastrophic leak that ruins your floors and drywall.
            </p>
            <p>
              At {config.siteName}, we install premium, energy-efficient gas and electric water heaters designed to provide reliable hot water for your family. We handle the heavy lifting, the permits, and the safe disposal of your old, rusted tank.
            </p>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-orange)" }}>Why Replace Your Water Heater With Us?</h3>
            <ul className={styles.benefitsList}>
              <li>• Free, transparent estimates on new installations</li>
              <li>• We Match Any Competitor's Price</li>
              <li>• Code-compliant installations for your family's safety</li>
              <li>• Better insulation means lower gas or electric bills</li>
              <li>• Full haul-away and disposal of your old unit</li>
            </ul>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Affordable Upgrades</h3>
            <p>
              We know a new water heater is usually an unexpected expense. That is why our family business offers highly competitive rates and flexible financing options to ensure you don't have to break the bank for a hot shower.
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
