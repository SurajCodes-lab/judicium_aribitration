"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LawIcons } from "./Icons";
import { practiceAreasData } from "@/data/practiceAreas";
import { TEL_LINK, PHONE_DISPLAY, WHATSAPP_LINK } from "@/data/contactInfo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPracticeOpen, setIsPracticeOpen] = useState(false);
  const [mobilePracticeOpen, setMobilePracticeOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  // Hover-intent helpers for the Practice Areas mega-menu (avoids flicker).
  const openPractice = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setIsPracticeOpen(true);
  };
  const closePractice = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setIsPracticeOpen(false), 150);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "Locations", href: "/locations" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-bg-dark/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-gold-primary/10"
            : "bg-linear-to-b from-black/50 to-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.jpeg"
                  alt="Judicium Arbitration - Leading Arbitration & ADR Firm in North India"
                  width={56}
                  height={56}
                  priority
                  sizes="(max-width: 640px) 40px, (max-width: 1024px) 48px, 56px"
                  className="object-contain rounded-full border-2 border-gold-primary/40 shadow-lg shadow-gold-primary/10"
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-gold-primary font-bold text-lg lg:text-xl tracking-tight leading-tight">
                  JUDICIUM
                </div>
                <div className="text-gold-secondary/80 text-[10px] lg:text-xs tracking-[0.2em] leading-tight">
                  ARBITRATION
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

                // Practice Areas gets a mega-menu so all 20 services are reachable
                // in one hop from any page (navigation + internal-linking win).
                if (item.label === "Practice Areas") {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={openPractice}
                      onMouseLeave={closePractice}
                    >
                      <Link
                        href={item.href}
                        className={`relative px-4 py-2 flex items-center gap-1.5 transition-colors duration-300 text-sm font-medium tracking-wide group ${
                          isActive ? "text-gold-primary" : "text-white/80 hover:text-gold-primary"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                        aria-expanded={isPracticeOpen}
                        onFocus={openPractice}
                      >
                        {item.label}
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${isPracticeOpen ? "rotate-180" : ""}`}
                          fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        <span className={`absolute bottom-1 left-4 right-7 h-px bg-linear-to-r from-gold-primary to-gold-secondary transition-transform duration-300 origin-left ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`} />
                      </Link>

                      <AnimatePresence>
                        {isPracticeOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.18 }}
                            className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[min(46rem,90vw)]"
                          >
                            <div className="bg-bg-alt-dark/98 backdrop-blur-xl border border-gold-primary/20 rounded-2xl shadow-2xl shadow-black/40 p-4">
                              <div className="grid grid-cols-2 xl:grid-cols-3 gap-1">
                                {practiceAreasData.map((area) => (
                                  <Link
                                    key={area.slug}
                                    href={`/practice-areas/${area.slug}`}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/75 hover:text-gold-primary hover:bg-gold-primary/10 transition-colors"
                                  >
                                    <span className="text-lg shrink-0">{area.icon}</span>
                                    <span className="leading-tight">{area.shortTitle ?? area.title}</span>
                                  </Link>
                                ))}
                              </div>
                              <div className="mt-3 pt-3 border-t border-gold-primary/10 flex items-center justify-between px-2">
                                <span className="text-xs text-white/40">20+ practice areas across North India</span>
                                <Link href="/practice-areas" className="text-sm font-semibold text-gold-primary hover:underline">
                                  View all →
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`relative px-4 py-2 transition-colors duration-300 text-sm font-medium tracking-wide group ${
                      isActive ? "text-gold-primary" : "text-white/80 hover:text-gold-primary"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                    <span className={`absolute bottom-1 left-4 right-4 h-px bg-linear-to-r from-gold-primary to-gold-secondary transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`} />
                  </Link>
                );
              })}

              {/* Click-to-call — high-intent legal traffic converts on the phone */}
              <a
                href={TEL_LINK}
                className="ml-2 px-3 py-2 flex items-center gap-2 text-gold-primary/90 hover:text-gold-primary transition-colors text-sm font-semibold"
                aria-label={`Call Judicium Arbitration on ${PHONE_DISPLAY}`}
              >
                <LawIcons.Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{PHONE_DISPLAY}</span>
                <span className="xl:hidden">Call</span>
              </a>

              <Link
                href="/contact"
                className="ml-1 px-5 py-2.5 bg-linear-to-r from-gold-primary to-gold-secondary text-bg-dark font-bold text-sm tracking-wide rounded-lg hover:shadow-lg hover:shadow-gold-primary/30 transition-all duration-300 hover:scale-[1.02] flex items-center gap-2"
              >
                <LawIcons.Handshake className="w-4 h-4" />
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-gold-primary hover:bg-gold-primary/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-current transform transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current transform transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-bg-dark border-l border-gold-primary/20 z-50 lg:hidden"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-[0.03]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #F0C246 1px, transparent 0)`,
                    backgroundSize: '24px 24px',
                  }}
                />
              </div>

              <div className="relative flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gold-primary/20 bg-bg-alt-dark/50">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/logo.jpeg"
                      alt="Judicium Arbitration Logo"
                      width={40}
                      height={40}
                      sizes="40px"
                      className="rounded-full border-2 border-gold-primary/40"
                    />
                    <div>
                      <div className="text-gold-primary font-bold text-base">JUDICIUM</div>
                      <div className="text-gold-secondary/70 text-[10px] tracking-widest">ARBITRATION</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-gold-primary hover:bg-gold-primary/10 rounded-lg transition-colors border border-gold-primary/20"
                    aria-label="Close menu"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 overflow-y-auto py-6 px-4">
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.06 }}
                      >
                        {item.label === "Practice Areas" ? (
                          <div className="bg-bg-alt-dark/50 rounded-xl border border-transparent overflow-hidden">
                            <div className="flex items-stretch">
                              <Link
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex-1 flex items-center gap-4 px-4 py-4 text-white/80 hover:text-gold-primary hover:bg-gold-primary/10 transition-all text-lg font-medium"
                              >
                                {item.label}
                              </Link>
                              <button
                                onClick={() => setMobilePracticeOpen((v) => !v)}
                                aria-label="Toggle practice areas list"
                                aria-expanded={mobilePracticeOpen}
                                className="px-4 flex items-center text-gold-primary/70 hover:text-gold-primary border-l border-gold-primary/10"
                              >
                                <svg className={`w-5 h-5 transition-transform ${mobilePracticeOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                            </div>
                            <AnimatePresence>
                              {mobilePracticeOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.25 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-2 pb-2 grid grid-cols-1 gap-0.5 max-h-64 overflow-y-auto">
                                    {practiceAreasData.map((area) => (
                                      <Link
                                        key={area.slug}
                                        href={`/practice-areas/${area.slug}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-white/65 hover:text-gold-primary hover:bg-gold-primary/10 transition-colors"
                                      >
                                        <span className="text-base shrink-0">{area.icon}</span>
                                        <span>{area.shortTitle ?? area.title}</span>
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-4 px-4 py-4 text-white/80 hover:text-gold-primary bg-bg-alt-dark/50 hover:bg-gold-primary/10 rounded-xl transition-all duration-300 text-lg font-medium border border-transparent hover:border-gold-primary/20"
                          >
                            {item.label}
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Menu Footer */}
                <div className="p-4 border-t border-gold-primary/20 bg-bg-alt-dark/50">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <a
                      href={TEL_LINK}
                      className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gold-primary/30 text-gold-primary font-semibold text-sm"
                      aria-label={`Call ${PHONE_DISPLAY}`}
                    >
                      <LawIcons.Phone className="w-4 h-4" />
                      Call
                    </a>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[#25D366]/40 text-[#25D366] font-semibold text-sm"
                    >
                      <LawIcons.WhatsApp className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-linear-to-r from-gold-primary to-gold-secondary text-bg-dark font-bold text-base tracking-wide rounded-xl shadow-lg shadow-gold-primary/20"
                  >
                    <LawIcons.Handshake className="w-5 h-5" />
                    Schedule Consultation
                  </Link>
                  <div className="mt-4 flex items-center justify-center gap-2 text-white/40 text-xs">
                    <LawIcons.Location className="w-4 h-4 text-gold-primary/60" />
                    <span>Serving 8 Cities Across North India</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
