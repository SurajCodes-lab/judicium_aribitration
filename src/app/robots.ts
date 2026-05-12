import { MetadataRoute } from "next";

const BASE_URL = "https://www.judiciumarbitration.com";

/**
 * robots.txt — SEO + AEO + GEO optimised.
 *
 * Three crawler tiers:
 *  1. Traditional search (Googlebot / Bingbot / DuckDuckBot / YandexBot) — full allow.
 *  2. Answer / generative engines (ChatGPT, Perplexity, Claude, Gemini, Apple Intelligence,
 *     Bingbot AI, You.com, Phind, Meta-ExternalAgent, Bytespider) — full allow. These are
 *     visit-time crawlers that drive citation traffic from AI search products.
 *  3. Aggressive SEO scrapers (Ahrefs, Semrush, MJ12, Dot) — allow with crawl-delay so they
 *     don't blow up bandwidth.
 *
 * We do NOT block training-only crawlers (GPTBot, CCBot, Google-Extended). For a growth-stage
 * legal services site, the citation upside of being in LLM training data + retrieval corpora
 * outweighs the marginal IP concern — all content on this site is already public marketing
 * material designed to be discoverable.
 */
export default function robots(): MetadataRoute.Robots {
  const sharedDisallow = ["/api/", "/_next/", "/private/", "/admin/"];

  return {
    rules: [
      // -------- Tier 1: Default + traditional search --------
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          ...sharedDisallow,
          "/*.json$",
          "/*?*utm_*",
          "/*?*ref=*",
          "/*?*fbclid=*",
          "/*?*gclid=*",
        ],
      },
      { userAgent: "Googlebot", allow: "/", disallow: sharedDisallow },
      {
        userAgent: "Googlebot-Image",
        allow: ["/", "/_next/image"],
        disallow: ["/api/", "/private/", "/admin/"],
      },
      { userAgent: "Bingbot", allow: "/", disallow: sharedDisallow },
      { userAgent: "DuckDuckBot", allow: "/", disallow: sharedDisallow },
      {
        userAgent: "YandexBot",
        allow: "/",
        disallow: sharedDisallow,
        crawlDelay: 5,
      },

      // -------- Tier 2: Generative + Answer engines (GEO/AEO) --------
      // OpenAI — search-time agent for ChatGPT browsing & SearchGPT
      { userAgent: "OAI-SearchBot", allow: "/", disallow: sharedDisallow },
      // OpenAI — user-initiated browse (ChatGPT "browse with bing")
      { userAgent: "ChatGPT-User", allow: "/", disallow: sharedDisallow },
      // OpenAI — training corpus crawler (allow for inclusion in future model knowledge)
      { userAgent: "GPTBot", allow: "/", disallow: sharedDisallow },
      // Anthropic — Claude search-time fetch (citations in Claude.ai answers)
      { userAgent: "ClaudeBot", allow: "/", disallow: sharedDisallow },
      { userAgent: "Claude-Web", allow: "/", disallow: sharedDisallow },
      { userAgent: "anthropic-ai", allow: "/", disallow: sharedDisallow },
      { userAgent: "Claude-SearchBot", allow: "/", disallow: sharedDisallow },
      // Perplexity — search-time citation crawler (drives high-intent referral traffic)
      { userAgent: "PerplexityBot", allow: "/", disallow: sharedDisallow },
      { userAgent: "Perplexity-User", allow: "/", disallow: sharedDisallow },
      // Google Gemini — grounding fetcher for Gemini / AI Overviews
      { userAgent: "Google-Extended", allow: "/", disallow: sharedDisallow },
      { userAgent: "GoogleOther", allow: "/", disallow: sharedDisallow },
      // Apple Intelligence (iOS 18+ / macOS Sequoia AI features)
      { userAgent: "Applebot", allow: "/", disallow: sharedDisallow },
      { userAgent: "Applebot-Extended", allow: "/", disallow: sharedDisallow },
      // Meta AI (Llama-powered) — used by Meta AI assistant
      { userAgent: "Meta-ExternalAgent", allow: "/", disallow: sharedDisallow },
      { userAgent: "Meta-ExternalFetcher", allow: "/", disallow: sharedDisallow },
      // ByteDance / Doubao (large Asian user base for Indian diaspora visibility)
      { userAgent: "Bytespider", allow: "/", disallow: sharedDisallow },
      // Common Crawl — training data corpus used by every major LLM
      { userAgent: "CCBot", allow: "/", disallow: sharedDisallow },
      // Amazon Alexa / Bedrock fetcher
      { userAgent: "Amazonbot", allow: "/", disallow: sharedDisallow },
      // Diffbot — used by enterprise AI tools for entity extraction
      { userAgent: "Diffbot", allow: "/", disallow: sharedDisallow },
      // You.com / Phind — niche AI search engines
      { userAgent: "YouBot", allow: "/", disallow: sharedDisallow },
      { userAgent: "PhindBot", allow: "/", disallow: sharedDisallow },
      // Cohere — used by some enterprise RAG pipelines
      { userAgent: "cohere-ai", allow: "/", disallow: sharedDisallow },
      // Mistral — Le Chat web access
      { userAgent: "MistralAI-User", allow: "/", disallow: sharedDisallow },

      // -------- Tier 3: Aggressive SEO scrapers (rate-limited) --------
      {
        userAgent: ["AhrefsBot", "SemrushBot", "MJ12bot", "DotBot"],
        allow: "/",
        disallow: sharedDisallow,
        crawlDelay: 10,
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
