import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { practiceAreasData } from "@/data/practiceAreas";

export const metadata: Metadata = {
  title: "Practice Areas | Judicium Arbitration - Expert Legal Services in North India",
  description: "Comprehensive legal services across 20+ practice areas including Arbitration, Banking, Corporate Law, IP, Real Estate, and more. Serving Delhi, Gurgaon, Noida, Chandigarh, Jaipur.",
  keywords: [
    "legal practice areas India",
    "law firm services Delhi",
    "arbitration lawyers",
    "corporate lawyers NCR",
    "legal services Chandigarh",
    "comprehensive legal advisory"
  ].join(", "),
  openGraph: {
    title: "Practice Areas | Judicium Arbitration",
    description: "Expert legal services across 20+ practice areas in North India",
    type: "website",
  },
};

export default function PracticeAreasPage() {
  // Group practice areas by category for better organization
  const categories = {
    "Dispute Resolution": [
      "arbitration-alternative-dispute-resolution",
      "dispute-resolution-litigation",
      "insolvency-bankruptcy"
    ],
    "Corporate & Commercial": [
      "corporate-commercial",
      "corporate-mergers-acquisitions",
      "banking-finance",
      "capital-markets",
      "private-equity-investment-funds"
    ],
    "Regulatory & Compliance": [
      "competition-antitrust",
      "data-privacy-cybersecurity",
      "labour-employment",
      "insurance"
    ],
    "Intellectual Property & Technology": [
      "intellectual-property-rights",
      "technology-media-telecommunication"
    ],
    "Infrastructure & Real Estate": [
      "real-estate-urban-development",
      "projects-infrastructure"
    ],
    "Specialized Services": [
      "healthcare-lifesciences",
      "international-trade-wto",
      "white-collar-crime",
      "defence-aviation-space"
    ]
  };

  const getPracticeAreasByCategory = (slugs: string[]) => {
    return practiceAreasData.filter(area => slugs.includes(area.slug));
  };

  return (
    <main className="min-h-screen pt-20 sm:pt-22 md:pt-24">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-bg-dark via-bg-alt-dark to-bg-dark py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
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
              <li className="text-gold-primary">Practice Areas</li>
            </ol>
          </nav>

          {/* Main Heading */}
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-6">
              <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                Our Expertise
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gold-primary tracking-tight">
              Practice Areas
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Comprehensive legal expertise across diverse sectors, delivering strategic solutions
              tailored to your unique needs
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto mt-12">
            {[
              { number: "20+", label: "Practice Areas" },
              { number: "500+", label: "Cases Resolved" },
              { number: "98%", label: "Success Rate" },
              { number: "8", label: "Cities Served" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-foreground/60 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Served Section */}
      <Section>
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-6">
            <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
              Our Presence
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-primary mb-8">
            Cities We Serve
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {[
              { name: "New Delhi", icon: "🏛️" },
              { name: "Gurgaon", icon: "🏢" },
              { name: "Noida", icon: "🏗️" },
              { name: "Ghaziabad", icon: "🌆" },
              { name: "Greater NCR", icon: "📍" },
              { name: "Chandigarh", icon: "🏛️" },
              { name: "Jaipur", icon: "🕌" },
              { name: "Panipat", icon: "🏙️" },
            ].map((city, idx) => (
              <div
                key={idx}
                className="group relative bg-linear-to-br from-bg-alt-dark to-bg-dark p-6 rounded-xl border border-gold-primary/10 hover:border-gold-primary/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gold-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-3">{city.icon}</div>
                  <h3 className="text-base sm:text-lg font-semibold text-gold-secondary group-hover:text-gold-primary transition-colors">
                    {city.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <p className="text-foreground/70 text-base sm:text-lg max-w-3xl mx-auto">
            Strategically positioned across North India's key commercial and legal hubs, providing
            accessible and efficient legal services to our clients
          </p>
        </div>
      </Section>

      {/* Practice Areas by Category */}
      {Object.entries(categories).map(([categoryName, slugs], categoryIdx) => {
        const areas = getPracticeAreasByCategory(slugs);
        const isDark = categoryIdx % 2 === 1;

        return (
          <Section key={categoryName} dark={isDark}>
            <div className="max-w-7xl mx-auto">
              {/* Category Header */}
              <div className="text-center mb-10 sm:mb-12 md:mb-16">
                <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-4">
                  <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                    {categoryName}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gold-primary">
                  {categoryName}
                </h2>
              </div>

              {/* Practice Area Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {areas.map((area, idx) => (
                  <Link
                    key={area.slug}
                    href={`/practice-areas/${area.slug}`}
                    className="group relative bg-linear-to-br from-bg-alt-dark to-bg-dark rounded-2xl border border-gold-primary/20 hover:border-gold-primary/50 transition-all duration-500 overflow-hidden block"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-linear-to-br from-gold-primary/0 to-gold-secondary/0 group-hover:from-gold-primary/10 group-hover:to-gold-secondary/5 transition-all duration-500"></div>

                    {/* Floating Orb */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold-primary/10 rounded-full blur-3xl group-hover:w-40 group-hover:h-40 transition-all duration-500"></div>

                    <div className="relative z-10 p-6 sm:p-8">
                      {/* Icon */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 bg-gold-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-gold-primary/20 group-hover:scale-110 transition-all duration-300">
                        <span className="text-3xl sm:text-4xl">{area.icon}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-gold-secondary mb-3 group-hover:text-gold-primary transition-colors">
                        {area.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-6 line-clamp-3">
                        {area.description}
                      </p>

                      {/* Arrow Icon */}
                      <div className="flex items-center gap-2 text-gold-primary">
                        <span className="text-sm font-semibold uppercase tracking-wider">Learn More</span>
                        <svg
                          className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>

                      {/* Service Count Badge */}
                      <div className="absolute top-6 right-6 px-3 py-1 bg-gold-primary/20 backdrop-blur-sm rounded-full">
                        <span className="text-xs font-semibold text-gold-primary">
                          {area.content.services.length} Services
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Section>
        );
      })}

      {/* Why Choose Our Legal Services */}
      <Section dark>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-4">
              <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                Our Advantage
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-primary mb-4">
              Why Choose Judicium Arbitration?
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Combining strategic positioning, deep expertise, and client-focused service across North India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Strategic Location",
                description: "Offices in key legal and commercial hubs of North India including Delhi, NCR, Chandigarh, and Jaipur"
              },
              {
                icon: "⚖️",
                title: "Expert Team",
                description: "20+ years of combined experience with deep understanding of Indian legal landscape and business needs"
              },
              {
                icon: "📊",
                title: "Proven Track Record",
                description: "Successfully resolved 500+ cases with 98% success rate across diverse practice areas"
              },
              {
                icon: "🤝",
                title: "Client-Centric Approach",
                description: "Tailored legal solutions aligned with your business objectives and commercial realities"
              },
              {
                icon: "⚡",
                title: "Efficient Resolution",
                description: "Strategic approach focused on timely and cost-effective dispute resolution"
              },
              {
                icon: "🌐",
                title: "Comprehensive Coverage",
                description: "Full-service legal advisory across 20+ practice areas serving diverse industry sectors"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-linear-to-br from-bg-alt-dark to-bg-dark p-8 rounded-2xl border border-gold-primary/20 hover:border-gold-primary/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gold-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gold-secondary mb-3 group-hover:text-gold-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
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
                Ready to Get Started?
              </h2>
              <p className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
                Let our experienced team provide you with expert legal guidance tailored to your specific needs.
                Contact us today for a consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" href="/#contact">
                  Schedule Consultation
                </Button>
                <Button variant="secondary" size="lg" href="/">
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
