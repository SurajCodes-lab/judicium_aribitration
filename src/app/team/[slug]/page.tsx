import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdvocateGrid from "@/components/AdvocateGrid";
import {
  getTeamMemberBySlug,
  getAllTeamSlugs,
  getRelatedTeamMembers,
  professionalApproach,
  TeamMember,
} from "@/data/teamMembers";
import { getPracticeAreaBySlug } from "@/data/practiceAreas";
import { TEL_LINK } from "@/data/contactInfo";

const BASE_URL = "https://www.judiciumarbitration.com";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Individual advocate profile — /team/[slug].
 *
 * Each advocate becomes a first-class, indexable Person entity with a canonical
 * URL, rather than an anonymous block inside /about. This matters three ways:
 *
 *  1. E-E-A-T. Google's guidance for YMYL topics (and legal advice is YMYL) asks
 *     who produced the content and what qualifies them. A named practitioner with
 *     education, years of practice and the forums they appear before is the
 *     strongest expertise signal a law firm site can emit.
 *  2. AEO/GEO. "Who is the best arbitration lawyer in Panipat" is answered by an
 *     engine that can resolve a Person entity with knowsAbout, alumniOf and a
 *     worksFor link back to the firm. A card buried in /about cannot be cited.
 *  3. Name search. Clients and opposing counsel search the individual by name.
 *     Without a profile URL those queries land on a competitor directory.
 *
 * Sections mirror the brief: About, Areas of Practice, Skills & Expertise, Legal
 * Advisory & Documentation, Courts & Tribunals, Professional Experience, Contact.
 * See the Week 1 implementation log in 2.0/week1/.
 */

export async function generateStaticParams() {
  return getAllTeamSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) return { title: "Advocate Not Found" };

  const pageUrl = `${BASE_URL}/team/${member.slug}`;
  // The root layout applies the "%s | Judicium Arbitration" template — no suffix here.
  const title = `${member.name} — ${member.title}`;
  const description =
    member.headline.length > 158
      ? `${member.headline.slice(0, 155)}…`
      : member.headline;

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
      languages: { "en-IN": pageUrl, "x-default": pageUrl },
    },
    openGraph: {
      title: `${member.name} — ${member.title}`,
      description,
      type: "profile",
      locale: "en_IN",
      siteName: "Judicium Arbitration",
      url: pageUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: `${member.name} — ${member.title}`,
      description,
    },
  };
}

function buildSchemas(member: TeamMember) {
  const pageUrl = `${BASE_URL}/team/${member.slug}`;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${pageUrl}#person`,
    name: member.name,
    url: pageUrl,
    jobTitle: member.title,
    description: member.headline,
    ...(member.image ? { image: `${BASE_URL}${member.image}` } : {}),
    worksFor: {
      "@type": "LegalService",
      "@id": `${BASE_URL}/#organization`,
      name: "Judicium Arbitration",
      url: BASE_URL,
    },
    knowsAbout: member.specializations,
    alumniOf: member.education.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu,
    })),
    hasOccupation: {
      "@type": "Occupation",
      name: member.title,
      occupationalCategory: "23-1011.00",
      occupationLocation: {
        "@type": "Place",
        name: member.officeBase,
      },
      skills: member.specializations.join(", "),
    },
    areaServed: member.jurisdiction,
    memberOf: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Judicium Arbitration",
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
        name: "Our Advocates",
        item: `${BASE_URL}/team`,
      },
      { "@type": "ListItem", position: 3, name: member.name, item: pageUrl },
    ],
  };

  // ProfilePage is the type Google documents for a page about one person.
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: `${member.name} — ${member.title}`,
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
    mainEntity: { "@id": `${pageUrl}#person` },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".advocate-headline", ".advocate-bio"],
    },
  };

  // The "who is X / what do they do" question an answer engine resolves.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: `Who is ${member.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${member.name} is a ${member.title} at Judicium Arbitration. ${member.headline} ${member.bio}`,
        },
      },
      {
        "@type": "Question",
        name: `What does ${member.name} specialise in?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${member.name} practises in ${member.specializations
            .slice(0, 6)
            .join(", ")}, with ${
            member.yearsExperience
          }+ years of experience across ${member.jurisdiction}.`,
        },
      },
      {
        "@type": "Question",
        name: `Which courts does ${member.name} appear before?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${member.name} appears before ${member.courtsAndTribunals.join(
            ", "
          )}.`,
        },
      },
    ],
  };

  return [personSchema, breadcrumbSchema, profilePageSchema, faqSchema];
}

