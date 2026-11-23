import Link from "next/link";
import Image from "next/image";
import { TeamMember } from "@/data/teamMembers";
import { getPracticeAreaBySlug } from "@/data/practiceAreas";

/**
 * Advocate profile card — the shared unit used by the /team hub, the /about team
 * section and the related-advocates strip on a profile page.
 *
 * Every card is a single link to /team/[slug]. Previously the team only existed
 * as static blocks inside /about, so each advocate had no URL of their own for
 * Google or an answer engine to cite.
 *
 * Styling notes — what makes this read as a law firm rather than a directory:
 *  - Names are set in Playfair Display (`font-display`). The face was already
 *    loaded in layout.tsx but had no Tailwind token, so the site had been
 *    rendering everything in Inter.
 *  - On a portrait card the name sits ON the photograph over a gradient scrim,
 *    the way firm and chambers sites set them, rather than stacked underneath.
 *  - Practice areas render as one quiet middot-separated line instead of a row
 *    of boxy chips. Same keywords for the crawler, far less visual noise.
 *  - Borders are gold hairlines at low opacity; the hover state is a small lift
 *    plus a warm edge, not a colour change.
 *
 * Two shapes, picked automatically from whether a portrait exists:
 *  - **With a portrait** — 3:4 image, name over the scrim.
 *  - **Without one** — no image area at all (no placeholder, no initials block)
 *    and a deliberately SHORT nameplate card. It must not stretch to match a
 *    portrait card, which is why AdvocateGrid renders the groups in separate
 *    grids.
 */

interface AdvocateCardProps {
  member: TeamMember;
  /** Compact trims the practice line — used in related-advocate strips. */
  variant?: "default" | "compact";
}

/** Shared bottom row: office base + the affordance to open the profile. */
function CardFooter({ officeBase }: { officeBase: string }) {
  return (
    <div className="mt-5 pt-4 flex items-center justify-between gap-3 border-t border-gold-primary/10">
      <span className="text-[11px] tracking-wide text-foreground/40 truncate">
        {officeBase}
      </span>
      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-secondary/90 group-hover:text-gold-primary transition-colors">
        Profile
        <svg
          className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </div>
  );
}

export default function AdvocateCard({
  member,
  variant = "default",
}: AdvocateCardProps) {
  const compact = variant === "compact";
  const hasPortrait = Boolean(member.image);

  // One quiet line of practice areas — keyword-bearing without the chip clutter.
  const practiceLine = member.practiceAreaSlugs
    .map((slug) => getPracticeAreaBySlug(slug)?.shortTitle)
    .filter(Boolean)
    .slice(0, compact ? 2 : 3)
    .join(" · ");

  const shell =
    "group relative flex flex-col bg-bg-alt-dark/70 rounded-xl border border-gold-primary/12 overflow-hidden transition-all duration-500 hover:border-gold-primary/45 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary";

  if (hasPortrait) {
    return (
      <Link href={`/team/${member.slug}`} className={shell}>
        {/* Portrait with the name set over a scrim */}
        <div className="relative w-full aspect-3/4 overflow-hidden">
          <Image
            src={member.image}
            alt={`${member.name} — ${member.title} at Judicium Arbitration`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            loading="lazy"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          />

          {/* Scrim — dark enough at the base to carry the name legibly */}
          <div className="absolute inset-0 bg-linear-to-t from-bg-dark via-bg-dark/55 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-bg-dark/95 via-transparent to-transparent" />

          {/* Thin gold hairline at the base of the image */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold-primary/50 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-5">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-primary/90 mb-1.5">
              {member.yearsExperience} Years
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-white leading-tight tracking-tight">
              {member.name}
            </h3>
            <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-gold-secondary/85">
              {member.title}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="relative flex flex-col p-5 sm:p-6">
          <p className="text-[13px] text-foreground/65 leading-relaxed line-clamp-3">
            {member.headline}
          </p>

          {practiceLine && (
            <p className="mt-4 text-[11px] leading-relaxed text-gold-secondary/65">
              {practiceLine}
            </p>
          )}

          <CardFooter officeBase={member.officeBase} />
        </div>
      </Link>
    );
  }

  /* No portrait — a nameplate, not a placeholder */
  return (
    <Link href={`/team/${member.slug}`} className={shell}>
      {/* Left gold edge reads as a bound page rather than a missing image */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 w-[2px] bg-linear-to-b from-gold-primary via-gold-primary/40 to-transparent"
      />
      {/* Warm corner wash */}
      <span
        aria-hidden="true"
        className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-gold-primary/8 blur-3xl transition-opacity duration-500 opacity-60 group-hover:opacity-100"
      />

      <div className="relative flex flex-col p-5 sm:p-6">
        <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-primary/80 mb-2">
          {member.yearsExperience} Years
        </span>

        <h3 className="font-display text-xl sm:text-2xl font-semibold text-white leading-tight tracking-tight group-hover:text-gold-light transition-colors">
          {member.name}
        </h3>

        <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-gold-secondary/85">
          {member.title}
        </p>

        {/* Short rule, not a full-width divider — quieter */}
        <span className="mt-4 block h-px w-10 bg-gold-primary/60" />

        <p className="mt-4 text-[13px] text-foreground/65 leading-relaxed line-clamp-2">
          {member.headline}
        </p>

        {practiceLine && (
          <p className="mt-4 text-[11px] leading-relaxed text-gold-secondary/65">
            {practiceLine}
          </p>
        )}

        <CardFooter officeBase={member.officeBase} />
      </div>
    </Link>
  );
}
