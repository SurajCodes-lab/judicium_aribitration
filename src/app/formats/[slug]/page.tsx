import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  getFormatBySlug,
  getAllFormatSlugs,
  getRelatedFormats,
  FormatTemplate,
} from "@/data/formatTemplates";
import { getServiceLineBySlug } from "@/data/serviceLines";
import { getNoticeBySlug } from "@/data/noticeTypes";
import { clampDescription } from "@/lib/seoText";
import { TEL_LINK, WHATSAPP_LINK } from "@/data/contactInfo";

const BASE_URL = "https://www.judiciumarbitration.com";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Format and template pages — /formats/[slug].
 *
 * The implementation plan calls these the fastest-ranking pages available,
 * because "legal notice format" and "cheque bounce notice format" are high
 * volume, low competition, and searched by someone already drafting.
 *
 * They publish the ANATOMY of each document — what every section must contain,
 * which requirements are statutory, and what makes one defective — rather than
 * a fill-in-the-blanks template. See the header comment in
 * src/data/formatTemplates.ts for why that choice was made; in short, a
 * copy-paste template is duplicate content that cannot rank, and a defective
 * notice destroys the client's remedy.
 *
 * Each page emits HowTo + FAQPage + BreadcrumbList + WebPage/Speakable.
 */

export async function generateStaticParams() {
  return getAllFormatSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const f = getFormatBySlug(slug);
  if (!f) return { title: "Format Not Found" };

  const pageUrl = `${BASE_URL}/formats/${f.slug}`;
  const description = clampDescription(f.metaDescription);

  return {
    title: f.seoTitle,
    description,
    alternates: {
      canonical: pageUrl,
      languages: { "en-IN": pageUrl, "x-default": pageUrl },
    },
    openGraph: {
      title: `${f.seoTitle} | Judicium Arbitration`,
      description,
      type: "article",
      locale: "en_IN",
      siteName: "Judicium Arbitration",
      url: pageUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: `${f.seoTitle} | Judicium Arbitration`,
      description,
    },
  };
}

function buildSchemas(f: FormatTemplate, parentTitle: string) {
  const pageUrl = `${BASE_URL}/formats/${f.slug}`;

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${pageUrl}#howto`,
    name: f.title,
    description: f.whatItIs,
    totalTime: "PT1H",
    step: f.structure.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.heading,
      itemListElement: s.mustContain.map((m) => ({
        "@type": "HowToDirection",
        text: m,
      })),
    })),
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: `What is a ${f.title.replace(/ — .*/, "")}?`,
        acceptedAnswer: { "@type": "Answer", text: f.whatItIs },
      },
      {
        "@type": "Question",
        name: `What is the time limit for a ${f.shortTitle}?`,
        acceptedAnswer: { "@type": "Answer", text: f.timeLimit },
      },
      ...f.faqs.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: { "@type": "Answer", text: q.answer },
      })),
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Formats",
        item: `${BASE_URL}/formats`,
      },
      { "@type": "ListItem", position: 3, name: f.title, item: pageUrl },
    ],
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: f.h1,
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    about: { "@type": "Legislation", name: f.provision },
    mentions: { "@type": "Service", name: parentTitle },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".fmt-what", ".fmt-time"],
    },
  };

  return [howTo, faq, breadcrumb, webPage];
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

