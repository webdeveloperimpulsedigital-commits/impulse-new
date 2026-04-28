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
        "We evaluate technical health, indexing structure, page performance, backlink strength, and content gaps to identify growth opportunities.",
      expandedContent:
        "We perform in-depth SEO audits to uncover technical issues, content gaps, and growth opportunities that boost your website’s performance and rankings.",
    },
    {
      id: 2,
      title: "Keyword Research and Intent Mapping",
      description:
        "Our keyword strategy targets high-intent search terms like seo service in Mumbai and industry-specific conversion keywords relevant to your audience.",
      expandedContent:
        "We identify high-intent, conversion-focused keywords like seo service in Mumbai, local business SEO, and industry-specific terms that drive qualified traffic and leads.",
    },
    {
      id: 3,
      title: "Google Business Profile Optimization",
      description:
        "We strengthen your presence in Mumbai local searches by optimizing your Google Business Profile for map visibility and regional authority signals.",
      expandedContent:
        "We optimize your Google Business Profile with precise location targeting, accurate information, and local signals to boost visibility in map results and attract nearby customers",
    },
    {
      id: 4,
      title: "Technical SEO Optimization",
      description:
        "From schema implementation to crawl efficiency and site speed improvements, we ensure your website meets modern ranking standards.",
      expandedContent:
        "Technical SEO forms the backbone of any successful SEO strategy. We ensure your website is technically sound, fast, and easily crawled by search engines",
    },
    {
      id: 5,
      title: "Content Creation and Optimization",
      description:
        "We create experience-driven, authority-focused content aligned with EEAT guidelines to improve both trust signals and search visibility.",
      expandedContent:
        "High-quality, relevant content is your way to speak to your audience. We take a dual approach by creating new pieces and updating information to make sure your content ranks and resonates. This is where we help you build trust and authorit.",
    },
    {
      id: 6,
      title: "Analytics and Reporting",
      description:
        "Transparent reporting helps you track keyword rankings, traffic quality, and ROI impact from SEO activities.",
      expandedContent:
        "Clear analytics and reporting give you full visibility into keyword rankings, traffic quality, and the ROI of your SEO efforts.",
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
