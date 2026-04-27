import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { JsonLd } from "react-schemaorg";
import Header from "../../../../components/layout/Header";
import ShimmerText from "../../../../components/ui/shimmer-text";

export const FeaturedItemsSection = (): JSX.Element => {
  const videoRef = useRef<HTMLDivElement>(null);

  const scrollToVideo = () => {
    videoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const heroTextLines = [
    "Most marketing decisions",
    "are made without the most",
    "important input: your own data."
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.theimpulsedigital.com/#organization",
        name: "Impulse Digital",
        url: "https://www.theimpulsedigital.com/",
        logo: "https://www.theimpulsedigital.com/header-logo.png",
        description:
          "Impulse Digital is a Mumbai-based 360° digital marketing agency offering branding, SEO, website development, performance marketing, content, video production, social media marketing, employer branding, and Agentic AI services.",
        email: "collabs@theimpulsedigital.com",
        telephone: "+91-9769285224",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "304 – 305, Chirag Infotech, Road No. 16/Z, Ambica Nagar, Wagle Industrial Estate",
          addressLocality: "Thane",
          addressRegion: "Maharashtra",
          postalCode: "400604",
          addressCountry: "IN",
        },
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Thane" },
          { "@type": "City", name: "Navi Mumbai" },
          { "@type": "City", name: "Pune" },
        ],
        sameAs: [
          "https://www.facebook.com/theimpulsedigital",
          "https://twitter.com/impulsedigi",
          "https://www.instagram.com/_impulse_digital/",
          "https://www.youtube.com/channel/UCzQglQAeXGI99Z-LZI9jBkw",
          "https://www.linkedin.com/company/impulse-digital-marketing-mumbai",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital Marketing Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Agentic AI",
                serviceType: "Agentic AI",
                url: "https://www.theimpulsedigital.com/services/agentic-ai/",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "SEO",
                serviceType: "Search Engine Optimization",
                url: "https://www.theimpulsedigital.com/services/search-engine-optimization",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Website Development & Design",
                serviceType: "Website Design and Development",
                url: "https://www.theimpulsedigital.com/services/website-development/",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Performance Marketing",
                serviceType: "Performance Marketing",
                url: "https://www.theimpulsedigital.com/services/performance-marketing",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Content Writing Services",
                serviceType: "Content Writing",
                url: "https://www.theimpulsedigital.com/services/content-writing-services/",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Video Production",
                serviceType: "Video Production",
                url: "https://www.theimpulsedigital.com/services/social-media-video-production",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Social Media Marketing",
                serviceType: "Social Media Marketing",
                url: "https://www.theimpulsedigital.com/services/social-media-marketing",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Employer Branding",
                serviceType: "Employer Branding",
                url: "https://www.theimpulsedigital.com/services/employer-branding-agency/",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Branding",
                serviceType: "Branding and Creative Services",
                url: "https://www.theimpulsedigital.com/services/branding-creative-services",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.theimpulsedigital.com/#website",
        url: "https://www.theimpulsedigital.com/",
        name: "Impulse Digital",
        publisher: {
          "@id": "https://www.theimpulsedigital.com/#organization",
        },
        inLanguage: "en",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.theimpulsedigital.com/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.theimpulsedigital.com/#webpage",
        url: "https://www.theimpulsedigital.com/",
        name: "Best Digital Marketing Agency in Mumbai | Impulse Digital",
        isPartOf: {
          "@id": "https://www.theimpulsedigital.com/#website",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://www.theimpulsedigital.com/",
        },
        description:
          "Impulse Digital is a Mumbai-based digital marketing agency offering SEO, website development, performance marketing, social media marketing, branding, employer branding, content writing, video production, and Agentic AI services.",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.theimpulsedigital.com/",
            },
          ],
        },
        inLanguage: "en",
      },
    ],
  };
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        {/* Basic SEO Meta Tags */}
        <title>Best Digital Marketing Agency in Mumbai | Impulse Digital</title>
        <meta
          name="description"
          content="Impulse Digital is a top digital marketing agency in Mumbai that helps businesses expand their reach in the digital space with strategy, performance marketing, SEO, social media, content, and creative solutions for brands like Amazon, HUL, OLA, Dmart, HDFC and more."
        />
        <meta
          name="keywords"
          content="digital marketing agency in mumbai, digital marketing company, impulse digital"
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="revisit-after" content="1 day" />
        <meta name="language" content="English" />
        <meta name="generator" content="N/A" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Best Digital Marketing Agency in Mumbai | Impulse Digital"
        />
        <meta
          property="og:description"
          content="Impulse Digital is a top digital marketing agency in Mumbai that helps businesses expand their reach in the digital space with strategy, performance marketing, SEO, social media, content, and creative solutions."
        />
        <meta property="og:url" content="https://www.theimpulsedigital.com" />
        <meta
          property="og:image"
          content="https://www.theimpulsedigital.com/img/logo-id-new.jpg"
        />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://www.theimpulsedigital.com" />

        {/* ✅ LCP FIX: Preload hero LCP image ASAP */}
        <link
          rel="preload"
          as="image"
          href="/rectangle-35.jpg"
          // @ts-expect-error - TS DOM typings may not include fetchpriority yet
          fetchpriority="high"
        />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>





      {/* ✅ Hero Section */}
      {/* ✅ Hero Section */}
      <section
        className="relative w-full bg-[#020018] rounded-t-[55px] overflow-hidden"
        data-section="hero"
      >
        <Header />

        <div className="w-full flex flex-col pt-24 lg:pt-32 pb-0">
          
          {/* Top Text Content Area */}
          <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start mb-8 lg:mb-12">
            
            {/* Left Side: Play Button Area */}
            <div className="col-span-1 lg:col-span-3 flex flex-row items-center gap-4">
              <button 
                onClick={scrollToVideo}
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors duration-300 group cursor-pointer"
              >
                <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white ml-1 opacity-70 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <div 
                onClick={scrollToVideo}
                className="flex flex-col text-white/90 text-[10px] lg:text-xs uppercase tracking-[0.15em] font-medium cursor-pointer"
              >
                <span className="underline underline-offset-4 mb-1 hover:text-white/60 transition-colors">Watch</span>
                <span className="underline underline-offset-4 hover:text-white/60 transition-colors">Showreel</span>
              </div>
            </div>

            {/* Center Area: Title & Paragraph */}
            <div className="col-span-1 lg:col-span-8 flex flex-col items-start text-left">
              {/* Main Heading */}
              <h1
                className="font-dm-sans font-medium text-[22px] sm:text-[28px] md:text-[32px] lg:text-[40px]
                    xl:text-[44px] lg:leading-[1.2] xl:leading-[1.2] tracking-tight mb-4 max-w-[800px]"
              >
                <ShimmerText className="text-white">
                  {heroTextLines.map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </ShimmerText>
              </h1>

              {/* Description */}
              <p
                className="font-dm-sans text-white/60 text-xs sm:text-sm md:text-sm lg:text-[15px]
                          max-w-[100%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[650px]
                          leading-relaxed lg:leading-[1.6] mb-6 font-light"
              >
                Impulse Digital is the AI-native growth intelligence partner for enterprise marketing teams that need to close the gap between what their data knows and what their decisions reflect.
              </p>

              {/* CTA Button */}
              <a 
                href="#work" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white rounded-full hover:bg-[#543d98] hover:text-white text-[#543d98] transition-colors duration-300 group"
              >
                <span className="font-dm-sans font-bold text-sm md:text-base">See how we work</span>
                <img 
                  src="/vector-1-3.svg" 
                  alt="Arrow" 
                  className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 group-hover:brightness-0 group-hover:invert pointer-events-none" 
                />
              </a>
            </div>

            {/* Right Side: Empty space (numbers removed per request) */}
            <div className="hidden lg:block lg:col-span-1"></div>
          </div>

          {/* Full Width Video Section */}
          <div 
            ref={videoRef}
            className="w-full relative mt-8 lg:mt-12 bg-[#020018]" 
            style={{ aspectRatio: "16/9", minHeight: "400px" }}
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/rectangle-35.jpg"
            >
              <source src="/impulse-video-new.mp4" type="video/mp4" />
            </video>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default FeaturedItemsSection;