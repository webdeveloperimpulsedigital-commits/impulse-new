import Header from "../../../../components/layout/Header";
import { Helmet } from "react-helmet-async";

export const FeaturedItemsSection = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>
          Digital Marketing Agency in Thane | SEO Company | Impulse Digital
        </title>
      </Helmet>

      <section
        className="relative w-full min-h-[100svh] overflow-hidden rounded-t-[55px]"
        data-section="hero"
      >
        {/* HEADER */}
        <Header />

        {/* BACKGROUND */}
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

          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundColor: "#020018", opacity: 0.85 }}
          />
        </div>

        {/* CONTENT */}
        <div
          className="
            relative z-10
            max-w-[1450px] mx-auto
            flex flex-col justify-center
            min-h-[calc(100svh-80px)]
            items-center text-center
            lg:items-start lg:text-left
            px-4 sm:px-6 lg:px-20
          "
        >
          <h1
            className="font-dm-sans font-black text-white
                       text-[32px] sm:text-[48px] md:text-[64px]
                       lg:text-[100px] xl:text-[100px]
                       lg:leading-[100px] xl:leading-[120px]
                       tracking-tight mb-8"
          >
            Result-Driven <br />
            Digital Marketing <br />
            Agency in Thane
          </h1>

          <p
            className="font-dm-sans text-white
                       text-sm sm:text-base md:text-lg lg:text-[26px]
                       max-w-[90%] sm:max-w-[80%] lg:max-w-[60%]
                       mx-auto lg:mx-0 lg:leading-[40px]"
          >
            The world has gone digital, and your business shouldn’t be left
            behind.
          </p>
        </div>
      </section>
    </>
  );
};

export default FeaturedItemsSection;
