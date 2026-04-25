import Head from "next/head";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/Service.module.css";

export default function WaterHeaterRepair() {
  return (
    <>
      <Head>
        <title>Water Heater Repair in {config.city} | {config.siteName}</title>
        <meta name="description" content={`No hot water? Leaking tank? Get fast water heater repair in ${config.city} from the family-owned experts at ${config.siteName}.`} />
      </Head>

      <section className={`${styles.hero} ${styles.themeWater}`}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Plumbing & Heating</span>
          <h1 className={styles.heroH1}>Water Heater Repair</h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>Fast, reliable relief for cold showers and leaky tanks.</p>
        </div>
      </section>

      <section className={`${styles.mainLayout} ${styles.themeWater}`}>
        <div className={`container ${styles.grid}`}>
          
          <div className={styles.contentWrapper}>
            <h2>Bring Back the Hot Water</h2>
            <p>
              There is nothing worse than stepping into the shower only to be hit by freezing cold water. Whether your pilot light won't stay lit, your heating element failed, or you're running out of hot water too quickly, {config.siteName} is here to help.
            </p>
            <p>
              Our expert technicians arrive fast and carry the parts needed to fix most standard gas and electric water heaters on the very first visit. We diagnose the issue honestly and give you a flat-rate price before any work begins.
            </p>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-blue-dk)" }}>Signs Your Water Heater Needs Repair:</h3>
            <ul className={styles.benefitsList}>
              <li>• Water is lukewarm or goes cold rapidly</li>
              <li>• Rumbling, popping, or banging noises from the tank</li>
              <li>• Rusty, discolored, or foul-smelling hot water</li>
              <li>• Small puddles or moisture around the base of the unit</li>
              <li>• The pilot light keeps going out</li>
            </ul>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Repair vs. Replace</h3>
            <p>
              If your water heater is relatively new, a simple repair is usually the best route. However, if we find that your tank is severely rusted or cracked, we will honestly advise you on replacement options using our Price Match Guarantee.
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
