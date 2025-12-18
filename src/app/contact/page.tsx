import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Contact Us | Judicium Arbitration - Get Legal Consultation",
  description: "Contact Judicium Arbitration for expert legal consultation across Delhi, Gurgaon, Noida, Chandigarh, Jaipur. Schedule a consultation with our arbitration experts today.",
  keywords: [
    "contact Judicium",
    "legal consultation Delhi",
    "arbitration lawyers contact",
    "law firm offices NCR",
    "schedule legal consultation"
  ].join(", "),
  openGraph: {
    title: "Contact Us | Judicium Arbitration",
    description: "Get in touch for expert legal consultation across North India",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20 sm:pt-22 md:pt-24">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-bg-dark via-bg-alt-dark to-bg-dark py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 50%, #D4AF37 0%, transparent 50%), radial-gradient(circle at 80% 80%, #C9A040 0%, transparent 50%)',
            }}
          ></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, #D4AF37 0px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #D4AF37 0px, transparent 1px, transparent 40px)',
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center justify-center gap-2 text-foreground/60">
              <li>
                <Link href="/" className="hover:text-gold-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-gold-primary">Contact Us</li>
            </ol>
          </nav>

          {/* Main Heading */}
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-6">
              <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gold-primary tracking-tight">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Ready to resolve your dispute? Let our experienced team guide you with
              professional legal expertise
            </p>
          </div>

          {/* Quick Contact Options */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <a
              href="mailto:Judiciumarbitration@gmail.com"
              className="group relative bg-linear-to-br from-bg-alt-dark to-bg-dark p-6 rounded-2xl border border-gold-primary/20 hover:border-gold-primary/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gold-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10 text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-gold-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <p className="text-sm text-foreground/60 mb-2">Email Us</p>
                <p className="text-gold-secondary font-semibold text-sm break-all">Judiciumarbitration@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+91-XXX-XXX-XXXX"
              className="group relative bg-linear-to-br from-bg-alt-dark to-bg-dark p-6 rounded-2xl border border-gold-primary/20 hover:border-gold-primary/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gold-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10 text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-gold-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <p className="text-sm text-foreground/60 mb-2">Call Us</p>
                <p className="text-gold-secondary font-semibold">+91-XXX-XXX-XXXX</p>
              </div>
            </a>

            <div className="group relative bg-linear-to-br from-bg-alt-dark to-bg-dark p-6 rounded-2xl border border-gold-primary/20">
              <div className="relative z-10 text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-gold-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <p className="text-sm text-foreground/60 mb-2">Business Hours</p>
                <p className="text-gold-secondary font-semibold text-sm">Mon-Fri: 9 AM - 6 PM</p>
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

              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gold-secondary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-bg-alt-dark border border-gold-primary/20 rounded-lg focus:outline-none focus:border-gold-primary/50 text-foreground transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gold-secondary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-bg-alt-dark border border-gold-primary/20 rounded-lg focus:outline-none focus:border-gold-primary/50 text-foreground transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gold-secondary mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-bg-alt-dark border border-gold-primary/20 rounded-lg focus:outline-none focus:border-gold-primary/50 text-foreground transition-colors"
                    placeholder="+91-XXX-XXX-XXXX"
                  />
                </div>

                {/* Practice Area */}
                <div>
                  <label htmlFor="practice-area" className="block text-sm font-semibold text-gold-secondary mb-2">
                    Practice Area of Interest
                  </label>
                  <select
                    id="practice-area"
                    name="practice-area"
                    className="w-full px-4 py-3 bg-bg-alt-dark border border-gold-primary/20 rounded-lg focus:outline-none focus:border-gold-primary/50 text-foreground transition-colors"
                  >
                    <option value="">Select a practice area</option>
                    <option value="arbitration">Arbitration & ADR</option>
                    <option value="banking">Banking & Finance</option>
                    <option value="corporate">Corporate & Commercial</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="ip">Intellectual Property</option>
                    <option value="litigation">Litigation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gold-secondary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-bg-alt-dark border border-gold-primary/20 rounded-lg focus:outline-none focus:border-gold-primary/50 text-foreground transition-colors resize-none"
                    placeholder="Please describe your legal matter and how we can assist you..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gold-primary text-bg-dark font-semibold rounded-lg hover:bg-gold-secondary transition-all duration-300 hover:shadow-lg hover:shadow-gold-primary/20"
                >
                  Send Message
                </button>

                <p className="text-xs text-foreground/50 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
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
                    icon: "🏛️"
                  },
                  {
                    city: "Gurgaon",
                    badge: "Corporate Hub",
                    address: "DLF Cyber City, Gurgaon, Haryana",
                    icon: "🏢"
                  },
                  {
                    city: "Noida",
                    badge: "Commercial Center",
                    address: "Sector 62, Noida, Uttar Pradesh",
                    icon: "🏗️"
                  },
                  {
                    city: "Chandigarh",
                    badge: "Regional Office",
                    address: "Sector 17, Chandigarh, Punjab",
                    icon: "🏛️"
                  }
                ].map((office, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-linear-to-br from-bg-alt-dark to-bg-dark p-6 rounded-2xl border border-gold-primary/10 hover:border-gold-primary/30 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gold-primary/5 rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-300"></div>
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{office.icon}</span>
                          <div>
                            <h3 className="text-xl font-bold text-gold-secondary">{office.city}</h3>
                            <span className="inline-block px-2 py-1 bg-gold-primary/10 rounded-full text-xs text-gold-primary mt-1">
                              {office.badge}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-foreground/70 text-sm flex items-start gap-2">
                        <svg className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                        </svg>
                        {office.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Contact Info */}
              <div className="bg-linear-to-br from-gold-primary/10 to-transparent p-8 rounded-2xl border border-gold-primary/30">
                <h3 className="text-xl font-bold text-gold-secondary mb-6">Other Ways to Reach Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold-primary shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Email</p>
                      <a href="mailto:Judiciumarbitration@gmail.com" className="text-gold-primary hover:text-gold-secondary transition-colors break-all">
                        Judiciumarbitration@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold-primary shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Phone</p>
                      <a href="tel:+91-XXX-XXX-XXXX" className="text-gold-primary hover:text-gold-secondary transition-colors">
                        +91-XXX-XXX-XXXX
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold-primary shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Business Hours</p>
                      <p className="text-gold-primary">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                      <p className="text-foreground/60 text-sm mt-1">Closed on Weekends & Public Holidays</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* All Locations Grid */}
      <Section dark>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-6">
              <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                Our Presence
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-primary mb-4">
              Serving 8 Cities Across North India
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Strategically positioned offices for accessible and efficient legal services
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { name: "New Delhi", icon: "🏛️", desc: "HQ" },
              { name: "Gurgaon", icon: "🏢", desc: "Corporate" },
              { name: "Noida", icon: "🏗️", desc: "Commercial" },
              { name: "Ghaziabad", icon: "🌆", desc: "Industrial" },
              { name: "Greater NCR", icon: "📍", desc: "Extended" },
              { name: "Chandigarh", icon: "🏛️", desc: "Regional" },
              { name: "Jaipur", icon: "🕌", desc: "Rajasthan" },
              { name: "Panipat", icon: "🏙️", desc: "Service" },
            ].map((city, idx) => (
              <div
                key={idx}
                className="group relative bg-linear-to-br from-bg-alt-dark to-bg-dark p-6 rounded-2xl border border-gold-primary/10 hover:border-gold-primary/40 transition-all duration-300 text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gold-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-3">{city.icon}</div>
                  <h3 className="text-lg font-bold text-gold-secondary group-hover:text-gold-primary transition-colors mb-1">
                    {city.name}
                  </h3>
                  <p className="text-xs text-foreground/60">{city.desc}</p>
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
            {[
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
                answer: "Yes, we offer consultations across all 8 cities we serve: Delhi, Gurgaon, Noida, Ghaziabad, NCR, Chandigarh, Jaipur, and Panipat. We can also arrange virtual consultations if preferred."
              },
              {
                question: "What are your consultation fees?",
                answer: "Consultation fees vary depending on the complexity of the matter and the practice area. Please contact us directly to discuss fees for your specific situation. We offer transparent pricing with no hidden costs."
              },
              {
                question: "How long does the arbitration process typically take?",
                answer: "Under the amended Arbitration Act, arbitral tribunals are mandated to complete proceedings within 12 months from the date of completion of pleadings, with a possible 6-month extension. We work efficiently to resolve matters within statutory timelines."
              }
            ].map((faq, idx) => (
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
      <Section dark>
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-linear-to-br from-gold-primary/10 to-transparent p-10 sm:p-12 md:p-16 rounded-3xl border border-gold-primary/30 overflow-hidden text-center">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, #D4AF37 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            ></div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-primary mb-6">
                Ready to Resolve Your Dispute?
              </h2>
              <p className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
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
      </Section>
    </main>
  );
}
