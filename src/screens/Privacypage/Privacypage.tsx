//import { ScrollRevealLogo } from "../../components/ScrollRevealLogo/ScrollRevealLogo";
import { PrivacypageHeroSection } from "./Privacypage/sections/PrivacypageHeroSection";
import { Privacypagecontent } from "./Privacypage/sections/Privacypagecontent"

import { FooterSection } from "../Main/sections/FooterSection/FooterSection";

export const Privacypage = (): JSX.Element => {
  return (
    <main className="relative w-full min-h-screen">
      {/* <ScrollRevealLogo /> */}
      <div className="relative w-full space-y-0">
        <PrivacypageHeroSection />
       <Privacypagecontent />
        <FooterSection />
      </div>
    </main>
  );
};