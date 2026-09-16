import Image from "next/image";
import { gemmaPortraitImage } from "@/data/site-images";
import { SectionShell } from "@/components/ui/section-shell";
import { ButtonLink } from "@/components/ui/button-link";

/** Intrinsic size of `public/images/gemma-portrait.jpg` (updates if you replace the file). */
const GEMMA_PORTRAIT_WIDTH = 2838;
const GEMMA_PORTRAIT_HEIGHT = 4096;

type AboutGemmaPreviewProps = {
  /** Homepage uses a short intro; the About page keeps the full preview. */
  compact?: boolean;
};

export function AboutGemmaPreview({ compact = false }: AboutGemmaPreviewProps) {
  return (
    <SectionShell id="about" background="cream">
      <div
        className={`grid gap-12 lg:grid-cols-2 lg:gap-16 ${
          compact ? "lg:items-start" : "items-center"
        }`}
      >
        <div
          className={`mx-auto w-full min-w-0 max-w-sm lg:mx-0 ${
            compact ? "lg:max-w-[28rem]" : "lg:max-w-none"
          }`}
        >
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
          {compact ? (
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs">
              About
            </p>
          ) : null}
          <h2
            className={`${compact ? "mt-3" : ""} font-display text-[1.625rem] font-normal leading-[1.2] tracking-[-0.02em] text-foreground sm:text-3xl md:text-[2.125rem]`.trim()}
          >
            About Gemma
          </h2>
          {compact ? (
            <>
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted sm:mt-6 sm:text-base">
                Gemma is the founder of New Parent Harmony—a certified
                postpartum doula, lactation counselor, and pediatric sleep
                consultant.
              </p>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                She offers calm, practical support for families through
                postpartum recovery, feeding, and infant and toddler sleep.
              </p>
            </>
          ) : (
            <>
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted sm:mt-6 sm:text-base">
                Gemma is a postpartum and family support specialist with years
                of experience helping parents with recovery, feeding decisions
                and sleep, without losing sight of what matters to each
                individual family. Her approach blends hands-on care, clear
                education and emotional steadiness, helping make the harder days
                and nights feel a little more manageable.
              </p>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                Based in Montgomery County, MD and serving surrounding areas,
                Gemma works with families locally and virtually, always
                prioritizing safety, respect and confidence over perfection.
              </p>
            </>
          )}
          <div className="mt-9 sm:mt-10">
            <ButtonLink
              href={compact ? "/about" : "/services#about-gemma"}
              variant="secondary"
              className={compact ? "w-full sm:w-auto" : undefined}
            >
              {compact ? "Meet Gemma" : "Learn More About Gemma"}
            </ButtonLink>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
