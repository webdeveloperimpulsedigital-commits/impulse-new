import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const ParallaxImage = ({ src, alt }: { src: string; alt: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Move image from -15% to 15% as it scrolls through viewport
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      <motion.img 
        style={{ y, height: "130%", top: "-15%", position: "absolute", left: 0, width: "100%" }} 
        src={src} 
        alt={alt} 
        className="object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
        loading="lazy"
      />
    </div>
  );
};

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

export const CaseStudiesGrid = (): JSX.Element => {
  return (
    <section 
      className="w-full bg-[#f9f9f9] py-24 lg:py-32 relative z-20" 
      style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px" }}
      data-section="case-studies"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Editorial Header Area */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between relative mb-12 md:mb-16 gap-6">
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
            <span className="font-dm-sans font-bold text-[15px]">See the outcomes</span>
            <img 
              src="/vector-1-3.svg" 
              alt="Arrow" 
              className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 brightness-0 invert group-hover:brightness-100 group-hover:invert-0 pointer-events-none" 
            />
          </Link>
        </div>

        {/* Big Image Case Studies List */}
        <div className="flex flex-col gap-6 md:gap-12">
          {caseStudiesData.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 80, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: index * 0.1, 
                ease: [0.16, 1, 0.3, 1] // Premium exponential ease-out
              }}
              viewport={{ once: true, margin: "-120px" }}
              className="flex flex-col group"
            >
              <Link to={study.link} className="block relative w-full overflow-hidden bg-black cursor-pointer rounded-sm">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9]"
                >
                  <ParallaxImage src={study.image} alt={study.title} />
                  {/* Subtle gradient overlay to ensure text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                </motion.div>
                
                {/* Custom Hover Icon (like the green dot in reference, but functional) */}
                <div className="absolute top-8 right-8 md:top-12 md:right-12 w-12 h-12 md:w-16 md:h-16 bg-[#543d98] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl z-20">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

                {/* Overlay Text Content (Bottom Left & Right) */}
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-12 z-10 pointer-events-none">
                  
                  {/* Left Side: Title */}
                  <div className="flex items-end flex-1">
                    <h3 className="font-dm-sans text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] text-white font-bold drop-shadow-2xl tracking-tight">
                      {study.title}
                    </h3>
                  </div>
                  
                  {/* Right Side: Outcome / Tags */}
                  <div className="w-full md:max-w-[320px] text-left md:text-right hidden sm:block">
                    <p className="font-dm-sans text-white/80 text-xs md:text-sm leading-relaxed drop-shadow-md font-light mb-4">
                      {study.outcome}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                      {study.tags.map(tag => (
                        <span key={tag} className="font-dm-sans text-[9px] uppercase tracking-[0.2em] text-white/90 border border-white/30 rounded-full px-3 py-1 bg-black/20 backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button (Hidden on Desktop) */}
        <div className="mt-16 sm:hidden flex justify-center">
           <Link to="/casestudies" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#543d98] rounded-full border border-[#543d98] hover:bg-white text-white hover:text-[#543d98] transition-all duration-300 shadow-md w-full">
              <span className="font-dm-sans font-bold text-[15px]">See the outcomes</span>
              <img 
                src="/vector-1-3.svg" 
                alt="Arrow" 
                className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 brightness-0 invert group-hover:brightness-100 group-hover:invert-0 pointer-events-none" 
              />
           </Link>
        </div>

      </div>
    </section>
  );
};

export default CaseStudiesGrid;
