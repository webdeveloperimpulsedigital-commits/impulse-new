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
        "We first perform a thorough audit of your website to identify technical issues, content gaps, and opportunities for improvement. This gives us a clear baseline before planning the next steps.",
    },
    {
      id: 2,
      title: "Keyword Research",
      description:
        "We focus on real search behavior, including terms like SEO company in Kharghar, but we don’t overuse them. The goal is to match intent rather than just repeat keywords.",
      expandedContent:
        "We go beyond basic keyword matching. Our research identifies how users search in Kharghar, the questions they ask, and the intent behind their queries. This helps us target the right keywords without sounding robotic.",
    },
    {
      id: 3,
      title: "Local SEO Improvements",
      description:
        "We help your business show up in searches happening around Kharghar. This increases the chances of attracting nearby customers.",
      expandedContent:
        "We ensure your business appears prominently in local searches around Kharghar and surrounding areas. By optimizing your online presence for local queries, we help you attract customers who are actively searching for your products or services in the vicinity",
    },
    {
      id: 4,
      title: "Technical Fixes",
      description:
        "Things like page speed, indexing, and structure can quietly affect performance. We fix these, so your website runs more smoothly.",
      expandedContent:
        "We address underlying technical issues that may be hindering your website's performance. From improving page speed and fixing crawl errors to optimizing site structure and implementing proper indexing, we ensure your website provides a seamless experience for both users and search engines",
    },
    {
      id: 5,
      title: "Content Work",
      description:
        "We improve existing pages and create new content where needed. The focus is always on relevance and usefulness.",
      expandedContent:
        "We create high-quality, user-focused content that establishes authority and speaks directly to your target audience. Whether it’s optimizing existing pages or building new content, our goal is to ensure everything we create is relevant, valuable, and aligned with SEO best practices.",
    },
    {
      id: 6,
      title: "Reporting",
      description:
        "You get a clear idea of what’s improving and what still needs attention. No complicated reports, just straightforward updates.",
      expandedContent:
        "We provide transparent reporting that shows you exactly what’s improving and what still needs attention. No complicated jargon—just clear, straightforward updates so you’re always informed about your progress and results.",
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
