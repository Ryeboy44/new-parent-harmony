import { SectionShell } from "@/components/ui/section-shell";

export function IntroTrustSection() {
  return (
    <SectionShell id="intro" background="white" padding="tight">
      <div className="mx-auto max-w-2xl text-center md:max-w-[44rem]">
        <p className="font-display text-xl font-normal leading-snug text-foreground sm:text-2xl md:text-[1.75rem] md:leading-tight">
          Hi, I&apos;m Gemma—founder of New Parent Harmony.
        </p>
        <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted sm:mt-6 sm:text-base">
          I&apos;m a certified postpartum doula, lactation counselor, and
          pediatric sleep consultant with over 20 years of experience
          supporting families.
        </p>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:mt-5 sm:text-base">
          I walk beside families during the tender postpartum season with a
          steady, judgment-free presence. Whether you&apos;re healing, learning
          to feed your baby, or craving more sleep, my role is to help you feel
          grounded, informed, and genuinely supported—not rushed or corrected.
        </p>
      </div>
    </SectionShell>
  );
}
