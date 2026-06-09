import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import { LawIcons } from "@/components/Icons";
import { insightsData } from "@/data/insights";

const BASE_URL = "https://www.judiciumarbitration.com";

export const metadata: Metadata = {
  title:
    "Insights | Judicium Arbitration — Indian Arbitration & ADR Analysis",
  description:
    "Long-form analysis on Indian arbitration and dispute resolution by Judicium Arbitration's senior counsel. Section 9 vs Section 17, NN Global stamping, foreign award enforcement, RERA, and more.",
  // Week 10: meta keywords removed — targeting handled in visible content.
  alternates: {
    canonical: `${BASE_URL}/insights`,
    languages: {
      "en-IN": `${BASE_URL}/insights`,
      "x-default": `${BASE_URL}/insights`,
    },
    types: {
      "application/rss+xml": `${BASE_URL}/insights/feed.xml`,
    },
  },
  openGraph: {
    title: "Insights | Judicium Arbitration",
    description:
      "Long-form analysis of Indian arbitration & ADR by Judicium Arbitration's senior counsel.",
    type: "website",
    locale: "en_IN",
    siteName: "Judicium Arbitration",
    url: `${BASE_URL}/insights`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights | Judicium Arbitration",
    description: "Long-form analysis of Indian arbitration & ADR.",
  },
};

const insightsCollectionPage = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${BASE_URL}/insights#collectionpage`,
  url: `${BASE_URL}/insights`,
  name: "Insights | Judicium Arbitration",
  description:
    "Long-form analysis on Indian arbitration and dispute resolution by Judicium Arbitration's senior counsel.",
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  about: { "@type": "LegalService", "@id": `${BASE_URL}/#organization` },
};

const insightsItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${BASE_URL}/insights#itemlist`,
  name: "Judicium Arbitration — Insights Articles",
  numberOfItems: insightsData.length,
  itemListOrder: "https://schema.org/ItemListOrderDescending",
  itemListElement: insightsData
    .slice()
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished))
    .map((article, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: article.title,
      url: `${BASE_URL}/insights/${article.slug}`,
      description: article.metaDescription,
    })),
};

const insightsBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${BASE_URL}/insights#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Insights",
      item: `${BASE_URL}/insights`,
    },
  ],
};

// Blog schema — flags the collection as a blog for AEO classification
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${BASE_URL}/insights#blog`,
  name: "Judicium Arbitration Insights",
  description:
    "Long-form analysis on Indian arbitration and dispute resolution.",
  url: `${BASE_URL}/insights`,
  inLanguage: "en-IN",
  publisher: {
    "@type": "LegalService",
    "@id": `${BASE_URL}/#organization`,
    name: "Judicium Arbitration",
  },
  blogPost: insightsData.map((a) => ({
    "@type": "BlogPosting",
    "@id": `${BASE_URL}/insights/${a.slug}#blogpost`,
    headline: a.title,
    url: `${BASE_URL}/insights/${a.slug}`,
    datePublished: a.datePublished,
    dateModified: a.dateModified,
    author: { "@type": "Person", name: a.authorName, jobTitle: a.authorTitle },
  })),
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function InsightsPage() {
  const sorted = insightsData
    .slice()
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished));

  return (
    <main className="min-h-screen pt-20 sm:pt-22 md:pt-24 bg-bg-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(insightsCollectionPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(insightsItemList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(insightsBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
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
              <li className="text-gold-primary">Insights</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gold-primary/10 border border-gold-primary/30 rounded-full mb-6">
            <LawIcons.Book className="w-4 h-4 text-gold-primary" />
            <span className="text-gold-secondary text-sm font-semibold uppercase tracking-wider">
              Analysis
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 text-gold-primary tracking-tight">
            Insights
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Long-form analysis on Indian arbitration, dispute resolution, and
            commercial law — written by Judicium Arbitration's senior counsel.
          </p>
        </div>
      </section>

      {/* Article grid */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {sorted.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="group relative bg-bg-alt-dark rounded-2xl border border-gold-primary/20 hover:border-gold-primary/50 transition-all duration-500 p-6 sm:p-8 overflow-hidden block hover:-translate-y-1"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold-primary/10 rounded-full blur-3xl group-hover:w-40 group-hover:h-40 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold-primary bg-gold-primary/10 border border-gold-primary/30 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-foreground/50">
                      {article.readingTime} min read
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-gold-primary transition-colors leading-tight mb-3">
                    {article.title}
                  </h2>
                  <p className="text-sm sm:text-base text-white/65 line-clamp-3 leading-relaxed mb-5">
                    {article.subtitle}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gold-primary/10">
                    <div className="text-xs text-foreground/60">
                      <div className="font-semibold text-foreground/85">
                        {article.authorName}
                      </div>
                      <div className="text-foreground/50">{article.authorTitle}</div>
                    </div>
                    <div className="text-xs text-foreground/50">
                      {formatDate(article.datePublished)}
                    </div>
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
