import { MetadataRoute } from "next";
import { getAllPracticeAreaSlugs } from "@/data/practiceAreas";
import { cityOffices } from "@/data/localBusinessSchemas";
import { insightsData } from "@/data/insights";
import { getAllCityPracticePairs } from "@/data/cityPracticeContent";
import { getAllGlossarySlugs } from "@/data/glossary";
import { getAllTeamSlugs } from "@/data/teamMembers";
import { getAllServiceSlugs } from "@/data/serviceLines";
import { getAllNoticePairs } from "@/data/noticeTypes";
import { getAllFormatSlugs } from "@/data/formatTemplates";
import { getAllSubServicePairs } from "@/data/subServices";
import { getAllSupportPairs } from "@/data/practiceSupport";

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

  // City × practice landing pages — winnable long-tail local targets, priority 0.7
  const cityPracticePages: MetadataRoute.Sitemap = getAllCityPracticePairs().map(
    ({ city, practice }) => ({
      url: `${BASE_URL}/locations/${city}/${practice}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          "en-IN": `${BASE_URL}/locations/${city}/${practice}`,
        },
      },
    })
  );

  // Glossary term pages — per-term AEO/definition targets, priority 0.6
  const glossaryTermPages: MetadataRoute.Sitemap = getAllGlossarySlugs().map(
    (slug) => ({
      url: `${BASE_URL}/glossary/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: { "en-IN": `${BASE_URL}/glossary/${slug}` },
      },
    })
  );

  // Practice-area supporting pages — transactional depth beneath a practice area
  const supportPages: MetadataRoute.Sitemap = getAllSupportPairs().map(
    ({ slug, topic }) => ({
      url: `${BASE_URL}/practice-areas/${slug}/${topic}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: { "en-IN": `${BASE_URL}/practice-areas/${slug}/${topic}` },
      },
    })
  );

  // Sub-service pages — narrower, higher-intent terms beneath each pillar
  const subServicePages: MetadataRoute.Sitemap = getAllSubServicePairs().map(
    ({ slug, topic }) => ({
      url: `${BASE_URL}/services/${slug}/${topic}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: { "en-IN": `${BASE_URL}/services/${slug}/${topic}` },
      },
    })
  );

  // Format and template pages — fastest-ranking cluster, priority 0.85
  const formatPages: MetadataRoute.Sitemap = getAllFormatSlugs().map((slug) => ({
    url: `${BASE_URL}/formats/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
    alternates: { languages: { "en-IN": `${BASE_URL}/formats/${slug}` } },
  }));

  // Notice-type pages — fastest-ranking, highest-intent layer, priority 0.85
  const noticePages: MetadataRoute.Sitemap = getAllNoticePairs().map(
    ({ slug, notice }) => ({
      url: `${BASE_URL}/services/${slug}/${notice}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
      alternates: {
        languages: { "en-IN": `${BASE_URL}/services/${slug}/${notice}` },
      },
    })
  );

  // Service pillar pages — high commercial intent, priority 0.9
  const servicePages: MetadataRoute.Sitemap = getAllServiceSlugs().map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
    alternates: { languages: { "en-IN": `${BASE_URL}/services/${slug}` } },
  }));

  // Advocate profile pages — Person/E-E-A-T entities, priority 0.65
  const advocateProfilePages: MetadataRoute.Sitemap = getAllTeamSlugs().map(
    (slug) => ({
      url: `${BASE_URL}/team/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
      alternates: {
        languages: { "en-IN": `${BASE_URL}/team/${slug}` },
      },
    })
  );

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
    // Glossary — AEO/citation hub + internal-link authority page
    {
      url: `${BASE_URL}/glossary`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: { "en-IN": `${BASE_URL}/glossary` } },
    },
    // Formats hub — parent of the 16 format pages
    {
      url: `${BASE_URL}/formats`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: { "en-IN": `${BASE_URL}/formats` } },
    },
    // Services hub — parent of the service pillar pages
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: { languages: { "en-IN": `${BASE_URL}/services` } },
    },
    // Our Advocates hub — parent of the per-advocate Person pages
    {
      url: `${BASE_URL}/team`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { "en-IN": `${BASE_URL}/team` } },
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
    // City × practice landing pages (long-tail local)
    ...cityPracticePages,
    // Glossary term detail pages (per-term AEO)
    ...glossaryTermPages,
    // Advocate profile pages (E-E-A-T Person entities)
    ...advocateProfilePages,
    // Service pillar pages
    ...servicePages,
    // Notice-type pages beneath each pillar
    ...noticePages,
    // Format and template pages
    ...formatPages,
    // Sub-service pages beneath each pillar
    ...subServicePages,
    // Practice-area supporting pages
    ...supportPages,
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
