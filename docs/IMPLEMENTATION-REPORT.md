# Implementation Report — SEO / AEO / GEO Build

_Generated 2026-06-09. Companion to `SEO-PLAYBOOK.md` (which explains the strategy).
This report is the exhaustive, line-item record of **everything changed on the site**._

---

## 0. Summary of impact

| Metric | Before | After | Delta |
|---|---:|---:|---:|
| Total prerendered routes (build output) | ~169 | **199** | +30 page groups |
| City × practice landing pages | 0 | **48** | +48 |
| Cornerstone insight articles | 7 | **14** | +7 |
| Glossary hub (terms) | 0 | **1 page / 30 terms** | +1 |
| New auto-generated OG images | — | +48 (city×practice) +7 (articles) | +55 |
| Files created | — | **8** | — |
| Files modified | — | **12** | — |
| Conversion events instrumented | 0 | **9 click/submit surfaces** | +9 |
| Build status | pass | **pass (199 pages)** | ✓ |

---

## 1. Files created (8)

| # | File | Purpose |
|---|---|---|
| 1 | `src/lib/analytics.ts` | GA4 event helper (`trackEvent`, `trackContact`) — fires `contact_click` + `generate_lead`. |
| 2 | `src/data/cityPracticeContent.ts` | Content layer for 48 city×practice pages: per-combo `metaAngle`, `localAngle`, 2 FAQs + helpers (`getCityPracticeEntry`, `getAllCityPracticePairs`, `getPracticesForCity`, `getCitiesForPractice`). |
| 3 | `src/app/locations/[city]/[practice]/page.tsx` | The programmatic city×practice landing page route (metadata + 5 schema types + composed content). |
| 4 | `src/app/locations/[city]/[practice]/opengraph-image.tsx` | Auto-generated 1200×630 OG image per city×practice page. |
| 5 | `src/data/glossary.ts` | 30 glossary terms + helpers (`getGlossaryByCategory`, `getGlossaryTermBySlug`, `GLOSSARY_CATEGORIES`). |
| 6 | `src/app/glossary/page.tsx` | The `/glossary` hub page with `DefinedTermSet` schema. |
| 7 | `docs/SEO-PLAYBOOK.md` | Strategy / what-why-how / off-page checklist / measurement plan. |
| 8 | `docs/IMPLEMENTATION-REPORT.md` | This exhaustive change log. |

## 2. Files modified (12)

| # | File | Change |
|---|---|---|
| 1 | `src/components/GoogleAnalytics.tsx` | GA ID hardcoded to the canonical `G-TNJTKYWZ83` (not env-driven, since Vercel env is unreliable here). Fixes the two-conflicting-IDs bug. |
| 2 | `src/app/layout.tsx` | `google-site-verification` meta tag now emitted only for a real token (ignores the `your-verification-code-here` placeholder). |
| 3 | `src/components/FloatingContact.tsx` | `trackContact` on all 6 contact anchors (desktop call/email/WhatsApp + mobile call/WhatsApp/email). |
| 4 | `src/components/ContactForm.tsx` | Fires `trackContact("form", "contact_form", {practice_area})` on submit. |
| 5 | `src/components/Footer.tsx` | `trackContact` on phone + 2 email links; added **Glossary** to quick links. |
| 6 | `src/components/Header.tsx` | Added **Glossary** to the main nav. |
| 7 | `src/app/sitemap.ts` | Added 48 city×practice URLs (priority 0.7) + `/glossary` (0.7). |
| 8 | `src/app/locations/[city]/page.tsx` | Featured practice section now links to city×practice pages; removed dead `latestInsights`/`insightsData`. |
| 9 | `src/app/practice-areas/[slug]/page.tsx` | New "`<Practice>` lawyers, city by city" section linking to city×practice pages. |
| 10 | `src/data/insights.ts` | `InsightSection` gained optional `table` (`InsightComparisonTable`); **+7 articles** appended. |
| 11 | `src/app/insights/[slug]/page.tsx` | Renders the optional comparison `<table>` after a section's paragraphs. |
| 12 | `public/llms.txt` | Added 7 new articles, glossary section, and city×practice section for AI crawlers. |

