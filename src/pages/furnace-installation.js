import Head from "next/head";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/Service.module.css";

export default function FurnaceInstallation() {
  return (
    <>
      <Head>
        <title>Furnace Installation & Replacement | {config.siteName}</title>
        <meta name="description" content={`Upgrade to a high-efficiency furnace with ${config.siteName} in ${config.city}. Free estimates and competitive pricing!`} />
      </Head>

      <section className={`${styles.hero} ${styles.themeHeat}`}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Heating Services</span>
          <h1 className={styles.heroH1}>Furnace Installation</h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>Upgrade to reliable, energy-efficient comfort.</p>
        </div>
      </section>

      <section className={`${styles.mainLayout} ${styles.themeHeat}`}>
        <div className={`container ${styles.grid}`}>
          
          <div className={styles.contentWrapper}>
            <h2>Time for a Heating Upgrade?</h2>
            <p>
              No furnace lasts forever. If your current system is over 10-15 years old, requiring frequent repairs, or struggling to keep your home warm, it might be more cost-effective to replace it rather than continuing to patch it up.
            </p>
            <p>
              At {config.siteName}, we specialize in installing high-efficiency heating systems tailored to the exact size and needs of your home in {config.city}. A new system doesn't just improve your comfort; it can significantly lower your monthly energy bills.
            </p>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-red)" }}>Why Choose Us for Installation?</h3>
            <ul className={styles.benefitsList}>
              <li>• Free, no-pressure replacement estimates</li>
              <li>• We Match Any Competitor's Price</li>
              <li>• Clean, respectful, and uniformed installers</li>
              <li>• We haul away your old system for free</li>
            </ul>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Protecting Your Investment</h3>
            <p>
              A furnace is only as good as the team that installs it. Improper installation is the leading cause of premature breakdowns. Our licensed professionals ensure every duct, wire, and pipe is perfectly calibrated for maximum efficiency and longevity.
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
