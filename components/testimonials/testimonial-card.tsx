import type { Testimonial } from "@/data/testimonials";
import { surfaceCardMuted } from "@/components/ui/surface-card";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article
      className={`${surfaceCardMuted} relative flex h-full flex-col border-border-soft/45 bg-gradient-to-b from-surface to-cream-deep/25 p-6 sm:p-7`}
    >
      <span
        className="pointer-events-none absolute right-5 top-4 font-display text-4xl leading-none text-harmony-green/20"
        aria-hidden
      >
        ”
      </span>
      <p className="mb-5 inline-flex w-fit rounded-full border border-border-soft/70 bg-white/85 px-3 py-1 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-harmony-green-deep/85">
        {testimonial.tag}
      </p>

      <blockquote className="flex-1">
        <p className="text-[0.97rem] leading-relaxed text-foreground sm:text-base">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>

      <footer className="mt-8 border-t border-border-soft/55 pt-5">
        <p className="text-sm font-medium tracking-tight text-foreground">
          {testimonial.name}
        </p>
        <p className="mt-1 text-xs leading-relaxed text-muted sm:text-[0.8125rem]">
          {testimonial.attribution}
        </p>
      </footer>
    </article>
  );
}
