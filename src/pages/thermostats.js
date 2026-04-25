import Head from "next/head";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/Service.module.css";

export default function Thermostats() {
  return (
    <>
      <Head>
        <title>Smart Thermostat Installation | {config.siteName}</title>
        <meta name="description" content={`Upgrade your home's comfort with a smart WiFi thermostat installed by the experts at ${config.siteName}.`} />
      </Head>

      <section className={`${styles.hero} ${styles.themeHeat}`}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Heating Services</span>
          <h1 className={styles.heroH1}>Thermostat Services</h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>Upgrade your home's brain for ultimate comfort and efficiency.</p>
        </div>
      </section>

      <section className={`${styles.mainLayout} ${styles.themeHeat}`}>
        <div className={`container ${styles.grid}`}>
          
          <div className={styles.contentWrapper}>
            <h2>Take Control of Your Comfort</h2>
            <p>
              Your thermostat is the command center of your HVAC system. If it is outdated, miscalibrated, or broken, your furnace and AC will never run efficiently—no matter how new they are. 
            </p>
            <p>
              {config.siteName} can help you troubleshoot a stubborn thermostat or seamlessly upgrade your home to the latest smart Wi-Fi models. We handle the complex wiring so you don't have to guess.
            </p>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-red)" }}>Why Upgrade to a Smart Thermostat?</h3>
            <ul className={styles.benefitsList}>
              <li>• Control your home's temperature from your smartphone anywhere</li>
              <li>• Automatically adjust temps when you leave to save energy</li>
              <li>• Track your energy usage and get maintenance reminders</li>
              <li>• Compatible with smart home hubs like Alexa and Google Home</li>
              <li>• We install major brands like Nest, Ecobee, and Honeywell</li>
            </ul>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Blank Screen?</h3>
            <p>
              If your thermostat is blank or unresponsive, don't panic. It might just be a blown fuse or a wiring issue at the furnace control board. Book a service call today and our technicians will track down the exact electrical issue.
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
