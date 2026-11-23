import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  glossaryTerms,
  GLOSSARY_CATEGORIES,
  getGlossaryByCategory,
} from "@/data/glossary";

const BASE_URL = "https://www.judiciumarbitration.com";
const PAGE_URL = `${BASE_URL}/glossary`;

export const metadata: Metadata = {
  title: "Arbitration & Commercial Law Glossary (India)",
  description:
    "Plain-English definitions of Indian arbitration and commercial law: Section 9, Section 11, seat vs venue, CIRP, SARFAESI, RERA and 24 more terms.",
  alternates: {
    canonical: PAGE_URL,
    languages: { "en-IN": PAGE_URL, "x-default": PAGE_URL },
  },
  openGraph: {
    title: "Arbitration & Commercial Law Glossary | Judicium Arbitration",
    description:
      "Clear definitions of the Indian arbitration, insolvency, banking, real-estate and corporate law terms that matter most.",
    type: "website",
    locale: "en_IN",
    siteName: "Judicium Arbitration",
    url: PAGE_URL,
  },
};

function buildSchemas() {
  // DefinedTermSet — the whole glossary as a structured set of DefinedTerm entities.
  const definedTermSet = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${PAGE_URL}#glossary`,
    name: "Judicium Arbitration — Arbitration & Commercial Law Glossary",
    description:
      "Definitions of key Indian arbitration, insolvency, banking, real-estate and corporate law terms.",
    url: PAGE_URL,
    inLanguage: "en-IN",
    hasDefinedTerm: glossaryTerms.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `${PAGE_URL}#${t.slug}`,
      name: t.term,
      description: t.shortDefinition,
      inDefinedTermSet: `${PAGE_URL}#glossary`,
      url: `${PAGE_URL}#${t.slug}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Glossary", item: PAGE_URL },
    ],
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Arbitration & Commercial Law Glossary (India)",
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".glossary-term", ".glossary-def"],
    },
    breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
  };

  return [definedTermSet, breadcrumbSchema, speakableSchema];
}

export default function GlossaryPage() {
  const schemas = buildSchemas();
  const populatedCategories = GLOSSARY_CATEGORIES.filter(
    (c) => getGlossaryByCategory(c).length > 0
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(240,194,70,0.13),transparent_60%)]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-6">
            <Breadcrumbs
              items={[{ label: "Home", href: "/" }, { label: "Glossary" }]}
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-primary tracking-tight mb-4">
            Arbitration &amp; Commercial Law Glossary
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-foreground/75 leading-relaxed max-w-3xl">
            Plain-English definitions of the Indian arbitration, insolvency,
            banking, real-estate and corporate law terms that come up most often
            — written by the team at Judicium Arbitration.
          </p>

          {/* Category jump nav */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {populatedCategories.map((c) => (
              <a
                key={c}
                href={`#cat-${c.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="px-4 py-2 bg-bg-alt-dark border border-gold-primary/20 rounded-full text-sm text-foreground/80 hover:text-gold-primary hover:border-gold-primary/50 transition-all"
              >
                {c}
              </a>
            ))}
          </div>
        </div>
      </section>

      {populatedCategories.map((category) => {
        const terms = getGlossaryByCategory(category);
        const anchor = `cat-${category.toLowerCase().replace(/[^a-z]+/g, "-")}`;
        return (
          <Section key={category} variant="default">
            <div className="max-w-5xl mx-auto" id={anchor}>
              <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-6">
                <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                  {category}
                </span>
              </div>
              <div className="space-y-5">
                {terms.map((t) => (
                  <div
                    key={t.slug}
                    id={t.slug}
                    className="scroll-mt-28 bg-bg-alt-dark border border-gold-primary/20 rounded-xl p-5 sm:p-6"
                  >
                    <h2 className="glossary-term text-lg sm:text-xl font-bold text-gold-primary mb-2">
                      <Link
                        href={`/glossary/${t.slug}`}
                        className="hover:text-gold-secondary transition-colors"
                      >
                        {t.term}
                      </Link>
                    </h2>
                    <p className="glossary-def text-sm sm:text-base text-foreground/85 leading-relaxed font-medium mb-2">
                      {t.shortDefinition}
                    </p>
                    <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                      {t.explanation}
                    </p>
                    {t.relatedActs.length > 0 && (
                      <p className="mt-3 text-xs text-foreground/55">
                        <span className="uppercase tracking-wider font-semibold text-gold-secondary/80">
                          Statutes:
                        </span>{" "}
                        {t.relatedActs.join(" · ")}
                      </p>
                    )}
                    <Link
                      href={`/glossary/${t.slug}`}
                      className="mt-3 inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-gold-primary hover:text-gold-secondary transition-colors"
                    >
                      Read full definition
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        );
      })}

      {/* CTA */}
      <Section variant="gold">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="relative bg-linear-to-r from-gold-primary/20 to-gold-secondary/20 p-8 sm:p-10 md:p-12 rounded-3xl border border-gold-primary/40">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Have a term that isn&apos;t here?
            </h2>
            <p className="text-base sm:text-lg text-white/70 mb-6">
              Read our detailed{" "}
              <Link href="/insights" className="text-gold-primary hover:underline font-semibold">
                legal insights
              </Link>{" "}
              or speak with senior counsel about your matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/contact">
                Book a Consultation
              </Button>
              <Button variant="secondary" size="lg" href="/practice-areas">
                Explore Practice Areas
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
