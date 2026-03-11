// src/pages/services/content-writing/sections/ContentWritingHeroSection.tsx
import { NavLink } from "react-router-dom";
import { Header } from "../../../../components/layout/Header";
import { Helmet } from "react-helmet-async";
export const AforceforgoodCaseStudyHeroSection = (): JSX.Element => {
  return (
    <>
      <Helmet>
    <title>How Impulse Digital Powered the ‘A Force For Good’ Campaign | Case Study</title>
    <meta name="description" content="A case study on the ‘A Force For Good’ campaign by Impulse Digital, showcasing creative branding, storytelling, and digital marketing impact." />
    <meta name="keywords" content="" />
    
    <meta name="robots" content="index, follow" />
    <meta name="revisit-after" content="1 day" />
    <meta name="language" content="English" />
    <meta name="generator" content="N/A" />
    
    <meta property="og:title" content="How Impulse Digital Powered the ‘A Force For Good’ Campaign | Case Study" />
    <meta property="og:description" content="A case study on the ‘A Force For Good’ campaign by Impulse Digital, showcasing creative branding, storytelling, and digital marketing impact." />
    <meta property="og:url" content="https://www.theimpulsedigital.com/casestudies/aforceforgood/" />
    <meta property="og:image" content="https://www.theimpulsedigital.com/ffg-main.jpg" />
    <meta property="og:site_name" content="Impulse Digital" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content= "summary_large_image"  />
    <meta name="twitter:site" content="@impulsedigi" />
    <meta name="twitter:creator" content="@impulsedigi" />
    <meta name="twitter:title" content="How Impulse Digital Powered the ‘A Force For Good’ Campaign | Case Study" />
    <meta name="twitter:description" content="A case study on the ‘A Force For Good’ campaign by Impulse Digital, showcasing creative branding, storytelling, and digital marketing impact." />
    <meta name="twitter:image" content="https://www.theimpulsedigital.com/ffg-main.jpg" />
    <meta name="twitter:url" content="https://www.theimpulsedigital.com/casestudies/aforceforgood/" />
    
    {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="How Impulse Digital Powered the ‘A Force For Good’ Campaign | Case Study"
        />
        <meta
          property="og:description"
          content="A case study on the ‘A Force For Good’ campaign by Impulse Digital, showcasing creative branding, storytelling, and digital marketing impact."
        />
        <meta property="og:url" content="https://www.theimpulsedigital.com" />
        <meta
          property="og:image"
          content="https://www.theimpulsedigital.com/brut-abg.jfif"
        />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://www.theimpulsedigital.com/casestudies/aforceforgood/" />

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
         A FORCE FOR GOOD
        </h1>

        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-white/80 text-sm">
          <NavLink to="/" className="hover:text-white transition-colors">
            Home
          </NavLink>
          <span className="select-none">{">"}</span>
           
           <NavLink to="/casestudies" className="hover:text-white transition-colors">
            Case Studies
          </NavLink>
            <span className="select-none">{">"}</span>
          <span className="text-white">A FORCE FOR GOOD</span>
        </nav>
      </div>
    </section>
    </>
  );
};
