import Link from "next/link";
import type { ReactNode } from "react";
import { buttonBase, buttonVariantClass } from "@/components/ui/button-classes";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const classes = `${buttonBase} ${buttonVariantClass[variant]} ${className}`.trim();

  const isHash = href.startsWith("#");
  const isMailto = href.startsWith("mailto:");
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  if (isHash || isMailto || isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
