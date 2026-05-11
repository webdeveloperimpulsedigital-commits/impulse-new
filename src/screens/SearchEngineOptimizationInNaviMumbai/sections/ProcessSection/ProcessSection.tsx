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
      title: "Comprehensive SEO Audits",
      description:
        "We analyze technical issues, content gaps, and backlink profiles to identify growth opportunities.",
      expandedContent:
        "We start with an in-depth analysis of your entire website. From technical issues to content gaps and backlink profiles, we identify every area that affects your search performance.",
    },
    {
      id: 2,
      title: "Keyword Research and Intent Mapping",
      description:
        "We target high-intent keywords such as best SEO agency in Navi Mumbai and best SEO company in Navi Mumbai to drive conversion-focused traffic.",
      expandedContent:
        "We analyze search demand and user intent to identify keywords that drive qualified traffic.",
    },
    {
      id: 3,
      title: "Google Business Profile Optimization",
      description:
        "We improve your local presence to increase visibility in map-based and nearby searches.",
      expandedContent:
        "We optimize your Google Business Profile to improve visibility in local search results and Google Maps.",
    },
    {
      id: 4,
      title: "Technical SEO Optimization",
      description:
        "From improving site speed to fixing crawl issues, we ensure your website meets modern SEO standards.",
      expandedContent:
        "We optimize site speed, fix crawl errors, and ensure mobile-friendliness to improve search engine rankings.",
    },
    {
      id: 5,
      title: "Content Creation and Optimization",
      description:
        "We develop high-quality content aligned with user intent and search engine guidelines.",
      expandedContent:
        "We create valuable content that ranks well and engages your target audience.",
    },
    {
      id: 6,
      title: "Analytics and Reporting",
      description:
        "Transparent reporting helps you track keyword performance, traffic growth, and ROI.", expandedContent:
        "We track key metrics and provide regular reports so you can see your SEO progress",
    }
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
