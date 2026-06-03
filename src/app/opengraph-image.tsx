import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/ogImage";

export const alt =
  "Judicium Arbitration — Leading Arbitration & ADR Lawyers in North India";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

// Default social card — inherited by every route without its own opengraph-image.
export default function Image() {
  return renderOgImage({
    eyebrow: "Arbitration & ADR",
    title: "Leading Arbitration Lawyers in North India",
    subtitle: "20+ years · 500+ disputes resolved · 8 cities · 98% success rate",
  });
}
