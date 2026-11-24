"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LawIcons } from "./Icons";
import { practiceAreasData } from "@/data/practiceAreas";
import { cityOffices } from "@/data/localBusinessSchemas";
import { serviceLines } from "@/data/serviceLines";
import { formatTemplates } from "@/data/formatTemplates";
import { TEL_LINK, PHONE_DISPLAY, WHATSAPP_LINK } from "@/data/contactInfo";

/**
 * Site header.
 *
 * The nav is deliberately five top-level items. It previously carried eight flat
 * links plus a phone number and a CTA on one row, which crowded the bar at laptop
 * widths and read as a blog rather than a law firm. Grouping into dropdowns keeps
 * every destination one hop away — nothing was removed from the site's
 * navigation — while giving the bar room to breathe:
 *
 *   About ▾          About the Firm · Our Advocates
 *   Practice Areas ▾ the 20-area mega-menu (unchanged)
 *   Locations ▾      the 8 city pages + "All locations"
 *   Insights ▾       Insights · Glossary
 *   Contact          direct link
 *
 * "Home" is dropped as a nav item because the logo already links there — the
 * convention on every firm site — which buys back a slot without losing a route.
 *
 * Internal-linking note: the dropdowns put all 20 practice areas and all 8 city
 * pages in the DOM of every page, so site-wide crawl depth to those money pages
 * stays at one click from anywhere.
 */

/** A dropdown's link list. */
interface NavChild {
  label: string;
  href: string;
  /** Optional second line shown under the label in the panel. */
  detail?: string;
}

