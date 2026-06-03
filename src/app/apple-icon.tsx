import { ImageResponse } from "next/og";

// Next.js file-convention Apple touch icon — generates /apple-icon (replaces the missing /apple-touch-icon.png)
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0D1117",
          color: "#F0C246",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 110, fontWeight: 700, lineHeight: 1 }}>J</div>
        <div
          style={{
            fontSize: 16,
            letterSpacing: 4,
            marginTop: 6,
            color: "#E5B32A",
          }}
        >
          ARBITRATION
        </div>
      </div>
    ),
    { ...size }
  );
}