/** Section heading with the gold rule used throughout the profile. */
function ProfileHeading({
  eyebrow,
  children,
}: {
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-7">
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

export default async function AdvocateProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);

  if (!member) notFound();

  const schemas = buildSchemas(member);
  const related = getRelatedTeamMembers(member.slug);
  // No portrait means no image area at all — not a placeholder. The identity
  // column then spans the full width instead of leaving a gap where a photo
  // would have been.
  const hasPortrait = Boolean(member.image);
  const practices = member.practiceAreaSlugs
    .map((s) => getPracticeAreaBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const facts = [
    { label: "Experience", value: `${member.yearsExperience}+ years` },
    { label: "Designation", value: member.title },
    { label: "Jurisdiction", value: member.jurisdiction },
    { label: "Office base", value: member.officeBase },
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

      {/* ---------------------------------------------------------------- */}
      {/* Hero — name, designation, years, jurisdiction, practice tags      */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative py-12 sm:py-14 lg:py-18 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_90%_at_30%_-20%,rgba(240,194,70,0.16),transparent_62%)]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-7">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Our Advocates", href: "/team" },
                { label: member.name },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Portrait — omitted entirely when no photo has been supplied */}
            {hasPortrait && (
              <div className="md:col-span-4 lg:col-span-3">
                <div className="relative mx-auto md:mx-0 w-44 sm:w-52 md:w-full max-w-[260px]">
                  <div className="absolute -inset-3 bg-gold-primary/15 rounded-2xl blur-2xl" />
                  <div className="relative aspect-4/5 w-full rounded-2xl border border-gold-primary/30 bg-linear-to-b from-gold-primary/10 to-bg-alt-dark overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`${member.name} — ${member.title} at Judicium Arbitration`}
                      fill
                      sizes="(max-width: 768px) 208px, 260px"
                      priority
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Corner frames */}
                  <div className="absolute -top-1 -left-1 w-6 h-6 border-l-2 border-t-2 border-gold-primary/60 rounded-tl-lg" />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 border-r-2 border-b-2 border-gold-primary/60 rounded-br-lg" />
                </div>
              </div>
            )}

            {/* Identity */}
            <div
              className={
                hasPortrait
                  ? "md:col-span-8 lg:col-span-9"
                  : "md:col-span-12"
              }
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gold-primary/10 border border-gold-primary/30 rounded-full mb-4">
                <span className="text-gold-secondary text-[11px] font-semibold uppercase tracking-[0.18em]">
                  {member.role} · {member.yearsExperience}+ Years
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[1.05]">
                {member.name}
              </h1>

              <p className="mt-2 text-sm sm:text-base uppercase tracking-[0.18em] text-gold-secondary/85 font-semibold">
                {member.title}
              </p>

              <div className="mt-5 h-px bg-linear-to-r from-gold-primary/50 via-gold-primary/15 to-transparent" />

              <p className="advocate-headline mt-5 text-base sm:text-lg text-foreground/85 leading-relaxed max-w-3xl">
                {member.headline}
              </p>

              {/* Practice tags */}
              <ul className="mt-6 flex flex-wrap gap-2">
                {practices.map((practice) => (
                  <li key={practice.slug}>
                    <Link
                      href={`/practice-areas/${practice.slug}`}
                      className="inline-block px-3 py-1.5 rounded-lg border border-gold-primary/25 bg-gold-primary/5 text-xs sm:text-sm text-foreground/75 hover:border-gold-primary/60 hover:text-gold-primary transition-colors"
                    >
                      {practice.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Quick facts */}
              <dl className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-xl border border-gold-primary/15 bg-bg-alt-dark/60 px-4 py-3"
                  >
                    <dt className="text-[10px] uppercase tracking-[0.15em] text-foreground/45">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-gold-primary/90 leading-snug">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button href="/contact" size="sm">
                  Request a consultation
                </Button>
                <Button href={TEL_LINK} variant="outline" size="sm">
                  Call the office
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* About the Advocate                                                */}
      {/* ---------------------------------------------------------------- */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <ProfileHeading eyebrow="Professional Profile">
            About {member.name}
          </ProfileHeading>

          <div className="advocate-bio space-y-5 text-foreground/80 leading-relaxed text-base">
            <p>{member.bio}</p>
            <p>{member.experience}</p>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Areas of Practice — numbered, linked to the firm practice pages   */}
      {/* ---------------------------------------------------------------- */}
      <Section variant="gradient">
        <div className="max-w-5xl mx-auto">
          <ProfileHeading eyebrow="Areas of Practice">
            Where {member.name.split(" ")[0]} is instructed
          </ProfileHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {practices.map((practice, idx) => (
              <Link
                key={practice.slug}
                href={`/practice-areas/${practice.slug}`}
                className="group relative rounded-2xl border border-gold-primary/20 bg-bg-alt-dark/50 p-6 hover:border-gold-primary/50 transition-all duration-300"
              >
                <span className="block font-serif text-2xl font-bold text-gold-primary/35 mb-3 group-hover:text-gold-primary/60 transition-colors">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-semibold text-gold-primary mb-2 leading-snug">
                  {practice.title}
                </h3>
                <p className="text-sm text-foreground/65 leading-relaxed line-clamp-3">
                  {practice.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-secondary group-hover:gap-2.5 transition-all">
                  How we handle this
                  <svg
                    className="w-3.5 h-3.5"
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
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Skills & Expertise — the ten skills                               */}
      {/* ---------------------------------------------------------------- */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <ProfileHeading eyebrow="Skills & Expertise">
            Core competencies
          </ProfileHeading>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {member.specializations.map((skill, idx) => (
              <li
                key={skill}
                className="flex items-start gap-3 rounded-xl border border-gold-primary/15 bg-gold-primary/5 px-4 py-3.5 hover:border-gold-primary/40 transition-colors"
              >
                <span className="shrink-0 mt-0.5 font-serif text-xs font-bold text-gold-primary/50 tabular-nums">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-foreground/80 leading-snug">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Legal Advisory & Documentation  +  Courts & Tribunals             */}
      {/* ---------------------------------------------------------------- */}
      <Section variant="gradient">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Advisory */}
          <div>
            <ProfileHeading eyebrow="Non-Contentious Work">
              Legal Advisory & Documentation
            </ProfileHeading>

            <ul className="space-y-3">
              {member.advisoryServices.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 text-foreground/75 text-sm sm:text-base leading-relaxed"
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
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Courts */}
          <div>
            <ProfileHeading eyebrow="Appearances">
              Courts & Tribunals
            </ProfileHeading>

            <ul className="space-y-3">
              {member.courtsAndTribunals.map((court) => (
                <li
                  key={court}
                  className="flex items-start gap-3 rounded-xl border border-gold-primary/15 bg-bg-alt-dark/50 px-4 py-3.5"
                >
                  <svg
                    className="w-4 h-4 mt-0.5 shrink-0 text-gold-secondary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M10 2a1 1 0 01.894.553l1.382 2.764 3.05.443a1 1 0 01.555 1.705l-2.206 2.15.521 3.038a1 1 0 01-1.451 1.054L10 12.267l-2.745 1.44a1 1 0 01-1.45-1.054l.52-3.038-2.205-2.15a1 1 0 01.554-1.705l3.05-.443L9.106 2.553A1 1 0 0110 2z" />
                  </svg>
                  <span className="text-sm sm:text-base text-foreground/80 leading-snug">
                    {court}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Professional Experience — education + approach                    */}
      {/* ---------------------------------------------------------------- */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <ProfileHeading eyebrow="Professional Experience">
            Qualifications & approach
          </ProfileHeading>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Education */}
            <div className="lg:col-span-5">
              <h3 className="text-base font-semibold text-gold-secondary uppercase tracking-wider mb-5">
                Education
              </h3>

              <ol className="relative border-l border-gold-primary/25 pl-6 space-y-6">
                {member.education.map((edu) => (
                  <li key={edu} className="relative">
                    <span className="absolute -left-[1.84rem] top-1.5 w-2.5 h-2.5 rounded-full bg-gold-primary border-2 border-bg-dark" />
                    <span className="block text-sm sm:text-base text-foreground/80 leading-snug">
                      {edu}
                    </span>
                  </li>
                ))}
              </ol>

              <div className="mt-8 rounded-xl border border-gold-primary/20 bg-gold-primary/5 p-5">
                <span className="block text-3xl font-bold text-gold-primary">
                  {member.yearsExperience}+
                </span>
                <span className="mt-1 block text-xs uppercase tracking-wider text-foreground/55">
                  Years in practice · {member.jurisdiction}
                </span>
              </div>
            </div>

            {/* Approach */}
            <div className="lg:col-span-7">
              <h3 className="text-base font-semibold text-gold-secondary uppercase tracking-wider mb-5">
                Professional approach
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {professionalApproach.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-gold-primary/15 bg-bg-alt-dark/50 p-5"
                  >
                    <h4 className="text-sm font-bold text-gold-primary mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground/65 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Related advocates                                                 */}
      {/* ---------------------------------------------------------------- */}
      {related.length > 0 && (
        <Section variant="gradient">
          <div className="max-w-7xl mx-auto">
            <ProfileHeading eyebrow="The Team">
              Other advocates in these practice areas
            </ProfileHeading>

            <AdvocateGrid members={related} variant="compact" columns={3} />

            <div className="mt-10 text-center">
              <Button href="/team" variant="outline" size="sm">
                View all advocates
              </Button>
            </div>
          </div>
        </Section>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* Contact                                                           */}
      {/* ---------------------------------------------------------------- */}
      <Section variant="gold">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-gold-primary mb-4">
            Instruct {member.name}
          </h2>
          <p className="text-foreground/70 mb-8 leading-relaxed">
            Share the background to your dispute and we will arrange a
            consultation with {member.name.split(" ")[0]} or the colleague best
            placed to act on it.
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
