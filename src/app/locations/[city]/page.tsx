import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { LawIcons } from "@/components/Icons";
import {
  cityOffices,
  getCityBySlug,
  getAllCitySlugs,
  buildCityLocalBusinessSchema,
  CityOffice,
} from "@/data/localBusinessSchemas";
import { practiceAreasData } from "@/data/practiceAreas";
import { getTestimonialsByCity } from "@/data/testimonials";
import { insightsData } from "@/data/insights";
import MapEmbed from "@/components/MapEmbed";

const BASE_URL = "https://www.judiciumarbitration.com";

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const office = getCityBySlug(city);
  if (!office) return { title: "Location Not Found" };

  const pageUrl = `${BASE_URL}/locations/${office.slug}`;
  const title = `Arbitration Lawyers in ${office.city} | Judicium Arbitration`;
  const description = `Expert arbitration, ADR and commercial dispute resolution lawyers in ${office.city}, ${office.region}. Office at ${office.streetAddress}. 20+ years experience under the Arbitration and Conciliation Act, 1996. Call +91-9899686394.`;

  return {
    title,
    description,
    keywords: [
      `arbitration lawyers ${office.city}`,
      `ADR lawyer ${office.city}`,
      `commercial arbitration ${office.city}`,
      `arbitration firm ${office.city}`,
      `dispute resolution ${office.city}`,
      `arbitration counsel ${office.city}`,
      `${office.region} arbitration lawyers`,
      `best arbitration lawyer ${office.city}`,
      `Judicium Arbitration ${office.city} office`,
      `arbitration consultation ${office.city}`,
      `Section 9 lawyer ${office.city}`,
      `Section 17 arbitration ${office.city}`,
      `law firm ${office.city}`,
    ].join(", "),
    alternates: {
      canonical: pageUrl,
      languages: { "en-IN": pageUrl, "x-default": pageUrl },
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_IN",
      siteName: "Judicium Arbitration",
      url: pageUrl,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

function generateSchemas(office: CityOffice) {
  const pageUrl = `${BASE_URL}/locations/${office.slug}`;

  // Strongest local-pack signal: page-level LocalBusiness primary entity (vs global in layout)
  const localBusinessSchema = buildCityLocalBusinessSchema(office);

  // Article schema — frames the page as authoritative city-specific reference content
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: `Arbitration Lawyers in ${office.city}`,
    description: `Judicium Arbitration's ${office.city} office — services, courts covered, contact details, and city-specific FAQs.`,
    inLanguage: "en-IN",
    url: pageUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
    about: { "@type": "City", name: office.city },
    keywords: `arbitration lawyers ${office.city}, ADR ${office.city}, commercial arbitration ${office.region}`,
    author: {
      "@type": "LegalService",
      "@id": `${BASE_URL}/#organization`,
      name: "Judicium Arbitration",
      url: BASE_URL,
    },
    publisher: {
      "@type": "LegalService",
      "@id": `${BASE_URL}/#organization`,
      name: "Judicium Arbitration",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.jpeg` },
    },
    datePublished: "2026-05-01",
    dateModified: new Date().toISOString().split("T")[0],
    image: `${BASE_URL}/logo.jpeg`,
  };

  // City-specific FAQPage — direct AI-citation surface
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: office.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  // BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: `${BASE_URL}/locations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: office.city,
        item: pageUrl,
      },
    ],
  };

  // Speakable for voice/AEO
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: `Arbitration Lawyers in ${office.city}`,
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".city-tldr", ".faq-question", ".faq-answer"],
    },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  };

  // Review schemas for testimonials from this city — local social-proof signal
  const cityTestimonials = getTestimonialsByCity(office.city);
  const reviewSchemas = cityTestimonials.map((t) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `${pageUrl}#review-${t.id}`,
    itemReviewed: {
      "@type": "LegalService",
      "@id": `${BASE_URL}/#organization`,
      name: "Judicium Arbitration",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      "@type": "Person",
      name: t.authorName,
      jobTitle: t.authorTitle,
      address: {
        "@type": "PostalAddress",
        addressLocality: t.city,
        addressCountry: "IN",
      },
    },
    name: t.headline,
    reviewBody: t.body,
    datePublished: t.datePublished,
    inLanguage: "en-IN",
  }));

  return [
    localBusinessSchema,
    articleSchema,
    faqSchema,
    breadcrumbSchema,
    speakableSchema,
    ...reviewSchemas,
  ];
}

// Top 6 practice areas to highlight on city pages
const FEATURED_PRACTICE_SLUGS = [
  "arbitration-alternative-dispute-resolution",
  "banking-finance",
  "corporate-commercial",
  "real-estate-urban-development",
  "intellectual-property-rights",
  "insolvency-bankruptcy",
];

