import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import { LawIcons } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact Us | Judicium Arbitration - Get Legal Consultation",
  description: "Contact Judicium Arbitration's expert arbitration lawyers in Delhi NCR, Chandigarh, Jaipur & across North India. Book a consultation — we reply within 24 hours.",
  // Week 10: meta keywords removed — targeting handled in visible content.
  openGraph: {
    title: "Contact Us | Judicium Arbitration",
    description: "Get in touch for expert legal consultation across North India — Delhi NCR, Chandigarh, Jaipur and beyond.",
    type: "website",
    locale: "en_IN",
    siteName: "Judicium Arbitration",
    url: "https://www.judiciumarbitration.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Judicium Arbitration",
    description: "Schedule an arbitration consultation with North India's trusted ADR lawyers.",
  },
  alternates: {
    canonical: "https://www.judiciumarbitration.com/contact",
    languages: {
      "en-IN": "https://www.judiciumarbitration.com/contact",
      "x-default": "https://www.judiciumarbitration.com/contact",
    },
  },
};

const contactFaqs = [
  {
    question: "How can I schedule a consultation?",
    answer: "You can schedule a consultation by filling out the contact form above, calling us directly, or emailing us. Our team typically responds within 24 hours to arrange a convenient time for your consultation."
  },
  {
    question: "What should I bring to the first consultation?",
    answer: "Please bring any relevant documents related to your case, including contracts, agreements, correspondence, and any legal notices. This will help us better understand your situation and provide accurate advice."
  },
  {
    question: "Do you offer consultations in all cities you serve?",
    answer: "Yes, we offer consultations across all 8 cities we serve: New Delhi, Gurgaon, Noida, Chandigarh, Jaipur, Panipat, Prayagraj, and Lucknow. We can also arrange virtual consultations if preferred."
  },
  {
    question: "What are your consultation fees?",
    answer: "Consultation fees vary depending on the complexity of the matter and the practice area. Please contact us directly to discuss fees for your specific situation. We offer transparent pricing with no hidden costs."
  },
  {
    question: "How long does the arbitration process typically take?",
    answer: "Under the amended Arbitration Act, arbitral tribunals are mandated to complete proceedings within 12 months from the date of completion of pleadings, with a possible 6-month extension. We work efficiently to resolve matters within statutory timelines."
  }
];

const contactFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: contactFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const contactPointSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://www.judiciumarbitration.com/contact#contactpage",
  name: "Contact Judicium Arbitration",
  description:
    "Get in touch with Judicium Arbitration for expert legal consultation across North India",
  url: "https://www.judiciumarbitration.com/contact",
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", "@id": "https://www.judiciumarbitration.com/#website" },
  mainEntity: {
    "@type": "LegalService",
    "@id": "https://www.judiciumarbitration.com/#organization",
    name: "Judicium Arbitration",
    telephone: "+91-9899686394",
    email: "Judiciumarbitration@gmail.com",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9899686394",
        email: "Judiciumarbitration@gmail.com",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi"],
        areaServed: "IN",
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-9899686394",
        email: "Judiciumarbitration@gmail.com",
        contactType: "legal consultation",
        availableLanguage: ["English", "Hindi"],
        areaServed: ["IN-DL", "IN-HR", "IN-UP", "IN-CH", "IN-RJ"],
      },
    ],
  },
};

