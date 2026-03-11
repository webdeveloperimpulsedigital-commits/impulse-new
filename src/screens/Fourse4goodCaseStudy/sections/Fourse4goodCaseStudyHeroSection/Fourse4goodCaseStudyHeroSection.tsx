// src/pages/services/content-writing/sections/ContentWritingHeroSection.tsx
import { NavLink } from "react-router-dom";
import { Header } from "../../../../components/layout/Header";
import { Helmet } from "react-helmet-async";
export const Fourse4goodCaseStudyHeroSection = (): JSX.Element => {
  return (
    <>
      <Helmet>
    <title>Fours for Good Campaign Case Study | Aditya Birla Group × Cricket Impact</title>
    <meta name="description" content="Explore how Impulse Digital executed Aditya Birla Group’s “Fours for Good” campaign during the Border-Gavaskar Trophy, converting cricket moments into real impact with 200+ children receiving professional training and 8.1M+ digital impressions." />
    <meta name="keywords" content="" />
    
    <meta name="robots" content="index, follow" />
    <meta name="revisit-after" content="1 day" />
    <meta name="language" content="English" />
    <meta name="generator" content="N/A" />
    
    <meta property="og:title" content="Fours for Good Campaign Case Study | Aditya Birla Group × Cricket Impact" />
    <meta property="og:description" content="Explore how Impulse Digital executed Aditya Birla Group’s “Fours for Good” campaign during the Border-Gavaskar Trophy, converting cricket moments into real impact with 200+ children receiving professional training and 8.1M+ digital impressions." />
    <meta property="og:url" content="https://www.theimpulsedigital.com/casestudies/fourseforgood/" />
    <meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
    <meta property="og:site_name" content="Impulse Digital" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content= "summary_large_image"  />
    <meta name="twitter:site" content="@impulsedigi" />
    <meta name="twitter:creator" content="@impulsedigi" />
    <meta name="twitter:title" content="Fours for Good Campaign Case Study | Aditya Birla Group × Cricket Impact" />
    <meta name="twitter:description" content="Explore how Impulse Digital executed Aditya Birla Group’s “Fours for Good” campaign during the Border-Gavaskar Trophy, converting cricket moments into real impact with 200+ children receiving professional training and 8.1M+ digital impressions." />
    <meta name="twitter:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
    <meta name="twitter:url" content="https://www.theimpulsedigital.com/casestudies/fourseforgood/" />
    
    {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Fours for Good Campaign Case Study | Aditya Birla Group × Cricket Impact"
        />
        <meta
          property="og:description"
          content="Explore how Impulse Digital executed Aditya Birla Group’s “Fours for Good” campaign during the Border-Gavaskar Trophy, converting cricket moments into real impact with 200+ children receiving professional training and 8.1M+ digital impressions."
        />
        <meta property="og:url" content="https://www.theimpulsedigital.com" />
        <meta
          property="og:image"
          content="https://www.theimpulsedigital.com/rahul-dravid.png"
        />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://www.theimpulsedigital.com/casestudies/fourseforgood/fourseforgood/" />

        {/* ✅ LCP FIX: Preload hero LCP image ASAP */}
        <link
          rel="preload"
          as="image"
          href="/rectangle-35.jpg"
          // @ts-expect-error - TS DOM typings may not include fetchpriority yet
          fetchpriority="high"
        />
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
        <h1 className="uppercase [font-family:'DM_Sans',Helvetica] font-black text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-[40px] tracking-tight mb-6">
         ADITYA BIRLA GROUP - FOURS FOR GOOD
        </h1>

        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-white/80 text-sm">
          <NavLink to="/" className="hover:text-white transition-colors">
            Home
          </NavLink>
          <span className="select-none">{">"}</span>
           <span className="text-white">Case Studies</span>
            <span className="select-none">{">"}</span>
          <span className="text-white">Fours For good</span>
        </nav>
      </div>
    </section>
    </>
  );
};
