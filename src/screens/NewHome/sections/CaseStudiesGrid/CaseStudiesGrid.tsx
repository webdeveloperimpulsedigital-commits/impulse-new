import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";

const caseStudiesData = [
  {
    id: 1,
    title: "Uppercase",
    image: "/Uppercase-Thumbnail.jpg",
    tags: ["Product Design"],
    link: "/casestudies/uppercase",
    outcome: "A complete brand film produced entirely with AI: script, visuals, voice, and edit.",
  },
  {
    id: 2,
    title: "Hindustan Unilever Limited",
    image: "/16_Unilever-new.jpg",
    tags: ["Packaging"],
    link: "/casestudies/hul",
    outcome: "Geo-targeted digital coupon campaign delivering 90% higher CTR and 12,548 landing page sessions.",
  },
  {
    id: 3,
    title: "Avenue Supermarts/DMart",
    image: "/15_Dmart-new.jpg",
    tags: ["Branding"],
    link: "/casestudies/d-mart",
    outcome: "13.43 lakh unique reach and 53K clicks driving store footfall for seasonal retail.",
  },
  {
    id: 4,
    title: "Mastercard",
    image: "/14_mastercard.jpg",
    tags: ["Creative"],
    link: "/casestudies/mastercard",
    outcome: "90.9% merchant response rate through WhatsApp-led cluster-head outreach strategy.",
  },
  {
    id: 5,
    title: "A Force for Good - BRUT INDIA",
    image: "/brut-thumbnail.jpg",
    tags: ["Packaging"],
    link: "/casestudies/brutindia",
    outcome: "Social impact content partnership for one of India's most-watched digital publishers.",
  },
  {
    id: 6,
    title: "Aditya Birla Group",
    image: "/forse-thumbnail1.jpg",
    tags: ["Packaging"],
    link: "/casestudies/fourseforgood",
    outcome: "Social impact narrative for one of India's largest conglomerates.",
  },
];

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const CaseStudyCard = ({ study }: { study: any }) => (
  <div className="max-w-[1600px] w-full mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-16 lg:gap-24 h-full py-2 md:py-16">
    {/* Left Side: Thumbnail */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.85, x: 100 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="w-full md:w-[45%] lg:w-[40%] h-[30vh] sm:h-[40vh] md:h-[80vh] lg:h-[90vh] max-h-[1000px] relative rounded-lg overflow-hidden shadow-2xl group cursor-pointer"
    >
      <Link to={study.link} className="absolute inset-0 z-20 block w-full h-full" aria-label={`View ${study.title}`}>
        <span className="sr-only">View {study.title}</span>
      </Link>
      
      <img 
        src={study.image} 
        alt={study.title} 
        className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
        loading="lazy"
      />
      
      {/* View Button Overlay */}
      <div className="absolute inset-0 bg-[#030019]/0 group-hover:bg-[#030019]/10 transition-colors duration-500 flex items-center justify-center pointer-events-none z-10">
        <div className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full bg-[#543d98]/50 backdrop-blur-md border border-white/30 flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_8px_32px_rgba(84,61,152,0.3)]">
          <span className="text-white font-dm-sans font-bold text-sm md:text-base tracking-[0.2em] ml-[0.2em] drop-shadow-md">VIEW</span>
        </div>
      </div>
    </motion.div>

    {/* Right Side: Content */}
    <motion.div 
      variants={contentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full md:w-[55%] lg:w-[60%] flex flex-col items-start justify-center mt-4 md:mt-0"
    >
      {/* Info / Tags */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-2 md:mb-6">
        {study.tags.map((tag: string) => (
          <span key={tag} className="font-dm-sans text-[11px] md:text-[14px] uppercase tracking-[0.2em] font-bold text-[#543d98]">
            {tag}
          </span>
        ))}
      </motion.div>

      {/* Name / Title */}
      <motion.h3 variants={itemVariants} className="font-dm-sans text-[28px] sm:text-[36px] md:text-[56px] lg:text-[72px] xl:text-[80px] leading-[1.1] text-[#030019] font-black uppercase tracking-tighter mb-3 md:mb-8">
        {study.title}
      </motion.h3>

      {/* Outcome / Info */}
      <motion.p variants={itemVariants} className="font-dm-sans text-[#4a4a4a] text-[15px] md:text-lg lg:text-xl leading-relaxed font-light mb-5 md:mb-12 max-w-xl">
        {study.outcome}
      </motion.p>

      {/* CTA */}
      <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 md:gap-6">
        <Link 
          to={study.link} 
          className="group inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-10 py-2.5 md:py-4 bg-white rounded-full text-[#543d98] hover:bg-[#543d98] hover:text-white transition-all duration-300 shadow-md border border-[#543d98]/10"
        >
          <span className="font-dm-sans font-bold text-[14px] md:text-[17px]">View Case Study</span>
          <img 
            src="/vector-1-3.svg" 
            alt="Arrow" 
            className="w-3.5 h-3.5 md:w-4 md:h-4 transition-all duration-300 group-hover:rotate-45 group-hover:brightness-0 group-hover:invert pointer-events-none" 
          />
        </Link>
      </motion.div>
    </motion.div>
  </div>
);

export const CaseStudiesGrid = (): JSX.Element => {
  const targetRef = useRef<HTMLDivElement>(null);
  const mobileSliderRef = useRef<HTMLDivElement>(null);

  const scrollMobile = (direction: 'left' | 'right') => {
    if (mobileSliderRef.current) {
      // Width of item (80vw) + gap (16px)
      const scrollAmount = (window.innerWidth * 0.8) + 16;
      mobileSliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  // We have 6 items. The motion container width is 600vw.
  // To reach the last item, we need to translate by -500vw, which is -83.33% of the container's width.
  const x = useTransform(smoothProgress, [0, 1], ["0%", `-${((caseStudiesData.length - 1) / caseStudiesData.length) * 100}%`]);

  return (
    <section 
      className="w-full bg-[#f9f9f9] relative z-20 pb-24" 
      style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px" }}
      data-section="case-studies"
    >
      {/* Editorial Header Area */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 pt-12 md:pt-24 lg:pt-32 mb-6 md:mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between relative gap-6">
          <div className="flex flex-col">
            <h2 className="[font-family:'DM_Sans',Helvetica] font-normal leading-tight">
              <span className="text-[#030019] lg:text-[34px] sm:text-[16px] md:text-[34px]">Work</span>
              <br />
              <span className="font-bold text-[#543d98] lg:text-[49px] md:text-[52px] sm:text-[26px]">
                that moved something.
              </span>
            </h2>
          </div>
          
          <Link to="/casestudies" className="group hidden sm:inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#543d98] rounded-full border border-[#543d98] hover:bg-white text-white hover:text-[#543d98] transition-all duration-300 shadow-md">
            <span className="font-dm-sans font-bold text-[15px]">See all outcomes</span>
            <img 
              src="/vector-1-3.svg" 
              alt="Arrow" 
              className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 brightness-0 invert group-hover:brightness-100 group-hover:invert-0 pointer-events-none" 
            />
          </Link>
        </div>
      </div>

      {/* Desktop: Horizontal Scroll Carousel */}
      <div ref={targetRef} className="hidden md:block relative w-full" style={{ height: `${caseStudiesData.length * 100}vh` }}>
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden bg-[#f9f9f9]">
          <motion.div style={{ x }} className="flex h-full items-center">
            {caseStudiesData.map((study) => (
              <div 
                key={study.id}
                className="w-screen h-full flex-shrink-0 flex items-center justify-center px-12 lg:px-20"
              >
                <CaseStudyCard study={study} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile: Normal Swipe Slider */}
      <div className="md:hidden w-full relative pb-12">
        <style>{`
          .hide-scroll::-webkit-scrollbar { display: none; }
          .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
        <div 
          ref={mobileSliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scroll px-[10vw] gap-4"
        >
          {caseStudiesData.map((study) => (
            <div 
              key={study.id}
              className="w-[80vw] flex-shrink-0 snap-center"
            >
              <CaseStudyCard study={study} />
            </div>
          ))}
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <button 
            onClick={() => scrollMobile('left')}
            className="group w-14 h-14 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-md hover:bg-[#543d98] hover:border-[#543d98] active:scale-95 transition-all duration-300"
            aria-label="Previous Case Study"
          >
            <img 
              src="/vector-1-3.svg" 
              alt="Previous" 
              className="w-4 h-4 transform rotate-180 transition-all duration-300 group-hover:rotate-[135deg] group-hover:brightness-0 group-hover:invert" 
            />
          </button>
          
          <button 
            onClick={() => scrollMobile('right')}
            className="group w-14 h-14 rounded-full bg-[#543d98] border border-[#543d98] flex items-center justify-center shadow-md hover:bg-white active:scale-95 transition-all duration-300"
            aria-label="Next Case Study"
          >
            <img 
              src="/vector-1-3.svg" 
              alt="Next" 
              className="w-4 h-4 transform rotate-0 brightness-0 invert transition-all duration-300 group-hover:rotate-45 group-hover:brightness-100 group-hover:invert-0" 
            />
          </button>
        </div>
      </div>

      {/* Mobile View All Button (Hidden on Desktop) */}
      <div className="mt-8 mb-12 sm:hidden flex justify-center px-6 relative z-50">
         <Link to="/casestudies" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#543d98] rounded-full border border-[#543d98] hover:bg-white text-white hover:text-[#543d98] transition-all duration-300 shadow-md w-full">
            <span className="font-dm-sans font-bold text-[15px]">See all outcomes</span>
            <img 
              src="/vector-1-3.svg" 
              alt="Arrow" 
              className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 brightness-0 invert group-hover:brightness-100 group-hover:invert-0 pointer-events-none" 
            />
         </Link>
      </div>

    </section>
  );
};

export default CaseStudiesGrid;
