import { Hero } from "@/components/landing/hero";
import { CollectionsShowcase } from "@/components/landing/collections-showcase";
import { AboutBlock } from "@/components/landing/about-block";
import { ServicesBand } from "@/components/landing/services-band";
import { Testimonials } from "@/components/landing/testimonials";
import { CtaBanner } from "@/components/landing/cta-banner";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <CollectionsShowcase />
      <AboutBlock />
      <ServicesBand />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
