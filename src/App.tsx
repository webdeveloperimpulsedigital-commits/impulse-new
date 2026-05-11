import { Routes, Route } from "react-router-dom";
import { Main } from "./screens/Main/Main";
import { NewHome } from "./screens/NewHome/NewHome";
import { AboutUs } from "./screens/AboutUs/AboutUs";

import { Services } from "./screens/Services";
import { ContentWritingServices } from "./screens/ContentWritingServices/ContentWritingServices";
import { PayperClickServices } from "./screens/PayperClickServices"
import { SocialMediaMarketingServices } from "./screens/SocialMediaMarketingServices";
import { SearchEngineOptimization } from "./screens/SearchEngineOptimization"
import { EnterpriseSEOServices } from "./screens/EnterpriseSEOServices";
import { ECommerceSEOServices } from "./screens/eCommerceSEOServices";
import { B2BSEOServices } from "./screens/B2BSEOServices";
import { LocalSEOServices } from "./screens/LocalSEOServices";
import { WebsiteDevelopmentServices } from "./screens/WebsiteDevelopmentServices";
import { BrandingCreativeServices } from "./screens/BrandingCreativeServices";
import { EmployerBrandingServices } from "./screens/EmployerBrandingServices/EmployerBrandingServices";
import { CorporateCommunicationServices } from "./screens/CorporateCommunicationServices";
import { SocialMediaVideoProductionServices } from "./screens/SocialMediaVideoProductionServices/SocialMediaVideoProductionServices";
import { AiSeoAgency } from "./screens/AiSeoAgency";
import { AiAgenticServices } from "./screens/AiAgenticServices";

import { OutboundIntelligenceEngine } from "./screens/OutboundIntelligenceEngine";
import { Casestudies } from "./screens/Casestudies";
import { ShreeRubberWorksCaseStudy } from "./screens/ShreeRubberWorksCaseStudy"


import { Ebooks, Resources } from "./screens/Resources";
import { SlideSharePPTS } from "./screens/Resources/SlideSharePPTS";
import { SearchEngineOptimizationSEOS } from "./screens/Resources/SearchEngineOptimizationSEOS";
import { SocialMediaPPTS } from "./screens/Resources/SocialMediaPPTS";
import { GoogleAdsPPTS } from "./screens/Resources/GoogleAdsPPTS";
import { ContentMarketingPPTS } from "./screens/Resources/ContentMarketingPPTS";
import { WebsiteDesignDevelopmentPPTS } from "./screens/Resources/WebsiteDesignDevelopmentPPTS";
import { EmployerBrandingPPTS } from "./screens/Resources/EmployerBrandingPPTS";
import { Careers } from "./screens/Careers/Careers";

import { Contact } from "./screens/Contact";

