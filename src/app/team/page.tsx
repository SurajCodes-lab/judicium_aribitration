import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdvocateGrid from "@/components/AdvocateGrid";
import {
  getTeamMembers,
  getTeamMembersPhotoFirst,
  getCombinedExperience,
  teamMembers,
} from "@/data/teamMembers";
import { practiceAreasData } from "@/data/practiceAreas";

const BASE_URL = "https://www.judiciumarbitration.com";

/**
 * /team — the advocate directory.
 *
 * The firm's lawyers previously existed only as blocks inside /about, which gave
 * Google one page carrying eight Person entities and no way for anyone to link to
 * a single advocate. This hub is the parent of eight individual profile URLs and
 * emits an ItemList of them, so a crawler reads the roster as a structured set and
 * name queries ("Nadeem Qureshi advocate") have a page to land on.
 */

export const metadata: Metadata = {
  // Suffix comes from the root layout template.
  title: "Our Advocates — Arbitration Lawyers & Legal Team",
  description:
    "Arbitration lawyers and advocates at Judicium Arbitration — partners and associates practising across Delhi NCR, Haryana, Punjab and Rajasthan.",
  alternates: {
    canonical: `${BASE_URL}/team`,
    languages: { "en-IN": `${BASE_URL}/team`, "x-default": `${BASE_URL}/team` },
  },
  openGraph: {
    title: "Our Advocates | Judicium Arbitration",
    description:
      "Partners and associates practising arbitration, ADR and commercial dispute resolution across North India.",
    type: "website",
    locale: "en_IN",
    siteName: "Judicium Arbitration",
    url: `${BASE_URL}/team`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Advocates | Judicium Arbitration",
    description:
      "Meet the arbitration lawyers behind Judicium Arbitration — experience, education and areas of practice.",
  },
};

function buildSchemas() {
  const pageUrl = `${BASE_URL}/team`;
  const members = getTeamMembers();

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${pageUrl}#roster`,
    name: "Advocates at Judicium Arbitration",
    numberOfItems: members.length,
    itemListElement: members.map((member, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `${BASE_URL}/team/${member.slug}`,
      name: `${member.name} — ${member.title}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Our Advocates", item: pageUrl },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Our Advocates — Judicium Arbitration",
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#organization` },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    mainEntity: { "@id": `${pageUrl}#roster` },
  };

  return [itemListSchema, breadcrumbSchema, collectionSchema];
}

export default function TeamPage() {
  const members = getTeamMembers();
  const schemas = buildSchemas();
  const combinedYears = getCombinedExperience();

  // One roster, photo-first: advocates with portraits lead, the text-only cards
  // follow on the rows below. Deliberately not split by partner/associate — the
  // designation is on each card and on the profile.
  const ordered = getTeamMembersPhotoFirst();

  // Practice areas the team actually covers, for the cross-link strip.
  const coveredSlugs = Array.from(
    new Set(teamMembers.flatMap((m) => m.practiceAreaSlugs))
  );
  const coveredPractices = practiceAreasData.filter((p) =>
    coveredSlugs.includes(p.slug)
  );

  const stats = [
    { value: `${combinedYears}+`, label: "Combined years of practice" },
    { value: `${members.length}`, label: "Advocates & counsel" },
    { value: `${coveredPractices.length}`, label: "Practice areas covered" },
    { value: "8", label: "Cities served" },
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
      <section className="relative py-14 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(240,194,70,0.14),transparent_60%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumbs
              items={[{ label: "Home", href: "/" }, { label: "Our Advocates" }]}
            />
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold-primary/10 border border-gold-primary/30 rounded-full mb-5">
              <span className="text-gold-secondary text-xs font-semibold uppercase tracking-widest">
                The Team
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[1.05] mb-5">
              Our Advocates
            </h1>

            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
              Judicium Arbitration is built around practitioners who have argued
              the matters they advise on. Our partners and associates work across
              arbitration and ADR, commercial and civil litigation, banking and
              recovery, real estate and regulatory disputes — before arbitral
              tribunals, district courts and High Courts in North India.
            </p>
          </div>

          {/* Stats */}
          <dl className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-gold-primary/20 bg-gold-primary/5 px-4 py-4 sm:px-5 sm:py-5"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-3xl sm:text-4xl font-semibold text-gold-primary">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-[11px] sm:text-xs uppercase tracking-wider text-foreground/55">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* The team — one roster, no partner/associate split */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-gold-primary mb-2">
              The Team
            </h2>
            <p className="text-foreground/65 max-w-2xl">
              Each advocate&apos;s designation, years in practice and areas of
              work are on their profile.
            </p>
          </div>

          <AdvocateGrid members={ordered} />
        </div>
      </Section>

      {/* Practice-area cross-links */}
      <Section>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-gold-primary mb-3">
            Where our advocates practise
          </h2>
          <p className="text-foreground/65 mb-8 max-w-2xl mx-auto">
            The practice areas our team is instructed in. Each links to how we
            handle that work.
          </p>

          <ul className="flex flex-wrap justify-center gap-2.5">
            {coveredPractices.map((practice) => (
              <li key={practice.slug}>
                <Link
                  href={`/practice-areas/${practice.slug}`}
                  className="inline-block px-4 py-2 rounded-lg border border-gold-primary/25 bg-gold-primary/5 text-sm text-foreground/75 hover:border-gold-primary/60 hover:text-gold-primary transition-colors"
                >
                  {practice.title}
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
            Speak to the advocate who will handle your matter
          </h2>
          <p className="text-foreground/70 mb-8">
            Tell us what the dispute is about and we will put you in front of the
            right person on the team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Request a consultation</Button>
            <Button href="/practice-areas" variant="outline">
              Explore practice areas
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
