import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import { LawIcons } from "@/components/Icons";
import { cityOffices } from "@/data/localBusinessSchemas";

const BASE_URL = "https://www.judiciumarbitration.com";

export const metadata: Metadata = {
  title: "Our Locations | Judicium Arbitration — 8 Offices Across North India",
  description:
    "Judicium Arbitration offices in New Delhi (HQ), Gurgaon, Noida, Chandigarh, Jaipur, Panipat, Prayagraj, and Lucknow. Address, hours, courts covered, and consultation booking for each city.",
  // Week 10: meta keywords removed — targeting handled in visible content.
  alternates: {
    canonical: `${BASE_URL}/locations`,
    languages: {
      "en-IN": `${BASE_URL}/locations`,
      "x-default": `${BASE_URL}/locations`,
    },
  },
  openGraph: {
    title: "Our Locations | Judicium Arbitration",
    description:
      "8 offices across North India — Delhi (HQ), Gurgaon, Noida, Chandigarh, Jaipur, Panipat, Prayagraj, Lucknow.",
    type: "website",
    locale: "en_IN",
    siteName: "Judicium Arbitration",
    url: `${BASE_URL}/locations`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Locations | Judicium Arbitration",
    description: "8 offices across North India serving arbitration & ADR.",
  },
};

const locationsCollectionPage = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${BASE_URL}/locations#collectionpage`,
  url: `${BASE_URL}/locations`,
  name: "Our Locations | Judicium Arbitration",
  description:
    "Judicium Arbitration offices across 8 North Indian cities — addresses, hours, and consultation booking for each.",
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  about: { "@type": "LegalService", "@id": `${BASE_URL}/#organization` },
};

const locationsItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${BASE_URL}/locations#itemlist`,
  name: "Judicium Arbitration — Office Locations",
  numberOfItems: cityOffices.length,
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  itemListElement: cityOffices.map((o, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: `Judicium Arbitration — ${o.city}`,
    url: `${BASE_URL}/locations/${o.slug}`,
    description: `${o.streetAddress}, ${o.city} ${o.postalCode}, ${o.region}`,
  })),
};

const locationsBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${BASE_URL}/locations#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Locations",
      item: `${BASE_URL}/locations`,
    },
  ],
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen pt-20 sm:pt-22 md:pt-24 bg-bg-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationsCollectionPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationsItemList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationsBreadcrumb) }}
      />

      {/* Hero */}
      <section className="relative py-14 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(240,194,70,0.15),transparent_60%)]" />
        </div>
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #F0C246 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <nav className="mb-8 text-sm">
            <ol className="flex items-center justify-center gap-2 text-foreground/60">
              <li>
                <Link href="/" className="hover:text-gold-primary transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gold-primary/50">/</li>
              <li className="text-gold-primary">Locations</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gold-primary/10 border border-gold-primary/30 rounded-full mb-6">
            <LawIcons.Location className="w-4 h-4 text-gold-primary" />
            <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
              Our Presence
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 text-gold-primary tracking-tight">
            Our Offices
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Eight offices across North India — serving arbitration, ADR and
            commercial dispute resolution from Delhi NCR to the Awadh region.
          </p>
        </div>
      </section>

      {/* Office grid */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {cityOffices.map((o) => (
              <Link
                key={o.slug}
                href={`/locations/${o.slug}`}
                className="group relative bg-bg-alt-dark rounded-2xl border border-gold-primary/20 hover:border-gold-primary/50 transition-all duration-500 p-6 sm:p-7 overflow-hidden block hover:-translate-y-1"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold-primary/10 rounded-full blur-3xl group-hover:w-40 group-hover:h-40 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-linear-to-br from-gold-primary to-gold-secondary rounded-xl flex items-center justify-center shadow-lg shadow-gold-primary/30">
                      <LawIcons.Landmark className="w-6 h-6 text-black" />
                    </div>
                    {o.isHeadquarters && (
                      <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-gold-primary bg-gold-primary/10 border border-gold-primary/30 rounded-full">
                        HQ
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-gold-primary transition-colors mb-1">
                    {o.city}
                  </h2>
                  <p className="text-xs uppercase tracking-widest text-gold-secondary/70 mb-3">
                    {o.region}
                  </p>
                  <p className="text-sm text-white/65 leading-relaxed mb-4">
                    {o.streetAddress} · {o.postalCode}
                  </p>
                  <div className="flex items-center gap-2 text-gold-primary">
                    <span className="text-sm font-semibold">View office</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
