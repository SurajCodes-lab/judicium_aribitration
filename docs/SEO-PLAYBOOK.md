# Judicium Arbitration — SEO / AEO / GEO Playbook

_Last updated: 2026-06-09_

This document explains the SEO / AEO / GEO work done on the site: **what** was
implemented, **why** it helps, and **how** it works — plus the off-page actions
the code cannot do, and how to measure results. Read the "Diagnosis" first; it
reframes the problem.

- **SEO** = Search Engine Optimisation (ranking in Google/Bing).
- **AEO** = Answer Engine Optimisation (being the source an AI answer quotes).
- **GEO** = Generative Engine Optimisation (being cited by ChatGPT, Perplexity,
  Gemini, etc.). In practice AEO and GEO overlap heavily.

---

## 1. Diagnosis — why only 4–5 keywords were showing

The site is **not under-optimised. It is under-discovered.** Before this work it
already had: 20 content-rich practice areas, 8 deep local city pages, 7 cornerstone
articles, full structured data (Organization, per-city LocalBusiness, Service,
Article, FAQ, HowTo, Speakable, Breadcrumb, Review), server-side rendering, clean
`robots.txt` / `sitemap.xml` / `llms.txt`, canonical tags and www redirects. The
on-page metadata was already strong.

So why do only ~4–5 keywords appear in Search Console with ~3–4 visitors/day? This
is the **classic signature of a new, low-authority domain targeting hyper-competitive
head terms.** Three things were happening:

1. **Domain authority / age.** Google ranks established domains (Cyril Amarchand,
   AZB, Trilegal, etc.) far above a young site for terms like "arbitration lawyers
   Delhi". A new site simply cannot win those head terms for months, no matter how
   good the page is. The handful of keywords that *do* show are almost certainly
   brand / ultra-long-tail terms.
2. **Targeting the wrong (unwinnable) keywords.** The pages were aimed at national
   head terms. The winnable opportunity is **local long-tail** ("arbitration lawyer
   in Gurgaon", "RERA lawyer Noida", "MSME payment recovery Panipat") and
   **question-shaped queries** ("how to enforce an arbitral award in India").
3. **Too few indexable, internally-linked, genuinely-distinct pages.** More quality
   pages = more queries you can match = more impressions = more of the site
   "reflecting" in Search Console.

Plus two **measurement bugs** that meant traffic/conversions couldn't even be
tracked reliably (see §2, Phase 0).

**The strategy:** (a) fix measurement, (b) multiply winnable long-tail pages from
content we already own, (c) become the easiest source for AI answer engines to
cite, and (d) do the off-page work (§4) that actually lifts domain authority.

---

## 2. What was implemented (what / why / how)

### Phase 0 — Measurement & indexing foundations

**0.1 — Single Google Analytics ID (hardcoded)**
- **What:** `src/components/GoogleAnalytics.tsx` uses a single hardcoded GA4 ID,
  `const GA_MEASUREMENT_ID = "G-TNJTKYWZ83"`.
- **Why:** there were **two** conflicting IDs — the component had `G-TNJTKYWZ83`
  (the property actually collecting data) while `.env.local` set `G-LD76V5XMWC`
  (ignored). Data was split. `G-TNJTKYWZ83` is confirmed as the canonical property.
  It is **hardcoded, not env-driven**, because Vercel environment variables are not
  reliably available for this project — hardcoding guarantees analytics fire on
  every deploy.
- **How / action required:** **none** — it works on deploy. (The unused
  `NEXT_PUBLIC_GA_MEASUREMENT_ID` line in `.env.local` is no longer referenced.)

**0.2 — Google Search Console verification guard**
- **What:** `src/app/layout.tsx` now emits the `google-site-verification` meta tag
  **only** when a real token is present (it ignores the literal placeholder
  `your-verification-code-here`).
- **Why:** the repo shipped a placeholder that rendered an invalid verification tag.
- **How / action required:** if you verify via the HTML-tag method, put the real
  token in Vercel as `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`. If you verify by DNS
  (recommended), leave it unset — the tag is correctly omitted.

**0.3 — Conversion event tracking**
- **What:** new `src/lib/analytics.ts` (`trackEvent`, `trackContact`). Phone,
  WhatsApp, and email clicks in `FloatingContact.tsx` and `Footer.tsx`, and the
  `ContactForm.tsx` submit, now fire GA4 `contact_click` + `generate_lead` events
  with `method` (phone/whatsapp/email/form) and `location` (footer/floating_widget/
  mobile_bar/contact_form).
- **Why:** page views don't tell you whether visitors became leads. These events do.
- **How / action required:** in GA4 → Admin → Events, mark `generate_lead` (and/or
  `contact_click`) as a **Key Event** so it counts as a conversion. Verify firing in
  GA4 → Admin → DebugView.

### Phase 1 — Programmatic City × Practice landing pages (the biggest traffic lever)

- **What:** a new route `src/app/locations/[city]/[practice]/page.tsx` generates **48
  local landing pages** — e.g. `/locations/delhi/arbitration-alternative-dispute-resolution`,
  `/locations/gurgaon/real-estate-urban-development`, `/locations/noida/data-privacy-cybersecurity`.
  Each of the 8 cities maps to its 6 most relevant practice areas.
- **Why:** these target **winnable** long-tail local queries that a young domain can
  realistically rank for ("banking lawyer in Chandigarh", "RERA lawyer Noida"),
  unlike national head terms. More matched queries → more of the site "reflecting"
  in Search Console.
- **How (anti-thin-content design):** each page composes **three** distinct sources
  so it is genuinely unique, not a doorway page:
  1. `src/data/cityPracticeContent.ts` — a **unique local angle** (self-contained
     "Quick Answer") + **two city-specific FAQs** per combination, grounded in that
     city's real courts/forums and industries (e.g. NCLT Chandigarh for Gurgaon
     companies; UP RERA + Allahabad HC for Noida; MSMED §18 Facilitation Council for
     Panipat).
  2. `src/data/localBusinessSchemas.ts` — the city's real courts and office details.
  3. `src/data/practiceAreas.ts` — the services, expertise and legal framework.