---

## 3. The 48 City × Practice landing pages

URL pattern: `/locations/{city}/{practice-slug}`. Each = unique local angle + 2 city
FAQs + composed services/courts/statutes + LegalService/Service/FAQPage/Breadcrumb/
Speakable schema + OG image.

**Delhi (6):** arbitration-alternative-dispute-resolution · dispute-resolution-litigation · insolvency-bankruptcy · banking-finance · corporate-commercial · real-estate-urban-development

**Gurgaon (6):** real-estate-urban-development · corporate-commercial · arbitration-alternative-dispute-resolution · technology-media-telecommunication · intellectual-property-rights · labour-employment

**Noida (6):** real-estate-urban-development · technology-media-telecommunication · data-privacy-cybersecurity · arbitration-alternative-dispute-resolution · insolvency-bankruptcy · corporate-commercial

**Chandigarh (6):** insolvency-bankruptcy · banking-finance · arbitration-alternative-dispute-resolution · corporate-commercial · real-estate-urban-development · dispute-resolution-litigation

**Jaipur (6):** arbitration-alternative-dispute-resolution · real-estate-urban-development · projects-infrastructure · corporate-commercial · insolvency-bankruptcy · banking-finance

**Panipat (6):** arbitration-alternative-dispute-resolution · corporate-commercial · banking-finance · labour-employment · dispute-resolution-litigation · real-estate-urban-development

**Prayagraj (6):** arbitration-alternative-dispute-resolution · dispute-resolution-litigation · insolvency-bankruptcy · real-estate-urban-development · banking-finance · corporate-commercial

**Lucknow (6):** real-estate-urban-development · arbitration-alternative-dispute-resolution · dispute-resolution-litigation · corporate-commercial · insolvency-bankruptcy · banking-finance

Each combination is grounded in that city's real jurisdiction — e.g. NCLT Chandigarh
for Gurgaon companies, UP RERA + Allahabad HC for Noida, UP REAT (Lucknow) for
statewide RERA appeals, MSMED §18 Facilitation Council for Panipat, Rajasthan
mining/solar economy + Jaipur Bench for Jaipur.

---

## 4. Insight articles (14 total)

**Pre-existing (7):** section-9-vs-section-17-arbitration-act · nn-global-stamping-arbitration-agreements · foreign-award-enforcement-india-new-york-convention · diac-vs-mcia-choosing-arbitral-institution-india · rera-arbitration-builder-buyer-disputes-india · emergency-arbitrator-india-amazon-future-retail · section-11-arbitrator-appointment-in-re-interplay

**New (7):**
| Slug | Topic | Note |
|---|---|---|
| `cost-of-arbitration-in-india` | Fourth Schedule fees, §31A cost allocation | |
| `how-to-enforce-arbitral-award-india` | §36 enforcement, no-auto-stay, Order XXI | |
| `section-34-challenge-arbitral-award` | Grounds, 3-month limit, patent illegality | |
| `seat-vs-venue-arbitration-india` | BALCO / BGS SGS SOMA | **comparison table** |
| `arbitration-clause-drafting-checklist-india` | Drafting checklist (§7, §10) | |
| `sarfaesi-vs-drt-vs-ibc-recovery-route` | Lender recovery routes | **4-column table** |
| `msme-delayed-payment-section-18-msmed-act` | §15/16/18/19 MSMED Act | stages table |

Each new article has: subtitle, ~150-char meta description, TL;DR, 6–7 sections,
4 FAQs, related statutes, 8–10 keywords, founder attribution. All auto-generate a
page, OG image, BlogPosting + FAQPage + Speakable + Breadcrumb schema, and surface on
matching practice pages via the existing category mapping.

---

## 5. Glossary — 30 terms (`/glossary`)

Marked up as `DefinedTermSet` + 30 `DefinedTerm` entities; grouped by category.

