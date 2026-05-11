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
      description:
        "We analyze your website to identify technical issues, content gaps, and opportunities. This gives a clear starting point for improvements.",
      expandedContent:
        "Every website has its own strengths and weaknesses. We begin with a complete audit of your current website to identify issues that affect search engine visibility. We also look for untapped opportunities that can be leveraged for growth.",
    },
    {
      id: 2,
      title: "Keyword Research",
      description:
        "We focus on real search behaviour, including terms like SEO agency in Ghansoli, but we don’t overuse them. The goal is to match intent rather than just repeat keywords.",
      expandedContent:
        "The right keywords are the foundation of SEO success. We go beyond obvious terms to identify high-intent, conversion-focused keywords that your target audience is actually searching for. This includes industry-specific terms, local queries, and long-tail keywords that drive qualified traffic.",
    },
    {
      id: 3,
      title: "Local SEO Improvements",
      description:
        "We help your business show up in searches happening around Ghansoli. This increases the chances of attracting nearby customers.",
      expandedContent:
        "Being visible locally matters for most businesses. We focus on optimizing your Google Business Profile and other local signals to ensure customers in and around Ghansoli can find you easily when they search for relevant products or services.",
    },
    {
      id: 4,
      title: "Technical Fixes",
      description:
        "Things like page speed, indexing, and structure can quietly affect performance. We fix these so your website runs more smoothly.",
      expandedContent:
        "A fast, secure, and properly structured website is essential for rankings. We address technical elements like page load speed, indexing issues, code efficiency, and mobile usability to ensure search engines can crawl and understand your site without any barriers.",
    },
    {
      id: 5,
      title: "Content Work",
      description:
        "We improve existing pages and create new content where needed. The focus is always on relevance and usefulness.",
      expandedContent:
        "High-quality content helps visitors and search engines understand what your business offers. We optimize existing content and create new, relevant pieces that improve rankings and user experience.",
    },
    {
      id: 6,
      title: "Reporting",
      description:
        "You get a clear idea of what’s improving and what still needs attention. No complicated reports, just straightforward updates.",
      expandedContent:
        "Clear, actionable reporting keeps you informed every step of the way. We provide regular updates on what’s working, what needs attention, and how your website’s performance is evolving over time.",
    },
  ];



  return (
    <section className="w-full bg-white py-8 lg:py-20" data-section="content-process">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-5 lg:mb-16">


          <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">

            Our Proven SEO Framework<br></br>

            <span className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight ">
              for Sustainable Growth
            </span></h2>


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
