"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LawIcons } from "./Icons";
import {
  WHATSAPP_LINK,
  TEL_LINK,
  MAILTO_LINK,
  PHONE_DISPLAY,
} from "@/data/contactInfo";

/**
 * Site-wide lead-capture surface (Week 10).
 *
 * Two coordinated pieces:
 *  1. Desktop / tablet: a floating action cluster pinned bottom-right. A WhatsApp
 *     button is always visible; tapping the toggle reveals Call + Email actions.
 *  2. Mobile (< sm): a sticky bottom action bar (Call · WhatsApp · Email) — the
 *     single highest-converting pattern for Indian legal-services traffic, where
 *     most visitors arrive on a phone and want one-tap contact.
 *
 * Purely additive: it does not alter any existing layout, and respects the
 * safe-area inset so it never overlaps mobile system UI.
 */
export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Delay entrance slightly so it doesn't compete with the hero on first paint.
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ===== Desktop / tablet: floating action cluster ===== */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
        <AnimatePresence>
          {open && mounted && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-end gap-3"
            >
              <a
                href={TEL_LINK}
                className="group flex items-center gap-3 pl-4 pr-2 py-2 bg-bg-alt-dark border border-gold-primary/30 rounded-full shadow-lg hover:border-gold-primary/60 transition-colors"
                aria-label={`Call Judicium Arbitration on ${PHONE_DISPLAY}`}
              >
                <span className="text-sm font-medium text-white/80 group-hover:text-gold-primary transition-colors">
                  Call now
                </span>
                <span className="w-10 h-10 rounded-full bg-linear-to-br from-gold-primary to-gold-secondary flex items-center justify-center text-bg-dark">
                  <LawIcons.Phone className="w-5 h-5" />
                </span>
              </a>
              <a
                href={MAILTO_LINK}
                className="group flex items-center gap-3 pl-4 pr-2 py-2 bg-bg-alt-dark border border-gold-primary/30 rounded-full shadow-lg hover:border-gold-primary/60 transition-colors"
                aria-label="Email Judicium Arbitration"
              >
                <span className="text-sm font-medium text-white/80 group-hover:text-gold-primary transition-colors">
                  Email us
                </span>
                <span className="w-10 h-10 rounded-full bg-bg-card border border-gold-primary/30 flex items-center justify-center text-gold-primary">
                  <LawIcons.Mail className="w-5 h-5" />
                </span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Primary: WhatsApp (always visible) */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Hide contact options" : "Show contact options"}
            className="w-12 h-12 rounded-full bg-bg-alt-dark border border-gold-primary/30 flex items-center justify-center text-gold-primary hover:border-gold-primary/60 transition-colors shadow-lg"
          >
            <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </motion.span>
          </button>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Judicium Arbitration on WhatsApp"
            className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-xl shadow-[#25D366]/30 hover:scale-105 transition-transform"
          >
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
            <LawIcons.WhatsApp className="relative w-7 h-7" />
          </a>
        </div>
      </div>

      {/* ===== Mobile: sticky bottom action bar ===== */}
      <div
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-3 bg-bg-alt-dark/95 backdrop-blur-md border-t border-gold-primary/20"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <a
          href={TEL_LINK}
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-gold-primary active:bg-gold-primary/10 transition-colors"
          aria-label={`Call ${PHONE_DISPLAY}`}
        >
          <LawIcons.Phone className="w-5 h-5" />
          <span className="text-[11px] font-semibold tracking-wide">Call</span>
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-[#25D366] border-x border-gold-primary/15 active:bg-[#25D366]/10 transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <LawIcons.WhatsApp className="w-5 h-5" />
          <span className="text-[11px] font-semibold tracking-wide">WhatsApp</span>
        </a>
        <a
          href={MAILTO_LINK}
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-white/80 active:bg-white/5 transition-colors"
          aria-label="Email us"
        >
          <LawIcons.Mail className="w-5 h-5" />
          <span className="text-[11px] font-semibold tracking-wide">Email</span>
        </a>
      </div>
    </>
  );
}