export default async function CityLocationPage({ params }: PageProps) {
  const { city } = await params;
  const office = getCityBySlug(city);

  if (!office) notFound();

  const schemas = generateSchemas(office);
  const cityTestimonials = getTestimonialsByCity(office.city);
  const featuredAreas = practiceAreasData.filter((a) =>
    FEATURED_PRACTICE_SLUGS.includes(a.slug)
  );
  const otherOffices = cityOffices.filter((o) => o.slug !== office.slug);
  const latestInsights = [...insightsData]
    .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1))
    .slice(0, 3);
  const mapsQuery = encodeURIComponent(
    `${office.streetAddress}, ${office.city}, ${office.region}, India`
  );

  return (
    <main className="min-h-screen pt-20 sm:pt-22 md:pt-24 bg-bg-dark">
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero */}
      <section className="relative py-14 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(240,194,70,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_80%,rgba(229,179,42,0.10),transparent_50%)]" />
        </div>
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #F0C246 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm">
            <ol className="flex items-center gap-2 text-foreground/60">
              <li>
                <Link href="/" className="hover:text-gold-primary transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gold-primary/50">/</li>
              <li>
                <Link
                  href="/locations"
                  className="hover:text-gold-primary transition-colors"
                >
                  Locations
                </Link>
              </li>
              <li className="text-gold-primary/50">/</li>
              <li className="text-gold-primary font-medium">{office.city}</li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold-primary/10 border border-gold-primary/30 rounded-full mb-5">
              <LawIcons.Location className="w-4 h-4 text-gold-primary" />
              <span className="text-gold-secondary text-xs font-semibold uppercase tracking-widest">
                {office.isHeadquarters
                  ? "Headquarters"
                  : `Office · ${office.region}`}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gold-primary tracking-tight mb-4">
              Arbitration Lawyers in {office.city}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
              Expert arbitration, ADR and commercial dispute resolution counsel
              serving {office.city} and {office.region}. 20+ years of experience,
              500+ resolved disputes, 98% client success rate.
            </p>

            {/* Quick-Answer / TL;DR block — speakable + AI citation */}
            <div className="city-tldr relative bg-linear-to-br from-gold-primary/10 via-gold-primary/5 to-transparent border-l-4 border-gold-primary p-5 sm:p-6 rounded-r-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold-primary">
                  Quick Answer
                </span>
                <span className="text-foreground/40 text-xs">·</span>
                <span className="text-xs text-foreground/60">
                  Judicium Arbitration — {office.city}
                </span>
              </div>
              <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
                {office.intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office card + map */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-stretch">
            {/* Office details card */}
            <div className="relative bg-bg-alt-dark border border-gold-primary/20 rounded-2xl p-6 sm:p-8">
              <div className="absolute -top-4 left-6 px-3 py-1 bg-bg-dark border border-gold-primary/30 rounded-full">
                <span className="text-xs font-semibold tracking-widest uppercase text-gold-primary">
                  Office Details
                </span>
              </div>
              <div className="space-y-5 mt-3">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-gold-primary/10 border border-gold-primary/20 flex items-center justify-center">
                    <LawIcons.Location className="w-5 h-5 text-gold-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-foreground/50 mb-1">
                      Address
                    </div>
                    <div className="text-foreground/85 leading-relaxed">
                      {office.streetAddress}
                      <br />
                      {office.city} {office.postalCode}, {office.region}, India
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-gold-primary/10 border border-gold-primary/20 flex items-center justify-center">
                    <LawIcons.Clock className="w-5 h-5 text-gold-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-foreground/50 mb-1">
                      Hours
                    </div>
                    <div className="text-foreground/85">
                      Monday – Friday: 9:00 AM – 6:00 PM
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-gold-primary/10 border border-gold-primary/20 flex items-center justify-center">
                    <LawIcons.Mail className="w-5 h-5 text-gold-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-foreground/50 mb-1">
                      Contact
                    </div>
                    <div className="space-y-1">
                      <a
                        href={`tel:${office.telephone.replace(/[^+\d]/g, "")}`}
                        className="block text-gold-primary hover:underline"
                      >
                        {office.telephone}
                      </a>
                      <a
                        href="mailto:Judiciumarbitration@gmail.com"
                        className="block text-foreground/85 hover:text-gold-primary transition-colors break-all"
                      >
                        Judiciumarbitration@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gold-primary/10">
                  <Button variant="primary" size="md" href="/contact">
                    Schedule a Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Map embed — click-to-load facade for performance */}
            <div className="flex flex-col gap-3">
              <div className="relative rounded-2xl overflow-hidden border border-gold-primary/20 min-h-[320px] flex-1 bg-bg-alt-dark">
                <MapEmbed query={mapsQuery} city={office.city} />
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gold-primary hover:underline self-start"
              >
                Open {office.city} office in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* About the office */}
      <Section variant="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-primary mb-6">
            About the {office.city} Office
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
            {office.localOverview}
          </p>
        </div>
      </Section>

      {/* How we help locally */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-4">
            <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
              Local Expertise
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-primary mb-8">
            How Judicium Arbitration Helps Clients in {office.city}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {office.localExpertise.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-4 bg-linear-to-br from-bg-alt-dark to-bg-dark p-5 sm:p-6 rounded-xl border border-gold-primary/15"
              >
                <span className="shrink-0 w-8 h-8 bg-gold-primary/10 rounded-lg flex items-center justify-center mt-0.5">
                  <svg className="w-5 h-5 text-gold-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-sm sm:text-base text-foreground/80 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Courts & forums */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-4">
            <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
              Courts & Forums
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-primary mb-6">
            Where We Appear in {office.city}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {office.nearbyCourts.map((court, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 p-4 bg-bg-alt-dark border border-gold-primary/15 rounded-xl"
              >
                <LawIcons.Landmark className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-foreground/85">
                  {court}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Featured practice areas */}
      <Section variant="dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-4">
              <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                Featured Practice Areas
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-primary">
              How the {office.city} Office Can Help
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {featuredAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="group relative bg-bg-alt-dark p-6 rounded-xl border border-gold-primary/20 hover:border-gold-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 mb-4 bg-gold-primary/10 border border-gold-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">{area.icon}</span>
                </div>
                <h3 className="text-white group-hover:text-gold-primary text-base sm:text-lg font-semibold leading-tight mb-2 transition-colors">
                  {area.shortTitle}
                </h3>
                <p className="text-white/55 text-sm line-clamp-3">
                  {area.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* City-specific FAQs */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-4">
              <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                FAQs
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-primary">
              Frequently Asked — {office.city}
            </h2>
          </div>
          <div className="space-y-4 sm:space-y-5">
            {office.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-bg-alt-dark p-5 sm:p-6 rounded-xl border border-gold-primary/20"
              >
                <h3 className="faq-question text-base sm:text-lg font-semibold text-gold-secondary mb-2">
                  {faq.question}
                </h3>
                <p className="faq-answer text-sm sm:text-base text-foreground/80 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* City-matched testimonials */}
      {cityTestimonials.length > 0 && (
        <Section variant="dark">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-4">
                <LawIcons.Trophy className="w-4 h-4 text-gold-primary" />
                <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                  Client Voices · {office.city}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-primary">
                What {office.city} Clients Say
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {cityTestimonials.map((t) => (
                <article
                  key={t.id}
                  className="bg-bg-alt-dark border border-gold-primary/20 rounded-2xl p-6 sm:p-7"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-gold-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.158c.969 0 1.371 1.24.588 1.81l-3.364 2.444a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.54 1.118l-3.364-2.444a1 1 0 00-1.176 0l-3.364 2.444c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.158a1 1 0 00.95-.69l1.286-3.957z" />
                      </svg>
                    ))}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gold-secondary mb-2 leading-snug">
                    &ldquo;{t.headline}&rdquo;
                  </h3>
                  <p className="text-sm text-foreground/75 leading-relaxed mb-5">
                    {t.body}
                  </p>
                  <div className="pt-4 border-t border-gold-primary/10">
                    <div className="text-sm font-semibold text-foreground/90">
                      {t.authorName}
                    </div>
                    <div className="text-xs text-foreground/55">
                      {t.authorTitle} · {t.city}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Other offices */}
      <Section variant="dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-4">
              <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                Our Offices
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-primary">
              Other Locations Across North India
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {otherOffices.map((o) => (
              <Link
                key={o.slug}
                href={`/locations/${o.slug}`}
                className="group flex items-center gap-3 p-4 bg-bg-alt-dark border border-gold-primary/20 rounded-xl hover:border-gold-primary/50 hover:-translate-y-0.5 transition-all"
              >
                <LawIcons.Location className="w-5 h-5 text-gold-primary/70 group-hover:text-gold-primary transition-colors" />
                <span className="text-sm sm:text-base text-white/85 group-hover:text-gold-primary transition-colors">
                  {o.city}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="gold">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="relative bg-linear-to-r from-gold-primary/20 to-gold-secondary/20 p-8 sm:p-10 md:p-12 rounded-3xl border border-gold-primary/40">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Schedule a consultation with our{" "}
              <span className="text-gold-primary">{office.city}</span> team
            </h2>
            <p className="text-base sm:text-lg text-white/70 mb-6">
              Speak with senior arbitration counsel in {office.city}. Initial
              consultations are complimentary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/contact">
                Book Consultation
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href={`tel:${office.telephone.replace(/[^+\d]/g, "")}`}
              >
                Call {office.telephone}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
