import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Vertical rhythm between major sections */
  padding?: "default" | "tight" | "loose" | "pageIntro";
  background?: "cream" | "white" | "subtle";
};

const paddingMap = {
  default: "py-20 md:py-24 lg:py-28",
  tight: "py-14 md:py-16 lg:py-20",
  loose: "py-24 md:py-28 lg:py-32",
  /** Compact page header — avoids a full-height hero gap above the first content block. */
  pageIntro: "pt-10 pb-4 sm:pt-12 sm:pb-5 lg:pt-14 lg:pb-6",
};

const bgMap = {
  cream: "bg-cream",
  white: "bg-surface",
  subtle: "bg-green-wash/25",
};

export function SectionShell({
  id,
  children,
  className = "",
  padding = "default",
  background = "cream",
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`${paddingMap[padding]} ${bgMap[background]} ${className}`.trim()}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">{children}</div>
    </section>
  );
}
