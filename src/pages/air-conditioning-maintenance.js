import Head from "next/head";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/Service.module.css";

export default function ACMaintenance() {
  return (
    <>
      <Head>
        <title>AC Tune-Up & Maintenance in {config.city} | {config.siteName}</title>
        <meta name="description" content={`Get your AC ready for summer! Prevent breakdowns and maximize efficiency with a professional AC tune-up from ${config.siteName}.`} />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Cooling Services</span>
          <h1 className={styles.heroH1}>AC Tune-Up & Maintenance</h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>Keep your system running smoothly all summer long.</p>
        </div>
      </section>

      <section className={styles.mainLayout}>
        <div className={`container ${styles.grid}`}>
          
          <div className={styles.contentWrapper}>
            <h2>Prepare for the Summer Heat</h2>
            <p>
              The worst time to find out your AC is broken is on the hottest day of the year. Regular preventative maintenance is the absolute best way to extend the lifespan of your equipment and keep your energy bills low.
            </p>
            <p>
              A professional AC tune-up from {config.siteName} restores your system to peak efficiency. A clean, well-lubricated, and fully charged air conditioner doesn't have to work as hard, which saves you money every single month.
            </p>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-orange)" }}>What Our AC Tune-Up Includes:</h3>
            <ul className={styles.benefitsList}>
              <li>• Checking and optimizing refrigerant (Freon) levels</li>
              <li>• Cleaning the outdoor condenser coils to improve airflow</li>
              <li>• Inspecting electrical connections and testing capacitors</li>
              <li>• Clearing the condensate drain line to prevent water damage</li>
              <li>• Calibrating the thermostat for accurate cooling</li>
            </ul>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Never Forget a Tune-Up</h3>
            <p>
              Join our Annual Maintenance Plan to get your AC tune-up automatically scheduled every spring. Members also enjoy priority service and exclusive discounts on repairs!
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
