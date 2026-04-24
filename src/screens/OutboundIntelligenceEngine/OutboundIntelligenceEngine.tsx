import { Helmet } from 'react-helmet-async';
import { HeroSection } from "./sections/HeroSection";
import { HighlightSection } from "./sections/HighlightSection";
import { StatusQuoSection } from "./sections/StatusQuoSection";
import { WhatThisIsSection } from "./sections/WhatThisIsSection";
import { EconomicsSection } from "./sections/EconomicsSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { BuyerProfilesSection } from "./sections/BuyerProfilesSection";
import { MethodologySection } from "./sections/MethodologySection";
import { ScarcitySection } from "./sections/ScarcitySection";

// Reusing sections from existing components
import { ClientsSection } from "../Main/sections/ClientSection/ClientSection";
import { TestimonialsSection } from "../Main/sections/TestimonialsSection/TestimonialsSection";
import { ContactSection } from "../Main/sections/ContactSection/ContactSection";
import { FAQSection } from "../AiAgenticServices/sections/FAQSection/FAQSection";
import { FooterSection } from "../Main/sections/FooterSection/FooterSection";

import { FAQSchema } from "../../components/SEO/FAQSchema";
import { faqData } from "../../data/faqs";

export const OutboundIntelligenceEngine = (): JSX.Element => {
  const faqs = faqData["/services/outbound-intelligence-engine"] || [];

  return (
    <main className="relative w-full min-h-screen">
      <Helmet>
        <title>Outbound Intelligence Engine | Precision B2B Pipeline | Impulse Digital</title>
        <meta name="description" content="Your next customers already exist. The Outbound Intelligence Engine identifies, verifies, and reaches the exact decision-makers who match your business — with precision, not volume." />
        <link rel="canonical" href="https://www.theimpulsedigital.com/services/outbound-intelligence-engine/" />
      </Helmet>

      <FAQSchema faqs={faqs} />
      <div className="relative w-full space-y-0">
        <HeroSection />
        <HighlightSection />
        <StatusQuoSection />
        <WhatThisIsSection />
        <EconomicsSection />
        <HowItWorksSection />
        <BuyerProfilesSection />
        <MethodologySection />
        <ScarcitySection />

        {/* <ClientsSection /> */}
        {/* <TestimonialsSection /> */}
        {/* Wrap ContactSection to pull it up over ScarcitySection and fix the white corner gap */}
        <div style={{ marginTop: "-25px", position: "relative", zIndex: 75 }}>
          <ContactSection />
        </div>

        {/* Wrap common sections to give them the curved border effect */}
        <div className="w-full bg-[#ffffff] relative overflow-hidden pb-12" style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px", zIndex: 80 }}>
          <FAQSection faqs={faqs} />
        </div>

        <FooterSection />
      </div>
    </main>
  );
};
