/**
 * Lightweight GA4 event helper.
 *
 * Why: the site's only goal that matters commercially is turning the handful of
 * daily visitors into phone calls / WhatsApp chats / form enquiries. Page views
 * alone don't tell us that. These helpers fire GA4 events on the real conversion
 * actions so they can be marked as Key Events (conversions) in GA4 and tracked
 * against traffic. See docs/SEO-PLAYBOOK.md → "Measurement plan".
 *
 * Safe on the server / before gtag loads: every call no-ops if window.gtag is
 * absent, so it can be imported into client components without guards.
 */

// gtag is injected by next/script in GoogleAnalytics.tsx
type GtagArgs = [string, string, Record<string, unknown>?];
declare global {
  interface Window {
    gtag?: (...args: GtagArgs) => void;
    dataLayer?: unknown[];
  }
}

/** Fire an arbitrary GA4 event. No-ops if analytics hasn't loaded. */
export function trackEvent(
  name: string,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

/**
 * Contact-channel click. `method` is phone | whatsapp | email; `location`
 * is where on the site it was clicked (footer, floating_widget, city_cta…).
 * Fires both a descriptive `contact_click` and the GA4-recommended
 * `generate_lead`, so either can be set as the Key Event.
 */
export function trackContact(
  method: "phone" | "whatsapp" | "email" | "form",
  location: string,
  extra: Record<string, unknown> = {}
): void {
  trackEvent("contact_click", { method, location, ...extra });
  trackEvent("generate_lead", { method, location, ...extra });
}
