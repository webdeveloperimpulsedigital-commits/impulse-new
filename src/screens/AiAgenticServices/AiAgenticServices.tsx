import { AiAgenticHeroSection } from "./sections/AiAgenticHeroSection/AiAgenticHeroSection";
import { BrandVisionSection } from "./sections/BrandVisionSection/BrandVisionSection";
import { WhyChooseSection } from "./sections/WhyChooseSection/WhyChooseSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ProcessSection } from "./sections/ProcessSection/ProcessSection";
import { ClientsSection } from "../ContentWritingServices/sections/ClientsSection";
import { TestimonialsSection } from "../Main/sections/TestimonialsSection/TestimonialsSection";
import { ContactSection } from "../Main/sections/ContactSection/ContactSection";
import { FAQSection } from "./sections/FAQSection/FAQSection";
import { FooterSection } from "../Main/sections/FooterSection/FooterSection";

import { FAQSchema } from "../../components/SEO/FAQSchema";
import { faqData } from "../../data/faqs";

export const AiAgenticServices = (): JSX.Element => {
  const faqs = faqData["/services/agentic-ai"] || [];

  return (
    <main className="relative w-full min-h-screen">
      <FAQSchema faqs={faqs} />
      <div className="relative w-full space-y-0">
        <AiAgenticHeroSection />
        <BrandVisionSection />
        <ServicesSection />
        <WhyChooseSection />
        <ProcessSection />
        <ClientsSection />
        <TestimonialsSection />
        <ContactSection />
        <FAQSection faqs={faqs} />
        <FooterSection />
      </div>
    </main>
  );
};