import React from 'react';

export const HowItWorksSection = (): JSX.Element => {
  const steps = [
    {
      id: 1,
      title: "ICP Diagnostic",
      description: "We define exactly who you should be reaching: titles, company profile, geography, trigger signals. If outbound is not right for your business, we say so here.",
    },
    {
      id: 2,
      title: "Engine Build",
      description: "Targeting criteria, verification workflows, CRM pipeline, and outreach sequences, all configured and reviewed with you before anything goes live.",
    },
    {
      id: 3,
      title: "Discovery & Enrichment",
      description: "Structured searches across live market data. Each prospect individually enriched with recent signals. No batch-and-blast.",
    },
    {
      id: 4,
      title: "Outreach Deployment",
      description: "Personalised, multi-step sequences across email and LinkedIn. Each follow-up adds value, not repetition.",
    },
    {
      id: 5,
      title: "Weekly Intelligence",
      description: "What worked, what didn't, what the data says. Messaging refined. Targeting adjusted. New prospects added. The engine improves every week.",
    },
    {
      id: 6,
      title: "Pipeline Handoff",
      description: "When a prospect responds, we qualify intent, prepare context, and hand off to your sales team ready to close.",
    },
  ];

  return (
    <section className="w-full bg-[#f4f4f4] pt-20 lg:pt-32 pb-[100px] lg:pb-[140px] relative overflow-hidden" style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px", zIndex: 40 }} data-section="how-it-works">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <h2 className="[font-family:'DM_Sans',Helvetica] leading-tight mb-6">
              <span className="block text-[#030019] font-medium lg:text-[40px] sm:text-[24px]">
                The Outbound
              </span>
              <span className="block text-[#543d98] font-bold lg:text-[64px] sm:text-[36px] tracking-tight">
                Process.
              </span>
            </h2>
            <p className="[font-family:'DM_Sans',Helvetica] text-black text-lg lg:text-xl leading-relaxed">
              We don't do batch-and-blast. The Engine is a precision-engineered outbound system designed to identify, verify, and engage your ideal buyers systematically.
            </p>
          </div>
        </div>

        {/* 3x2 Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-12 pt-4">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="w-full h-full bg-white rounded-[32px] p-10 lg:p-12 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.04)] relative group hover:border-[#543d98]/30 transition-all duration-500 hover:-translate-y-2 flex flex-col min-h-[380px]"
            >
              {/* Massive background number */}
              <div className="absolute top-6 right-8 text-[#543d98]/5 font-black text-[100px] leading-none select-none group-hover:text-[#543d98]/10 transition-colors duration-500">
                0{step.id}
              </div>

              {/* Progress Line */}
              <div className="w-full h-1 bg-gray-100 rounded-full mb-10 overflow-hidden shrink-0">
                <div className="h-full bg-[#8468d9] w-0 group-hover:w-full transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]" />
              </div>

              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl lg:text-3xl mb-4 relative z-10 shrink-0">
                {step.title}
              </h3>
              
              {/* flex-grow ensures the paragraph takes up available space, pushing the bottom text down evenly */}
              <p className="[font-family:'DM_Sans',Helvetica] text-black text-lg leading-relaxed relative z-10 font-light flex-grow">
                {step.description}
              </p>

              <div className="mt-8 text-[#543d98] font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0 shrink-0">
                Phase 0{step.id}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
