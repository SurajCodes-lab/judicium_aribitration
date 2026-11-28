import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/ogImage";
import { getCityBySlug } from "@/data/localBusinessSchemas";
import { getPracticeAreaBySlug } from "@/data/practiceAreas";
import { getAllCityPracticePairs } from "@/data/cityPracticeContent";
import { getServiceLineBySlug, getAllServiceSlugs } from "@/data/serviceLines";
import { getAllAuthorityCitySlugs } from "@/data/cityAuthorities";

export const alt = "Judicium Arbitration — local counsel";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  // Both page types share this segment.
  return [
    ...getAllCityPracticePairs().map(({ city, practice }) => ({
      city,
      topic: practice,
    })),
    ...getAllAuthorityCitySlugs().flatMap((city) =>
      getAllServiceSlugs().map((topic) => ({ city, topic }))
    ),
  ];
}

interface Props {
  params: Promise<{ city: string; topic: string }>;
}

export default async function Image({ params }: Props) {
  const { city, topic } = await params;
  const office = getCityBySlug(city);

  const service = getServiceLineBySlug(topic);
  if (office && service) {
    return renderOgImage({
      eyebrow: `${office.city} · ${office.region}`,
      title: `${service.shortTitle} Lawyers in ${office.city}`,
      subtitle: service.urgency,
    });
  }

  const area = getPracticeAreaBySlug(topic);
  return renderOgImage({
    eyebrow: office ? `${office.city} · ${office.region}` : "Locations",
    title:
      office && area
        ? `${area.seoShortTitle} Lawyers in ${office.city}`
        : "Judicium Arbitration",
    subtitle: area ? area.description : undefined,
  });
}
