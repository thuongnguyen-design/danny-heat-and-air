import Head from "next/head";
import Link from "next/link";
import config from "@/lib/config";
import styles from "@/styles/Legal.module.css";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | {config.siteName}</title>
        <meta
          name="description"
          content={`Privacy Policy for ${config.siteName}. Learn how we collect, use, and protect your personal information.`}
        />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>
            Legal <span className={styles.heroLabelBar}></span>
          </span>
          <h1 className={styles.heroH1}>Privacy Policy</h1>
          <p className={styles.heroSub}>
            Your privacy matters to us. This policy explains how we handle your information.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={`container ${styles.contentInner}`}>
          <p className={styles.lastUpdated}>Last updated: March 15, 2026</p>

          <h2>1. Information We Collect</h2>
          <p>
            When you use our website, request a quote, or contact us for service,
            we may collect the following information:
          </p>
          <ul>
            <li>Your name, phone number, and email address</li>
            <li>Your home or service address</li>
            <li>The type of HVAC service you are requesting</li>
            <li>Any additional details you provide in a message or form submission</li>
          </ul>
          <p>
            We collect this information only when you voluntarily submit it through
            our contact forms, phone calls, or email correspondence.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your service requests and inquiries</li>
            <li>Schedule and perform HVAC services at your location</li>
            <li>Send appointment confirmations and service reminders</li>
            <li>Provide estimates, invoices, and receipts</li>
            <li>Improve our website and customer experience</li>
          </ul>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties for marketing purposes.
          </p>

          <h2>3. Information Sharing</h2>
          <p>
            We may share your information only in the following limited circumstances:
          </p>
          <ul>
            <li>With our technicians and staff to fulfill your service request</li>
            <li>With trusted service providers who assist in operating our website (such as hosting and email services)</li>
            <li>When required by law or to respond to legal process</li>
            <li>To protect the safety and rights of our customers, employees, or the public</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We take reasonable measures to protect your personal information from
            unauthorized access, alteration, or destruction. Our website uses
            industry-standard security practices including HTTPS encryption. However,
            no method of transmission over the internet is 100% secure, and we
            cannot guarantee absolute security.
          </p>

          <h2>5. Cookies &amp; Analytics</h2>
          <p>
            Our website may use cookies and similar technologies to improve your
            browsing experience. Cookies are small files stored on your device that
            help us understand how visitors use our site. You can control cookies
            through your browser settings. Disabling cookies may affect some
            features of the website.
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites (such as financing
            partners or review platforms). We are not responsible for the privacy
            practices or content of those external sites. We encourage you to review
            their privacy policies before providing any personal information.
          </p>

          <h2>7. Children's Privacy</h2>
          <p>
            Our website is not intended for children under the age of 13. We do not
            knowingly collect personal information from children. If you believe a
            child has provided us with personal information, please contact us so we
            can remove it.
          </p>

          <h2>8. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of any marketing communications</li>
          </ul>
          <p>
            California residents may have additional rights under the California
            Consumer Privacy Act (CCPA). To exercise any of these rights, please
            contact us using the information below.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with a revised "Last updated" date. We encourage you
            to review this policy periodically.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle
            your information, please contact us:
          </p>
          <ul>
            <li><strong>Phone:</strong> {config.phoneMain}</li>
            <li><strong>Email:</strong> <a href={`mailto:${config.email}`}>{config.email}</a></li>
            <li><strong>Location:</strong> {config.city}, {config.state}</li>
          </ul>
        </div>
      </section>
    </>
  );
}
