import Head from "next/head";
import Link from "next/link";
import config from "@/lib/config";
import styles from "@/styles/Areas.module.css";

const AREA_DETAILS = {
  Stockton: "Our home base — fast response times and deep community roots in Stockton.",
  Lodi: "Serving Lodi families with reliable HVAC repair, installation, and maintenance.",
  Manteca: "Keeping Manteca homes comfortable with expert heating and cooling services.",
  Tracy: "Professional HVAC solutions for Tracy homeowners — just a short drive away.",
  Modesto: "Extending our trusted service to Modesto and the greater Stanislaus County area.",
  Galt: "Reliable heating and air conditioning service for Galt and south Sacramento County.",
};

export default function AreasWeServe() {
  return (
    <>
      <Head>
        <title>Areas We Serve | {config.siteName}</title>
        <meta
          name="description"
          content={`${config.siteName} provides professional HVAC services in ${config.serviceAreas.join(", ")} and surrounding communities. Call ${config.phoneMain}.`}
        />
      </Head>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>
            Service Coverage <span className={styles.heroLabelBar}></span>
          </span>
          <h1 className={styles.heroH1}>Areas We Serve</h1>
          <p className={styles.heroSub}>
            Proudly serving {config.city} and the surrounding Central Valley
            communities with professional heating, cooling, and indoor air quality services.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className={styles.areasIndex}>
        <div className="container">
          <div className={`${styles.sectionHead} reveal`}>
            <span className="section-label">Our Coverage Area</span>
            <h2 className="section-title">Communities We Proudly Serve</h2>
          </div>

          <div className={`${styles.areasGrid} reveal-stagger`}>
            {config.serviceAreas.map((area) => (
              <Link
                key={area}
                href={`/areas-we-serve/hvac-repair-in-${area.toLowerCase()}`}
                className={styles.areaCard}
              >
                <div className={styles.areaCardIcon}>
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <h3 className={styles.areaCardName}>{area}</h3>
                <p className={styles.areaCardDesc}>
                  {AREA_DETAILS[area] || `Professional HVAC services for ${area} homeowners.`}
                </p>
                <span className={styles.areaCardLink}>
                  View Services <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={`container text-center ${styles.ctaInner} reveal`}>
          <h2>Don't See Your Area?</h2>
          <p>
            We may still be able to help. Give us a call and we'll let you know
            if we can service your location.
          </p>
          <div className={styles.ctaBtns}>
            <Link href="/contact-us" className="btn btn-primary">
              Contact Us
            </Link>
            <a
              href={`tel:${config.phoneMain.replace(/\D/g, "")}`}
              className="btn btn-dark"
            >
              <i className="fa-solid fa-phone"></i> Call {config.phoneMain}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
