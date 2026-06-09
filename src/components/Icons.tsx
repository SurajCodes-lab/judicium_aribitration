// Shared Law Icons SVG components
export const LawIcons = {
  // Scales of Justice
  Scales: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M32 8v48M32 8l-20 8M32 8l20 8" strokeLinecap="round" />
      <path d="M12 16l-6 20c0 4 6 6 12 6s12-2 12-6l-6-20" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M52 16l-6 20c0 4 6 6 12 6s12-2 12-6l-6-20" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 56h16" strokeLinecap="round" />
      <path d="M20 56v4h24v-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  // Gavel
  Gavel: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="8" y="20" width="20" height="12" rx="2" transform="rotate(-45 8 20)" />
      <path d="M24 24l16 16" strokeLinecap="round" />
      <rect x="36" y="36" width="8" height="20" rx="1" transform="rotate(-45 36 36)" />
      <path d="M12 52l40-4" strokeLinecap="round" />
      <path d="M10 56l44-4" strokeLinecap="round" />
    </svg>
  ),

  // Pillar/Column
  Pillar: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 12h32M16 52h32" strokeLinecap="round" />
      <path d="M12 8h40v4H12zM12 52h40v4H12z" strokeLinejoin="round" />
      <path d="M20 16v36M28 16v36M36 16v36M44 16v36" strokeLinecap="round" />
    </svg>
  ),

  // Law Book
  Book: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 8h40a4 4 0 014 4v40a4 4 0 01-4 4H12a4 4 0 01-4-4V8z" />
      <path d="M12 8v48" strokeLinecap="round" />
      <path d="M20 20h20M20 28h16M20 36h12" strokeLinecap="round" />
      <circle cx="40" cy="44" r="6" />
      <path d="M38 44l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  // Shield/Protection
  Shield: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M32 4L8 14v20c0 16 24 26 24 26s24-10 24-26V14L32 4z" strokeLinejoin="round" />
      <path d="M24 32l6 6 12-12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  // Document/Contract
  Document: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 4h28l12 12v44H12V4z" strokeLinejoin="round" />
      <path d="M40 4v12h12" strokeLinejoin="round" />
      <path d="M20 24h24M20 32h24M20 40h16" strokeLinecap="round" />
      <path d="M20 52c8-4 16 4 24 0" strokeLinecap="round" />
    </svg>
  ),

  // Location Pin
  Location: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M32 56s20-14 20-28a20 20 0 10-40 0c0 14 20 28 20 28z" strokeLinejoin="round" />
      <circle cx="32" cy="28" r="8" />
    </svg>
  ),

  // Building/Office
  Building: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 56h48M12 56V16l20-8 20 8v40" strokeLinejoin="round" />
      <path d="M20 24h4v4h-4zM28 24h4v4h-4zM36 24h4v4h-4z" strokeLinejoin="round" />
      <path d="M20 34h4v4h-4zM28 34h4v4h-4zM36 34h4v4h-4z" strokeLinejoin="round" />
      <path d="M26 56V44h8v12" strokeLinejoin="round" />
    </svg>
  ),

  // Team/Users
  Team: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="32" cy="20" r="10" />
      <path d="M16 56c0-10 8-16 16-16s16 6 16 16" strokeLinecap="round" />
      <circle cx="12" cy="28" r="6" />
      <path d="M4 48c0-6 4-10 8-10" strokeLinecap="round" />
      <circle cx="52" cy="28" r="6" />
      <path d="M60 48c0-6-4-10-8-10" strokeLinecap="round" />
    </svg>
  ),

  // Trophy/Award
  Trophy: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 8h24v24c0 8-6 12-12 12s-12-4-12-12V8z" strokeLinejoin="round" />
      <path d="M20 12H12c0 8 4 12 8 12" strokeLinejoin="round" />
      <path d="M44 12h8c0 8-4 12-8 12" strokeLinejoin="round" />
      <path d="M32 44v8M24 56h16" strokeLinecap="round" />
      <path d="M28 28l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  // Handshake
  Handshake: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 24h8l12 12 8-8 8 8 8-8h12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 36l-8 8 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36 40l8 8" strokeLinecap="round" />
      <path d="M4 32h8M52 32h8" strokeLinecap="round" />
    </svg>
  ),

  // Email/Mail
  Mail: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="8" y="12" width="48" height="40" rx="4" />
      <path d="M8 16l24 20 24-20" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  // Clock/Time
  Clock: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="32" cy="32" r="26" />
      <path d="M32 16v16l10 10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  // Target/Bullseye
  Target: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="32" cy="32" r="26" />
      <circle cx="32" cy="32" r="18" />
      <circle cx="32" cy="32" r="10" />
      <circle cx="32" cy="32" r="3" fill="currentColor" />
    </svg>
  ),

  // Chart/Graph
  Chart: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 56h48" strokeLinecap="round" />
      <path d="M8 8v48" strokeLinecap="round" />
      <path d="M16 40l12-16 10 8 18-24" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="56" cy="8" r="4" fill="currentColor" />
    </svg>
  ),

  // Lightning/Speed
  Lightning: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M36 4L12 36h18l-6 24 24-32H30L36 4z" strokeLinejoin="round" />
    </svg>
  ),

  // Globe
  Globe: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="32" cy="32" r="26" />
      <ellipse cx="32" cy="32" rx="12" ry="26" />
      <path d="M8 24h48M8 40h48" strokeLinecap="round" />
      <path d="M32 6v52" strokeLinecap="round" />
    </svg>
  ),

  // City/Skyline
  City: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 56h56" strokeLinecap="round" />
      <path d="M8 56V32h12v24M24 56V24h8v32M36 56V20h12v36M52 56V28h8v28" strokeLinejoin="round" />
      <path d="M12 36h4M12 42h4M12 48h4" strokeLinecap="round" />
      <path d="M28 30h4M28 38h4M28 46h4" strokeLinecap="round" />
      <path d="M40 28h4M40 36h4M40 44h4" strokeLinecap="round" />
    </svg>
  ),

  // Landmark/Monument
  Landmark: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M32 4l24 16H8L32 4z" strokeLinejoin="round" />
      <path d="M12 20v32M24 20v32M40 20v32M52 20v32" strokeLinecap="round" />
      <path d="M8 52h48M6 56h52" strokeLinecap="round" />
      <rect x="28" y="8" width="8" height="8" rx="1" />
    </svg>
  ),

  // Phone/Call
  Phone: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  ),

  // WhatsApp (brand glyph)
  WhatsApp: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.215zm5.378-6.741c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  ),
};
