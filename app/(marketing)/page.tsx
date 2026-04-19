import type { Metadata } from "next";
import { AboutGemmaPreview } from "@/components/home/about-gemma-preview";
import { CoffeeMorningSection } from "@/components/home/coffee-morning-section";
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
    "Postpartum support, breastfeeding help near Montgomery County, MD, and gentle newborn sleep help when feeding and sleep feel hard. Book a free 15-minute chat—no pressure, judgment-free care in home or online.",
  openGraph: {
    title: "Calm postpartum, lactation & infant sleep support | New Parent Harmony",
    description:
      "Postpartum doula care, lactation support, and infant sleep help for Montgomery County, MD and surrounding areas—start with a free 15-minute chat.",
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
        <CoffeeMorningSection />
        <WhyChooseSection />
        <TestimonialsPreview />
        <AboutGemmaPreview />
        <FinalCTASection />
      </main>
      <SiteFooter />
    </>
  );
}
