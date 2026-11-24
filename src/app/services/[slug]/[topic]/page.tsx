import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  getNoticeBySlug,
  getAllNoticePairs,
  getRelatedNotices,
  NoticeType,
} from "@/data/noticeTypes";
import {
  getSubServiceBySlug,
  getAllSubServicePairs,
  getRelatedSubServices,
} from "@/data/subServices";
import SubServiceView from "@/components/SubServiceView";
import { getServiceLineBySlug } from "@/data/serviceLines";
import { getFormatForNotice } from "@/data/formatTemplates";
import { clampDescription } from "@/lib/seoText";
import { TEL_LINK, PHONE_DISPLAY, WHATSAPP_LINK } from "@/data/contactInfo";

const BASE_URL = "https://www.judiciumarbitration.com";

interface PageProps {
  params: Promise<{ slug: string; topic: string }>;
}

/**
 * Notice-type pages — /services/[slug]/[notice].
 *
 * The plan calls these the fastest-ranking pages available and expects them to
 * carry the first two quarters of enquiries. The reason is intent: someone
 * searching "DRC-01 reply" or "148A(b) notice" is holding the document and has
 * a deadline running. The page is built around that — the deadline is stated
 * before anything else, followed by what happens if it passes.
 *
 * They nest beneath the service pillar rather than sitting in a flat layer, so
 * the hierarchy reads pillar → notice and link equity flows down from the
 * pillar. Each emits FAQPage + HowTo + BreadcrumbList + WebPage/Speakable.
 */

export async function generateStaticParams() {
  // Both page types live directly beneath their service pillar, so the one
  // dynamic segment has to enumerate both.
  return [
    ...getAllNoticePairs().map(({ slug, notice }) => ({ slug, topic: notice })),
    ...getAllSubServicePairs(),
  ];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, topic } = await params;
  const sub = getSubServiceBySlug(slug, topic);
  if (sub) {
    const subUrl = `${BASE_URL}/services/${slug}/${topic}`;
    const subDesc = clampDescription(sub.metaDescription);
    return {
      title: sub.seoTitle,
      description: subDesc,
      alternates: {
        canonical: subUrl,
        languages: { "en-IN": subUrl, "x-default": subUrl },
      },
      openGraph: {
        title: `${sub.seoTitle} | Judicium Arbitration`,
        description: subDesc,
        type: "article",
        locale: "en_IN",
        siteName: "Judicium Arbitration",
        url: subUrl,
      },
      twitter: {
        card: "summary_large_image",
        title: `${sub.seoTitle} | Judicium Arbitration`,
        description: subDesc,
      },
    };
  }

  const n = getNoticeBySlug(slug, topic);
  if (!n) return { title: "Page Not Found" };

  const pageUrl = `${BASE_URL}/services/${slug}/${topic}`;
  const description = clampDescription(n.metaDescription);

  return {
    title: n.seoTitle,
    description,
    alternates: {
      canonical: pageUrl,
      languages: { "en-IN": pageUrl, "x-default": pageUrl },
    },
    openGraph: {
      title: `${n.seoTitle} | Judicium Arbitration`,
      description,
      type: "article",
      locale: "en_IN",
      siteName: "Judicium Arbitration",
      url: pageUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: `${n.seoTitle} | Judicium Arbitration`,
      description,
    },
  };
}

function buildSchemas(n: NoticeType, parentTitle: string) {
  const pageUrl = `${BASE_URL}/services/${n.parentSlug}/${n.slug}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: `What is a ${n.title}?`,
        acceptedAnswer: { "@type": "Answer", text: n.whatItIs },
      },
      {
        "@type": "Question",
        name: `What is the deadline to reply to a ${n.title}?`,
        acceptedAnswer: { "@type": "Answer", text: n.deadline },
      },
      {
        "@type": "Question",
        name: `What happens if I ignore a ${n.title}?`,
        acceptedAnswer: { "@type": "Answer", text: n.ifIgnored },
      },
      ...n.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${pageUrl}#howto`,
    name: `How to respond to a ${n.title}`,
    description: n.whatItIs,
    step: n.howToReply.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text: s,
    })),
    supply: n.documents.map((d) => ({ "@type": "HowToSupply", name: d })),
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
      {
        "@type": "ListItem",
        position: 3,
        name: parentTitle,
        item: `${BASE_URL}/services/${n.parentSlug}`,
      },
      { "@type": "ListItem", position: 4, name: n.title, item: pageUrl },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: n.h1,
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".notice-what", ".notice-deadline"],
    },
    about: {
      "@type": "Legislation",
      name: n.statutes[0],
    },
  };

  return [faqSchema, howToSchema, breadcrumbSchema, webPageSchema];
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

