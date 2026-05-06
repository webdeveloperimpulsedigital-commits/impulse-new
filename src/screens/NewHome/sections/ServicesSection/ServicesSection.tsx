// ServicesSection.tsx — Premium Sticky Stacking Cards
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";

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

const ServiceCardContent = ({ study, index, total }: { study: any; index: number; total: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="relative w-full max-w-[1400px] mx-auto bg-[#06041a] border border-white/10 rounded-[30px] md:rounded-[50px] overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex flex-col md:flex-row h-full md:h-[70vh] md:min-h-[600px]"
  >
    {/* Content Side */}
    <div className="w-full md:w-[55%] p-6 md:p-12 lg:p-20 flex flex-col justify-center relative z-10 bg-[#06041a]/90 backdrop-blur-sm order-2 md:order-1">
      <div className="flex flex-col gap-6 md:gap-8 max-w-xl">
        <h3 className="text-white font-['DM_Sans'] text-[28px] sm:text-[40px] lg:text-[56px] leading-[1.1] font-bold tracking-tight">
          {study.title}
        </h3>
        
        <div>
          <p className="text-white/60 text-[14px] md:text-base lg:text-lg leading-relaxed font-light">
            {study.description}
          </p>
        </div>

        <div className="mt-4 md:mt-6">
          <Link
            to={study.link}
            className="group inline-flex items-center gap-3 bg-[#543d98] text-white font-bold text-[13px] md:text-[14px] px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-white hover:text-[#543d98] transition-all duration-300 shadow-lg"
          >
            {study.cta}
            <img
              src="/vector-1-3.svg"
              alt="Arrow"
              className="w-3 h-3 md:w-4 md:h-4 brightness-0 invert transition-all duration-300 group-hover:rotate-45 group-hover:brightness-100 group-hover:invert-0 pointer-events-none"
            />
          </Link>
        </div>
      </div>
    </div>

    {/* Image Side */}
    <div className="w-full md:w-[45%] h-[200px] md:h-full relative overflow-hidden group order-1 md:order-2">
      <motion.div
        className="w-full h-full"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={study.img}
          alt={study.title}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#06041a] via-[#06041a]/40 to-transparent pointer-events-none" />
    </div>
  </motion.div>
);

const DesktopCard = ({ study, index, total }: { study: any; index: number; total: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  return (
    <div
      ref={cardRef}
      className="sticky flex items-center justify-center w-full"
      style={{
        top: `calc(15vh + ${index * 30}px)`,
        zIndex: index + 1,
      }}
    >
      <ServiceCardContent study={study} index={index} total={total} />
    </div>
  );
};

const ServicesSection = () => {
  const mobileSliderRef = useRef<HTMLDivElement>(null);

  const scrollMobile = (direction: 'left' | 'right') => {
    if (mobileSliderRef.current) {
      const scrollAmount = (window.innerWidth * 0.85) + 16;
      mobileSliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      className="relative w-full bg-[#020018] pb-16 md:pb-48"
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
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-32 pb-8 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h2 className="[font-family:'DM_Sans',Helvetica] font-normal leading-tight relative z-20">
            <span className="text-white text-[22px] sm:text-[42px] lg:text-[56px]">
              Three ways growth leaders
            </span>
            <br />
            <span className="font-bold text-[#543d98] text-[28px] sm:text-[48px] lg:text-[64px]">
              work with us.
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Desktop: Stacking Cards */}
      <div className="hidden md:block relative px-12 lg:px-20 pb-32">
        <div className="flex flex-col">
          {data.map((study, index) => (
            <DesktopCard key={study.title} study={study} index={index} total={data.length} />
          ))}
        </div>
      </div>

      {/* Mobile: Swipe Slider */}
      <div className="md:hidden w-full relative pb-12">
        <style>{`
          .hide-scroll::-webkit-scrollbar { display: none; }
          .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
        <div 
          ref={mobileSliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scroll px-[7.5vw] gap-4"
        >
          {data.map((study, index) => (
            <div 
              key={study.title}
              className="w-[85vw] flex-shrink-0 snap-center"
            >
              <ServiceCardContent study={study} index={index} total={data.length} />
            </div>
          ))}
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button 
            onClick={() => scrollMobile('left')}
            className="group w-14 h-14 rounded-full border border-white/20 bg-[#06041a] flex items-center justify-center shadow-md hover:bg-white active:scale-95 transition-all duration-300"
            aria-label="Previous Service"
          >
            <img 
              src="/vector-1-3.svg" 
              alt="Previous" 
              className="w-4 h-4 transform rotate-180 brightness-0 invert transition-all duration-300 group-hover:rotate-[135deg] group-hover:brightness-100 group-hover:invert-0" 
            />
          </button>
          
          <button 
            onClick={() => scrollMobile('right')}
            className="group w-14 h-14 rounded-full bg-[#543d98] border border-[#543d98] flex items-center justify-center shadow-md hover:bg-white active:scale-95 transition-all duration-300"
            aria-label="Next Service"
          >
            <img 
              src="/vector-1-3.svg" 
              alt="Next" 
              className="w-4 h-4 transform rotate-0 brightness-0 invert transition-all duration-300 group-hover:rotate-45 group-hover:brightness-100 group-hover:invert-0" 
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
export { ServicesSection };
