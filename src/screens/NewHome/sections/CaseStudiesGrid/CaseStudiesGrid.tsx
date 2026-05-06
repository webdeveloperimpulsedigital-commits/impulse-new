import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { useState, useEffect, useRef } from "react";
import { cn } from "../../../../lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";

const caseStudiesData = [
  {
    id: 1,
    title: "Uppercase",
    image: "/Uppercase-Thumbnail.jpg",
    tags: ["Product Design"],
    link: "/casestudies/uppercase",
    outcome: "A complete brand film produced entirely with AI.",
  },
  {
    id: 2,
    title: "Hindustan Unilever",
    image: "/16_Unilever-new.jpg",
    tags: ["Packaging"],
    link: "/casestudies/hul",
    outcome: "Geo-targeted digital coupon campaign.",
  },
  {
    id: 3,
    title: "Avenue Supermarts",
    image: "/15_Dmart-new.jpg",
    tags: ["Branding"],
    link: "/casestudies/d-mart",
    outcome: "13.43 lakh unique reach driving store footfall.",
  },
  {
    id: 4,
    title: "Mastercard",
    image: "/14_mastercard.jpg",
    tags: ["Creative"],
    link: "/casestudies/mastercard",
    outcome: "90.9% merchant response rate.",
  },
  {
    id: 5,
    title: "A Force for Good",
    image: "/brut-thumbnail.jpg",
    tags: ["Partnership"],
    link: "/casestudies/brutindia",
    outcome: "Social impact content partnership.",
  }
];

const CaseStudyCard = ({ item }: { item: typeof caseStudiesData[0] }) => (
  <Link to={item.link} className="block group w-full">
    <div className="overflow-hidden bg-gray-100 mb-4 relative aspect-[4/5] shadow-sm rounded-none" style={{ borderRadius: '0px' }}>
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 rounded-none"
        style={{ borderRadius: '0px' }}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
    </div>
    <div className="flex items-start justify-between gap-4 px-2">
      <div className="flex flex-col">
        <h3 className="font-bold text-[#030019] text-lg md:text-xl uppercase tracking-tight [font-family:'DM_Sans',Helvetica] group-hover:text-[#543d98] transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-[#666] text-sm mt-1 [font-family:'DM_Sans',Helvetica] max-w-[250px] line-clamp-2">
          {item.outcome}
        </p>
      </div>
      <span className="text-[#888] text-xs font-semibold uppercase tracking-wider [font-family:'DM_Sans',Helvetica] shrink-0 pt-1">
        {item.tags[0]}
      </span>
    </div>
  </Link>
);

export const CaseStudiesGrid = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"] // Track while the container is pinned
  });

  // Dramatic Sticky Parallax transforms
  // All columns start at exactly 0% so the top row is perfectly aligned!
  // We use viewport height (vh) instead of percentages so the speed is smooth.
  const yLeft = useTransform(scrollYProgress, [0, 1], ["0vh", "-100vh"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["0vh", "-120vh"]);
  
  // Center column starts at 0vh to be perfectly aligned with the others, and moves up at a different speed.
  const yCenter = useTransform(scrollYProgress, [0, 1], ["0vh", "-60vh"]);

  // Duplicate items massively to simulate an infinite auto-loop and prevent ANY empty space at the bottom
  const repeatArray = (arr: any[], times: number) => Array(times).fill(arr).flat();
  const massiveData = repeatArray(caseStudiesData, 6); // 30 items per column

  // Stagger the columns so they don't look identical horizontally
  // The user requested the 'Uppercase' card (index 0) to be the first in the middle column
  const col1 = [...massiveData.slice(1), ...massiveData.slice(0, 1)]; // Starts with index 1
  const col2 = massiveData; // Starts with index 0 (Uppercase)
  const col3 = [...massiveData.slice(2), ...massiveData.slice(0, 2)]; // Starts with index 2

  return (
    <section
      ref={containerRef}
      className="w-full bg-white relative h-auto md:h-[350vh]" // Tall container for sticky scroll on desktop
      style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px" }}
      data-section="case-studies-sticky"
    >
      {/* Sticky container bounds the view on desktop */}
      <div className="md:sticky md:top-0 md:h-screen w-full overflow-hidden flex flex-col bg-white rounded-t-[55px]">
        
        {/* Header Section */}
        {/* Reduced padding to physically increase the height of the Grid Section */}
        <div className="pt-20 md:pt-24 pb-4 md:pb-6 shrink-0 relative bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
              <div className="flex flex-col items-start">
                <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
                  <span className="text-[#030019] lg:text-[34px] sm:text-[16px]">Work</span>
                  <br />
                  <span className="font-bold text-[#543d98] lg:text-[49px] md:text-[52px] sm:text-[26px]">
                    that earned its numbers.
                  </span>
                </h2>
              </div>

              <Button className="w-auto h-[44px] group sm:inline-flex items-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border border-[#543d98]">
                <Link
                  to="/casestudies"
                  className="[font-family:'DM_Sans',Helvetica] font-bold text-current text-sm md:text-[15px] transition-colors duration-300"
                >
                  See all outcomes
                </Link>
                <img
                  src="https://www.theimpulsedigital.com/button-icon.svg"
                  alt="Arrow"
                  className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 pointer-events-none group-hover:brightness-0 group-hover:invert-0 brightness-0 invert"
                />
              </Button>
            </div>
          </div>
        </div>

        {/* Grid Section - Wrapped with overflow-hidden to strictly clip images before they hit the title without any blurry fade */}
        <div className="flex-1 w-full relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 h-full pt-2 md:pt-4 pb-20 md:pb-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 h-full">
              {/* Column 1 */}
              <motion.div style={{ y: isMobile ? 0 : yLeft }} className="flex flex-col gap-8 md:gap-12">
                {(isMobile ? caseStudiesData : col1).map((item, idx) => (
                  <CaseStudyCard item={item} key={`col1-${idx}`} />
                ))}
              </motion.div>

              {/* Column 2 */}
              <motion.div style={{ y: isMobile ? 0 : yCenter }} className="hidden md:flex flex-col gap-8 md:gap-12">
                {col2.map((item, idx) => (
                  <CaseStudyCard item={item} key={`col2-${idx}`} />
                ))}
              </motion.div>

              {/* Column 3 */}
              <motion.div style={{ y: isMobile ? 0 : yRight }} className="hidden md:flex flex-col gap-8 md:gap-12">
                {col3.map((item, idx) => (
                  <CaseStudyCard item={item} key={`col3-${idx}`} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CaseStudiesGrid;
