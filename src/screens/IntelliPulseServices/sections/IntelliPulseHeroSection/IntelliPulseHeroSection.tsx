// src/pages/services/content-writing/sections/ContentWritingHeroSection.tsx
import { NavLink } from "react-router-dom";
import { Header } from "../../../../components/layout/Header";
import { Helmet } from "react-helmet-async";

export const IntelliPulseHeroSection = (): JSX.Element => {
  return (
    <>
     <Helmet> 
    <meta name="description" content="Intelli Pulse helps businesses unlock clarity from complexity through AI-powered insights, automation, and real-time intelligence." />
<meta name="keywords" content="Intelli Pulse, AI-powered insights, real-time intelligence, data automation, Impulse Digital" />
<title>Turn Raw Data Into Intelligent Decisions With Intelli Pulse | Impulse Digital</title>

<meta name="robots" content="index, follow" />
<meta name="revisit-after" content="1 day" />
<meta name="language" content="English" />
<meta name="generator" content="N/A" />

<meta property="og:title" content="Turn Raw Data Into Intelligent Decisions With Intelli Pulse | Impulse Digital" />
<meta property="og:description" content="Intelli Pulse helps businesses unlock clarity from complexity through AI-powered insights, automation, and real-time intelligence." />
<meta property="og:url" content="https://www.theimpulsedigital.com/services/intelli-pulse" />
<meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
<meta property="og:site_name" content="Impulse Digital" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content= "summary_large_image"  />
<meta name="twitter:site" content="@impulsedigi" />
<meta name="twitter:creator" content="@impulsedigi" />
<meta name="twitter:title" content="Turn Raw Data Into Intelligent Decisions With Intelli Pulse | Impulse Digital" />
<meta name="twitter:description" content="Intelli Pulse helps businesses unlock clarity from complexity through AI-powered insights, automation, and real-time intelligence." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
<meta name="twitter:url" content="https://www.theimpulsedigital.com/services/intelli-pulse" />

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
          <source src="/intelli-pulse-banner-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay layer for dark tint */}
        <div className="absolute inset-0 bg-[#020018]/80 pointer-events-none"
          aria-hidden="true" />
        </div>

      {/* Global Header (overlayed on top of hero) */}
      <div className="absolute top-0 left-0 right-0 z-[999] border-bot">
        <Header />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pt-24 px-4">
        <h1 className="[font-family:'DM_Sans',Helvetica] font-black text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-[1.2] tracking-tight mb-6 max-w-[1200px]">
            INTELLI PULSE
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
          <span className="text-white">INTELLI PULSE</span>
        </nav>
      </div>
    </section>
    </>
  );
};
