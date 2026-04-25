import Head from "next/head";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/Service.module.css";

export default function MiniSplits() {
  return (
    <>
      <Head>
        <title>Ductless Mini Splits | Installation & Repair | {config.siteName}</title>
        <meta name="description" content={`Experience ultra-efficient, whisper-quiet zone cooling with a ductless mini split system from ${config.siteName}.`} />
      </Head>

      <section className={`${styles.hero} ${styles.themeCool}`}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Cooling Services</span>
          <h1 className={styles.heroH1}>Ductless Mini Splits</h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>Targeted comfort without the need for ductwork.</p>
        </div>
      </section>

      <section className={`${styles.mainLayout} ${styles.themeCool}`}>
        <div className={`container ${styles.grid}`}>
          
          <div className={styles.contentWrapper}>
            <h2>Custom Comfort for Every Room</h2>
            <p>
              Do you have a room that is always too hot, an uninsulated garage, or an older home without ductwork? A ductless mini split system is the perfect solution. These ultra-efficient systems provide targeted cooling (and heating!) exactly where you need it.
            </p>
            <p>
              Unlike traditional central AC, mini splits operate on a "zone" system. This means you can cool the living room during the day without wasting energy cooling the bedrooms, putting you in total control of your comfort and utility bills.
            </p>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-blue-dk)" }}>Why Choose a Mini Split?</h3>
            <ul className={styles.benefitsList}>
              <li>• Quick and minimally invasive installation (no major construction)</li>
              <li>• Whisper-quiet operation indoors and outdoors</li>
              <li>• Unmatched energy efficiency (some of the highest SEER ratings available)</li>
              <li>• Built-in heating capabilities for year-round comfort</li>
              <li>• Perfect for home additions, sunrooms, and converted garages</li>
            </ul>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Mini Split Repair & Service</h3>
            <p>
              Already have a ductless system? Our skilled technicians can handle routine maintenance, deep cleanings, and complex repairs to keep your mini split operating perfectly. 
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
