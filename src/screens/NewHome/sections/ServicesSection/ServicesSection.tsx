// ServicesSection.tsx — Premium Split-Screen Hover Layout
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

const PURPLE = "#543d98";

const data = [
  {
    index: "01",
    label: "Intelligence",
    title: "Growth Intelligence",
    tagline: "Where most engagements begin.",
    description:
      "Marketing analytics, campaign intelligence, consumer insights, and competitive sensing that help enterprise marketing teams act on evidence rather than instinct. This is not a dashboard. It is a decision engine.",
    img: "/growth_intelligence_premium.png",
    link: "/services/growth-intelligence",
    cta: "Explore Growth Intelligence",
    tags: ["Analytics", "Consumer Insights", "Competitive Sensing"],
  },
  {
    index: "02",
    label: "AI-Native",
    title: "AI Agency",
    tagline: "The 2026-native capability.",
    description:
      "Agentic AI for marketing operations, fully AI-produced cinematic brand content, and Generative Search Optimisation for brands that need to move faster than their category allows.",
    img: "/ai_agency_premium.png",
    link: "/services/ai-agency",
    cta: "Explore AI Agency",
    tags: ["Agentic AI", "Generative Search", "AI Content"],
  },
  {
    index: "03",
    label: "Execution",
    title: "Performance Studios",
    tagline: "The execution engine.",
    description:
      "Social media, performance marketing, content, website development, and branding, deployed as the execution layer of a strategic engagement, not as standalone deliverables.",
    img: "/performance_studios_premium.png",
    link: "/services/performance-studios",
    cta: "Explore Performance Studios",
    tags: ["Social Media", "Performance Marketing", "Branding"],
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState(0);

  const current = data[active];

  return (
    <>
      <style>{`
        .svc-tab {
          position: relative;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .svc-tab:first-child { border-top: 1px solid rgba(255,255,255,0.06); }

        .svc-tab-bar {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: transparent;
          transition: background 0.3s ease;
          border-radius: 0 2px 2px 0;
        }
        .svc-tab.is-active .svc-tab-bar { background: ${PURPLE}; }

        .svc-tab-num {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.2);
          transition: color 0.3s ease;
        }
        .svc-tab.is-active .svc-tab-num { color: ${PURPLE}; }

        .svc-tab-title {
          font-size: clamp(18px, 2vw, 26px);
          font-weight: 700;
          color: rgba(255,255,255,0.3);
          transition: color 0.3s ease;
          font-family: 'Space Grotesk', sans-serif;
          line-height: 1.1;
        }
        .svc-tab.is-active .svc-tab-title { color: #ffffff; }

        .svc-tab-label {
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          transition: color 0.3s ease;
        }
        .svc-tab.is-active .svc-tab-label { color: rgba(255,255,255,0.45); }

        .svc-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: 28px;
          overflow: hidden;
        }
        .svc-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
        }
        .svc-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 35%, rgba(2,0,24,0.8) 100%);
        }

        @media (max-width: 900px) {
          .svc-desktop { display: none !important; }
          .svc-mobile  { display: flex !important; }
        }
        @media (min-width: 901px) {
          .svc-desktop { display: grid !important; }
          .svc-mobile  { display: none !important; }
        }

        /* ── Mobile Peek Slider ── */
        .svc-scroll-track {
          display: flex;
          overflow-x: scroll;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
          gap: 14px;
          padding: 0 20px 8px;
          scrollbar-width: none;
        }
        .svc-scroll-track::-webkit-scrollbar { display: none; }
        .svc-card-snap {
          flex: 0 0 82%;
          scroll-snap-align: center;
          min-width: 0;
        }
      `}</style>

      <section
        className="relative w-full bg-[#020018]"
        id="sec-border"
        data-section="services"
        style={{
          position: "relative",
          zIndex: 10,
          marginTop: "-55px",
          borderTopLeftRadius: "55px",
          borderTopRightRadius: "55px",
          overflow: "hidden"
        }}
      >
        {/* ── Header ─────────────────────────────── */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div>
              <h2
                className="font-['DM_Sans'] font-normal text-white leading-tight"
                style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
              >
                Three ways growth leaders
                <br />
                <span className="font-bold text-[#543d98]">work with us.</span>
              </h2>
            </div>
          </motion.div>
        </div>

        {/* ── DESKTOP: Split-screen ──────────────── */}
        <div
          className="svc-desktop max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pb-24"
          style={{ gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}
        >
          {/* Left — hover tab list */}
          <div>
            {data.map((s, i) => (
              <div
                key={s.title}
                className={`svc-tab pl-8 pr-6 py-8 ${active === i ? "is-active" : ""}`}
                onMouseEnter={() => setActive(i)}
              >
                <div className="svc-tab-bar" />

                <div className="flex items-center gap-3 mb-2">
                  <span className="svc-tab-num">{s.index}</span>
                  <span className="svc-tab-label">{s.label}</span>
                </div>
                <div className="svc-tab-title">{s.title}</div>

                {/* Expandable on hover */}
                <AnimatePresence initial={false}>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/50 text-[15px] leading-relaxed mt-4 mb-5">
                        {s.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {s.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-[11px] uppercase tracking-wider rounded-full border font-semibold border-white/30 text-white/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {/* CTA */}
                      <div className="mt-6">
                        <Link
                          to={s.link}
                          className="group inline-flex items-center gap-3 bg-[#543d98] text-white font-bold text-[13px] px-6 py-3 rounded-xl hover:bg-white hover:text-[#543d98] transition-all duration-300"
                        >
                          {s.cta}
                          <img
                            src="/vector-1-3.svg"
                            alt="Arrow"
                            className="w-4 h-4 brightness-0 invert transition-all duration-300 group-hover:rotate-45 group-hover:invert-0 pointer-events-none"
                          />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right — sticky image panel */}
          <div style={{ position: "sticky", top: "100px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 24, scale: 0.97, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, scale: 0.97, filter: "blur(8px)" }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Label */}
                <div className="flex items-center gap-4 mb-5">
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${PURPLE}25`, color: PURPLE }}
                  >
                    {current.label}
                  </span>
                  <span className="text-white/20 text-[12px] font-mono">{current.index} / 03</span>
                </div>

                {/* Image */}
                <div className="svc-img-wrap">
                  <img src={current.img} alt={current.title} />
                  <div className="svc-img-overlay" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p
                      className="text-[11px] uppercase tracking-[0.18em] font-semibold mb-2"
                      style={{ color: PURPLE }}
                    >
                      {current.tagline}
                    </p>
                    <h3 className="text-white font-['Space_Grotesk'] font-bold text-[28px] leading-tight">
                      {current.title}
                    </h3>
                  </div>
                </div>

                {/* Progress dots */}
                <div className="flex items-center gap-2 mt-5 justify-center">
                  {data.map((_, idx) => (
                    <div
                      key={idx}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: active === idx ? "28px" : "6px",
                        height: "6px",
                        backgroundColor: active === idx ? PURPLE : "rgba(255,255,255,0.15)",
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── MOBILE: Peek Slider ─────────────────── */}
        <div className="svc-mobile flex-col pb-10">
          {/* Swipe hint */}
          <p className="text-white/30 text-[11px] uppercase tracking-[0.15em] text-center mb-4 px-5">
            Swipe to explore
          </p>

          {/* Scroll container */}
          <div
            className="svc-scroll-track"
            id="svc-mobile-track"
            onScroll={(e) => {
              const el = e.currentTarget;
              const cardW = el.scrollWidth / data.length;
              const idx = Math.round(el.scrollLeft / cardW);
              const dots = document.querySelectorAll(".svc-dot");
              dots.forEach((d, i) => {
                (d as HTMLElement).style.width = i === idx ? "24px" : "6px";
                (d as HTMLElement).style.backgroundColor =
                  i === idx ? PURPLE : "rgba(255,255,255,0.2)";
              });
            }}
          >
            {data.map((s) => (
              <div key={`m-${s.title}`} className="svc-card-snap">
                <div
                  className="rounded-3xl overflow-hidden h-full"
                  style={{ border: `1px solid rgba(255,255,255,0.08)`, background: "rgba(255,255,255,0.03)" }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020018] via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full text-white/70 border border-white/20">
                      {s.label}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-white/35 text-[10px] uppercase tracking-wider font-semibold mb-2">{s.tagline}</p>
                    <h3 className="font-['Space_Grotesk'] font-bold text-white text-[22px] leading-tight mb-3">{s.title}</h3>
                    <p className="text-white/50 text-[13px] leading-relaxed mb-4">{s.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-[10px] uppercase tracking-wider rounded-full border border-white/20 text-white/60 font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nav buttons */}
          <div className="flex items-center justify-center gap-4 mt-6 pb-4 px-5">
            <button
              type="button"
              onClick={() => {
                const track = document.getElementById("svc-mobile-track");
                if (track) track.scrollBy({ left: -track.clientWidth * 0.82, behavior: "smooth" });
              }}
              className="group w-12 h-12 rounded-full border-2 border-[#543d98] bg-white flex items-center justify-center transition-all duration-300 hover:bg-[#f5f5f5] active:scale-90"
              style={{ touchAction: "manipulation" }}
              aria-label="Previous"
            >
              <img src="/left-arrow.png" alt="Previous" className="w-4 h-4 pointer-events-none transition-transform duration-300 group-hover:rotate-45" />
            </button>

            <button
              type="button"
              onClick={() => {
                const track = document.getElementById("svc-mobile-track");
                if (track) track.scrollBy({ left: track.clientWidth * 0.82, behavior: "smooth" });
              }}
              className="group w-12 h-12 rounded-full bg-[#543d98] flex items-center justify-center transition-all duration-300 active:scale-90"
              style={{ touchAction: "manipulation" }}
              aria-label="Next"
            >
              <img src="/right-arrow.png" alt="Next" className="w-4 h-4 pointer-events-none transition-transform duration-300 group-hover:rotate-45" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
export { ServicesSection };
