import Head from "next/head";
import Link from "next/link";
import config from "@/lib/config";
import styles from "@/styles/Legal.module.css";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | {config.siteName}</title>
        <meta
          name="description"
          content={`Terms of Service for ${config.siteName}. Please read these terms carefully before using our website or services.`}
        />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>
            Legal <span className={styles.heroLabelBar}></span>
          </span>
          <h1 className={styles.heroH1}>Terms of Service</h1>
          <p className={styles.heroSub}>
            Please read these terms carefully before using our website or scheduling service.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={`container ${styles.contentInner}`}>
          <p className={styles.lastUpdated}>Last updated: March 15, 2026</p>

          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using the {config.siteName} website and services, you
            agree to be bound by these Terms of Service. If you do not agree with
            any part of these terms, you should not use our website or services.
          </p>

          <h2>2. Services</h2>
          <p>
            {config.siteName} provides residential and light commercial HVAC
            services in {config.city}, {config.state} and surrounding areas,
            including but not limited to:
          </p>
          <ul>
            <li>Heating system repair, installation, and maintenance</li>
            <li>Air conditioning repair, installation, and maintenance</li>
            <li>Water heater repair and replacement</li>
            <li>Duct cleaning and indoor air quality services</li>
            <li>Thermostat installation and smart home integration</li>
            <li>Annual maintenance plans and inspections</li>
          </ul>
          <p>
            All services are subject to availability and may vary by location.
            We reserve the right to refuse service at our discretion.
          </p>

          <h2>3. Estimates &amp; Pricing</h2>
          <p>
            We provide free estimates for most services. Estimates are based on
            the information available at the time of assessment and are subject
            to change if additional issues are discovered during the work. We
            will always communicate any changes in pricing before proceeding with
            additional work.
          </p>
          <p>
            Quoted prices are valid for 30 days from the date of the estimate
            unless otherwise stated. Pricing does not include permits, code
            upgrades, or unforeseen structural modifications unless specifically
            included in the written estimate.
          </p>

          <h2>4. Scheduling &amp; Appointments</h2>
          <p>
            When you schedule a service appointment, we will make every effort to
            arrive within the agreed-upon time window. However, due to the nature
            of emergency service calls and unforeseen circumstances, arrival
            times may vary. We will notify you as soon as possible if there are
            any delays.
          </p>
          <p>
            If you need to cancel or reschedule an appointment, please contact us
            at least 24 hours in advance. Repeated no-shows may result in a
            service fee for future appointments.
          </p>

          <h2>5. Payment Terms</h2>
          <p>
            Payment is due upon completion of service unless other arrangements
            have been made in writing. We accept cash, check, and major credit
            cards. Financing options may be available for qualifying customers
            through our third-party financing partners.
          </p>
          <p>
            Past-due accounts may be subject to collection fees and interest as
            permitted by California law.
          </p>

          <h2>6. Warranties &amp; Guarantees</h2>
          <p>
            {config.siteName} stands behind the quality of our work. Our
            warranty terms include:
          </p>
          <ul>
            <li><strong>Labor warranty:</strong> We provide a 1-year warranty on all labor performed by our technicians</li>
            <li><strong>Parts warranty:</strong> Replacement parts are covered by the manufacturer's warranty, which varies by product</li>
            <li><strong>New installations:</strong> New equipment installations include both the manufacturer's warranty and our labor warranty</li>
            <li><strong>Satisfaction guarantee:</strong> If you are not satisfied with our work, contact us within 30 days and we will make it right</li>
          </ul>
          <p>
            Warranties do not cover damage caused by misuse, neglect, acts of
            nature, power surges, or modifications made by unauthorized parties.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, {config.siteName} shall not
            be liable for any indirect, incidental, special, consequential, or
            punitive damages arising from the use of our website or services.
            Our total liability for any claim related to our services shall not
            exceed the amount you paid for the specific service giving rise to
            the claim.
          </p>

          <h2>8. Website Use</h2>
          <p>
            Our website is provided for informational purposes and to facilitate
            service requests. You agree not to:
          </p>
          <ul>
            <li>Use the website for any unlawful purpose</li>
            <li>Submit false or misleading information through our forms</li>
            <li>Attempt to gain unauthorized access to any part of the website</li>
            <li>Use automated tools to scrape or copy website content</li>
          </ul>
          <p>
            All content on this website, including text, images, logos, and
            design elements, is the property of {config.siteName} and is
            protected by copyright law.
          </p>

          <h2>9. Permits &amp; Code Compliance</h2>
          <p>
            {config.siteName} is licensed, bonded, and insured to perform HVAC
            work in California. Where required by local building codes, we will
            obtain the necessary permits for installations and major repairs.
            Permit fees, if applicable, will be included in your estimate.
          </p>

          <h2>10. Dispute Resolution</h2>
          <p>
            If a dispute arises regarding our services, we encourage you to
            contact us directly so we can work toward a resolution. If we are
            unable to resolve the matter informally, any legal proceedings shall
            be conducted in {config.county || "San Joaquin"} County, California,
            and shall be governed by the laws of the State of California.
          </p>

          <h2>11. Changes to Terms</h2>
          <p>
            We reserve the right to update these Terms of Service at any time.
            Changes will be posted on this page with a revised "Last updated"
            date. Your continued use of our website or services after changes
            are posted constitutes your acceptance of the revised terms.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have questions about these Terms of Service, please reach out:
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
