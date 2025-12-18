import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms of Service | Judicium Arbitration",
  description: "Terms of Service for Judicium Arbitration. Read our terms and conditions for using our website and legal services.",
  robots: "noindex, nofollow",
};

export default function TermsOfServicePage() {
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
              <li className="text-gold-primary">Terms of Service</li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-primary mb-4">
            Terms of Service
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
              Welcome to Judicium Arbitration. These Terms of Service ("Terms") govern your access to and use of
              our website and legal services. By accessing or using our services, you agree to be bound by these
              Terms. Please read them carefully.
            </p>
          </div>

          <div className="space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing our website (judicium-arbitration.com) or engaging our legal services, you acknowledge
                that you have read, understood, and agree to be bound by these Terms of Service, our Privacy Policy,
                and all applicable laws and regulations. If you do not agree with any of these terms, you are
                prohibited from using or accessing this site and our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">2. Services Provided</h2>
              <p className="leading-relaxed mb-4">
                Judicium Arbitration provides legal services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Arbitration and Alternative Dispute Resolution (ADR)</li>
                <li>Commercial litigation and dispute resolution</li>
                <li>Legal consultation and advisory services</li>
                <li>Representation before courts, tribunals, and arbitral panels</li>
                <li>Corporate and commercial legal services</li>
                <li>Other legal services as described on our website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">3. No Attorney-Client Relationship</h2>
              <p className="leading-relaxed mb-4">
                <strong>Important:</strong> Visiting our website, reading content, or sending an inquiry does not
                create an attorney-client relationship. An attorney-client relationship is established only when:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We have explicitly agreed to represent you in writing</li>
                <li>A formal engagement letter has been executed by both parties</li>
                <li>Any applicable conflict of interest checks have been completed</li>
                <li>You have accepted our terms of engagement</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Until such relationship is formally established, any information you provide will not be treated
                as confidential or privileged.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">4. Engagement and Fees</h2>

              <h3 className="text-xl font-semibold text-gold-secondary mb-3">4.1 Engagement Process</h3>
              <p className="leading-relaxed mb-4">
                Our engagement process includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Initial consultation to understand your legal needs</li>
                <li>Conflict of interest check</li>
                <li>Written engagement letter outlining scope of services</li>
                <li>Fee agreement and payment terms</li>
                <li>Execution of formal engagement documents</li>
              </ul>

              <h3 className="text-xl font-semibold text-gold-secondary mb-3">4.2 Fees and Payment</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fees are determined based on the nature and complexity of the matter</li>
                <li>We may charge on an hourly basis, fixed fee, or retainer basis as agreed</li>
                <li>Payment terms will be specified in the engagement letter</li>
                <li>Clients are responsible for costs, disbursements, and out-of-pocket expenses</li>
                <li>Invoices are payable within the time specified</li>
                <li>We reserve the right to suspend services for non-payment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">5. Client Responsibilities</h2>
              <p className="leading-relaxed mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide complete, accurate, and timely information</li>
                <li>Cooperate fully in the provision of legal services</li>
                <li>Respond promptly to our communications and requests</li>
                <li>Maintain confidentiality of privileged communications</li>
                <li>Pay fees and costs as agreed</li>
                <li>Inform us of any material changes to your matter</li>
                <li>Make final decisions regarding your case after receiving our advice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">6. Confidentiality</h2>
              <p className="leading-relaxed mb-4">
                We maintain strict confidentiality in accordance with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Bar Council of India Rules</li>
                <li>Advocate-client privilege under the Indian Evidence Act, 1872</li>
                <li>Professional ethics and standards</li>
                <li>Our Privacy Policy</li>
              </ul>
              <p className="leading-relaxed mt-4">
                However, confidentiality obligations do not apply where disclosure is required by law, court order,
                or regulatory authority, or where you have provided explicit consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">7. Limitation of Liability</h2>
              <p className="leading-relaxed mb-4">
                To the fullest extent permitted by law:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We shall not be liable for any indirect, consequential, or punitive damages</li>
                <li>Our liability shall be limited to the fees paid for the specific matter</li>
                <li>We are not liable for outcomes beyond our reasonable control</li>
                <li>We do not guarantee specific results or outcomes</li>
                <li>Our advice is based on information provided and applicable laws at the time</li>
              </ul>
              <p className="leading-relaxed mt-4">
                This limitation does not apply to cases of gross negligence, willful misconduct, or fraud.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">8. Website Use and Intellectual Property</h2>

              <h3 className="text-xl font-semibold text-gold-secondary mb-3">8.1 Website Content</h3>
              <p className="leading-relaxed mb-4">
                All content on our website, including text, graphics, logos, and software, is the property of
                Judicium Arbitration or its licensors and is protected by Indian and international copyright laws.
              </p>

              <h3 className="text-xl font-semibold text-gold-secondary mb-3">8.2 Permitted Use</h3>
              <p className="leading-relaxed mb-4">
                You may:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>View and download content for personal, non-commercial use</li>
                <li>Print pages for your records</li>
                <li>Share links to our website</li>
              </ul>

              <h3 className="text-xl font-semibold text-gold-secondary mb-3">8.3 Prohibited Use</h3>
              <p className="leading-relaxed mb-4">
                You may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reproduce, modify, or distribute content without permission</li>
                <li>Use content for commercial purposes</li>
                <li>Remove copyright or proprietary notices</li>
                <li>Use automated systems to access the website</li>
                <li>Attempt to gain unauthorized access to our systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">9. Third-Party Links</h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites for your convenience. We do not endorse or
                assume responsibility for the content, privacy policies, or practices of third-party sites. Use
                of such links is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">10. Disclaimer of Warranties</h2>
              <p className="leading-relaxed mb-4">
                Our website and information are provided "as is" without warranties of any kind, either express
                or implied, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Accuracy, completeness, or reliability of information</li>
                <li>Uninterrupted or error-free operation</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement of third-party rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">11. Indemnification</h2>
              <p className="leading-relaxed">
                You agree to indemnify and hold harmless Judicium Arbitration, its partners, employees, and agents
                from any claims, damages, losses, liabilities, and expenses arising from your use of our website
                or services, violation of these Terms, or infringement of any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">12. Termination of Services</h2>
              <p className="leading-relaxed mb-4">
                Either party may terminate the engagement:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>By Client:</strong> At any time with written notice, subject to payment of fees for work completed</li>
                <li><strong>By Us:</strong> For non-payment, non-cooperation, conflict of interest, or ethical reasons</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Upon termination, we will provide you with your files and documents, subject to payment of
                outstanding fees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">13. Governing Law and Jurisdiction</h2>
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes
                arising from these Terms or our services shall be subject to the exclusive jurisdiction of the
                courts in New Delhi, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">14. Dispute Resolution</h2>
              <p className="leading-relaxed mb-4">
                Any disputes between you and Judicium Arbitration shall be resolved through:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Good faith negotiations</li>
                <li>Mediation, if negotiations fail</li>
                <li>Arbitration under the Arbitration and Conciliation Act, 1996, if mediation is unsuccessful</li>
                <li>Litigation in New Delhi courts as a last resort</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">15. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon
                posting on our website with an updated "Last Updated" date. Your continued use of our website or
                services after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">16. Severability</h2>
              <p className="leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions
                shall continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">17. Entire Agreement</h2>
              <p className="leading-relaxed">
                These Terms, together with our Privacy Policy and any engagement letter, constitute the entire
                agreement between you and Judicium Arbitration regarding the use of our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">18. Contact Information</h2>
              <p className="leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-linear-to-br from-gold-primary/10 to-transparent p-6 rounded-xl border border-gold-primary/30">
                <p className="mb-2"><strong>Judicium Arbitration</strong></p>
                <p className="mb-2">Email: <a href="mailto:Judiciumarbitration@gmail.com" className="text-gold-primary hover:text-gold-secondary">Judiciumarbitration@gmail.com</a></p>
                <p className="mb-2">Phone: +91-XXX-XXX-XXXX</p>
                <p>Address: New Delhi, India</p>
              </div>
            </section>

            <section className="mt-8 pt-8 border-t border-gold-primary/20">
              <p className="text-sm text-foreground/60">
                <strong>Acknowledgment:</strong> By using our website or services, you acknowledge that you have
                read, understood, and agree to be bound by these Terms of Service.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}
