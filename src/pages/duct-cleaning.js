import Head from "next/head";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/Service.module.css";

export default function Ductwork() {
  return (
    <>
      <Head>
        <title>Ductwork Repair & Installation | {config.siteName}</title>
        <meta name="description" content={`Improve airflow, eliminate hot spots, and lower energy bills with professional ductwork services in ${config.city}.`} />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Heating Services</span>
          <h1 className={styles.heroH1}>Ductwork Services</h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>Breathe easier and improve your system's airflow.</p>
        </div>
      </section>

      <section className={styles.mainLayout}>
        <div className={`container ${styles.grid}`}>
          
          <div className={styles.contentWrapper}>
            <h2>The Lungs of Your Home</h2>
            <p>
              You can have the most expensive, high-efficiency HVAC system in the world, but if your ductwork is leaky, crushed, or improperly sized, you are quite literally blowing your money into your attic.
            </p>
            <p>
              At {config.siteName}, we look at the whole picture. We provide comprehensive duct testing, sealing, repair, and complete ductwork replacement to ensure the air you pay to heat and cool actually reaches your living spaces.
            </p>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-orange)" }}>Signs You Have Bad Ductwork:</h3>
            <ul className={styles.benefitsList}>
              <li>• Hot and cold spots in different rooms</li>
              <li>• Unusually dusty home despite regular cleaning</li>
              <li>• High energy bills caused by air escaping into the attic</li>
              <li>• Rattling or whistling noises when the system is on</li>
              <li>• Strange odors circulating through the vents</li>
            </ul>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Stop Paying to Heat the Attic</h3>
            <p>
              According to the Department of Energy, a typical home loses up to 30% of its conditioned air through leaky ducts. Let our family-owned team inspect, seal, and insulate your ductwork so you can stop wasting energy and start enjoying even temperatures in every room.
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
