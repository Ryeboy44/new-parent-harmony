import { redirect } from "next/navigation";

/** Alias for bookmarks and shared links — the form lives on `/contact`. */
export default function DiscoveryCallRedirectPage() {
  redirect("/contact");
}
