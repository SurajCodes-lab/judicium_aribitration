import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import { LawIcons } from "@/components/Icons";
import {
  getCityBySlug,
  cityOffices,
  CityOffice,
} from "@/data/localBusinessSchemas";
import {
  getPracticeAreaBySlug,
  PracticeArea,
} from "@/data/practiceAreas";
import {
  getCityPracticeEntry,
  getAllCityPracticePairs,
  getPracticesForCity,
  CityPracticeEntry,
} from "@/data/cityPracticeContent";

import { composeDescription } from "@/lib/seoText";

const BASE_URL = "https://www.judiciumarbitration.com";

interface PageProps {
  params: Promise<{ city: string; practice: string }>;
}

/**
 * City × Practice landing pages — e.g. /locations/delhi/banking-finance.
 *
 * These target winnable long-tail local queries ("banking lawyer in Chandigarh",
 * "RERA lawyer Noida") that a young domain can realistically rank for, unlike the
 * hyper-competitive national head terms. Each page is composed from THREE distinct
 * sources so it is genuinely unique content, not a doorway page:
 *   1. cityPracticeContent.ts → a unique local angle + city-specific FAQs per combo
 *   2. localBusinessSchemas.ts → the city's real courts/forums + office details
 *   3. practiceAreas.ts → the service/expertise/legal-framework detail
 * See docs/SEO-PLAYBOOK.md → "Phase 1".
 */
