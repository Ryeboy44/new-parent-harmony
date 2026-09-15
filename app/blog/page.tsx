import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogEmptyState } from "@/components/blog/blog-empty-state";
import { SanitySetupNotice } from "@/components/blog/sanity-setup-notice";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteNavbar } from "@/components/home/site-navbar";
import { SectionShell } from "@/components/ui/section-shell";
import { getPublishedPosts } from "@/lib/sanity/fetch";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Supportive guidance on pregnancy, postpartum, feeding, and sleep from New Parent Harmony — practical articles to help families feel prepared and less overwhelmed.",
  openGraph: {
    title: "Blog | New Parent Harmony",
    description:
      "Compassionate articles on postpartum support, lactation, sleep, and preparing for baby.",
  },
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <>
      <SiteNavbar />
      <main id="main-content" className="flex flex-1 flex-col">
        <SectionShell background="cream" padding="pageIntro">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-harmony-green-muted sm:text-xs">
              Blog
            </p>
            <h1 className="font-display text-[1.75rem] font-normal leading-[1.18] tracking-[-0.03em] text-foreground sm:text-4xl md:text-[2.5rem] md:leading-[1.14]">
              Supportive Guidance for Pregnancy, Postpartum, Feeding, and Sleep
            </h1>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted sm:text-base md:mt-6">
              Practical, compassionate articles from New Parent Harmony to help families
              feel more prepared, less overwhelmed, and more supported through the early
              years of parenting.
            </p>
          </div>
        </SectionShell>

        <SectionShell background="white" padding="tight">
          <SanitySetupNotice />

          {posts.length > 0 ? (
            <ul
              className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
              aria-label="Blog articles"
            >
              {posts.map((post) => (
                <li key={post._id}>
                  <BlogCard post={post} />
                </li>
              ))}
            </ul>
          ) : (
            <BlogEmptyState />
          )}
        </SectionShell>
      </main>
      <SiteFooter />
    </>
  );
}
