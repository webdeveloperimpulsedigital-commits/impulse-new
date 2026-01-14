// src/pages/services/content-writing/sections/ContentWritingHeroSection.tsx
import { NavLink } from "react-router-dom";
import { Header } from "../../../../../components/layout/Header";
import { Helmet } from "react-helmet-async";
export const ThankyouHeroSection = (): JSX.Element => {
  return (

    <>
    <Helmet>
      <meta name="description" content="If you are looking for digital marketing solutions for your brand, feel free to submit the inquiry form or give us a call." />
<meta name="keywords" content="" />
<title>Get In Touch | Impulse Digital</title>
<meta name="robots" content="index, follow" />
<meta name="revisit-after" content="1 day" />
<meta name="language" content="English" />
<meta name="generator" content="N/A" />
<meta property="og:title" content="Get In Touch | Impulse Digital" />
<meta property="og:description" content="If you are looking for digital marketing solutions for your brand, feel free to submit the inquiry form or give us a call." />
<meta property="og:url" content="https://www.theimpulsedigital.com/contact-us" />
<meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
<meta property="og:site_name" content="Impulse Digital" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@impulsedigi" />
<meta name="twitter:creator" content="@impulsedigi" />
<meta name="twitter:title" content="Get In Touch | Impulse Digital" />
<meta name="twitter:description" content="If you are looking for digital marketing solutions for your brand, feel free to submit the inquiry form or give us a call." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
<meta name="twitter:url" content="https://www.theimpulsedigital.com/contact-us" />
<link rel="canonical" href="https://www.theimpulsedigital.com/contact-us" />
  
    </Helmet>

    <section
      className="relative w-full  rounded-t-[55px] overflow-hidden bg-black/60 min-h-[00px] flex items-center justify-center text-center pt-24 px-4"
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
      
      <style>{`
      .border-bot {
    border-bottom: 0px solid gray;
}
      `}
      </style>
    </section>
    </>
  );
};
