import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Disclaimer | Judicium Arbitration",
  description: "Legal disclaimer for Judicium Arbitration. Important information about the use of our website and legal services.",
  robots: "noindex, nofollow",
};

export default function DisclaimerPage() {
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
              <li className="text-gold-primary">Disclaimer</li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-primary mb-4">
            Legal Disclaimer
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
              Please read this disclaimer carefully before using the Judicium Arbitration website or engaging
              our legal services. This disclaimer sets forth important limitations and conditions regarding
              the information and services provided.
            </p>
          </div>

          <div className="space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">1. General Information Only</h2>
              <p className="leading-relaxed mb-4">
                The content on this website is provided for general informational purposes only and should not
                be construed as legal advice. The information presented:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Is of a general nature and may not apply to your specific situation</li>
                <li>May not reflect the most current legal developments</li>
                <li>Should not be relied upon without seeking professional legal advice</li>
                <li>Does not create an attorney-client relationship</li>
                <li>Is not a substitute for consultation with a qualified legal professional</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">2. No Attorney-Client Relationship</h2>
              <p className="leading-relaxed mb-4">
                <strong className="text-gold-secondary">IMPORTANT NOTICE:</strong> Accessing this website,
                reading its content, downloading materials, or sending an email or other communication to
                Judicium Arbitration does NOT create an attorney-client relationship.
              </p>
              <p className="leading-relaxed">
                An attorney-client relationship is established only when we have explicitly agreed in writing
                to represent you, completed all necessary conflict checks, and executed a formal engagement letter.
                Until such time, any information you submit will not be treated as confidential or privileged.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">3. Not Legal Advice</h2>
              <p className="leading-relaxed mb-4">
                The information provided on this website does not constitute legal advice. Legal advice requires:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Understanding of your specific facts and circumstances</li>
                <li>Analysis of applicable laws and regulations</li>
                <li>Professional judgment based on legal expertise</li>
                <li>Formal attorney-client relationship</li>
              </ul>
              <p className="leading-relaxed mt-4">
                For legal advice specific to your situation, please contact us to arrange a formal consultation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">4. Accuracy and Completeness</h2>
              <p className="leading-relaxed mb-4">
                While we strive to provide accurate and current information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We make no representations or warranties regarding the accuracy, completeness, or timeliness of information</li>
                <li>Laws and regulations change frequently and may affect the information provided</li>
                <li>Information may contain technical inaccuracies or typographical errors</li>
                <li>We reserve the right to modify or remove content without notice</li>
                <li>Information is subject to change as legal landscapes evolve</li>
              </ul>
              <p className="leading-relaxed mt-4">
                You should not rely on this information for making legal decisions without consulting with a
                qualified attorney.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">5. Jurisdiction-Specific Information</h2>
              <p className="leading-relaxed">
                Legal information on this website primarily relates to Indian laws and regulations. Laws vary
                significantly across jurisdictions, and information applicable in India may not be relevant or
                accurate in other jurisdictions. If your matter involves international or foreign law aspects,
                specific advice should be sought.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">6. No Guarantee of Results</h2>
              <p className="leading-relaxed mb-4">
                We do not guarantee specific outcomes or results:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Past results do not guarantee future performance</li>
                <li>Every legal matter is unique with its own facts and circumstances</li>
                <li>Legal outcomes depend on many factors beyond our control</li>
                <li>Courts, tribunals, and arbitrators exercise independent judgment</li>
                <li>Success in previous cases does not ensure success in your case</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Any case studies, testimonials, or past results mentioned are not indicative of future outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">7. Third-Party Content and Links</h2>
              <p className="leading-relaxed mb-4">
                Our website may contain links to third-party websites or reference third-party content:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We do not control or endorse third-party websites or content</li>
                <li>We are not responsible for the accuracy of third-party information</li>
                <li>Links are provided for convenience only</li>
                <li>We assume no liability for third-party content or services</li>
                <li>Third-party sites have their own terms and privacy policies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">8. Limitation of Liability</h2>
              <p className="leading-relaxed mb-4">
                To the fullest extent permitted by law, Judicium Arbitration and its partners, employees,
                and agents shall not be liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Any damages arising from use or inability to use this website</li>
                <li>Any errors, omissions, or inaccuracies in the content</li>
                <li>Any losses resulting from reliance on information provided</li>
                <li>Any indirect, consequential, or punitive damages</li>
                <li>Any damages from viruses or other harmful components</li>
                <li>Any unauthorized access to or use of our servers</li>
              </ul>
              <p className="leading-relaxed mt-4">
                This limitation applies even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">9. Confidential Information</h2>
              <p className="leading-relaxed">
                <strong className="text-gold-secondary">DO NOT</strong> send confidential information through
                this website or email until an attorney-client relationship has been established. Communications
                through this website or unsolicited emails may not be treated as privileged or confidential.
                We may be unable to represent you if you send confidential information before retention due to
                conflicts of interest or other reasons.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">10. Bar Council Compliance</h2>
              <p className="leading-relaxed mb-4">
                This website is in compliance with the Bar Council of India Rules and regulations:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We do not solicit work or advertise through this website</li>
                <li>Information is provided for informational purposes only</li>
                <li>We maintain professional standards and ethics</li>
                <li>The website does not constitute solicitation or advertisement</li>
              </ul>
              <p className="leading-relaxed mt-4">
                By accessing this website, you acknowledge that you are seeking information on your own initiative
                and that there has been no advertisement, solicitation, or inducement from us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">11. Professional Conduct</h2>
              <p className="leading-relaxed">
                Our services are governed by the Advocates Act, 1961, Bar Council of India Rules, and professional
                standards of conduct. We maintain the highest standards of professional ethics, integrity, and
                confidentiality in all our client engagements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">12. Testimonials and Case Studies</h2>
              <p className="leading-relaxed mb-4">
                Any testimonials or case studies on this website:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reflect individual experiences and may not be representative</li>
                <li>Are not guarantees of similar outcomes in other cases</li>
                <li>Have been provided voluntarily by clients</li>
                <li>May not reflect the experience of all clients</li>
                <li>Should not be considered as endorsement of our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">13. Changes to Website Content</h2>
              <p className="leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any aspect of this website at any time
                without notice. We may also update or change the information provided without prior notification.
                It is your responsibility to check for updates periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">14. Governing Law</h2>
              <p className="leading-relaxed">
                This disclaimer and your use of this website are governed by the laws of India. Any disputes
                shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">15. Severability</h2>
              <p className="leading-relaxed">
                If any provision of this disclaimer is found to be invalid or unenforceable, the remaining
                provisions shall continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">16. Updates to Disclaimer</h2>
              <p className="leading-relaxed">
                We may update this disclaimer from time to time. The updated version will be posted on this page
                with a revised "Last Updated" date. Your continued use of the website after changes constitutes
                acceptance of the modified disclaimer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold-primary mb-4">17. Contact Information</h2>
              <p className="leading-relaxed mb-4">
                For questions about this disclaimer or to discuss your legal needs:
              </p>
              <div className="bg-linear-to-br from-gold-primary/10 to-transparent p-6 rounded-xl border border-gold-primary/30">
                <p className="mb-2"><strong>Judicium Arbitration</strong></p>
                <p className="mb-2">Email: <a href="mailto:Judiciumarbitration@gmail.com" className="text-gold-primary hover:text-gold-secondary">Judiciumarbitration@gmail.com</a></p>
                <p className="mb-2">Phone: +91-XXX-XXX-XXXX</p>
                <p>Address: New Delhi, India</p>
              </div>
            </section>

            <section className="mt-8 pt-8 border-t border-gold-primary/20">
              <div className="bg-gold-primary/10 p-6 rounded-xl border border-gold-primary/30">
                <p className="text-lg font-semibold text-gold-primary mb-4">
                  <strong>ACCEPTANCE OF DISCLAIMER</strong>
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  By using this website, you acknowledge that you have read, understood, and agree to be bound
                  by this disclaimer. If you do not agree with any part of this disclaimer, please do not use
                  this website or our services.
                </p>
              </div>
            </section>

            <section className="mt-8">
              <div className="bg-linear-to-br from-gold-secondary/10 to-transparent p-6 rounded-xl border border-gold-secondary/30">
                <p className="text-sm text-foreground/70 leading-relaxed">
                  <strong>Notice:</strong> The information on this website is for general guidance only. Laws
                  and their interpretation change over time, and the details of your matter may vary. For specific
                  legal advice tailored to your situation, please contact us directly to arrange a formal
                  consultation. Do not send confidential information until an attorney-client relationship has
                  been formally established.
                </p>
              </div>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}
