"use client";

import { motion } from "framer-motion";
import Button from "./Button";

// Custom Law Icons as SVG components
const LawIcons = {
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
};

// Premium Background with Law Elements - BALANCED
function PremiumLawBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0D1117]">
      {/* Balanced gradient base */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-30%,rgba(240,194,70,0.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_85%_20%,rgba(229,179,42,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_15%_70%,rgba(240,194,70,0.10),transparent_50%)]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(240,194,70,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(240,194,70,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating Law Icons - Left Side - BALANCED */}
      <div className="absolute left-[3%] top-[15%] opacity-[0.15]">
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <LawIcons.Scales className="w-24 h-24 sm:w-32 sm:h-32 text-gold-primary" />
        </motion.div>
      </div>

      <div className="absolute left-[6%] bottom-[20%] opacity-[0.12]">
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <LawIcons.Gavel className="w-20 h-20 sm:w-28 sm:h-28 text-gold-primary" />
        </motion.div>
      </div>

      <div className="absolute left-[12%] top-[55%] opacity-[0.10]">
        <motion.div
          animate={{ y: [-8, 8, -8], opacity: [0.10, 0.14, 0.10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <LawIcons.Book className="w-16 h-16 sm:w-24 sm:h-24 text-gold-primary" />
        </motion.div>
      </div>

      {/* Floating Law Icons - Right Side - BALANCED */}
      <div className="absolute right-[3%] top-[20%] opacity-[0.15]">
        <motion.div
          animate={{ y: [10, -10, 10], rotate: [2, -2, 2] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <LawIcons.Pillar className="w-20 h-20 sm:w-28 sm:h-28 text-gold-primary" />
        </motion.div>
      </div>

      <div className="absolute right-[8%] bottom-[25%] opacity-[0.12]">
        <motion.div
          animate={{ y: [-12, 12, -12] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <LawIcons.Shield className="w-24 h-24 sm:w-32 sm:h-32 text-gold-primary" />
        </motion.div>
      </div>

      <div className="absolute right-[15%] top-[60%] opacity-[0.10]">
        <motion.div
          animate={{ y: [8, -8, 8] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          <LawIcons.Document className="w-16 h-16 sm:w-20 sm:h-20 text-gold-primary" />
        </motion.div>
      </div>

      {/* Central large scale watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]">
        <LawIcons.Scales className="w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] text-gold-primary" />
      </div>

      {/* Elegant corner frames */}
      <div className="absolute top-6 left-6 sm:top-12 sm:left-12">
        <div className="w-16 sm:w-24 h-16 sm:h-24 border-l-2 border-t-2 border-gold-primary/40" />
        <div className="absolute top-2 left-2 w-8 sm:w-12 h-8 sm:h-12 border-l border-t border-gold-primary/60" />
      </div>
      <div className="absolute top-6 right-6 sm:top-12 sm:right-12">
        <div className="w-16 sm:w-24 h-16 sm:h-24 border-r-2 border-t-2 border-gold-primary/40" />
        <div className="absolute top-2 right-2 w-8 sm:w-12 h-8 sm:h-12 border-r border-t border-gold-primary/60" />
      </div>
      <div className="absolute bottom-6 left-6 sm:bottom-12 sm:left-12">
        <div className="w-16 sm:w-24 h-16 sm:h-24 border-l-2 border-b-2 border-gold-primary/40" />
        <div className="absolute bottom-2 left-2 w-8 sm:w-12 h-8 sm:h-12 border-l border-b border-gold-primary/60" />
      </div>
      <div className="absolute bottom-6 right-6 sm:bottom-12 sm:right-12">
        <div className="w-16 sm:w-24 h-16 sm:h-24 border-r-2 border-b-2 border-gold-primary/40" />
        <div className="absolute bottom-2 right-2 w-8 sm:w-12 h-8 sm:h-12 border-r border-b border-gold-primary/60" />
      </div>

      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gold-primary/10 blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gold-secondary/8 blur-[120px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Horizontal decorative lines */}
      <div className="absolute top-[25%] left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" />
      <div className="absolute bottom-[25%] left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Law Background */}
      <PremiumLawBackground />

      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-gold-primary/0 via-gold-primary to-gold-primary/0"
        initial={{ width: "0%", left: "50%" }}
        animate={{ width: "100%", left: "0%" }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 text-center">
        {/* Badge with Scale Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-3 px-5 py-2.5 bg-gold-primary/5 border border-gold-primary/20 rounded-full backdrop-blur-sm">
            <LawIcons.Scales className="w-5 h-5 text-gold-primary" />
            <span className="text-gold-primary text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase">
              Excellence in Dispute Resolution
            </span>
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-4 overflow-visible"
        >
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gold-primary overflow-visible"
            style={{
              textShadow: '0 0 60px rgba(212, 175, 55, 0.4), 0 0 120px rgba(212, 175, 55, 0.2)',
            }}
          >
            JUDICIUM
          </h1>
        </motion.div>

        {/* Elegant divider with pillar icons */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-5"
        >
          <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-gold-primary/60" />
          <LawIcons.Pillar className="w-4 h-4 text-gold-primary/40" />
          <span className="text-sm sm:text-base text-gold-secondary/80 tracking-[0.3em] uppercase font-light">
            Arbitration
          </span>
          <LawIcons.Pillar className="w-4 h-4 text-gold-primary/40" />
          <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent to-gold-primary/60" />
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-6"
        >
          <p className="text-base sm:text-lg md:text-xl text-white/85 font-light tracking-wide">
            Premier Arbitration & <span className="text-gold-primary">Alternative Dispute Resolution</span>
          </p>
          <p className="text-xs sm:text-sm text-white/40 mt-2 max-w-lg mx-auto font-light">
            Strategic legal solutions across North India with precision, integrity, and excellence
          </p>
        </motion.div>

        {/* Stats with icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center">
            <div className="flex items-center gap-6 sm:gap-10 py-4 px-6 sm:px-10 bg-white/[0.02] backdrop-blur-sm border border-gold-primary/10 rounded-xl">
              {[
                { value: "20+", label: "Years", icon: LawIcons.Shield },
                { value: "500+", label: "Cases", icon: LawIcons.Document },
                { value: "98%", label: "Success", icon: LawIcons.Gavel },
              ].map((stat, i) => (
                <div key={i} className={`text-center flex flex-col items-center ${i !== 2 ? 'pr-6 sm:pr-10 border-r border-gold-primary/10' : ''}`}>
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold-primary/50 mb-2" />
                  <div className="text-2xl sm:text-3xl font-semibold text-gold-primary">{stat.value}</div>
                  <div className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-[0.15em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8"
        >
          <Button variant="primary" size="md" href="/practice-areas">
            Explore Our Services
          </Button>
          <Button variant="secondary" size="md" href="/contact">
            Schedule Consultation
          </Button>
        </motion.div>

        {/* Locations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex items-center justify-center gap-2 text-white/30 text-xs"
        >
          <svg className="w-3.5 h-3.5 text-gold-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <span className="tracking-wide">Delhi NCR · Chandigarh · Jaipur · Panipat</span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/20 hover:text-gold-primary/40 transition-colors cursor-pointer"
        >
          <span className="text-[8px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-4 h-7 border border-current rounded-full flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-0.5 h-1.5 bg-current rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
