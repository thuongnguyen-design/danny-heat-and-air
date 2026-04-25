import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
        href: "/air-conditioning-maintenance",
        items: [
          { label: "AC Spring Tune-Up", href: "/air-conditioning-maintenance" },
          { label: "Furnace Fall Tune-Up", href: "/furnace-maintenance" },
        ],
      },
    ],
  },
  {
    label: "About",
    href: "#",
    children: [
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
            <i className="fa-solid fa-location-dot" style={{ color: 'var(--brand-blue)' }}></i> Serving Stockton &amp; Surrounding Areas — Licensed, Bonded &amp; Insured
          </span>
          <a href={`tel:${config.phoneMain.replace(/\D/g, "")}`} className={styles.topBarPhone}>
            <i className="fa-solid fa-phone"></i> {config.phoneMain}
          </a>
        </div>
      </div>

      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.inner}`}>
          <Link href="/" className={styles.logo} aria-label="DANNY Heat & Air — Home">
            <Image
              src="/logo-icon.png"
              alt=""
              width={160}
              height={120}
              quality={95}
              className={styles.logoIcon}
              priority
            />
            <span className={styles.wordmark}>
              <span className={styles.wordmarkBrand}>DANNY</span>
              <span className={styles.wordmarkSub}>Heat &amp; Air</span>
              <span className={styles.wordmarkLic}>
                <i className="fa-solid fa-shield-halved"></i>
                <span>CA Lic. #1144064</span>
              </span>
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
            <Link href="/contact-us" className="btn btn-secondary">Request a Service</Link>
          </div>

          <a
            href={`tel:${config.phoneMain.replace(/\D/g, "")}`}
            className={styles.mobilePhoneBtn}
            aria-label="Call for emergency repair"
          >
            <i className="fa-solid fa-phone"></i>
          </a>

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
