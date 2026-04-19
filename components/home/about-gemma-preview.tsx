import Image from "next/image";
import { gemmaPortraitImage } from "@/data/site-images";
import { SectionShell } from "@/components/shared/ui/section-shell";
import { ButtonLink } from "@/components/shared/ui/button-link";

/** Intrinsic size of `public/images/gemma-portrait.jpg` (updates if you replace the file). */
const GEMMA_PORTRAIT_WIDTH = 2838;
const GEMMA_PORTRAIT_HEIGHT = 4096;

export function AboutGemmaPreview() {
  return (
    <SectionShell id="about" background="cream">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="mx-auto w-full min-w-0 max-w-sm lg:mx-0 lg:max-w-none">
          <Image
            src={gemmaPortraitImage}
            alt="Gemma, founder of New Parent Harmony, postpartum doula, lactation counselor, and pediatric sleep consultant"
            width={GEMMA_PORTRAIT_WIDTH}
            height={GEMMA_PORTRAIT_HEIGHT}
            className="h-auto w-full rounded-2xl object-cover"
            sizes="(max-width: 1024px) min(100vw - 2rem, 24rem), min(50vw - 4rem, 36rem)"
          />
        </div>

        <div className="min-w-0 lg:py-2">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs">
            About
          </p>
          <h2 className="mt-3 font-display text-[1.625rem] font-normal leading-[1.2] tracking-[-0.02em] text-foreground sm:text-3xl md:text-[2.125rem]">
            Meet Gemma
          </h2>
          <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted sm:mt-6 sm:text-base">
            I&apos;m a postpartum and family support specialist with years of
            experience helping parents navigate recovery, feeding decisions,
            and sleep without losing sight of what matters to you. My approach
            blends hands-on care, clear education, and emotional steadiness—so
            you never feel like you&apos;re facing the hard nights alone.
          </p>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
            Based in Montgomery County, MD and surrounding areas, I work with
            families locally and virtually, always prioritizing safety, respect,
            and confidence over perfection.
          </p>
          <div className="mt-9 sm:mt-10">
            <ButtonLink href="/services#about-gemma" variant="secondary">
              Learn More About Gemma
            </ButtonLink>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
