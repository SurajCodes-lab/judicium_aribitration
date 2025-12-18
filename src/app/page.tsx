import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Section from "@/components/Section";
import { practiceAreasData } from "@/data/practiceAreas";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-18 md:pt-20 lg:pt-22">
        {/* Background Image - starts below header */}
        <div className="absolute left-0 right-0 bottom-0 top-16 sm:top-18 md:top-20 lg:top-22">
          <Image
            src="/hero-bg.jpg"
            alt="Judicium Arbitration Background"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 w-full max-w-[90vw] xl:max-w-[85vw] 2xl:max-w-[80vw] mx-auto px-4 text-center">
          {/* Main Heading */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-2 sm:mb-3 md:mb-4 text-gold-primary tracking-tight" style={{ textShadow: '0 0 40px rgba(212, 175, 55, 0.5), 0 0 80px rgba(212, 175, 55, 0.3)' }}>
              JUDICIUM
            </h1>
            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
              <div className="h-px sm:h-0.5 w-8 sm:w-12 md:w-16 lg:w-20 bg-linear-to-r from-transparent via-gold-primary to-gold-primary"></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light text-gold-secondary tracking-widest">
                ARBITRATION
              </h2>
              <div className="h-px sm:h-0.5 w-8 sm:w-12 md:w-16 lg:w-20 bg-linear-to-l from-transparent via-gold-primary to-gold-primary"></div>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-foreground/90 mb-2 sm:mb-3 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto font-light leading-relaxed px-4">
            Leading Arbitration & Alternative Dispute Resolution
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gold-secondary/80 mb-6 sm:mb-8 flex items-center justify-center gap-2 flex-wrap px-4">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            <span className="text-center">Delhi | Gurgaon | Noida | Ghaziabad | NCR | Chandigarh | Jaipur | Panipat</span>
          </p>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 lg:gap-12 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 py-6 sm:py-8 border-y border-gold-primary/20">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gold-primary mb-1">20+</div>
              <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-foreground/60 uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center border-x border-gold-primary/20">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gold-primary mb-1">500+</div>
              <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-foreground/60 uppercase tracking-wider">Cases Resolved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gold-primary mb-1">98%</div>
              <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-foreground/60 uppercase tracking-wider">Success Rate</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Button variant="primary" size="lg" href="/practice-areas">
              Explore Our Services
            </Button>
            <Button variant="secondary" size="lg" href="#contact">
              Schedule Consultation
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gold-primary/60 uppercase tracking-widest">Scroll</span>
            <svg className="w-6 h-6 text-gold-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* About / Positioning Section */}
      <Section id="about" dark>
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-3 sm:mb-4">
            <span className="text-gold-secondary text-xs sm:text-sm font-semibold uppercase tracking-wider">About Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 text-gold-primary px-4">
            Strategic Presence Across North India
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4">
            Serving 8 major cities including Delhi, Gurgaon, Noida, Ghaziabad, NCR, Chandigarh, Jaipur, and Panipat.
            Our strategy is rooted in economic and legal demand, positioning us as a strong player in North India&apos;s legal ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          {/* Head Office Card */}
          <div className="group relative bg-linear-to-br from-bg-alt-dark to-bg-dark p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl border border-gold-primary/20 hover:border-gold-primary/40 transition-all duration-500 hover:transform hover:scale-[1.02] overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gold-primary/5 rounded-full blur-3xl transition-all duration-500 group-hover:w-32 group-hover:h-32 sm:group-hover:w-48 sm:group-hover:h-48"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-gold-primary/10 rounded-lg sm:rounded-xl shrink-0">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gold-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gold-secondary">Head Office: New Delhi</h3>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-foreground/70 leading-relaxed">
                New Delhi is our headquarters and the largest arbitration center in North India. With presence across
                Delhi, Gurgaon, Noida, Ghaziabad, and Greater NCR, we serve the region's key commercial hubs. Our proximity
                to the Delhi International Arbitration Centre (DIAC), Supreme Court, and High Court positions us perfectly
                for resolving major Domestic and International Commercial Disputes.
              </p>
            </div>
          </div>

          {/* Expert Leadership Card */}
          <div className="group relative bg-linear-to-br from-bg-alt-dark to-bg-dark p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl border border-gold-primary/20 hover:border-gold-primary/40 transition-all duration-500 hover:transform hover:scale-[1.02] overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gold-secondary/5 rounded-full blur-3xl transition-all duration-500 group-hover:w-32 group-hover:h-32 sm:group-hover:w-48 sm:group-hover:h-48"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-gold-secondary/10 rounded-lg sm:rounded-xl shrink-0">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gold-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gold-secondary">Expert Leadership</h3>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-foreground/70 leading-relaxed">
                Co-founder Nadeem&apos;s 20 years of experience at KKD Court provides us with an intricate understanding
                of the ground reality and the dispute lifecycle, which is decisive in Delhi&apos;s high-stakes arbitration matters.
                Our team combines deep legal expertise with practical market knowledge.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Judicium */}
        <div className="relative bg-linear-to-br from-gold-primary/5 to-transparent p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 rounded-2xl sm:rounded-3xl border border-gold-primary/20 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, #D4AF37 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}></div>
          </div>
          <div className="relative z-10">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gold-primary mb-3 sm:mb-4 px-4">Why Choose Judicium?</h3>
              <p className="text-sm sm:text-base lg:text-lg text-foreground/70 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-4">
                We combine strategic positioning, deep expertise, and client-focused service to deliver exceptional results
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {[
                { icon: "🎯", title: "Strategic Location", desc: "In key demand centers" },
                { icon: "⚖️", title: "Legal Expertise", desc: "Deep local knowledge" },
                { icon: "📊", title: "Proven Track Record", desc: "20+ years experience" },
                { icon: "🤝", title: "Client-Centric", desc: "Tailored solutions" },
              ].map((item, idx) => (
                <div key={idx} className="text-center group px-2">
                  <div className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
                  <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gold-secondary mb-1 sm:mb-2">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-foreground/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Practice Areas Section */}
      <Section id="practice-areas">
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-3 sm:mb-4">
            <span className="text-gold-secondary text-xs sm:text-sm font-semibold uppercase tracking-wider">Our Expertise</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 text-gold-primary px-4">Practice Areas</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4">
            Comprehensive legal expertise across diverse sectors and specializations, tailored to meet your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {practiceAreasData.map((area, index) => (
            <Link
              key={index}
              href={`/practice-areas/${area.slug}`}
              className="group relative bg-linear-to-br from-bg-alt-dark to-bg-dark p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-gold-primary/10 hover:border-gold-primary/40 transition-all duration-300 hover:transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-primary/10 overflow-hidden cursor-pointer block"
            >
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gold-primary/5 rounded-full blur-2xl transition-all duration-300 group-hover:w-28 group-hover:h-28 sm:group-hover:w-32 sm:group-hover:h-32 group-hover:bg-gold-primary/10"></div>
              <div className="relative z-10 flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gold-primary/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-gold-primary/20 group-hover:scale-110">
                  <span className="text-base sm:text-lg">{area.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gold-secondary mb-1 group-hover:text-gold-primary transition-colors leading-tight">
                    {area.title}
                  </h3>
                  <div className="w-0 h-0.5 bg-gold-primary transition-all duration-300 group-hover:w-8 sm:group-hover:w-12"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center px-4">
          <p className="text-sm sm:text-base text-foreground/60 mb-4 sm:mb-6">Need specialized legal assistance in any of these areas?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/practice-areas">
              View All Practice Areas
            </Button>
            <Button variant="secondary" size="lg" href="#contact">
              Discuss Your Case
            </Button>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" dark>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-3 sm:mb-4">
              <span className="text-gold-secondary text-xs sm:text-sm font-semibold uppercase tracking-wider">Get In Touch</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-gold-primary px-4">
              Ready to Resolve Your Dispute?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto leading-relaxed px-4">
              Let our experienced team guide you through the arbitration process with professionalism and expertise.
              Schedule a consultation today to discuss your case.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-10 sm:mb-12">
            <div className="group relative bg-linear-to-br from-bg-alt-dark to-bg-dark p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gold-primary/20 hover:border-gold-primary/40 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gold-primary/5 rounded-full blur-2xl transition-all duration-500 group-hover:w-28 group-hover:h-28 sm:group-hover:w-32 sm:group-hover:h-32"></div>
              <div className="relative z-10 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gold-primary/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-gold-primary/20 group-hover:scale-110">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gold-secondary mb-3">Our Locations</h3>
                <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/70">
                  <p className="font-medium text-gold-primary/80">New Delhi (HQ)</p>
                  <p>Gurgaon</p>
                  <p>Noida</p>
                  <p>Ghaziabad</p>
                  <p>Greater NCR</p>
                  <p>Chandigarh</p>
                  <p>Jaipur</p>
                  <p>Panipat</p>
                </div>
              </div>
            </div>

            <div className="group relative bg-linear-to-br from-bg-alt-dark to-bg-dark p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gold-primary/20 hover:border-gold-primary/40 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gold-primary/5 rounded-full blur-2xl transition-all duration-500 group-hover:w-28 group-hover:h-28 sm:group-hover:w-32 sm:group-hover:h-32"></div>
              <div className="relative z-10 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gold-primary/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-gold-primary/20 group-hover:scale-110">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gold-secondary mb-3">Email Us</h3>
                <a href="mailto:Judiciumarbitration@gmail.com" className="text-sm sm:text-base text-foreground/70 hover:text-gold-primary transition-colors break-all px-2">
                  Judiciumarbitration@gmail.com
                </a>
                <p className="text-xs sm:text-sm text-foreground/50 mt-2">We respond within 24 hours</p>
              </div>
            </div>

            <div className="group relative bg-linear-to-br from-bg-alt-dark to-bg-dark p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gold-primary/20 hover:border-gold-primary/40 transition-all duration-500 overflow-hidden sm:col-span-2 lg:col-span-1">
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gold-primary/5 rounded-full blur-2xl transition-all duration-500 group-hover:w-28 group-hover:h-28 sm:group-hover:w-32 sm:group-hover:h-32"></div>
              <div className="relative z-10 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gold-primary/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-gold-primary/20 group-hover:scale-110">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gold-secondary mb-3">Business Hours</h3>
                <p className="text-sm sm:text-base text-foreground/70">Monday - Friday</p>
                <p className="text-base sm:text-lg text-gold-primary/80 font-medium mt-1">9:00 AM - 6:00 PM</p>
                <p className="text-xs sm:text-sm text-foreground/50 mt-2">IST (Indian Standard Time)</p>
              </div>
            </div>
          </div>

          <div className="relative bg-linear-to-br from-gold-primary/10 to-transparent p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 rounded-2xl sm:rounded-3xl border border-gold-primary/30 overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, #D4AF37 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}></div>
            </div>
            <div className="relative z-10 text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gold-primary mb-3 sm:mb-4 px-4">
                Schedule Your Consultation Today
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-foreground/70 mb-6 sm:mb-8 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-4">
                Take the first step towards resolving your dispute. Our team is ready to provide expert guidance and strategic solutions tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button variant="primary" size="lg" href="mailto:Judiciumarbitration@gmail.com">
                  Schedule a Consultation
                </Button>
                <Button variant="secondary" size="lg" href="tel:+91-XXX-XXX-XXXX">
                  Call Us Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

    </main>
  );
}

