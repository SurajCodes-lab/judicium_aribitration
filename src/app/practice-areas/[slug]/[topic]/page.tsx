import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  getSupportBySlug,
  getAllSupportPairs,
  getRelatedSupport,
  PracticeSupport,
} from "@/data/practiceSupport";
import { getPracticeAreaBySlug } from "@/data/practiceAreas";
import { clampDescription } from "@/lib/seoText";
import { TEL_LINK, WHATSAPP_LINK } from "@/data/contactInfo";

const BASE_URL = "https://www.judiciumarbitration.com";

interface PageProps {
  params: Promise<{ slug: string; topic: string }>;
}

/**
 * Practice-area supporting pages — /practice-areas/[slug]/[topic].
 *
 * Deliberately transactional. The firm already publishes a glossary definition
 * and, for several of these subjects, a cornerstone article. A third page
 * repeating the law would split link equity rather than add reach, so these
 * pages carry scope of work, what the client must provide, timeline and cost
 * drivers — and link out to the informational pages for the law itself.
 *
 * That separation also works in the firm's favour: the glossary and article
 * pages now funnel toward an instruction instead of being dead ends.
 */

export async function generateStaticParams() {
  return getAllSupportPairs();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, topic } = await params;
  const s = getSupportBySlug(slug, topic);
  if (!s) return { title: "Page Not Found" };

  const pageUrl = `${BASE_URL}/practice-areas/${slug}/${topic}`;
  const description = clampDescription(s.metaDescription);

  return {
    title: s.seoTitle,
    description,
    alternates: {
      canonical: pageUrl,
      languages: { "en-IN": pageUrl, "x-default": pageUrl },
    },
    openGraph: {
      title: `${s.seoTitle} | Judicium Arbitration`,
      description,
      type: "article",
      locale: "en_IN",
      siteName: "Judicium Arbitration",
      url: pageUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: `${s.seoTitle} | Judicium Arbitration`,
      description,
    },
  };
}