// BreadcrumbList for SERP hierarchy
const contactBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.judiciumarbitration.com/contact#breadcrumb",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.judiciumarbitration.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: "https://www.judiciumarbitration.com/contact",
    },
  ],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20 sm:pt-22 md:pt-24">
      {/* Structured data for contact page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="relative bg-bg-dark py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Premium gradient overlays */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(240,194,70,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_80%,rgba(229,179,42,0.10),transparent_50%)]" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #F0C246 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          ></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute left-[5%] top-[20%] opacity-[0.12]">
          <LawIcons.Mail className="w-20 h-20 text-gold-primary" />
        </div>
        <div className="absolute right-[8%] bottom-[25%] opacity-[0.10]">
          <LawIcons.Handshake className="w-16 h-16 text-gold-primary" />
        </div>

        {/* Corner frames */}
        <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-gold-primary/30" />
        <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-gold-primary/30" />
        <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-gold-primary/30" />
        <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-gold-primary/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center justify-center gap-2 text-foreground/60">
              <li>
                <Link href="/" className="hover:text-gold-primary transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gold-primary/50">/</li>
              <li className="text-gold-primary font-medium">Contact Us</li>
            </ol>
          </nav>

          {/* Main Heading */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gold-primary/10 border border-gold-primary/30 rounded-full mb-6">
              <LawIcons.Handshake className="w-4 h-4 text-gold-primary" />
              <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gold-primary tracking-tight">
              Contact Our Arbitration Lawyers in Delhi NCR
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Ready to resolve your commercial dispute through arbitration or ADR? Connect with
              North India&apos;s trusted arbitration lawyers for expert legal consultation across
              Delhi NCR, Chandigarh and Jaipur.
            </p>
          </div>

          {/* Quick Contact Options */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <a
              href="mailto:Judiciumarbitration@gmail.com"
              className="group relative bg-bg-alt-dark p-6 rounded-2xl border border-gold-primary/20 hover:border-gold-primary/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gold-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10 text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-linear-to-br from-gold-primary to-gold-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-gold-primary/30">
                  <LawIcons.Mail className="w-7 h-7 text-black" />
                </div>
                <p className="text-sm text-white/60 mb-2">Email Us</p>
                <p className="text-gold-primary font-semibold text-sm break-all">Judiciumarbitration@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+91-9899686394"
              className="group relative bg-bg-alt-dark p-6 rounded-2xl border border-gold-primary/20 hover:border-gold-primary/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gold-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10 text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-linear-to-br from-gold-secondary to-gold-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-gold-secondary/30">
                  <LawIcons.Handshake className="w-7 h-7 text-black" />
                </div>
                <p className="text-sm text-white/60 mb-2">Call Us</p>
                <p className="text-gold-primary font-semibold">+91-9899686394</p>
              </div>
            </a>

            <div className="group relative bg-bg-alt-dark p-6 rounded-2xl border border-gold-primary/20">
              <div className="relative z-10 text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-linear-to-br from-gold-primary to-gold-secondary rounded-xl flex items-center justify-center shadow-lg shadow-gold-primary/30">
                  <LawIcons.Clock className="w-7 h-7 text-black" />
                </div>
                <p className="text-sm text-white/60 mb-2">Business Hours</p>
                <p className="text-gold-primary font-semibold text-sm">Mon-Fri: 9 AM - 6 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-4">
                  <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                    Send a Message
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gold-primary mb-4">
                  Schedule a Consultation
                </h2>
                <p className="text-foreground/70">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-4">
                  <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                    Contact Information
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gold-primary mb-6">
                  Get In Touch Directly
                </h2>
              </div>

              {/* Office Locations */}
              <div className="space-y-6">
                {[
                  {
                    city: "New Delhi",
                    badge: "Headquarters",
                    address: "Supreme Court Area, New Delhi, India",
                    Icon: LawIcons.Landmark
                  },
                  {
                    city: "Gurgaon",
                    badge: "Corporate Hub",
                    address: "DLF Cyber City, Gurgaon, Haryana",
                    Icon: LawIcons.Building
                  },
                  {
                    city: "Noida",
                    badge: "Commercial Center",
                    address: "Sector 62, Noida, Uttar Pradesh",
                    Icon: LawIcons.City
                  },
                  {
                    city: "Chandigarh",
                    badge: "Regional Office",
                    address: "Sector 17, Chandigarh, Punjab",
                    Icon: LawIcons.Landmark
                  },
                  {
                    city: "Jaipur",
                    badge: "Rajasthan Hub",
                    address: "C-Scheme, Jaipur, Rajasthan",
                    Icon: LawIcons.Pillar
                  },
                  {
                    city: "Panipat",
                    badge: "Service Center",
                    address: "GT Road, Panipat, Haryana",
                    Icon: LawIcons.City
                  },
                  {
                    city: "Prayagraj",
                    badge: "Eastern UP Hub",
                    address: "Civil Lines, Prayagraj, Uttar Pradesh",
                    Icon: LawIcons.Landmark
                  },
                  {
                    city: "Lucknow",
                    badge: "State Capital",
                    address: "Hazratganj, Lucknow, Uttar Pradesh",
                    Icon: LawIcons.Building
                  }
                ].map((office, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-bg-alt-dark p-6 rounded-2xl border border-gold-primary/20 hover:border-gold-primary/40 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gold-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-linear-to-br from-gold-primary to-gold-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-gold-primary/30">
                            <office.Icon className="w-6 h-6 text-black" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-gold-primary transition-colors">{office.city}</h3>
                            <span className="inline-block px-2 py-1 bg-gold-primary/20 rounded-full text-xs text-gold-primary mt-1 border border-gold-primary/30">
                              {office.badge}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-white/70 text-sm flex items-start gap-2 ml-16">
                        <LawIcons.Location className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                        {office.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Contact Info */}
              <div className="relative bg-bg-alt-dark p-8 rounded-2xl border border-gold-primary/30 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-gold-primary/10 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-6">Other Ways to Reach Us</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-linear-to-br from-gold-primary/20 to-gold-secondary/10 rounded-lg flex items-center justify-center border border-gold-primary/20">
                        <LawIcons.Mail className="w-5 h-5 text-gold-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-white/50 mb-1">Email</p>
                        <a href="mailto:Judiciumarbitration@gmail.com" className="text-gold-primary hover:text-gold-secondary transition-colors break-all">
                          Judiciumarbitration@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-linear-to-br from-gold-primary/20 to-gold-secondary/10 rounded-lg flex items-center justify-center border border-gold-primary/20">
                        <LawIcons.Handshake className="w-5 h-5 text-gold-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-white/50 mb-1">Phone</p>
                        <a href="tel:+91-9899686394" className="text-gold-primary hover:text-gold-secondary transition-colors">
                          +91-9899686394
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-linear-to-br from-gold-primary/20 to-gold-secondary/10 rounded-lg flex items-center justify-center border border-gold-primary/20">
                        <LawIcons.Clock className="w-5 h-5 text-gold-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-white/50 mb-1">Business Hours</p>
                        <p className="text-gold-primary">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                        <p className="text-white/50 text-sm mt-1">Closed on Weekends & Public Holidays</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* All Locations Grid */}
      <Section variant="dark">
        {/* Floating Icons */}
        <div className="absolute left-[5%] top-[20%] opacity-[0.08]">
          <LawIcons.Location className="w-20 h-20 text-gold-primary" />
        </div>
        <div className="absolute right-[8%] bottom-[25%] opacity-[0.06]">
          <LawIcons.Building className="w-24 h-24 text-gold-primary" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gold-primary/10 border border-gold-primary/30 rounded-full mb-6">
              <LawIcons.Location className="w-4 h-4 text-gold-primary" />
              <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                Our Presence
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Serving <span className="text-gold-primary">8 Cities</span> Across North India
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              Strategically positioned offices for accessible and efficient legal services
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { name: "New Delhi", Icon: LawIcons.Landmark, desc: "HQ" },
              { name: "Gurgaon", Icon: LawIcons.Building, desc: "Corporate" },
              { name: "Noida", Icon: LawIcons.City, desc: "Commercial" },
              { name: "Chandigarh", Icon: LawIcons.Landmark, desc: "Regional" },
              { name: "Jaipur", Icon: LawIcons.Pillar, desc: "Rajasthan" },
              { name: "Panipat", Icon: LawIcons.City, desc: "Service" },
              { name: "Prayagraj", Icon: LawIcons.Landmark, desc: "Eastern UP" },
              { name: "Lucknow", Icon: LawIcons.Building, desc: "State Capital" },
            ].map((city, idx) => (
              <div
                key={idx}
                className="group relative bg-bg-alt-dark p-6 rounded-2xl border border-gold-primary/20 hover:border-gold-primary/40 transition-all duration-300 text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gold-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 bg-linear-to-br from-gold-primary to-gold-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-gold-primary/30">
                    <city.Icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-gold-primary transition-colors mb-1">
                    {city.name}
                  </h3>
                  <p className="text-xs text-white/50">{city.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-6">
              <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                Common Questions
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-primary mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {contactFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-linear-to-br from-bg-alt-dark to-bg-dark p-6 sm:p-8 rounded-2xl border border-gold-primary/20 hover:border-gold-primary/40 transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gold-secondary mb-3">
                  {faq.question}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="gold">
        {/* Floating decorative icons */}
        <div className="absolute left-[5%] top-[25%] opacity-[0.12]">
          <LawIcons.Scales className="w-16 h-16 text-gold-primary" />
        </div>
        <div className="absolute right-[8%] bottom-[25%] opacity-[0.10]">
          <LawIcons.Shield className="w-20 h-20 text-gold-primary" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-gold-primary/30 via-gold-primary/20 to-gold-secondary/30 rounded-3xl blur-xl"></div>
            <div className="relative bg-linear-to-r from-gold-primary/20 to-gold-secondary/20 p-10 sm:p-12 md:p-16 rounded-3xl border border-gold-primary/40 overflow-hidden text-center">
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, #F0C246 1px, transparent 0)',
                  backgroundSize: '24px 24px',
                }}
              ></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-linear-to-br from-gold-primary to-gold-secondary rounded-2xl flex items-center justify-center shadow-lg shadow-gold-primary/40">
                  <LawIcons.Gavel className="w-10 h-10 text-black" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Resolve Your <span className="text-gold-primary">Dispute</span>?
                </h2>
                <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                  Don't let legal disputes hold you back. Contact our expert team today and take
                  the first step towards resolution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg" href="mailto:Judiciumarbitration@gmail.com">
                    Email Us Now
                  </Button>
                  <Button variant="secondary" size="lg" href="/practice-areas">
                    Our Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
