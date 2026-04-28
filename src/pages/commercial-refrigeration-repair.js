import Head from "next/head";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/Service.module.css";

export default function CommercialRefrigerationRepair() {
  return (
    <>
      <Head>
        <title>Commercial Refrigeration Repair in {config.city} | {config.siteName}</title>
        <meta name="description" content={`Fast commercial refrigeration repair in ${config.city}. Walk-in coolers, reach-in freezers, ice machines — ${config.siteName} keeps your business running. Call ${config.phoneMain}.`} />
      </Head>

      <section className={`${styles.hero} ${styles.themeAir}`}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Commercial Services</span>
          <h1 className={styles.heroH1}>Commercial Refrigeration Repair</h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>Protecting your inventory with fast, reliable service.</p>
        </div>
      </section>

      <section className={`${styles.mainLayout} ${styles.themeAir}`}>
        <div className={`container ${styles.grid}`}>

          <div className={styles.contentWrapper}>
            <h2>Don't Let Equipment Failure Cost You Thousands</h2>
            <p>
              When your walk-in cooler or freezer goes down, every hour counts. Spoiled inventory, health code violations, and lost revenue add up fast. At {config.siteName}, we respond quickly to commercial refrigeration emergencies so you can get back to business.
            </p>
            <p>
              Our technicians are experienced with all major commercial refrigeration brands and equipment types — from restaurant kitchens to convenience stores and warehouses. We diagnose the problem accurately and carry common parts to get your equipment running on the first visit whenever possible.
            </p>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Equipment We Service:</h3>
            <ul className={styles.benefitsList}>
              <li>• Walk-in coolers and freezers</li>
              <li>• Reach-in refrigerators and freezers</li>
              <li>• Ice machines and ice storage bins</li>
              <li>• Prep tables and refrigerated display cases</li>
              <li>• Commercial condensing units</li>
            </ul>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Signs You Need Service Now:</h3>
            <ul className={styles.benefitsList}>
              <li>• Unit not holding proper temperature</li>
              <li>• Unusual noises, frost buildup, or water leaks</li>
              <li>• Compressor cycling on and off frequently</li>
              <li>• Ice machine producing less ice than normal</li>
              <li>• Higher-than-normal energy bills from your equipment</li>
            </ul>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Why Choose {config.siteName}?</h3>
            <p>
              We understand that commercial equipment downtime directly impacts your bottom line. That's why we offer same-day emergency service, honest upfront pricing, and stand behind every repair. Whether it's a quick fix or a major component replacement, we treat your business like our own.
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
