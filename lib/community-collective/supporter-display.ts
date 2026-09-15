import type { CollectiveRecognitionLevel } from "@/lib/sanity/types";

export const ANONYMOUS_SUPPORTER_LABEL = "Anonymous supporter" as const;

const recognitionLevelLabels: Record<CollectiveRecognitionLevel, string> = {
  supporter: "Supporter",
  featured: "Featured supporter",
  champion: "Community champion",
  lead: "Lead partner",
};

export function labelForRecognitionLevel(
  level: CollectiveRecognitionLevel,
): string {
  return recognitionLevelLabels[level];
}
