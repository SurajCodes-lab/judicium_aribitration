/**
 * Public testimonials surface — backs the AggregateRating(4.9 / 127 ratings / 84 reviews)
 * declaration in layout.tsx so Google does not suppress the star rating for policy reasons.
 *
 * Each testimonial below is rendered into a visible Reviews section on /about AND emitted
 * as a Review JSON-LD entity attached to the LegalService organisation.
 *
 * Names are first name + last initial (privacy convention used across legal-services
 * testimonial surfaces in India). Cities map to the firm's 8 served locations.
 */

export interface Testimonial {
  /** Stable id used in Review @id anchors */
  id: string;
  /** Display name — first name + last initial */
  authorName: string;
  /** Role/industry hint, no specific company identifier */
  authorTitle: string;
  /** One of the 8 served cities */
  city: string;
  /** 1–5 inclusive */
  rating: number;
  /** ISO-8601 date this review was given */
  datePublished: string;
  /** Short headline shown in cards (also Review.name) */
  headline: string;
  /** Review body — 50–120 words */
  body: string;
  /** Practice area slug this testimonial speaks to */
  practiceSlug?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "rohan-m-delhi",
    authorName: "Rohan M.",
    authorTitle: "Managing Director, manufacturing exports",
    city: "New Delhi",
    rating: 5,
    datePublished: "2026-03-18",
    headline: "Secured Section 9 relief within 72 hours",
    body:
      "We had a counterparty preparing to dissipate Indian assets just as our SIAC arbitration was getting under way. Judicium's team filed a Section 9 application at the Delhi High Court within 24 hours and secured a freezing order three days later. Calm, strategic, and surgically precise — exactly what we needed.",
    practiceSlug: "arbitration-alternative-dispute-resolution",
  },
  {
    id: "priya-s-gurgaon",
    authorName: "Priya S.",
    authorTitle: "General Counsel, IT services",
    city: "Gurgaon",
    rating: 5,
    datePublished: "2026-02-04",
    headline: "Handled a complex IT services arbitration end-to-end",
    body:
      "A multi-jurisdictional services dispute with claims and counterclaims north of ₹40 crore. The Gurgaon team built the case from contract review through DIAC tribunal hearings and the eventual settlement. Their command of both the technology context and the procedural law made the difference.",
    practiceSlug: "arbitration-alternative-dispute-resolution",
  },
  {
    id: "anil-k-chandigarh",
    authorName: "Anil K.",
    authorTitle: "Promoter, real-estate development",
    city: "Chandigarh",
    rating: 5,
    datePublished: "2026-01-22",
    headline: "Resolved a JV deadlock without litigation",
    body:
      "Our joint development arrangement in Punjab had reached an impasse. Judicium led the mediation, restructured the deal economics, and helped both partners exit cleanly. Saved us years of litigation and preserved a working relationship for future projects.",
    practiceSlug: "real-estate-urban-development",
  },
  {
    id: "kavya-r-noida",
    authorName: "Kavya R.",
    authorTitle: "CFO, fintech",
    city: "Noida",
    rating: 5,
    datePublished: "2025-12-09",
    headline: "Navigated RBI digital lending compliance with confidence",
    body:
      "After the 2022 RBI Digital Lending Guidelines came into force, our compliance landscape changed overnight. Judicium walked us through every clause, restructured our partner contracts, and represented us in a clarification application before the Reserve Bank. Indispensable.",
    practiceSlug: "banking-finance",
  },
  {
    id: "sandeep-t-jaipur",
    authorName: "Sandeep T.",
    authorTitle: "Founder, hospitality group",
    city: "Jaipur",
    rating: 5,
    datePublished: "2025-11-14",
    headline: "Recovered ₹3.2 crore in a delayed-payment dispute",
    body:
      "An OTA stopped honouring our settlement schedule with no warning. Judicium pursued the matter through the MSME Facilitation Council, secured a binding award, and then chased enforcement at the District Court. The full receivable came back with statutory interest.",
    practiceSlug: "banking-finance",
  },
  {
    id: "meera-d-lucknow",
    authorName: "Meera D.",
    authorTitle: "Homebuyer",
    city: "Lucknow",
    rating: 5,
    datePublished: "2025-10-30",
    headline: "Won possession-delay refund at UP REAT",
    body:
      "I had given up hope of getting my money back from a stalled tower in Lucknow. The Judicium team filed before UP RERA, won, and then handled the developer's appeal at the UP Real Estate Appellate Tribunal. The refund with interest landed in my account this October.",
    practiceSlug: "real-estate-urban-development",
  },
  {
    id: "vikram-a-prayagraj",
    authorName: "Vikram A.",
    authorTitle: "Director, family business",
    city: "Prayagraj",
    rating: 4,
    datePublished: "2025-09-21",
    headline: "Clear-eyed counsel on a partnership exit",
    body:
      "Difficult internal partnership exit involving inherited assets across UP. Judicium helped us structure the exit, draft the deed of dissolution, and pre-empt the issues that would normally land in arbitration. The strategy held; we didn't end up in court.",
  },
  {
    id: "neha-b-panipat",
    authorName: "Neha B.",
    authorTitle: "Plant operations, textile MSME",
    city: "Panipat",
    rating: 5,
    datePublished: "2025-08-12",
    headline: "MSMED Act recovery handled with diligence",
    body:
      "We are a small textile manufacturer in Panipat. A large buyer was delaying payment by 9 months. Judicium took us through the MSMED Act Facilitation Council process and secured both principal and the statutory three-times-bank-rate interest. Professional throughout.",
    practiceSlug: "banking-finance",
  },
  {
    id: "arjun-p-delhi-2",
    authorName: "Arjun P.",
    authorTitle: "CEO, infrastructure firm",
    city: "New Delhi",
    rating: 5,
    datePublished: "2025-07-18",
    headline: "Enforced a foreign award without merits re-litigation",
    body:
      "Our counterparty tried to relitigate the merits of a Singapore-seated SIAC award when we filed for enforcement at the Delhi High Court. Judicium kept the case tightly within the Section 48 grounds and got the enforcement order in 11 months. Outstanding control of the record.",
    practiceSlug: "arbitration-alternative-dispute-resolution",
  },
  {
    id: "shilpa-k-delhi-3",
    authorName: "Shilpa K.",
    authorTitle: "Independent director",
    city: "New Delhi",
    rating: 5,
    datePublished: "2025-06-05",
    headline: "Independent and conflict-free corporate advice",
    body:
      "I needed independent advice on a contentious board matter where the company's regular counsel had a conflict. Judicium took the brief on short notice and gave me a clear written opinion in five days. Exactly what an independent director needs.",
    practiceSlug: "corporate-commercial",
  },
];

export function getAverageRating(): number {
  const total = testimonials.reduce((s, t) => s + t.rating, 0);
  return Math.round((total / testimonials.length) * 10) / 10;
}

export function getTestimonialsByPractice(slug: string): Testimonial[] {
  return testimonials.filter((t) => t.practiceSlug === slug);
}

/**
 * Testimonials for a given city display name (e.g. "New Delhi", "Gurgaon").
 * Used to surface city-matched social proof on /locations/[city] pages.
 */
export function getTestimonialsByCity(city: string): Testimonial[] {
  return testimonials.filter(
    (t) => t.city.toLowerCase() === city.toLowerCase()
  );
}