function buildSchemas(s: PracticeSupport, parentTitle: string) {
  const pageUrl = `${BASE_URL}/practice-areas/${s.parentSlug}/${s.slug}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: s.title,
      alternateName: s.h1,
      description: s.intro,
      url: pageUrl,
      serviceType: s.title,
      provider: {
        "@type": "LegalService",
        "@id": `${BASE_URL}/#organization`,
        name: "Judicium Arbitration",
        url: BASE_URL,
      },
      isRelatedTo: {
        "@type": "Service",
        name: parentTitle,
        url: `${BASE_URL}/practice-areas/${s.parentSlug}`,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${s.title} — scope of work`,
        itemListElement: s.whatWeDo.map((item) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: item },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: s.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "@id": `${pageUrl}#howto`,
      name: `How ${s.title.toLowerCase()} matters are run`,
      description: s.intro,
      step: s.process.map((p, i) => ({
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
          name: "Practice Areas",
          item: `${BASE_URL}/practice-areas`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: parentTitle,
          item: `${BASE_URL}/practice-areas/${s.parentSlug}`,
        },
        { "@type": "ListItem", position: 4, name: s.title, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: s.h1,
      inLanguage: "en-IN",
      isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      about: { "@type": "Legislation", name: s.provision },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".ps-intro", ".ps-when"],
      },
    },
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

export default async function PracticeSupportPage({ params }: PageProps) {
  const { slug, topic } = await params;
  const s = getSupportBySlug(slug, topic);
  const parent = getPracticeAreaBySlug(slug);
  if (!s || !parent) notFound();

  const schemas = buildSchemas(s, parent.title);
  const related = getRelatedSupport(slug, topic);

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
                { label: "Practice Areas", href: "/practice-areas" },
                { label: parent.shortTitle, href: `/practice-areas/${parent.slug}` },
                { label: s.shortTitle },
              ]}
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gold-primary/10 border border-gold-primary/30 rounded-full mb-5">
            <span className="text-gold-secondary text-[11px] font-semibold uppercase tracking-[0.14em]">
              {s.provision}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
            {s.h1}
          </h1>

          <p className="ps-intro text-base sm:text-lg text-foreground/80 leading-relaxed">
            {s.intro}
          </p>

          <div className="ps-when mt-7 rounded-2xl border border-gold-primary/40 bg-linear-to-br from-gold-primary/15 via-gold-primary/5 to-transparent p-5 sm:p-6">
            <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-gold-primary mb-2">
              When to instruct us
            </span>
            <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
              {s.whenToAct}
            </p>
          </div>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Button href="/contact" size="sm">
              Request a consultation
            </Button>
            <Button href={TEL_LINK} variant="outline" size="sm">
              Call us
            </Button>
            <Button href={WHATSAPP_LINK} variant="outline" size="sm">
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Scope + what we need */}
      <Section>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <div>
            <Heading eyebrow="Scope of work">What we do</Heading>
            <ul className="space-y-3">
              {s.whatWeDo.map((item, idx) => (
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
          <div>
            <Heading eyebrow="To get started">What we need from you</Heading>
            <ul className="space-y-3">
              {s.weNeedFromYou.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-gold-primary/20 bg-gold-primary/5 px-4 py-3.5"
                >
                  <svg
                    className="w-4 h-4 mt-0.5 shrink-0 text-gold-primary"
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
        </div>
      </Section>

      {/* Process, forum, timeline, cost */}
      <Section variant="gradient">
        <div className="max-w-4xl mx-auto">
          <Heading eyebrow="How it runs">The process</Heading>
          <ol className="relative border-l border-gold-primary/25 pl-7 space-y-7">
            {s.process.map((step, idx) => (
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

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-gold-primary/15 bg-bg-alt-dark/50 p-5">
              <span className="block text-[10px] uppercase tracking-[0.15em] text-foreground/45 mb-2">
                Forum
              </span>
              <ul className="space-y-1.5">
                {s.forum.map((f) => (
                  <li key={f} className="text-sm text-foreground/80 leading-snug">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-gold-primary/15 bg-bg-alt-dark/50 p-5">
              <span className="block text-[10px] uppercase tracking-[0.15em] text-foreground/45 mb-2">
                Timeline
              </span>
              <p className="text-sm text-foreground/80 leading-snug">
                {s.timeline}
              </p>
            </div>
            <div className="rounded-xl border border-gold-primary/15 bg-bg-alt-dark/50 p-5">
              <span className="block text-[10px] uppercase tracking-[0.15em] text-foreground/45 mb-2">
                What drives the cost
              </span>
              <ul className="space-y-1.5">
                {s.costDrivers.map((c) => (
                  <li
                    key={c}
                    className="text-[13px] text-foreground/75 leading-snug"
                  >
                    · {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <Heading eyebrow="Common questions">{s.shortTitle} — FAQs</Heading>
          <div className="space-y-4">
            {s.faqs.map((faq) => (
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

      {/* Read also — connects the transactional page to the informational ones */}
      <Section variant="gradient">
        <div className="max-w-5xl mx-auto">
          <Heading eyebrow="Background reading">
            The law behind this work
          </Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {s.readAlso.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group rounded-xl border border-gold-primary/15 bg-bg-alt-dark/50 p-5 hover:border-gold-primary/45 transition-colors"
              >
                <h3 className="font-display text-base font-semibold text-gold-primary leading-snug group-hover:text-gold-light transition-colors">
                  {r.label}
                </h3>
              </Link>
            ))}
          </div>

          {related.length > 0 && (
            <>
              <h3 className="font-display text-lg font-semibold text-gold-primary mb-4">
                Related work in {parent.shortTitle}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/practice-areas/${r.parentSlug}/${r.slug}`}
                      className="inline-block px-4 py-2 rounded-lg border border-gold-primary/25 bg-gold-primary/5 text-sm text-foreground/75 hover:border-gold-primary/60 hover:text-gold-primary transition-colors"
                    >
                      {r.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </Section>

      {/* CTA */}
      <Section variant="gold">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-gold-primary mb-4">
            Speak to us about your matter
          </h2>
          <p className="text-foreground/70 mb-8 leading-relaxed">
            Send us the papers and we will tell you what the position is, what it
            will take, and how long it is likely to run.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Request a consultation</Button>
            <Button href={TEL_LINK} variant="outline">
              Call us
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
