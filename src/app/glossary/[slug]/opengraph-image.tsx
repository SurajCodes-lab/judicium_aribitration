import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/ogImage";
import { getGlossaryTermBySlug, getAllGlossarySlugs } from "@/data/glossary";

export const alt = "Judicium Arbitration — legal glossary definition";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getAllGlossarySlugs().map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const term = getGlossaryTermBySlug(slug);

  return renderOgImage({
    eyebrow: term ? `${term.category} · Glossary` : "Glossary",
    title: term ? `What is ${term.term}?` : "Legal Glossary",
    subtitle: term ? term.shortDefinition : undefined,
  });
}
