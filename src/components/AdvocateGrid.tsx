import AdvocateCard from "@/components/AdvocateCard";
import { TeamMember } from "@/data/teamMembers";

/**
 * Renders a set of advocates as two rows of cards: those with a portrait first,
 * then those without.
 *
 * Two deliberate layout decisions:
 *
 *  1. **Separate rows, not one grid.** CSS grid stretches every card in a row to
 *     the height of the tallest, so a short text-only card sharing a row with a
 *     tall portrait card gets padded out with dead space. Splitting them lets the
 *     text cards render at their own much smaller height — and gives the
 *     "photos on top, the rest below" ordering the brief asked for.
 *
 *  2. **Flex-wrap with justify-center, not grid.** Only two advocates currently
 *     have portraits. In a 4-column grid those two would sit hard left with two
 *     empty columns beside them, which reads as a layout bug. Centring each row
 *     means a partial row sits balanced in the middle of the page while a full
 *     row still looks identical to a grid. The widths below reproduce the grid
 *     column maths exactly (gap-6 = 1.5rem, so an n-column card is
 *     `100/n% - (n-1)*1.5rem/n`).
 */

interface AdvocateGridProps {
  members: TeamMember[];
  /** Passed through to the cards — "compact" trims the practice line. */
  variant?: "default" | "compact";
  /** Max columns at the widest breakpoint. */
  columns?: 3 | 4;
}

export default function AdvocateGrid({
  members,
  variant = "default",
  columns = 4,
}: AdvocateGridProps) {
  const withPhoto = members.filter((m) => m.image);
  const withoutPhoto = members.filter((m) => !m.image);

  // Card widths matching a gap-6 (1.5rem) grid at each breakpoint.
  const itemWidth =
    columns === 3
      ? "w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
      : "w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]";

  const row = (group: TeamMember[]) => (
    <div className="flex flex-wrap justify-center gap-6 items-start">
      {group.map((member) => (
        <div key={member.slug} className={itemWidth}>
          <AdvocateCard member={member} variant={variant} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      {withPhoto.length > 0 && row(withPhoto)}
      {withoutPhoto.length > 0 && row(withoutPhoto)}
    </div>
  );
}
