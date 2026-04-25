import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HowItWorksSection = (): JSX.Element => {
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      id: 1,
      title: "ICP Diagnostic",
      description: "We define your ideal buyer profile: titles, company attributes, geography, and trigger signals. This is human-led strategy. The AI needs to know exactly who to find.",
    },
    {
      id: 2,
      title: "Engine Build",
      description: "The AI is configured around your ICP. Targeting filters, verification workflows, CRM integrations, and outreach sequences — all built and reviewed with you before anything goes live.",
    },
    {
      id: 3,
      title: "AI Discovery + Enrichment",
      description: "The engine runs structured searches across live market data, identifies matching companies and people, and enriches each with real-time signals. What a research team does in a week, the AI does in hours.",
    },
    {
      id: 4,
      title: "AI-Generated Outreach",
      description: "Personalised, multi-step sequences deploy across email and LinkedIn. Each message is AI-generated around a specific signal and reviewed for quality before sending.",
    },
    {
      id: 5,
      title: "Weekly Intelligence",
      description: "Performance data feeds back into the engine. The AI refines targeting and messaging. A strategist reviews, adjusts, and deploys the next cycle. The engine gets sharper every week.",
    },
    {
      id: 6,
      title: "Pipeline Handoff",
      description: "Qualified responses are prepared with full context and handed to your sales team. By the time your closer picks up, they know exactly who they are talking to and why.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the vertical line drawing down
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          }
        }
      );

      // Animate each step fading in and floating up
      stepsRef.current.forEach((step, index) => {
        if (!step) return;
        gsap.fromTo(step,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-[#f4f4f4] pt-20 lg:pt-32 pb-[100px] lg:pb-[140px] relative overflow-hidden" style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px", zIndex: 40 }} data-section="how-it-works">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24 text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <h2 className="[font-family:'DM_Sans',Helvetica] leading-tight mb-6">
              <span className="block text-[#030019] font-medium lg:text-[40px] sm:text-[24px]">
                How Archer
              </span>
              <span className="block text-[#543d98] font-black lg:text-[64px] sm:text-[48px] tracking-tight">
                works.
              </span>
            </h2>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative w-full mx-auto mt-10 lg:mt-20">
          
          {/* Background Track Line */}
          <div className="absolute left-[36px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2 rounded-full" />
          
          {/* Animated Purple Line */}
          <div 
            ref={lineRef}
            className="absolute left-[36px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#543d98] -translate-x-1/2 origin-top rounded-full z-0" 
          />

          <div className="flex flex-col gap-12 md:gap-24 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 !== 0; // 0-indexed, so odd index means right side on desktop

              return (
                <div 
                  key={step.id} 
                  ref={el => { stepsRef.current[index] = el; }}
                  className={`flex flex-col md:flex-row items-start md:items-center w-full group ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-[80px] md:pl-0 ${isEven ? 'md:pl-16 lg:pl-24 text-left' : 'md:pr-16 lg:pr-24 md:text-right text-left'}`}>
                    <div className="bg-white rounded-[32px] p-8 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 group-hover:border-[#543d98]/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group-hover:shadow-[0_20px_40px_rgba(84,61,152,0.1)]">
                       
                       <div className="flex items-center gap-4 mb-6 md:hidden">
                         <div className="text-[#543d98] font-black text-5xl tracking-tighter opacity-20">
                           0{step.id}
                         </div>
                       </div>

                       <div className={`hidden md:block absolute text-[#543d98] font-black text-[120px] tracking-tighter leading-none opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 top-6 ${isEven ? 'right-6' : 'left-6'}`}>
                         0{step.id}
                       </div>

                       <h3 className="[font-family:'DM_Sans',Helvetica] font-black text-[#030019] text-2xl lg:text-3xl mb-4 relative z-10">
                         {step.title}
                       </h3>
                       <p className="[font-family:'DM_Sans',Helvetica] text-[#030019]/80 text-lg leading-relaxed font-medium relative z-10">
                         {step.description}
                       </p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-[36px] md:left-1/2 -translate-x-1/2 flex items-center justify-center mt-8 md:mt-0">
                    <div className="w-16 h-16 rounded-full bg-[#f4f4f4] border-[4px] border-white z-10 flex items-center justify-center shadow-xl group-hover:border-[#543d98]/20 transition-all duration-500 group-hover:scale-110">
                       <div className="w-6 h-6 rounded-full bg-gray-200 group-hover:bg-[#543d98] transition-colors duration-500 shadow-inner flex items-center justify-center">
                         <div className="w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                       </div>
                    </div>
                  </div>
                  
                  {/* Empty Spacer Half for Desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
