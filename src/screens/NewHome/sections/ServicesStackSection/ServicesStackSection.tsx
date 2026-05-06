import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
// import { ChevronRightIcon } from "lucide-react"; // optional
 
type Service = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
};
 
const servicesData: Service[] = [
  {
    number: "01",
    title: "Growth Intelligence",
    subtitle: "WHERE MOST ENGAGEMENTS BEGIN.",
    description: "Find the signal before you make the move.",
    image: "/rectangle-37-6.png",
  },
  {
    number: "02",
    title: "AI Marketing Systems",
    subtitle: "INTELLIGENCE AT SCALE.",
    description: "AI built into the way marketing actually works.",
    image: "/rectangle-37-7.png",
  },
  {
    number: "03",
    title: "Brand Infrastructure",
    subtitle: "FOUNDATION FOR GROWTH.",
    description: "The assets, channels, and content systems that make your brand visible, credible, and ready for market.",
    image: "/rectangle-37-6.png",
  }
];
 
export const ServicesStackSection = (): JSX.Element => {
  // Must equal your sticky header height (including borders/padding)
  const HEADER_OFFSET_PX = 120;
 
  // === Sentinel-based "one card at a time" with a single sticky card ===
  // We render N full-screen sentinel sections to create scroll length.
  // A single sticky Card sits below the header; as you scroll,
  // IntersectionObserver updates `activeIndex`, and we swap the content.
  const [activeIndex, setActiveIndex] = useState(0);
  const sentinelsRef = useRef<(HTMLDivElement | null)[]>([]);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the highest intersectionRatio that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
 
        if (visible) {
          const idx = Number((visible.target as HTMLElement).dataset.index);
          if (!Number.isNaN(idx)) setActiveIndex(idx);
        }
      },
      {
        root: null,
        // Subtract header so the "majority in view" is measured under it
        rootMargin: `-${HEADER_OFFSET_PX}px 0px 0px 0px`,
        threshold: [0.51], // more than half of a sentinel in view
      }
    );
 
    sentinelsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);
 
  const current = servicesData[activeIndex];
 
  return (
    <section className="relative w-full bg-[#020018]" data-section="services">
      {/* Fixed/Sticky Header */}
      <div className="sticky top-0 w-full bg-[#030019] border-b-2 border-[#ffffff1a] px-4 md:px-[75px] py-8 md:py-[60px] z-50">
        <div className="max-w-[1290px] mx-auto relative">
          <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[24px] md:text-[34px] leading-[28px] md:leading-[34px]">
            <span className="text-[#ffffffb2] font-medium leading-[40px] md:leading-[60px]">
              Every goal needs a roadmap<br />
            </span>
            <span className="font-bold text-white text-[36px] md:text-[52px] leading-[40px] md:leading-[60px]">
              We&apos;ve got yours!
            </span>
          </div>
 
        </div>
      </div>
 
      {/* Sticky display card: stays pinned; only the content changes */}
      <div
        className="sticky z-40"
        style={{
          top: HEADER_OFFSET_PX,
          height: `calc(110vh - ${HEADER_OFFSET_PX}px)`,
        }}
      >
        <div className="h-full px-4 lg:px-[75px] flex items-stretch">
          <Card className="bg-[#070514] border-none rounded-[40px] shadow-2xl w-full relative overflow-hidden" style={{ borderWidth: "0px" }}>
            <CardContent className="relative flex flex-col lg:flex-row items-stretch p-0 min-h-full">
              
              {/* Left Content */}
              <div className="relative z-20 flex flex-col justify-center w-full lg:w-[55%] px-8 lg:px-20 py-16 lg:py-24">
                <h2 className="font-dm-sans font-bold text-white text-[36px] lg:text-[56px] leading-[1.1] mb-6">
                  {current.title}
                </h2>
                
                {current.subtitle && (
                  <h4 className="font-dm-sans font-bold text-[#7d52f4] text-xs lg:text-sm tracking-[0.2em] uppercase mb-6">
                    {current.subtitle}
                  </h4>
                )}

                <p className="font-dm-sans font-normal text-[#9496a1] text-base lg:text-lg leading-relaxed max-w-[500px] mb-12">
                  {current.description}
                </p>

                <div>
                  <button className="flex items-center gap-3 bg-[#5f41b3] hover:bg-[#7d52f4] text-white rounded-full px-6 py-3.5 transition-colors duration-300">
                    <span className="font-dm-sans font-semibold text-sm">Explore {current.title}</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right Image with Gradient Mask */}
              <div 
                className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] h-full z-10 pointer-events-none"
                style={{ 
                  maskImage: "linear-gradient(to right, transparent, black 30%)", 
                  WebkitMaskImage: "-webkit-linear-gradient(left, transparent, black 30%)" 
                }}
              >
                <img
                  className="w-full h-full object-cover opacity-80"
                  alt="Service illustration"
                  src={current.image}
                />
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
 
      {/* Scroll space + sentinels (one full-viewport per card) */}
      <div>
        {servicesData.map((_, idx) => (
          <div
            key={idx}
            data-index={idx}
            ref={(el) => (sentinelsRef.current[idx] = el)}
            style={{ height: "100vh" }}
          />
        ))}
      </div>

      {/* Additional spacing to ensure smooth transition to next section */}
    </section>
  );
};