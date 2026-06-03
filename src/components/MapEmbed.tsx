"use client";

import { useState } from "react";
import { LawIcons } from "./Icons";

/**
 * Click-to-load Google Maps facade.
 *
 * The Google Maps embed pulls ~1MB of JS/tiles and adds long tasks that hurt LCP and
 * INP. This facade renders a lightweight static placeholder and only mounts the heavy
 * iframe after the user opts in — keeping the city page fast on first paint while still
 * offering the map. A direct "Open in Google Maps" link is always available for users
 * (and crawlers) who don't trigger the embed.
 */
export default function MapEmbed({
  query,
  city,
}: {
  query: string;
  city: string;
}) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title={`Map of Judicium Arbitration ${city} office`}
        src={`https://maps.google.com/maps?q=${query}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
        className="absolute inset-0 w-full h-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={`Load interactive map of the ${city} office`}
      className="group absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-4 bg-bg-alt-dark cursor-pointer"
    >
      {/* Decorative static map-grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#F0C246 1px, transparent 1px), linear-gradient(90deg, #F0C246 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-gold-primary to-gold-secondary flex items-center justify-center shadow-lg shadow-gold-primary/30 group-hover:scale-105 transition-transform">
          <LawIcons.Location className="w-7 h-7 text-black" />
        </div>
        <span className="text-sm font-semibold text-white/90">
          {city} Office
        </span>
        <span className="px-4 py-2 rounded-lg border border-gold-primary/40 text-gold-primary text-sm font-semibold group-hover:bg-gold-primary/10 transition-colors">
          Load interactive map
        </span>
      </div>
    </button>
  );
}
