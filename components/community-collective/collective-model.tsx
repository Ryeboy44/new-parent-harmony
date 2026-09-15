import { SectionShell } from "@/components/ui/section-shell";
import { collectiveModel } from "@/data/community-collective-content";

export function CollectiveModel() {
  return (
    <SectionShell id="how-the-collective-works" background="subtle" padding="tight">
      <header className="max-w-2xl">
        <p className="mb-3 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs">
          {collectiveModel.eyebrow}
        </p>
        <h2 className="font-display text-[1.625rem] font-normal leading-[1.2] tracking-[-0.02em] text-foreground sm:text-3xl md:text-[2.125rem]">
          {collectiveModel.title}
        </h2>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
          {collectiveModel.intro}
        </p>
      </header>

      <ol className="mt-8 grid gap-6 sm:mt-10 lg:grid-cols-3 lg:gap-8">
        {collectiveModel.steps.map((step, index) => (
          <li key={step.title} className="min-w-0">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-harmony-green-muted">
              {index + 1}
            </p>
            <h3 className="mt-2 font-display text-lg font-normal leading-snug text-foreground sm:text-xl">
              {step.title}
            </h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
