import Link from "next/link";
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
            <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
              <circle cx="20" cy="20" r="18" stroke="#3B9FD9" strokeWidth="2.5" fill="none" strokeDasharray="6 3"/>
              <path d="M20 5C27 12 32 15 32 20C32 27 27 32 20 32C13 32 8 27 8 20C8 15 13 12 20 5Z" fill="#3B9FD9" opacity="0.8"/>
              <path d="M20 11C24 15 27 18 27 20C27 24 24 27 20 27C16 27 13 24 13 20C13 18 16 15 20 11Z" fill="#3B9FD9"/>
              <circle cx="20" cy="20" r="4" fill="white"/>
            </svg>
            <span className={styles.logoText}><span style={{ color: 'var(--brand-blue)' }}>DANNY</span> Heat &amp; Air</span>
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
            <li><span>Thu - Fri</span><span>9AM - 6PM</span></li>
            <li><span>Mon - Wed</span><span>9AM - 5PM</span></li>
            <li><span>Saturday</span><span>10AM - 3PM</span></li>
            <li><span>Sunday</span><span>Closed</span></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/air-conditioning">Services</Link></li>
            <li><Link href="/financing">Financing</Link></li>
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
          <span>&copy; {year} DANNY Heat &amp; Air. All rights reserved.</span>
          <span className={styles.links}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