- **Schema per page:** city-scoped `LegalService` + `Service` + `FAQPage` +
  `BreadcrumbList` + `Speakable`. OG image auto-generated via
  `src/app/locations/[city]/[practice]/opengraph-image.tsx`.
- **Internal linking:** parent city pages now link **down** to these pages
  (`locations/[city]/page.tsx`), and each practice page links **across** to its city
  variants ("`<Practice>` lawyers, city by city" section in
  `practice-areas/[slug]/page.tsx`). They're in `sitemap.ts` at priority 0.7.

### Phase 2 — AEO / GEO upgrades

**2.1 — Glossary hub** (`/glossary`)
- **What:** `src/data/glossary.ts` (30 terms) + `src/app/glossary/page.tsx`, grouped
  by category, each term with an anchor id, marked up with `DefinedTermSet` /
  `DefinedTerm` schema.
- **Why:** short, precise definitions are exactly what AI answer engines lift and
  cite ("what is Section 9", "seat vs venue", "CIRP"). It's also an internal-link
  hub that builds topical authority.
- **How:** definitions are neutral, textbook-accurate statements of Indian law; the
  page is linked from the header nav, footer, and `llms.txt`.

**2.2 — Comparison tables in articles**
- **What:** `InsightSection` in `src/data/insights.ts` gained an optional `table`
  field, rendered as a real HTML `<table>` in `insights/[slug]/page.tsx`. Used in
  "Seat vs Venue" and "SARFAESI vs DRT vs IBC".
- **Why:** comparison tables are disproportionately pulled into Google AI Overviews
  and answer-engine results.

**2.3 — Answer-first blocks** — every new city×practice page and article leads with a
self-contained "Quick Answer" / "TL;DR" (`.cp-tldr`, `.insight-tldr`,
`.practice-area-tldr`) that an LLM can quote verbatim, and which is marked
`speakable` for voice search.

**2.4 — AI-discovery files** — `public/llms.txt` updated to list the 7 new articles,
the glossary, and the city×practice pages so retrieval crawlers find them.

### Phase 3 — New long-tail cornerstone articles

- **What:** 7 new articles added to `src/data/insights.ts` (the existing template
  auto-generates the pages, OG images, BlogPosting + FAQ + Speakable schema):
  1. `cost-of-arbitration-in-india`
  2. `how-to-enforce-arbitral-award-india`
  3. `section-34-challenge-arbitral-award`
  4. `seat-vs-venue-arbitration-india` (with comparison table)
  5. `arbitration-clause-drafting-checklist-india`
  6. `sarfaesi-vs-drt-vs-ibc-recovery-route` (with comparison table)
  7. `msme-delayed-payment-section-18-msmed-act`
