"use client";

import Link from "next/link";
import Button from "@/components/Button";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import { practiceAreasData } from "@/data/practiceAreas";
import { LawIcons } from "@/components/Icons";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D1117]">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <Section variant="gradient">
        {/* Floating decorative icons */}
        <div className="absolute left-[5%] top-[20%] opacity-20">
          <LawIcons.Scales className="w-20 h-20 text-gold-primary" />
        </div>
        <div className="absolute right-[8%] bottom-[25%] opacity-15">
          <LawIcons.Pillar className="w-16 h-16 text-gold-primary" />
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-gold-primary/10 border border-gold-primary/30 rounded-full text-gold-primary text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              <LawIcons.Shield className="w-4 h-4" />
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Strategic Presence Across <span className="text-gold-primary">North India</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg">
              Serving Delhi, Gurgaon, Noida, Chandigarh, Jaipur & more with expert legal solutions
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {/* Card 1 - Head Office */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-primary/20 to-gold-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[#161B22] p-8 rounded-2xl border border-gold-primary/20 hover:border-gold-primary/50 transition-all duration-500">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold-primary to-gold-secondary rounded-xl flex items-center justify-center shadow-lg shadow-gold-primary/30 shrink-0">
                    <LawIcons.Building className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Head Office</h3>
                    <p className="text-gold-primary font-medium">New Delhi</p>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Our headquarters in New Delhi positions us near DIAC, Supreme Court & High Court - perfect for resolving major commercial disputes across the NCR region.
                </p>
                <div className="mt-5 pt-5 border-t border-white/10 flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gold-primary/80 text-sm">
                    <LawIcons.Location className="w-4 h-4" />
                    <span>Near Supreme Court</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Expert Team */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-secondary/20 to-gold-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[#161B22] p-8 rounded-2xl border border-gold-primary/20 hover:border-gold-primary/50 transition-all duration-500">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold-secondary to-gold-primary rounded-xl flex items-center justify-center shadow-lg shadow-gold-secondary/30 shrink-0">
                    <LawIcons.Team className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Expert Team</h3>
                    <p className="text-gold-secondary font-medium">20+ Years Experience</p>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Co-founder Nadeem brings 20 years of courtroom experience, providing deep understanding of dispute lifecycle and high-stakes arbitration matters.
                </p>
                <div className="mt-5 pt-5 border-t border-white/10 flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gold-primary/80 text-sm">
                    <LawIcons.Trophy className="w-4 h-4" />
                    <span>500+ Cases Won</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us - Premium Cards */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-primary/10 via-transparent to-gold-secondary/10 rounded-3xl blur-2xl" />
            <div className="relative bg-[#0D1117] border border-gold-primary/30 p-8 sm:p-10 rounded-3xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
                Why Choose <span className="text-gold-primary">Judicium</span>?
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { Icon: LawIcons.Location, title: "Strategic Location", desc: "8 cities across North India" },
                  { Icon: LawIcons.Scales, title: "Legal Expertise", desc: "20+ years experience" },
                  { Icon: LawIcons.Trophy, title: "Proven Record", desc: "500+ cases won" },
                  { Icon: LawIcons.Handshake, title: "Client First", desc: "98% success rate" },
                ].map((item, i) => (
                  <div key={i} className="text-center group p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gold-primary/10 border border-gold-primary/30 rounded-2xl flex items-center justify-center group-hover:bg-gold-primary/20 group-hover:border-gold-primary/50 transition-all">
                      <item.Icon className="w-8 h-8 text-gold-primary" />
                    </div>
                    <h4 className="text-white font-bold mb-2">{item.title}</h4>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Practice Areas Section */}
      <Section variant="dark">
        {/* Floating decorative icons */}
        <div className="absolute right-[5%] top-[15%] opacity-15">
          <LawIcons.Gavel className="w-24 h-24 text-gold-primary" />
        </div>
        <div className="absolute left-[8%] bottom-[20%] opacity-10">
          <LawIcons.Document className="w-20 h-20 text-gold-primary" />
        </div>

        <div className="relative z-10">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-gold-primary/10 border border-gold-primary/30 rounded-full text-gold-primary text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              <LawIcons.Book className="w-4 h-4" />
              Our Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Practice <span className="text-gold-primary">Areas</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg">
              Comprehensive legal expertise across diverse sectors
            </p>
          </div>

          {/* Practice Areas Grid - Premium Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {practiceAreasData.map((area, index) => (
              <Link
                key={index}
                href={`/practice-areas/${area.slug}`}
                className="group block relative bg-[#161B22] p-5 rounded-xl border border-white/10 hover:border-gold-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/0 to-gold-primary/0 group-hover:from-gold-primary/10 group-hover:to-transparent transition-all rounded-xl" />
                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold-primary/10 border border-gold-primary/20 rounded-lg flex items-center justify-center group-hover:bg-gold-primary/20 group-hover:border-gold-primary/40 transition-all shrink-0">
                    <span className="text-2xl">{area.icon}</span>
                  </div>
                  <span className="text-white/90 group-hover:text-gold-primary text-sm font-medium transition-colors leading-tight">
                    {area.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="primary" size="lg" href="/practice-areas">
              View All Services
            </Button>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section variant="gold">
        {/* Floating decorative icons */}
        <div className="absolute left-[5%] top-[25%] opacity-15">
          <LawIcons.Mail className="w-16 h-16 text-gold-primary" />
        </div>
        <div className="absolute right-[10%] bottom-[30%] opacity-12">
          <LawIcons.Shield className="w-20 h-20 text-gold-primary" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-gold-primary/10 border border-gold-primary/30 rounded-full text-gold-primary text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              <LawIcons.Handshake className="w-4 h-4" />
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Ready to Resolve Your <span className="text-gold-primary">Dispute</span>?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto text-base sm:text-lg">
              Schedule a consultation with our expert team today
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {[
              { Icon: LawIcons.Location, title: "Locations", value: "Delhi NCR, Chandigarh, Jaipur", color: "from-gold-primary to-gold-secondary" },
              { Icon: LawIcons.Mail, title: "Email", value: "Judiciumarbitration@gmail.com", href: "mailto:Judiciumarbitration@gmail.com", color: "from-gold-secondary to-gold-primary" },
              { Icon: LawIcons.Clock, title: "Hours", value: "Mon-Fri: 9AM - 6PM IST", color: "from-gold-primary to-gold-secondary" },
            ].map((item, i) => (
              <div key={i} className="group">
                {item.href ? (
                  <a href={item.href} className="block bg-[#161B22] hover:bg-[#1C2128] p-6 rounded-xl border border-white/10 hover:border-gold-primary/40 transition-all text-center">
                    <div className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <item.Icon className="w-7 h-7 text-black" />
                    </div>
                    <h4 className="text-white font-bold mb-2">{item.title}</h4>
                    <p className="text-gold-primary text-sm break-all">{item.value}</p>
                  </a>
                ) : (
                  <div className="bg-[#161B22] p-6 rounded-xl border border-white/10 text-center">
                    <div className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <item.Icon className="w-7 h-7 text-black" />
                    </div>
                    <h4 className="text-white font-bold mb-2">{item.title}</h4>
                    <p className="text-white/60 text-sm">{item.value}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-primary/30 via-gold-primary/20 to-gold-secondary/30 rounded-2xl blur-xl" />
            <div className="relative bg-gradient-to-r from-gold-primary/20 to-gold-secondary/20 p-8 sm:p-10 rounded-2xl border border-gold-primary/40 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Schedule Your Free Consultation
              </h3>
              <p className="text-white/70 mb-6 max-w-lg mx-auto">
                Take the first step towards resolving your dispute with expert guidance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" href="mailto:Judiciumarbitration@gmail.com">
                  Email Us Now
                </Button>
                <Button variant="secondary" size="lg" href="/contact">
                  Contact Page
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
