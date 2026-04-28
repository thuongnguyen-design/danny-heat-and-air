import Link from "next/link";
import Image from "next/image";
import config from "@/lib/config";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      {/* Top strip */}
      <div className={styles.topStrip}>
        <div className={`container ${styles.topInner}`}>
          <div className={styles.footerLogo}>
            <Image src="/logo-v2.png" alt="DANNY Heat & Air LLC" width={72} height={54} style={{ height: 'auto', width: 'auto', maxHeight: 54 }} />
            <span className={styles.logoText}><span style={{ color: 'var(--brand-blue)' }}>DANNY</span> Heat &amp; Air LLC</span>
          </div>
          <div className={styles.footerPhone}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>{config.phoneMain}</span>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className={`container ${styles.inner}`}>
        <div className={styles.col}>
          <h4>Our Service</h4>
          <ul>
            <li><Link href="/furnace-repair">Furnace Repair</Link></li>
            <li><Link href="/furnace-installation">Furnace Installation</Link></li>
            <li><Link href="/air-conditioning-repair">AC Repair</Link></li>
            <li><Link href="/air-conditioner-installation">AC Installation</Link></li>
            <li><Link href="/duct-cleaning">Duct Cleaning</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Working Hours</h4>
          <ul className={styles.hours}>
            <li><span>Mon - Sun</span><span>9AM - 10PM</span></li>
            <li><span>Same hours every day</span><span></span></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/air-conditioning">Services</Link></li>
            <li><Link href="/contact-us">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Areas Served</h4>
          <ul>
            {config.serviceAreas.map((area) => (
              <li key={area}>
                <Link href={`/areas-we-serve/hvac-repair-in-${area.toLowerCase()}`}>
                  {area}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className="container">
          <span>&copy; {year} DANNY Heat &amp; Air LLC. All rights reserved.</span>
          <span className={styles.links}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
