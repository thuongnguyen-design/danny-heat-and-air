import styles from "./TrustBadges.module.css";

const BADGES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    label: "Family-Owned",
    sub: "Local & trusted",
    color: "red",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    label: "Price Match",
    sub: "We beat any quote",
    color: "blue",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    label: "Loyalty Discounts",
    sub: "Returning customers save",
    color: "red",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    label: "Free Estimates",
    sub: "No obligation",
    color: "blue",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Same-Day Service",
    sub: "Fast response",
    color: "blue",
  },
];

export default function TrustBadges() {
  return (
    <section className={styles.trustSection} aria-label="Trust indicators">
      <div className={`container ${styles.trustGrid}`}>
        {BADGES.map((b) => (
          <div key={b.label} className={`${styles.badge} ${b.color === "red" ? styles.badgeRed : styles.badgeBlue}`}>
            <div className={styles.iconWrap}>
              {b.icon}
            </div>
            <div className={styles.badgeText}>
              <span className={styles.badgeLabel}>{b.label}</span>
              <span className={styles.badgeSub}>{b.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
