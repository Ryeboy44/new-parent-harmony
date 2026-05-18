import Image from "next/image";
import Link from "next/link";
import { getBlogCategoryLabel } from "@/data/blog-categories";
import { formatBlogDate } from "@/lib/format-date";
import { buildSanityCdnUrl } from "@/lib/sanity/image-url";
import type { BlogPost } from "@/lib/sanity/types";
import { surfaceCard } from "@/components/ui/surface-card";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  const imageUrl = buildSanityCdnUrl(post.featuredImage?.asset, {
    width: 800,
    height: 500,
  });
  const alt = post.featuredImage?.alt || post.title;

  return (
    <article className={`${surfaceCard} flex h-full flex-col overflow-hidden p-0`}>
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-green-wash/40">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={alt}
              fill
              className="object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div
              className="flex h-full items-center justify-center bg-gradient-to-br from-green-wash/60 to-cream-deep/80 px-6 text-center"
              aria-hidden={!imageUrl}
            >
              <span className="font-display text-lg text-harmony-green-deep/70">
                New Parent Harmony
              </span>
            </div>
          )}
          {post.isPlaceholder ? (
            <span className="absolute left-3 top-3 rounded-full border border-border-soft/70 bg-white/90 px-2.5 py-1 text-[0.625rem] font-medium uppercase tracking-[0.14em] text-muted">
              Sample layout
            </span>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <p className="text-[0.66rem] font-medium uppercase tracking-[0.16em] text-harmony-green-deep/85 sm:text-[0.6875rem]">
            {getBlogCategoryLabel(post.category)}
          </p>
          <h2 className="mt-3 font-display text-lg font-normal leading-snug text-foreground sm:text-xl">
            {post.title}
          </h2>
          <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
            {post.excerpt}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted sm:text-[0.8125rem]">
            <time dateTime={post.publishDate}>{formatBlogDate(post.publishDate)}</time>
            <span aria-hidden>·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
          <p className="mt-5 text-sm font-medium text-harmony-green-deep">Read more</p>
        </div>
      </Link>
    </article>
  );
}
