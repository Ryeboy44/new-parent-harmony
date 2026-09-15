import Image from "next/image";
import { SectionShell } from "@/components/ui/section-shell";
import { surfaceCard } from "@/components/ui/surface-card";
import { supporterPage } from "@/data/community-collective-content";
import { labelForRecognitionLevel } from "@/lib/community-collective/supporter-display";
import { buildSanityCdnUrl } from "@/lib/sanity/image-url";
import type { CollectiveSupporter } from "@/lib/sanity/types";

type SponsorRecognitionProps = {
  supporters: CollectiveSupporter[];
};

export function SponsorRecognition({ supporters }: SponsorRecognitionProps) {
  const { recognition } = supporterPage;

  return (
    <SectionShell id="sponsor-recognition" background="white" padding="tight" className="scroll-mt-28">
      <header className="max-w-xl md:max-w-2xl">
        <p className="mb-3 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs">
          {recognition.eyebrow}
        </p>
        <h2 className="font-display text-[1.625rem] font-normal leading-[1.2] tracking-[-0.02em] text-foreground sm:text-3xl md:text-[2.125rem]">
          {recognition.title}
        </h2>
        {recognition.paragraphs.map((paragraph, index) => (
          <p
            key={paragraph.slice(0, 40)}
            className={`text-[0.9375rem] leading-relaxed text-muted sm:text-base ${
              index === 0 ? "mt-4 md:mt-5" : "mt-4"
            }`}
          >
            {paragraph}
          </p>
        ))}
      </header>

      {supporters.length > 0 ? (
        <ul className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {supporters.map((supporter) => {
            const logoUrl = buildSanityCdnUrl(supporter.logo?.asset, {
              width: 480,
            });
            const alt = supporter.logo?.alt?.trim() || `${supporter.name} logo`;
            const content = (
              <>
                {supporter.featured ? (
                  <p className="mb-3 w-fit rounded-full border border-harmony-green/25 bg-green-wash/60 px-2.5 py-0.5 text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-harmony-green-deep">
                    Featured
                  </p>
                ) : null}
                {logoUrl ? (
                  <div className="flex h-24 items-center justify-center rounded-xl bg-cream-deep/40 px-6">
                    <Image
                      src={logoUrl}
                      alt={alt}
                      width={220}
                      height={80}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                ) : null}
                <p
                  className={`font-display text-lg font-normal text-foreground ${
                    logoUrl || supporter.featured ? "mt-4" : ""
                  }`}
                >
                  {supporter.name}
                </p>
                <p className="mt-1 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-harmony-green-muted">
                  {labelForRecognitionLevel(supporter.recognitionLevel)}
                </p>
                {supporter.description ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {supporter.description}
                  </p>
                ) : null}
              </>
            );

            return (
              <li key={supporter._id}>
                {supporter.websiteUrl ? (
                  <a
                    href={supporter.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${surfaceCard} flex h-full flex-col p-5 transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harmony-green-deep/60 focus-visible:ring-offset-2 sm:p-6 ${
                      supporter.featured ? "ring-1 ring-harmony-green/20" : ""
                    }`}
                  >
                    {content}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <article
                    className={`${surfaceCard} flex h-full flex-col p-5 sm:p-6 ${
                      supporter.featured ? "ring-1 ring-harmony-green/20" : ""
                    }`}
                  >
                    {content}
                  </article>
                )}
              </li>
            );
          })}
        </ul>
      ) : null}
    </SectionShell>
  );
}
