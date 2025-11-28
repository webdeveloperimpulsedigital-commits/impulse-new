// src/pages/services/content-writing/sections/ContentWritingHeroSection.tsx
import { NavLink } from "react-router-dom";
import { Header } from "../../../../components/layout/Header";
import { Helmet } from "react-helmet-async";

export const AboutHeroSection = (): JSX.Element => {
  return (
<>
          {/* ✅ SEO Meta Tags */}
    <Helmet> 
    <title>About Impulse Digital - Creative Digital Marketing Agency</title>

<meta name="robots" content="index, follow"/>
<meta name="revisit-after" content="1 day"/>
<meta name="language" content="English"/>
<meta name="generator" content="N/A"/>

<meta property="og:title" content="About Impulse Digital - Creative Digital Marketing Agency"/>
<meta property="og:description" content="A full-fledged creative digital marketing agency to help you unleash the true potential of your brand on the digital front. With Impulse Digital, get more leads &amp; grow revenue."/>
<meta property="og:url" content="https://web.archive.org/web/20250610013748/https://www.theimpulsedigital.com/about-us"/>
<meta property="og:image" content="https://web.archive.org/web/20250610013748im_/https://www.theimpulsedigital.com/img/logo-id-new.jpg"/>
<meta property="og:site_name" content="Impulse Digital"/>
<meta property="og:type" content="website"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:site" content="@impulsedigi"/>
<meta name="twitter:creator" content="@impulsedigi"/>
<meta name="twitter:title" content="About Impulse Digital - Creative Digital Marketing Agency"/>
<meta name="twitter:description" content="A full-fledged creative digital marketing agency to help you unleash the true potential of your brand on the digital front. With Impulse Digital, get more leads &amp; grow revenue."/>
<meta name="twitter:image" content="https://web.archive.org/web/20250610013748im_/https://www.theimpulsedigital.com/img/logo-id-new.jpg"/>
<meta name="twitter:url" content="https://web.archive.org/web/20250610013748im_/https://www.theimpulsedigital.com/about-us"/>
<link rel="canonical" href="https://www.theimpulsedigital.com/about-us" />
<link rel="icon" type="image/x-icon" href="/resource-icon.png" />

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
          About Us
        </h1>

        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-white/80 text-sm">
          <NavLink to="/" className="hover:text-white transition-colors">
            Home
          </NavLink>
          <span className="select-none">{">"}</span>
          <span className="text-white">About Us</span>
        </nav>
      </div>
    </section>

    </>
  );
};
