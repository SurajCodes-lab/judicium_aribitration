import { MetadataRoute } from "next";
import { getAllPracticeAreaSlugs } from "@/data/practiceAreas";

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
        languages: {
          "en-IN": `${BASE_URL}/practice-areas/${slug}`,
        },
      },
    })
  );

  return [
    // Homepage — top priority, weekly refresh
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          "en-IN": BASE_URL,
        },
      },
    },
    // Practice areas listing — main service page
    {
      url: `${BASE_URL}/practice-areas`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: {
        languages: {
          "en-IN": `${BASE_URL}/practice-areas`,
        },
      },
    },
    // About — E-E-A-T page
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: {
        languages: {
          "en-IN": `${BASE_URL}/about`,
        },
      },
    },
    // Contact — conversion target
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: {
        languages: {
          "en-IN": `${BASE_URL}/contact`,
        },
      },
    },
    // All practice area detail pages
    ...practiceAreaPages,
    // AI / answer-engine discovery files — surface llms.txt to crawlers via sitemap
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
    // Legal pages — yearly refresh, lower priority but still indexable
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
