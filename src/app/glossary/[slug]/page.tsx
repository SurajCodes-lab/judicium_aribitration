import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  getGlossaryTermBySlug,
  getAllGlossarySlugs,
  getRelatedGlossaryTerms,
  GlossaryTerm,
} from "@/data/glossary";

const BASE_URL = "https://www.judiciumarbitration.com";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Individual glossary term pages — e.g. /glossary/section-9-arbitration-act.
 *
 * The /glossary hub answers "what are the key terms"; these per-term pages target
 * the precise definitional query an answer engine resolves ("what is Section 9",
 * "what is CIRP", "seat vs venue"). Each is a standalone DefinedTerm entity with a
 * self-contained one-sentence answer (speakable / citation-ready), a practical
 * expansion, the governing statutes, and links across to related terms — turning
 * the glossary from one page into 30 indexable AEO surfaces.
 * See docs/SEO-PLAYBOOK.md → "Phase 2".
 */
export async function generateStaticParams() {
  return getAllGlossarySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const term = getGlossaryTermBySlug(slug);
  if (!term) return { title: "Term Not Found" };

  const pageUrl = `${BASE_URL}/glossary/${term.slug}`;
  const title = `What is ${term.term}? — Definition`;
  const description =
    term.shortDefinition.length > 155
      ? `${term.shortDefinition.slice(0, 152)}…`
      : term.shortDefinition;

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
      languages: { "en-IN": pageUrl, "x-default": pageUrl },
    },
    openGraph: {
      title: `${term.term} — Glossary | Judicium Arbitration`,
      description,
      type: "article",
      locale: "en_IN",
      siteName: "Judicium Arbitration",
      url: pageUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: `${term.term} — Glossary | Judicium Arbitration`,
      description,
    },
  };
}

function buildSchemas(term: GlossaryTerm) {
  const pageUrl = `${BASE_URL}/glossary/${term.slug}`;

  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `${pageUrl}#definedterm`,
    name: term.term,
    description: term.shortDefinition,
    url: pageUrl,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      "@id": `${BASE_URL}/glossary#glossary`,
      name: "Judicium Arbitration — Arbitration & Commercial Law Glossary",
      url: `${BASE_URL}/glossary`,
    },
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
        name: "Glossary",
        item: `${BASE_URL}/glossary`,
      },
      { "@type": "ListItem", position: 3, name: term.term, item: pageUrl },
    ],
  };

  // FAQPage framing the definition as the "What is …?" question answer engines ask.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: `What is ${term.term}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${term.shortDefinition} ${term.explanation}`,
        },
      },
    ],
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: `What is ${term.term}?`,
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".glossary-def", ".glossary-explanation"],
    },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  };

  return [definedTermSchema, breadcrumbSchema, faqSchema, speakableSchema];
}

export default async function GlossaryTermPage({ params }: PageProps) {
  const { slug } = await params;
  const term = getGlossaryTermBySlug(slug);

  if (!term) notFound();

  const schemas = buildSchemas(term);
  const related = getRelatedGlossaryTerms(term.slug);

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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(240,194,70,0.14),transparent_60%)]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Glossary", href: "/glossary" },
                { label: term.term },
              ]}
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold-primary/10 border border-gold-primary/30 rounded-full mb-5">
            <span className="text-gold-secondary text-xs font-semibold uppercase tracking-widest">
              {term.category} · Glossary
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-primary tracking-tight mb-5">
            What is {term.term}?
          </h1>

          {/* One-sentence definition — self-contained, citation-ready (AEO/voice) */}
          <div className="glossary-def relative bg-linear-to-br from-gold-primary/10 via-gold-primary/5 to-transparent border-l-4 border-gold-primary p-5 sm:p-6 rounded-r-2xl">
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed font-medium">
              {term.shortDefinition}
            </p>
          </div>
        </div>
      </section>

      {/* Explanation */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-5">
            In practice
          </h2>
          <p className="glossary-explanation text-base sm:text-lg text-foreground/80 leading-relaxed">
            {term.explanation}
          </p>

          {term.relatedActs.length > 0 && (
            <div className="mt-8 bg-bg-alt-dark border border-gold-primary/20 rounded-xl p-5 sm:p-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-gold-secondary">
                Governing statutes
              </span>
              <ul className="mt-3 flex flex-wrap gap-2">
                {term.relatedActs.map((act) => (
                  <li
                    key={act}
                    className="px-3 py-1.5 bg-gold-primary/10 border border-gold-primary/20 rounded-full text-xs sm:text-sm text-foreground/80"
                  >
                    {act}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="mt-8 text-sm sm:text-base text-foreground/70">
            Back to the full{" "}
            <Link
              href="/glossary"
              className="text-gold-primary hover:underline font-semibold"
            >
              arbitration &amp; commercial law glossary
            </Link>
            , or read our in-depth{" "}
            <Link
              href="/insights"
              className="text-gold-primary hover:underline font-semibold"
            >
              legal insights
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* Related terms — internal linking */}
      {related.length > 0 && (
        <Section variant="dark">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-4">
                <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                  Related Terms
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-primary">
                Keep reading
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {related.map((t) => (
                <Link
                  key={t.slug}
                  href={`/glossary/${t.slug}`}
                  className="group flex flex-col gap-1.5 p-5 bg-bg-alt-dark border border-gold-primary/20 rounded-xl hover:border-gold-primary/50 hover:-translate-y-0.5 transition-all"
                >
                  <span className="text-sm font-semibold text-gold-primary group-hover:text-gold-secondary transition-colors">
                    {t.term}
                  </span>
                  <span className="text-xs text-foreground/65 leading-relaxed line-clamp-3">
                    {t.shortDefinition}
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
              Facing a {term.category.toLowerCase()} matter?
            </h2>
            <p className="text-base sm:text-lg text-white/70 mb-6">
              Speak with senior counsel about how {term.term} applies to your
              dispute. Initial consultations are complimentary.
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
