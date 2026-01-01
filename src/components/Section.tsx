"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'default' | 'dark' | 'gold' | 'gradient';
  showPattern?: boolean;
  showAccents?: boolean;
}

export default function Section({
  children,
  className = '',
  id,
  variant = 'default',
  showPattern = true,
  showAccents = true
}: SectionProps) {

  const bgClasses = {
    default: 'bg-[#0D1117]',
    dark: 'bg-[#080B0E]',
    gold: 'bg-gradient-to-br from-[#1a1510] via-[#0D1117] to-[#0D1117]',
    gradient: 'bg-gradient-to-b from-[#161B22] via-[#0D1117] to-[#161B22]'
  };

  return (
    <section
      id={id}
      className={`relative py-16 sm:py-20 lg:py-24 overflow-hidden ${bgClasses[variant]} ${className}`}
    >
      {/* Premium gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-primary/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold-secondary/6 rounded-full blur-[120px]" />
      </div>

      {/* Visible dot pattern */}
      {showPattern && (
        <div className="absolute inset-0 opacity-[0.06]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #F0C246 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          />
        </div>
      )}

      {/* Top and bottom accent lines */}
      {showAccents && (
        <>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-primary/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" />
        </>
      )}

      {/* Side accent lines */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gold-primary/25 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold-primary/25 to-transparent" />

      {/* Corner accents */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gold-primary/30" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-gold-primary/30" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-gold-primary/30" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gold-primary/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
