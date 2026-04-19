import type { ReactNode } from "react";
import { SectionShell } from "@/components/shared/ui/section-shell";

type MemberPlaceholderSectionProps = {
  title: string;
  body: string;
  children?: ReactNode;
};

export function MemberPlaceholderSection({
  title,
  body,
  children,
}: MemberPlaceholderSectionProps) {
  return (
    <SectionShell background="cream" padding="tight">
      <div className="mx-auto max-w-2xl">
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs">
          Member app
        </p>
        <h1 className="mt-3 font-display text-[1.625rem] font-normal leading-[1.2] tracking-[-0.02em] text-foreground sm:text-3xl md:text-[2.125rem]">
          {title}
        </h1>
        <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted sm:mt-6 sm:text-base">
          {body}
        </p>
        {children}
      </div>
    </SectionShell>
  );
}
