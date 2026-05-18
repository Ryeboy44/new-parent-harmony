import type { Testimonial } from "@/data/testimonials";
import { surfaceCardMuted } from "@/components/ui/surface-card";

type TestimonialCardProps = {
  testimonial: Testimonial;
  /** Homepage preview uses the shorter quote */
  variant?: "short" | "full";
};

export function TestimonialCard({
  testimonial,
  variant = "short",
}: TestimonialCardProps) {
  const quote =
    variant === "short" ? testimonial.shortQuote : testimonial.fullQuote;

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
      <p className="mb-5 inline-flex w-fit max-w-full rounded-full border border-border-soft/70 bg-white/85 px-3 py-1 text-[0.66rem] font-medium uppercase tracking-[0.16em] text-harmony-green-deep/85 sm:text-[0.6875rem]">
        {testimonial.contextLine}
      </p>

      <blockquote className="flex-1">
        <p className="text-[0.97rem] leading-relaxed text-foreground sm:text-base">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>

      <footer className="mt-8 border-t border-border-soft/55 pt-5">
        <p className="text-sm font-medium tracking-tight text-foreground">
          {testimonial.name}
        </p>
      </footer>
    </article>
  );
}
