import Head from "next/head";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/Service.module.css";

export default function FurnaceRepair() {
  return (
    <>
      <Head>
        <title>Furnace Repair in {config.city} | {config.siteName}</title>
        <meta name="description" content={`Fast, affordable, and reliable furnace repair in ${config.city}. Family-owned with a price match guarantee.`} />
      </Head>

      <section className={`${styles.hero} ${styles.themeHeat}`}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Heating Services</span>
          <h1 className={styles.heroH1}>Expert Furnace Repair</h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>Restoring your home's warmth fast, safely, and affordably.</p>
        </div>
      </section>

      <section className={`${styles.mainLayout} ${styles.themeHeat}`}>
        <div className={`container ${styles.grid}`}>
          
          {/* Left Column: Text & Selling Points */}
          <div className={styles.contentWrapper}>
            <h2>Don't Stay in the Cold</h2>
            <p>
              When your furnace stops working in the middle of a {config.city} winter night, you need a team you can rely on. As a family-owned business, {config.siteName} understands that a broken heater isn't just an inconvenience—it is a comfort emergency.
            </p>
            <p>
              Our expert technicians are trained to diagnose and repair all major makes and models. We carry fully stocked trucks to ensure that most heating repairs can be completed on the very first visit. 
            </p>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-red)" }}>Signs You Need Furnace Repair:</h3>
            <ul className={styles.benefitsList}>
              <li>• Unusual noises (banging, squealing, or rattling)</li>
              <li>• Blowing cold air instead of warm air</li>
              <li>• Frequent cycling on and off</li>
              <li>• Unexplained spikes in your energy bill</li>
              <li>• Strange burning smells or gas odors</li>
            </ul>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Our Family Guarantee</h3>
            <p>
              We don't believe in aggressive sales tactics or hidden fees. We will provide a transparent diagnosis, upfront pricing, and our signature <strong>Price Match Guarantee</strong> before any work begins.
            </p>
          </div>

          {/* Right Column: Sticky Lead Form */}
          <div className={styles.formSidebar}>
            <QuoteForm />
          </div>

        </div>
      </section>
    </>
  );
}
