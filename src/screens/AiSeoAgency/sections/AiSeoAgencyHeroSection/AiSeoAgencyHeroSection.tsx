// src/pages/services/content-writing/sections/ContentWritingHeroSection.tsx
import { NavLink } from "react-router-dom";
import { Header } from "../../../../components/layout/Header";
import { Helmet } from "react-helmet-async";

export const AiSeoAgencyHeroSection = (): JSX.Element => {
  return (
    <>
  <Helmet> 
    <title>AI SEO Agency | Advanced AI SEO Service for Higher Rankings</title>
    <meta name="description" content="Partner with a top AI SEO agency in Mumbai that delivers data-driven AI SEO services to boost organic rankings, enhance search visibility, and accelerate business growth with intelligent automation and strategic optimization."/>
    <meta name="keywords" content="ai seo agency, ai seo service, mumbai, india, impulse digital"/>
    <meta property="og:title" content="AI SEO Agency | Advanced AI SEO Service for Higher Rankings Digital" />
    <meta property="og:description" content="Partner with a top AI SEO agency in Mumbai that delivers data-driven AI SEO services to boost organic rankings, enhance search visibility, and accelerate business growth with intelligent automation and strategic optimization. team helps us stand out from a cluster of digital marketing agencies in Mumbai. We are handling a plethora of clients which includes Amazon, HUL, OLA, Dmart, HDFC, and more big market giants." />
    <meta property="og:url" content="https://www.theimpulsedigital.com" />
    <meta property="og:image" content="https://www.theimpulsedigital.com/AI-SEO-Agency.jpg" />
    <meta property="og:site_name" content="Impulse Digital" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@impulsedigi" />
    <meta name="twitter:creator" content="@impulsedigi" />
    <meta name="twitter:title" content="AI SEO Agency | Advanced AI SEO Service for Higher Rankings Digital" />
    <meta name="twitter:description" content="Partner with a top AI SEO agency in Mumbai that delivers data-driven AI SEO services to boost organic rankings, enhance search visibility, and accelerate business growth with intelligent automation and strategic optimization. team helps us stand out from a cluster of digital marketing agencies in Mumbai. We are handling a plethora of clients which includes Amazon, HUL, OLA, Dmart, HDFC, and more big market giants." />
    <meta name="twitter:image" content="https://www.theimpulsedigital.com/AI-SEO-Agency.jpg" />
    <meta name="twitter:url" content="https://www.theimpulsedigital.com/services/search-engine-optimization/ai-seo-agency" />
    <link rel="canonical" href="https://www.theimpulsedigital.com/services/search-engine-optimization/ai-seo-agency" />
  </Helmet>
    <section
      className="relative w-full lg:h-screen sm:h-screen lg:min-h-[700px] sm:min-h-[500px] rounded-t-[55px] overflow-hidden"
      data-section="content-writing-hero"
    >
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true">
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay layer for dark tint */}
        <div className="absolute inset-0 bg-[#020018]/80 pointer-events-none"
          aria-hidden="true" />
        </div>

      {/* Global Header (overlayed on top of hero) */}
      <div className="absolute top-0 left-0 right-0 z-[999] border-bot">
        <Header />
      </div>

      {/* Hero Copy */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pt-24 px-4">
        <h1 className="[font-family:'DM_Sans',Helvetica] font-black text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-[40px] tracking-tight mb-6">
          AI SEO
        </h1>

        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-white/80 text-sm">
          <NavLink to="/" className="hover:text-white transition-colors">
            Home
          </NavLink>
          <span className="select-none">{">"}</span>
          <NavLink to="/services" className="hover:text-white transition-colors">
            Services
          </NavLink>
          
           <span className="select-none">{">"}</span>
           <NavLink to="/services/search-engine-optimization" className="hover:text-white transition-colors">
            Seo
          </NavLink>
          <span className="select-none">{">"}</span>
          <span className="text-white">AI SEO</span>
        </nav>
      </div>
    </section>
    </>

  );
};
