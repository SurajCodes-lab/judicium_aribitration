import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/ogImage";
import { getSupportBySlug, getAllSupportPairs } from "@/data/practiceSupport";

export const alt = "Judicium Arbitration";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getAllSupportPairs();
}

interface Props {
  params: Promise<{ slug: string; topic: string }>;
}

export default async function Image({ params }: Props) {
  const { slug, topic } = await params;
  const s = getSupportBySlug(slug, topic);

  return renderOgImage({
    eyebrow: s ? s.provision : "Practice Areas",
    title: s ? s.h1 : "Practice Areas",
    subtitle: s ? s.intro : undefined,
  });
}
