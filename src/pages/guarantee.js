import Head from "next/head";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/Service.module.css";

export default function Guarantee() {
  return (
    <>
      <Head>
        <title>Our Guarantees | {config.siteName}</title>
        <meta name="description" content={`Read about the ${config.siteName} Price Match Guarantee and our commitment to customer satisfaction in ${config.city}.`} />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Our Promise To You</span>
          <h1 className={styles.heroH1}>The {config.siteName} Guarantee</h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>Honest work, transparent pricing, and unmatched reliability.</p>
        </div>
      </section>

      <section className={styles.mainLayout}>
        <div className={`container ${styles.grid}`}>
          
          <div className={styles.contentWrapper}>
            <h2>Why Trust {config.siteName}?</h2>
            <p>
              Inviting a contractor into your home requires trust. At {config.siteName}, we don't take that lightly. As a family-owned and operated business serving {config.city}, we believe in treating every customer like our own neighbor. That means no hidden fees, no aggressive sales tactics, and standing behind every job we do.
            </p>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-orange)" }}>1. The True Price Match Guarantee</h3>
            <p>
              We know the value of a hard-earned dollar. If you receive a written estimate from another licensed, bonded, and insured HVAC contractor in our service area, <strong>we will match it</strong>. You shouldn't have to choose between top-tier service and an affordable price.
            </p>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-orange)" }}>2. The "No Lemons" Guarantee</h3>
            <p>
              When we install a new heating or cooling system in your home, we do it by the book. If your compressor or heat exchanger fails within the first year of operation under normal use, we won't just replace the broken part—we will replace the entire unit at no cost to you.
            </p>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-orange)" }}>3. The Clean Home Guarantee</h3>
            <p>
              Our technicians are professionals. We guarantee that we will leave your home exactly as clean as we found it. We use drop cloths, wear shoe covers, and clean up our workspace completely before we consider the job done. 
            </p>

            <h3 style={{ marginTop: "40px", marginBottom: "15px", color: "var(--brand-navy)" }}>Experience the Difference</h3>
            <p>
              Ready to work with an HVAC company that puts you first? Fill out the form to book your service or request a free estimate today!
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
