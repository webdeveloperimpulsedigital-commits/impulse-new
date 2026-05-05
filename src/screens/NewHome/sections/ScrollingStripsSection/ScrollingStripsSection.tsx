import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";

export const ScrollingStripsSection = (): JSX.Element => {
  const servicesSecond = [
    "Services",
    "Production", 
    "Social Media Marketing",
    "Content Strategy",
    "Digital Marketing",
    "Brand Strategy",
    "Services",
    "Production",
    "Social Media Marketing",
    "Content Strategy",
    "Digital Marketing",
    "Brand Strategy",
  ];

  // const logos = [
    
  //   { name: "amazone", src: "/Aditya_Birla_Group_Logo.svg (1).jpg" },
  //   { name: "amazone", src: "/High Res Logo resize_Artboard 1 copy 40.png" },
  //   { name: "HUL", src: "/High Res Logo resize_Artboard 1 copy 52.png" },
  //   { name: "hdfc", src: "https://www.theimpulsedigital.com/hdfc.jpg" },
  //   { name: "mastercard", src: "https://www.theimpulsedigital.com/mastercard.jpg" },
  //   { name: "uppercase", src: "/uppercase.png" },
  //   { name: "Bajaj", src: "/Bajaj group.png" },
  //   { name: "ola", src: "https://www.theimpulsedigital.com/ola.jpg" },
  //   { name: "tata", src: "/High Res Logo resize_Artboard 1 copy 45.png" },
  //   { name: "d-mart", src: "/High Res Logo resize_Artboard 1 copy 34.png" },
  //    { name: "tata-soulful", src: "/High Res Logo resize_Artboard 1 copy 47.png" },
  //   { name: "abg-chemical", src: "/High Res Logo resize_Artboard 1 copy 43.png" },
  //   { name: "hindalco", src: "/High Res Logo resize_Artboard 1 copy 42.png" },
  //   { name: "abps", src: "/High Res Logo resize_Artboard 1 copy 38.png" },
  //   { name: "birla-celilues", src: "/High Res Logo resize_Artboard 1 copy 39.png" },
  //   { name: "godrej", src: "/High Res Logo resize_Artboard 1 copy 58.png" },
  //   { name: "chings", src: "https://www.theimpulsedigital.com/chings.jpg" },
  //   { name: "more", src: "https://www.theimpulsedigital.com/more.jpg" },
  //   { name: "tjsb", src: "/High Res Logo resize_Artboard 1 copy 46.png" },
  //   { name: "jankalyan", src: "/High Res Logo resize_Artboard 1 copy 56.png" },
  //   { name: "navayasa", src: "https://www.theimpulsedigital.com/navayasa.jpg" },
  //   { name: "croda", src: "/High Res Logo resize_Artboard 1 copy 35.png" },
  //   { name: "qure-ai", src: "https://www.theimpulsedigital.com/qure-ai.jpg" },
  //   { name: "aster", src: "/High Res Logo resize_Artboard 1 copy 60.png" },
  //   { name: "automag", src: "/High Res Logo resize_Artboard 1 copy 51.png" },
  //   { name: "datar", src: "https://www.theimpulsedigital.com/datar.jpg" },
  //   { name: "dts", src: "/High Res Logo resize_Artboard 1 copy 59.png" },
  //   { name: "emech", src: "/High Res Logo resize_Artboard 1 copy 33.png" },
  //   { name: "lg", src: "https://www.theimpulsedigital.com/lg.jpg" },
  //   { name: "goma", src: "https://www.theimpulsedigital.com/goma.jpg" },
  //   { name: "hem", src: "/High Res Logo resize_Artboard 1 copy 57.png" },
  //   // { name: "enpro", src: "/High Res Logo resize_Artboard 1 copy 54.png" },
  //   { name: "vendiman", src: "https://www.theimpulsedigital.com/vendiman.jpg" },
  // ];

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom > 0) {
          const progress = 1 - rect.top / windowHeight;
          const zoom = 1 + progress * 0.3;
          setScale(zoom);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Scrolling Strips */}
      <div className="relative h-[100px] md:h-[200px] w-full">
        {/* Black Strip */}
        <div className="absolute lg:top-[100px] md:top-[100px] left-0 w-full h-[80px] md:h-[100px] bg-[#000000] transform skew-y-3 origin-bottom-left overflow-hidden z-[999]">
          <div className="flex items-center h-full marquee-track-3x-reverse whitespace-nowrap">
            <div className="flex items-center gap-6 md:gap-8 md:px-8">
              {[...Array(3)].map((_, setIndex) => (
                <React.Fragment key={`black-set-${setIndex}`}>
                  {servicesSecond.map((service, index) => (
                    <React.Fragment key={`black-${setIndex}-${index}`}>
                      <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-white text-2xl md:text-4xl lg:text-5xl whitespace-nowrap flex-shrink-0">
                        {service}
                      </span>
                      <img
                        className="flex-shrink-0 w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] mx-2 md:mx-4"
                        alt="Vector"
                        src="https://www.theimpulsedigital.com/vector-6.png"
                        loading="eager"
                        decoding="async"
                      />
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Heading */}
      {/* <div className="relative bg-white pt-8 md:pt-16">
        <div className="wrap-clients">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 md:mb-16">
            <div className="flex flex-col items-start mb-6 lg:mb-0">
              <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
                <span className="text-[#030019] lg:text-[34px] sm:text-[16px]">Brands</span>
                <br />
                <span className="font-bold text-[#543d98] lg:text-[49px] md:text-[52px] sm:text-[26px]">
                  That Trust Our Impulse
                </span>
              </h2>
            </div>

            <Button className="w-[180px] h-[44px] group sm:inline-flex items-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border-[#543d98] hover:border hover:border-[#543d98]">
              <Link
                to="https://www.theimpulsedigital.com/contact-us"
                className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm md:text-base group-hover:text-[#543d98] transition-colors duration-300"
              >
                Connect Now
              </Link>
              <img
                src="https://www.theimpulsedigital.com/button-icon.svg"
                alt="Arrow"
                className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 group-hover:brightness-0 group-hover:invert-0 group-hover:invert pointer-events-none"
              />
            </Button>
          </div>
        </div>
      </div> */}

      {/* ✅ DESKTOP GRID (lg and above) — bigger logos */}
      {/* <div className="relative bg-white pb-12 hidden lg:block">
        <div className="wrap-clients">
          <div className="grid grid-cols-5 gap-8">
            {logos.map((logo, index) => (
              <div
                key={`grid-${index}`}
                className="w-full h-[160px] flex items-center justify-center"
              >
                <img
                  className="max-w-[92%] max-h-[92%] object-contain"
                  alt={logo.name}
                  src={logo.src}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* ✅ MOBILE/TABLET SLIDER (below lg) — with border only here */}
      {/* <div className="relative overflow-hidden group m-0 p-0 lg:hidden">
        <div className="flex marquee-track-logos group-hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, setIndex) => (
            <div key={`logo-set-${setIndex}`} className="flex items-center flex-shrink-0">
              {logos.map((logo, index) => (
                <div
                  key={`logo-${setIndex}-${index}`}
                  className="flex-shrink-0 w-[130px] h-[90px] md:w-[180px] md:h-[120px] lg:w-[220px] lg:h-[140px] bg-white flex items-center justify-center client-logo"
                >
                  <img
                    className="max-w-[92%] max-h-[92%] object-contain"
                    alt={logo.name}
                    src={logo.src}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div> */}

      <style>{`
        .wrap-clients {
          max-width: 100%;
          margin: auto;
          position: relative;
          background: var(--bg);
          padding: 0rem 6rem 0rem;
        }
        @media (max-width:980px) {
          .wrap-clients { padding: 0rem 1.2rem 0rem; }
        }

        :root{
          --strip-speed: 10s;
          --logos-speed: 60s;
        }

        @keyframes marquee3x {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .marquee-track-3x {
          display:flex;
          will-change: transform;
          animation: marquee3x var(--strip-speed) linear infinite;
          white-space: nowrap;
        }
        .marquee-track-3x-reverse {
          display:flex;
          will-change: transform;
          animation: marquee3x var(--strip-speed) linear infinite reverse;
          white-space: nowrap;
        }

        @keyframes marqueeLogos {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track-logos {
          display:flex;
          width: max-content;
          will-change: transform;
          animation: marqueeLogos var(--logos-speed) linear infinite;
        }

        .marquee-track-3x, .marquee-track-3x * ,
        .marquee-track-3x-reverse, .marquee-track-3x-reverse * ,
        .marquee-track-logos, .marquee-track-logos * {
          animation-timing-function: linear !important;
        }

        /* ✅ border ONLY for mobile/tablet slider cards */
        .client-logo {
          padding: 0rem;
        }

        @media (prefers-reduced-motion: reduce){
          .marquee-track-3x,
          .marquee-track-3x-reverse,
          .marquee-track-logos { animation: none; transform: none; }
        }
      `}</style>
    </section>
  );
};
