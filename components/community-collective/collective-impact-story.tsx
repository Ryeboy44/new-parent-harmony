import Image from "next/image";
import { buildSanityCdnUrl } from "@/lib/sanity/image-url";
import type { CommunityCollectiveSettings } from "@/lib/sanity/types";

export function CollectiveImpactStory({
  settings,
}: {
  settings: CommunityCollectiveSettings;
}) {
  const story = settings.impactStory;
  const imageUrl = buildSanityCdnUrl(settings.impactImage?.asset, {
    width: 960,
  });
  const alt =
    settings.impactImage?.alt?.trim() ||
    "A moment from the New Parent Harmony Community Collective";

  if (!story && !imageUrl) return null;

  return (
    <div className="mx-auto mt-8 max-w-2xl sm:mt-10">
      {imageUrl ? (
        <div className="relative mb-5 aspect-[3/2] overflow-hidden rounded-2xl shadow-soft ring-1 ring-border-soft/60">
          <Image
            src={imageUrl}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 92vw, 672px"
          />
        </div>
      ) : null}
      {story ? (
        <p className="text-[0.9375rem] leading-relaxed text-foreground sm:text-base">
          {story}
        </p>
      ) : null}
    </div>
  );
}
