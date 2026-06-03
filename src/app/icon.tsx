import { ImageResponse } from "next/og";

// Next.js file-convention favicon — generates /icon (replaces the missing /favicon.ico)
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0D1117",
          color: "#F0C246",
          fontSize: 24,
          fontWeight: 700,
          fontFamily: "serif",
          borderRadius: 6,
        }}
      >
        J
      </div>
    ),
    { ...size }
  );
}
