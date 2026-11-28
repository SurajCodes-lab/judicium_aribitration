import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ServiceLine } from "@/data/serviceLines";
import { CityOffice } from "@/data/localBusinessSchemas";
import { CityAuthorities, authoritiesForService } from "@/data/cityAuthorities";
import { getServiceCityAngle } from "@/data/serviceCityAngles";
import { getNoticesForService } from "@/data/noticeTypes";
import { getSubServicesFor } from "@/data/subServices";
import { TEL_LINK, WHATSAPP_LINK } from "@/data/contactInfo";

const BASE_URL = "https://www.judiciumarbitration.com";

/**
 * Service x city page — rendered at /locations/[city]/[topic] when the topic
 * resolves to a service line rather than a practice area.
 *
 * The plan's requirement is that each of these names the authority with actual
 * jurisdiction in that city, and that is what the page is built around. The
 * local angle and the authority list come from cityAuthorities.ts and
 * serviceCityAngles.ts; without them this layer would be 48 copies of the
 * pillar page with a place name swapped, which ranks for nothing and reads as
 * spam to both a visitor and a reviewer.
 */

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

export default function ServiceCityView({
  service,
  office,
  authorities,
}: {
  service: ServiceLine;
  office: CityOffice;
  authorities: CityAuthorities;
}) {
  const pageUrl = `${BASE_URL}/locations/${office.slug}/${service.slug}`;
  const angle = getServiceCityAngle(office.slug, service.slug) ?? service.intro;
  const forums = authoritiesForService(service.slug, authorities);
  const notices = getNoticesForService(service.slug).slice(0, 6);
  const subs = getSubServicesFor(service.slug).slice(0, 6);
  const h1 = `${service.cityLabel} Lawyers in ${authorities.city}`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: `${service.title} — ${authorities.city}`,
      description: angle,
      url: pageUrl,
      serviceType: service.title,
      provider: {
        "@type": "LegalService",
        "@id": `${BASE_URL}/#organization`,
        name: "Judicium Arbitration",
        url: BASE_URL,
      },
      areaServed: {
        "@type": "City",
        name: authorities.city,
        containedInPlace: { "@type": "State", name: authorities.state },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${service.title} in ${authorities.city}`,
        itemListElement: service.whatWeDo.map((item) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: item },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: `Which authority handles ${service.shortTitle.toLowerCase()} matters in ${authorities.city}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: forums.map((f) => `${f.label}: ${f.value}.`).join(" "),
          },
        },
        ...service.faqs.slice(0, 3).map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      ],
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
          name: "Locations",
          item: `${BASE_URL}/locations`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: authorities.city,
          item: `${BASE_URL}/locations/${office.slug}`,
        },
        { "@type": "ListItem", position: 4, name: service.shortTitle, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: h1,
      inLanguage: "en-IN",
      isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".sc-angle"],
      },
    },
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
      <section className="relative py-12 sm:py-14 lg:py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_90%_at_30%_-20%,rgba(240,194,70,0.16),transparent_62%)]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Locations", href: "/locations" },
                { label: authorities.city, href: `/locations/${office.slug}` },
                { label: service.shortTitle },
              ]}
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gold-primary/10 border border-gold-primary/30 rounded-full mb-5">
            <span aria-hidden="true">{service.icon}</span>
            <span className="text-gold-secondary text-[11px] font-semibold uppercase tracking-[0.14em]">
              {authorities.city} · {authorities.state}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
            {service.cityLabel} Lawyers in {authorities.city}
          </h1>

          <p className="sc-angle text-base sm:text-lg text-foreground/80 leading-relaxed">
            {angle}
          </p>

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

      {/* The authorities with jurisdiction here */}
      {forums.length > 0 && (
        <Section>
          <div className="max-w-4xl mx-auto">
            <Heading eyebrow="Jurisdiction">
              Who decides these matters in {authorities.city}
            </Heading>
            <ul className="space-y-3">
              {forums.map((f) => (
                <li
                  key={f.label}
                  className="rounded-xl border border-gold-primary/15 bg-bg-alt-dark/50 px-5 py-4"
                >
                  <span className="block text-[10px] uppercase tracking-[0.15em] text-foreground/45 mb-1">
                    {f.label}
                  </span>
                  <span className="text-sm sm:text-base text-foreground/85 leading-snug">
                    {f.value}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-foreground/60 leading-relaxed">
              {authorities.economicNote}
            </p>
          </div>
        </Section>
      )}

      {/* Scope */}
      <Section variant="gradient">
        <div className="max-w-4xl mx-auto">
          <Heading eyebrow="Scope of work">
            What we handle for {authorities.city} clients
          </Heading>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {service.whatWeDo.map((item, idx) => (
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
      </Section>

      {/* Down into the notice and sub-service layers */}
      {(notices.length > 0 || subs.length > 0) && (
        <Section>
          <div className="max-w-5xl mx-auto">
            <Heading eyebrow="Go deeper">Specific matters</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {notices.map((n) => (
                <Link
                  key={n.slug}
                  href={`/services/${n.parentSlug}/${n.slug}`}
                  className="group rounded-xl border border-gold-primary/15 bg-bg-alt-dark/50 p-5 hover:border-gold-primary/45 transition-colors"
                >
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-secondary/70 mb-1.5">
                    {n.provision}
                  </span>
                  <h3 className="font-display text-base font-semibold text-gold-primary leading-snug group-hover:text-gold-light transition-colors">
                    {n.title}
                  </h3>
                </Link>
              ))}
              {subs.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.parentSlug}/${s.slug}`}
                  className="group rounded-xl border border-gold-primary/15 bg-bg-alt-dark/50 p-5 hover:border-gold-primary/45 transition-colors"
                >
                  <h3 className="font-display text-base font-semibold text-gold-primary leading-snug group-hover:text-gold-light transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs text-foreground/60 leading-relaxed line-clamp-2">
                    {s.intro}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Office + cross-links */}
      <Section variant="gradient">
        <div className="max-w-5xl mx-auto">
          <Heading eyebrow="Our office">{authorities.city}</Heading>
          <div className="rounded-xl border border-gold-primary/20 bg-gold-primary/5 p-5 sm:p-6 mb-8">
            <p className="text-sm text-foreground/80 leading-relaxed">
              {office.streetAddress}, {authorities.city} {office.postalCode}
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <Link
                href={`/locations/${office.slug}`}
                className="inline-block px-4 py-2 rounded-lg border border-gold-primary/25 bg-gold-primary/5 text-sm text-foreground/75 hover:border-gold-primary/60 hover:text-gold-primary transition-colors"
              >
                About the {authorities.city} office
              </Link>
              <Link
                href={`/services/${service.slug}`}
                className="inline-block px-4 py-2 rounded-lg border border-gold-primary/25 bg-gold-primary/5 text-sm text-foreground/75 hover:border-gold-primary/60 hover:text-gold-primary transition-colors"
              >
                {service.shortTitle} — full service
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="gold">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-gold-primary mb-4">
            Speak to us about your {authorities.city} matter
          </h2>
          <p className="text-foreground/70 mb-8 leading-relaxed">
            Send us what you have received and we will confirm which authority
            has jurisdiction, what the deadline is, and what the options are.
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
