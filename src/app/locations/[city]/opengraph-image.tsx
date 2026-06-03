import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/ogImage";
import { getCityBySlug, getAllCitySlugs } from "@/data/localBusinessSchemas";

export const alt = "Arbitration Lawyers — Judicium Arbitration";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

interface Props {
  params: Promise<{ city: string }>;
}

export default async function Image({ params }: Props) {
  const { city } = await params;
  const office = getCityBySlug(city);

  return renderOgImage({
    eyebrow: "Office",
    title: office
      ? `Arbitration Lawyers in ${office.city}`
      : "Our Locations",
    subtitle: office
      ? `${office.streetAddress} · ${office.region}`
      : "8 offices across North India",
  });
}
