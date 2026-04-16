import Header from "../../../../components/layout/Header";
import { Helmet } from "react-helmet-async";

export const FeaturedItemsSection = () => {

  const heroTextLines = [
    "BEST DIGITAL ",
    "MARKETING AGENCY ",
    "IN INDIA",
  ];

  const handleContactClick = () => {
    console.log("Contact button clicked");
  };

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="We as a Digital marketing agency in India are Handling plethora of clients which includes OLA, Amazon, HUL, HDFC, Dmart and more big market giants. We are super confident to take off your businesses digital success through our digital marketing strategies which supports your pocket as well. We have our forte and are counted as best digital marketing agency in India and SEO company in India."
        />
        <meta
          name="keywords"
          content="digital marketing agency in india, digital marketing company, seo company, impulse digital"
        />
        <title>
          Digital Marketing Agency in India | SEO Company | Impulse Digital
        </title>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 day" />
        <meta property="og:locale" content="en_US" />
        <meta name="language" content="English" />
        <meta name="generator" content="N/A" />

        <meta
          property="og:title"
          content="Digital Marketing Agency in India | SEO Company | Impulse Digital"
        />
        <meta
          property="og:description"
          content="We as a Digital marketing agency in India are Handling plethora of clients which includes OLA, Amazon, HUL, HDFC, Dmart and more big market giants."
        />
        <meta
          property="og:url"
          content="https://www.theimpulsedigital.com/digital-marketing-agency-in-india/"
        />
        <meta
          property="og:image"
          content="https://www.theimpulsedigital.com/impulse-usa-assets/img/industries.jpg"
        />
        <meta property="og:site_name" content="Impulse Digital" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@impulsedigi" />
        <meta name="twitter:creator" content="@impulsedigi" />
        <meta
          name="twitter:title"
          content="Digital Marketing Agency in India | SEO Company | Impulse Digital"
        />
        <meta
          name="twitter:description"
          content="We help businesses boost their online presence and growth."
        />
        <meta
          name="twitter:image"
          content="https://www.theimpulsedigital.com/impulse-usa-assets/img/industries.jpg"
        />

        <link
          rel="canonical"
          href="https://www.theimpulsedigital.com/digital-marketing-agency-in-india/"
        />
      </Helmet>

      <section
        className="relative w-full h-screen min-h-[600px] mb-0 sm:h-[700px] md:h-[800px] lg:h-[820px] rounded-t-[55px] overflow-hidden"
        data-section="india-hero"
      >
        <header>
          <Header />

          <div className="absolute inset-0 w-full h-full bg-[url(/rectangle-35.png)] bg-cover bg-center">

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

              {/* Overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundColor: "#020018", opacity: 0.85 }}
              />
            </div>

            {/* Hero Content */}
            <div
              className="xl:w-[1450px] lg:w-[1290px] mx-auto absolute inset-0 flex flex-col justify-center
              items-center text-center
              lg:items-start lg:text-left
              px-4 sm:px-6 md:px-2 lg:px-20 pt-20 lg:pt-24"
            >

              {/* ✅ SINGLE H1 (SEO FIX) */}
              <h1
                className="font-dm-sans font-black text-white 
                text-[32px] sm:text-[48px] md:text-[64px] 
                lg:text-[100px] xl:text-[100px] 
                lg:leading-[100px] xl:leading-[120px] tracking-tight mb-4"
              >
                {heroTextLines.map((line, index) => (
                  <span key={index} className="block">
                    {line}
                  </span>
                ))}
              </h1>

              {/* Description */}
              <p
                className="font-dm-sans text-white text-sm sm:text-base md:text-lg lg:text-[26px]
                max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]
                mx-auto lg:mx-0 lg:leading-[40px] mb-8 sm:mb-12"
              >
                We help businesses boost their online presence and growth with expert SEO,
                social media, and paid media strategies.
              </p>

            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default FeaturedItemsSection;
