import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../../../components/layout/Header";

export const FeaturedItemsSection = (): JSX.Element => {
  const videoRef = useRef<HTMLDivElement>(null);

  const scrollToVideo = () => {
    videoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
      <Helmet>
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
        <link rel="canonical" href="https://www.theimpulsedigital.com" />
        <link
          rel="preload"
          as="image"
          href="/rectangle-35.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      {/* ✅ Premium Hero Section */}
      <section
        className="relative w-full h-screen min-h-screen mb-0 rounded-t-[55px] overflow-hidden bg-[#020018]"
        data-section="new-hero"
      >
        <header>
          <Header />
          
          <div className="absolute inset-0 w-full h-full flex flex-col">
            {/* Background Video */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/rectangle-35.jpg"
              >
                <source src="/bg-video.mp4" type="video/mp4" />
              </video>

              {/* Dark overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundColor: "#020018", opacity: 0.85 }}
                aria-hidden="true"
              />
            </div>

        {/* Main Hero Content Overlay */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 flex-1 flex flex-col justify-end lg:justify-between pb-24 lg:pb-32 pt-32 sm:pt-40 lg:pt-48 gap-8 lg:gap-0">
          
          {/* Top Left: Premium Elegant Heading */}
          <div className="w-full max-w-[1000px] pointer-events-auto">
            <h1 className="font-serif font-light text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] xl:text-[48px] leading-[1.2] text-white tracking-tight">
              Most marketing decisions <br className="hidden md:block" />
              are made without the most <br className="hidden md:block" />
              <span className="italic text-[#d9d5f0]">important input: your own data.</span>
            </h1>
          </div>

          {/* Bottom Area: CTAs */}
          <div className="w-full flex justify-start lg:justify-end items-end lg:mt-auto pointer-events-auto pb-8 lg:pb-16">
            
            {/* Right side: Subtext and Buttons */}
            <div className="w-full lg:w-1/2 xl:w-2/5 flex flex-col items-start lg:items-end text-left lg:text-right gap-8">
              <p className="font-dm-sans text-white/70 text-sm md:text-base leading-relaxed max-w-[420px] font-light">
                Impulse Digital is the AI-native growth intelligence partner for enterprise marketing teams that need to close the gap between what their data knows and what their decisions reflect.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start lg:justify-end gap-6 w-full lg:w-auto">
                <a 
                  href="#work" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-full hover:bg-[#543d98] hover:text-white text-[#543d98] transition-colors duration-300 group"
                >
                  <span className="font-dm-sans font-semibold text-sm">See how we work</span>
                  <img 
                    src="/vector-1-3.svg" 
                    alt="Arrow" 
                    className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 group-hover:brightness-0 group-hover:invert pointer-events-none" 
                  />
                </a>
              </div>
            </div>

          </div>
          </div>
          </div>
        </header>
      </section>

      {/* Target for scrolling down */}
      <div ref={videoRef} />
    </>
  );
};

export default FeaturedItemsSection;