import { DigitalMarketingAgencyinIndia } from "./screens/DigitalMarketingAgencyinIndia/DigitalMarketingAgencyinIndia";
import { AgencyinThane } from "./screens/AgencyinThane/AgencyinThane";
import { AgencyinNaviMumbai } from "./screens/AgencyinNaviMumbai/AgencyinNaviMumbai";
import { AgencyinPune } from "./screens/AgencyinPune/AgencyinPune";
import { Videos } from "./screens/Resources/Videos";
import { AmazonEBCaseStudy } from "./screens/AmazonEBCaseStudy";
import { AtracEnginePartsCaseStudy } from "./screens/AtracEnginePartsCaseStudy";
import { CraftingAmazonIndiaCaseStudy } from "./screens/CraftingAmazonIndiaCaseStudy"
import { GrasimPulpandFibreCaseStudy } from "./screens/GrasimPulpandFibreCaseStudy";
import { AutomagIndiaCaseStudy } from "./screens/AutomagIndiaCaseStudy";
import { VideoProductionServices } from "./screens/VideoProductionServices";
import { AIVideoProductionServices } from "./screens/AIVideoProductionServices";
import { IntelliPulseServices } from "./screens/IntelliPulseServices";
import { ElectromechCaseStudy } from "./screens/ElectromechCaseStudy";
import { HemCasestudy } from "./screens/HemCasestudy";
import { LaljeeGodhooCaseStudy } from "./screens/LaljeeGodhooCaseStudy";
import { MastercardCaseStudy } from "./screens/MastercardCaseStudy";
import { DmartCasestudy } from "./screens/DmartCasestudy";
import { HulCaseStudy } from "./screens/HulCaseStudy";
import { KevaCaseStudy } from "./screens/KevaCaseStudy";
import { VendimanCaseStudy } from "./screens/VendimanCaseStudy";
import { BrutindiaCaseStudy } from "./screens/BrutindiaCaseStudy";
import { AforceforgoodCaseStudy } from "./screens/AforceforgoodCaseStudy";
import { Fourse4goodCaseStudy } from "./screens/Fourse4goodCaseStudy";
import { Privacypage } from "./screens/Privacypage";
import { TermsAndConditions } from "./screens/TermsAndConditionsPage";
import { RainbowInternationalSchoolCaseStudy } from "./screens/RainbowInternationalSchoolCaseStudy";
import { Thankyou } from "./screens/Thankyou";
import { NotFound } from "./screens/NotFound/NotFound";
import { UppercaseCaseStudy } from "./screens/UppercaseCaseStudy";
import { SearchEngineOptimizationInMumbai } from "./screens/SearchEngineOptimizationInMumbai";
import { SearchEngineOptimizationInAiroli } from "./screens/SearchEngineOptimizationInAiroli";
import { SearchEngineOptimizationInVashi } from "./screens/SearchEngineOptimizationInVashi";
import { SearchEngineOptimizationInNaviMumbai } from "./screens/SearchEngineOptimizationInNaviMumbai";
import { SearchEngineOptimizationInBorivali } from "./screens/SearchEngineOptimizationInBorivali";
import { SearchEngineOptimizationInKandivali } from "./screens/SearchEngineOptimizationInKandivali";
import { SearchEngineOptimizationInAndheri } from "./screens/SearchEngineOptimizationInAndheri";
import { SearchEngineOptimizationInBandra } from "./screens/SearchEngineOptimizationInBandra";
import { SearchEngineOptimizationInGhatkopar } from "./screens/SearchEngineOptimizationInGhatkopar";
import { SearchEngineOptimizationInGoregaon } from "./screens/SearchEngineOptimizationInGoregaon";
import { SearchEngineOptimizationInJogeshwari } from "./screens/SearchEngineOptimizationInJogeshwari";
import { SearchEngineOptimizationInKharghar } from "./screens/SearchEngineOptimizationInKharghar";
import { SearchEngineOptimizationInKoparkhairane } from "./screens/SearchEngineOptimizationInKoparkhairane";
import { SearchEngineOptimizationInMalad } from "./screens/SearchEngineOptimizationInMalad";
import { SearchEngineOptimizationInMulund } from "./screens/SearchEngineOptimizationInMulund";
import { SearchEngineOptimizationInMiraRoad } from "./screens/SearchEngineOptimizationInMiraRoad";
import { SearchEngineOptimizationInMansarovar } from "./screens/SearchEngineOptimizationInMansarovar";
import { SearchEngineOptimizationInDadar } from "./screens/SearchEngineOptimizationInDadar";
import { SearchEngineOptimizationInGhansoli } from "./screens/SearchEngineOptimizationInGhansoli";
import { SearchEngineOptimizationInNerul } from "./screens/SearchEngineOptimizationInNerul";
import { SearchEngineOptimizationInPanvel } from "./screens/SearchEngineOptimizationInPanvel";
import { SearchEngineOptimizationInSanpada } from "./screens/SearchEngineOptimizationInSanpada";
import { SearchEngineOptimizationInTurbhe } from "./screens/SearchEngineOptimizationInTurbhe";



import { NewHome1 } from "./screens/new-home-1";


