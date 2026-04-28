import Head from "next/head";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/Service.module.css";

export default function CommercialHVACInstallation() {
  return (
    <>
      <Head>
        <title>Commercial HVAC Installation in {config.city} | {config.siteName}</title>
        <meta name="description" content={`Need a new commercial HVAC system? ${config.siteName} designs and installs commercial heating and cooling systems in ${config.city}. Call ${config.phoneMain} for a free estimate.`} />
      </Head>

      <section className={`${styles.hero} ${styles.themeAir}`}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Commercial Services</span>
          <h1 className={styles.heroH1}>Commercial HVAC Installation</h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>Right-sized systems designed for your business.</p>
        </div>
      </section>

      <section className={`${styles.mainLayout} ${styles.themeAir}`}>
        <div className={`container ${styles.grid}`}>

          <div className={styles.contentWrapper}>
            <h2>Built for Your Business, Not a Cookie-Cutter Solution</h2>
            <p>
              Commercial spaces have very different heating and cooling demands than homes. Square footage, ceiling height, occupancy, equipment heat loads, and ventilation requirements all factor into the right system for your building. At {config.siteName}, we take all of this into account.
            </p>
            <p>
              We work with you from the initial load calculation through final startup to ensure your new system is properly sized, efficiently installed, and ready to perform for years to come.
            </p>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>What We Install:</h3>
            <ul className={styles.benefitsList}>
              <li>• Rooftop package units (RTUs)</li>
              <li>• Commercial split systems</li>
              <li>• Multi-zone and VRF/VRV systems</li>
              <li>• Warehouse and shop heating units</li>
              <li>• Make-up air units and ventilation systems</li>
            </ul>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Our Installation Process:</h3>
            <ul className={styles.benefitsList}>
              <li>• On-site survey and commercial load calculation</li>
              <li>• Equipment selection matched to your budget and needs</li>
              <li>• Professional installation by licensed technicians</li>
              <li>• Full system testing and commissioning</li>
              <li>• Manufacturer warranty registration and walkthrough</li>
            </ul>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Invest in Efficiency</h3>
            <p>
              A properly sized and installed commercial HVAC system pays for itself through lower energy bills and fewer emergency repairs. Let {config.siteName} help you make a smart investment in your building's comfort and your business's bottom line.
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
