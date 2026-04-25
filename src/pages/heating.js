import Head from "next/head";
import Link from "next/link";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/Service.module.css";

export default function Heating() {
  return (
    <>
      <Head>
        <title>Heating Services in {config.city} | {config.siteName}</title>
        <meta name="description" content={`Complete heating services in ${config.city}, including furnace repair, installation, and maintenance.`} />
      </Head>

      <section className={`${styles.hero} ${styles.themeHeat}`}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Category Overview</span>
          <h1 className={styles.heroH1}>Heating Services</h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>Comprehensive solutions to keep your home warm and safe.</p>
        </div>
      </section>

      <section className={`${styles.mainLayout} ${styles.themeHeat}`}>
        <div className={`container ${styles.grid}`}>
          
          <div className={styles.contentWrapper}>
            <h2>Complete Heating Solutions</h2>
            <p>
              At {config.siteName}, we provide end-to-end heating solutions for homeowners in {config.city}. Whether your furnace has completely broken down, or you are looking to upgrade to a high-efficiency system, our family-owned team is ready to help.
            </p>
            
            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-red)" }}>Explore Our Heating Services:</h3>
            <ul className={styles.benefitsList}>
              <li>• <Link href="/furnace-repair" style={{color: "var(--brand-navy)", fontWeight: "bold"}}>Furnace Repair</Link> - Fast, reliable fixes for all makes and models.</li>
              <li>• <Link href="/furnace-installation" style={{color: "var(--brand-navy)", fontWeight: "bold"}}>Furnace Installation</Link> - Energy-efficient upgrades with competitive pricing.</li>
              <li>• <Link href="/furnace-maintenance" style={{color: "var(--brand-navy)", fontWeight: "bold"}}>Furnace Tune-Ups</Link> - Preventative maintenance to stop breakdowns.</li>
              <li>• <Link href="/thermostats" style={{color: "var(--brand-navy)", fontWeight: "bold"}}>Thermostats</Link> - Smart home integration for ultimate comfort control.</li>
              <li>• <Link href="/duct-cleaning" style={{color: "var(--brand-navy)", fontWeight: "bold"}}>Ductwork</Link> - Sealing and repairs to ensure even heating.</li>
            </ul>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Why Choose {config.siteName}?</h3>
            <p>
              We bring transparency, fair pricing, and a true Price Match Guarantee to every job. Fill out the form to schedule a service or get a free estimate!
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
