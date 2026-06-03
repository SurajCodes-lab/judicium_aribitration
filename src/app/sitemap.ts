import { MetadataRoute } from "next";
import { getAllPracticeAreaSlugs } from "@/data/practiceAreas";
import { cityOffices } from "@/data/localBusinessSchemas";
import { insightsData } from "@/data/insights";

const BASE_URL = "https://www.judiciumarbitration.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const practiceAreaSlugs = getAllPracticeAreaSlugs();
  const now = new Date();

  // Practice area pages — high commercial intent, monthly refresh, priority 0.8
  const practiceAreaPages: MetadataRoute.Sitemap = practiceAreaSlugs.map(
    (slug) => ({
      url: `${BASE_URL}/practice-areas/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: { "en-IN": `${BASE_URL}/practice-areas/${slug}` },
      },
    })
  );

  // City location pages — local pack ranking targets, monthly refresh, priority 0.85
  const cityLocationPages: MetadataRoute.Sitemap = cityOffices.map((office) => ({
    url: `${BASE_URL}/locations/${office.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: office.isHeadquarters ? 0.9 : 0.85,
    alternates: {
      languages: { "en-IN": `${BASE_URL}/locations/${office.slug}` },
    },
  }));

  // Insight articles — dated, authored content, priority 0.75
  const insightPages: MetadataRoute.Sitemap = insightsData.map((article) => ({
    url: `${BASE_URL}/insights/${article.slug}`,
    lastModified: new Date(article.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.75,
    alternates: {
      languages: { "en-IN": `${BASE_URL}/insights/${article.slug}` },
    },
  }));

  return [
    // Homepage — top priority, weekly refresh
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: { languages: { "en-IN": BASE_URL } },
    },
    // Practice areas listing — main service page
    {
      url: `${BASE_URL}/practice-areas`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: { languages: { "en-IN": `${BASE_URL}/practice-areas` } },
    },
    // Locations listing
    {
      url: `${BASE_URL}/locations`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { "en-IN": `${BASE_URL}/locations` } },
    },
    // Insights listing — blog index
    {
      url: `${BASE_URL}/insights`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: { "en-IN": `${BASE_URL}/insights` } },
    },
    // About — E-E-A-T page
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: { languages: { "en-IN": `${BASE_URL}/about` } },
    },
    // Contact — conversion target
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: { languages: { "en-IN": `${BASE_URL}/contact` } },
    },
    // City location detail pages (×8)
    ...cityLocationPages,
    // Insight article detail pages
    ...insightPages,
    // All practice area detail pages (×20)
    ...practiceAreaPages,
    // AI / answer-engine discovery files
    {
      url: `${BASE_URL}/llms.txt`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/llms-full.txt`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    // Legal pages
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/disclaimer`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
