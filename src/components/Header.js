import { useState, useEffect } from "react";
import Link from "next/link";
import config from "@/lib/config";
import styles from "./Header.module.css";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    megaMenu: [
      {
        label: "Heating",
        href: "/heating",
        items: [
          { label: "Furnace Repair", href: "/furnace-repair" },
          { label: "Furnace Installation", href: "/furnace-installation" },
          { label: "Furnace Tune Up", href: "/furnace-maintenance" },
          { label: "Thermostat", href: "/thermostats" },
          { label: "Ductwork", href: "/duct-cleaning" },
        ],
      },
      {
        label: "Air Conditioning",
        href: "/air-conditioning",
        items: [
          { label: "AC Repair", href: "/air-conditioning-repair" },
          { label: "AC Replacement", href: "/air-conditioner-installation" },
          { label: "AC Maintenance", href: "/air-conditioning-maintenance" },
          { label: "Mini Splits", href: "/mini-splits" },
        ],
      },
      {
        label: "Water Heater",
        href: "/water-heaters",
        items: [
          { label: "Water Heater Repair", href: "/water-heater-repair" },
          { label: "Water Heater Replacement", href: "/water-heater-replacement" },
          { label: "Tankless Upgrades", href: "/tankless-water-heaters" },
        ],
      },
      {
        label: "Annual Maintenance",
        href: "/memberships",
        items: [
          { label: "The Family Plan", href: "/memberships" },
          { label: "AC Spring Tune-Up", href: "/air-conditioning-maintenance" },
          { label: "Furnace Fall Tune-Up", href: "/furnace-maintenance" },
        ],
      },
    ],
  },
  { label: "Financing", href: "/financing" },
  {
    label: "About",
    href: "#",
    children: [
      { label: "Family Plan", href: "/memberships" },
      { label: "Mission Statement", href: "/about-us" },
      { label: "Our Guarantee", href: "/guarantee" },
    ],
  },
  { label: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeMegaTab, setActiveMegaTab] = useState("Heating");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className={styles.topBar}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <span className={styles.topBarText}>
            Serving Stockton &amp; Surrounding Areas — Licensed, Bonded &amp; Insured
          </span>
          <a href={`tel:${config.phoneMain.replace(/\D/g, "")}`} className={styles.topBarCall}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call Now
          </a>
        </div>
      </div>

      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.inner}`}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>
              <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
                <circle cx="20" cy="20" r="18" stroke="#FF6B00" strokeWidth="2.5" fill="none" strokeDasharray="6 3"/>
                <path d="M20 5C27 12 32 15 32 20C32 27 27 32 20 32C13 32 8 27 8 20C8 15 13 12 20 5Z" fill="#FF6B00" opacity="0.8"/>
                <path d="M20 11C24 15 27 18 27 20C27 24 24 27 20 27C16 27 13 24 13 20C13 18 16 15 20 11Z" fill="#FF6B00"/>
                <circle cx="20" cy="20" r="4" fill="white"/>
              </svg>
            </span>
            <span className={styles.logoText}>
              <span style={{ color: 'var(--brand-orange)' }}>DANNY</span> Heat &amp; Air
            </span>
          </Link>

          <nav className={styles.nav} aria-label="Main navigation">
            {navItems.map((item) => (
              <div
                key={item.label}
                className={styles.navItem}
                onMouseEnter={() => {
                  if (item.megaMenu || item.children) setOpenDropdown(item.label);
                }}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                  {(item.megaMenu || item.children) && <span className={styles.caret}>▾</span>}
                </Link>

                {item.megaMenu && openDropdown === item.label && (
                  <div className={styles.megaDropdown}>
                    <div className={styles.megaLeft}>
                      {item.megaMenu.map((megaItem) => (
                        <Link
                          key={megaItem.label}
                          href={megaItem.href || "#"}
                          className={`${styles.megaTab} ${activeMegaTab === megaItem.label ? styles.activeTab : ""}`}
                          onMouseEnter={() => {
                            if (megaItem.items) setActiveMegaTab(megaItem.label);
                          }}
                        >
                          {megaItem.label} {megaItem.items && <span className={styles.megaArrow}>›</span>}
                        </Link>
                      ))}
                    </div>
                    <div className={styles.megaRight}>
                      {item.megaMenu.find((t) => t.label === activeMegaTab)?.items?.map((link) => (
                        <Link key={link.label} href={link.href} className={styles.megaLink}>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {item.children && openDropdown === item.label && (
                  <div className={styles.dropdown}>
                    {item.children.map((child) => (
                      <Link key={child.label} href={child.href} className={styles.dropdownItem}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className={styles.ctas}>
            <Link href="/contact-us" className="btn btn-primary">Book Service Now</Link>
          </div>

          <button className={styles.hamburger} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>

        {mobileOpen && (
          <div className={styles.mobileMenu}>
            {navItems.map((item) => (
              <div key={item.label}>
                <Link href={item.href} className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link key={child.label} href={child.href} className={styles.mobileSubLink} onClick={() => setMobileOpen(false)}>
                    — {child.label}
                  </Link>
                ))}
                {item.megaMenu?.map((megaItem) => (
                  <div key={megaItem.label}>
                    <Link href={megaItem.href || "#"} className={styles.mobileSubLink} style={{ color: '#fff', fontWeight: 'bold' }} onClick={() => setMobileOpen(false)}>
                      {megaItem.label}
                    </Link>
                    {megaItem.items?.map((subItem) => (
                      <Link key={subItem.label} href={subItem.href} className={styles.mobileSubLink} style={{ paddingLeft: '30px' }} onClick={() => setMobileOpen(false)}>
                        - {subItem.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            ))}
            <a href={`tel:${config.phoneMain.replace(/\D/g, "")}`} className={`btn btn-primary ${styles.mobileCall}`}>
              Call {config.phoneMain}
            </a>
          </div>
        )}
      </header>
    </>
  );
}
