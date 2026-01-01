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
};
