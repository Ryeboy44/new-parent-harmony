import { SectionShell } from "@/components/ui/section-shell";

export function ServiceAreaSection() {
  return (
    <SectionShell
      id="service-area"
      background="white"
      padding="tight"
      className="border-t border-border-soft/40"
    >
      <div className="mx-auto max-w-2xl text-center md:max-w-[44rem]">
        <h2 className="font-display text-[1.5rem] font-normal leading-[1.2] tracking-[-0.02em] text-foreground sm:text-[1.75rem] md:text-[1.875rem]">
          Service Area
        </h2>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:mt-5 sm:text-base">
          New Parent Harmony provides in-home support throughout Montgomery
          County, including Silver Spring, Rockville, Bethesda, Kensington,
          Chevy Chase, Gaithersburg, Olney, Potomac, Wheaton, North Bethesda,
          Germantown, and surrounding areas.
        </p>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
          All New Parent Harmony services are also available virtually
          nationwide.
        </p>
      </div>
    </SectionShell>
  );
}
