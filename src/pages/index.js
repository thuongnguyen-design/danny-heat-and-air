import Head from "next/head";
import Link from "next/link";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import styles from "@/styles/Home.module.css";

const VALUES = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
    ),
    title: "Family-Owned & Operated",
    body: "We're not a faceless corporation — we're your neighbors. As a local family business, we treat every home like our own and every customer like family.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
    ),
    title: "Price Match Guarantee",
    body: "Found a lower price? We'll match it. We refuse to be beaten on price and will confidently match any local company's quote — guaranteed.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    ),
    title: "Most Competitive Rates",
    body: "The best prices in Stockton — period. Our low overhead as a family business means we pass the savings to you with the most competitive service fees in town.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
    ),
    title: "Loyalty Discounts",
    body: "Returning customers get exclusive pricing on every visit. It's our way of saying thanks for choosing us again.",
  },
];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{config.siteName} | HVAC Experts in {config.city}, {config.state}</title>
        <meta
          name="description"
          content={`${config.siteName} — professional heating, air conditioning, and duct cleaning in ${config.city}, ${config.state}. Same-day service. Call ${config.phoneMain}.`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HVACBusiness",
              "name": config.siteName,
              "telephone": config.phoneMain,
              "email": config.email,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": config.city,
                "addressRegion": config.state,
              },
              "openingHours": "Mo-Su 09:00-22:00",
              "priceRange": "$$",
            }),
          }}
        />
      </Head>

      <section className={styles.hero} aria-label="Hero">
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroLeft}>
            <span className={styles.heroLabel}>
              <span className={styles.heroLabelBar}></span> Family-Owned &amp; Operated
            </span>
            <h1 className={styles.heroH1}>
              Your Home's<br />Perfect Climate
            </h1>
            <p className={styles.heroSub}>
              Stockton's trusted family HVAC experts. We offer the most competitive
              prices in town, match any company's quote, and reward loyal customers
              with exclusive discounts.
            </p>
            <div className={styles.heroCtas}>
              <a
                href={`tel:${config.phoneMain.replace(/\D/g, "")}`}
                className="btn btn-primary"
              >
                <i className="fa-solid fa-phone"></i> Call Now
              </a>
              <Link href="/contact-us" className="btn btn-secondary">
                Request a Service
              </Link>
            </div>
          </div>
          <div className={styles.heroForm}>
            <QuoteForm compact />
          </div>
        </div>
      </section>

      <TrustBadges />

      <section className={`section ${styles.servicesSection}`} aria-labelledby="services-heading">
        <div className="container">
          <div className={`${styles.servicesSectionHead} reveal`}>
            <span className={styles.servicesLabel}>Our Best Services</span>
            <h2 id="services-heading" className={styles.servicesH2}>
              Heating &amp; Cooling Solutions
            </h2>
            <p className={styles.servicesSub}>
              We handle everything from routine maintenance to emergency repairs and
              full system replacements — keeping your home comfortable year-round.
            </p>
            <hr className={styles.servicesDivider} />
          </div>

          <div className={`${styles.servicesGrid} reveal-stagger`}>
            {config.services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/${svc.slug}`}
                className={`${styles.serviceCard} ${svc.category === "heating" ? styles.serviceCardHeat : styles.serviceCardCool}`}
              >
                <div className={styles.svcIcon}>
                  <i className={svc.faIcon}></i>
                </div>
                <h3 className={styles.svcTitle}>{svc.title}</h3>
                <p className={styles.svcTag}>{svc.tagline}</p>
                <span className={styles.svcLink}>Read More <i className="fa-solid fa-arrow-right"></i></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.whySection}`} aria-labelledby="why-heading">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={`section-label ${styles.lightLabel}`}>Why Choose Us</span>
            <h2 id="why-heading" className="section-title" style={{ color: "#fff" }}>
              Relax, We've Got Your Comfort Covered
            </h2>
          </div>
          <div className={`${styles.valuesGrid} reveal-stagger`}>
            {VALUES.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueIcon} style={{ color: "var(--brand-blue)" }}>{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
          <div className={styles.whyCtas}>
            <Link href="/contact-us" className="btn btn-secondary">Request a Service</Link>
            <a
              href={`tel:${config.phoneMain.replace(/\D/g, "")}`}
              className="btn btn-outline"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <section className={`section-sm ${styles.areasSection}`}>
        <div className="container text-center reveal">
          <span className="section-label" style={{ color: 'var(--brand-blue-dk)' }}>Where We Work</span>
          <h2 className="section-title" style={{ color: "var(--brand-navy)", marginTop: 8 }}>
            Areas We Serve
          </h2>
          <div className={styles.areasList}>
            {config.serviceAreas.map((area) => (
              <Link
                key={area}
                href={`/areas-we-serve/hvac-repair-in-${area.toLowerCase()}`}
                className={styles.areaChip}
              >
                {area}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.finalCta}`} aria-label="Call to action">
        <div className={`container text-center ${styles.finalCtaInner} reveal`}>
          <h2>Ready to Experience Lasting Home Comfort?</h2>
          <p>
            From quick repairs to full system replacements, we're here every day
            from 9AM to 10PM. Get a fast, no-pressure quote and see why your
            neighbors call us first.
          </p>
          <div className={styles.finalCtaBtns}>
            <a
              href={`tel:${config.phoneMain.replace(/\D/g, "")}`}
              className="btn btn-primary"
            >
              <i className="fa-solid fa-phone"></i> Call Now
            </a>
            <Link href="/contact-us" className="btn btn-secondary">
              Request a Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
