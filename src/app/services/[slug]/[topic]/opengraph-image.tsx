import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/ogImage";
import { getNoticeBySlug, getAllNoticePairs } from "@/data/noticeTypes";
import { getSubServiceBySlug, getAllSubServicePairs } from "@/data/subServices";

export const alt = "Judicium Arbitration";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return [
    ...getAllNoticePairs().map(({ slug, notice }) => ({ slug, topic: notice })),
    ...getAllSubServicePairs(),
  ];
}

interface Props {
  params: Promise<{ slug: string; topic: string }>;
}

export default async function Image({ params }: Props) {
  const { slug, topic } = await params;

  const sub = getSubServiceBySlug(slug, topic);
  if (sub) {
    return renderOgImage({
      eyebrow: sub.shortTitle,
      title: sub.h1,
      subtitle: sub.intro,
    });
  }

  const n = getNoticeBySlug(slug, topic);
  return renderOgImage({
    eyebrow: n ? n.provision : "Services",
    title: n ? n.h1 : "Legal Services",
    subtitle: n ? n.deadline : undefined,
  });
}
