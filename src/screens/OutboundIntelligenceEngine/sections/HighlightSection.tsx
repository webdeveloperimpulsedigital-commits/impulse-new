import { useEffect, useRef } from "react";

export const HighlightSection = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const spans = entry.target.querySelectorAll("span.reveal-word");
            spans.forEach((span, index) => {
              setTimeout(() => {
                span.classList.remove("opacity-10", "translate-y-8", "scale-95");
                span.classList.add("opacity-100", "translate-y-0", "scale-100");
              }, index * 40); // 40ms stagger per word
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const text = "Archer is an AI-powered outbound intelligence engine. It detects buying signals across your target market, identifies the exact decision-makers who match your business, and deploys personalised outreach at scale - putting revenue-ready conversations on your calendar, week after week.";
  const words = text.split(" ");

  return (
    <section 
      className="w-full relative bg-[#ffffff] overflow-hidden z-30 py-16 lg:py-24 flex items-center justify-center" 
      style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px" }} 
      data-section="highlight"
    >
      {/* Abstract floating ambient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8468d9]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10" ref={containerRef}>
        
        {/* Giant architectural quotation mark */}
        <div className="absolute -top-6 lg:-top-12 -left-2 lg:-left-6 text-[#8468d9]/10 text-[80px] lg:text-[140px] font-serif leading-none select-none pointer-events-none">
          "
        </div>

        <h2 className="[font-family:'DM_Sans',Helvetica] text-[20px] md:text-[28px] lg:text-[36px] text-[#030019] font-medium leading-[1.4] lg:leading-[1.3] tracking-tight max-w-4xl relative z-10 flex flex-wrap gap-x-2 gap-y-1 lg:gap-x-2.5 lg:gap-y-1.5">
          {words.map((word, index) => {
            const isGradient = word.includes("Archer") || word.includes("AI-powered") || word.includes("outbound") || word.includes("intelligence") || word.includes("engine.");
            return (
              <span 
                key={index} 
                className={`reveal-word opacity-10 translate-y-8 scale-95 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                  isGradient ? "text-transparent bg-clip-text bg-gradient-to-r from-[#543d98] to-[#8468d9] font-bold" : ""
                }`}
              >
                {word}
              </span>
            );
          })}
        </h2>

      </div>
    </section>
  );
};
