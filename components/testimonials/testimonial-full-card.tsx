import type { Testimonial } from "@/data/testimonials";
import { surfaceCard } from "@/components/ui/surface-card";

type TestimonialFullCardProps = {
  testimonial: Testimonial;
};

export function TestimonialFullCard({ testimonial }: TestimonialFullCardProps) {
  const paragraphs = testimonial.fullQuote
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <article className={`${surfaceCard} border-border-soft/55`}>
      <blockquote className="not-italic">
        {paragraphs.map((paragraph, index) => (
          <p
            key={`${testimonial.id}-p-${index}`}
            className={`text-[0.9375rem] leading-[1.75] text-foreground/95 sm:text-base ${
              index > 0 ? "mt-5" : ""
            }`}
          >
            {index === 0 ? "\u201c" : null}
            {paragraph}
            {index === paragraphs.length - 1 ? "\u201d" : null}
          </p>
        ))}
      </blockquote>

      <footer className="mt-8 border-t border-border-soft/55 pt-5">
        <p className="text-sm font-medium tracking-tight text-foreground">
          {testimonial.name}
        </p>
        <p className="mt-1 text-xs leading-relaxed text-muted sm:text-[0.8125rem]">
          {testimonial.locationLine}
        </p>
      </footer>
    </article>
  );
}
