import Head from "next/head";
import Link from "next/link";
import config from "@/lib/config";
import styles from "@/styles/About.module.css";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | {config.siteName}</title>
        <meta name="description" content={`Learn about ${config.siteName}, a family-owned HVAC company serving ${config.city} with competitive pricing and price-match guarantees.`} />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Our Story</span>
          <h1 className={styles.heroH1}>About {config.siteName}</h1>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className={`container reveal`}>
          <div className={styles.storyText}>
            <h2>Your Local {config.city} HVAC Family</h2>
            <p>
              At {config.siteName}, we believe that staying comfortable in your own home shouldn't cost a fortune. As a family-owned and operated business, we know the value of a hard-earned dollar. That's why we've built our company on transparency, integrity, and treating every customer like a neighbor.
            </p>
            <p>
              We grew tired of seeing large corporate HVAC companies overcharging our community for basic repairs and installations. We decided to do things differently. When you call us, you get straight answers, honest assessments, and the most competitive service fees in town.
            </p>
            <p>
              <strong>We are proud to offer a true Price Match Guarantee.</strong> If you find a better price from another licensed local company, we won't just match it—we'll deliver superior service to prove why we should be your HVAC company for life.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.guaranteeBanner}>
        <div className="container reveal">
          <h2>The {config.siteName} Promise</h2>
          <p>We don't just want to fix your AC today; we want to be the team you trust ten years from now. That is why we reward our returning customers with exclusive loyalty discounts on tune-ups, repairs, and system replacements.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
            <Link href="/contact-us" className="btn btn-primary">
              Book Service Now
            </Link>
            <a href={`tel:${config.phoneMain.replace(/\D/g, "")}`} className="btn btn-outline" style={{ borderColor: "#fff", color: "#fff" }}>
              Call {config.phoneMain}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