export const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/new-home" element={<NewHome />} />
      <Route path="/new-home-1" element={<NewHome1 />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/content-writing-services" element={<ContentWritingServices />} />
      <Route path="/services/performance-marketing" element={<PayperClickServices />} />
      <Route path="/services/social-media-marketing" element={<SocialMediaMarketingServices />} />


      <Route path="/services/search-engine-optimization" element={<SearchEngineOptimization />} />
      <Route path="/services/search-engine-optimization/enterprise-seo-services" element={<EnterpriseSEOServices />} />
      <Route path="/services/search-engine-optimization/ecommerce-seo-services" element={<ECommerceSEOServices />} />
      <Route path="/services/search-engine-optimization/b2b-seo-services" element={<B2BSEOServices />} />
      <Route path="/services/search-engine-optimization/local-seo-services" element={<LocalSEOServices />} />
      <Route path="/services/website-development" element={<WebsiteDevelopmentServices />} />
      <Route path="/services/branding-creative-services" element={<BrandingCreativeServices />} />
      <Route path="/services/employer-branding-agency" element={<EmployerBrandingServices />} />
      <Route path="/services/corporate-communication-agency" element={<CorporateCommunicationServices />} />
      <Route path="/services/social-media-video-production" element={<SocialMediaVideoProductionServices />} />
      <Route path="/services/search-engine-optimization/ai-seo-agency" element={<AiSeoAgency />} />
      <Route path="/services/agentic-ai" element={<AiAgenticServices />} />
      <Route path="/services/intelli-pulse" element={<IntelliPulseServices />} />
      <Route path="/services/archer" element={<OutboundIntelligenceEngine />} />
      <Route path="/services/video-production/ai-video-production" element={<AIVideoProductionServices />} />
      <Route path="/services/video-production" element={<VideoProductionServices />} />

      <Route path="/services/search-engine-optimization/mumbai" element={<SearchEngineOptimizationInMumbai />} />
      <Route path="/services/search-engine-optimization/airoli" element={<SearchEngineOptimizationInAiroli />} />
      <Route path="/services/search-engine-optimization/navimumbai" element={<SearchEngineOptimizationInNaviMumbai />} />
      <Route path="/services/search-engine-optimization/vashi" element={<SearchEngineOptimizationInVashi />} />
      <Route path="/services/search-engine-optimization/turbhe" element={<SearchEngineOptimizationInTurbhe />} />
      <Route path="/services/search-engine-optimization/sanpada" element={<SearchEngineOptimizationInSanpada />} />
      <Route path="/services/search-engine-optimization/panvel" element={<SearchEngineOptimizationInPanvel />} />
      <Route path="/services/search-engine-optimization/nerul" element={<SearchEngineOptimizationInNerul />} />
      <Route path="/services/search-engine-optimization/mulund" element={<SearchEngineOptimizationInMulund />} />
      <Route path="/services/search-engine-optimization/mira-road" element={<SearchEngineOptimizationInMiraRoad />} />
      <Route path="/services/search-engine-optimization/mansarovar" element={<SearchEngineOptimizationInMansarovar />} />
      <Route path="/services/search-engine-optimization/malad" element={<SearchEngineOptimizationInMalad />} />
      <Route path="/services/search-engine-optimization/koparkhairane" element={<SearchEngineOptimizationInKoparkhairane />} />
      <Route path="/services/search-engine-optimization/kharghar" element={<SearchEngineOptimizationInKharghar />} />
      <Route path="/services/search-engine-optimization/kandivali" element={<SearchEngineOptimizationInKandivali />} />
      <Route path="/services/search-engine-optimization/jogeshwari" element={<SearchEngineOptimizationInJogeshwari />} />
      <Route path="/services/search-engine-optimization/goregaon" element={<SearchEngineOptimizationInGoregaon />} />
      <Route path="/services/search-engine-optimization/ghatkopar" element={<SearchEngineOptimizationInGhatkopar />} />
      <Route path="/services/search-engine-optimization/ghansoli" element={<SearchEngineOptimizationInGhansoli />} />
      <Route path="/services/search-engine-optimization/dadar" element={<SearchEngineOptimizationInDadar />} />
      <Route path="/services/search-engine-optimization/borivali" element={<SearchEngineOptimizationInBorivali />} />
      <Route path="/services/search-engine-optimization/bandra" element={<SearchEngineOptimizationInBandra />} />
      <Route path="/services/search-engine-optimization/andheri" element={<SearchEngineOptimizationInAndheri />} />

      <Route path="/casestudies" element={<Casestudies />} />
      <Route path="/casestudies/shree-rubber-works" element={<ShreeRubberWorksCaseStudy />} />
      <Route path="/casestudies/automag-india" element={<AutomagIndiaCaseStudy />} />
      <Route path="/casestudies/grasim-pulp-and-fibre" element={<GrasimPulpandFibreCaseStudy />} />
      <Route path="/casestudies/crafting-the-employer-value-proposition-for-amazon-india" element={<CraftingAmazonIndiaCaseStudy />} />
      <Route path="/casestudies/atrac-engine-parts" element={<AtracEnginePartsCaseStudy />} />
      <Route path="/casestudies/amazon-eb" element={<AmazonEBCaseStudy />} />
      <Route path="/casestudies/electromech" element={<ElectromechCaseStudy />} />
      <Route path="/casestudies/hem" element={<HemCasestudy />} />
      <Route path="/casestudies/laljee-godhoo" element={<LaljeeGodhooCaseStudy />} />
      <Route path="/casestudies/mastercard" element={<MastercardCaseStudy />} />
      <Route path="/casestudies/d-mart" element={<DmartCasestudy />} />
      <Route path="/casestudies/hul" element={<HulCaseStudy />} />
      <Route path="/casestudies/keva" element={<KevaCaseStudy />} />
      <Route path="/casestudies/vendiman" element={<VendimanCaseStudy />} />
      <Route path="/casestudies/brutindia" element={<BrutindiaCaseStudy />} />
      <Route path="/casestudies/aforceforgood" element={<AforceforgoodCaseStudy />} />
      <Route path="/casestudies/fourseforgood" element={<Fourse4goodCaseStudy />} />
      <Route path="/casestudies/rainbow-international-school" element={<RainbowInternationalSchoolCaseStudy />} />

      <Route path="/casestudies/uppercase" element={<UppercaseCaseStudy />} />

      <Route path="/resources" element={<Resources />} />

      <Route path="/resources/EBooks" element={<Ebooks />} />
      <Route path="/resources/videos" element={<Videos />} />
      <Route path="/resources/slideshare-ppt" element={<SlideSharePPTS />} />
      <Route path="/resources/search-engine-optimization-PPT" element={<SearchEngineOptimizationSEOS />} />
      <Route path="/resources/social-media-PPT" element={<SocialMediaPPTS />} />
      <Route path="/resources/google-ads-PPT" element={<GoogleAdsPPTS />} />
      <Route path="/resources/content-marketing-PPT" element={<ContentMarketingPPTS />} />
      <Route path="/resources/website-design-development-PPT" element={<WebsiteDesignDevelopmentPPTS />} />
      <Route path="/resources/employer-branding-PPT" element={<EmployerBrandingPPTS />} />


      <Route path="/careers" element={<Careers />} />

      <Route path="/contact-us" element={<Contact />} />


      <Route path="/digital-marketing-agency-in-india" element={<DigitalMarketingAgencyinIndia />} />
      <Route path="/digital-marketing-agency-in-thane" element={<AgencyinThane />} />
      <Route path="/digital-marketing-agency-in-navi-mumbai" element={<AgencyinNaviMumbai />} />
      <Route path="/digital-marketing-agency-in-pune" element={<AgencyinPune />} />
      <Route path="/privacy-policy" element={<Privacypage />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/thank-you" element={<Thankyou />} />

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
};