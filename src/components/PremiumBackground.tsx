"use client";

import { motion } from "framer-motion";
import { LawIcons } from "./Icons";

interface PremiumBackgroundProps {
  variant?: "hero" | "section";
  showCornerFrames?: boolean;
}

export default function PremiumBackground({
  variant = "section",
  showCornerFrames = false
}: PremiumBackgroundProps) {
  const isHero = variant === "hero";

  return (
    <div className={`absolute inset-0 overflow-hidden ${isHero ? 'bg-[#0a0d10]' : ''}`}>
      {/* Rich gradient base */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_-20%,rgba(212,175,55,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_80%_20%,rgba(173,143,61,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_20%_80%,rgba(212,175,55,0.06),transparent_50%)]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating Law Icons - Left Side */}
      <div className="absolute left-[5%] top-[15%] opacity-[0.08]">
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <LawIcons.Scales className="w-16 h-16 sm:w-24 sm:h-24 text-gold-primary" />
        </motion.div>
      </div>

      <div className="absolute left-[8%] bottom-[20%] opacity-[0.06]">
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <LawIcons.Gavel className="w-14 h-14 sm:w-20 sm:h-20 text-gold-primary" />
        </motion.div>
      </div>

      <div className="absolute left-[15%] top-[55%] opacity-[0.05]">
        <motion.div
          animate={{ y: [-8, 8, -8], opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <LawIcons.Book className="w-12 h-12 sm:w-18 sm:h-18 text-gold-primary" />
        </motion.div>
      </div>

      {/* Floating Law Icons - Right Side */}
      <div className="absolute right-[5%] top-[20%] opacity-[0.07]">
        <motion.div
          animate={{ y: [10, -10, 10], rotate: [2, -2, 2] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <LawIcons.Pillar className="w-14 h-14 sm:w-20 sm:h-20 text-gold-primary" />
        </motion.div>
      </div>

      <div className="absolute right-[10%] bottom-[25%] opacity-[0.06]">
        <motion.div
          animate={{ y: [-12, 12, -12] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <LawIcons.Shield className="w-16 h-16 sm:w-24 sm:h-24 text-gold-primary" />
        </motion.div>
      </div>

      <div className="absolute right-[18%] top-[60%] opacity-[0.04]">
        <motion.div
          animate={{ y: [8, -8, 8] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          <LawIcons.Document className="w-12 h-12 sm:w-16 sm:h-16 text-gold-primary" />
        </motion.div>
      </div>

      {/* Central large scale watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02]">
        <LawIcons.Scales className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] text-gold-primary" />
      </div>

      {/* Corner frames - optional */}
      {showCornerFrames && (
        <>
          <div className="absolute top-6 left-6 sm:top-10 sm:left-10">
            <div className="w-12 sm:w-20 h-12 sm:h-20 border-l-2 border-t-2 border-gold-primary/25" />
            <div className="absolute top-2 left-2 w-6 sm:w-10 h-6 sm:h-10 border-l border-t border-gold-primary/40" />
          </div>
          <div className="absolute top-6 right-6 sm:top-10 sm:right-10">
            <div className="w-12 sm:w-20 h-12 sm:h-20 border-r-2 border-t-2 border-gold-primary/25" />
            <div className="absolute top-2 right-2 w-6 sm:w-10 h-6 sm:h-10 border-r border-t border-gold-primary/40" />
          </div>
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
            <div className="w-12 sm:w-20 h-12 sm:h-20 border-l-2 border-b-2 border-gold-primary/25" />
            <div className="absolute bottom-2 left-2 w-6 sm:w-10 h-6 sm:h-10 border-l border-b border-gold-primary/40" />
          </div>
          <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10">
            <div className="w-12 sm:w-20 h-12 sm:h-20 border-r-2 border-b-2 border-gold-primary/25" />
            <div className="absolute bottom-2 right-2 w-6 sm:w-10 h-6 sm:h-10 border-r border-b border-gold-primary/40" />
          </div>
        </>
      )}

      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-gold-primary/5 blur-[80px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gold-secondary/4 blur-[100px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Horizontal decorative lines */}
      <div className="absolute top-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-primary/10 to-transparent" />
      <div className="absolute bottom-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-primary/10 to-transparent" />
    </div>
  );
}
