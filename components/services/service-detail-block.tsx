import type { ServiceDetail } from "@/data/services-page-content";
import { ButtonLink } from "@/components/ui/button-link";
import { surfaceCard } from "@/components/ui/surface-card";

const pricingBoxClass =
  "mt-8 rounded-xl border border-harmony-green/25 bg-gradient-to-b from-green-wash/50 via-white to-white px-5 py-5 ring-1 ring-harmony-green/10 sm:px-6 sm:py-6";

type ServiceDetailBlockProps = {
  service: ServiceDetail;
  variant?: "cream" | "white" | "subtle";
};

const sectionBg = {
  cream: "bg-cream",
  white: "bg-surface",
  subtle: "bg-green-wash/20",
};

export function ServiceDetailBlock({
  service,
  variant = "white",
}: ServiceDetailBlockProps) {
  return (
    <section
      id={service.id}
      className={`scroll-mt-28 border-t border-border-soft/40 py-16 md:py-20 lg:py-24 ${sectionBg[variant]} animate-fade-up-soft`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <article className={`${surfaceCard} mx-auto max-w-3xl border-border-soft/55`}>
          <h2 className="font-display text-xl font-normal text-foreground sm:text-2xl md:text-[1.75rem]">
            {service.title}
          </h2>

          {service.introParagraphs.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 40)}
              className={`text-[0.9375rem] leading-relaxed text-muted sm:text-base ${
                index === 0 ? "mt-5" : "mt-4"
              }`}
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-8">
            <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-harmony-green-deep/90 sm:text-xs">
              Support can include
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2.5">
              {service.supportItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-[0.9375rem] leading-relaxed text-foreground/90 sm:text-base"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-harmony-green/70"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {service.closingParagraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mt-5 text-[0.9375rem] leading-relaxed text-muted sm:text-base"
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-8 rounded-xl border border-border-soft/60 bg-surface-muted/50 px-5 py-5 sm:px-6 sm:py-6">
            <h3 className="font-display text-base font-normal text-foreground sm:text-lg">
              Why this support matters
            </h3>
            {service.whyItMatters.map((text) => (
              <p
                key={text.slice(0, 40)}
                className="mt-3 text-[0.9375rem] leading-relaxed text-muted sm:text-base"
              >
                {text}
              </p>
            ))}
          </div>

          <div className={pricingBoxClass}>
            <p className="font-display text-lg text-foreground sm:text-xl">
              {service.pricing.headline}
            </p>
            <ul className="mt-3 space-y-1.5">
              {service.pricing.details.map((detail) => (
                <li
                  key={detail}
                  className="text-[0.9375rem] leading-relaxed text-muted sm:text-base"
                >
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <ButtonLink href={service.ctaHref} className="w-full sm:w-auto">
              {service.ctaLabel}
            </ButtonLink>
          </div>
        </article>
      </div>
    </section>
  );
}
