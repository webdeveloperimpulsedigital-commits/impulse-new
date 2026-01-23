import Header from "../../../../components/layout/Header";
import { Helmet } from "react-helmet-async";

export const FeaturedItemsSection = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Impulse Digital is a leading digital marketing agency in Thane serving large and small businesses with their customer and sales-driven marketing solutions. Our expert team of digital marketers are well-equipped with market insights that help them design digital marketing strategies and solutions that help you stand out of the competition."
        />
        <meta
          name="keywords"
          content="digital marketing agency in thane, digital marketing company, impulse digital"
        />
        <title>
          Digital Marketing Agency in Thane | SEO Company | Impulse Digital
        </title>

        <meta name="revisit-after" content="1 day" />
        <meta name="language" content="English" />
        <meta name="generator" content="Impulse Digital" />

        <meta
          property="og:title"
          content="Digital Marketing Agency in Thane | SEO Company | Impulse Digital"
        />
        <meta
          property="og:description"
          content="Impulse Digital is a leading digital marketing agency in Thane serving large and small businesses with their customer and sales-driven marketing solutions. Our expert team of digital marketers are well-equipped with market insights that help them design digital marketing strategies and solutions that help you stand out of the competition."
        />
        <meta
          property="og:url"
          content="https://www.theimpulsedigital.com/digital-marketing-agency-in-thane"
        />
        <meta
          property="og:image"
          content="https://www.theimpulsedigital.com/img/mumbai-img/digital-marketing-company-in-thane.jpg"
        />
        <meta property="og:site_name" content="Impulse Digital" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@impulsedigi" />
        <meta name="twitter:creator" content="@impulsedigi" />
        <meta
          name="twitter:title"
          content="Digital Marketing Agency in Thane | SEO Company | Impulse Digital"
        />
        <meta
          name="twitter:description"
          content="Impulse Digital is a leading digital marketing agency in Thane serving large and small businesses with their customer and sales-driven marketing solutions. Our expert team of digital marketers are well-equipped with market insights that help them design digital marketing strategies and solutions that help you stand out of the competition."
        />
        <meta
          name="twitter:image"
          content="https://www.theimpulsedigital.com/img/mumbai-img/digital-marketing-company-in-thane.jpg"
        />
        <meta
          name="twitter:url"
          content="https://www.theimpulsedigital.com/digital-marketing-agency-in-thane"
        />

        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.theimpulsedigital.com/digital-marketing-agency-in-thane"
        />
      </Helmet>

      <section
        className="relative w-full h-screen min-h-[600px] mb-0 sm:h-[700px] md:h-[800px] lg:h-[820px] rounded-t-[55px] overflow-hidden"
        data-section="hero"
      >
        <header>
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

              {/* Dark Overlay */}
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
                         px-0 sm:px-6 md:px-2 lg:px-20 pt-20 lg:pt-24 lg:pl-0"
            >
              {/* SINGLE H1 */}
              <h1 className="font-dm-sans font-black text-white text-[32px] sm:text-[48px] md:text-[64px] lg:text-[100px] xl:text-[100px] lg:leading-[100px] xl:leading-[120px] tracking-tight mb-8 sm:mb-12">
               Result-Driven 
                <br />
               Digital Marketing
               <br />
                Agency in Thane
              </h1>

              {/* Description */}
              <p
                className="font-dm-sans text-white text-sm sm:text-base md:text-lg lg:text-[26px]
                           max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]
                           mx-auto lg:mx-0 lg:leading-[40px] mb-8 sm:mb-12"
              >
                The world has gone digital, and your business shouldn’t be left
                behind.
              </p>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default FeaturedItemsSection;
