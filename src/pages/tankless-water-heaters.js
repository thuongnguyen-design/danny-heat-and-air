import Head from "next/head";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/Service.module.css";

export default function Tankless() {
  return (
    <>
      <Head>
        <title>Tankless Water Heater Installation | {config.siteName}</title>
        <meta name="description" content={`Get endless hot water and save space with a high-efficiency tankless water heater from ${config.siteName}.`} />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Plumbing & Heating</span>
          <h1 className={styles.heroH1}>Tankless Upgrades</h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>Endless hot water, exactly when you need it.</p>
        </div>
      </section>

      <section className={styles.mainLayout}>
        <div className={`container ${styles.grid}`}>
          
          <div className={styles.contentWrapper}>
            <h2>Never Run Out of Hot Water Again</h2>
            <p>
              Tired of being the last one in the shower and getting stuck with freezing water? A tankless water heater completely eliminates that problem. By heating water on-demand as it flows through the unit, you get a continuous, endless supply of hot water for showers, laundry, and dishes.
            </p>
            <p>
              Because tankless systems don't waste energy keeping 50 gallons of water hot 24/7, they are incredibly energy-efficient. {config.siteName} specializes in upgrading older homes in {config.city} to these modern, space-saving systems.
            </p>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-orange)" }}>The Tankless Advantage:</h3>
            <ul className={styles.benefitsList}>
              <li>• Endless hot water for large families and luxury showers</li>
              <li>• Massive space savings (mounts cleanly on the wall)</li>
              <li>• Up to 30% more energy-efficient than traditional tanks</li>
              <li>• Longer lifespan (can last 20+ years with maintenance)</li>
              <li>• Zero risk of a massive 50-gallon tank flooding your garage</li>
            </ul>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Is Tankless Right For You?</h3>
            <p>
              Tankless systems require specific gas line sizing and venting. Schedule a free estimate today, and our experts will evaluate your home to ensure a tankless upgrade is the perfect fit for your needs and budget.
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
