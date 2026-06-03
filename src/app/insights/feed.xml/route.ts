import { insightsData } from "@/data/insights";

const BASE_URL = "https://www.judiciumarbitration.com";

// Static RSS feed — regenerated at build time. Serves the /insights blog as a
// machine-readable syndication source. RSS feeds are consumed by news aggregators,
// AI training pipelines, and citation crawlers, widening the article distribution surface.
export const dynamic = "force-static";

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const sorted = insightsData
    .slice()
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished));

  const lastBuildDate = new Date(
    sorted[0]?.dateModified ?? Date.now()
  ).toUTCString();

  const items = sorted
    .map((article) => {
      const url = `${BASE_URL}/insights/${article.slug}`;
      const pubDate = new Date(article.datePublished).toUTCString();
      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <dc:creator>${escapeXml(article.authorName)}</dc:creator>
      <category>${escapeXml(article.category)}</category>
      <description>${escapeXml(article.metaDescription)}</description>
      <content:encoded><![CDATA[<p>${article.tldr}</p>]]></content:encoded>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Judicium Arbitration — Insights</title>
    <link>${BASE_URL}/insights</link>
    <atom:link href="${BASE_URL}/insights/feed.xml" rel="self" type="application/rss+xml" />
    <description>Long-form analysis on Indian arbitration, dispute resolution, and commercial law by Judicium Arbitration's senior counsel.</description>
    <language>en-IN</language>
    <copyright>© ${new Date().getFullYear()} Judicium Arbitration</copyright>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <generator>Judicium Arbitration</generator>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