export async function generateStaticParams() {
  return getAllCityPracticePairs().map(({ city, practice }) => ({
    city,
    practice,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { city, practice } = await params;
  const office = getCityBySlug(city);
  const area = getPracticeAreaBySlug(practice);
  const entry = getCityPracticeEntry(city, practice);
  if (!office || !area || !entry) return { title: "Page Not Found" };

  const pageUrl = `${BASE_URL}/locations/${city}/${practice}`;
  // W1-07: demand-led. `shortTitle` is the taxonomy label ("Insolvency &
  // Bankruptcy"); `seoShortTitle` is what people actually search ("IBC & NCLT").
  const title = `${area.seoShortTitle} Lawyers in ${office.city}`;
  // W1-08: composed so the CTA is dropped rather than truncated when the
  // local angle runs long. Audit found these at up to 219 chars.
  const description = composeDescription([
    `${area.seoShortTitle} lawyers in ${office.city}, ${office.region}.`,
    entry.metaAngle,
    "Call +91-9899686394.",
  ]);

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
      languages: { "en-IN": pageUrl, "x-default": pageUrl },
    },
    openGraph: {
      title: `${title} | Judicium Arbitration`,
      description,
      type: "article",
      locale: "en_IN",
      siteName: "Judicium Arbitration",
      url: pageUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Judicium Arbitration`,
      description,
    },
  };
}

function generateSchemas(
  office: CityOffice,
  area: PracticeArea,
  entry: CityPracticeEntry
) {
  const pageUrl = `${BASE_URL}/locations/${office.slug}/${area.slug}`;
  const name = `${area.shortTitle} Lawyers in ${office.city}`;

  // City-scoped LegalService — the local-pack ranking signal for "<practice> lawyer <city>"
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "AttorneyService"],
    "@id": `${pageUrl}#legalservice`,
    name: `Judicium Arbitration — ${area.shortTitle}, ${office.city}`,
    description: `${area.shortTitle} legal services in ${office.city}, ${office.region}. ${entry.metaAngle}`,
    url: pageUrl,
    telephone: office.telephone,
    email: "Judiciumarbitration@gmail.com",
    areaServed: { "@type": "City", name: office.city },
    address: {
      "@type": "PostalAddress",
      streetAddress: office.streetAddress,
      addressLocality: office.city,
      addressRegion: office.region,
      postalCode: office.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: office.latitude,
      longitude: office.longitude,
    },
    parentOrganization: {
      "@type": "LegalService",
      "@id": `${BASE_URL}/#organization`,
      name: "Judicium Arbitration",
      url: BASE_URL,
    },
    serviceType: area.shortTitle,
    priceRange: "$$",
  };

  // Service schema with the offer catalogue scoped to this city
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: `${area.title} in ${office.city}`,
    description: area.metaDescription,
    serviceType: area.shortTitle,
    areaServed: { "@type": "City", name: office.city },
    provider: {
      "@type": "LegalService",
      "@id": `${BASE_URL}/#organization`,
      name: "Judicium Arbitration",
      url: BASE_URL,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${area.shortTitle} Services in ${office.city}`,
      itemListElement: area.content.services.slice(0, 8).map((svc, idx) => ({
        "@type": "Offer",
        position: idx + 1,
        itemOffered: { "@type": "Service", name: svc },
      })),
    },
    url: pageUrl,
  };

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
        item: `${BASE_URL}/locations/${office.slug}`,
      },
      { "@type": "ListItem", position: 4, name: area.shortTitle, item: pageUrl },
    ],
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name,
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".cp-tldr", ".faq-question", ".faq-answer"],
    },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  };

  // Combine city-specific FAQs + the two most relevant practice FAQs
  const faqEntities = [
    ...entry.faqs,
    ...(area.content.faqs ?? []).slice(0, 2),
  ].map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqEntities,
  };

  return [
    legalServiceSchema,
    serviceSchema,
    breadcrumbSchema,
    speakableSchema,
    faqSchema,
  ];
}

export default async function CityPracticePage({ params }: PageProps) {
  const { city, practice } = await params;
  const office = getCityBySlug(city);
  const area = getPracticeAreaBySlug(practice);
  const entry = getCityPracticeEntry(city, practice);

  if (!office || !area || !entry) notFound();

  const schemas = generateSchemas(office, area, entry);
  const combinedFaqs = [
    ...entry.faqs,
    ...(area.content.faqs ?? []).slice(0, 2),
  ];

  // Sibling practices in the same city (for internal linking)
  const siblingPractices = getPracticesForCity(city)
    .filter((p) => p.practiceSlug !== practice)
    .map((p) => getPracticeAreaBySlug(p.practiceSlug))
    .filter((p): p is PracticeArea => Boolean(p))
    .slice(0, 5);

  const telHref = `tel:${office.telephone.replace(/[^+\d]/g, "")}`;

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
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Locations", href: "/locations" },
                { label: office.city, href: `/locations/${office.slug}` },
                { label: area.shortTitle },
              ]}
            />
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold-primary/10 border border-gold-primary/30 rounded-full mb-5">
              <span className="text-xl">{area.icon}</span>
              <span className="text-gold-secondary text-xs font-semibold uppercase tracking-widest">
                {office.city} · {office.region}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gold-primary tracking-tight mb-4">
              {area.seoShortTitle} Lawyers in {office.city}
            </h1>

            {/* Quick Answer — self-contained, citation-ready (AEO/voice) */}
            <div className="cp-tldr relative bg-linear-to-br from-gold-primary/10 via-gold-primary/5 to-transparent border-l-4 border-gold-primary p-5 sm:p-6 rounded-r-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold-primary">
                  Quick Answer
                </span>
                <span className="text-foreground/40 text-xs">·</span>
                <span className="text-xs text-foreground/60">
                  Judicium Arbitration — {area.shortTitle}, {office.city}
                </span>
              </div>
              <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
                {entry.localAngle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we help with this practice locally */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-4">
            <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
              How We Help
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-primary mb-6">
            {area.shortTitle} services for {office.city} clients
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-8">
            {area.description} From our {office.city} base, our team handles the
            following for businesses and individuals across {office.region}:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {area.content.services.map((service, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-bg-alt-dark p-4 sm:p-5 rounded-xl border border-gold-primary/15"
              >
                <svg
                  className="w-5 h-5 text-gold-primary shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                  {service}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm sm:text-base text-foreground/70">
            See the full{" "}
            <Link
              href={`/practice-areas/${area.slug}`}
              className="text-gold-primary hover:underline font-semibold"
            >
              {area.shortTitle} practice overview
            </Link>{" "}
            or explore everything our{" "}
            <Link
              href={`/locations/${office.slug}`}
              className="text-gold-primary hover:underline font-semibold"
            >
              {office.city} office
            </Link>{" "}
            handles.
          </p>
        </div>
      </Section>

      {/* Courts & forums in this city */}
      <Section variant="dark">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-4">
            <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
              Courts & Forums
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-primary mb-6">
            Where {office.city} {area.shortTitle.toLowerCase()} matters are heard
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

      {/* Relevant legal framework (from practice data) */}
      {area.content.relatedActs && area.content.relatedActs.length > 0 && (
        <Section>
          <div className="max-w-5xl mx-auto">
            <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-4">
              <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                Legal Framework
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-primary mb-6">
              Key laws we work under
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {area.content.relatedActs.map((act, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gold-primary shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm sm:text-base text-foreground/80">
                    {act}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      {/* FAQs — city+practice specific, then 2 practice FAQs */}
      <Section variant="dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-4">
              <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                FAQs
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-primary">
              {area.shortTitle} in {office.city} — FAQs
            </h2>
          </div>
          <div className="space-y-4 sm:space-y-5">
            {combinedFaqs.map((faq, idx) => (
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

      {/* Sibling practices in this city — internal linking */}
      {siblingPractices.length > 0 && (
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-4">
                <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                  More in {office.city}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-primary">
                Other practice areas in {office.city}
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {siblingPractices.map((p) => (
                <Link
                  key={p.slug}
                  href={`/locations/${office.slug}/${p.slug}`}
                  className="group flex flex-col items-center text-center gap-2 p-4 bg-bg-alt-dark border border-gold-primary/20 rounded-xl hover:border-gold-primary/50 hover:-translate-y-0.5 transition-all"
                >
                  <span className="text-2xl">{p.icon}</span>
                  <span className="text-xs sm:text-sm text-white/80 group-hover:text-gold-primary transition-colors leading-tight">
                    {p.shortTitle}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section variant="gold">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="relative bg-linear-to-r from-gold-primary/20 to-gold-secondary/20 p-8 sm:p-10 md:p-12 rounded-3xl border border-gold-primary/40">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Speak to a{" "}
              <span className="text-gold-primary">
                {area.shortTitle.toLowerCase()}
              </span>{" "}
              lawyer in {office.city}
            </h2>
            <p className="text-base sm:text-lg text-white/70 mb-6">
              Initial consultations are complimentary. Tell us about your matter
              and we&apos;ll explain your options under Indian law.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/contact">
                Book Consultation
              </Button>
              <Button variant="secondary" size="lg" href={telHref}>
                Call {office.telephone}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
