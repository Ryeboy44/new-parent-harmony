"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  COLLECTIVE_HREF,
  COLLECTIVE_REQUEST_HREF,
  COLLECTIVE_SUPPORT_HREF,
} from "@/data/community-collective-content";

const links = [
  { href: COLLECTIVE_HREF, label: "Community Collective" },
  { href: COLLECTIVE_REQUEST_HREF, label: "Request Support" },
  { href: COLLECTIVE_SUPPORT_HREF, label: "Support the Collective" },
] as const;

export function CollectivePageNav() {
  const pathname = usePathname();

  return (
    <nav
      className="border-b border-border-soft/40 bg-cream"
      aria-label="Community Collective pages"
    >
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2.5 sm:px-6 lg:px-10">
        {links.map((link) => {
          const current = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={current ? "page" : undefined}
              className={`whitespace-nowrap rounded-full px-3 py-2 text-sm transition-colors ${
                current
                  ? "bg-green-wash/70 font-medium text-foreground"
                  : "text-muted hover:bg-green-wash/35 hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
