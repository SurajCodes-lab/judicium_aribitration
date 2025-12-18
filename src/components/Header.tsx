"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bg-dark/95 backdrop-blur-lg shadow-lg border-b border-gold-primary/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex items-center justify-between py-1">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 sm:gap-3 md:gap-4 group shrink-0">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.jpeg"
                alt="Judicium Arbitration"
                width={72}
                height={72}
                className="object-contain rounded-full border-2 border-gold-primary/30"
              />
            </div>
            <div>
              <div className="text-gold-primary font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight leading-tight">JUDICIUM</div>
              <div className="text-gold-secondary text-[10px] sm:text-xs md:text-sm tracking-widest leading-tight">ARBITRATION</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-gold-primary transition-colors duration-300 text-xs xl:text-sm font-medium uppercase tracking-wider relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-4 xl:px-6 py-2 xl:py-2.5 bg-gold-primary text-bg-dark font-semibold text-xs xl:text-sm uppercase tracking-wider rounded-md hover:bg-gold-secondary transition-all duration-300 hover:shadow-lg hover:shadow-gold-primary/20 whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gold-primary hover:bg-gold-primary/10 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-3 sm:py-4 border-t border-gold-primary/20 animate-fadeIn">
            <div className="flex flex-col gap-2 sm:gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 sm:px-4 py-2.5 sm:py-3 text-foreground/80 hover:text-gold-primary hover:bg-gold-primary/5 rounded-md transition-all duration-300 text-sm font-medium uppercase tracking-wider"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mx-3 sm:mx-4 mt-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gold-primary text-bg-dark font-semibold text-sm uppercase tracking-wider rounded-md hover:bg-gold-secondary transition-all duration-300 text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
