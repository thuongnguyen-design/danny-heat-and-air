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
          <div className={styles.socialLinks}>
            <a href="#" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
            <a href="#" aria-label="Twitter"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            <a href="#" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
            <a href="#" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
          </div>
          <div className={styles.footerLogo}>
            <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
              <circle cx="20" cy="20" r="18" stroke="#FF6B00" strokeWidth="2.5" fill="none" strokeDasharray="6 3"/>
              <path d="M20 5C27 12 32 15 32 20C32 27 27 32 20 32C13 32 8 27 8 20C8 15 13 12 20 5Z" fill="#FF6B00" opacity="0.8"/>
              <path d="M20 11C24 15 27 18 27 20C27 24 24 27 20 27C16 27 13 24 13 20C13 18 16 15 20 11Z" fill="#FF6B00"/>
              <circle cx="20" cy="20" r="4" fill="white"/>
            </svg>
            <span className={styles.logoText}><span style={{ color: 'var(--brand-orange)' }}>DANNY</span> Heat &amp; Air</span>
          </div>
          <div className={styles.footerPhone}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
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
