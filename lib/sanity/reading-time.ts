import type { PortableTextBlock } from "@portabletext/types";

function blocksToPlainText(blocks: PortableTextBlock[] | undefined): string {
  if (!blocks?.length) return "";
  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) return "";
      return block.children
        .map((child) => ("text" in child ? child.text : ""))
        .join("");
    })
    .join("\n");
}

export function estimateReadingMinutes(
  excerpt: string,
  body?: PortableTextBlock[],
): number {
  const text = [excerpt, blocksToPlainText(body)].filter(Boolean).join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}
