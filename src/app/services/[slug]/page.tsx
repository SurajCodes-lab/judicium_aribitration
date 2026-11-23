import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  getServiceLineBySlug,
  getAllServiceSlugs,
  getRelatedServices,
  ServiceLine,
} from "@/data/serviceLines";
import { getPracticeAreaBySlug } from "@/data/practiceAreas";
import { getNoticesForService } from "@/data/noticeTypes";
import { clampDescription } from "@/lib/seoText";
import { TEL_LINK, PHONE_DISPLAY, WHATSAPP_LINK } from "@/data/contactInfo";

const BASE_URL = "https://www.judiciumarbitration.com";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Service pillar pages — /services/[slug].
 *
 * These target a different search intent from the practice-area pages. A
 * practice-area page answers "what kind of law does this firm do"; a service
 * page answers "something has happened to me and I need it dealt with" — a GST
 * notice in the post, a cheque returned unpaid, an invoice unpaid past 45 days.
 * The queries are longer, more specific and carry far higher commercial intent,
 * and they are winnable because they are not the head terms national platforms
 * dominate.
 *
 * Each page emits Service + FAQPage + BreadcrumbList + Speakable, and links into
 * the practice areas it draws on so the new layer reinforces the existing one
 * rather than sitting beside it.
 */

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceLineBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  const pageUrl = `${BASE_URL}/services/${service.slug}`;
  const description = clampDescription(service.metaDescription);

  return {
    title: service.seoTitle,
    description,
    alternates: {
      canonical: pageUrl,
      languages: { "en-IN": pageUrl, "x-default": pageUrl },
    },
    openGraph: {
      title: `${service.seoTitle} | Judicium Arbitration`,
      description,
      type: "article",
      locale: "en_IN",
      siteName: "Judicium Arbitration",
      url: pageUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.seoTitle} | Judicium Arbitration`,
      description,
    },
  };
}

function buildSchemas(service: ServiceLine) {
  const pageUrl = `${BASE_URL}/services/${service.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: service.title,
    alternateName: service.h1,
    description: service.intro,
    url: pageUrl,
    serviceType: service.title,
    provider: {
      "@type": "LegalService",
      "@id": `${BASE_URL}/#organization`,
      name: "Judicium Arbitration",
      url: BASE_URL,
    },
    areaServed: [
      "Delhi NCR",
      "Gurgaon",
      "Noida",
      "Chandigarh",
      "Jaipur",
      "Panipat",
      "Prayagraj",
      "Lucknow",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} — scope of work`,
      itemListElement: service.whatWeDo.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${pageUrl}#howto`,
    name: `How ${service.title.toLowerCase()} matters are handled`,
    description: service.intro,
    step: service.process.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.detail,
    })),
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
        name: "Services",
        item: `${BASE_URL}/services`,
      },
      { "@type": "ListItem", position: 3, name: service.title, item: pageUrl },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: service.h1,
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".svc-intro", ".svc-urgency"],
    },
  };

  return [
    serviceSchema,
    faqSchema,
    howToSchema,
    breadcrumbSchema,
    webPageSchema,
  ];
}

