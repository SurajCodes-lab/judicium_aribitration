"use client";

import Link from "next/link";
import Button from "@/components/Button";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import { practiceAreasData } from "@/data/practiceAreas";
import { testimonials } from "@/data/testimonials";
import { LawIcons } from "@/components/Icons";
import {
  WHATSAPP_LINK,
  TEL_LINK,
  PHONE_DISPLAY,
  MAILTO_LINK,
  EMAIL,
} from "@/data/contactInfo";

// Cities served — surfaced as a visible, internally-linked content block so the
// city/keyword targeting lives in on-page content (and feeds local SEO), not in meta.
const SERVED_CITIES: { city: string; slug: string; note: string }[] = [
  { city: "Delhi", slug: "delhi", note: "HQ near DIAC, Supreme Court & Delhi High Court" },
  { city: "Gurgaon", slug: "gurgaon", note: "Corporate & commercial arbitration in Gurugram" },
  { city: "Noida", slug: "noida", note: "Real estate & construction disputes across NCR" },
  { city: "Chandigarh", slug: "chandigarh", note: "Arbitration before the Punjab & Haryana High Court" },
  { city: "Jaipur", slug: "jaipur", note: "Commercial & MSME dispute resolution in Rajasthan" },
  { city: "Panipat", slug: "panipat", note: "Textile & manufacturing contract disputes" },
  { city: "Prayagraj", slug: "prayagraj", note: "Civil & arbitration matters before the Allahabad High Court" },
  { city: "Lucknow", slug: "lucknow", note: "RERA & commercial arbitration across Uttar Pradesh" },
];

// Three representative testimonials for the homepage social-proof strip.
const homeTestimonials = testimonials.slice(0, 3);

interface FAQ {
  question: string;
  answer: string;
}

interface InsightTeaser {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readingTime: number;
}

