import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SITE, fullAddress } from '../data/site.js';

const EFFECTIVE_DATE = '29 October 2026';

const SECTIONS = [
  { id: 'intro', title: '1. Introduction' },
  { id: 'collect', title: '2. Information We Collect' },
  { id: 'use', title: '3. How We Use Your Information' },
  { id: 'consent', title: '4. Consent' },
  { id: 'share', title: '5. Sharing of Information' },
  { id: 'third-party', title: '6. Third-Party Services' },
  { id: 'cookies', title: '7. Cookies' },
  { id: 'retention', title: '8. Data Retention' },
  { id: 'security', title: '9. Data Security' },
  { id: 'rights', title: '10. Your Rights' },
  { id: 'children', title: '11. Children' },
  { id: 'changes', title: '12. Changes to This Policy' },
  { id: 'grievance', title: '13. Contact & Grievance Officer' },
  { id: 'law', title: '14. Governing Law' },
];

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = `Privacy Policy | ${SITE.name}`;
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <p>Effective date: {EFFECTIVE_DATE}</p>
        </div>
      </section>

      <section className="section policy-wrap">
        <div className="container policy">
          <aside className="policy__toc" aria-label="Contents">
            <h2>Contents</h2>
            <ol>
              {SECTIONS.map((s) => (
                <li key={s.id}><a href={`#${s.id}`}>{s.title.replace(/^\d+\.\s/, '')}</a></li>
              ))}
            </ol>
          </aside>

          <article className="policy__body">
            <h2 id="intro">1. Introduction</h2>
            <p>
              {SITE.name} ("we", "us" or "our"), with its office at {fullAddress}, respects your privacy. This Privacy
              Policy explains what personal data we collect when you visit our website, call us, message us on
              WhatsApp, email us or otherwise use our real estate services, and how we use, share and protect that
              data.
            </p>
            <p>
              This policy is framed in line with the Digital Personal Data Protection Act, 2023, the Information
              Technology Act, 2000 and the rules made under them. By using our website or services, you agree to the
              practices described here.
            </p>

            <h2 id="collect">2. Information We Collect</h2>
            <p>We only collect information that is needed to help you with your property requirement:</p>
            <ul>
              <li><strong>Contact details:</strong> your name, phone number, email address and, where relevant, your postal address.</li>
              <li><strong>Property requirements:</strong> whether you want to buy, sell, rent or invest, your preferred locations, budget and property type.</li>
              <li><strong>Property details (for owners/sellers/landlords):</strong> property address, ownership details, photographs, price expectations and related documents you choose to share.</li>
              <li><strong>Transaction documents:</strong> where you proceed with a deal, copies of identity and address proof (such as Aadhaar, PAN), sale or rental agreements and other documents required for verification, agreement or registration.</li>
              <li><strong>Communication records:</strong> messages, emails and notes of calls you have with us.</li>
              <li><strong>Technical information:</strong> basic information such as browser type, device type and pages visited, which may be collected automatically by our hosting provider or embedded third-party services.</li>
            </ul>
            <p>
              Our website does not process online payments and does not ask for bank, card or UPI details. We will
              never ask for your OTP or passwords.
            </p>

            <h2 id="use">3. How We Use Your Information</h2>
            <ul>
              <li>To respond to your enquiries and contact you about your property requirement.</li>
              <li>To find, shortlist and share suitable properties, and to arrange site visits.</li>
              <li>To market your property to genuine prospective buyers or tenants, if you list it with us.</li>
              <li>To verify property and party details, and to prepare agreements and documentation.</li>
              <li>To coordinate with lawyers, banks or loan providers and registration authorities, when you ask us to.</li>
              <li>To send you updates on relevant properties, where you have agreed to receive them.</li>
              <li>To comply with legal obligations and to protect against fraud or misuse.</li>
            </ul>

            <h2 id="consent">4. Consent</h2>
            <p>
              We process your personal data based on the consent you give when you submit an enquiry, contact us, or
              share documents with us, and for legitimate uses permitted by law. You may withdraw your consent at any
              time by contacting us using the details in section 13. Withdrawing consent will not affect processing
              already carried out, but we may be unable to continue providing services that depend on that data.
            </p>

            <h2 id="share">5. Sharing of Information</h2>
            <p>We do not sell or rent your personal data. We share it only when necessary:</p>
            <ul>
              <li><strong>With the other party to a deal:</strong> for example, sharing a buyer's or tenant's contact details with a property owner (and vice versa), only to take your enquiry forward.</li>
              <li><strong>With professionals you ask us to involve:</strong> such as advocates, document writers, banks or housing finance companies, and valuers.</li>
              <li><strong>With service providers:</strong> who help us run our website and communications, under appropriate confidentiality.</li>
              <li><strong>For legal reasons:</strong> when required by law, court order or a government authority, or to protect our rights and the safety of others.</li>
            </ul>

            <h2 id="third-party">6. Third-Party Services</h2>
            <p>Our website uses a few third-party services, which have their own privacy policies:</p>
            <ul>
              <li><strong>WhatsApp (Meta):</strong> when you click a WhatsApp button or send the enquiry form via WhatsApp, your message is sent through WhatsApp.</li>
              <li><strong>Google Maps:</strong> the map on our contact section is embedded from Google and may collect usage data.</li>
              <li><strong>Google Fonts:</strong> used to display text on the website, which may log your IP address.</li>
              <li><strong>Email:</strong> if you choose to email us, your email provider handles the message.</li>
            </ul>
            <p>We are not responsible for the privacy practices of these third parties or of other websites linked from our site.</p>

            <h2 id="cookies">7. Cookies</h2>
            <p>
              Our website itself does not use advertising or tracking cookies. Embedded third-party services (such as
              Google Maps) may set their own cookies. You can block or delete cookies through your browser settings;
              the website will continue to work.
            </p>

            <h2 id="retention">8. Data Retention</h2>
            <p>
              We keep your personal data only as long as needed for the purposes described above, for example while
              your enquiry or transaction is active, and afterwards for as long as required by law (such as for tax or
              legal records). When it is no longer needed, we delete it or make it anonymous.
            </p>

            <h2 id="security">9. Data Security</h2>
            <p>
              We take reasonable physical, technical and administrative measures to protect your data against
              unauthorised access, loss or misuse, including limiting access to people who need it. However, no method
              of transmission over the internet or electronic storage is completely secure, and we cannot guarantee
              absolute security. In the event of a personal data breach, we will act as required by applicable law.
            </p>

            <h2 id="rights">10. Your Rights</h2>
            <p>Subject to applicable law, you have the right to:</p>
            <ul>
              <li>Ask for a summary of the personal data we hold about you and how it is used.</li>
              <li>Ask us to correct, complete or update inaccurate data.</li>
              <li>Ask us to erase your data, unless we must retain it by law.</li>
              <li>Withdraw your consent at any time.</li>
              <li>Opt out of property updates and marketing messages.</li>
              <li>Nominate another person to exercise your rights in case of death or incapacity.</li>
              <li>Raise a grievance with us and, if not resolved, with the Data Protection Board of India.</li>
            </ul>
            <p>To exercise any of these rights, contact us using the details below. We may need to verify your identity first.</p>

            <h2 id="children">11. Children</h2>
            <p>
              Our services are intended for adults. We do not knowingly collect personal data from anyone under 18
              years of age without verifiable consent of a parent or lawful guardian. If you believe a child has shared
              data with us, please contact us and we will delete it.
            </p>

            <h2 id="changes">12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be posted on this page
              with a new effective date. Please review it periodically.
            </p>

            <h2 id="grievance">13. Contact &amp; Grievance Officer</h2>
            <p>For any questions, requests or complaints about this policy or your personal data, please contact:</p>
            <div className="policy__contact">
              <p><strong>{SITE.name}</strong></p>
              <p>{fullAddress}</p>
              <p>Phone: <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a></p>
              <p>Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
            </div>
            <p>We will acknowledge your request promptly and aim to resolve it within 30 days.</p>

            <h2 id="law">14. Governing Law</h2>
            <p>
              This Privacy Policy is governed by the laws of India. Any disputes are subject to the exclusive
              jurisdiction of the courts at Indore, Madhya Pradesh.
            </p>

            <p className="policy__back"><Link to="/" className="btn btn--navy">Back to Home</Link></p>
          </article>
        </div>
      </section>
    </>
  );
}
