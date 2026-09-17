import { SectionHeading } from "@/components/home/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { supporterPage } from "@/data/community-collective-content";

export function WhereSupportGoes() {
  const { whereSupportGoes } = supporterPage;

  return (
    <SectionShell id="where-support-goes" background="white" padding="tight">
      <SectionHeading
        eyebrow={whereSupportGoes.eyebrow}
        title={whereSupportGoes.title}
        description={whereSupportGoes.intro}
        compact
      />
      <ul className="mt-2 grid gap-x-10 gap-y-2.5 sm:grid-cols-2">
        {whereSupportGoes.items.map((item) => (
          <li
            key={item}
            className="border-l-2 border-clay/30 pl-4 text-[0.9375rem] leading-snug text-foreground sm:text-base"
          >
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">
        {whereSupportGoes.qualifier}
      </p>
    </SectionShell>
  );
}
