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
        "We analyze your website to find technical issues, content gaps, and missed opportunities. This helps us decide what needs to be fixed first.",
      expandedContent:
        "We start with a complete check of your website, fixing technical problems and gaps to make sure everything is aligned with SEO best practices. This clear starting point helps improve performance in a structured way.",
    },
    {
      id: 2,
      title: "Keyword Research",
      description:
        "We focus on how people actually search, including terms like SEO company in Mulund, but without forcing them everywhere. The idea is to match intent, not just keywords.",
      expandedContent:
        "Keyword research helps us understand what people in Mulund are looking for. We identify terms that matter, balancing search volume with user intent, so your website attracts relevant traffic.",
    },
    {
      id: 3,
      title: "Local SEO Improvements",
      description:
        "We help your business appear in searches happening around Mulund. This increases the chances of getting enquiries from nearby customers.",
      expandedContent:
        "We focus on local visibility so nearby customers can find you easily. By optimizing your Google Business Profile and local signals, we help you appear prominently in searches happening around Mulund.",
    },
    {
      id: 4,
      title: "Technical Fixes",
      description:
        "Issues like page speed, indexing, and structure can affect performance without being obvious. We fix these, so your site runs more smoothly.",
      expandedContent:
        "Technical elements like page speed, indexing, and site structure directly affect how search engines see your website. We fix these issues so your site performs smoothly and ranks better.",
    },
    {
      id: 5,
      title: "Content Work",
      description:
        "We improve existing content and create new pages only where needed. The focus is always on relevance and usefulness.",
      expandedContent:
        "High-quality, relevant content is your way to speak to your audience. We take a dual approach by creating new pieces and updating information to make sure your content ranks and resonates. This is where we help you build trust and authorit.",
    },
    {
      id: 6,
      title: "Reporting",
      description:
        "You get a clear picture of what’s improving and what still needs work. No unnecessary complexity, just straightforward updates.",
      expandedContent:
        "Regular reporting helps you stay informed about your website's progress. We highlight key wins, address what needs attention, and keep the focus on real impact.",
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