export default async function FormatPage({ params }: PageProps) {
  const { slug } = await params;
  const f = getFormatBySlug(slug);
  if (!f) notFound();

  const parent = getServiceLineBySlug(f.parentServiceSlug);
  const notice = f.relatedNoticeSlug
    ? getNoticeBySlug(f.parentServiceSlug, f.relatedNoticeSlug)
    : undefined;
  const schemas = buildSchemas(f, parent?.title ?? "");
  const related = getRelatedFormats(f.slug);

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
                { label: "Formats", href: "/formats" },
                { label: f.shortTitle },
              ]}
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center px-3 py-1.5 bg-gold-primary/10 border border-gold-primary/30 rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-secondary">
              {f.documentType}
            </span>
            <span className="inline-flex items-center px-3 py-1.5 bg-bg-alt-dark border border-gold-primary/15 rounded-full text-[11px] text-foreground/60">
              {f.provision}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
            {f.h1}
          </h1>

          <p className="fmt-what text-base sm:text-lg text-foreground/80 leading-relaxed">
            {f.whatItIs}
          </p>

          <dl className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              ["Who sends it", f.whoSends],
              ["Sent to", f.sentTo],
              ["Time limit", f.timeLimit],
            ].map(([k, v], idx) => (
              <div
                key={k}
                className={`rounded-xl border px-4 py-3.5 ${
                  idx === 2
                    ? "fmt-time border-gold-primary/40 bg-gold-primary/10"
                    : "border-gold-primary/15 bg-bg-alt-dark/60"
                }`}
              >
                <dt className="text-[10px] uppercase tracking-[0.15em] text-foreground/45 mb-1">
                  {k}
                </dt>
                <dd className="text-sm text-foreground/85 leading-snug">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Button href="/contact" size="sm">
              Have this drafted properly
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

      {/* The structure */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <Heading eyebrow="The anatomy">
            What the document must contain
          </Heading>
          <p className="text-foreground/65 mb-8 leading-relaxed">
            Set out below is the structure of the document, section by section,
            with what each part has to establish. It is the shape a properly
            drafted document takes — not a template to copy, because the wording
            has to follow your facts.
          </p>

          <div className="space-y-5">
            {f.structure.map((s) => (
              <div
                key={s.heading}
                className="rounded-xl border border-gold-primary/15 bg-bg-alt-dark/50 p-5 sm:p-6"
              >
                <h3 className="font-display text-lg font-semibold text-gold-primary mb-3">
                  {s.heading}
                </h3>
                <ul className="space-y-2">
                  {s.mustContain.map((m) => (
                    <li
                      key={m}
                      className="flex items-start gap-2.5 text-sm text-foreground/75 leading-relaxed"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-gold-primary shrink-0" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Mandatory vs mistakes */}
      <Section variant="gradient">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <div>
            <Heading eyebrow="Non-negotiable">
              Statutory requirements
            </Heading>
            <ul className="space-y-3">
              {f.mandatory.map((m) => (
                <li
                  key={m}
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
                    {m}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Heading eyebrow="Avoid">What makes it defective</Heading>
            <ul className="space-y-3">
              {f.mistakes.map((m) => (
                <li
                  key={m}
                  className="flex items-start gap-3 rounded-xl border border-red-400/25 bg-red-500/5 px-4 py-3.5"
                >
                  <svg
                    className="w-4 h-4 mt-0.5 shrink-0 text-red-300/80"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-foreground/80 leading-snug">
                    {m}
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
          <Heading eyebrow="Common questions">{f.shortTitle} — FAQs</Heading>
          <div className="space-y-4">
            {f.faqs.map((faq) => (
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
          <Heading eyebrow="Related">Read next</Heading>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {notice && (
              <Link
                href={`/services/${notice.parentSlug}/${notice.slug}`}
                className="group rounded-xl border border-gold-primary/25 bg-gold-primary/5 p-5 hover:border-gold-primary/55 transition-colors"
              >
                <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-secondary/80 mb-1.5">
                  The notice itself
                </span>
                <h3 className="font-display text-base font-semibold text-gold-primary leading-snug group-hover:text-gold-light transition-colors">
                  {notice.title}
                </h3>
                <p className="mt-2 text-xs text-foreground/60 leading-relaxed">
                  Deadlines, consequences and how a reply is put together.
                </p>
              </Link>
            )}
            {parent && (
              <Link
                href={`/services/${parent.slug}`}
                className="group rounded-xl border border-gold-primary/15 bg-bg-alt-dark/50 p-5 hover:border-gold-primary/45 transition-colors"
              >
                <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-secondary/70 mb-1.5">
                  The service
                </span>
                <h3 className="font-display text-base font-semibold text-gold-primary leading-snug group-hover:text-gold-light transition-colors">
                  {parent.title}
                </h3>
                <p className="mt-2 text-xs text-foreground/60 leading-relaxed">
                  How we handle these matters end to end.
                </p>
              </Link>
            )}
          </div>

          <h3 className="font-display text-lg font-semibold text-gold-primary mb-4">
            Other formats
          </h3>
          <ul className="flex flex-wrap gap-2.5">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/formats/${r.slug}`}
                  className="inline-block px-4 py-2 rounded-lg border border-gold-primary/25 bg-gold-primary/5 text-sm text-foreground/75 hover:border-gold-primary/60 hover:text-gold-primary transition-colors"
                >
                  {r.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="gold">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-gold-primary mb-4">
            Have it drafted properly
          </h2>
          <p className="text-foreground/70 mb-8 leading-relaxed">
            The structure above is the shape of the document. The wording has to
            follow your facts, and a defect in it can cost the remedy entirely.
            Send us the papers and we will draft it.
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
