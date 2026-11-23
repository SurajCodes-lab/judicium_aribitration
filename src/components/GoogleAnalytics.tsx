import Script from "next/script";

// Google Analytics GA4 measurement ID — HARDCODED on purpose.
//
// This is the canonical, confirmed property (G-TNJTKYWZ83) that has historically
// been collecting data. It is hardcoded rather than read from an env var because
// Vercel environment variables are not reliably available for this project, and a
// hardcoded ID guarantees analytics fire on every deploy. A second, unused ID
// (G-LD76V5XMWC) previously sat in .env.local and was the source of a data split;
// it is no longer referenced by the code. See docs/SEO-PLAYBOOK.md → Phase 0.1.
const GA_MEASUREMENT_ID = "G-TNJTKYWZ83";

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
