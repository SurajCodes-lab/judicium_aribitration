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
  /**
   * Button element type. Defaults to "button" so a Button placed inside a form
   * never submits it by accident — pass "submit" deliberately. Without this the
   * contact form had to use a raw <button>, so the most important CTA on the
   * site was the one that did not share the button styling.
   */
  type?: 'button' | 'submit' | 'reset';
  /** Shows a spinner and blocks further clicks — prevents double submissions. */
  loading?: boolean;
  disabled?: boolean;
  /** Accessible name when the visible label is not descriptive enough. */
  'aria-label'?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  loading = false,
  disabled = false,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const isInert = loading || disabled;
  const baseStyles = `
    inline-flex items-center justify-center font-semibold
    transition-all duration-300 ease-out
    uppercase tracking-wider
    relative overflow-hidden
    focus:outline-none focus:ring-2 focus:ring-gold-primary/50 focus:ring-offset-2 focus:ring-offset-bg-dark
  `;

  const variantStyles = {
    primary: `
      bg-linear-to-r from-gold-primary to-gold-secondary
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

  const stateStyles = isInert
    ? 'opacity-60 cursor-not-allowed pointer-events-none'
    : '';

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${stateStyles} ${className}`.replace(/\s+/g, ' ').trim();

  const content = loading ? (
    <>
      <svg
        className="animate-spin w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
      </svg>
      <span>{children}</span>
    </>
  ) : (
    children
  );

  if (href) {
    // Check if it's an external link or anchor
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
      return (
        <a
          href={href}
          className={combinedStyles}
          aria-label={ariaLabel}
          aria-disabled={isInert || undefined}
        >
          {content}
        </a>
      );
    }
    // Internal link - use Next.js Link
    return (
      <Link
        href={href}
        className={combinedStyles}
        aria-label={ariaLabel}
        aria-disabled={isInert || undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      disabled={isInert}
      aria-busy={loading || undefined}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
