//import { ScrollRevealLogo } from "../../components/ScrollRevealLogo/ScrollRevealLogo";
import { WebsiteDesignDevelopmentPPTHeroSection } from "./sections/WebsiteDesignDevelopmentPPTHeroSection";
import { WebsiteDesignDevelopmentPPT } from "../Resources/sections/WebsiteDesign&DevelopmentPPT";
import { ContactSection } from "../Main/sections/ContactSection/ContactSection";
import { FAQSection } from "../Main/sections/FAQSection/FAQSection";
import { FooterSection } from "../Main/sections/FooterSection/FooterSection";

import { FAQSchema } from "../../components/SEO/FAQSchema";
import { faqData } from "../../data/faqs";

export const WebsiteDesignDevelopmentPPTS = (): JSX.Element => {
    const faqs = faqData["/"] || [];
  return (
    <main className="relative w-full min-h-screen">
      <FAQSchema faqs={faqs} />
      {/* <ScrollRevealLogo /> */}
      <div className="relative w-full space-y-0">
        <WebsiteDesignDevelopmentPPTHeroSection />
        <WebsiteDesignDevelopmentPPT />
        <ContactSection />
        <FAQSection faqs={faqs} />
        <FooterSection />
      </div>
    </main>
  );
};