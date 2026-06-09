import Link from "next/link";

export interface Crumb {
  label: string;
  /** Omit href on the current (last) page. */
  href?: string;
}

/**
 * Visible breadcrumb trail (Week 10).
 *
 * Inner pages already emit BreadcrumbList JSON-LD; this renders the matching
 * human-visible trail. It improves orientation (users land deep from search),
 * shortens the click-path back up the hierarchy, and reinforces the same
 * keyword-rich anchor text the schema declares — all without touching meta.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-white/50">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-x-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-gold-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={isLast ? "text-gold-primary/90 font-medium" : ""}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span className="text-gold-primary/30" aria-hidden="true">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
