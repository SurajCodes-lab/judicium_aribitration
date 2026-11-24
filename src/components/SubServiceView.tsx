import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SubService } from "@/data/subServices";
import { ServiceLine } from "@/data/serviceLines";
import { TEL_LINK, PHONE_DISPLAY, WHATSAPP_LINK } from "@/data/contactInfo";

const BASE_URL = "https://www.judiciumarbitration.com";

/**
 * Sub-service page view — rendered at /services/[slug]/[topic] when the topic
 * resolves to a SubService rather than a NoticeType.
 *
 * A notice page is organised around a document and its deadline. A sub-service
 * page is organised around the work: who it is for, what we do, how it runs and
 * what the governing law is. They share a URL segment because both sit directly
 * beneath their service pillar, but the content shapes are different enough to
 * warrant separate components.
 */

function Heading({
  eyebrow,
  children,
}: {
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
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

export default function SubServiceView({
  sub,
  parent,
  related,
}: {
  sub: SubService;
  parent: ServiceLine;
  related: SubService[];
}) {
  const pageUrl = `${BASE_URL}/services/${sub.parentSlug}/${sub.slug}`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: sub.title,
      alternateName: sub.h1,
      description: sub.intro,
      url: pageUrl,
      serviceType: sub.title,
      provider: {
        "@type": "LegalService",
        "@id": `${BASE_URL}/#organization`,
        name: "Judicium Arbitration",
        url: BASE_URL,
      },
      isRelatedTo: {
        "@type": "Service",
        name: parent.title,
        url: `${BASE_URL}/services/${parent.slug}`,
      },
      areaServed: ["Delhi NCR", "Gurgaon", "Noida", "Chandigarh", "Jaipur"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${sub.title} — scope of work`,
        itemListElement: sub.whatWeDo.map((item) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: item },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: sub.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "@id": `${pageUrl}#howto`,
      name: `How ${sub.title.toLowerCase()} matters are handled`,
      description: sub.intro,
      step: sub.process.map((p, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: p.title,
        text: p.detail,
      })),
    },
    {
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
        {
          "@type": "ListItem",
          position: 3,
          name: parent.title,
          item: `${BASE_URL}/services/${parent.slug}`,
        },
        { "@type": "ListItem", position: 4, name: sub.title, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: sub.h1,
      inLanguage: "en-IN",
      isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".ss-intro"],
      },
    },
  ];

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
      <section className="relative py-12 sm:py-14 lg:py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_90%_at_30%_-20%,rgba(240,194,70,0.16),transparent_62%)]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: parent.shortTitle, href: `/services/${parent.slug}` },
                { label: sub.shortTitle },
              ]}
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gold-primary/10 border border-gold-primary/30 rounded-full mb-5">
            <span className="text-gold-secondary text-[11px] font-semibold uppercase tracking-[0.14em]">
              {parent.shortTitle}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
            {sub.h1}
          </h1>

          <p className="ss-intro text-base sm:text-lg text-foreground/80 leading-relaxed">
            {sub.intro}
          </p>

          <div className="mt-7 rounded-xl border border-gold-primary/20 bg-gold-primary/5 p-5">
            <span className="block text-[10px] uppercase tracking-[0.15em] text-foreground/45 mb-1.5">
              Typical timeline
            </span>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {sub.timeline}
            </p>
          </div>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
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
        <div className="max-w-4xl mx-auto">
          <Heading eyebrow="Who we act for">Is this your situation?</Heading>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sub.whoFor.map((item) => (
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

      {/* Scope */}
      <Section variant="gradient">
        <div className="max-w-4xl mx-auto">
          <Heading eyebrow="Scope of work">What we handle</Heading>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sub.whatWeDo.map((item, idx) => (
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

      {/* Process */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <Heading eyebrow="How it works">The approach</Heading>
          <ol className="relative border-l border-gold-primary/25 pl-7 space-y-7">
            {sub.process.map((step, idx) => (
              <li key={step.title} className="relative">
                <span className="absolute -left-[2.1rem] top-0.5 w-6 h-6 rounded-full bg-bg-dark border border-gold-primary/50 flex items-center justify-center">
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

          <div className="mt-9">
            <h3 className="text-base font-semibold text-gold-secondary uppercase tracking-wider mb-4">
              Governing law
            </h3>
            <ul className="space-y-2.5">
              {sub.statutes.map((st) => (
                <li
                  key={st}
                  className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-primary shrink-0" />
                  <span>{st}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section variant="gradient">
        <div className="max-w-4xl mx-auto">
          <Heading eyebrow="Common questions">{sub.shortTitle} — FAQs</Heading>
          <div className="space-y-4">
            {sub.faqs.map((faq) => (
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

      {/* Related */}
      {related.length > 0 && (
        <Section>
          <div className="max-w-5xl mx-auto">
            <Heading eyebrow={parent.shortTitle}>Related work</Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.parentSlug}/${r.slug}`}
                  className="group rounded-xl border border-gold-primary/15 bg-bg-alt-dark/50 p-5 hover:border-gold-primary/45 transition-colors"
                >
                  <h3 className="font-display text-base font-semibold text-gold-primary leading-snug group-hover:text-gold-light transition-colors">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-xs text-foreground/60 leading-relaxed line-clamp-2">
                    {r.intro}
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Button
                href={`/services/${parent.slug}`}
                variant="outline"
                size="sm"
              >
                Back to {parent.shortTitle}
              </Button>
            </div>
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section variant="gold">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-gold-primary mb-4">
            Speak to us about your matter
          </h2>
          <p className="text-foreground/70 mb-8 leading-relaxed">
            Tell us what has happened and we will set out the options, the
            timeline and what it will take.
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
