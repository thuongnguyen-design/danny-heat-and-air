import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import config from "@/lib/config";
import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/Areas.module.css";

const AREA_INFO = {
  stockton: {
    name: "Stockton",
    county: "San Joaquin County",
    intro: "As our home base, Stockton is where it all started. We know the neighborhoods, the climate challenges, and the homes here inside and out. Whether you're in Lincoln Village, Brookside, or Weston Ranch — we're just minutes away.",
    why: "Stockton summers push past 100°F and winters drop into the 30s. Your HVAC system works hard year-round, and you need a team that responds fast when things break down. As a local family business, we treat every Stockton homeowner like a neighbor.",
    services: "From emergency furnace repairs on cold January nights to AC installations that beat the summer heat, we offer the full range of heating, cooling, and air quality services. We also provide seasonal tune-ups to keep your system efficient and your energy bills low.",
  },
  lodi: {
    name: "Lodi",
    county: "San Joaquin County",
    intro: "Just north of Stockton, Lodi's charming neighborhoods and growing communities deserve top-tier HVAC service. We proudly serve Lodi residents with the same care and professionalism we bring to every job.",
    why: "Lodi's warm summers and cool winters mean your heating and cooling system needs to perform reliably in every season. Our quick response times from nearby Stockton mean you're never waiting long for help.",
    services: "We provide complete HVAC services to Lodi homeowners including furnace repair, AC installation, duct cleaning, and annual maintenance plans that keep your system running smoothly year after year.",
  },
  manteca: {
    name: "Manteca",
    county: "San Joaquin County",
    intro: "Manteca is one of the fastest-growing cities in the Central Valley, and we're proud to serve its expanding community. From established neighborhoods to new construction, we handle it all.",
    why: "New homes and older homes alike need dependable HVAC service. Manteca's hot summers demand a properly sized and maintained air conditioning system. We help homeowners make smart choices about efficiency and comfort.",
    services: "Our Manteca services include AC repair and replacement, furnace installation, smart thermostat setup, mini-split systems, and comprehensive maintenance plans designed to extend the life of your equipment.",
  },
  tracy: {
    name: "Tracy",
    county: "San Joaquin County",
    intro: "Tracy homeowners trust us for honest, affordable HVAC service. We make the short drive to Tracy regularly and have built lasting relationships with families throughout the area.",
    why: "Tracy's Central Valley climate means triple-digit summers and chilly winters. A well-maintained HVAC system isn't a luxury — it's a necessity. We ensure your home stays comfortable no matter the season.",
    services: "From quick AC repairs to full system replacements, water heater service, and duct cleaning, we bring the same quality workmanship to Tracy that has earned us loyal customers across the region.",
  },
  modesto: {
    name: "Modesto",
    county: "Stanislaus County",
    intro: "We've extended our service area to include Modesto because great HVAC service shouldn't stop at county lines. Modesto residents get the same priority scheduling and fair pricing we're known for.",
    why: "Modesto's climate mirrors much of the Central Valley — hot, dry summers and cold, foggy winters. Your comfort depends on a reliable HVAC system, and our experienced technicians are up to the task.",
    services: "Modesto homeowners can count on us for furnace repair, AC installation and maintenance, indoor air quality solutions, and tankless water heater upgrades.",
  },
  galt: {
    name: "Galt",
    county: "Sacramento County",
    intro: "Located at the southern edge of Sacramento County, Galt is a community we're happy to serve. Our team provides the same fast, reliable HVAC service that our Stockton neighbors have come to expect.",
    why: "Galt homeowners face the same Central Valley weather extremes as the rest of our service area. Having a trusted local HVAC company means you won't have to wait days for a technician when your system goes down.",
    services: "We offer Galt residents our full suite of HVAC services: heating repair and installation, air conditioning service, duct cleaning, water heater replacement, and seasonal maintenance tune-ups.",
  },
};

