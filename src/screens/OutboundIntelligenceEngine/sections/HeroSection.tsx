import { NavLink } from "react-router-dom";
import Header from "../../../components/layout/Header";

export const HeroSection = (): JSX.Element => {
  const heroTextLines = ["We don't find leads. We find the", "conversation your competitor hasn't started yet."];

  return (
    <section
      className="relative w-full h-screen min-h-[600px] mb-0 h-[600px] sm:h-[700px] md:h-[800px] lg:h-[820px] rounded-t-[55px] overflow-hidden"
      data-section="hero"
    >
      <header>
        <Header />

        <div className="absolute inset-0 w-full h-[598px] sm:h-[698px] md:h-[798px] lg:h-[818px]">
          {/* LCP image */}
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

          <div
            className="w-full max-w-[1450px] mx-auto absolute inset-0 flex flex-col justify-center
                      items-center text-center
                      px-6 sm:px-8 md:px-12 lg:px-20 pt-12 sm:pt-24 lg:pt-28"
          >
            {/* Kicker */}
            <div className="inline-block px-6 py-2.5 rounded-full bg-[#8468d9]/20 border border-[#8468d9]/40 text-[#cbbaff] uppercase tracking-[0.2em] font-black text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 backdrop-blur-md shadow-[0_0_30px_rgba(132,104,217,0.4)]">
              Growth Intelligence
            </div>

            {/* Main Heading */}
            <div className="mb-4 sm:mb-8 text-center w-full mx-auto">
              <h1 className="[font-family:'DM_Sans',Helvetica] font-black text-white text-[5.2vw] sm:text-[4vw] md:text-[44px] lg:text-[52px] xl:text-[60px] leading-[1.2] tracking-tight whitespace-nowrap">
                {heroTextLines.map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </h1>
            </div>



            {/* CTA Button */}
            <div className="mb-4 sm:mb-8 flex justify-center">
              <NavLink
                to="/contact-us/"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-full font-bold text-[#543d98] text-sm sm:text-base md:text-lg hover:bg-[#543d98] hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(84,61,152,0.4)]"
              >
                Apply for an ICP Diagnostic
                <img
                  src="/vector-1-3.svg"
                  alt="Arrow"
                  className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 group-hover:brightness-0 group-hover:invert pointer-events-none"
                />
              </NavLink>
            </div>

            {/* Breadcrumb (Center-aligned, responsive wrap) */}
            <nav className="text-white/80 text-[11px] sm:text-sm w-full text-center leading-loose mt-2 sm:mt-4">
              <NavLink to="/" className="hover:text-white transition-colors">
                Home
              </NavLink>
              <span className="select-none mx-2">{">"}</span>
              <NavLink to="/services" className="hover:text-white transition-colors">
                Services
              </NavLink>
              <span className="select-none mx-2">{">"}</span>
              <span className="text-white uppercase tracking-wider font-medium">Outbound Intelligence Engine</span>
            </nav>
          </div>
        </div>
      </header>
    </section>
  );
};

