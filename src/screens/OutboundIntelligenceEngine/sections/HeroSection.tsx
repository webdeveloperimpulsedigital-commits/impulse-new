import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import Header from "../../../components/layout/Header";

export const HeroSection = (): JSX.Element => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleLinesRef = useRef<HTMLSpanElement[]>([]);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const kickerRef = useRef<HTMLDivElement>(null);

  const heroTextLines = [
    "An AI that finds your next customers",
    "before they start looking."
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animations
      gsap.fromTo(kickerRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
      );

      gsap.fromTo(titleLinesRef.current,
        { y: 80, opacity: 0, rotateX: -20 },
        { 
          y: 0, 
          opacity: 1, 
          rotateX: 0,
          duration: 1.2, 
          stagger: 0.15, 
          ease: "power4.out",
          delay: 0.4 
        }
      );

      gsap.fromTo(descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1 }
      );

      gsap.fromTo(btnRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)", delay: 1.2 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen min-h-[700px] sm:min-h-[800px] mb-0 rounded-t-[0px] md:rounded-t-[55px] overflow-hidden"
      data-section="hero"
    >
      <header>
        <Header />

        <div className="absolute inset-0 w-full h-full">
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
              className="w-full h-full object-cover transform scale-[1.05]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/rectangle-35.jpg"
            >
              <source src="/bg-video.mp4" type="video/mp4" />
            </video>

            {/* Immersive Dark overlay */}
            <div
              className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#020018]/80 via-[#020018]/60 to-[#020018]"
              aria-hidden="true"
            />
            
            {/* Geometric lighting accent */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#543d98] rounded-full blur-[150px] opacity-20 pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#8b7cf6] rounded-full blur-[150px] opacity-10 pointer-events-none" />
          </div>

          <div
            className="w-full max-w-[1450px] mx-auto absolute inset-0 flex flex-col justify-center
                      items-center text-center
                      px-6 sm:px-8 md:px-12 lg:px-20 pt-24 sm:pt-32 lg:pt-40 z-10"
          >
            {/* Kicker */}
            <div ref={kickerRef} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#ffffff]/5 border border-[#ffffff]/10 text-[#cbbaff] uppercase tracking-[0.2em] font-medium text-xs sm:text-sm mb-6 sm:mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#8b7cf6] animate-pulse"></span>
              Growth Intelligence
            </div>

            {/* Main Heading */}
            <div className="mb-6 sm:mb-8 text-center w-full mx-auto" style={{ perspective: "1000px" }}>
              <h1 className="[font-family:'DM_Sans',Helvetica] font-black text-white text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[72px] leading-[1.1] tracking-tight">
                {heroTextLines.map((line, index) => (
                  <div key={index} style={{ overflow: "hidden" }}>
                    <span 
                      ref={(el) => {
                        if (el && !titleLinesRef.current.includes(el)) {
                          titleLinesRef.current[index] = el;
                        }
                      }}
                      className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400"
                    >
                      {line}
                    </span>
                  </div>
                ))}
              </h1>
            </div>


            {/* Sub-headline */}
            <p ref={descRef} className="font-dm-sans text-gray-300 text-sm sm:text-base md:text-lg lg:text-[20px] font-medium max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[65%] leading-[1.6] mb-10 sm:mb-12 tracking-wide">
              Archer is an AI-powered outbound intelligence engine. It detects buying signals across your target market, identifies the exact decision-makers who match your business, and deploys personalised outreach at scale - putting revenue-ready conversations on your calendar, week after week.
            </p>

            {/* CTA Button */}
            <div ref={btnRef} className="mb-8 flex justify-center">
              <NavLink
                to="/contact-us/"
                className="group inline-flex items-center gap-2 px-8 py-4 sm:px-10 sm:py-5 bg-white rounded-full hover:bg-[#543d98] hover:text-[#ffffff] text-[#543d98] transition-colors duration-300 font-dm-sans font-bold text-sm md:text-lg"
              >
                <span>Apply for an ICP Diagnostic</span>
                <img src="/vector-1-3.svg" alt="Arrow" className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 group-hover:brightness-0 group-hover:invert pointer-events-none" />
              </NavLink>
            </div>

            {/* Breadcrumb */}
            <nav className="text-white/60 text-[10px] sm:text-xs tracking-widest w-full text-center mt-auto pb-8 uppercase font-medium">
              <NavLink to="/" className="hover:text-white transition-colors">Home</NavLink>
              <span className="mx-3 opacity-40">/</span>
              <NavLink to="/services" className="hover:text-white transition-colors">Services</NavLink>
              <span className="mx-3 opacity-40">/</span>
              <span className="text-white">Archer</span>
            </nav>
          </div>
        </div>
      </header>
    </section>
  );
};

export default HeroSection;

