// ServicesSection.tsx — Premium Sticky Stacking Cards
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { MagicText } from "../../../../components/ui/magic-text";

const PURPLE = "#543d98";

const data = [
  {
    index: "01",
    label: "Intelligence",
    title: "Growth Intelligence",
    tagline: "Where most engagements begin.",
    description: "Find the signal before you make the move.",
    img: "/01_Pay-Per-Click.jpg",
    link: "/services/growth-intelligence",
    cta: "Explore Growth Intelligence",
    tags: ["Analytics", "Consumer Insights", "Competitive Sensing"],
  },
  {
    index: "02",
    label: "AI-Native",
    title: "AI Marketing Systems",
    tagline: "The 2026-native capability.",
    description: "AI built into the way marketing actually works.",
    img: "/03_Production.jpg",
    link: "/services/ai-agency",
    cta: "Explore AI Marketing Systems",
    tags: ["Agentic AI", "Generative Search", "AI Content"],
  },
  {
    index: "03",
    label: "Execution",
    title: "Brand Infrastructure",
    tagline: "The execution engine.",
    description: "The assets, channels, and content systems that make your brand visible, credible, and ready for market.",
    img: "/04_Social Media Marketing.jpg",
    link: "/services/performance-studios",
    cta: "Explore Brand Infrastructure",
    tags: ["Social Media", "Performance Marketing", "Branding"],
  },
];

const ServicesSection = () => {
  return (
    <section
      className="relative w-full bg-[#020018] pb-12 md:pb-20"
      id="sec-border"
      data-section="services"
      style={{
        position: "relative",
        zIndex: 10,
        marginTop: "-55px",
        borderTopLeftRadius: "55px",
        borderTopRightRadius: "55px",
      }}
    >
      {/* ── Header ─────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-16 md:pt-24 pb-8 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h2 className="[font-family:'DM_Sans',Helvetica] font-normal leading-tight relative z-20">
            <span className="text-white text-[22px] sm:text-[36px] lg:text-[48px]">
              Three ways growth leaders
            </span>
            <br />
            <span className="font-bold text-[#543d98] text-[28px] sm:text-[42px] lg:text-[56px]">
              work with us.
            </span>
          </h2>
        </motion.div>
      </div>

      {/* ── Massive Typography List ─────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col border-t border-white/20">
          {data.map((study, index) => (
            <Link 
              key={study.title}
              to={study.link}
              className="group relative border-b border-white/20 py-6 md:py-10 hover:bg-white/[0.02] transition-colors duration-500 cursor-pointer overflow-hidden flex flex-col md:flex-row md:items-center justify-between"
            >
              {/* Left Side: Number & Name */}
              <div className="flex items-start md:items-center gap-6 md:gap-12 relative z-10 px-2 md:px-4">
                <span className="[font-family:'DM_Sans',Helvetica] text-white/30 font-light text-xl md:text-2xl transition-colors duration-500 group-hover:text-[#543d98]/50">
                  {study.index}
                </span>
                <h3 className="text-white font-['DM_Sans'] text-[28px] sm:text-[40px] lg:text-[56px] leading-[1.1] font-normal tracking-tight group-hover:text-[#7d52f4] transition-colors duration-500">
                  <MagicText text={study.title} />
                </h3>
              </div>
              
              {/* Right Side: Description & Arrow */}
              <div className="mt-6 md:mt-0 relative z-10 flex flex-row items-center justify-between md:justify-end gap-6 px-2 md:px-4 w-full md:w-auto">
                <div className="flex flex-col items-start md:items-end max-w-[280px] lg:max-w-[300px]">
                  <p className="text-[#9496a1] text-[13px] md:text-sm leading-relaxed font-light text-left md:text-right group-hover:text-white/80 transition-colors duration-500">
                    <MagicText text={study.description} />
                  </p>
                </div>
                
                {/* Massive Animated Arrow Circle */}
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#543d98] group-hover:border-[#543d98] transition-all duration-500 group-hover:scale-110 shadow-xl">
                  <img
                    src="/vector-1-3.svg"
                    alt="Arrow"
                    className="w-4 h-4 brightness-0 invert transition-all duration-500 group-hover:rotate-45"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
export { ServicesSection };
