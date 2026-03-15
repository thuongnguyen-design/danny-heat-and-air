import styles from "./TrustBadges.module.css";

const BADGES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    label: "Licensed & Insured",
    sub: "Full coverage",
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
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    label: "100% Satisfaction",
    sub: "Guaranteed",
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
  },
];

export default function TrustBadges() {
  return (
    <section className={styles.trustSection} aria-label="Trust indicators">
      <div className={`container ${styles.trustGrid}`}>
        {BADGES.map((b) => (
          <div key={b.label} className={styles.badge}>
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
