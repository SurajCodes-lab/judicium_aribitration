import React from 'react';

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
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm uppercase tracking-wider';

  const variantStyles = {
    primary: 'bg-gold-primary hover:bg-gold-secondary text-bg-dark shadow-lg hover:shadow-xl hover:shadow-gold-primary/20',
    secondary: 'bg-transparent border-2 border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-bg-dark',
    outline: 'bg-transparent border border-foreground/20 text-foreground hover:border-gold-primary hover:text-gold-primary',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm',
    md: 'px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base',
    lg: 'px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
