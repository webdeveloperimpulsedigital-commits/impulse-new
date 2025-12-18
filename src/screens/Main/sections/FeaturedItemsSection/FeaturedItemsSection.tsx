import { Helmet } from 'react-helmet-async';
import { JsonLd } from 'react-schemaorg';
import Header from "../../../../components/layout/Header";

export const FeaturedItemsSection = (): JSX.Element => {
  const heroTextLines = ["TURNING", "YOUR BUSINESS", "INTO A BRAND"];

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
<meta name="robots" content="index, follow"/>
<meta name="revisit-after" content="1 day"/>
<meta name="language" content="English"/>
<meta name="generator" content="N/A"/>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Best Digital Marketing Agency in Mumbai | Impulse Digital" />
        <meta
          property="og:description"
          content="Impulse Digital is a top digital marketing agency in Mumbai that helps businesses expand their reach in the digital space with strategy, performance marketing, SEO, social media, content, and creative solutions."
        />
        <meta property="og:url" content="https://www.theimpulsedigital.com" />
        <meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
        <meta property="og:type" content="website" />
        
       <link rel="canonical" href="https://www.theimpulsedigital.com"/>

      </Helmet>

      {/* JSON-LD Schema for ProfessionalService using JsonLd component */}
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Impulse Digital",
          image: "https://www.theimpulsedigital.com/footer-logo.png",
          "@id": "https://www.theimpulsedigital.com/#professionalservice",
          url: "https://www.theimpulsedigital.com",
          telephone: "+91 9769285224",
          priceRange: "INR 50000 and above",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "304-305, Chirag Infotech, Road No. 16/Z, Ambica Nagar, Wagle Industrial Estate",
            addressLocality: "Thane",
            postalCode: "400604",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 19.2034942,
            longitude: 72.9539988,
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "10:00",
            closes: "19:00",
          },
          sameAs: [
            "https://in.linkedin.com/company/impulse-digital-marketing-mumbai",
            "https://www.facebook.com/theimpulsedigital",
            "https://twitter.com/impulsedigi",
            "https://instagram.com/_impulse_digital",
            "https://www.youtube.com/channel/UCzQglQAeXGI99Z-LZI9jBkw",
          ],
        }}
      />

      {/* JSON-LD for Website SearchAction */}
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Impulse Digital",
          url: "https://www.theimpulsedigital.com",
          "@id": "https://www.theimpulsedigital.com/#website",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://www.theimpulsedigital.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />

      {/* ✅ Hero Section */}
      <section
        className="relative w-full h-screen min-h-[600px] mb-0 h-[600px] sm:h-[700px] md:h-[800px] lg:h-[820px] rounded-t-[55px] overflow-hidden"
        data-section="hero"
      >
        <header>
          {/* Common header (overlay) */}
          <Header />

          <div className="absolute inset-0 w-full h-[598px] sm:h-[698px] md:h-[798px] lg:h-[818px] bg-[url(/rectangle-35.png)] bg-cover bg-center">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/rectangle-35.png"
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
                <h1 className="font-dm-sans font-black text-white text-[32px] sm:text-[48px] md:text-[64px] lg:text-[100px]
                      xl:text-[100px] lg:leading-[100px] xl:leading-[120px] tracking-tight mb-1">
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
                We blend strategy, design, and AI to build iconic brands.
                Because good isn’t enough when great is possible.
              </p>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default FeaturedItemsSection;
