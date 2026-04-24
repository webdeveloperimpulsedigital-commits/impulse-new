import { MonitorDot, Target, ShieldCheck, Mail, Workflow, RefreshCw, ChevronRight } from "lucide-react";
import { useRef, useEffect } from "react";

export const WhatThisIsSection = (): JSX.Element => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const items = [
    {
      title: "Signal Detection",
      desc: "We track hiring activity, leadership changes, funding rounds, public commitments, and expansion signals across your target market. Every prospect enters the pipeline because something in their world indicates readiness, not because they appeared on a static list.",
      icon: <MonitorDot className="w-6 h-6" strokeWidth={1.5} />,
    },
    {
      title: "Precision Targeting",
      desc: "Every prospect is matched against a structured Ideal Customer Profile built with you. Title, company size, revenue range, geography, department, and industry. No one enters the pipeline who does not fit. No spray. No waste.",
      icon: <Target className="w-6 h-6" strokeWidth={1.5} />,
    },
    {
      title: "Contact Verification",
      desc: "Every email address is verified for deliverability before it is ever used. Bounce rates stay below 2%. Your domain reputation stays protected. No guesswork, no damage.",
      icon: <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />,
    },
    {
      title: "Personalised Outreach",
      desc: "Every opening line references something specific to that person or their company. A recent leadership appointment. A published sustainability commitment. A product launch. Nothing generic. Nothing templated.",
      icon: <Mail className="w-6 h-6" strokeWidth={1.5} />,
    },
    {
      title: "CRM-Native Pipeline",
      desc: "Every prospect is pushed directly into your CRM, tagged with the ICP definition, the signal that triggered outreach, the date added, and the current pipeline status. Full visibility from the moment a prospect is discovered.",
      icon: <Workflow className="w-6 h-6" strokeWidth={1.5} />,
    },
    {
      title: "Weekly Iteration",
      desc: "This is not a quarterly review. Every week, outreach data is analysed, messaging is refined, targeting is sharpened, and the next cycle is deployed. The engine learns as it runs.",
      icon: <RefreshCw className="w-6 h-6" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="w-full bg-[#f4f4f4] pt-16 lg:pt-20 pb-[120px] lg:pb-[135px] relative overflow-hidden" style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px", zIndex: 20 }} data-section="what-this-is">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 lg:mb-16">
          <div className="max-w-3xl">
            <h2 className="[font-family:'DM_Sans',Helvetica] leading-tight mb-6">
              <span className="block text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">
                We build systems that
              </span>
              <span className="block text-[#543d98] font-bold lg:text-[52px] sm:text-[26px]">
                generate pipeline.
              </span>
            </h2>
            <p className="[font-family:'DM_Sans',Helvetica] text-base md:text-lg text-[#666] leading-relaxed">
              The Outbound Intelligence Engine is a fully managed pipeline system that finds, qualifies, and engages your highest-value buyers before they ever search for you. It combines market intelligence, signal detection, and personalised multi-channel outreach into a single, repeatable growth engine.
            </p>
          </div>
        </div>

        {/* Pipeline Flow Container (Continuous Infinite Scroll) */}
        <div className="relative mt-4">
          <div className="scroller" data-direction="left" style={{ "--duration": "50s" } as React.CSSProperties}>
            <div className="scroller__inner flex gap-4 lg:gap-6 pb-12 pt-4 hover:[animation-play-state:paused]">
              {[...items, ...items].map((item, index) => (
                <div 
                  key={index} 
                  className="w-[300px] lg:w-[380px] flex-shrink-0 bg-white border border-gray-200 rounded-[24px] p-8 flex flex-col relative group hover:-translate-y-2 hover:border-[#543d98] transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(84,61,152,0.3)] mt-4"
                >
                {/* Stage Indicator & Icon Header */}
                <div className="flex justify-between items-start mb-8 relative">
                  <div className="w-14 h-14 bg-[#543d98]/5 text-[#543d98] rounded-xl flex items-center justify-center group-hover:bg-[#543d98] group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-inner">
                    {item.icon}
                  </div>
                  <div className="bg-gray-50 border border-gray-100 px-4 py-1.5 rounded-full flex items-center">
                    <span className="[font-family:'DM_Sans',Helvetica] text-[11px] font-bold text-[#543d98]/60 uppercase tracking-widest">
                      Stage 0{(index % items.length) + 1}
                    </span>
                  </div>
                </div>
                
                <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-4 group-hover:text-[#543d98] transition-colors">
                  {item.title}
                </h3>
                <div className="h-[2px] w-12 bg-gray-100 mb-4 group-hover:w-full group-hover:bg-[#543d98]/20 transition-all duration-500" />
                <p className="[font-family:'DM_Sans',Helvetica] text-[#666] text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Arrow connecting to next pipeline node */}
                <div className="absolute top-1/2 -right-3 lg:-right-4 w-6 h-6 lg:w-8 lg:h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 transform -translate-y-1/2 shadow-sm z-20 group-hover:border-[#543d98] group-hover:text-[#543d98] transition-colors hidden md:flex">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