- **Why:** these target specific, lower-competition, high-intent queries ("how to
  enforce an arbitral award India", "cost of arbitration India") where a young
  domain can rank and where AI engines need a clear source to cite. Each carries a
  TL;DR, 6–7 sections, 4 FAQs, related statutes, and founder attribution (E-E-A-T).

### Phase 4 — Internal linking & crawl depth

- City pages → city×practice pages; practice pages → their city variants; glossary in
  header + footer; new articles auto-surface on relevant practice pages via the
  existing `practiceInsightCategory` mapping. Tighter internal linking spreads crawl
  equity and helps Google discover and rank the new pages faster.

### Phase 5 — Conversion

- Conversion **measurement** is now wired (Phase 0.3). `ContactForm` already has a
  success state; it now records a `generate_lead` event. The mobile sticky
  call/WhatsApp bar and floating widget are tracked, so you can see which channel
  converts.

---

## 3. Page-count impact

| | Before | After |
|---|---:|---:|
| Total prerendered routes | ~169 | **199** |
| City × practice landing pages | 0 | 48 |
| Cornerstone articles | 7 | 14 |
| Glossary hub | 0 | 1 (30 terms) |

Every new page is server-rendered, in the XML sitemap, internally linked, and
carries unique content + structured data.

---

## 4. Off-page checklist — what the code CANNOT do (this is where the ceiling lifts)

Code changes make the site *rankable*. Domain authority makes it *rank*. These
actions are essential and only you can do them:

1. **Search Console hygiene (do first).**
   - Verify the domain (DNS method preferred).
   - Submit `https://www.judiciumarbitration.com/sitemap.xml`.
   - Use **URL Inspection → Request Indexing** on the homepage, `/glossary`, the new
     articles, and a sample of city×practice pages.
   - Watch **Pages → "Why pages aren't indexed"**. Expect many to sit in
     "Discovered – currently not indexed" at first; internal links + backlinks +
     time fix this.
2. **Bing Webmaster Tools** — verify + submit the sitemap (Bing also feeds ChatGPT
   search). Quick win.
3. **Google Business Profiles** — create/claim a profile for **each city office**.
   For a law firm, the local pack + Maps is often the single biggest source of
   qualified local leads, and it's free. Use the exact NAP (name/address/phone) that
   matches the site's LocalBusiness schema.
4. **Local citations / directories** — list the firm consistently on JustDial,
   Sulekha, Lawrato, Bar Council / lawyer directories, IndiaMART for B2B, etc. Each
   consistent citation is a trust + discovery signal.
5. **Backlinks (the real authority lever)** — guest articles on legal portals
   (Bar & Bench, LiveLaw, Mondaq, SCC Online blog), HARO-style journalist responses,
   speaking/CLE listings, and getting the firm's articles cited. A handful of quality
   legal-domain backlinks will move rankings more than any on-page change.
6. **Content cadence** — publish 1–2 new insight articles/month on topics that show
   impressions in Search Console (see §5). Freshness + breadth compounds.
7. **Reviews** — solicit genuine Google reviews on the city Business Profiles; they
   feed both local ranking and the `aggregateRating` credibility.

---

## 5. Measurement plan & the keyword review loop

**Wire-up checklist (one-time):**
- [x] GA4 ID hardcoded to `G-TNJTKYWZ83` in the component (no Vercel env needed); confirm that single property receives traffic in GA4 DebugView after deploy.
- [ ] `generate_lead` marked as a Key Event in GA4.
- [ ] GSC verified; sitemap submitted; indexing requested for new pages.

**Monthly loop (the important part — the plan was built data-ready):**
1. In GSC → **Performance → Queries**, export the queries getting impressions.
2. Find queries at **positions 5–20** with decent impressions but low clicks — these
   are "almost ranking". They are your highest-ROI targets.
3. For each: strengthen the matching page (title/H1/FAQ aligned to the actual query),
   add internal links to it, and/or write a dedicated article.
4. Re-tune the city×practice priorities and the next article topics to what's
   actually close to ranking (this replaces the best-guess targeting used initially,
   since GSC data wasn't available at build time).
5. In GA4, track `generate_lead` by `method`/`location` to see what converts, and
   double down on the highest-converting channel.

**Realistic expectations (set these with the client):**
- **0–30 days:** new pages get crawled and indexed; impressions start appearing for
  long-tail/local queries. Rankings still low.
- **30–90 days:** long-tail + local pages begin ranking on pages 1–3 for low-competition
  terms; impressions and clicks climb if off-page work (§4) is underway.
- **3–6 months+:** with consistent content + backlinks + Google Business Profiles,
  meaningful local-pack visibility and steady qualified traffic. Head terms remain a
  long game.

New-domain SEO is measured in weeks and months, not days. The on-page foundation is
now strong; the rate of progress from here is set mostly by the off-page work in §4.

---

## 6. Key files (reference)

| Area | File(s) |
|---|---|
| Analytics helper | `src/lib/analytics.ts` |
| GA / verification | `src/components/GoogleAnalytics.tsx`, `src/app/layout.tsx` |
| Conversion events | `src/components/FloatingContact.tsx`, `Footer.tsx`, `ContactForm.tsx` |
| City × practice content | `src/data/cityPracticeContent.ts` |
| City × practice route | `src/app/locations/[city]/[practice]/page.tsx` (+ `opengraph-image.tsx`) |
| Glossary | `src/data/glossary.ts`, `src/app/glossary/page.tsx` |
| Articles | `src/data/insights.ts` (+ `src/app/insights/[slug]/page.tsx` table support) |
| Sitemap | `src/app/sitemap.ts` |
| AI discovery | `public/llms.txt` |

To add a new city×practice page later: add an entry to the relevant city array in
`cityPracticeContent.ts` (matching a slug in `practiceAreas.ts`). The route, sitemap,
OG image and internal links update automatically.
