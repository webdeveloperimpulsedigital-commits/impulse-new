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
import { FinalCTASection } from "./sections/FinalCTASection";
import { FAQSection } from "../AiAgenticServices/sections/FAQSection/FAQSection";
import { FooterSection } from "../Main/sections/FooterSection/FooterSection";

import { FAQSchema } from "../../components/SEO/FAQSchema";
import { faqData } from "../../data/faqs";

export const OutboundIntelligenceEngine = (): JSX.Element => {
  const faqs = faqData["/services/archer"] || [];

  return (
    <main className="relative w-full min-h-screen">
      <Helmet>
        <title>Archer | AI-Powered Outbound Intelligence Engine | Impulse Digital</title>
        <meta name="description" content="An AI-powered outbound engine that detects buying signals, discovers decision-makers, and deploys personalised outreach at scale. Built by Impulse Digital." />
        <link rel="canonical" href="https://www.theimpulsedigital.com/services/archer/" />
      </Helmet>

      <FAQSchema faqs={faqs} />
      <div className="relative w-full space-y-0">
        <HeroSection />
        <StatusQuoSection />
        <WhatThisIsSection />
        <EconomicsSection />
        <HowItWorksSection />
        <BuyerProfilesSection />
        <MethodologySection />
        <ScarcitySection />

        {/* <ClientsSection /> */}
        {/* <TestimonialsSection /> */}
        {/* Wrap FinalCTASection to pull it up over ScarcitySection and fix the white corner gap */}
        {/* <div style={{ marginTop: "-25px", position: "relative", zIndex: 75 }}>
          <FinalCTASection />
        </div> */}

        {/* Wrap common sections to give them the curved border effect */}
        <div className="w-full bg-[#ffffff] relative overflow-hidden pb-12" style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px", zIndex: 80 }}>
          <FAQSection faqs={faqs} />
        </div>

        <FooterSection />
      </div>
    </main>
  );
};
