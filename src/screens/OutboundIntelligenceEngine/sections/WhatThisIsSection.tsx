import { MonitorDot, Target, ShieldCheck, Mail, Workflow, RefreshCw, ArrowRight } from "lucide-react";
import { useState } from "react";

export const WhatThisIsSection = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Signal Detection",
      desc: "Live tracking of hires, leadership changes, funding rounds, and expansion signals. Prospects enter because something in their world indicates readiness.",
      icon: <MonitorDot className="w-8 h-8" strokeWidth={1.5} />,
    },
    {
      title: "Precision Targeting",
      desc: "Every prospect matched against a structured ICP: title, company size, revenue, geography, industry. No one enters who does not fit.",
      icon: <Target className="w-8 h-8" strokeWidth={1.5} />,
    },
    {
      title: "Contact Verification",
      desc: "Every email verified before use. Bounce rates below 2%. Domain reputation protected.",
      icon: <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />,
    },
    {
      title: "Personalised Outreach",
      desc: "Every opening line references something specific to that person or company. A hire, a commitment, a launch. Nothing generic passes.",
      icon: <Mail className="w-8 h-8" strokeWidth={1.5} />,
    },
    {
      title: "CRM-Native Pipeline",
      desc: "Prospects pushed directly into your CRM, tagged with ICP, trigger signal, date, and status. Full visibility from discovery.",
      icon: <Workflow className="w-8 h-8" strokeWidth={1.5} />,
    },
    {
      title: "Weekly Iteration",
      desc: "Data reviewed, messaging refined, targeting sharpened, next cycle deployed. Every week, not every quarter.",
      icon: <RefreshCw className="w-8 h-8" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="w-full bg-white pt-20 lg:pt-28 pb-[120px] lg:pb-[140px] relative overflow-hidden" style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px", zIndex: 20 }} data-section="what-this-is">
      <div className="max-w-[1300px] mx-auto px-6 md:px-8">
        
        {/* Header Area */}
        <div className="text-left max-w-4xl mb-16 lg:mb-24">
          <h2 className="[font-family:'DM_Sans',Helvetica] leading-tight mb-6 tracking-tight text-[#030019]">
            <span className="block font-medium lg:text-[40px] sm:text-[24px]">
              A system,
            </span>
            <span className="block text-[#543d98] font-bold lg:text-[64px] sm:text-[36px]">
              not a campaign.
            </span>
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] text-lg md:text-[22px] text-gray-600 leading-relaxed font-light">
            The Outbound Intelligence Engine finds, qualifies, and engages your highest-value buyers before they ever search for you. 
          </p>
        </div>

        {/* Desktop Interactive Tab Interface */}
        <div className="hidden lg:flex flex-row items-stretch gap-12 h-[550px]">
          
          {/* Left Column: Navigation Tabs */}
          <div className="w-[35%] flex flex-col justify-between py-4 relative">
            {/* Animated background highlighter */}
            <div 
              className="absolute left-0 w-full bg-gray-50 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] -z-10"
              style={{
                top: `calc(${activeIndex * (100 / 6)}% + 8px)`,
                height: `calc(${100 / 6}% - 16px)`
              }}
            />

            {items.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`flex-1 flex items-center justify-between px-6 rounded-2xl transition-all duration-300 group ${
                    isActive ? "text-[#543d98]" : "text-gray-400 hover:text-gray-800"
                  }`}
                >
                  <div className="flex flex-col items-start">
                    <span className={`text-[11px] font-bold uppercase tracking-widest mb-1 transition-colors ${isActive ? "text-[#8468d9]" : "text-gray-300"}`}>
                      Stage 0{index + 1}
                    </span>
                    <h4 className={`text-xl font-bold transition-colors ${isActive ? "text-[#030019]" : "text-gray-500"}`}>
                      {item.title}
                    </h4>
                  </div>
                  <ArrowRight className={`w-5 h-5 transition-all duration-500 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Content Card */}
          <div className="w-[65%] relative rounded-[40px] overflow-hidden bg-[#030014] shadow-[0_30px_60px_-15px_rgba(84,61,152,0.3)] group border border-[#543d98]/20">
            {/* Static Ambient Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8468d9]/20 via-transparent to-transparent blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#543d98]/30 via-transparent to-transparent blur-[80px]" />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 1px, transparent 40px)" }}></div>

            {items.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div 
                  key={index}
                  className={`absolute inset-0 p-16 flex flex-col justify-center transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
                    isActive ? "opacity-100 translate-y-0 z-10" : "opacity-0 translate-y-12 z-0 pointer-events-none"
                  }`}
                >
                  <div className="w-20 h-20 bg-white/5 border border-white/10 text-white rounded-[24px] flex items-center justify-center mb-10 backdrop-blur-md shadow-[0_0_30px_rgba(132,104,217,0.2)]">
                    {item.icon}
                  </div>
                  
                  <h3 className="[font-family:'DM_Sans',Helvetica] text-white text-[42px] font-bold mb-6 tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="[font-family:'DM_Sans',Helvetica] text-white/70 text-[22px] leading-[1.6] max-w-2xl font-light">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Mobile Stacked Layout (unchanged fallback) */}
        <div className="flex flex-col lg:hidden gap-6">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-[32px] p-8 border border-gray-200 shadow-sm relative overflow-hidden">
              <div className="w-14 h-14 bg-[#543d98]/5 text-[#543d98] rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#f0f0f0] text-gray-500 font-bold tracking-widest uppercase text-[10px] mb-4">
                Stage 0{index + 1}
              </span>
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-3">
                {item.title}
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-black text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