interface NavItem {
  label: string;
  href: string;
  /** Renders as a dropdown when present. */
  children?: NavChild[];
  /** The 20-area mega-menu gets its own wider, icon-led panel. */
  mega?: boolean;
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  /** Label of the open desktop dropdown, or null. */
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  /** Label of the expanded mobile accordion, or null. */
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  // Hover-intent so moving the cursor between trigger and panel doesn't flicker.
  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const closeDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile panel when the viewport grows past the lg breakpoint.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dismiss the desktop dropdown on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Route change closes every open menu. Adjusted during render rather than in
  // an effect — the React-documented pattern for resetting state when a value
  // changes, and it avoids the cascading re-render an effect would cause.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpenMenu(null);
    setIsMobileMenuOpen(false);
    setOpenMobileGroup(null);
  }

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navItems: NavItem[] = [
    {
      label: "About",
      href: "/about",
      children: [
        {
          label: "About the Firm",
          href: "/about",
          detail: "Our story, values and track record",
        },
        {
          label: "Our Advocates",
          href: "/team",
          detail: "Partners, senior advocates and associates",
        },
      ],
    },
    { label: "Practice Areas", href: "/practice-areas", mega: true },
    {
      label: "Services",
      href: "/services",
      children: serviceLines.map((s) => ({
        label: s.shortTitle,
        href: `/services/${s.slug}`,
        detail: s.title,
      })),
    },
    {
      label: "Formats",
      href: "/formats",
      children: [
        {
          label: "All formats",
          href: "/formats",
          detail: "16 notices and replies, section by section",
        },
        ...formatTemplates.slice(0, 7).map((f) => ({
          label: f.shortTitle,
          href: `/formats/${f.slug}`,
          detail: f.documentType,
        })),
      ],
    },
    {
      label: "Locations",
      href: "/locations",
      children: [
        ...cityOffices.map((office) => ({
          label: office.city,
          href: `/locations/${office.slug}`,
          detail: office.isHeadquarters ? "Headquarters" : undefined,
        })),
        { label: "All locations", href: "/locations" },
      ],
    },
    {
      label: "Insights",
      href: "/insights",
      children: [
        {
          label: "Insights",
          href: "/insights",
          detail: "Analysis of Indian arbitration & ADR",
        },
        {
          label: "Glossary",
          href: "/glossary",
          detail: "30 key legal terms, defined",
        },
      ],
    },
    { label: "Contact", href: "/contact" },
  ];

  const isItemActive = (item: NavItem) => {
    if (pathname === item.href) return true;
    if (item.href !== "/" && pathname.startsWith(item.href)) return true;
    return Boolean(
      item.children?.some(
        (c) => pathname === c.href || (c.href !== "/" && pathname.startsWith(c.href))
      )
    );
  };

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
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20 gap-4">
            {/* Logo — also the Home link */}
            <Link
              href="/"
              className="flex items-center gap-3 group shrink-0"
              aria-label="Judicium Arbitration — home"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-13 lg:h-13 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.jpeg"
                  alt="Judicium Arbitration - Leading Arbitration & ADR Firm in North India"
                  width={52}
                  height={52}
                  priority
                  sizes="(max-width: 640px) 40px, (max-width: 1024px) 48px, 52px"
                  className="object-contain rounded-full border-2 border-gold-primary/40 shadow-lg shadow-gold-primary/10"
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-gold-primary font-bold text-base lg:text-lg tracking-tight leading-tight">
                  JUDICIUM
                </div>
                <div className="text-gold-secondary/80 text-[9px] lg:text-[10px] tracking-[0.22em] leading-tight">
                  ARBITRATION
                </div>
              </div>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              {navItems.map((item) => {
                const isActive = isItemActive(item);
                const hasPanel = Boolean(item.children || item.mega);
                const isOpen = openMenu === item.label;

                const underline = (
                  <span
                    className={`absolute bottom-1.5 left-3 right-3 h-px bg-linear-to-r from-gold-primary to-gold-secondary transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                );

                if (!hasPanel) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`relative px-3 xl:px-4 py-2 transition-colors duration-300 text-sm font-medium tracking-wide group ${
                        isActive
                          ? "text-gold-primary"
                          : "text-white/80 hover:text-gold-primary"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                      {underline}
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => openDropdown(item.label)}
                    onMouseLeave={closeDropdown}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-3 xl:px-4 py-2 flex items-center gap-1.5 transition-colors duration-300 text-sm font-medium tracking-wide group ${
                        isActive
                          ? "text-gold-primary"
                          : "text-white/80 hover:text-gold-primary"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                      aria-expanded={isOpen}
                      onFocus={() => openDropdown(item.label)}
                    >
                      {item.label}
                      <svg
                        className={`w-3 h-3 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      {underline}
                    </Link>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className={`absolute top-full pt-3 ${
                            item.mega
                              ? "left-1/2 -translate-x-1/2 w-[min(46rem,90vw)]"
                              : "left-0 w-[min(20rem,85vw)]"
                          }`}
                        >
                          <div className="bg-bg-alt-dark/98 backdrop-blur-xl border border-gold-primary/20 rounded-2xl shadow-2xl shadow-black/40 p-3">
                            {item.mega ? (
                              <>
                                <div className="grid grid-cols-2 xl:grid-cols-3 gap-1">
                                  {practiceAreasData.map((area) => (
                                    <Link
                                      key={area.slug}
                                      href={`/practice-areas/${area.slug}`}
                                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/75 hover:text-gold-primary hover:bg-gold-primary/10 transition-colors"
                                    >
                                      <span className="text-lg shrink-0">
                                        {area.icon}
                                      </span>
                                      <span className="leading-tight">
                                        {area.shortTitle ?? area.title}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                                <div className="mt-3 pt-3 border-t border-gold-primary/10 flex items-center justify-between px-2">
                                  <span className="text-xs text-white/40">
                                    20+ practice areas across North India
                                  </span>
                                  <Link
                                    href="/practice-areas"
                                    className="text-sm font-semibold text-gold-primary hover:underline"
                                  >
                                    View all →
                                  </Link>
                                </div>
                              </>
                            ) : (
                              <div className="grid grid-cols-1 gap-0.5">
                                {item.children!.map((child) => {
                                  const childActive = pathname === child.href;
                                  return (
                                    <Link
                                      key={`${child.label}-${child.href}`}
                                      href={child.href}
                                      className={`block px-3 py-2.5 rounded-lg transition-colors ${
                                        childActive
                                          ? "bg-gold-primary/10 text-gold-primary"
                                          : "text-white/80 hover:text-gold-primary hover:bg-gold-primary/10"
                                      }`}
                                    >
                                      <span className="block text-sm font-medium leading-tight">
                                        {child.label}
                                      </span>
                                      {child.detail && (
                                        <span className="mt-0.5 block text-[11px] text-white/40 leading-snug">
                                          {child.detail}
                                        </span>
                                      )}
                                    </Link>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Divider before the conversion controls */}
              <span
                className="mx-2 h-6 w-px bg-gold-primary/20"
                aria-hidden="true"
              />

              {/* Click-to-call — high-intent legal traffic converts on the phone */}
              <a
                href={TEL_LINK}
                className="px-2.5 py-2 flex items-center gap-1.5 text-gold-primary/90 hover:text-gold-primary transition-colors text-sm font-semibold"
                aria-label={`Call Judicium Arbitration on ${PHONE_DISPLAY}`}
              >
                <LawIcons.Phone className="w-4 h-4" />
                <span className="hidden 2xl:inline">{PHONE_DISPLAY}</span>
              </a>

              <Link
                href="/contact"
                className="ml-1 px-4 xl:px-5 py-2.5 bg-linear-to-r from-gold-primary to-gold-secondary text-bg-dark font-bold text-sm tracking-wide rounded-lg hover:shadow-lg hover:shadow-gold-primary/30 transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 whitespace-nowrap"
              >
                <LawIcons.Handshake className="w-4 h-4" />
                Consultation
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-gold-primary hover:bg-gold-primary/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
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

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-bg-dark border-l border-gold-primary/20 z-50 lg:hidden"
            >
              <div className="absolute inset-0 opacity-[0.03]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #F0C246 1px, transparent 0)`,
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>

              <div className="relative flex flex-col h-full">
                {/* Panel header */}
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
                      <div className="text-gold-primary font-bold text-base">
                        JUDICIUM
                      </div>
                      <div className="text-gold-secondary/70 text-[10px] tracking-widest">
                        ARBITRATION
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-gold-primary hover:bg-gold-primary/10 rounded-lg transition-colors border border-gold-primary/20"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Items — same five groups, as accordions */}
                <nav className="flex-1 overflow-y-auto py-5 px-4">
                  <div className="space-y-2">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.02 }}
                    >
                      <Link
                        href="/"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-4 px-4 py-3.5 text-white/80 hover:text-gold-primary bg-bg-alt-dark/50 hover:bg-gold-primary/10 rounded-xl transition-all text-base font-medium border border-transparent hover:border-gold-primary/20"
                      >
                        Home
                      </Link>
                    </motion.div>

                    {navItems.map((item, index) => {
                      const children: NavChild[] = item.mega
                        ? practiceAreasData.map((a) => ({
                            label: a.shortTitle ?? a.title,
                            href: `/practice-areas/${a.slug}`,
                          }))
                        : item.children ?? [];
                      const expanded = openMobileGroup === item.label;

                      return (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index + 1) * 0.05 }}
                        >
                          {children.length === 0 ? (
                            <Link
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-4 px-4 py-3.5 text-white/80 hover:text-gold-primary bg-bg-alt-dark/50 hover:bg-gold-primary/10 rounded-xl transition-all text-base font-medium border border-transparent hover:border-gold-primary/20"
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <div className="bg-bg-alt-dark/50 rounded-xl overflow-hidden">
                              <div className="flex items-stretch">
                                <Link
                                  href={item.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="flex-1 flex items-center gap-4 px-4 py-3.5 text-white/80 hover:text-gold-primary hover:bg-gold-primary/10 transition-all text-base font-medium"
                                >
                                  {item.label}
                                </Link>
                                <button
                                  onClick={() =>
                                    setOpenMobileGroup(
                                      expanded ? null : item.label
                                    )
                                  }
                                  aria-label={`Toggle ${item.label} list`}
                                  aria-expanded={expanded}
                                  className="px-4 flex items-center text-gold-primary/70 hover:text-gold-primary border-l border-gold-primary/10"
                                >
                                  <svg
                                    className={`w-5 h-5 transition-transform ${
                                      expanded ? "rotate-180" : ""
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19 9l-7 7-7-7"
                                    />
                                  </svg>
                                </button>
                              </div>

                              <AnimatePresence>
                                {expanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="px-2 pb-2 grid grid-cols-1 gap-0.5 max-h-64 overflow-y-auto">
                                      {children.map((child) => (
                                        <Link
                                          key={`${child.label}-${child.href}`}
                                          href={child.href}
                                          onClick={() =>
                                            setIsMobileMenuOpen(false)
                                          }
                                          className="px-4 py-2.5 rounded-lg text-sm text-white/65 hover:text-gold-primary hover:bg-gold-primary/10 transition-colors"
                                        >
                                          {child.label}
                                        </Link>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </nav>

                {/* Panel footer */}
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
