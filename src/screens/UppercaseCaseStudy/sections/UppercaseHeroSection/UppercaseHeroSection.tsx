import { NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import Header from "../../../../components/layout/Header";
import { useEffect, useRef } from "react";

export const UppercaseHeroSection = (): JSX.Element => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [badgeRef.current, titleRef.current, subtitleRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      el.style.transition = `opacity 0.9s ease ${i * 0.2}s, transform 0.9s ease ${i * 0.2}s`;
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Uppercase × Carry Your Resolution — Impulse Digital Case Study</title>
        <meta name="description" content="How Impulse Digital turned a year-end insight into a product-led social campaign for Uppercase, achieving 5.4 million plays using AI-led production." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.theimpulsedigital.com/casestudies/uppercase/" />
        <meta property="og:title" content="Uppercase × Carry Your Resolution — Impulse Digital" />
        <meta property="og:description" content="A year-end campaign that hit 5.4M plays. Built entirely with AI. Driven by a human idea." />
        <meta property="og:url" content="https://www.theimpulsedigital.com/casestudies/uppercase/" />
        <meta property="og:image" content="https://www.theimpulsedigital.com/Carry Your Resolution.png" />
      </Helmet>

      <div className="relative">
        <div className="absolute bottom-0 w-full h-[150px] bg-white z-0" aria-hidden="true" />
        <section
          className="relative z-10 w-full h-screen min-h-[600px] mb-0 h-[600px] sm:h-[700px] md:h-[800px] lg:h-[820px] rounded-[55px] overflow-hidden"
          data-section="hero"
        >
          <header>
            <Header />

            {/* Background Image Wrap */}
            <div className="absolute inset-0 w-full h-[598px] sm:h-[698px] md:h-[798px] lg:h-[818px] bg-cover bg-center z-0">
              <img
                src="/Uppercase-banner-image.jpg"
                alt="Uppercase Campaign Background"
                className="w-full h-full object-cover"
              />

              {/* Gradient overlay - dark at top, fades to let bottom be visible, darker gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(2,0,24,0.82) 0%, rgba(2,0,24,0.55) 50%, rgba(2,0,24,0.88) 100%)",
                }}
                aria-hidden="true"
              />
            </div>
          </header>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 lg:px-24 xl:px-32 max-w-[1600px] mx-auto">


            {/* Main Title */}
            <h1
              ref={titleRef}
              className="font-black text-white mb-4 leading-none"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(2.8rem, 7vw, 7rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Carry Your<br />
              <span style={{ color: "#a78bfa" }}>Resolution.</span>
            </h1>

            {/* Subtitle */}
            {/* <p
            ref={subtitleRef}
            className="text-white/70 mb-10 max-w-xl"
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)", lineHeight: 1.65 }}
          >
            Turning a year-end insight into a product-led social campaign for{" "}
            <span className="text-white font-semibold">Uppercase</span>.
          </p> */}

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/50 text-sm">
              <NavLink to="/" className="hover:text-white/80 transition-colors">Home</NavLink>
              <span className="opacity-50">›</span>
              <NavLink to="/casestudies" className="hover:text-white/80 transition-colors">Case Studies</NavLink>
              <span className="opacity-50">›</span>
              <span className="text-white/80">Uppercase</span>
            </nav>
          </div>



          <style>{`
          @keyframes scrollBounce {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
        `}</style>
        </section>
      </div>
    </>
  );
};
