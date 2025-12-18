import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export default function Section({ children, className = '', id, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 px-6 md:px-12 lg:px-20 ${dark ? 'bg-bg-alt-dark' : 'bg-bg-dark'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
