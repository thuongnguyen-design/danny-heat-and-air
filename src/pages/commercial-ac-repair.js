import Head from "next/head";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/Service.module.css";

export default function CommercialACRepair() {
  return (
    <>
      <Head>
        <title>Commercial AC Repair in {config.city} | {config.siteName}</title>
        <meta name="description" content={`Commercial AC not cooling? ${config.siteName} provides fast commercial air conditioning repair in ${config.city}. Rooftop units, split systems, and more. Call ${config.phoneMain}.`} />
      </Head>

      <section className={`${styles.hero} ${styles.themeAir}`}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Commercial Services</span>
          <h1 className={styles.heroH1}>Commercial AC Repair</h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>Keep your business cool and your customers comfortable.</p>
        </div>
      </section>

      <section className={`${styles.mainLayout} ${styles.themeAir}`}>
        <div className={`container ${styles.grid}`}>

          <div className={styles.contentWrapper}>
            <h2>Your Business Can't Afford to Sweat</h2>
            <p>
              A broken commercial AC system means unhappy customers, uncomfortable employees, and lost productivity. At {config.siteName}, we understand the urgency and respond fast to get your commercial cooling back on track.
            </p>
            <p>
              Our technicians are trained on all types of commercial air conditioning equipment — from single rooftop units to multi-zone split systems. We diagnose accurately and carry the parts needed to complete most repairs on the first visit.
            </p>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Equipment We Service:</h3>
            <ul className={styles.benefitsList}>
              <li>• Rooftop package units (RTUs)</li>
              <li>• Commercial split systems</li>
              <li>• Multi-zone and VRF systems</li>
              <li>• Packaged terminal air conditioners (PTACs)</li>
              <li>• Exhaust and ventilation systems</li>
            </ul>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Common Signs of Trouble:</h3>
            <ul className={styles.benefitsList}>
              <li>• Uneven temperatures throughout your building</li>
              <li>• Unit running constantly but not cooling</li>
              <li>• Strange noises or odors from the system</li>
              <li>• Unexpected spikes in energy bills</li>
              <li>• Thermostat not responding properly</li>
            </ul>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Honest Service, Every Time</h3>
            <p>
              We give you a clear diagnosis and upfront pricing before starting any work. No surprise charges, no unnecessary upsells — just honest, reliable commercial AC repair from a family-owned company that treats your business like our own.
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
