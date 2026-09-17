import { SectionShell } from "@/components/ui/section-shell";
import { SectionHeading } from "@/components/home/section-heading";
import { surfaceCard } from "@/components/ui/surface-card";

const reasons = [
  {
    title: "Calm, judgment-free support",
    body: "When everything feels loud, Gemma aims to be a steady presence—so you can ask questions and decide next steps without pressure.",
  },
  {
    title: "Care that fits your family",
    body: "Plans start with your baby, your home, and your goals—not one-size-fits-all charts.",
  },
  {
    title: "Practical support for real life",
    body: "Experienced, evidence-informed care that still feels human—paced for how families actually live.",
  },
];

export function WhyChooseSection() {
  return (
    <SectionShell id="why-choose" background="subtle">
      <SectionHeading
        title="What you can expect when we work together"
        align="center"
      />
      <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
        {reasons.map((item) => (
          <li key={item.title}>
            <article
              className={`${surfaceCard} flex h-full flex-col border-l-[3px] border-l-harmony-green/20 pl-6 sm:pl-8`}
            >
              <h3 className="font-display text-lg font-normal text-foreground sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                {item.body}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
