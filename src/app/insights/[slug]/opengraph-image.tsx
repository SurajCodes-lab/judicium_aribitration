import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/ogImage";
import { getInsightBySlug, getAllInsightSlugs } from "@/data/insights";

export const alt = "Insight — Judicium Arbitration";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getAllInsightSlugs().map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  return renderOgImage({
    eyebrow: article ? article.category : "Insight",
    title: article ? article.title : "Insights",
    subtitle: article ? `By ${article.authorName}` : "Indian arbitration analysis",
  });
}
