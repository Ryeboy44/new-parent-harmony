import { SectionShell } from "@/components/ui/section-shell";
import { SectionHeading } from "@/components/home/section-heading";
import { surfaceCard } from "@/components/ui/surface-card";

const reasons = [
  {
    title: "Calm, grounded support",
    body: "A steady presence when everything feels loud—so you can breathe, ask questions, and make choices without pressure.",
  },
  {
    title: "Practical, personalized guidance",
    body: "Plans that fit your baby, your home, and your goals—not generic scripts or one-size-fits-all sleep charts.",
  },
  {
    title: "In-home and virtual care",
    body: "Flexible options across Montgomery County and beyond, whether you want someone beside you or support through the screen.",
  },
  {
    title: "Honors your parenting values",
    body: "Respectful of how you want to feed, soothe, and bond—collaborative care that never asks you to leave yourself behind.",
  },
];

export function WhyChooseSection() {
  return (
    <SectionShell id="why-choose" background="subtle">
      <SectionHeading
        eyebrow="Why families choose us"
        title="Why families choose New Parent Harmony"
        description="Parents come here when they want evidence-informed care that still feels human, flexible, and kind."
        align="center"
      />
      <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8">
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
