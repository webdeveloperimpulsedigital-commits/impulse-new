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
        "We figure out what’s holding your site back; it could be technical issues, content gaps, or both.",
      expandedContent:
        "First, we perform a complete website audit to understand what’s working and what’s not. We check for technical issues, content gaps, and opportunities for improvement so we can build a plan that actually addresses the root causes of underperformance.",
    },
    {
      id: 2,
      title: "Keyword Research",
      description:
        "We identify the terms people are actually searching for, including queries like SEO company in Kandivali, and build around that.",
      expandedContent:
        "We identify high-intent keywords relevant to your business, including local and industry-specific search terms. This helps us target users who are actively looking for the services you offer",
    },
    {
      id: 3,
      title: "Local SEO Improvements",
      description:
        "We help you show up better in nearby searches so local customers can find you easily.",
      expandedContent:
        "We optimize your Google Business Profile, local landing pages, and citation profiles to boost visibility in Google Maps and local search results, driving foot traffic and qualified leads.",
    },
    {
      id: 4,
      title: "Technical Fixes",
      description:
        "From page speed to indexing issues, we clean up the backend so your site performs better.",
      expandedContent:
        "We fix technical issues such as slow page speed, indexing problems, broken links, and crawl errors. A technically sound website provides a better user experience and helps search engines rank you more effectively.",
    },
    {
      id: 5,
      title: "Content Work",
      description:
        "We improve existing content and create new pages where needed, but nothing unnecessary.",
      expandedContent:
        "We optimize your existing content for better search visibility and create new pages only when needed. Our focus is on quality over quantity—every piece of content is created to help your business rank higher and attract more customers.",
    },
    {
      id: 6,
      title: "Reporting",
      description:
        "You’ll know what’s improving and what still needs work. No confusing reports.",
      expandedContent:
        "We provide clear, straightforward monthly reports showing keyword rankings, traffic improvements, and lead generation. No jargon, no confusion—just honest results.",
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
