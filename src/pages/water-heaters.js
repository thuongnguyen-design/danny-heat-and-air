import Head from "next/head";
import Link from "next/link";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/Service.module.css";

export default function WaterHeatersOverview() {
  return (
    <>
      <Head>
        <title>Water Heater Services in {config.city} | {config.siteName}</title>
        <meta name="description" content={`Water heater repair, tank replacement, and tankless upgrades in ${config.city}. Expert service by ${config.siteName}.`} />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Category Overview</span>
          <h1 className={styles.heroH1}>Water Heater Services</h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>Reliable hot water solutions for your family.</p>
        </div>
      </section>

      <section className={styles.mainLayout}>
        <div className={`container ${styles.grid}`}>
          
          <div className={styles.contentWrapper}>
            <h2>End the Cold Showers</h2>
            <p>
              Your water heater works 24/7/365 to keep your home comfortable. When it fails, you need a team that acts fast. {config.siteName} specializes in traditional tank water heaters and modern tankless systems.
            </p>
            
            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-orange)" }}>Explore Our Hot Water Services:</h3>
            <ul className={styles.benefitsList}>
              <li>• <Link href="/water-heater-repair" style={{color: "var(--brand-navy)", fontWeight: "bold"}}>Water Heater Repair</Link> - Fixing leaks, pilot lights, and heating elements.</li>
              <li>• <Link href="/water-heater-replacement" style={{color: "var(--brand-navy)", fontWeight: "bold"}}>Water Heater Replacement</Link> - Upgrading old, rusted tanks before they flood.</li>
              <li>• <Link href="/tankless-water-heaters" style={{color: "var(--brand-navy)", fontWeight: "bold"}}>Tankless Upgrades</Link> - Endless hot water and incredible energy savings.</li>
            </ul>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Get Your Free Estimate</h3>
            <p>
              Whether you need a quick repair or a total upgrade, fill out our form for a free, no-obligation quote. 
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
