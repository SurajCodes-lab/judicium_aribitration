import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { LawIcons } from "@/components/Icons";
import {
  getInsightBySlug,
  getAllInsightSlugs,
  getRelatedInsights,
  InsightArticle,
} from "@/data/insights";

const BASE_URL = "https://www.judiciumarbitration.com";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) return { title: "Article Not Found" };

  const pageUrl = `${BASE_URL}/insights/${slug}`;
  return {
    title: article.title,
    description: article.metaDescription,
    keywords: article.keywords.join(", "),
    authors: [{ name: article.authorName }],
    alternates: {
      canonical: pageUrl,
      languages: { "en-IN": pageUrl, "x-default": pageUrl },
    },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: "article",
      locale: "en_IN",
      siteName: "Judicium Arbitration",
      url: pageUrl,
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: [article.authorName],
      tags: article.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
    },
  };
}

function generateSchemas(article: InsightArticle) {
  const pageUrl = `${BASE_URL}/insights/${article.slug}`;

  // BlogPosting — primary schema for a dated, authored article
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${pageUrl}#blogpost`,
    headline: article.title,
    alternativeHeadline: article.subtitle,
    description: article.metaDescription,
    articleSection: article.category,
    inLanguage: "en-IN",
    url: pageUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    isPartOf: { "@type": "Blog", "@id": `${BASE_URL}/insights#blog` },
    keywords: article.keywords.join(", "),
    wordCount: article.sections.reduce(
      (acc, s) => acc + s.paragraphs.reduce((p, t) => p + t.split(/\s+/).length, 0),
      0
    ),
    timeRequired: `PT${article.readingTime}M`,
    author: {
      "@type": "Person",
      name: article.authorName,
      jobTitle: article.authorTitle,
      worksFor: {
        "@type": "LegalService",
        "@id": `${BASE_URL}/#organization`,
        name: "Judicium Arbitration",
        url: BASE_URL,
      },
      url: `${BASE_URL}/about`,
    },
    publisher: {
      "@type": "LegalService",
      "@id": `${BASE_URL}/#organization`,
      name: "Judicium Arbitration",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.jpeg` },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    image: `${BASE_URL}/logo.jpeg`,
    about: article.relatedActs.map((act) => ({
      "@type": "Legislation",
      name: act,
      legislationJurisdiction: "IN",
    })),
  };

  // FAQPage — drives People-Also-Ask + AI citations
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  // Speakable
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".insight-tldr", ".faq-question", ".faq-answer"],
    },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
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
        name: "Insights",
        item: `${BASE_URL}/insights`,
      },
      { "@type": "ListItem", position: 3, name: article.title, item: pageUrl },
    ],
  };

  return [blogPostingSchema, faqSchema, speakableSchema, breadcrumbSchema];
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) notFound();

  const schemas = generateSchemas(article);
  const related = getRelatedInsights(slug, 3);

  return (
    <main className="min-h-screen pt-20 sm:pt-22 md:pt-24 bg-bg-dark">
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Article Hero */}
      <article>
        <section className="relative py-14 sm:py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(240,194,70,0.12),transparent_60%)]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
            <nav className="mb-6 text-sm">
              <ol className="flex items-center gap-2 text-foreground/60 flex-wrap">
                <li>
                  <Link
                    href="/"
                    className="hover:text-gold-primary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-gold-primary/50">/</li>
                <li>
                  <Link
                    href="/insights"
                    className="hover:text-gold-primary transition-colors"
                  >
                    Insights
                  </Link>
                </li>
                <li className="text-gold-primary/50">/</li>
                <li className="text-gold-primary font-medium line-clamp-1">
                  {article.category}
                </li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold-primary bg-gold-primary/10 border border-gold-primary/30 rounded-full">
                {article.category}
              </span>
              <span className="text-xs text-foreground/55">
                {article.readingTime} min read
              </span>
              <span className="text-xs text-foreground/55">
                · Updated {formatDate(article.dateModified)}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-primary tracking-tight leading-tight mb-4">
              {article.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-foreground/75 leading-relaxed mb-6">
              {article.subtitle}
            </p>

            {/* Author byline */}
            <div className="flex items-center gap-3 pb-6 border-b border-gold-primary/15">
              <div className="w-11 h-11 rounded-full bg-linear-to-br from-gold-primary to-gold-secondary flex items-center justify-center text-black font-bold">
                {article.authorName
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground/90">
                  By {article.authorName}
                </div>
                <div className="text-xs text-foreground/55">
                  {article.authorTitle} · Published{" "}
                  {formatDate(article.datePublished)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TL;DR — citation-ready */}
        <section className="pt-2">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="insight-tldr relative bg-linear-to-br from-gold-primary/10 via-gold-primary/5 to-transparent border-l-4 border-gold-primary p-6 sm:p-7 rounded-r-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold-primary">
                  TL;DR
                </span>
                <span className="text-foreground/40 text-xs">·</span>
                <span className="text-xs text-foreground/55">
                  Judicium Arbitration — {article.category}
                </span>
              </div>
              <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
                {article.tldr}
              </p>
            </div>
          </div>
        </section>

        {/* Body */}
        <Section>
          <div className="max-w-3xl mx-auto">
            <div className="prose-judicium space-y-10">
              {article.sections.map((section, idx) => (
                <div key={idx}>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gold-primary mb-4 leading-tight">
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((p, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-base sm:text-lg text-foreground/85 leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Related statutes */}
            {article.relatedActs.length > 0 && (
              <div className="mt-12 pt-10 border-t border-gold-primary/15">
                <div className="inline-block px-3 py-1 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-4">
                  <span className="text-gold-secondary text-xs font-semibold uppercase tracking-wider">
                    Related Legislation
                  </span>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {article.relatedActs.map((act, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm sm:text-base text-foreground/80"
                    >
                      <LawIcons.Document className="w-4 h-4 text-gold-primary shrink-0 mt-1" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Section>

        {/* FAQ */}
        {article.faqs.length > 0 && (
          <Section variant="dark">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-4">
                  <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                    Frequently Asked
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-primary">
                  Questions on this topic
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-5">
                {article.faqs.map((faq, idx) => (
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
        )}
      </article>

      {/* Related */}
      {related.length > 0 && (
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/20 rounded-full mb-4">
                <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
                  Continue Reading
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-primary">
                Related Insights
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/insights/${r.slug}`}
                  className="group block bg-bg-alt-dark border border-gold-primary/20 hover:border-gold-primary/45 rounded-xl p-6 hover:-translate-y-1 transition-all"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-gold-primary">
                    {r.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-gold-primary transition-colors leading-tight mt-2 mb-2">
                    {r.title}
                  </h3>
                  <p className="text-xs text-foreground/55 line-clamp-3">
                    {r.subtitle}
                  </p>
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
              Have a question on{" "}
              <span className="text-gold-primary">{article.category}</span>?
            </h2>
            <p className="text-base sm:text-lg text-white/70 mb-6">
              Speak with senior counsel at Judicium Arbitration. Initial
              consultations are complimentary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/contact">
                Schedule a Consultation
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
