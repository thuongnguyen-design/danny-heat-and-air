import Head from "next/head";
import Link from "next/link";
import config from "@/lib/config";
import styles from "@/styles/Services.module.css";

const CATEGORIES = [
  {
    title: "Heating Services",
    desc: "Keep your home warm and safe all winter with our expert heating solutions.",
    faIcon: "fa-solid fa-fire-flame-curved",
    slug: "heating",
    links: [
      { label: "Furnace Repair", href: "/furnace-repair" },
      { label: "Furnace Installation", href: "/furnace-installation" },
      { label: "Furnace Maintenance", href: "/furnace-maintenance" },
      { label: "Thermostats", href: "/thermostats" },
    ],
  },
  {
    title: "Air Conditioning",
    desc: "Stay cool and comfortable with reliable AC repair, installation, and maintenance.",
    faIcon: "fa-solid fa-snowflake",
    slug: "cooling",
    links: [
      { label: "AC Repair", href: "/air-conditioning-repair" },
      { label: "AC Installation", href: "/air-conditioner-installation" },
      { label: "AC Maintenance", href: "/air-conditioning-maintenance" },
      { label: "Mini Splits", href: "/mini-splits" },
    ],
  },
  {
    title: "Water Heaters",
    desc: "From quick repairs to full replacements and tankless upgrades — we handle it all.",
    faIcon: "fa-solid fa-droplet",
    slug: "water",
    links: [
      { label: "Water Heater Repair", href: "/water-heater-repair" },
      { label: "Water Heater Replacement", href: "/water-heater-replacement" },
      { label: "Tankless Upgrades", href: "/tankless-water-heaters" },
    ],
  },
  {
    title: "Indoor Air Quality",
    desc: "Breathe cleaner, healthier air with professional duct cleaning and inspections.",
    faIcon: "fa-solid fa-wind",
    slug: "air-quality",
    links: [
      { label: "Duct Cleaning", href: "/duct-cleaning" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services | {config.siteName}</title>
        <meta
          name="description"
          content={`${config.siteName} offers complete HVAC services in ${config.city} — heating, air conditioning, water heaters, and indoor air quality. Call ${config.phoneMain}.`}
        />
      </Head>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>
            What We Do <span className={styles.heroLabelBar}></span>
          </span>
          <h1 className={styles.heroH1}>Our Services</h1>
          <p className={styles.heroSub}>
            Professional HVAC solutions for every season. From emergency repairs to new
            installations — we keep {config.city} homes comfortable year-round.
          </p>
        </div>
      </section>

      {/* All Services Grid */}
      <section className={styles.allServices}>
        <div className="container">
          <div className={`${styles.sectionHead} reveal`}>
            <span className="section-label">Complete HVAC Solutions</span>
            <h2 className="section-title">Everything Your Home Needs</h2>
          </div>

          <div className={`${styles.servicesGrid} reveal-stagger`}>
            {config.services.map((svc) => (
              <Link key={svc.slug} href={`/${svc.slug}`} className={styles.serviceCard}>
                <div className={styles.svcIcon}>
                  <i className={svc.faIcon}></i>
                </div>
                <div className={styles.svcBody}>
                  <h3 className={styles.svcTitle}>{svc.title}</h3>
                  <p className={styles.svcDesc}>{svc.description}</p>
                  <span className={styles.svcLink}>
                    Learn More <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category Breakdown */}
      <section className={styles.categories}>
        <div className="container">
          <div className={`${styles.sectionHead} reveal`}>
            <span className="section-label">Browse By Category</span>
            <h2 className="section-title">Explore Our Specialties</h2>
          </div>

          <div className={`${styles.catGrid} reveal-stagger`}>
            {CATEGORIES.map((cat) => (
              <div key={cat.slug} className={styles.catCard}>
                <div className={styles.catHeader}>
                  <div className={styles.catIcon}>
                    <i className={cat.faIcon}></i>
                  </div>
                  <div>
                    <h3 className={styles.catTitle}>{cat.title}</h3>
                    <p className={styles.catDesc}>{cat.desc}</p>
                  </div>
                </div>
                <ul className={styles.catLinks}>
                  {cat.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={styles.catLink}>
                        <i className="fa-solid fa-chevron-right"></i>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={`container text-center ${styles.ctaInner} reveal`}>
          <h2>Not Sure What You Need?</h2>
          <p>
            No problem — give us a call or fill out our form and we'll help you figure out
            the right solution for your home.
          </p>
          <div className={styles.ctaBtns}>
            <Link href="/contact-us" className="btn btn-primary">
              Book Service Now
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
