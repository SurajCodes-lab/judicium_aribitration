/**
 * Single source of truth for the firm's contact channels.
 *
 * Week 10: introduced so the lead-capture surfaces (header click-to-call,
 * floating WhatsApp/Call widget, sticky mobile CTA bar) and the existing
 * footer/contact/schema references all read from one place — no drift if the
 * number ever changes.
 *
 * 2026-11-28: the firm moved to a new primary line. +91 98996 86318 is now the
 * number for calls, WhatsApp and every call-to-action on the site. The previous
 * number is retained as a secondary line so callers who have it, or who find it
 * in an older cached listing, still reach the firm.
 */

/* ------------------------------------------------------------------ primary */

/** E.164 number, no spaces or punctuation — for tel: and wa.me links. */
export const PHONE_E164 = "+919899686318";

/** Human-readable number for display. */
export const PHONE_DISPLAY = "+91 98996 86318";

/** Hyphenated form used in meta descriptions and structured data. */
export const PHONE_SCHEMA = "+91-9899686318";

/** WhatsApp click-to-chat number (wa.me omits the leading +). */
export const WHATSAPP_NUMBER = "919899686318";

/* ---------------------------------------------------------------- secondary */

/**
 * The firm's previous line, kept active. Shown alongside the primary on the
 * contact page and in the footer, and declared as a second contactPoint in the
 * organisation schema — so a search result or AI answer surfacing the old
 * number still routes the caller correctly.
 */
export const PHONE_SECONDARY_E164 = "+919899686394";
export const PHONE_SECONDARY_DISPLAY = "+91 98996 86394";
export const PHONE_SECONDARY_SCHEMA = "+91-9899686394";
export const TEL_LINK_SECONDARY = `tel:${PHONE_SECONDARY_E164}`;

/* -------------------------------------------------------------------- links */

/** Pre-filled WhatsApp message — primes the conversation for faster qualification. */
export const WHATSAPP_PREFILL =
  "Hello Judicium Arbitration, I would like to discuss a dispute and book a consultation.";

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_PREFILL
)}`;

export const EMAIL = "Judiciumarbitration@gmail.com";

export const TEL_LINK = `tel:${PHONE_E164}`;
export const MAILTO_LINK = `mailto:${EMAIL}`;

/** Both numbers, primary first — for contact blocks that list every line. */
export const PHONE_NUMBERS = [
  { label: "Primary", display: PHONE_DISPLAY, tel: TEL_LINK },
  {
    label: "Alternate",
    display: PHONE_SECONDARY_DISPLAY,
    tel: TEL_LINK_SECONDARY,
  },
] as const;

/** Business hours, displayed in CTAs and structured data. */
export const HOURS_DISPLAY = "Mon – Fri: 9:00 AM – 6:00 PM IST";
