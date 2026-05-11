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
        "We analyze your website to identify technical issues, content gaps, and opportunities. This gives us a clear starting point for improvements.",
      expandedContent:
        "Our initial website audit helps us understand how your site performs across technical, content, and authority signals. This analysis forms the foundation for your entire SEO strategy.",
    },
    {
      id: 2,
      title: "Keyword Research",
      description:
        "We focus on real search behaviour, including terms like SEO company in Ghatkopar, but we don’t force them everywhere. The idea is to match intent rather than repeat keywords unnecessarily.",
      expandedContent:
        "We do keyword research with both user intent and business goals in mind. We don’t just stuff in keywords like SEO company in Ghatkopar — instead, we find terms that truly match what users are looking for and are likely to convert.",
    },
    {
      id: 3,
      title: "Local SEO Improvements",
      description:
        "We help your business show up in searches happening around Ghatkopar. This increases the chances of attracting nearby customers.",
      expandedContent:
        "Local SEO focuses on making your business visible to customers in Ghatkopar and nearby areas. It includes optimizing your Google Business Profile, using location-specific keywords, and building local signals that tell search engines you serve this community.",
    },
    {
      id: 4,
      title: "Technical Fixes",
      description:
        "Things like page speed, indexing, and structure can quietly affect performance. We fix these, so your website runs more smoothly.",
      expandedContent:
        "We identify and fix technical issues that may be holding back your rankings. This includes improving page speed, ensuring proper indexing, fixing broken links, and optimizing site structure for better crawling.",
    },
    {
      id: 5,
      title: "Content Work",
      description:
        "We improve existing content and create new pages where needed. The focus is always on relevance and usefulness.",
      expandedContent:
        "We enhance your website's content by improving existing pages and creating new ones where necessary. Our goal is to ensure all content is relevant, useful, and aligned with search intent.",
    },
    {
      id: 6,
      title: "Reporting",
      description:
        "You get a clear idea of what’s improving and what still needs attention. No complicated reports, just straightforward updates.",
      expandedContent:
        "We believe in transparency. You’ll receive regular updates and clear reports showing keyword ranking improvements, traffic quality, and the overall impact of our SEO efforts on your business.",
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
