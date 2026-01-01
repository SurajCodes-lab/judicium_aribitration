"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LawIcons } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "Contact", href: "/contact" },
  ];

  const practiceAreas = [
    { name: "Arbitration & ADR", href: "/practice-areas" },
    { name: "Corporate Law", href: "/practice-areas" },
    { name: "Banking & Finance", href: "/practice-areas" },
    { name: "Intellectual Property", href: "/practice-areas" },
    { name: "Real Estate", href: "/practice-areas" },
    { name: "Labour & Employment", href: "/practice-areas" },
  ];

  const locations = [
    "New Delhi (HQ)",
    "Gurgaon",
    "Noida",
    "Chandigarh",
    "Jaipur",
    "Panipat",
  ];

  return (
    <footer className="relative bg-[#080B0E] overflow-hidden">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-primary/40 to-transparent" />

      {/* Premium gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-gold-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-secondary/4 rounded-full blur-[120px]" />
      </div>

      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #F0C246 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Floating decorative icons */}
      <div className="absolute left-[5%] top-[20%] opacity-[0.06]">
        <LawIcons.Scales className="w-24 h-24 text-gold-primary" />
      </div>
      <div className="absolute right-[8%] bottom-[30%] opacity-[0.04]">
        <LawIcons.Pillar className="w-20 h-20 text-gold-primary" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.jpeg"
                  alt="Judicium Arbitration"
                  width={48}
                  height={48}
                  className="object-contain rounded-full border-2 border-gold-primary/30 group-hover:border-gold-primary/60 transition-colors"
                />
              </div>
              <div>
                <div className="text-gold-primary font-bold text-lg tracking-tight">JUDICIUM</div>
                <div className="text-gold-secondary/70 text-[10px] tracking-[0.2em]">ARBITRATION</div>
              </div>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Premier Arbitration & Alternative Dispute Resolution services across North India. Committed to excellence and professional dispute resolution.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#161B22] hover:bg-gold-primary/20 border border-gold-primary/20 hover:border-gold-primary/40 flex items-center justify-center text-gold-primary/60 hover:text-gold-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#161B22] hover:bg-gold-primary/20 border border-gold-primary/20 hover:border-gold-primary/40 flex items-center justify-center text-gold-primary/60 hover:text-gold-primary transition-all duration-300"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="mailto:Judiciumarbitration@gmail.com"
                className="w-10 h-10 rounded-lg bg-[#161B22] hover:bg-gold-primary/20 border border-gold-primary/20 hover:border-gold-primary/40 flex items-center justify-center text-gold-primary/60 hover:text-gold-primary transition-all duration-300"
                aria-label="Email"
              >
                <LawIcons.Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-gradient-to-r from-gold-primary to-transparent" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-gold-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gold-primary transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Practice Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-gradient-to-r from-gold-primary to-transparent" />
              Practice Areas
            </h3>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    className="text-white/50 hover:text-gold-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gold-primary transition-all duration-300 group-hover:w-4" />
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-gradient-to-r from-gold-primary to-transparent" />
              Our Locations
            </h3>

            <div className="flex flex-wrap gap-2 mb-6">
              {locations.map((location) => (
                <span
                  key={location}
                  className="px-3 py-1.5 bg-[#161B22] border border-gold-primary/20 rounded-lg text-xs text-white/70 hover:text-gold-primary hover:border-gold-primary/40 hover:bg-gold-primary/10 transition-all cursor-default"
                >
                  {location}
                </span>
              ))}
            </div>

            <div className="space-y-4 pt-4 border-t border-gold-primary/10">
              <a
                href="mailto:Judiciumarbitration@gmail.com"
                className="flex items-center gap-3 text-white/60 hover:text-gold-primary transition-colors text-sm group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-primary/20 to-gold-secondary/10 flex items-center justify-center text-gold-primary group-hover:from-gold-primary/30 group-hover:to-gold-secondary/20 transition-all border border-gold-primary/20">
                  <LawIcons.Mail className="w-5 h-5" />
                </div>
                <span className="break-all">Judiciumarbitration@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 text-white/60 text-sm">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-primary/20 to-gold-secondary/10 flex items-center justify-center text-gold-primary border border-gold-primary/20">
                  <LawIcons.Clock className="w-5 h-5" />
                </div>
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gold-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-white/50 text-xs sm:text-sm text-center sm:text-left">
              <LawIcons.Shield className="w-4 h-4 text-gold-primary/60" />
              <span>&copy; {currentYear} Judicium Arbitration. All rights reserved.</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/privacy-policy" className="text-white/50 hover:text-gold-primary transition-colors text-xs sm:text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-white/50 hover:text-gold-primary transition-colors text-xs sm:text-sm">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="text-white/50 hover:text-gold-primary transition-colors text-xs sm:text-sm">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
