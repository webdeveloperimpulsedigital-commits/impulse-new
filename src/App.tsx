import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";

// 🔥 Lazy Imports (ALL PAGES)
const Main = lazy(() => import("./screens/Main/Main").then(m => ({ default: m.Main })));
const AboutUs = lazy(() => import("./screens/AboutUs/AboutUs").then(m => ({ default: m.AboutUs })));

const Services = lazy(() => import("./screens/Services").then(m => ({ default: m.Services })));
const ContentWritingServices = lazy(() => import("./screens/ContentWritingServices/ContentWritingServices").then(m => ({ default: m.ContentWritingServices })));
const PayperClickServices = lazy(() => import("./screens/PayperClickServices").then(m => ({ default: m.PayperClickServices })));
const SocialMediaMarketingServices = lazy(() => import("./screens/SocialMediaMarketingServices").then(m => ({ default: m.SocialMediaMarketingServices })));

const SearchEngineOptimization = lazy(() => import("./screens/SearchEngineOptimization").then(m => ({ default: m.SearchEngineOptimization })));
const EnterpriseSEOServices = lazy(() => import("./screens/EnterpriseSEOServices").then(m => ({ default: m.EnterpriseSEOServices })));
const ECommerceSEOServices = lazy(() => import("./screens/eCommerceSEOServices").then(m => ({ default: m.ECommerceSEOServices })));
const B2BSEOServices = lazy(() => import("./screens/B2BSEOServices").then(m => ({ default: m.B2BSEOServices })));
const LocalSEOServices = lazy(() => import("./screens/LocalSEOServices").then(m => ({ default: m.LocalSEOServices })));

const WebsiteDevelopmentServices = lazy(() => import("./screens/WebsiteDevelopmentServices").then(m => ({ default: m.WebsiteDevelopmentServices })));
const BrandingCreativeServices = lazy(() => import("./screens/BrandingCreativeServices").then(m => ({ default: m.BrandingCreativeServices })));
const EmployerBrandingServices = lazy(() => import("./screens/EmployerBrandingServices/EmployerBrandingServices").then(m => ({ default: m.EmployerBrandingServices })));
const CorporateCommunicationServices = lazy(() => import("./screens/CorporateCommunicationServices").then(m => ({ default: m.CorporateCommunicationServices })));
const SocialMediaVideoProductionServices = lazy(() => import("./screens/SocialMediaVideoProductionServices/SocialMediaVideoProductionServices").then(m => ({ default: m.SocialMediaVideoProductionServices })));

const AiSeoAgency = lazy(() => import("./screens/AiSeoAgency").then(m => ({ default: m.AiSeoAgency })));
const AiAgenticServices = lazy(() => import("./screens/AiAgenticServices").then(m => ({ default: m.AiAgenticServices })));
const IntelliPulseServices = lazy(() => import("./screens/IntelliPulseServices").then(m => ({ default: m.IntelliPulseServices })));

const VideoProductionServices = lazy(() => import("./screens/VideoProductionServices").then(m => ({ default: m.VideoProductionServices })));
const AIVideoProductionServices = lazy(() => import("./screens/AIVideoProductionServices").then(m => ({ default: m.AIVideoProductionServices })));

const Casestudies = lazy(() => import("./screens/Casestudies").then(m => ({ default: m.Casestudies })));
const ShreeRubberWorksCaseStudy = lazy(() => import("./screens/ShreeRubberWorksCaseStudy").then(m => ({ default: m.ShreeRubberWorksCaseStudy })));
const AutomagIndiaCaseStudy = lazy(() => import("./screens/AutomagIndiaCaseStudy").then(m => ({ default: m.AutomagIndiaCaseStudy })));
const GrasimPulpandFibreCaseStudy = lazy(() => import("./screens/GrasimPulpandFibreCaseStudy").then(m => ({ default: m.GrasimPulpandFibreCaseStudy })));
const CraftingAmazonIndiaCaseStudy = lazy(() => import("./screens/CraftingAmazonIndiaCaseStudy").then(m => ({ default: m.CraftingAmazonIndiaCaseStudy })));
const AtracEnginePartsCaseStudy = lazy(() => import("./screens/AtracEnginePartsCaseStudy").then(m => ({ default: m.AtracEnginePartsCaseStudy })));
const AmazonEBCaseStudy = lazy(() => import("./screens/AmazonEBCaseStudy").then(m => ({ default: m.AmazonEBCaseStudy })));
const ElectromechCaseStudy = lazy(() => import("./screens/ElectromechCaseStudy").then(m => ({ default: m.ElectromechCaseStudy })));
const HemCasestudy = lazy(() => import("./screens/HemCasestudy").then(m => ({ default: m.HemCasestudy })));
const LaljeeGodhooCaseStudy = lazy(() => import("./screens/LaljeeGodhooCaseStudy").then(m => ({ default: m.LaljeeGodhooCaseStudy })));
const MastercardCaseStudy = lazy(() => import("./screens/MastercardCaseStudy").then(m => ({ default: m.MastercardCaseStudy })));
const DmartCasestudy = lazy(() => import("./screens/DmartCasestudy").then(m => ({ default: m.DmartCasestudy })));
const HulCaseStudy = lazy(() => import("./screens/HulCaseStudy").then(m => ({ default: m.HulCaseStudy })));
const KevaCaseStudy = lazy(() => import("./screens/KevaCaseStudy").then(m => ({ default: m.KevaCaseStudy })));
const VendimanCaseStudy = lazy(() => import("./screens/VendimanCaseStudy").then(m => ({ default: m.VendimanCaseStudy })));
const BrutindiaCaseStudy = lazy(() => import("./screens/BrutindiaCaseStudy").then(m => ({ default: m.BrutindiaCaseStudy })));
const AforceforgoodCaseStudy = lazy(() => import("./screens/AforceforgoodCaseStudy").then(m => ({ default: m.AforceforgoodCaseStudy })));
const Fourse4goodCaseStudy = lazy(() => import("./screens/Fourse4goodCaseStudy").then(m => ({ default: m.Fourse4goodCaseStudy })));
const RainbowInternationalSchoolCaseStudy = lazy(() => import("./screens/RainbowInternationalSchoolCaseStudy").then(m => ({ default: m.RainbowInternationalSchoolCaseStudy })));

