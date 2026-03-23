import { SectionShell } from "@/components/ui/section-shell";
import { SectionHeading } from "@/components/home/section-heading";
import { surfaceCard } from "@/components/ui/surface-card";

const reasons = [
  {
    title: "I show up calm and grounded",
    body: "When everything feels loud, I aim to be a steady presence—so you can breathe, ask questions, and decide next steps without pressure.",
  },
  {
    title: "I tailor plans to your real life",
    body: "We work from your baby, your home, and your goals—not generic scripts or one-size-fits-all charts that ignore what you already know.",
  },
  {
    title: "In-home or virtual—your call",
    body: "I support families across Montgomery County, MD and surrounding areas—beside you in person or through the screen, depending on what fits.",
  },
  {
    title: "Your values lead",
    body: "I'm respectful of how you want to feed, soothe, and bond—collaborative care that never asks you to leave yourself behind.",
  },
];

export function WhyChooseSection() {
  return (
    <SectionShell id="why-choose" background="subtle">
      <SectionHeading
        eyebrow="Why families work with me"
        title="What you can expect when we work together"
        description="Parents reach out when they want care that's evidence-informed and still human—flexible, respectful, and paced for real life."
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
