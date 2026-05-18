import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

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
  revalidatePath("/blog");
  revalidatePath("/sitemap.xml");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
