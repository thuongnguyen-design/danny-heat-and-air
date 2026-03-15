import Head from "next/head";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/Service.module.css";

export default function Memberships() {
  return (
    <>
      <Head>
        <title>Annual Maintenance & VIP Plan | {config.siteName}</title>
        <meta name="description" content={`Join the ${config.siteName} Family Plan for annual HVAC tune-ups, priority service, and exclusive loyalty discounts in ${config.city}.`} />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Protect Your Home</span>
          <h1 className={styles.heroH1}>The {config.siteName} Family Plan</h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>Annual maintenance made easy, affordable, and stress-free.</p>
        </div>
      </section>

      <section className={styles.mainLayout}>
        <div className={`container ${styles.grid}`}>
          
          <div className={styles.contentWrapper}>
            <h2>Comfort You Can Count On</h2>
            <p>
              Your HVAC system is the most expensive appliance in your home. Just like your car needs regular oil changes, your heating and cooling system needs annual tune-ups to survive the extreme weather in {config.city}.
            </p>
            <p>
              We created the <strong>{config.siteName} Family Plan</strong> to take the guesswork out of home maintenance. For one low annual price, we automatically handle your Spring AC tune-up and your Fall Furnace tune-up, ensuring your system is safe and efficient year-round.
            </p>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-orange)" }}>Exclusive Member Benefits:</h3>
            <ul className={styles.benefitsList}>
              <li>• <strong>Two Annual Tune-Ups:</strong> One for cooling, one for heating.</li>
              <li>• <strong>Priority Scheduling:</strong> Skip the line during busy summer and winter rushes.</li>
              <li>• <strong>Loyalty Discounts:</strong> Enjoy a 15% discount on all parts and repair services.</li>
              <li>• <strong>No Emergency Fees:</strong> Never pay overtime rates for after-hours emergency calls.</li>
              <li>• <strong>Extended Lifespan:</strong> Regular maintenance doubles the life of your equipment.</li>
            </ul>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Join the Family Today</h3>
            <p>
              Stop worrying about sudden breakdowns and start saving money on your utility bills. Fill out the form to request more information or to sign up for your Annual Maintenance membership today!
            </p>
          </div>

          <div className={styles.formSidebar}>
            {/* Using the QuoteForm here so they can easily ask about the plan */}
            <QuoteForm />
          </div>

        </div>
      </section>
    </>
  );
}
