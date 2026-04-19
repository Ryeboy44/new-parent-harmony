import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionShell } from "@/components/ui/section-shell";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/data/site-cta";

export const metadata: Metadata = {
  title: "Postpartum app (preview)",
};

export default function ProductAppHomePage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <SectionShell background="cream" padding="tight">
        <div className="mx-auto max-w-2xl text-center md:max-w-[44rem]">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs">
            Freemium · In progress
          </p>
          <h1 className="mt-3 font-display text-[1.625rem] font-normal leading-[1.2] tracking-[-0.02em] text-foreground sm:text-3xl md:text-[2.125rem]">
            Your postpartum companion app
          </h1>
          <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted sm:mt-6 sm:text-base">
            This area is scaffolded for the upcoming MVP. Build features here
            gradually without affecting the marketing site on{" "}
            <span className="text-foreground/90">main</span>.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <ButtonLink href={PRIMARY_CTA_HREF} variant="primary">
              {PRIMARY_CTA_LABEL}
            </ButtonLink>
            <ButtonLink href="/" variant="secondary">
              Visit main site
            </ButtonLink>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