export default function AreaPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Extract area name from slug like "hvac-repair-in-stockton"
  const areaKey = slug ? slug.replace("hvac-repair-in-", "") : "";
  const area = AREA_INFO[areaKey];

  if (!area) {
    return (
      <>
        <Head>
          <title>Area Not Found | {config.siteName}</title>
        </Head>
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <div className={`container ${styles.heroContent}`}>
            <h1 className={styles.heroH1}>Area Not Found</h1>
            <p className={styles.heroSub}>
              We couldn't find that location. <Link href="/areas-we-serve" style={{ color: 'var(--brand-red)' }}>View all areas we serve</Link>.
            </p>
          </div>
        </section>
      </>
    );
  }

  const otherAreas = config.serviceAreas.filter(
    (a) => a.toLowerCase() !== areaKey
  );

  return (
    <>
      <Head>
        <title>HVAC Repair in {area.name}, {config.state} | {config.siteName}</title>
        <meta
          name="description"
          content={`${config.siteName} provides professional heating, AC repair, and HVAC installation in ${area.name}, ${config.state}. Same-day service available. Call ${config.phoneMain}.`}
        />
      </Head>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>
            {area.county} <span className={styles.heroLabelBar}></span>
          </span>
          <h1 className={styles.heroH1}>HVAC Services in {area.name}</h1>
          <p className={styles.heroSub}>
            Professional heating, cooling, and air quality solutions for
            {" "}{area.name} homeowners. Licensed, bonded, and insured.
          </p>
        </div>
      </section>

      {/* Main Content + Form */}
      <section className={styles.areaContent}>
        <div className={`container ${styles.areaGrid}`}>
          <div className={styles.areaMain}>
            <h2>HVAC Repair &amp; Installation in {area.name}, {config.state}</h2>
            <p>{area.intro}</p>

            <h3>Why {area.name} Homeowners Choose {config.siteName}</h3>
            <p>{area.why}</p>

            <h3>Services Available in {area.name}</h3>
            <p>{area.services}</p>

            <h3>Our {area.name} HVAC Services Include:</h3>
            <ul className={styles.servicesList}>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
                <Link href="/furnace-repair" style={{ color: 'inherit', fontWeight: 'bold' }}>Furnace Repair</Link>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
                <Link href="/furnace-installation" style={{ color: 'inherit', fontWeight: 'bold' }}>Furnace Installation</Link>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
                <Link href="/air-conditioning-repair" style={{ color: 'inherit', fontWeight: 'bold' }}>AC Repair</Link>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
                <Link href="/air-conditioner-installation" style={{ color: 'inherit', fontWeight: 'bold' }}>AC Installation</Link>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
                <Link href="/air-conditioning-maintenance" style={{ color: 'inherit', fontWeight: 'bold' }}>AC Maintenance</Link>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
                <Link href="/duct-cleaning" style={{ color: 'inherit', fontWeight: 'bold' }}>Duct Cleaning</Link>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
                <Link href="/water-heater-repair" style={{ color: 'inherit', fontWeight: 'bold' }}>Water Heater Repair</Link>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
                <Link href="/water-heater-replacement" style={{ color: 'inherit', fontWeight: 'bold' }}>Water Heater Replacement</Link>
              </li>
            </ul>
          </div>

          <div className={styles.formSidebar}>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <section className={styles.otherAreas}>
        <div className="container text-center reveal">
          <span className="section-label">Nearby Communities</span>
          <h2 className="section-title">We Also Serve</h2>
          <div className={styles.otherAreasGrid}>
            {otherAreas.map((a) => (
              <Link
                key={a}
                href={`/areas-we-serve/hvac-repair-in-${a.toLowerCase()}`}
                className={styles.otherAreaChip}
              >
                {a}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={`container text-center ${styles.ctaInner} reveal`}>
          <h2>Ready for Service in {area.name}?</h2>
          <p>
            Schedule your appointment today or call us for immediate assistance.
            We offer same-day service and free estimates.
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
