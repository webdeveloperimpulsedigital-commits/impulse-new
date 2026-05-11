//import { ScrollRevealLogo } from "../../components/ScrollRevealLogo/ScrollRevealLogo";
import { SocialMediaMarketingHeroSection } from "./sections/SearchEngineOptimizationServices";
import { BrandVisionSection } from "./sections/BrandVisionSection/BrandVisionSection";
//import { InteractiveGallerySection } from "./sections/InteractiveGallerySection/InteractiveGallerySection";
//import { InteractiveSliderSection } from "./sections/InteractiveSliderSection/InteractiveSliderSection";
import { ServicesSection } from "./sections/ServicesSection";
import { WhyChooseSection } from "./sections/WhyChooseSection/WhyChooseSection";
import { ProcessSection } from "./sections/ProcessSection/ProcessSection";
import { ClientsSection } from "../ContentWritingServices/sections/ClientsSection";
import { TestimonialsSection } from "../Main/sections/TestimonialsSection/TestimonialsSection";
import { ContactSection } from "../Main/sections/ContactSection/ContactSection";
import { FAQSection } from "./sections/FAQSection/FAQSection";
import { FooterSection } from "../Main/sections/FooterSection/FooterSection";
import { LocationSelectorSection } from "../../components/LocationSelectorSection/LocationSelectorSection";

import { FAQSchema } from "../../components/SEO/FAQSchema";
import { faqData } from "../../data/faqs";

export const SearchEngineOptimizationInMumbai = (): JSX.Element => {
    const faqs = faqData["/services/search-engine-optimization-in-mumbai"] || [];

  return (
    <main className="relative w-full min-h-screen">
       <FAQSchema faqs={faqs} />
      {/* <ScrollRevealLogo /> */}
      <div className="relative w-full space-y-0">
        <SocialMediaMarketingHeroSection />
        <BrandVisionSection />
        {/* <InteractiveGallerySection /> */}
        {/* <InteractiveSliderSection /> */}
        <ServicesSection />
        <WhyChooseSection />
        <ProcessSection />
        <ClientsSection />
        <TestimonialsSection />
        <ContactSection />
        <FAQSection faqs={faqs} />
        <LocationSelectorSection currentLocation="Navi Mumbai" />
        <FooterSection />
      </div>
    </main>
  );
};
