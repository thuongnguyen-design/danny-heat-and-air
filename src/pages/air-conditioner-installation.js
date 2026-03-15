import Head from "next/head";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/Service.module.css";

export default function ACInstallation() {
  return (
    <>
      <Head>
        <title>AC Replacement & Installation | {config.siteName}</title>
        <meta name="description" content={`Upgrade to a high-efficiency air conditioner with ${config.siteName}. Enjoy lower energy bills and superior comfort in ${config.city}.`} />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Cooling Services</span>
          <h1 className={styles.heroH1}>AC Replacement</h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>Upgrade to reliable, energy-efficient cooling.</p>
        </div>
      </section>

      <section className={styles.mainLayout}>
        <div className={`container ${styles.grid}`}>
          
          <div className={styles.contentWrapper}>
            <h2>Time to Upgrade Your Cooling?</h2>
            <p>
              If your air conditioner is over 10-15 years old, uses outdated R-22 Freon, or needs frequent repairs, it might be time for a replacement. Older units struggle to keep up with {config.city} summers and drain your wallet with high energy bills.
            </p>
            <p>
              At {config.siteName}, we install top-tier, high-efficiency cooling systems designed to beat the heat while saving you money. We precisely calculate your home's cooling load so you get a system perfectly sized for your needs—no guessing involved.
            </p>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-orange)" }}>Benefits of a New AC System:</h3>
            <ul className={styles.benefitsList}>
              <li>• Significantly lower monthly utility bills</li>
              <li>• Quieter operation inside and outside your home</li>
              <li>• Better humidity control and indoor air quality</li>
              <li>• Peace of mind with a comprehensive manufacturer warranty</li>
              <li>• Eco-friendly refrigerants that are safer for the environment</li>
            </ul>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Affordable Comfort</h3>
            <p>
              A new AC is a big investment, but we make it easy. We offer flexible financing options and will gladly price match any local competitor. Let us help you find the perfect system for your budget.
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