export default async function NoticePage({ params }: PageProps) {
  const { slug, topic } = await params;
  const parent = getServiceLineBySlug(slug);
  if (!parent) notFound();

  // Sub-service pages share this segment with notice pages; render whichever
  // this slug resolves to.
  const sub = getSubServiceBySlug(slug, topic);
  if (sub) {
    return (
      <SubServiceView
        sub={sub}
        parent={parent}
        related={getRelatedSubServices(slug, topic)}
      />
    );
  }

  const n = getNoticeBySlug(slug, topic);
  if (!n) notFound();

  const schemas = buildSchemas(n, parent.title);
  const related = getRelatedNotices(n.parentSlug, n.slug);
  const format = getFormatForNotice(n.slug);

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
                { label: n.shortTitle },
              ]}
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gold-primary/10 border border-gold-primary/30 rounded-full mb-5">
            <span className="text-gold-secondary text-[11px] font-semibold uppercase tracking-[0.14em]">
              {n.provision}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
            {n.h1}
          </h1>

          <p className="notice-what text-base sm:text-lg text-foreground/80 leading-relaxed">
            {n.whatItIs}
          </p>

          {/* The deadline — the single most important fact */}
          <div className="notice-deadline mt-7 rounded-2xl border border-gold-primary/40 bg-linear-to-br from-gold-primary/15 via-gold-primary/5 to-transparent p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 mt-0.5 shrink-0 text-gold-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-gold-primary mb-1.5">
                  The deadline
                </span>
                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                  {n.deadline}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Button href="/contact" size="sm">
              Send us the notice
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

      {/* When it is issued + what happens if ignored */}
      <Section>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-gold-primary/15 bg-bg-alt-dark/50 p-6">
            <h2 className="font-display text-lg font-semibold text-gold-primary mb-3">
              When it is issued
            </h2>
            <p className="text-sm text-foreground/75 leading-relaxed">
              {n.issuedWhen}
            </p>
          </div>
          <div className="rounded-xl border border-red-400/25 bg-red-500/5 p-6">
            <h2 className="font-display text-lg font-semibold text-red-200/90 mb-3">
              If it is ignored
            </h2>
            <p className="text-sm text-foreground/75 leading-relaxed">
              {n.ifIgnored}
            </p>
          </div>
        </div>
      </Section>

      {/* The matching format page */}
      {format && (
        <Section>
          <div className="max-w-4xl mx-auto">
            <Link
              href={`/formats/${format.slug}`}
              className="group block rounded-2xl border border-gold-primary/30 bg-gold-primary/5 p-6 hover:border-gold-primary/60 transition-colors"
            >
              <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-secondary mb-2">
                Drafting it yourself?
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-gold-primary leading-snug group-hover:text-gold-light transition-colors">
                {format.title}
              </h2>
              <p className="mt-2.5 text-sm text-foreground/70 leading-relaxed">
                The document set out section by section — what each part must
                establish, the statutory requirements, and the errors that make
                one defective.
              </p>
            </Link>
          </div>
        </Section>
      )}

      {/* How to reply */}
      <Section variant="gradient">
        <div className="max-w-4xl mx-auto">
          <Heading eyebrow="The reply">How a response is put together</Heading>
          <ol className="relative border-l border-gold-primary/25 pl-7 space-y-6">
            {n.howToReply.map((step, idx) => (
              <li key={step} className="relative">
                <span className="absolute -left-[2.1rem] top-0.5 w-6 h-6 rounded-full bg-bg-dark border border-gold-primary/50 flex items-center justify-center">
                  <span className="font-display text-[10px] font-bold text-gold-primary tabular-nums">
                    {idx + 1}
                  </span>
                </span>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Documents + statutes */}
      <Section>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <div>
            <Heading eyebrow="Before you reply">What to gather</Heading>
            <ul className="space-y-2.5">
              {n.documents.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed"
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
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Heading eyebrow="Governing law">Provisions that apply</Heading>
            <ul className="space-y-2.5">
              {n.statutes.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-primary shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section variant="gradient">
        <div className="max-w-4xl mx-auto">
          <Heading eyebrow="Common questions">{n.shortTitle} — FAQs</Heading>
          <div className="space-y-4">
            {n.faqs.map((faq) => (
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

      {/* Related notices */}
      {related.length > 0 && (
        <Section>
          <div className="max-w-5xl mx-auto">
            <Heading eyebrow={parent.shortTitle}>Other notices we handle</Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.parentSlug}/${r.slug}`}
                  className="group rounded-xl border border-gold-primary/15 bg-bg-alt-dark/50 p-5 hover:border-gold-primary/45 transition-colors"
                >
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-secondary/70 mb-1.5">
                    {r.provision}
                  </span>
                  <h3 className="font-display text-base font-semibold text-gold-primary leading-snug group-hover:text-gold-light transition-colors">
                    {r.title}
                  </h3>
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
            Send us the notice
          </h2>
          <p className="text-foreground/70 mb-8 leading-relaxed">
            Share what you have received and we will confirm the deadline that is
            running and what the reply needs to say.
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
