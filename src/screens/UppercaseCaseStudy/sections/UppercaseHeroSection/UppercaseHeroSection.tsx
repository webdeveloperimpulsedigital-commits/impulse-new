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

      <section
        className="relative w-full overflow-hidden"
        style={{ height: "100svh", minHeight: 600 }}
        data-section="hero"
      >
        <Header />

        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/Carry Your Resolution.png"
          >
            <source src="/uppercasestudy-video.mp4" type="video/mp4" />
          </video>

          {/* Gradient overlay - dark at top, fades to let bottom be visible, darker gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(2,0,24,0.82) 0%, rgba(2,0,24,0.55) 50%, rgba(2,0,24,0.88) 100%)",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-end h-full pb-20 px-6 md:px-16 lg:px-24 xl:px-32 max-w-[1600px] mx-auto">

          {/* Brand Badge */}
          <div ref={badgeRef} className="mb-6">
            <span
              className="inline-block text-xs font-semibold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border"
              style={{
                color: "#c4b0ff",
                borderColor: "rgba(196,176,255,0.35)",
                background: "rgba(84,61,152,0.25)",
                backdropFilter: "blur(8px)",
              }}
            >
              Case Study · AI-Led Campaign
            </span>
          </div>

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

        {/* Scroll cue */}
        <div
          className="absolute bottom-8 left-1/2 z-10 flex flex-col items-center gap-1"
          style={{ transform: "translateX(-50%)", animation: "scrollBounce 2.4s ease-in-out infinite" }}
        >
          <span className="text-white/40 text-[10px] tracking-widest uppercase">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
            <circle cx="8" cy="7" r="2.5" fill="rgba(167,139,250,0.8)">
              <animateTransform attributeName="transform" type="translate" values="0,0;0,9;0,0" dur="2.4s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        <style>{`
          @keyframes scrollBounce {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
        `}</style>
      </section>
    </>
  );
};
