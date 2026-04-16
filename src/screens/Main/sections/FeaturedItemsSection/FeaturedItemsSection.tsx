import React from "react";
import { Helmet } from "react-helmet-async";
import { JsonLd } from "react-schemaorg";
import Header from "../../../../components/layout/Header";

export const FeaturedItemsSection = (): JSX.Element => {
  const heroTextLines = ["For Anything", "But Ordinary",];
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
        <meta name="robots" content="index, follow" />
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
      <section
        className="relative w-full h-screen min-h-[600px] mb-0 h-[600px] sm:h-[700px] md:h-[800px] lg:h-[820px] rounded-t-[55px] overflow-hidden"
        data-section="hero"
      >
        <header>
          <Header />

          <div className="absolute inset-0 w-full h-[598px] sm:h-[698px] md:h-[798px] lg:h-[818px]">
            {/* ✅ LCP FIX: HTML image (so browser can prioritize it) */}
            <img
              src="/rectangle-35.jpg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              width={1920}
              height={1080}
              decoding="async"
              {...({
                fetchpriority: "high",
              } as React.ImgHTMLAttributes<HTMLImageElement>)}
            />

            {/* Background Video */}
            <div className="absolute inset-0 z-0">
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

            {/* Hero Content */}
            <div
              className="xl:w-[1450px] lg:w-[1290px] mx-auto absolute inset-0 flex flex-col justify-center
                        items-center text-center
                        lg:items-start lg:text-left
                        px-0 sm:px-6 md:px-2 lg:px-20 pt-20 lg:pt-24 lg:pl-0 sm:pt-25"
            >
              {/* Main Heading */}
              <div className="mb-8 sm:mb-12 text-center lg:text-left">
                <h1
                  className="font-dm-sans font-black text-white text-[32px] sm:text-[48px] md:text-[64px] lg:text-[100px]
                      xl:text-[100px] lg:leading-[100px] xl:leading-[120px] tracking-tight mb-1"
                >
                  {heroTextLines.map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h1>
              </div>

              {/* Description */}
              <p
                className="font-dm-sans text-white text-sm sm:text-base md:text-lg lg:text-[26px]
                          max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]
                          mx-auto lg:mx-0 lg:leading-[40px] mb-8 sm:mb-12"
              >
                We blend strategy, design, and AI to create brands that stand apart.
                Because the world has enough average already.
              </p>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default FeaturedItemsSection;