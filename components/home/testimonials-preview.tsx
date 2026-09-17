import Link from "next/link";
import { getFeaturedTestimonials } from "@/lib/sanity/fetch";

export async function TestimonialsPreview() {
  const featuredTestimonials = await getFeaturedTestimonials();
  const testimonial = featuredTestimonials[0];
  if (!testimonial) return null;

  return (
    <section
      id="testimonials"
      className="border-y border-border-soft/40 bg-surface py-14 md:py-16 lg:py-20"
      aria-labelledby="homepage-testimonial-quote"
    >
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-10">
        <blockquote>
          <p
            id="homepage-testimonial-quote"
            className="font-display text-xl font-normal leading-snug text-foreground sm:text-[1.375rem] md:text-[1.5rem] md:leading-snug"
          >
            &ldquo;{testimonial.shortQuote}&rdquo;
          </p>
          <footer className="mt-6">
            <cite className="not-italic text-sm font-medium tracking-tight text-foreground">
              {testimonial.name}
            </cite>
          </footer>
        </blockquote>
        <p className="mt-7 sm:mt-8">
          <Link
            href="/testimonials"
            className="inline-flex min-h-11 items-center text-[0.9375rem] font-medium text-harmony-green-deep underline-offset-[0.35em] decoration-harmony-green-deep/35 transition-colors hover:text-foreground hover:underline"
          >
            Read more family experiences →
          </Link>
        </p>
      </div>
    </section>
  );
}
