import React, { useState } from "react";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  expandedContent: string;
}

export const ProcessSection = (): JSX.Element => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: "Website Audit",
      description: "We analyze your website to identify technical issues, content gaps, and opportunities.",
      expandedContent: "We analyze your website to identify technical issues, content gaps, and opportunities. This gives a clear starting point for improvements.",
    },
    {
      id: 2,
      title: "Keyword Research",
      description: "We focus on real search behaviour, including terms like SEO company in Turbhe, but we don’t overuse them.",
      expandedContent: "We focus on real search behaviour, including terms like SEO company in Turbhe, but we don’t overuse them. The goal is to match intent rather than just repeat keywords.",
    },
    {
      id: 3,
      title: "Local SEO Improvements",
      description: "We help your business show up in searches happening around Turbhe.",
      expandedContent: "We help your business show up in searches happening around Turbhe. This increases the chances of attracting nearby customers.",
    },
    {
      id: 4,
      title: "Technical Fixes",
      description: "Things like page speed, indexing, and structure can quietly affect performance. We fix these.",
      expandedContent: "Things like page speed, indexing, and structure can quietly affect performance. We fix these, so your website runs more smoothly.",
    },
    {
      id: 5,
      title: "Content Work",
      description: "We improve existing pages and create new content where needed.",
      expandedContent: "We improve existing pages and create new content where needed. The focus is always on relevance and usefulness.",
    },
    {
      id: 6,
      title: "Reporting",
      description: "You get a clear idea of what’s improving and what still needs attention.",
      expandedContent: "You get a clear idea of what’s improving and what still needs attention. No complicated reports, just straightforward updates.",
    },
  ];



  return (
    <section className="w-full bg-white py-8 lg:py-20" data-section="content-process">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-5 lg:mb-16">
          <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">
            How We Usually
          </h2>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight">
            Approach SEO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-16">
            <div className="bg-[#F6F6FB] p-6 rounded-xl">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-xl mb-3">First, We Understand Your Current Position</h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-base">We look at your website, your competition, and your current visibility. Sometimes small issues can have a bigger impact than expected.</p>
            </div>
            <div className="bg-[#F6F6FB] p-6 rounded-xl">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-xl mb-3">Then, We Plan the Next Steps</h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-base">We create a roadmap based on what we find. This usually includes technical fixes and content improvements. It’s structured, but not overly complicated.</p>
            </div>
            <div className="bg-[#F6F6FB] p-6 rounded-xl">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-xl mb-3">Then We Start Implementing</h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-base">We work on improving pages, fixing issues, and building what’s missing. Some changes show results earlier, while others take a bit more time to build momentum.</p>
            </div>
            <div className="bg-[#F6F6FB] p-6 rounded-xl">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-xl mb-3">Then We Keep Improving</h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-base">SEO isn’t something you finish once and forget. We keep tracking performance and refining things so growth stays consistent.</p>
            </div>
          </div>
          <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">
            What Our
          </h2>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight">
            SEO Work Covers
          </h2>
        </div>

        {/* Process Steps */}
        <div className="space-y-4">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ease-out cursor-pointer ${hoveredStep === step.id
                  ? "bg-[#543d98] border-[#543d98] shadow-lg"
                  : "bg-white border-gray-200 hover:border-[#543d98]/30"
                }`}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="p-6 lg:p-8">
                {/* Main Row: title left | desc right */}
                <div className="grid grid-cols-12 gap-6 items-start">
                  {/* Step Number + Title (Left) */}
                  <div className="col-span-12 md:col-span-5 flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold transition-colors duration-300 ${hoveredStep === step.id ? "bg-white text-[#543d98]" : "bg-[#543d98]/10 text-[#543d98]"
                        }`}
                    >
                      {step.id}
                    </div>
                    <h3
                      className={`[font-family:'DM_Sans',Helvetica] font-bold text-xl lg:text-2xl transition-colors duration-300 ${hoveredStep === step.id ? "text-white" : "text-[#030019]"
                        }`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  {/* Description + Arrow (Right) */}
                  <div className="col-span-12 md:col-span-7 flex justify-between items-start">
                    <p
                      className={`[font-family:'DM_Sans',Helvetica] font-normal text-base leading-relaxed transition-colors duration-300 ${hoveredStep === step.id ? "text-white/90" : "text-[#666]"
                        }`}
                    >
                      {step.description}
                    </p>

                    <div
                      className={`flex-shrink-0 ml-4 transition-all duration-300 ${hoveredStep === step.id ? "text-white rotate-90" : "text-[#543d98] rotate-0"
                        }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${hoveredStep === step.id ? "max-h-32 opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                >
                  <div
                    className={`pt-4 border-t ${hoveredStep === step.id ? "border-white/20" : "border-transparent"
                      }`}
                  >
                    <p className="[font-family:'DM_Sans',Helvetica] font-normal text-white/80 text-sm leading-relaxed">
                      {step.expandedContent}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
