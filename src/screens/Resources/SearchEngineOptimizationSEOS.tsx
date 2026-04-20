//import { ScrollRevealLogo } from "../../components/ScrollRevealLogo/ScrollRevealLogo";
import { SearchEngineOptimizationSEOPPTHeroSection } from "./sections/SearchEngineOptimizationSEOPPTHeroSection";
import { SlideShareSsoPPT } from "../Resources/sections/SearchEngineOptimizationSEOPPT";
import { ContactSection } from "../Main/sections/ContactSection/ContactSection";
import { FAQSection } from "../Main/sections/FAQSection/FAQSection";
import { FooterSection } from "../Main/sections/FooterSection/FooterSection";
import { FAQSchema } from "../../components/SEO/FAQSchema";
import { faqData } from "../../data/faqs";
export const SearchEngineOptimizationSEOS = (): JSX.Element => {

  return (
    <main className="relative w-full min-h-screen">
      <FAQSchema faqs={faqData["/"] || []} />
      {/* <ScrollRevealLogo /> */}
      <div className="relative w-full space-y-0">
        <SearchEngineOptimizationSEOPPTHeroSection />
        <SlideShareSsoPPT />
        <ContactSection />
        <FAQSection faqs={faqData["/"] || []} />
        <FooterSection />
      </div>
    </main>
  );
};