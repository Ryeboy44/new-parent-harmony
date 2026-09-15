import { ButtonLink } from "@/components/ui/button-link";
import {
  COLLECTIVE_HREF,
  requestSupportPage,
} from "@/data/community-collective-content";

export function RequestSupportHero() {
  return (
    <section
      className="animate-fade-up-soft bg-cream"
      aria-labelledby="request-support-heading"
    >
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-14">
        <p className="mb-4 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:mb-5 sm:text-xs">
          {requestSupportPage.eyebrow}
        </p>
        <h1
          id="request-support-heading"
          className="font-display text-[1.75rem] font-normal leading-[1.18] tracking-[-0.03em] text-foreground sm:text-4xl md:text-[2.5rem] md:leading-[1.14]"
        >
          {requestSupportPage.title}
        </h1>
        <p className="mt-5 font-display text-xl font-normal leading-snug text-harmony-green-deep sm:mt-6 sm:text-2xl">
          {requestSupportPage.tagline}
        </p>
        {requestSupportPage.paragraphs.map((paragraph, index) => (
          <p
            key={paragraph.slice(0, 40)}
            className={`max-w-2xl text-[0.9375rem] leading-relaxed text-muted sm:text-base ${
              index === 0 ? "mt-5 sm:mt-6" : "mt-4"
            }`}
          >
            {paragraph}
          </p>
        ))}

        <aside
          className="mt-6 rounded-2xl border border-harmony-green/15 bg-green-wash/40 px-5 py-4 sm:mt-8 sm:px-6"
          aria-label="Reassurance"
        >
          <p className="text-[0.9375rem] font-medium leading-snug text-foreground sm:text-base">
            {requestSupportPage.calloutTitle}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
            {requestSupportPage.calloutBody}
          </p>
        </aside>

        <p className="mt-5">
          <ButtonLink href={COLLECTIVE_HREF} variant="ghost" className="px-0">
            {requestSupportPage.learnMoreLabel}
          </ButtonLink>
        </p>
      </div>
    </section>
  );
}