function Heading({
  eyebrow,
  children,
}: {
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-7">
      {eyebrow && (
        <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-secondary/70 mb-2">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-gold-primary tracking-tight">
        {children}
      </h2>
      <div className="mt-4 h-px w-24 bg-linear-to-r from-gold-primary to-transparent" />
    </div>
  );
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceLineBySlug(slug);
  if (!service) notFound();

  const schemas = buildSchemas(service);
  const related = getRelatedServices(service.slug);
  const notices = getNoticesForService(service.slug);
  const practices = service.relatedPracticeSlugs
    .map((s) => getPracticeAreaBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

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
      <section className="relative py-12 sm:py-14 lg:py-18 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_90%_at_30%_-20%,rgba(240,194,70,0.16),transparent_62%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-7">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: service.shortTitle },
              ]}
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gold-primary/10 border border-gold-primary/30 rounded-full mb-5">
            <span aria-hidden="true">{service.icon}</span>
            <span className="text-gold-secondary text-[11px] font-semibold uppercase tracking-[0.18em]">
              {service.shortTitle}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.08] mb-6">
            {service.h1}
          </h1>

          <p className="svc-intro text-base sm:text-lg text-foreground/80 leading-relaxed max-w-3xl">
            {service.intro}
          </p>

          {/* Urgency — the consequence of doing nothing */}
          <div className="svc-urgency mt-7 relative bg-linear-to-br from-gold-primary/12 via-gold-primary/5 to-transparent border-l-4 border-gold-primary p-5 sm:p-6 rounded-r-2xl max-w-3xl">
            <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-gold-primary mb-2">
              Why timing matters
            </span>
            <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
              {service.urgency}
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button href="/contact" size="sm">
              Request a consultation
            </Button>
            <Button href={TEL_LINK} variant="outline" size="sm">
              {PHONE_DISPLAY}
            </Button>
            <Button href={WHATSAPP_LINK} variant="outline" size="sm">
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <Heading eyebrow="Who we act for">
            Is this your situation?
          </Heading>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {service.whoFor.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-gold-primary/15 bg-gold-primary/5 px-4 py-3.5"
              >
                <svg
                  className="w-4 h-4 mt-1 shrink-0 text-gold-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-foreground/80 leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* What we do */}
      <Section variant="gradient">
        <div className="max-w-5xl mx-auto">
          <Heading eyebrow="Scope of work">What we handle</Heading>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {service.whatWeDo.map((item, idx) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-gold-primary/15 bg-bg-alt-dark/50 px-4 py-3.5"
              >
                <span className="shrink-0 mt-0.5 font-display text-xs font-bold text-gold-primary/50 tabular-nums">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-foreground/80 leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Notices handled under this pillar */}
      {notices.length > 0 && (
        <Section>
          <div className="max-w-5xl mx-auto">
            <Heading eyebrow="Notice types">
              Which notice have you received?
            </Heading>
            <p className="text-foreground/65 mb-7 max-w-2xl">
              Each page states the deadline that applies to that notice, what
              happens if it passes, and what the reply has to address.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {notices.map((n) => (
                <Link
                  key={n.slug}
                  href={`/services/${service.slug}/${n.slug}`}
                  className="group rounded-xl border border-gold-primary/15 bg-bg-alt-dark/50 p-5 hover:border-gold-primary/45 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-secondary/70 mb-1.5">
                    {n.provision}
                  </span>
                  <h3 className="font-display text-base font-semibold text-gold-primary leading-snug group-hover:text-gold-light transition-colors">
                    {n.title}
                  </h3>
                  <p className="mt-2 text-xs text-foreground/60 leading-relaxed line-clamp-2">
                    {n.deadline}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Process */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <Heading eyebrow="How it works">The process, step by step</Heading>
          <ol className="relative border-l border-gold-primary/25 pl-7 space-y-8">
            {service.process.map((step, idx) => (
              <li key={step.title} className="relative">
                <span className="absolute -left-[2.1rem] top-1 w-6 h-6 rounded-full bg-bg-dark border border-gold-primary/50 flex items-center justify-center">
                  <span className="font-display text-[10px] font-bold text-gold-primary tabular-nums">
                    {idx + 1}
                  </span>
                </span>
                <h3 className="font-display text-lg font-semibold text-gold-primary mb-1.5">
                  {step.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-xl border border-gold-primary/20 bg-gold-primary/5 p-5">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-secondary/80 mb-2">
              Typical timeline
            </span>
            <p className="text-sm text-foreground/75 leading-relaxed">
              {service.timeline}
            </p>
          </div>
        </div>
      </Section>

      {/* Law + forums */}
      <Section variant="gradient">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <div>
            <Heading eyebrow="Governing law">Statutes we work under</Heading>
            <ul className="space-y-3">
              {service.statutes.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3 text-sm sm:text-base text-foreground/80 leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-primary shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Heading eyebrow="Where it is heard">Forums</Heading>
            <ul className="space-y-3">
              {service.forums.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 rounded-xl border border-gold-primary/15 bg-bg-alt-dark/50 px-4 py-3.5"
                >
                  <svg
                    className="w-4 h-4 mt-0.5 shrink-0 text-gold-secondary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M10 2a1 1 0 01.894.553l1.382 2.764 3.05.443a1 1 0 01.555 1.705l-2.206 2.15.521 3.038a1 1 0 01-1.451 1.054L10 12.267l-2.745 1.44a1 1 0 01-1.45-1.054l.52-3.038-2.205-2.15a1 1 0 01.554-1.705l3.05-.443L9.106 2.553A1 1 0 0110 2z" />
                  </svg>
                  <span className="text-sm text-foreground/80 leading-snug">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <Heading eyebrow="Common questions">
            {service.shortTitle} — FAQs
          </Heading>
          <div className="space-y-4">
            {service.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-gold-primary/15 bg-bg-alt-dark/50 px-5 py-4 open:border-gold-primary/40 transition-colors"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                  <h3 className="text-base font-semibold text-gold-primary leading-snug">
                    {faq.question}
                  </h3>
                  <svg
                    className="w-4 h-4 mt-1 shrink-0 text-gold-primary/70 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-foreground/75 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* Cross-links */}
      <Section variant="gradient">
        <div className="max-w-5xl mx-auto">
          <Heading eyebrow="Related">Practice areas behind this work</Heading>
          <ul className="flex flex-wrap gap-2.5 mb-10">
            {practices.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/practice-areas/${p.slug}`}
                  className="inline-block px-4 py-2 rounded-lg border border-gold-primary/25 bg-gold-primary/5 text-sm text-foreground/75 hover:border-gold-primary/60 hover:text-gold-primary transition-colors"
                >
                  {p.shortTitle}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="font-display text-lg font-semibold text-gold-primary mb-4">
            Other services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}`}
                className="group rounded-xl border border-gold-primary/15 bg-bg-alt-dark/50 p-5 hover:border-gold-primary/45 transition-colors"
              >
                <span className="text-lg" aria-hidden="true">
                  {r.icon}
                </span>
                <h4 className="mt-2 font-display text-base font-semibold text-gold-primary leading-snug group-hover:text-gold-light transition-colors">
                  {r.shortTitle}
                </h4>
                <p className="mt-1.5 text-xs text-foreground/60 leading-relaxed line-clamp-2">
                  {r.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="gold">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-gold-primary mb-4">
            Send us the notice or the papers
          </h2>
          <p className="text-foreground/70 mb-8 leading-relaxed">
            Share what you have received and we will tell you the deadline, the
            options and what it will take — before you commit to anything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Request a consultation</Button>
            <Button href={TEL_LINK} variant="outline">
              {PHONE_DISPLAY}
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
