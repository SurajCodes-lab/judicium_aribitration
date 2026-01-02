import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { getTeamMembers } from "@/data/teamMembers";
import { LawIcons } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us | Judicium Arbitration - Leading Legal Experts in North India",
  description: "Learn about Judicium Arbitration's 20+ years of expertise in dispute resolution across Delhi, Gurgaon, Noida, Chandigarh, and Jaipur. Our mission, values, and commitment to excellence.",
  keywords: [
    "about Judicium",
    "law firm Delhi",
    "arbitration experts",
    "legal team North India",
    "dispute resolution specialists"
  ].join(", "),
  openGraph: {
    title: "About Us | Judicium Arbitration",
    description: "Leading legal experts with 20+ years of experience in North India",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20 sm:pt-22 md:pt-24 bg-[#0D1117]">
      {/* Hero Section with Premium Background */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#0D1117]">
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
          <LawIcons.Scales className="w-20 h-20 text-gold-primary" />
        </div>
        <div className="absolute right-[8%] bottom-[25%] opacity-[0.10]">
          <LawIcons.Pillar className="w-16 h-16 text-gold-primary" />
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
              <li className="text-gold-primary">About Us</li>
            </ol>
          </nav>

          {/* Main Heading */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gold-primary/10 border border-gold-primary/30 rounded-full mb-6">
              <LawIcons.Shield className="w-4 h-4 text-gold-primary" />
              <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                Who We Are
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gold-primary tracking-tight">
              About Judicium Arbitration
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Your trusted partner in arbitration and alternative dispute resolution,
              serving North India with excellence and integrity
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto mt-12">
            {[
              { number: "20+", label: "Years Experience", Icon: LawIcons.Shield },
              { number: "500+", label: "Cases Resolved", Icon: LawIcons.Document },
              { number: "98%", label: "Success Rate", Icon: LawIcons.Trophy },
              { number: "10", label: "Cities Served", Icon: LawIcons.Location },
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

      {/* Our Story Section */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-6">
                <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-primary mb-6">
                Building Excellence in Legal Services
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p className="text-base sm:text-lg">
                  Judicium Arbitration was founded with a clear vision: to provide world-class arbitration
                  and alternative dispute resolution services in North India. With over 20 years of combined
                  experience, our team has established itself as a trusted name in the legal landscape.
                </p>
                <p className="text-base sm:text-lg">
                  Our co-founder Nadeem's extensive 20-year tenure at KKD Court has given us unparalleled
                  insights into the dispute lifecycle and ground realities of India's legal system. This
                  experience, combined with our strategic presence across 10 major cities, enables us to
                  deliver exceptional results for our clients.
                </p>
                <p className="text-base sm:text-lg">
                  We specialize in resolving complex commercial disputes through arbitration, mediation,
                  and conciliation, operating from strategically located offices in Delhi, Gurgaon, Noida,
                  Ghaziabad, NCR, Chandigarh, Jaipur, Panipat, Prayagraj, and Lucknow.
                </p>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="absolute inset-0 bg-gold-primary/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-linear-to-br from-bg-alt-dark to-bg-dark p-8 sm:p-12 rounded-3xl border border-gold-primary/30">
                <div className="space-y-6">
                  {[
                    { year: "2003", event: "Foundation & Early Years", description: "Established with a vision for excellence in dispute resolution" },
                    { year: "2010", event: "Regional Expansion", description: "Extended services across NCR and Chandigarh" },
                    { year: "2018", event: "Growth & Recognition", description: "Achieved milestone of 500+ successfully resolved cases" },
                    { year: "2024", event: "Leading Position", description: "Recognized as a premier arbitration firm in North India" }
                  ].map((milestone, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <div className="shrink-0">
                        <div className="w-16 h-16 bg-gold-primary/10 rounded-full flex items-center justify-center group-hover:bg-gold-primary/20 transition-colors duration-300">
                          <span className="text-gold-primary font-bold text-sm">{milestone.year}</span>
                        </div>
                      </div>
                      <div className="flex-1 pt-2">
                        <h4 className="text-lg font-semibold text-gold-secondary mb-1">{milestone.event}</h4>
                        <p className="text-sm text-foreground/70">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission, Vision & Values */}
      <Section variant="dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-6">
              <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                Our Foundation
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-primary mb-4">
              Mission, Vision & Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="group relative bg-[#161B22] rounded-3xl border border-gold-primary/20 hover:border-gold-primary/40 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-primary/10 rounded-full blur-3xl group-hover:w-40 group-hover:h-40 transition-all duration-500"></div>
              <div className="relative z-10 p-8 sm:p-10">
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-gold-primary to-gold-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-gold-primary/30">
                  <LawIcons.Target className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-gold-secondary mb-4">Our Mission</h3>
                <p className="text-foreground/70 leading-relaxed">
                  To provide efficient, cost-effective, and timely dispute resolution services through
                  arbitration and ADR, delivering justice with integrity and excellence across North India.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative bg-[#161B22] rounded-3xl border border-gold-primary/20 hover:border-gold-primary/40 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-secondary/10 rounded-full blur-3xl group-hover:w-40 group-hover:h-40 transition-all duration-500"></div>
              <div className="relative z-10 p-8 sm:p-10">
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-gold-secondary to-gold-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-gold-secondary/30">
                  <LawIcons.Globe className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-gold-secondary mb-4">Our Vision</h3>
                <p className="text-foreground/70 leading-relaxed">
                  To be the most trusted and preferred arbitration and dispute resolution firm in India,
                  setting benchmarks for professional excellence and client satisfaction.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="group relative bg-[#161B22] rounded-3xl border border-gold-primary/20 hover:border-gold-primary/40 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-primary/10 rounded-full blur-3xl group-hover:w-40 group-hover:h-40 transition-all duration-500"></div>
              <div className="relative z-10 p-8 sm:p-10">
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-gold-primary to-gold-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-gold-primary/30">
                  <LawIcons.Shield className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-gold-secondary mb-4">Our Values</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-gold-primary mt-1">•</span>
                    <span>Integrity & Ethics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-primary mt-1">•</span>
                    <span>Excellence & Quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-primary mt-1">•</span>
                    <span>Client-Centric Focus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-primary mt-1">•</span>
                    <span>Innovation & Efficiency</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Team Section */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-6">
              <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                Meet Our Team
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-primary mb-4">
              Expert Legal Professionals
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Our team brings decades of experience and deep expertise in arbitration,
              dispute resolution, and Indian legal practice
            </p>
          </div>

          <div className="space-y-12">
            {getTeamMembers().map((member, idx) => (
              <div
                key={member.order}
                className={`group relative bg-linear-to-br from-bg-alt-dark to-bg-dark rounded-3xl border border-gold-primary/20 hover:border-gold-primary/40 transition-all duration-500 overflow-hidden ${
                  idx % 2 === 0 ? '' : ''
                }`}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-primary/5 rounded-full blur-3xl group-hover:bg-gold-primary/10 transition-all duration-500"></div>

                <div className="relative z-10 p-6 sm:p-8 md:p-10">
                  <div className={`grid grid-cols-1 ${member.image ? 'lg:grid-cols-12' : ''} gap-8 items-start`}>
                    {/* Image Section - Only show if member has image */}
                    {member.image && (
                      <div className="lg:col-span-3">
                        <div className="relative aspect-square w-full max-w-xs mx-auto lg:max-w-full">
                          <div className="absolute inset-0 bg-gold-primary/20 rounded-2xl blur-2xl group-hover:bg-gold-primary/30 transition-all duration-500"></div>
                          <div className="relative w-full h-full bg-gold-primary/10 rounded-2xl border border-gold-primary/30 overflow-hidden">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Content Section */}
                    <div className={`${member.image ? 'lg:col-span-9' : ''} space-y-6`}>
                      {/* Header */}
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-2xl sm:text-3xl font-bold text-gold-primary">
                            {member.name}
                          </h3>
                          {member.role === "Co-Founder" && (
                            <span className="px-3 py-1 bg-gold-secondary/10 border border-gold-secondary/30 rounded-full text-sm text-gold-secondary font-semibold">
                              {member.title}
                            </span>
                          )}
                        </div>
                        <p className="text-gold-primary/70 text-lg">{member.role}</p>
                      </div>

                      {/* Bio */}
                      <p className="text-foreground/80 leading-relaxed text-base">
                        {member.bio}
                      </p>

                      {/* Experience */}
                      <div className="bg-gold-primary/5 rounded-xl p-5 border border-gold-primary/10">
                        <h4 className="text-gold-secondary font-semibold mb-3 flex items-center gap-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                          </svg>
                          Experience & Background
                        </h4>
                        <p className="text-foreground/70 text-sm leading-relaxed">
                          {member.experience}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Education */}
                        <div>
                          <h4 className="text-gold-secondary font-semibold mb-3 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                            </svg>
                            Education
                          </h4>
                          <ul className="space-y-2">
                            {member.education.map((edu, eduIdx) => (
                              <li key={eduIdx} className="flex items-start gap-2 text-foreground/70 text-sm">
                                <svg className="w-4 h-4 text-gold-primary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                </svg>
                                <span>{edu}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Specializations */}
                        <div>
                          <h4 className="text-gold-secondary font-semibold mb-3 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            Specializations
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {member.specializations.map((spec, specIdx) => (
                              <span
                                key={specIdx}
                                className="px-3 py-1.5 bg-gold-primary/10 border border-gold-primary/20 rounded-lg text-xs text-foreground/80 hover:bg-gold-primary/20 transition-colors"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Our Presence */}
      <Section variant="dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-6">
              <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                Our Network
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-primary mb-4">
              Strategic Presence Across North India
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Serving 10 major cities with offices strategically positioned in key commercial
              and legal hubs
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { name: "New Delhi", Icon: LawIcons.Landmark, desc: "Headquarters & Primary Office" },
              { name: "Gurgaon", Icon: LawIcons.Building, desc: "Corporate Hub" },
              { name: "Noida", Icon: LawIcons.City, desc: "Commercial Center" },
              { name: "Ghaziabad", Icon: LawIcons.Building, desc: "Industrial Zone" },
              { name: "Greater NCR", Icon: LawIcons.Location, desc: "Extended Coverage" },
              { name: "Chandigarh", Icon: LawIcons.Landmark, desc: "Regional Office" },
              { name: "Jaipur", Icon: LawIcons.Pillar, desc: "Rajasthan Hub" },
              { name: "Panipat", Icon: LawIcons.City, desc: "Service Center" },
              { name: "Prayagraj", Icon: LawIcons.Landmark, desc: "Eastern UP Hub" },
              { name: "Lucknow", Icon: LawIcons.Building, desc: "State Capital" },
            ].map((city, idx) => (
              <div
                key={idx}
                className="group relative bg-[#161B22] p-6 rounded-2xl border border-gold-primary/20 hover:border-gold-primary/40 transition-all duration-300 text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gold-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-gold-primary to-gold-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-gold-primary/30">
                    <city.Icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-gold-primary transition-colors mb-2">
                    {city.name}
                  </h3>
                  <p className="text-xs text-foreground/60">{city.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-primary/20 to-gold-secondary/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-[#161B22] p-8 rounded-2xl border border-gold-primary/30">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-primary to-gold-secondary rounded-xl flex items-center justify-center shadow-lg shadow-gold-primary/30">
                    <LawIcons.Location className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-gold-primary font-bold text-xl">Strategic Positioning</span>
                </div>
                <p className="text-white/70 text-lg max-w-3xl">
                  Our offices are located near major courts, arbitration centers, and commercial districts, ensuring
                  accessibility and efficient service delivery across North India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-6">
              <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                Our Advantage
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-primary mb-4">
              Why Choose Judicium Arbitration?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                Icon: LawIcons.Target,
                title: "Strategic Location",
                description: "Offices in key legal and commercial centers including Delhi, Gurgaon, Noida, Chandigarh, and Jaipur"
              },
              {
                Icon: LawIcons.Scales,
                title: "Deep Legal Expertise",
                description: "20+ years of combined experience with intricate understanding of Indian arbitration laws and procedures"
              },
              {
                Icon: LawIcons.Chart,
                title: "Proven Track Record",
                description: "Successfully resolved 500+ cases with 98% success rate across diverse sectors and practice areas"
              },
              {
                Icon: LawIcons.Handshake,
                title: "Client-Centric Approach",
                description: "Tailored legal solutions aligned with business objectives and commercial realities"
              },
              {
                Icon: LawIcons.Lightning,
                title: "Efficient Resolution",
                description: "Strategic focus on timely and cost-effective dispute resolution mechanisms"
              },
              {
                Icon: LawIcons.Globe,
                title: "Comprehensive Services",
                description: "Full-service legal advisory across 20+ practice areas serving diverse industries"
              },
              {
                Icon: LawIcons.Landmark,
                title: "Court Proximity",
                description: "Strategic presence near Supreme Court, High Courts, and DIAC for efficient litigation"
              },
              {
                Icon: LawIcons.Document,
                title: "Sector Expertise",
                description: "Specialized knowledge across banking, real estate, corporate, IP, and infrastructure sectors"
              },
              {
                Icon: LawIcons.Trophy,
                title: "Quality Standards",
                description: "Commitment to highest professional standards, ethics, and client confidentiality"
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
      <Section variant="gold">
        {/* Floating decorative icons */}
        <div className="absolute left-[5%] top-[25%] opacity-[0.12]">
          <LawIcons.Scales className="w-16 h-16 text-gold-primary" />
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
                  <LawIcons.Shield className="w-10 h-10 text-black" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  Partner With Us for Your <span className="text-gold-primary">Legal Needs</span>
                </h2>
                <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                  Experience the Judicium difference. Let our expert team guide you through your legal
                  challenges with professionalism and dedication.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg" href="/contact">
                    Get In Touch
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
