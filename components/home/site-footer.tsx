import Link from "next/link";
import { CONTACT_FORM_HREF } from "@/data/site-contact";

const footerLinkClass =
  "transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harmony-green-deep/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-deep";

const exploreLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/services", label: "Services" },
  { href: "/community-collective", label: "Community Collective" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: CONTACT_FORM_HREF, label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border-soft/50 bg-cream-deep/50 py-14 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:gap-12 lg:px-10">
        <div className="max-w-sm">
          <p className="font-display text-base font-normal text-foreground sm:text-lg">
            New Parent Harmony
          </p>
          <p className="mt-2 text-sm text-muted">
            Montgomery County, MD and surrounding areas
          </p>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            Please reach out through the{" "}
            <Link
              href={CONTACT_FORM_HREF}
              className="font-medium text-foreground underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harmony-green-deep/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-deep"
            >
              contact form
            </Link>{" "}
            and I&apos;ll get back to you as soon as I can.
          </p>
        </div>

        <div>
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-harmony-green-muted">
            Explore
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={footerLinkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-harmony-green-muted">
            Connect
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted sm:flex-row sm:gap-8">
            <li>
              <a
                href="https://www.instagram.com/newparentharmonyllc"
                className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harmony-green-deep/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-deep"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/NewParentHarmony"
                className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harmony-green-deep/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-deep"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-border-soft/40 px-4 pt-8 text-center text-xs text-muted sm:px-6 lg:px-10">
        <p>© {new Date().getFullYear()} New Parent Harmony. All rights reserved.</p>
      </div>
    </footer>
  );
}
