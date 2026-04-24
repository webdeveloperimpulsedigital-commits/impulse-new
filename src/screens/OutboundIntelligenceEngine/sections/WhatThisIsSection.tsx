import { MonitorDot, Target, ShieldCheck, Mail, Workflow, RefreshCw, ChevronRight } from "lucide-react";
import { useRef, useEffect } from "react";

export const WhatThisIsSection = (): JSX.Element => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const items = [
    {
      title: "Signal Detection",
      desc: "Live tracking of hires, leadership changes, funding rounds, and expansion signals. Prospects enter because something in their world indicates readiness.",
      icon: <MonitorDot className="w-6 h-6" strokeWidth={1.5} />,
    },
    {
      title: "Precision Targeting",
      desc: "Every prospect matched against a structured ICP: title, company size, revenue, geography, industry. No one enters who does not fit.",
      icon: <Target className="w-6 h-6" strokeWidth={1.5} />,
    },
    {
      title: "Contact Verification",
      desc: "Every email verified before use. Bounce rates below 2%. Domain reputation protected.",
      icon: <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />,
    },
    {
      title: "Personalised Outreach",
      desc: "Every opening line references something specific to that person or company. A hire, a commitment, a launch. Nothing generic passes.",
      icon: <Mail className="w-6 h-6" strokeWidth={1.5} />,
    },
    {
      title: "CRM-Native Pipeline",
      desc: "Prospects pushed directly into your CRM, tagged with ICP, trigger signal, date, and status. Full visibility from discovery.",
      icon: <Workflow className="w-6 h-6" strokeWidth={1.5} />,
    },
    {
      title: "Weekly Iteration",
      desc: "Data reviewed, messaging refined, targeting sharpened, next cycle deployed. Every week, not every quarter.",
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
                A system,
              </span>
              <span className="block text-[#543d98] font-bold lg:text-[52px] sm:text-[26px]">
                not a campaign.
              </span>
            </h2>
            <p className="[font-family:'DM_Sans',Helvetica] text-base md:text-lg text-[#666] leading-relaxed">
              The Outbound Intelligence Engine finds, qualifies, and engages your highest-value buyers before they ever search for you. Market intelligence, signal detection, and personalised multi-channel outreach, running as a single repeatable system.
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

