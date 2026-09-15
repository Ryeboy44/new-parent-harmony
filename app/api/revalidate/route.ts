import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import {
  COLLECTIVE_SETTINGS_TAG,
  COLLECTIVE_SUPPORTERS_TAG,
  COMMUNITY_EVENTS_TAG,
  TESTIMONIALS_TAG,
} from "@/lib/sanity/fetch";

/**
 * Sanity webhook target for on-demand cache refresh after publish.
 * Set SANITY_REVALIDATE_SECRET in Vercel and use the same value in the webhook URL:
 * https://www.newparentharmony.com/api/revalidate?secret=YOUR_SECRET
 */
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const expected = process.env.SANITY_REVALIDATE_SECRET;

  if (!expected || secret !== expected) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  revalidateTag("blog-posts", "max");
  revalidateTag("blog-slugs", "max");
  revalidateTag(COMMUNITY_EVENTS_TAG, "max");
  revalidateTag(COLLECTIVE_SETTINGS_TAG, "max");
  revalidateTag(COLLECTIVE_SUPPORTERS_TAG, "max");
  revalidateTag(TESTIMONIALS_TAG, "max");
  revalidatePath("/blog");
  revalidatePath("/testimonials");
  revalidatePath("/community-collective");
  revalidatePath("/community-collective/support");
  revalidatePath("/sitemap.xml");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
