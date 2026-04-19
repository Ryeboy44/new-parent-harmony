import type { Metadata } from "next";
import { AboutGemmaPreview } from "@/components/home/about-gemma-preview";
import { FinalCTASection } from "@/components/home/final-cta-section";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteNavbar } from "@/components/home/site-navbar";

export const metadata: Metadata = {
  title: "About Gemma",
  description:
    "Meet Gemma—certified postpartum doula, lactation counselor, and pediatric sleep consultant supporting families in Montgomery County, MD and surrounding areas.",
  openGraph: {
    title: "About Gemma | New Parent Harmony",
    description:
      "Experienced, calm support for postpartum recovery, feeding, and early sleep—local and virtual.",
  },
};

export default function AboutPage() {
  return (
    <>
      <SiteNavbar />
      <main id="main-content" className="flex flex-1 flex-col">
        <AboutGemmaPreview />
        <FinalCTASection />
      </main>
      <SiteFooter />
    </>
  );
}
