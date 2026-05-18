import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BlogPortableText } from "@/components/blog/portable-text";
import { PostCta } from "@/components/blog/post-cta";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteNavbar } from "@/components/home/site-navbar";
import { getBlogCategoryLabel } from "@/data/blog-categories";
import { siteBaseUrl } from "@/data/site-url";
import { formatBlogDate } from "@/lib/format-date";
import { getPostBySlug, getPublishedPostSlugs } from "@/lib/sanity/fetch";
import { buildSanityCdnUrl } from "@/lib/sanity/image-url";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getPublishedPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Article not found" };

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | New Parent Harmony`,
      description,
      type: "article",
      publishedTime: post.publishDate,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const imageUrl = buildSanityCdnUrl(post.featuredImage?.asset, {
    width: 1200,
    height: 675,
  });
  const imageAlt = post.featuredImage?.alt || post.title;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishDate,
    author: {
      "@type": "Person",
      name: post.author || "Gemma Cawley",
    },
    publisher: {
      "@type": "Organization",
      name: "New Parent Harmony",
      url: siteBaseUrl,
    },
    mainEntityOfPage: `${siteBaseUrl}/blog/${post.slug}`,
    ...(imageUrl ? { image: [imageUrl] } : {}),
  };

  return (
    <>
      <SiteNavbar />
      <main id="main-content" className="flex flex-1 flex-col">
        <article className="border-b border-border-soft/40 bg-cream">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
            {post.isPlaceholder ? (
              <p
                className="mb-6 rounded-full border border-border-soft/70 bg-white/90 px-3 py-1 text-center text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-muted"
                role="note"
              >
                Sample layout placeholder — replace in Sanity Studio
              </p>
            ) : null}

            <p className="text-[0.66rem] font-medium uppercase tracking-[0.16em] text-harmony-green-deep/85 sm:text-[0.6875rem]">
              {getBlogCategoryLabel(post.category)}
            </p>
            <h1 className="mt-3 font-display text-[1.75rem] font-normal leading-[1.15] tracking-[-0.02em] text-foreground sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
              <time dateTime={post.publishDate}>{formatBlogDate(post.publishDate)}</time>
              <span aria-hidden>·</span>
              <span>{post.readingMinutes} min read</span>
              {post.author ? (
                <>
                  <span aria-hidden>·</span>
                  <span>{post.author}</span>
                </>
              ) : null}
            </div>

            {imageUrl ? (
              <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-green-wash/40 shadow-soft">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 720px"
                  priority
                />
              </div>
            ) : null}
          </div>
        </article>

        <div className="bg-surface py-12 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
            {post.body?.length ? (
              <BlogPortableText value={post.body} />
            ) : (
              <p className="text-muted">This article has no content yet.</p>
            )}
            <PostCta />
          </div>
        </div>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
