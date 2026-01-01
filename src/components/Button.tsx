"use client";

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center font-semibold
    transition-all duration-300 ease-out
    uppercase tracking-wider
    relative overflow-hidden
    focus:outline-none focus:ring-2 focus:ring-gold-primary/50 focus:ring-offset-2 focus:ring-offset-bg-dark
  `;

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-gold-primary to-gold-secondary
      text-bg-dark
      shadow-lg shadow-gold-primary/20
      hover:shadow-xl hover:shadow-gold-primary/30
      hover:scale-[1.02]
      active:scale-[0.98]
      rounded-sm
    `,
    secondary: `
      bg-transparent
      border-2 border-gold-primary/80
      text-gold-primary
      hover:bg-gold-primary hover:text-bg-dark
      hover:border-gold-primary
      hover:shadow-lg hover:shadow-gold-primary/20
      active:scale-[0.98]
      rounded-sm
    `,
    outline: `
      bg-transparent
      border border-white/20
      text-white/80
      hover:border-gold-primary/60 hover:text-gold-primary
      hover:bg-gold-primary/5
      active:scale-[0.98]
      rounded-sm
    `,
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-2',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base gap-3',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.replace(/\s+/g, ' ').trim();

  if (href) {
    // Check if it's an external link or anchor
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
      return (
        <a href={href} className={combinedStyles}>
          {children}
        </a>
      );
    }
    // Internal link - use Next.js Link
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
