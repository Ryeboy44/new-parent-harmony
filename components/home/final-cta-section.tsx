import { ButtonLink } from "@/components/ui/button-link";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/data/site-cta";

export function FinalCTASection() {
  return (
    <section
      id="contact"
      className="border-t border-border-soft/50 bg-green-wash/35 py-20 md:py-24 lg:py-28"
      aria-labelledby="final-cta-heading"
    >
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-3xl lg:px-10">
        <h2
          id="final-cta-heading"
          className="font-display text-[1.625rem] font-normal leading-[1.2] tracking-[-0.02em] text-foreground sm:text-3xl md:text-[2.125rem]"
        >
          You don&apos;t have to figure it all out alone
        </h2>
        <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted sm:mt-6 sm:text-base">
          If you&apos;re pregnant or in the thick of new parenthood, you
          deserve calm, experienced support tailored to your family. In a free
          15-minute chat, we&apos;ll talk through what you need and how I can
          help—with no pressure to commit.
        </p>
        <div className="mt-9 flex justify-center sm:mt-10">
          <ButtonLink href={PRIMARY_CTA_HREF}>{PRIMARY_CTA_LABEL}</ButtonLink>
        </div>
      </div>
    </section>
  );
}
