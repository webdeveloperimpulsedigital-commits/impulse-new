//import { ScrollRevealLogo } from "../../components/ScrollRevealLogo/ScrollRevealLogo";
import { ThankyouHeroSection } from "./Thankyou/sections/ThankyouHeroSection";
import { Thankyoucontent } from "./Thankyou/sections/Thankyoucontent"

import { FooterSection } from "../Main/sections/FooterSection/FooterSection";

export const Thankyou = (): JSX.Element => {
  return (
    <main className="relative w-full min-h-screen">
      {/* <ScrollRevealLogo /> */}
      <div className="relative w-full space-y-0">
        <ThankyouHeroSection />
       <Thankyoucontent />
        <FooterSection />
      </div>
    </main>
  );
};