import type { ReactNode } from "react";
import { SectionShell } from "@/components/shared/ui/section-shell";
import { surfaceCard } from "@/components/shared/ui/surface-card";

const eyebrowClass =
  "text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs";

type MemberAuthCardProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
};

export function MemberAuthCard({
  title,
  subtitle,
  children,
  footer,
}: MemberAuthCardProps) {
  return (
    <SectionShell background="cream" padding="tight">
      <div className={`${surfaceCard} mx-auto max-w-md border-harmony-green/10 bg-gradient-to-b from-surface to-cream-deep/30 sm:p-10`}>
        <p className={eyebrowClass}>Member app</p>
        <h1 className="mt-3 font-display text-2xl font-normal text-foreground sm:text-3xl">
          {title}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
          {subtitle}
        </p>
        <div className="mt-8 space-y-4">{children}</div>
        {footer ? <div className="mt-8 border-t border-border-soft/60 pt-6">{footer}</div> : null}
      </div>
    </SectionShell>
  );
}
