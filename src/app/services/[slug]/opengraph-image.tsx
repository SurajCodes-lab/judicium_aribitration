import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/ogImage";
import { getServiceLineBySlug, getAllServiceSlugs } from "@/data/serviceLines";

export const alt = "Judicium Arbitration — legal service";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const service = getServiceLineBySlug(slug);

  return renderOgImage({
    eyebrow: service ? service.shortTitle : "Services",
    title: service ? service.h1 : "Legal Services",
    subtitle: service ? service.urgency : undefined,
  });
}
