import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/ogImage";
import { getFormatBySlug, getAllFormatSlugs } from "@/data/formatTemplates";

export const alt = "Judicium Arbitration — legal document format";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getAllFormatSlugs().map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const f = getFormatBySlug(slug);

  return renderOgImage({
    eyebrow: f ? f.documentType : "Formats",
    title: f ? f.h1 : "Legal Notice & Reply Formats",
    subtitle: f ? f.timeLimit : undefined,
  });
}
