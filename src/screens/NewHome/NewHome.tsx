import { ScrollRevealLogoHome } from "../../components/ScrollRevealLogo/ScrollRevealLogoHome";
import { FeaturedItemsSection } from "./sections/FeaturedItemsSection/FeaturedItemsSection";
import { FullWidthVideoSection } from "./sections/FullWidthVideoSection/FullWidthVideoSection";
import { AboutSection } from "./sections/AboutSection/AboutSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { ClientsSection } from "./sections/ClientSection/ClientSection";
// import { ScrollingStripsSection } from "./sections/ScrollingStripsSection/ScrollingStripsSection";
import { ZoomGridSection } from "./sections/ZoomGridSection/ZoomGridSection";
import { CaseStudiesGrid } from "./sections/CaseStudiesGrid/CaseStudiesGrid";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { BlogSection } from "./sections/BlogSection/BlogSection";
import { ContactResourcesSection } from "./sections/ContactResourcesSection/ContactResourcesSection";
//import { ResourcesTeaserSection } from "./sections/ResourcesSection/ResourcesSection";
import { FAQSection } from "./sections/FAQSection/FAQSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
 
import { FAQSchema } from "../../components/SEO/FAQSchema";
import { faqData } from "../../data/faqs";

export const NewHome = (): JSX.Element => { 
  const faqs = faqData["/new-home"] || [];
  return (
    <main className="new-home-page relative w-full min-h-screen">
      <style>{`
        .new-home-page h1,
        .new-home-page h2,
        .new-home-page h3,
        .new-home-page h4,
        .new-home-page h5,
        .new-home-page h6,
        .new-home-page h1 *,
        .new-home-page h2 *,
        .new-home-page h3 *,
        .new-home-page h4 *,
        .new-home-page h5 *,
        .new-home-page h6 * {
          font-family: 'Satoshi', sans-serif !important;
        }
      `}</style>
      <FAQSchema faqs={faqs} />
      <ScrollRevealLogoHome />
      <div className="relative w-full space-y-0">
        <FeaturedItemsSection />
        <FullWidthVideoSection />
        {/* <AboutSection /> */}
        {/* <ZoomGridSection /> */}
        <CaseStudiesGrid />
        <ClientsSection/> 
        <ServicesSection />
        {/* <ScrollingStripsSection /> */}
        <TestimonialsSection />
        <BlogSection />
        <ContactResourcesSection />
        {/* <ResourcesTeaserSection /> */}
        <FAQSection faqs={faqs} />
        <FooterSection />
      </div>
    </main>
  );
};
