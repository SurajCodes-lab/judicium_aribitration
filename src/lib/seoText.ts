/**
 * Shared helpers for search-facing text.
 *
 * W1-08: an audit of the built HTML found 76 of 140 pages emitting a meta
 * description longer than 160 characters — the longest was 251. Google renders
 * roughly 155–160, so more than half the site's descriptions were being
 * truncated mid-sentence in results, usually cutting off the call-to-action at
 * the end.
 */

/** What Google will realistically render before truncating. */
export const META_DESCRIPTION_LIMIT = 155;

/**
 * Trim a description to the limit without cutting a word in half.
 *
 * Prefers to end on a sentence boundary that falls within the limit, so the
 * result reads as finished prose rather than a severed clause. Falls back to the
 * last word boundary with an ellipsis. Text already within the limit is returned
 * untouched.
 */
export function clampDescription(
  text: string,
  limit: number = META_DESCRIPTION_LIMIT
): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= limit) return clean;

  const window = clean.slice(0, limit);

  // A sentence ending in the last third of the window reads as deliberate.
  const lastStop = Math.max(
    window.lastIndexOf(". "),
    window.lastIndexOf("! "),
    window.lastIndexOf("? ")
  );
  if (lastStop > limit * 0.6) {
    return clean.slice(0, lastStop + 1).trim();
  }

  const lastSpace = window.lastIndexOf(" ");
  const cut = lastSpace > 0 ? window.slice(0, lastSpace) : window;
  return `${cut.replace(/[,;:\-–—]$/, "").trim()}…`;
}

/**
 * Compose a description from parts, dropping trailing parts that do not fit.
 *
 * Used where a description is assembled as "lead sentence + angle + CTA": the
 * CTA is the first thing sacrificed when the angle runs long, rather than being
 * truncated into nonsense.
 */
export function composeDescription(
  parts: string[],
  limit: number = META_DESCRIPTION_LIMIT
): string {
  const cleaned = parts.map((x) => x.replace(/\s+/g, " ").trim()).filter(Boolean);
  if (cleaned.length === 0) return "";

  const kept: string[] = [];
  for (let i = 0; i < cleaned.length; i++) {
    const piece = cleaned[i];
    const candidate = [...kept, piece].join(" ");

    if (candidate.length <= limit) {
      kept.push(piece);
      continue;
    }

    // The piece does not fit whole. If it is substantive (not the trailing CTA)
    // and there is real room left, clamp it to fill the space rather than
    // dropping it — otherwise the description collapses to just the lead, which
    // is too thin to earn a click.
    const isLast = i === cleaned.length - 1;
    const used = kept.join(" ").length;
    const room = limit - used - 1;
    if (!isLast && room >= 60) {
      kept.push(clampDescription(piece, room));
    }
    break;
  }

  if (kept.length === 0) return clampDescription(cleaned[0], limit);
  return kept.join(" ");
}
