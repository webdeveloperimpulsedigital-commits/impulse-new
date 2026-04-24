import React, { useState } from "react";

export const HowItWorksSection = (): JSX.Element => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      title: "ICP Diagnostic",
      description: "We start by defining your Ideal Customer Profile with precision.",
      expandedContent: "Who exactly are you trying to reach? What titles? What company size? What geography? What signals indicate they are ready? If outbound is not the right channel for your business, we will tell you in this conversation itself.",
    },
    {
      id: 2,
      title: "Engine Configuration",
      description: "We build your targeting criteria, set up verification workflows, configure your CRM pipeline, and draft your outreach sequences.",
      expandedContent: "Every word, every targeting filter, and every workflow is reviewed with you before anything goes live.",
    },
    {
      id: 3,
      title: "Discovery and Enrichment",
      description: "We run structured searches across live market data to find companies and people matching your ICP.",
      expandedContent: "Each prospect is individually enriched with recent company news, leadership changes, and trigger signals. No batch-and-blast. Each record is built with intent.",
    },
    {
      id: 4,
      title: "Outreach Deployment",
      description: "Personalised, multi-step sequences go live across email and LinkedIn. Each message is tailored to the individual.",
      expandedContent: "Each follow-up adds value instead of repeating the ask. The cadence, tone, and channel mix are calibrated to your buyer's world.",
    },
    {
      id: 5,
      title: "Weekly Intelligence Cycles",
      description: "Every week, we review what worked, what did not, and what the data is telling us.",
      expandedContent: "Messaging is refined. Targeting is adjusted. New prospects are added. The engine improves with every cycle, not every quarter.",
    },
    {
      id: 6,
      title: "Pipeline Handoff",
      description: "When a prospect responds with interest, we handle the initial reply, qualify intent, and prepare the handoff to your sales team with full context.",
      expandedContent: "By the time your closer picks up the conversation, they know exactly who they are speaking to and why.",
    },
  ];

  return (
    <section className="w-full bg-[#f4f4f4] pt-16 lg:pt-20 pb-[120px] lg:pb-[135px] relative" style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px", zIndex: 40 }} data-section="how-it-works">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative">
          
          {/* Sticky Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-fit lg:self-start z-10">
            <div>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">
                How it
              </p>
              <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight mb-6">
                Works.
              </h2>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#666] text-base md:text-lg leading-relaxed max-w-md">
                We don't do batch-and-blast. The Engine is a precision-engineered outbound system designed to identify, verify, and engage your ideal buyers systematically.
              </p>
            </div>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-[27px] top-[28px] bottom-0 w-[2px] bg-gradient-to-b from-[#543d98] via-[#543d98]/20 to-transparent hidden md:block" />

              <div className="space-y-12 md:space-y-16">
                {steps.map((step) => (
                  <div key={step.id} className="relative md:pl-20 group">
                    {/* Node / Bullet */}
                    <div className="hidden md:flex absolute left-0 top-0 w-14 h-14 bg-white rounded-full border-2 border-gray-200 items-center justify-center group-hover:border-[#543d98] group-hover:bg-[#543d98] transition-all duration-500 shadow-sm z-10">
                      <span className="[font-family:'DM_Sans',Helvetica] font-bold text-lg text-[#030019] group-hover:text-white transition-colors duration-500">
                        0{step.id}
                      </span>
                    </div>

                    {/* Content Card */}
                    <div className="bg-white border border-gray-200 p-8 md:p-10 rounded-[24px] shadow-sm group-hover:shadow-xl group-hover:border-[#543d98]/30 transition-all duration-500 relative overflow-hidden">
                      {/* Mobile Node Background */}
                      <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#543d98]/5 rounded-full flex items-center justify-center md:hidden pointer-events-none">
                         <span className="[font-family:'DM_Sans',Helvetica] font-bold text-4xl text-[#543d98]/20 relative top-2 right-2">
                           0{step.id}
                         </span>
                      </div>
                      
                      <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-2xl text-[#030019] mb-4 relative z-10">
                        {step.title}
                      </h3>
                      <p className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-medium text-lg leading-relaxed mb-4 relative z-10">
                        {step.description}
                      </p>
                      <div className="h-[1px] w-full bg-gray-100 my-5" />
                      <p className="[font-family:'DM_Sans',Helvetica] text-[#666] text-base leading-relaxed relative z-10">
                        {step.expandedContent}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
