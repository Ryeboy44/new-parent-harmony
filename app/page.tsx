import type { Metadata } from "next";
import { AboutGemmaPreview } from "@/components/home/about-gemma-preview";
import { FinalCTASection } from "@/components/home/final-cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { IntroTrustSection } from "@/components/home/intro-trust-section";
import { ServicesOverview } from "@/components/home/services-overview";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteNavbar } from "@/components/home/site-navbar";
import { TestimonialsPreview } from "@/components/home/testimonials-preview";
import { WhyChooseSection } from "@/components/home/why-choose-section";

export const metadata: Metadata = {
  title: "Calm postpartum, lactation & infant sleep support",
  description:
    "Thoughtful postpartum doula care, lactation help, and gentle sleep guidance—in home or online. Serving Montgomery County, MD and surrounding areas with judgment-free, relationship-centered support.",
  openGraph: {
    title: "Calm postpartum, lactation & infant sleep support | New Parent Harmony",
    description:
      "Thoughtful postpartum doula care, lactation help, and gentle sleep guidance for families in Montgomery County, MD and surrounding areas.",
  },
};

export default function Home() {
  return (
    <>
      <SiteNavbar />
      <main id="main-content">
        <HeroSection />
        <IntroTrustSection />
        <ServicesOverview />
        <WhyChooseSection />
        <TestimonialsPreview />
        <AboutGemmaPreview />
        <FinalCTASection />
      </main>
      <SiteFooter />
    </>
  );
}
