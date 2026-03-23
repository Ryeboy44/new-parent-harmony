import { AboutGemmaPreview } from "@/components/home/about-gemma-preview";
import { FinalCTASection } from "@/components/home/final-cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { IntroTrustSection } from "@/components/home/intro-trust-section";
import { ServicesOverview } from "@/components/home/services-overview";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteNavbar } from "@/components/home/site-navbar";
import { TestimonialsPreview } from "@/components/home/testimonials-preview";
import { WhyChooseSection } from "@/components/home/why-choose-section";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:shadow-md"
      >
        Skip to main content
      </a>
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
