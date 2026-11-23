import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getServiceLines } from "@/data/serviceLines";

const BASE_URL = "https://www.judiciumarbitration.com";

/**
 * /services — the service pillar hub.
 *
 * Parent of the eight service pillar pages, and the page that distinguishes the
 * service layer from the practice-area layer for both visitors and crawlers.
 *
 * The plan lists a ninth pillar, "Arbitration and Commercial Dispute
 * Resolution". It is linked here rather than duplicated: the firm already has a
 * fully optimised page for that intent at
 * /practice-areas/arbitration-alternative-dispute-resolution, and a second page
 * targeting the same terms would compete with it. See W1-09 in the log.
 */

export const metadata: Metadata = {
  title: "Legal Services — Notices & Recovery",
  description:
    "Notice replies, cheque bounce, money recovery, labour disputes, company and licence compliance across Delhi NCR. Call +91-9899686394.",
  alternates: {
    canonical: `${BASE_URL}/services`,
    languages: {
      "en-IN": `${BASE_URL}/services`,
      "x-default": `${BASE_URL}/services`,
    },
  },
  openGraph: {
    title: "Legal Services | Judicium Arbitration",
    description:
      "GST and income tax notices, cheque bounce, money recovery, labour disputes, company and licence compliance.",
    type: "website",
    locale: "en_IN",
    siteName: "Judicium Arbitration",
    url: `${BASE_URL}/services`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Services | Judicium Arbitration",
    description:
      "Notice replies, recovery, labour disputes and compliance across Delhi NCR.",
  },
};

const ARBITRATION_HREF =
  "/practice-areas/arbitration-alternative-dispute-resolution";

function buildSchemas() {
  const pageUrl = `${BASE_URL}/services`;
  const services = getServiceLines();

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${pageUrl}#services`,
    name: "Legal services — Judicium Arbitration",
    numberOfItems: services.length + 1,
    itemListElement: [
      ...services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${BASE_URL}/services/${s.slug}`,
        name: s.title,
      })),
      {
        "@type": "ListItem",
        position: services.length + 1,
        url: `${BASE_URL}${ARBITRATION_HREF}`,
        name: "Arbitration and Commercial Dispute Resolution",
      },
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: pageUrl },
    ],
  };

  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Legal Services — Judicium Arbitration",
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    mainEntity: { "@id": `${pageUrl}#services` },
  };

  return [itemList, breadcrumb, collection];
}

export default function ServicesPage() {
  const services = getServiceLines();
  const schemas = buildSchemas();

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
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(240,194,70,0.14),transparent_60%)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumbs
              items={[{ label: "Home", href: "/" }, { label: "Services" }]}
            />
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold-primary/10 border border-gold-primary/30 rounded-full mb-5">
              <span className="text-gold-secondary text-xs font-semibold uppercase tracking-widest">
                Services
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[1.05] mb-5">
              Legal Services
            </h1>
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
              Most people arrive here because something has already happened — a
              notice in the post, a cheque returned unpaid, an invoice months
              overdue, a termination letter. Each page below sets out the
              deadline that applies, what we do, and what it typically takes.
            </p>
          </div>
        </div>
      </section>

      {/* Service grid */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-start">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group relative flex flex-col rounded-xl border border-gold-primary/12 bg-bg-alt-dark/70 p-6 transition-all duration-400 hover:border-gold-primary/45 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40"
              >
                <span className="text-2xl" aria-hidden="true">
                  {s.icon}
                </span>
                <h2 className="mt-3 font-display text-lg sm:text-xl font-semibold text-gold-primary leading-snug group-hover:text-gold-light transition-colors">
                  {s.shortTitle}
                </h2>
                <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-gold-secondary/70">
                  {s.title}
                </p>
                <span className="mt-3 block h-px w-10 bg-gold-primary/60" />
                <p className="mt-3 text-[13px] text-foreground/65 leading-relaxed line-clamp-3">
                  {s.urgency}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-secondary/90 group-hover:text-gold-primary transition-colors">
                  Read more
                  <svg
                    className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}

            {/* Ninth line — linked, not duplicated */}
            <Link
              href={ARBITRATION_HREF}
              className="group relative flex flex-col rounded-xl border border-gold-primary/25 bg-gold-primary/5 p-6 transition-all duration-400 hover:border-gold-primary/55 hover:-translate-y-1"
            >
              <span className="text-2xl" aria-hidden="true">
                ⚖️
              </span>
              <h2 className="mt-3 font-display text-lg sm:text-xl font-semibold text-gold-primary leading-snug group-hover:text-gold-light transition-colors">
                Arbitration & ADR
              </h2>
              <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-gold-secondary/70">
                Arbitration and Commercial Dispute Resolution
              </p>
              <span className="mt-3 block h-px w-10 bg-gold-primary/60" />
              <p className="mt-3 text-[13px] text-foreground/65 leading-relaxed">
                The firm&apos;s founding practice — arbitration references,
                Section 9 and 17 relief, award enforcement and Section 34
                challenges.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-secondary/90 group-hover:text-gold-primary transition-colors">
                Go to practice area
                <svg
                  className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="gold">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-gold-primary mb-4">
            Not sure which applies?
          </h2>
          <p className="text-foreground/70 mb-8 leading-relaxed">
            Send us what you have received. We will tell you which deadline is
            running and what the options are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Request a consultation</Button>
            <Button href="/practice-areas" variant="outline">
              Browse practice areas
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
