import Head from "next/head";
import Link from "next/link";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/Service.module.css";

export default function AirConditioning() {
  return (
    <>
      <Head>
        <title>Air Conditioning Services in {config.city} | {config.siteName}</title>
        <meta name="description" content={`Expert air conditioning repair, installation, and maintenance in ${config.city}. Stay cool with ${config.siteName}.`} />
      </Head>

      <section className={`${styles.hero} ${styles.themeCool}`}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Category Overview</span>
          <h1 className={styles.heroH1}>Air Conditioning Services</h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>Keeping {config.city} cool all summer long.</p>
        </div>
      </section>

      <section className={`${styles.mainLayout} ${styles.themeCool}`}>
        <div className={`container ${styles.grid}`}>
          
          <div className={styles.contentWrapper}>
            <h2>Beat the Summer Heat</h2>
            <p>
              A reliable air conditioner is not a luxury in {config.city}—it's a necessity. From emergency weekend repairs to full system replacements, our technicians are trained to handle the toughest AC problems with speed and precision.
            </p>
            
            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-blue-dk)" }}>Explore Our Cooling Services:</h3>
            <ul className={styles.benefitsList}>
              <li>• <Link href="/air-conditioning-repair" style={{color: "var(--brand-navy)", fontWeight: "bold"}}>AC Repair</Link> - Rapid response to get the cold air flowing again.</li>
              <li>• <Link href="/air-conditioner-installation" style={{color: "var(--brand-navy)", fontWeight: "bold"}}>AC Replacement</Link> - High-efficiency systems perfectly sized for your home.</li>
              <li>• <Link href="/air-conditioning-maintenance" style={{color: "var(--brand-navy)", fontWeight: "bold"}}>AC Maintenance</Link> - Annual tune-ups to extend the life of your unit.</li>
              <li>• <Link href="/mini-splits" style={{color: "var(--brand-navy)", fontWeight: "bold"}}>Mini Splits</Link> - Ductless zone cooling for customized comfort.</li>
            </ul>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Our Promise to You</h3>
            <p>
              No high-pressure sales. No hidden fees. Just honest work and reliable cooling when you need it most. Use the form to book your service today!
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
