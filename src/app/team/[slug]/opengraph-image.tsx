import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/ogImage";
import { getTeamMemberBySlug, getAllTeamSlugs } from "@/data/teamMembers";

export const alt = "Judicium Arbitration — advocate profile";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getAllTeamSlugs().map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);

  return renderOgImage({
    eyebrow: member
      ? `${member.title} · ${member.yearsExperience}+ Years`
      : "Our Advocates",
    title: member ? member.name : "Our Advocates",
    subtitle: member ? member.headline : undefined,
  });
}
