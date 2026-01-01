import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { practiceAreasData } from "@/data/practiceAreas";
import { LawIcons } from "@/components/Icons";

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
      <section className="relative bg-[#0D1117] py-16 sm:py-20 lg:py-24 overflow-hidden">
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
          <LawIcons.Book className="w-20 h-20 text-gold-primary" />
        </div>
        <div className="absolute right-[8%] bottom-[25%] opacity-[0.10]">
          <LawIcons.Gavel className="w-16 h-16 text-gold-primary" />
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
              <li>/</li>
              <li className="text-gold-primary">Practice Areas</li>
            </ol>
          </nav>

          {/* Main Heading */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gold-primary/10 border border-gold-primary/30 rounded-full mb-6">
              <LawIcons.Book className="w-4 h-4 text-gold-primary" />
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
              { number: "20+", label: "Practice Areas", Icon: LawIcons.Book },
              { number: "500+", label: "Cases Resolved", Icon: LawIcons.Document },
              { number: "98%", label: "Success Rate", Icon: LawIcons.Trophy },
              { number: "8", label: "Cities Served", Icon: LawIcons.Location },
            ].map((stat, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gold-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-[#161B22] p-6 rounded-2xl border border-gold-primary/20 group-hover:border-gold-primary/40 transition-all duration-300">
                  <stat.Icon className="w-6 h-6 text-gold-primary/60 mx-auto mb-2" />
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-foreground/60 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Served Section */}
      <Section variant="gradient">
        {/* Floating Icons */}
        <div className="absolute left-[5%] top-[20%] opacity-[0.10]">
          <LawIcons.Location className="w-16 h-16 text-gold-primary" />
        </div>
        <div className="absolute right-[8%] bottom-[25%] opacity-[0.08]">
          <LawIcons.Building className="w-20 h-20 text-gold-primary" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gold-primary/10 border border-gold-primary/30 rounded-full mb-6">
            <LawIcons.Location className="w-4 h-4 text-gold-primary" />
            <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
              Our Presence
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Cities We <span className="text-gold-primary">Serve</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-10">
            Strategically positioned across North India's key commercial and legal hubs
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mb-10">
            {[
              { name: "New Delhi", Icon: LawIcons.Landmark },
              { name: "Gurgaon", Icon: LawIcons.Building },
              { name: "Noida", Icon: LawIcons.City },
              { name: "Ghaziabad", Icon: LawIcons.City },
              { name: "Greater NCR", Icon: LawIcons.Location },
              { name: "Chandigarh", Icon: LawIcons.Landmark },
              { name: "Jaipur", Icon: LawIcons.Pillar },
              { name: "Panipat", Icon: LawIcons.Building },
            ].map((city, idx) => (
              <div
                key={idx}
                className="group relative bg-[#161B22] p-6 rounded-xl border border-gold-primary/20 hover:border-gold-primary/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gold-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-gold-primary to-gold-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-gold-primary/30">
                    <city.Icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-gold-primary transition-colors">
                    {city.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
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
                    className="group relative bg-[#161B22] rounded-2xl border border-gold-primary/20 hover:border-gold-primary/50 transition-all duration-500 overflow-hidden block"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gold-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Floating Orb */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold-primary/10 rounded-full blur-3xl group-hover:w-40 group-hover:h-40 transition-all duration-500"></div>

                    <div className="relative z-10 p-6 sm:p-8">
                      {/* Icon */}
                      <div className="w-16 h-16 sm:w-18 sm:h-18 mb-6 bg-gradient-to-br from-gold-primary to-gold-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-gold-primary/30">
                        <span className="text-3xl sm:text-4xl">{area.icon}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-gold-primary transition-colors">
                        {area.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6 line-clamp-3">
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
                      <div className="absolute top-6 right-6 px-3 py-1 bg-gold-primary/20 rounded-full border border-gold-primary/30">
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
      <Section variant="dark">
        {/* Floating Icons */}
        <div className="absolute right-[5%] top-[15%] opacity-[0.10]">
          <LawIcons.Shield className="w-20 h-20 text-gold-primary" />
        </div>
        <div className="absolute left-[8%] bottom-[20%] opacity-[0.08]">
          <LawIcons.Trophy className="w-16 h-16 text-gold-primary" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gold-primary/10 border border-gold-primary/30 rounded-full mb-6">
              <LawIcons.Shield className="w-4 h-4 text-gold-primary" />
              <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                Our Advantage
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-gold-primary">Judicium</span>?
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              Combining strategic positioning, deep expertise, and client-focused service across North India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                Icon: LawIcons.Target,
                title: "Strategic Location",
                description: "Offices in key legal and commercial hubs of North India including Delhi, NCR, Chandigarh, and Jaipur"
              },
              {
                Icon: LawIcons.Scales,
                title: "Expert Team",
                description: "20+ years of combined experience with deep understanding of Indian legal landscape and business needs"
              },
              {
                Icon: LawIcons.Chart,
                title: "Proven Track Record",
                description: "Successfully resolved 500+ cases with 98% success rate across diverse practice areas"
              },
              {
                Icon: LawIcons.Handshake,
                title: "Client-Centric Approach",
                description: "Tailored legal solutions aligned with your business objectives and commercial realities"
              },
              {
                Icon: LawIcons.Lightning,
                title: "Efficient Resolution",
                description: "Strategic approach focused on timely and cost-effective dispute resolution"
              },
              {
                Icon: LawIcons.Globe,
                title: "Comprehensive Coverage",
                description: "Full-service legal advisory across 20+ practice areas serving diverse industry sectors"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-[#161B22] p-8 rounded-2xl border border-gold-primary/20 hover:border-gold-primary/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gold-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 mb-5 bg-gradient-to-br from-gold-primary to-gold-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-gold-primary/30">
                    <item.Icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="gold">
        {/* Floating decorative icons */}
        <div className="absolute left-[5%] top-[25%] opacity-[0.12]">
          <LawIcons.Gavel className="w-16 h-16 text-gold-primary" />
        </div>
        <div className="absolute right-[8%] bottom-[25%] opacity-[0.10]">
          <LawIcons.Handshake className="w-20 h-20 text-gold-primary" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-primary/30 via-gold-primary/20 to-gold-secondary/30 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-r from-gold-primary/20 to-gold-secondary/20 p-10 sm:p-12 md:p-16 rounded-3xl border border-gold-primary/40 overflow-hidden text-center">
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, #F0C246 1px, transparent 0)',
                  backgroundSize: '24px 24px',
                }}
              ></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gold-primary to-gold-secondary rounded-2xl flex items-center justify-center shadow-lg shadow-gold-primary/40">
                  <LawIcons.Scales className="w-10 h-10 text-black" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to <span className="text-gold-primary">Get Started</span>?
                </h2>
                <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                  Let our experienced team provide you with expert legal guidance tailored to your specific needs.
                  Contact us today for a consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg" href="/contact">
                    Schedule Consultation
                  </Button>
                  <Button variant="secondary" size="lg" href="/">
                    Back to Home
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
