"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LawIcons } from "./Icons";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-bg-dark/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-gold-primary/10"
            : "bg-gradient-to-b from-black/50 to-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.jpeg"
                  alt="Judicium Arbitration"
                  width={56}
                  height={56}
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
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative px-4 py-2 text-white/80 hover:text-gold-primary transition-colors duration-300 text-sm font-medium tracking-wide group"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-gold-primary to-gold-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-gold-primary to-gold-secondary text-bg-dark font-bold text-sm tracking-wide rounded-lg hover:shadow-lg hover:shadow-gold-primary/30 transition-all duration-300 hover:scale-[1.02] flex items-center gap-2"
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
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#0D1117] border-l border-gold-primary/20 z-50 lg:hidden"
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
                <div className="flex items-center justify-between p-4 border-b border-gold-primary/20 bg-[#161B22]/50">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/logo.jpeg"
                      alt="Judicium"
                      width={40}
                      height={40}
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
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-4 px-4 py-4 text-white/80 hover:text-gold-primary bg-[#161B22]/50 hover:bg-gold-primary/10 rounded-xl transition-all duration-300 text-lg font-medium border border-transparent hover:border-gold-primary/20"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Menu Footer */}
                <div className="p-4 border-t border-gold-primary/20 bg-[#161B22]/50">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-gold-primary to-gold-secondary text-bg-dark font-bold text-base tracking-wide rounded-xl shadow-lg shadow-gold-primary/20"
                  >
                    <LawIcons.Handshake className="w-5 h-5" />
                    Schedule Consultation
                  </Link>
                  <div className="mt-4 flex items-center justify-center gap-2 text-white/40 text-xs">
                    <LawIcons.Location className="w-4 h-4 text-gold-primary/60" />
                    <span>Serving Delhi NCR, Chandigarh, Jaipur & Panipat</span>
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
