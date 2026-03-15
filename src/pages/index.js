import Head from "next/head";
import Link from "next/link";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import styles from "@/styles/Home.module.css";

const VALUES = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    ),
    title: "24/7 Online Support",
    body: "Round-the-clock emergency service and customer support. We're always here when you need us most — day or night.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
    ),
    title: "Price Match Guarantee",
    body: "We refuse to be beaten on price. We will confidently match any local company's price to ensure you get the best deal possible.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    ),
    title: "Affordable Pricing",
    body: "As a local family business, we treat you like neighbors. We offer the most competitive quotes, prices, and service fees in town.",
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
              "openingHours": "Mo-Fr 07:00-18:00",
              "priceRange": "$$",
            }),
          }}
        />
      </Head>

      <section className={styles.hero} aria-label="Hero">
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroLeft}>
            <span className="section-label">
              Repairing Services
            </span>
            <h1 className={styles.heroH1}>
              Keeping You Cool<br />All Year Round
            </h1>
            <p className={styles.heroSub}>
              Professional HVAC solutions tailored to your comfort. From emergency
              repairs to seasonal maintenance, our certified technicians ensure your
              system runs at peak performance every day.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/contact-us" className="btn btn-primary">
                Book Service Now
              </Link>
              <a
                href={`tel:${config.phoneMain.replace(/\D/g, "")}`}
                className="btn btn-outline"
              >
                Call {config.phoneMain}
              </a>
            </div>
          </div>
          <div className={styles.heroForm}>
            <QuoteForm compact />
          </div>
        </div>
      </section>

      <TrustBadges />

      <section className="section" aria-labelledby="services-heading" style={{ background: 'var(--brand-cream)' }}>
        <div className="container">
          <div className={`${styles.sectionHead} reveal`}>
            <span className="section-label">Our Best Services</span>
            <h2 id="services-heading" className="section-title">
              Breathe Easy Air Quality Assessment
            </h2>
            <p className="section-sub">
              We handle everything from routine maintenance to emergency repairs and
              full system replacements — keeping your home comfortable year-round.
            </p>
          </div>

          <div className={`${styles.servicesGrid} reveal-stagger`}>
            {config.services.map((svc) => (
              <Link key={svc.slug} href={`/${svc.slug}`} className={styles.serviceCard}>
                <span className={styles.svcIcon}>{svc.icon}</span>
                <h3 className={styles.svcTitle}>{svc.title}</h3>
                <p className={styles.svcTag}>{svc.tagline}</p>
                <span className={styles.svcLink}>Read More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.whySection}`} aria-labelledby="why-heading">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="section-label" style={{ color: 'var(--brand-orange)' }}>Why Choose Us</span>
            <h2 id="why-heading" className="section-title" style={{ color: "#fff" }}>
              Relax, We've Got Your Air Climate Covered
            </h2>
          </div>
          <div className={`${styles.valuesGrid} reveal-stagger`}>
            {VALUES.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueIcon} style={{ color: "var(--brand-orange)" }}>{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
          <div className={styles.whyCtas}>
            <Link href="/contact-us" className="btn btn-primary">Book Service Now</Link>
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
          <span className="section-label" style={{ color: 'var(--brand-orange)' }}>Where We Work</span>
          <h2 className="section-title" style={{ color: "#fff", marginTop: 8 }}>
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
            Don't let HVAC issues disrupt your comfort. Contact {config.siteName} today
            for professional, reliable service you can trust.
          </p>
          <div className={styles.finalCtaBtns}>
            <Link href="/contact-us" className="btn btn-primary">
              Book Service Now
            </Link>
            <a
              href={`tel:${config.phoneMain.replace(/\D/g, "")}`}
              className="btn btn-dark"
            >
              Call {config.phoneMain}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
