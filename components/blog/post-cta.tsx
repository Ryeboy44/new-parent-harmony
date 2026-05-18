import { ButtonLink } from "@/components/ui/button-link";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/data/site-cta";

export function PostCta() {
  return (
    <section
      className="mt-14 rounded-2xl border border-harmony-green/20 bg-gradient-to-b from-green-wash/45 via-white to-white px-6 py-8 sm:mt-16 sm:px-8 sm:py-10"
      aria-labelledby="post-cta-heading"
    >
      <h2
        id="post-cta-heading"
        className="font-display text-xl font-normal text-foreground sm:text-2xl"
      >
        Need support that fits your real life?
      </h2>
      <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-muted sm:text-base">
        Whether you are preparing for postpartum, navigating feeding challenges, or
        feeling stuck with sleep, you do not have to figure it all out alone.
      </p>
      <div className="mt-7 sm:mt-8">
        <ButtonLink href={PRIMARY_CTA_HREF}>{PRIMARY_CTA_LABEL}</ButtonLink>
      </div>
    </section>
  );
}
