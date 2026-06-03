import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/ogImage";
import {
  getPracticeAreaBySlug,
  getAllPracticeAreaSlugs,
} from "@/data/practiceAreas";

export const alt = "Practice Area — Judicium Arbitration";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getAllPracticeAreaSlugs().map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const area = getPracticeAreaBySlug(slug);

  return renderOgImage({
    eyebrow: "Practice Area",
    title: area ? area.title : "Practice Areas",
    subtitle: "Expert legal services across North India",
  });
}
