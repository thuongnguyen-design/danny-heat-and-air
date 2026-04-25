import Head from "next/head";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/Service.module.css";

export default function ACRepair() {
  return (
    <>
      <Head>
        <title>AC Repair in {config.city} | Fast & Reliable | {config.siteName}</title>
        <meta name="description" content={`Beat the ${config.city} heat with fast, affordable AC repair from ${config.siteName}. We fix all makes and models with a price match guarantee.`} />
      </Head>

      <section className={`${styles.hero} ${styles.themeCool}`}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Cooling Services</span>
          <h1 className={styles.heroH1}>Expert AC Repair</h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>Fast, reliable relief when you need it most.</p>
        </div>
      </section>

      <section className={`${styles.mainLayout} ${styles.themeCool}`}>
        <div className={`container ${styles.grid}`}>
          
          <div className={styles.contentWrapper}>
            <h2>Don't Sweat a Broken AC</h2>
            <p>
              When the summer heat hits {config.city}, a broken air conditioner is more than just uncomfortable—it can be downright miserable. As a local, family-owned business, {config.siteName} is dedicated to restoring your home's comfort as quickly as possible.
            </p>
            <p>
              Our expert technicians arrive in fully-stocked trucks, ready to diagnose and fix most AC issues right on the spot. From blown capacitors to refrigerant leaks, we have the tools and experience to get the cold air flowing again.
            </p>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-blue-dk)" }}>Common Signs You Need AC Repair:</h3>
            <ul className={styles.benefitsList}>
              <li>• Blowing warm or room-temperature air</li>
              <li>• Weak airflow from your vents</li>
              <li>• Strange buzzing, rattling, or squealing noises</li>
              <li>• Ice building up on the outdoor or indoor coils</li>
              <li>• AC constantly running without cooling the house</li>
            </ul>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Honest Pricing, Zero Pressure</h3>
            <p>
              We believe in treating our neighbors right. Before we do any work, we will explain exactly what is wrong and give you a transparent price. Plus, with our <strong>Price Match Guarantee</strong>, you know you are always getting the best deal in town.
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
