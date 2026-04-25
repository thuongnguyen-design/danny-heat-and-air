import Head from "next/head";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/Service.module.css";

export default function FurnaceMaintenance() {
  return (
    <>
      <Head>
        <title>Furnace Tune-Up & Maintenance in {config.city} | {config.siteName}</title>
        <meta name="description" content={`Prevent winter breakdowns and lower your energy bills with a professional furnace tune-up from ${config.siteName}.`} />
      </Head>

      <section className={`${styles.hero} ${styles.themeHeat}`}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Heating Services</span>
          <h1 className={styles.heroH1}>Furnace Tune-Up</h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>Preventative maintenance to keep your heater running flawlessly.</p>
        </div>
      </section>

      <section className={`${styles.mainLayout} ${styles.themeHeat}`}>
        <div className={`container ${styles.grid}`}>
          
          <div className={styles.contentWrapper}>
            <h2>Stop Breakdowns Before They Happen</h2>
            <p>
              Your furnace sits idle for most of the year in {config.city}. Firing it up for the first cold night without a proper inspection is the #1 cause of unexpected breakdowns. Regular maintenance is the most cost-effective way to protect your heating system.
            </p>
            <p>
              At {config.siteName}, our comprehensive heating tune-up ensures your system is safe, clean, and operating at peak efficiency. We catch small issues like worn sensors or dirty burners before they turn into expensive emergency repairs.
            </p>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-red)" }}>What Our Tune-Up Includes:</h3>
            <ul className={styles.benefitsList}>
              <li>• Carbon monoxide and gas leak safety checks</li>
              <li>• Cleaning and adjusting burner assemblies</li>
              <li>• Inspecting the heat exchanger for dangerous cracks</li>
              <li>• Testing ignition systems and safety controls</li>
              <li>• Replacing or cleaning standard air filters</li>
            </ul>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Schedule Your Tune-Up Today</h3>
            <p>
              A quick fall tune-up keeps your furnace running safely and efficiently all winter. Call us or request a service online — we'll get you on the schedule.
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
