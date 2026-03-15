import Head from "next/head";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/Service.module.css";

export default function Financing() {
  return (
    <>
      <Head>
        <title>HVAC Financing in {config.city} | {config.siteName}</title>
        <meta name="description" content={`Flexible HVAC financing options in ${config.city}. Upgrade your heating and air conditioning system today with low monthly payments from ${config.siteName}.`} />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Flexible Payment Plans</span>
          <h1 className={styles.heroH1}>HVAC Financing Options</h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>Get the comfort you need today, and pay over time.</p>
        </div>
      </section>

      <section className={styles.mainLayout}>
        <div className={`container ${styles.grid}`}>
          
          <div className={styles.contentWrapper}>
            <h2>Comfort Doesn't Have to Wait</h2>
            <p>
              At {config.siteName}, we understand that a sudden furnace breakdown or the need for a new air conditioning system is rarely planned. We don't want you to have to sacrifice your family's comfort just because an unexpected expense popped up.
            </p>
            <p>
              That is why we offer flexible, consumer-friendly financing options to help you break up the cost of a new HVAC installation or major repair into manageable monthly payments.
            </p>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-orange)" }}>Benefits of Financing with Us:</h3>
            <ul className={styles.benefitsList}>
              <li>• <strong>Fast Approvals:</strong> Get a decision in minutes so we can start your project immediately.</li>
              <li>• <strong>Low Monthly Payments:</strong> Options designed to fit comfortably within your family's budget.</li>
              <li>• <strong>No Hidden Fees:</strong> Transparent terms and straightforward agreements.</li>
              <li>• <strong>Keep Your Cash:</strong> Preserve your savings and emergency funds for when you really need them.</li>
            </ul>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>How It Works</h3>
            <p>
              Getting approved is quick and easy. Our technicians can walk you through the simple application process right at your kitchen table, or you can get pre-approved before we even arrive. 
            </p>
            <p>
              <strong>Ready to explore your options?</strong> Fill out the form on this page to request a free estimate and ask about our current financing specials!
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
