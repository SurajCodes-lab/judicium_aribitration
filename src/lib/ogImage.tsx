import { ImageResponse } from "next/og";

/**
 * Shared 1200x630 Open Graph image renderer for Judicium Arbitration.
 *
 * Used by the opengraph-image.tsx file conventions across the app so every page
 * gets a unique, on-brand social card auto-generated at build time — no designer
 * round-trip, no broken /og-image.jpg references.
 *
 * ImageResponse uses Satori under the hood: only flexbox layout + inline styles,
 * and every element with >1 child must set display:flex. System fonts only (no
 * network font fetch) keeps the build fast and offline-safe.
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const GOLD = "#F0C246";
const GOLD_SECONDARY = "#E5B32A";
const BG = "#0D1117";
const BG_ALT = "#161B22";

interface OgImageOptions {
  /** Small uppercase label above the title (e.g. "Practice Area", "Insight", "Office") */
  eyebrow?: string;
  /** Main headline */
  title: string;
  /** Optional supporting line under the title */
  subtitle?: string;
}

export function renderOgImage({ eyebrow, title, subtitle }: OgImageOptions) {
  // Trim very long titles so they don't overflow the canvas
  const safeTitle = title.length > 110 ? `${title.slice(0, 107)}…` : title;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: BG,
          backgroundImage: `radial-gradient(ellipse 90% 70% at 50% -10%, rgba(240,194,70,0.18), transparent 60%), radial-gradient(ellipse 60% 60% at 90% 110%, rgba(229,179,42,0.12), transparent 50%)`,
          padding: "64px 72px",
          fontFamily: "Georgia, 'Times New Roman', serif",
          position: "relative",
        }}
      >
        {/* Corner frames */}
        <div
          style={{
            position: "absolute",
            top: 36,
            left: 36,
            width: 56,
            height: 56,
            borderLeft: `3px solid rgba(240,194,70,0.5)`,
            borderTop: `3px solid rgba(240,194,70,0.5)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 36,
            right: 36,
            width: 56,
            height: 56,
            borderRight: `3px solid rgba(240,194,70,0.5)`,
            borderBottom: `3px solid rgba(240,194,70,0.5)`,
          }}
        />

        {/* Top: wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: `linear-gradient(135deg, ${GOLD}, ${GOLD_SECONDARY})`,
              color: BG,
              fontSize: 38,
              fontWeight: 700,
            }}
          >
            ⚖
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: GOLD,
                fontSize: 30,
                fontWeight: 700,
                letterSpacing: 2,
              }}
            >
              JUDICIUM
            </span>
            <span
              style={{
                color: "rgba(229,179,42,0.75)",
                fontSize: 15,
                letterSpacing: 6,
              }}
            >
              ARBITRATION
            </span>
          </div>
        </div>

        {/* Middle: eyebrow + title + subtitle */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
          {eyebrow ? (
            <span
              style={{
                color: GOLD_SECONDARY,
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: 4,
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              {eyebrow}
            </span>
          ) : null}
          <span
            style={{
              color: "#FFFFFF",
              fontSize: safeTitle.length > 60 ? 56 : 68,
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            {safeTitle}
          </span>
          {subtitle ? (
            <span
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: 28,
                lineHeight: 1.35,
                marginTop: 24,
              }}
            >
              {subtitle}
            </span>
          ) : null}
        </div>

        {/* Bottom: gold rule + URL */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: 3,
              background: `linear-gradient(90deg, ${GOLD}, transparent)`,
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ color: GOLD, fontSize: 24, fontWeight: 600 }}>
              www.judiciumarbitration.com
            </span>
            <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 22 }}>
              Arbitration & ADR · North India
            </span>
          </div>
        </div>

        {/* subtle background card tint */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            border: `1px solid ${BG_ALT}`,
            pointerEvents: "none",
          }}
        />
      </div>
    ),
    { ...OG_SIZE }
  );
}
