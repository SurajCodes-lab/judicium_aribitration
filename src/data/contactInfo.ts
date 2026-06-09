/**
 * Single source of truth for the firm's contact channels.
 *
 * Week 10: introduced so the new lead-capture surfaces (header click-to-call,
 * floating WhatsApp/Call widget, sticky mobile CTA bar) and the existing
 * footer/contact/schema references all read from one place — no drift if the
 * number or email ever changes.
 */

/** E.164 number, no spaces/punctuation — for tel: and wa.me links. */
export const PHONE_E164 = "+919899686394";

/** Human-readable number for display. */
export const PHONE_DISPLAY = "+91 98996 86394";

/** WhatsApp click-to-chat link (wa.me uses the number without the leading +). */
export const WHATSAPP_NUMBER = "919899686394";

/** Pre-filled WhatsApp message — primes the conversation for faster qualification. */
export const WHATSAPP_PREFILL =
  "Hello Judicium Arbitration, I would like to discuss a dispute and book a consultation.";

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_PREFILL
)}`;

export const EMAIL = "Judiciumarbitration@gmail.com";

export const TEL_LINK = `tel:${PHONE_E164}`;
export const MAILTO_LINK = `mailto:${EMAIL}`;

/** Business hours, displayed in CTAs and structured data. */
export const HOURS_DISPLAY = "Mon – Fri: 9:00 AM – 6:00 PM IST";
