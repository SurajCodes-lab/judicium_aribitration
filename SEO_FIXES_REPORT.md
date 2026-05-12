# SEO Fixes Report — Judicium Arbitration

**Date:** April 5, 2026
**Issue:** Google Search Console — "Alternative page with proper canonical tag" preventing indexing

---

## Root Cause

Every canonical URL, sitemap URL, OpenGraph URL, and schema markup URL across the entire codebase pointed to `https://judicium-arbitration.com` (wrong domain with a hyphen), while the actual site is hosted at `https://www.judiciumarbitration.com`.

Google crawled pages on `www.judiciumarbitration.com` but found canonical tags pointing to a completely different domain. This caused Google to treat every page as an "alternative page with proper canonical tag" and refuse to index them.

---

## All Fixes Applied

### 1. Fixed Domain Across Entire Codebase (11 files)

**Before:** `https://judicium-arbitration.com`
**After:** `https://www.judiciumarbitration.com`

Files updated:
- `src/app/layout.tsx` — metadataBase, OG url, schema markup
- `src/app/page.tsx` — canonical
- `src/app/about/page.tsx` — BASE_URL, canonical, OG url
- `src/app/contact/page.tsx` — canonical, OG url, schema
- `src/app/practice-areas/page.tsx` — canonical, OG url
- `src/app/practice-areas/[slug]/page.tsx` — BASE_URL, canonical, OG url, schema
- `src/app/privacy-policy/page.tsx` — canonical, OG url
- `src/app/terms-of-service/page.tsx` — canonical, OG url, body text
- `src/app/disclaimer/page.tsx` — canonical, OG url
- `src/app/sitemap.ts` — all sitemap URLs
- `src/app/robots.ts` — sitemap URL, host directive

### 2. Added `trailingSlash: false` in `next.config.ts`

Without this, both `/about` and `/about/` were treated as separate URLs by Google, causing duplicate content signals. Now Next.js auto-redirects trailing slash URLs with a 308 redirect.

### 3. Added Non-www to www Redirect in `next.config.ts`

```js
async redirects() {
  return [
    {
      source: "/:path*",
      has: [{ type: "host", value: "judiciumarbitration.com" }],
      destination: "https://www.judiciumarbitration.com/:path*",
      permanent: true,
    },
  ];
}
```

Ensures `judiciumarbitration.com` (without www) permanently redirects to `www.judiciumarbitration.com`.

### 4. Created `src/middleware.ts` for Runtime URL Normalization

Handles two things at the edge:
- Redirects non-www to www (301)
- Strips trailing slashes (301)

This catches all URL variations before they reach the page, ensuring Google only ever sees the canonical URL format.

### 5. Made Legal Pages Indexable

**Before:** `privacy-policy`, `terms-of-service`, `disclaimer` had `robots: "noindex, nofollow"` but were included in the sitemap — conflicting signals.

**After:** All three pages now have:
- `robots: { index: true, follow: true }` with full googleBot directives
- Proper `canonical` URLs
- Full `openGraph` metadata with `url` field

### 6. Added Missing OpenGraph `url` Fields

Pages that were missing explicit `og:url`:
- `/about` — added `url: https://www.judiciumarbitration.com/about`
- `/contact` — added `url: https://www.judiciumarbitration.com/contact`
- `/practice-areas` — added `url: https://www.judiciumarbitration.com/practice-areas`
- `/privacy-policy` — added `url: https://www.judiciumarbitration.com/privacy-policy`
- `/terms-of-service` — added `url: https://www.judiciumarbitration.com/terms-of-service`
- `/disclaimer` — added `url: https://www.judiciumarbitration.com/disclaimer`

### 7. Enhanced `robots.ts`

- Added `_next/` to disallow list (no need to crawl framework files)
- Added explicit Googlebot rule
- Added `host: "https://www.judiciumarbitration.com"` directive

### 8. Fixed SearchAction Schema in `layout.tsx`

**Before:** Used invalid `EntryPoint` format with `?q=` query param that doesn't work on the site.
**After:** Simplified to standard SearchAction target format.

---

## Action Required After Deploy

### 1. Set Google Site Verification

The `.env.local` file still has the placeholder value:
```
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code-here
```

Update this with your actual verification code from Google Search Console.

### 2. Verify Search Console Property

Make sure your Search Console property is set to **exactly** `https://www.judiciumarbitration.com` (with `www`). If you previously added `https://judicium-arbitration.com`, add the correct domain as a new property.

### 3. Resubmit Sitemap

In Google Search Console:
1. Go to Sitemaps
2. Submit: `https://www.judiciumarbitration.com/sitemap.xml`
3. Remove any old sitemap entries pointing to the wrong domain

### 4. Request Indexing for Key Pages

Use the URL Inspection tool in Search Console to request indexing for:
- `https://www.judiciumarbitration.com/`
- `https://www.judiciumarbitration.com/about`
- `https://www.judiciumarbitration.com/practice-areas`
- `https://www.judiciumarbitration.com/contact`
- Each practice area page

### 5. Monitor Recovery

- "Alternative page with proper canonical tag" errors should start clearing within **1-2 weeks** as Google recrawls
- Check the Coverage/Pages report in Search Console weekly
- New pages should start getting indexed within **2-4 weeks**

---

## SEO Checklist — Current State

| Item | Status |
|------|--------|
| Canonical URLs match actual domain | Fixed |
| Trailing slash normalization | Fixed |
| www/non-www redirect | Fixed |
| All pages in sitemap | Fixed |
| All pages set to index/follow | Fixed |
| OpenGraph URLs on all pages | Fixed |
| Schema markup URLs correct | Fixed |
| robots.txt properly configured | Fixed |
| Google Site Verification | Needs your verification code |
| Search Console property | Needs to match www.judiciumarbitration.com |

---

## Tips for Faster Indexing

1. **Google Indexing API** — For faster crawling, set up the Google Indexing API to programmatically notify Google when pages are updated
2. **Internal linking** — Ensure all pages are reachable within 3 clicks from the homepage
3. **Google Business Profile** — Link your website URL in your Google Business Profile
4. **Backlinks** — Get listed on legal directories (Bar Council, DIAC, Indian law directories)
5. **Content freshness** — Regularly update practice area pages with new case studies or legal developments
6. **Core Web Vitals** — Monitor and optimize LCP, FID, CLS scores in Search Console
