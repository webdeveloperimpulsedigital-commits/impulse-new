import Header from "../../../../components/layout/Header";
import { Helmet } from "react-helmet-async";

export const FeaturedItemsSection = (): JSX.Element => {

  return (
    <>
      <Helmet>
        <title>Digital Marketing Agency in Navi Mumbai | SEO Company | Impulse Digital</title>

        <meta
          name="description"
          content="Impulse Digital is a best digital marketing agency in Navi Mumbai with decades of expertise in global marketing. Our team of proficient experts endure 24*7 to see your brand excel in the online landscape."
        />

        <meta
          name="keywords"
          content="digital marketing agency in navi mumbai, digital marketing company, impulse digital"
        />

        <link
          rel="canonical"
          href="https://www.theimpulsedigital.com/digital-marketing-agency-in-navi-mumbai"
        />

        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Digital Marketing Agency in Navi Mumbai | Impulse Digital" />
        <meta property="og:description" content="Impulse Digital is a best digital marketing agency in Navi Mumbai with decades of expertise in global marketing." />
        <meta property="og:url" content="https://www.theimpulsedigital.com/digital-marketing-agency-in-navi-mumbai" />
        <meta property="og:image" content="https://www.theimpulsedigital.com/uploads/images/content/contact.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section
        className="relative w-full min-h-[600px] sm:h-[700px] md:h-[800px] lg:h-[820px] rounded-t-[55px] overflow-hidden"
        data-section="hero"
      >
        <header>
          <Header />

          <div className="absolute inset-0 bg-[url(/rectangle-35.png)] bg-cover bg-center">

            {/* Background Video */}
            <div className="absolute inset-0">
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
                className="absolute inset-0"
                style={{ backgroundColor: "#020018", opacity: 0.85 }}
                aria-hidden="true"
              />
            </div>

            {/* Hero Content */}
            <div className="xl:w-[1450px] lg:w-[1290px] mx-auto absolute inset-0 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 lg:px-20 pt-20">

              {/* ✅ SINGLE H1 */}
               <h1
            className="font-dm-sans font-black text-white
                       text-[32px] sm:text-[48px] md:text-[64px]
                       lg:text-[100px] xl:text-[100px]
                       lg:leading-[100px] xl:leading-[120px]
                       tracking-tight mb-8"
          >
            Result-Driven <br />
            Digital Marketing <br />
            Agency in <br></br>Navi Mumbai
          </h1>

              {/* Description */}
              <p className="font-dm-sans text-white text-sm sm:text-base md:text-lg lg:text-[26px] max-w-[60%] lg:leading-[40px] mb-8">
                In today’s fast-paced digital world, your business deserves to shine online.
              </p>

            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default FeaturedItemsSection;
