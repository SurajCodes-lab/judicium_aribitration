import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getFormatTemplates } from "@/data/formatTemplates";
import { getServiceLineBySlug } from "@/data/serviceLines";

const BASE_URL = "https://www.judiciumarbitration.com";

/**
 * /formats — hub for the 16 format and template pages.
 *
 * Targets the head term of the cluster ("legal notice format India") while the
 * individual pages take the specific ones. Grouped by service line so the page
 * also works as a routing surface for someone who knows the subject but not
 * the form number.
 */

export const metadata: Metadata = {
  title: "Legal Notice & Reply Formats",
  description:
    "How legal notices and replies are structured in India — section by section, with the statutory requirements and the errors that make one defective.",
  alternates: {
    canonical: `${BASE_URL}/formats`,
    languages: {
      "en-IN": `${BASE_URL}/formats`,
      "x-default": `${BASE_URL}/formats`,
    },
  },
  openGraph: {
    title: "Legal Notice & Reply Formats | Judicium Arbitration",
    description:
      "The anatomy of 16 legal notices and replies — cheque bounce, GST, income tax, labour, recovery and RERA.",
    type: "website",
    locale: "en_IN",
    siteName: "Judicium Arbitration",
    url: `${BASE_URL}/formats`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Notice & Reply Formats | Judicium Arbitration",
    description:
      "Section-by-section structure, statutory requirements, and the mistakes that make a notice defective.",
  },
};

function buildSchemas() {
  const pageUrl = `${BASE_URL}/formats`;
  const items = getFormatTemplates();

  return [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${pageUrl}#formats`,
      name: "Legal notice and reply formats",
      numberOfItems: items.length,
      itemListElement: items.map((f, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${BASE_URL}/formats/${f.slug}`,
        name: f.title,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Formats", item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Legal Notice & Reply Formats",
      inLanguage: "en-IN",
      isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      mainEntity: { "@id": `${pageUrl}#formats` },
    },
  ];
}

export default function FormatsPage() {
  const all = getFormatTemplates();
  const schemas = buildSchemas();

  // Group by service line, preserving plan order within each group.
  const groups = new Map<string, typeof all>();
  for (const f of all) {
    const list = groups.get(f.parentServiceSlug) ?? [];
    list.push(f);
    groups.set(f.parentServiceSlug, list);
  }

  return (
    <main className="min-h-screen pt-20 sm:pt-22 md:pt-24 bg-bg-dark">
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="relative py-14 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(240,194,70,0.14),transparent_60%)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumbs
              items={[{ label: "Home", href: "/" }, { label: "Formats" }]}
            />
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold-primary/10 border border-gold-primary/30 rounded-full mb-5">
              <span className="text-gold-secondary text-xs font-semibold uppercase tracking-widest">
                Formats
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[1.05] mb-5">
              Legal Notice &amp; Reply Formats
            </h1>
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
              Sixteen documents, set out section by section: what each part has
              to establish, which requirements come from statute, and the errors
              that make one defective. These are not templates to copy — the
              wording has to follow your facts, and a defect can cost the remedy
              entirely.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-7xl mx-auto space-y-12">
          {Array.from(groups.entries()).map(([serviceSlug, items]) => {
            const service = getServiceLineBySlug(serviceSlug);
            return (
              <div key={serviceSlug}>
                <div className="mb-5">
                  <h2 className="font-display text-xl sm:text-2xl font-semibold text-gold-primary">
                    {service?.shortTitle ?? serviceSlug}
                  </h2>
                  <div className="mt-3 h-px w-16 bg-linear-to-r from-gold-primary to-transparent" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
                  {items.map((f) => (
                    <Link
                      key={f.slug}
                      href={`/formats/${f.slug}`}
                      className="group relative flex flex-col rounded-xl border border-gold-primary/12 bg-bg-alt-dark/70 p-5 transition-all duration-400 hover:border-gold-primary/45 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40"
                    >
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-secondary/70 mb-2">
                        {f.documentType}
                      </span>
                      <h3 className="font-display text-base font-semibold text-gold-primary leading-snug group-hover:text-gold-light transition-colors">
                        {f.title.replace(/ — .*/, "")}
                      </h3>
                      <span className="mt-3 block h-px w-10 bg-gold-primary/50" />
                      <p className="mt-3 text-[12.5px] text-foreground/60 leading-relaxed line-clamp-3">
                        {f.timeLimit}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-secondary/90 group-hover:text-gold-primary transition-colors">
                        See the structure
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
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section variant="gold">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-gold-primary mb-4">
            Need it drafted rather than described?
          </h2>
          <p className="text-foreground/70 mb-8 leading-relaxed">
            Send us the papers. We will tell you which deadline is running and
            draft the document to fit your facts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Request a consultation</Button>
            <Button href="/services" variant="outline">
              Browse services
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
