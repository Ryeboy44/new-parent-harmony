import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Support library (moved)",
};

type PageProps = {
  searchParams?: Promise<{ q?: string; cat?: string; topic?: string }>;
};

export default async function SupportLibraryRedirectPage({ searchParams }: PageProps) {
  const sp = (await searchParams) ?? {};
  const p = new URLSearchParams();
  const q = typeof sp.q === "string" ? sp.q : "";
  const cat = typeof sp.cat === "string" ? sp.cat : "";
  const topic = typeof sp.topic === "string" ? sp.topic : "";
  if (q) p.set("q", q);
  if (cat) p.set("cat", cat);
  if (topic) p.set("topic", topic);

  const qs = p.toString();
  redirect(qs ? `/app/support?${qs}` : "/app/support");
}