- **Arbitration (18):** Section 9, Section 11, Section 17, Section 34, Section 36, Seat of Arbitration, Venue of Arbitration, Arbitral Tribunal, Kompetenz-Kompetenz, Ad-hoc Arbitration, Institutional Arbitration, Emergency Arbitrator, New York Convention, Foreign Award, Interim Relief, Arbitration Agreement, DIAC, MCIA
- **Insolvency (6):** CIRP, Committee of Creditors, Resolution Professional, Moratorium (IBC), Operational Creditor, Financial Creditor
- **Banking & Recovery (3):** SARFAESI Act, Debt Recovery Tribunal (DRT), Section 18 MSMED Act
- **Real Estate (2):** RERA, Real Estate Appellate Tribunal
- **Litigation (1):** Commercial Courts Act

Each term: one-sentence definition + 2–3 sentence explanation + related statutes +
URL anchor (`/glossary#<slug>`).

---

## 6. Conversion tracking (9 instrumented surfaces)

All fire `contact_click` **and** `generate_lead` (GA4-recommended) with `method` + `location`:

| Surface | Method | `location` value |
|---|---|---|
| FloatingContact desktop call | phone | floating_widget |
| FloatingContact desktop email | email | floating_widget |
| FloatingContact desktop WhatsApp | whatsapp | floating_widget |
| FloatingContact mobile call | phone | mobile_bar |
| FloatingContact mobile WhatsApp | whatsapp | mobile_bar |
| FloatingContact mobile email | email | mobile_bar |
| Footer phone | phone | footer |
| Footer email (×2 links) | email | footer |
| Contact form submit | form | contact_form (+ practice_area) |

---

## 7. Structured data (schema) added

- **City×practice pages:** `LegalService`+`AttorneyService`, `Service` (with city-scoped OfferCatalog), `FAQPage` (city FAQs + 2 practice FAQs), `BreadcrumbList`, `WebPage`/`SpeakableSpecification`.
- **Glossary:** `DefinedTermSet` + 30 `DefinedTerm`, `BreadcrumbList`, `Speakable`.
- **New articles:** inherit existing `BlogPosting` + `FAQPage` + `Speakable` + `BreadcrumbList` (with `Person` author for E-E-A-T) automatically.
- **Comparison tables** rendered as semantic `<table>` (caption/thead/tbody) — AI-Overview-friendly.

---

## 8. Sitemap & discovery changes

- `sitemap.xml`: +48 city×practice URLs (priority 0.7, monthly) and `/glossary` (0.7).
  Total URLs now include homepage, 4 section indexes, 8 city pages, 48 city×practice,
  14 articles, 20 practice areas, glossary, llms files, 3 legal pages.
- `public/llms.txt`: added the 7 new articles, a Glossary section, and a City+practice
  section enumerating example local URLs for retrieval crawlers.

---

## 9. Bug fixes (live issues found & fixed)

1. **GA dual-ID** — component had `G-TNJTKYWZ83`, `.env.local` set `G-LD76V5XMWC` (ignored), splitting data. **Resolved:** the canonical `G-TNJTKYWZ83` is now hardcoded in the component (not env-driven, since Vercel env is unreliable here). **No action needed.**
2. **GSC placeholder meta tag** — `your-verification-code-here` rendered an invalid tag. Now suppressed unless a real token is set.
3. **Dead code** — removed unused `latestInsights`/`insightsData` in the city page.

---

## 10. Verification

- `npm run build` → **success, 199 prerendered routes**, all city×practice + glossary
  pages generated via `generateStaticParams`.
- Remaining `npm run lint` errors are **pre-existing** (`react/no-unescaped-entities`
  in `privacy-policy`, `terms-of-service`, `practice-areas/page.tsx`; an unused
  `motion` import in `Section.tsx`) and are unrelated to this work; the build
  tolerates them. None are in files created here.

---

## 11. Required actions to activate (you must do these)

These are detailed in `SEO-PLAYBOOK.md` §4–5. In short:
1. GA4 ID is hardcoded (`G-TNJTKYWZ83`) — nothing to configure. Just mark `generate_lead` a Key Event in GA4.
2. Verify Search Console (DNS), submit `sitemap.xml`, request indexing for new pages.
3. Create Google Business Profiles per city; build local citations and legal-domain backlinks.
4. Run the monthly GSC query-review loop to re-tune targets to real impression data.

Code makes the site rankable; the off-page work (step 2–3) is what lifts the ceiling.
