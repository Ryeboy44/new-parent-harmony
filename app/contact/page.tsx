import type { Metadata } from "next";
import { DiscoveryCallForm } from "@/components/discovery-call/discovery-call-form";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteNavbar } from "@/components/home/site-navbar";

export const metadata: Metadata = {
  title: "Contact & discovery call | New Parent Harmony",
  description:
    "Request a discovery call for postpartum, lactation, or sleep support in Montgomery County and beyond. Calm, confidential, no pressure.",
};

export default function ContactPage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:shadow-md"
      >
        Skip to main content
      </a>
      <SiteNavbar />
      <main
        id="main-content"
        className="flex flex-1 flex-col border-b border-border-soft/40 bg-cream"
      >
        <div className="mx-auto w-full max-w-xl flex-1 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <DiscoveryCallForm />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
