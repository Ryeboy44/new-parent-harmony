import { SectionShell } from "@/components/shared/ui/section-shell";
import { ButtonLink } from "@/components/shared/ui/button-link";

export function CoffeeMorningSection() {
  return (
    <SectionShell
      id="coffee-mornings"
      background="white"
      padding="tight"
      className="border-y border-border-soft/35"
    >
      <div className="mx-auto max-w-xl text-center md:max-w-2xl">
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs">
          Community
        </p>
        <h2 className="mt-3 font-display text-xl font-normal leading-snug text-foreground sm:text-2xl md:text-[1.75rem] md:leading-tight">
          Join a Coffee Morning
        </h2>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:mt-5 sm:text-base">
          A relaxed space to connect with other moms, share experiences, and
          feel supported in your journey—no pitch, just warmth.
        </p>
        <div className="mt-7 sm:mt-8">
          <ButtonLink href="/contact" variant="secondary">
            Get details
          </ButtonLink>
        </div>
      </div>
    </SectionShell>
  );
}