const Resources = lazy(() => import("./screens/Resources").then(m => ({ default: m.Resources })));
const Ebooks = lazy(() => import("./screens/Resources").then(m => ({ default: m.Ebooks })));
const Videos = lazy(() => import("./screens/Resources/Videos").then(m => ({ default: m.Videos })));
const SlideSharePPTS = lazy(() => import("./screens/Resources/SlideSharePPTS").then(m => ({ default: m.SlideSharePPTS })));
const SearchEngineOptimizationSEOS = lazy(() => import("./screens/Resources/SearchEngineOptimizationSEOS").then(m => ({ default: m.SearchEngineOptimizationSEOS })));
const SocialMediaPPTS = lazy(() => import("./screens/Resources/SocialMediaPPTS").then(m => ({ default: m.SocialMediaPPTS })));
const GoogleAdsPPTS = lazy(() => import("./screens/Resources/GoogleAdsPPTS").then(m => ({ default: m.GoogleAdsPPTS })));
const ContentMarketingPPTS = lazy(() => import("./screens/Resources/ContentMarketingPPTS").then(m => ({ default: m.ContentMarketingPPTS })));
const WebsiteDesignDevelopmentPPTS = lazy(() => import("./screens/Resources/WebsiteDesignDevelopmentPPTS").then(m => ({ default: m.WebsiteDesignDevelopmentPPTS })));
const EmployerBrandingPPTS = lazy(() => import("./screens/Resources/EmployerBrandingPPTS").then(m => ({ default: m.EmployerBrandingPPTS })));

const Careers = lazy(() => import("./screens/Careers/Careers").then(m => ({ default: m.Careers })));
const Contact = lazy(() => import("./screens/Contact").then(m => ({ default: m.Contact })));

const DigitalMarketingAgencyinIndia = lazy(() => import("./screens/DigitalMarketingAgencyinIndia/DigitalMarketingAgencyinIndia").then(m => ({ default: m.DigitalMarketingAgencyinIndia })));
const AgencyinThane = lazy(() => import("./screens/AgencyinThane/AgencyinThane").then(m => ({ default: m.AgencyinThane })));
const AgencyinNaviMumbai = lazy(() => import("./screens/AgencyinNaviMumbai/AgencyinNaviMumbai").then(m => ({ default: m.AgencyinNaviMumbai })));
const AgencyinPune = lazy(() => import("./screens/AgencyinPune/AgencyinPune").then(m => ({ default: m.AgencyinPune })));

const Privacypage = lazy(() => import("./screens/Privacypage").then(m => ({ default: m.Privacypage })));
const TermsAndConditions = lazy(() => import("./screens/TermsAndConditionsPage").then(m => ({ default: m.TermsAndConditions })));
const Thankyou = lazy(() => import("./screens/Thankyou").then(m => ({ default: m.Thankyou })));
const NotFound = lazy(() => import("./screens/NotFound/NotFound").then(m => ({ default: m.NotFound })));

export const App = (): JSX.Element => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
      <Routes>

        <Route path="/" element={<Main />} />
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

        <Route path="/services/video-production" element={<VideoProductionServices />} />
        <Route path="/services/video-production/ai-video-production" element={<AIVideoProductionServices />} />

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

        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/ebooks" element={<Ebooks />} />
        <Route path="/resources/videos" element={<Videos />} />
        <Route path="/resources/slideshare-ppt" element={<SlideSharePPTS />} />
        <Route path="/resources/search-engine-optimization-ppt" element={<SearchEngineOptimizationSEOS />} />
        <Route path="/resources/social-media-ppt" element={<SocialMediaPPTS />} />
        <Route path="/resources/google-ads-ppt" element={<GoogleAdsPPTS />} />
        <Route path="/resources/content-marketing-ppt" element={<ContentMarketingPPTS />} />
        <Route path="/resources/website-design-development-ppt" element={<WebsiteDesignDevelopmentPPTS />} />
        <Route path="/resources/employer-branding-ppt" element={<EmployerBrandingPPTS />} />

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
    </Suspense>
  );
};