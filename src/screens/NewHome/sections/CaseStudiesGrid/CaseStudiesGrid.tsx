import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { useState } from "react";
import { cn } from "../../../../lib/utils";

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
    tags: ["Packaging"],
    link: "/casestudies/brutindia",
    outcome: "Social impact content partnership.",
  }
];

export const CaseStudiesGrid = (): JSX.Element => {
  const [stopScroll, setStopScroll] = useState(false);

  return (
    <section
      className="w-full bg-[#f9f9f9] relative z-20 pb-32 overflow-hidden"
      style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px" }}
      data-section="case-studies"
    >
      <style>{`
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="pt-20 md:pt-28 mb-16 shrink-0">
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
                className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm md:text-[15px] group-hover:text-[#543d98] transition-colors duration-300"
              >
                See all outcomes
              </Link>
              <img
                src="https://www.theimpulsedigital.com/button-icon.svg"
                alt="Arrow"
                className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 group-hover:brightness-0 group-hover:invert-0 brightness-0 invert pointer-events-none"
              />
            </Button>
          </div>
        </div>
      </div>

      <div
        className="overflow-hidden w-full relative max-w-7xl mx-auto px-0"
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        <div
          className="marquee-inner flex w-fit"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: caseStudiesData.length * 2500 + "ms",
          }}
        >
          <div className="flex">
            {[...caseStudiesData, ...caseStudiesData].map((card, index) => (
              <a
                href={card.link}
                key={index}
                className="w-56 md:w-80 mx-4 h-[20rem] md:h-[28rem] relative group hover:scale-90 transition-all duration-300 overflow-hidden shadow-md"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                  <p className="text-white text-lg font-semibold text-center font-sans">
                    {card.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesGrid;
