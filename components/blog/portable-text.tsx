import Link from "next/link";
import {
  PortableText,
  type PortableTextComponents,
} from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 font-display text-2xl font-normal leading-tight text-foreground first:mt-0 sm:text-[1.75rem]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 font-display text-xl font-normal leading-snug text-foreground">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mt-5 text-[0.9375rem] leading-[1.75] text-foreground/95 first:mt-0 sm:text-base">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-2 border-harmony-green/35 pl-5 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-5 list-disc space-y-2 pl-5 text-[0.9375rem] leading-relaxed text-foreground/95 sm:text-base">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-5 list-decimal space-y-2 pl-5 text-[0.9375rem] leading-relaxed text-foreground/95 sm:text-base">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href as string | undefined;
      if (!href) return <>{children}</>;
      const external = href.startsWith("http");
      if (external) {
        return (
          <a
            href={href}
            className="font-medium text-harmony-green-deep underline decoration-harmony-green/30 underline-offset-[0.2em] hover:decoration-harmony-green-deep"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href}
          className="font-medium text-harmony-green-deep underline decoration-harmony-green/30 underline-offset-[0.2em] hover:decoration-harmony-green-deep"
        >
          {children}
        </Link>
      );
    },
  },
};

type BlogPortableTextProps = {
  value: PortableTextBlock[];
};

export function BlogPortableText({ value }: BlogPortableTextProps) {
  return <PortableText value={value} components={components} />;
}
