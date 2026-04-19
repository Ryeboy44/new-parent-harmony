"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MEMBER_NAV_ITEMS } from "@/lib/content/member-app";

const linkBase =
  "inline-flex min-h-10 shrink-0 snap-start items-center rounded-xl px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-cream-deep/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harmony-green-deep/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

export function MemberSubNav() {
  const pathname = usePathname() || "";

  return (
    <nav
      aria-label="Member app sections"
      className="border-b border-border-soft/50 bg-surface/90"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <ul className="flex snap-x snap-mandatory gap-1 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:overflow-visible sm:gap-2 sm:py-3 [&::-webkit-scrollbar]:hidden">
          {MEMBER_NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/app"
                ? pathname === "/app"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${linkBase} ${isActive ? "bg-cream-deep text-foreground shadow-soft" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
