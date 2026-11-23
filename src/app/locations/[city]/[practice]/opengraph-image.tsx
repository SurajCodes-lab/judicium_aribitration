import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/ogImage";
import { getCityBySlug } from "@/data/localBusinessSchemas";
import { getPracticeAreaBySlug } from "@/data/practiceAreas";
import { getAllCityPracticePairs } from "@/data/cityPracticeContent";

export const alt = "Judicium Arbitration — local practice-area counsel";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getAllCityPracticePairs();
}

interface Props {
  params: Promise<{ city: string; practice: string }>;
}

export default async function Image({ params }: Props) {
  const { city, practice } = await params;
  const office = getCityBySlug(city);
  const area = getPracticeAreaBySlug(practice);

  return renderOgImage({
    eyebrow: office ? `${office.city} · ${office.region}` : "Local Counsel",
    title:
      office && area
        ? `${area.shortTitle} Lawyers in ${office.city}`
        : "Local Legal Counsel",
    subtitle: area ? area.shortTitle : undefined,
  });
}
