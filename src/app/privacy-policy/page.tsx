import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy Policy | Judicium Arbitration",
  description: "Privacy Policy for Judicium Arbitration. Learn how we collect, use, and protect your personal information in compliance with Indian data protection laws.",
  robots: "noindex, nofollow",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-20 sm:pt-22 md:pt-24">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-bg-dark via-bg-alt-dark to-bg-dark py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, #D4AF37 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <nav className="mb-6 text-sm">
            <ol className="flex items-center gap-2 text-foreground/60">
              <li>
                <Link href="/" className="hover:text-gold-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-gold-primary">Privacy Policy</li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-foreground/70 text-lg">
            Last Updated: December 18, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <Section>
        <div className="max-w-4xl mx-auto prose prose-invert prose-headings:text-gold-primary prose-a:text-gold-secondary prose-strong:text-gold-secondary">
          <div className="bg-linear-to-br from-bg-alt-dark to-bg-dark p-6 sm:p-8 rounded-2xl border border-gold-primary/20 mb-8">
            <p className="text-foreground/80 leading-relaxed mb-0">
              At Judicium Arbitration, we are committed to protecting your privacy and personal information.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
              you visit our website or use our services, in compliance with the Digital Personal Data Protection
              Act, 2023 and other applicable Indian laws.
            </p>
          </div>

          <div className="space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">1. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gold-secondary mb-3">1.1 Personal Information</h3>
              <p className="leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Name and contact details (email address, phone number, mailing address)</li>
                <li>Professional information (company name, designation, industry)</li>
                <li>Case-related information and legal documents</li>
                <li>Communication preferences</li>
                <li>Payment and billing information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gold-secondary mb-3">1.2 Automatically Collected Information</h3>
              <p className="leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">2. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Legal Services:</strong> To provide legal consultation, arbitration, and dispute resolution services</li>
                <li><strong>Communication:</strong> To respond to your inquiries and provide updates about your matters</li>
                <li><strong>Service Improvement:</strong> To enhance our website functionality and service delivery</li>
                <li><strong>Compliance:</strong> To comply with legal obligations and professional regulations</li>
                <li><strong>Marketing:</strong> To send newsletters and updates (only with your consent)</li>
                <li><strong>Analytics:</strong> To understand user behavior and improve user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">3. Legal Basis for Processing</h2>
              <p className="leading-relaxed mb-4">
                We process your personal data based on the following legal grounds:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Consent:</strong> You have given explicit consent for processing</li>
                <li><strong>Contract Performance:</strong> Processing is necessary to fulfill our engagement with you</li>
                <li><strong>Legal Obligation:</strong> Processing is required by law or regulatory requirements</li>
                <li><strong>Legitimate Interest:</strong> Processing is in our legitimate business interests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">4. Information Sharing and Disclosure</h2>
              <p className="leading-relaxed mb-4">
                We maintain strict confidentiality and do not sell your personal information. We may share
                your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>With Your Consent:</strong> When you authorize us to share information</li>
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in our operations</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or legal process</li>
                <li><strong>Professional Advisors:</strong> With external counsels, experts, or consultants engaged for your matter</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">5. Data Security</h2>
              <p className="leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal
                information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure access controls and authentication</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection</li>
                <li>Secure physical and digital storage systems</li>
              </ul>
              <p className="leading-relaxed mt-4">
                However, no method of transmission over the internet or electronic storage is 100% secure.
                While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">6. Data Retention</h2>
              <p className="leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined
                in this Privacy Policy, unless a longer retention period is required or permitted by law.
                Legal and professional obligations may require us to retain certain information for specific periods:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Client files and case documents: Minimum 7-10 years as per Bar Council regulations</li>
                <li>Financial records: As required by tax and accounting laws</li>
                <li>Communication records: Retained for professional indemnity purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">7. Your Rights</h2>
              <p className="leading-relaxed mb-4">
                Under the Digital Personal Data Protection Act, 2023 and other applicable laws, you have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right to Access:</strong> Request access to your personal information</li>
                <li><strong>Right to Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your information (subject to legal obligations)</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for processing at any time</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Right to Grievance Redressal:</strong> Lodge complaints about data processing</li>
              </ul>
              <p className="leading-relaxed mt-4">
                To exercise these rights, please contact us at{" "}
                <a href="mailto:Judiciumarbitration@gmail.com" className="text-gold-primary hover:text-gold-secondary">
                  Judiciumarbitration@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">8. Cookies and Tracking Technologies</h2>
              <p className="leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p className="leading-relaxed mt-4">
                You can control cookie preferences through your browser settings. However, disabling cookies
                may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">9. Third-Party Links</h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy
                practices of these external sites. We encourage you to review their privacy policies before
                providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">10. Children's Privacy</h2>
              <p className="leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect
                personal information from children. If you believe we have inadvertently collected information
                from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">11. International Data Transfers</h2>
              <p className="leading-relaxed">
                Your information is primarily stored and processed in India. If we transfer data internationally,
                we ensure appropriate safeguards are in place in compliance with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">12. Changes to Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                requirements. The updated version will be posted on this page with a revised "Last Updated" date.
                We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">13. Contact Information</h2>
              <p className="leading-relaxed mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices,
                please contact us:
              </p>
              <div className="bg-linear-to-br from-gold-primary/10 to-transparent p-6 rounded-xl border border-gold-primary/30">
                <p className="mb-2"><strong>Judicium Arbitration</strong></p>
                <p className="mb-2">Email: <a href="mailto:Judiciumarbitration@gmail.com" className="text-gold-primary hover:text-gold-secondary">Judiciumarbitration@gmail.com</a></p>
                <p className="mb-2">Phone: +91-XXX-XXX-XXXX</p>
                <p>Address: New Delhi, India</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">14. Grievance Redressal</h2>
              <p className="leading-relaxed mb-4">
                In accordance with the Digital Personal Data Protection Act, 2023, we have appointed a Grievance Officer
                to address your concerns regarding data processing:
              </p>
              <div className="bg-linear-to-br from-gold-primary/10 to-transparent p-6 rounded-xl border border-gold-primary/30">
                <p className="mb-2"><strong>Grievance Officer</strong></p>
                <p className="mb-2">Email: <a href="mailto:Judiciumarbitration@gmail.com" className="text-gold-primary hover:text-gold-secondary">Judiciumarbitration@gmail.com</a></p>
                <p>Response Time: Within 7 business days</p>
              </div>
            </section>

            <section className="mt-8 pt-8 border-t border-gold-primary/20">
              <p className="text-sm text-foreground/60">
                <strong>Acknowledgment:</strong> By using our website or services, you acknowledge that you have read,
                understood, and agree to be bound by this Privacy Policy.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}