export default function HomeContent({
  faqs,
  insights,
}: {
  faqs: FAQ[];
  insights: InsightTeaser[];
}) {
  return (
    <div className="min-h-screen bg-bg-dark">
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
              Trusted Arbitration Firm Across <span className="text-gold-primary">North India</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg">
              Expert arbitration and ADR lawyers serving Delhi, Gurgaon, Noida, Chandigarh, Jaipur and 3 more cities with full-service commercial dispute resolution.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {/* Card 1 - Head Office */}
            <div className="group relative">
              <div className="absolute inset-0 bg-linear-to-r from-gold-primary/20 to-gold-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-bg-alt-dark p-8 rounded-2xl border border-gold-primary/20 hover:border-gold-primary/50 transition-all duration-500">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-14 h-14 bg-linear-to-br from-gold-primary to-gold-secondary rounded-xl flex items-center justify-center shadow-lg shadow-gold-primary/30 shrink-0">
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
              <div className="absolute inset-0 bg-linear-to-r from-gold-secondary/20 to-gold-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-bg-alt-dark p-8 rounded-2xl border border-gold-primary/20 hover:border-gold-primary/50 transition-all duration-500">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-14 h-14 bg-linear-to-br from-gold-secondary to-gold-primary rounded-xl flex items-center justify-center shadow-lg shadow-gold-secondary/30 shrink-0">
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
            <div className="absolute inset-0 bg-linear-to-r from-gold-primary/10 via-transparent to-gold-secondary/10 rounded-3xl blur-2xl" />
            <div className="relative bg-bg-dark border border-gold-primary/30 p-8 sm:p-10 rounded-3xl">
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
              Comprehensive legal expertise across 20+ practice areas — arbitration, banking & finance, corporate law, intellectual property and real estate disputes.
            </p>
          </div>

          {/* Practice Areas Grid - Premium Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {practiceAreasData.map((area, index) => (
              <Link
                key={index}
                href={`/practice-areas/${area.slug}`}
                className="group block relative bg-bg-alt-dark p-5 rounded-xl border border-white/10 hover:border-gold-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-primary/10"
              >
                <div className="absolute inset-0 bg-linear-to-br from-gold-primary/0 to-gold-primary/0 group-hover:from-gold-primary/10 group-hover:to-transparent transition-all rounded-xl" />
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

      {/* Cities We Serve — keyword-rich, internally-linked local content block */}
      <Section variant="gradient">
        <div className="relative z-10">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-gold-primary/10 border border-gold-primary/30 rounded-full text-gold-primary text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              <LawIcons.Location className="w-4 h-4" />
              Where We Practice
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Arbitration Lawyers Across <span className="text-gold-primary">North India</span>
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto text-base sm:text-lg">
              From our New Delhi headquarters, Judicium Arbitration represents
              clients in commercial arbitration, mediation and dispute-resolution
              matters across eight cities — appearing before the Delhi High Court,
              DIAC, the Punjab &amp; Haryana High Court, RERA authorities and MSME
              Facilitation Councils throughout the region.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVED_CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/locations/${c.slug}`}
                title={`Arbitration lawyers in ${c.city}`}
                className="group block bg-bg-alt-dark p-5 rounded-xl border border-gold-primary/15 hover:border-gold-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-2">
                  <LawIcons.Location className="w-4 h-4 text-gold-primary/70" />
                  <span className="text-white/90 group-hover:text-gold-primary font-semibold transition-colors">
                    Arbitration Lawyers in {c.city}
                  </span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{c.note}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="secondary" size="lg" href="/locations">
              View All Locations
            </Button>
          </div>
        </div>
      </Section>

      {/* Insights / Blog Teaser Section */}
      {insights.length > 0 && (
        <Section variant="gradient">
          <div className="relative z-10">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-gold-primary/10 border border-gold-primary/30 rounded-full text-gold-primary text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                <LawIcons.Document className="w-4 h-4" />
                Legal Insights
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                Latest <span className="text-gold-primary">Arbitration Insights</span>
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg">
                In-depth analysis of Indian arbitration law, landmark judgments and practical
                guidance from our senior advocates — written to help you understand your dispute.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
              {insights.map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group flex flex-col bg-bg-alt-dark p-6 rounded-2xl border border-gold-primary/20 hover:border-gold-primary/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold-secondary">
                      {article.category}
                    </span>
                    <span className="text-white/30 text-xs">·</span>
                    <span className="text-xs text-white/40">{article.readingTime} min read</span>
                  </div>
                  <h3 className="text-white/90 group-hover:text-gold-primary font-bold text-lg leading-snug transition-colors mb-3">
                    {article.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed line-clamp-3 grow">
                    {article.subtitle}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-primary">
                    Read article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button variant="secondary" size="lg" href="/insights">
                View All Insights
              </Button>
            </div>
          </div>
        </Section>
      )}

      {/* Testimonials / Social Proof — visibly backs the 4.9★ AggregateRating */}
      <Section variant="dark">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-gold-primary/10 border border-gold-primary/30 rounded-full text-gold-primary text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              <LawIcons.Trophy className="w-4 h-4" />
              Client Results
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Trusted by <span className="text-gold-primary">Businesses &amp; Individuals</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-gold-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.158c.969 0 1.371 1.24.588 1.81l-3.364 2.444a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.54 1.118l-3.364-2.444a1 1 0 00-1.176 0l-3.364 2.444c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.158a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
              ))}
            </div>
            <p className="text-white/60 text-base sm:text-lg">
              <span className="text-gold-primary font-semibold">4.9 / 5</span> from 127 client ratings across Delhi NCR, Chandigarh, Jaipur &amp; North India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {homeTestimonials.map((t) => (
              <article
                key={t.id}
                className="flex flex-col bg-bg-alt-dark border border-gold-primary/20 rounded-2xl p-6 sm:p-7 hover:border-gold-primary/40 transition-colors"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-gold-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.158c.969 0 1.371 1.24.588 1.81l-3.364 2.444a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.54 1.118l-3.364-2.444a1 1 0 00-1.176 0l-3.364 2.444c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.158a1 1 0 00.95-.69l1.286-3.957z" />
                    </svg>
                  ))}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gold-secondary mb-2 leading-snug">
                  &ldquo;{t.headline}&rdquo;
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-5 grow">{t.body}</p>
                <div className="pt-4 border-t border-gold-primary/10">
                  <div className="text-sm font-semibold text-white/90">{t.authorName}</div>
                  <div className="text-xs text-white/55">{t.authorTitle} · {t.city}</div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="secondary" size="lg" href="/about">
              Read More Client Stories
            </Button>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section variant="gradient">
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-gold-primary/10 border border-gold-primary/30 rounded-full text-gold-primary text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              <LawIcons.Book className="w-4 h-4" />
              FAQs
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Frequently Asked <span className="text-gold-primary">Questions</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg">
              Common questions about arbitration in India, the Arbitration and Conciliation Act, and how Judicium can help resolve your commercial dispute.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-bg-alt-dark p-6 sm:p-8 rounded-xl border border-gold-primary/20 hover:border-gold-primary/40 transition-all duration-300"
              >
                <h3 className="faq-question text-lg sm:text-xl font-semibold text-gold-secondary mb-3">
                  {faq.question}
                </h3>
                <p className="faq-answer text-sm sm:text-base text-white/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
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
              Schedule an arbitration consultation with North India&apos;s trusted ADR lawyers across Delhi NCR, Chandigarh and Jaipur.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {[
              { Icon: LawIcons.Phone, title: "Call Us", value: PHONE_DISPLAY, href: TEL_LINK, color: "from-gold-primary to-gold-secondary" },
              { Icon: LawIcons.WhatsApp, title: "WhatsApp", value: "Chat with our team", href: WHATSAPP_LINK, color: "from-gold-secondary to-gold-primary" },
              { Icon: LawIcons.Mail, title: "Email", value: EMAIL, href: MAILTO_LINK, color: "from-gold-primary to-gold-secondary" },
            ].map((item, i) => (
              <div key={i} className="group">
                {item.href ? (
                  <a href={item.href} className="block bg-bg-alt-dark hover:bg-[#1C2128] p-6 rounded-xl border border-white/10 hover:border-gold-primary/40 transition-all text-center">
                    <div className={`w-14 h-14 mx-auto mb-4 bg-linear-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <item.Icon className="w-7 h-7 text-black" />
                    </div>
                    <h4 className="text-white font-bold mb-2">{item.title}</h4>
                    <p className="text-gold-primary text-sm break-all">{item.value}</p>
                  </a>
                ) : (
                  <div className="bg-bg-alt-dark p-6 rounded-xl border border-white/10 text-center">
                    <div className={`w-14 h-14 mx-auto mb-4 bg-linear-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg`}>
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
            <div className="absolute inset-0 bg-linear-to-r from-gold-primary/30 via-gold-primary/20 to-gold-secondary/30 rounded-2xl blur-xl" />
            <div className="relative bg-linear-to-r from-gold-primary/20 to-gold-secondary/20 p-8 sm:p-10 rounded-2xl border border-gold-primary/40 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Schedule Your Free Arbitration Consultation
              </h3>
              <p className="text-white/70 mb-6 max-w-lg mx-auto">
                Take the first step toward resolving your commercial dispute through arbitration, mediation or ADR with expert guidance from Judicium Arbitration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" href={TEL_LINK}>
                  Call {PHONE_DISPLAY}
                </Button>
                <Button variant="secondary" size="lg" href={WHATSAPP_LINK}>
                  Message on WhatsApp
                </Button>
              </div>
              <p className="mt-5 text-sm text-white/50">
                Prefer to write?{" "}
                <Link href="/contact" className="text-gold-primary hover:underline font-semibold">
                  Use our contact form
                </Link>{" "}
                — we reply within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
