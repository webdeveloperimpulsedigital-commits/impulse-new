//import { ScrollRevealLogo } from "../../components/ScrollRevealLogo/ScrollRevealLogo";
import { TermsAndConditionsPageHeroSection } from "./TermsAndConditionsPage/sections/TermsAndConditionsPageHeroSection";
import { TermsAndConditionsPage } from "./TermsAndConditionsPage/sections/TermsAndConditionsPage"

import { FooterSection } from "../Main/sections/FooterSection/FooterSection";

export const TermsAndConditions = (): JSX.Element => {
  return (
    <main className="relative w-full min-h-screen">
      {/* <ScrollRevealLogo /> */}
      <div className="relative w-full space-y-0">
        <TermsAndConditionsPageHeroSection />
       <TermsAndConditionsPage />
        <FooterSection />
      </div>
    </main>
  );
};