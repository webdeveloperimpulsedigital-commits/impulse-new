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
    title: "Understanding the Target Audience and Buyer Personas",
    description:
      "B2B buying is unlike B2C or D2C. You’re dealing with multiple stakeholders and layers of permissions.",
    expandedContent:
      "B2B buying is unlike B2C or D2C. You’re dealing with multiple stakeholders, layers of permissions, and rounds of approvals. Our SEO strategy targets your audience at each level to shorten the sales cycles by making sure your brand is visible to those who have the most say.",
  },
  {
    id: 2,
    title: "Comprehensive SEO Audits",
    description:
      "It begins with understanding your website’s structure and what’s working and what’s not.",
    expandedContent:
      "It begins with understanding your website’s structure and identifying what’s working and what’s not. As a strategic B2B SEO company, our analysis evaluates key factors such as site architecture, page loading speed, backlink quality, and in-depth content audits. The goal is to uncover technical gaps, missed opportunities, and areas for improvement—setting the perfect foundation for the next stages of growth.",
  },
  {
    id: 3,
    title: "Keyword Research and Targeting",
    description:
      "You don’t want to be found for just anything. It needs to be precise, relevant, and traffic-driven.",
    expandedContent:
      "You don’t want to be found for just anything. It needs to be precise, relevant, and traffic-driven. We uncover high-value, low-competition keywords that your users keep searching for. End goal? The best balance of volume and specific for visibility.",
  },
  {
    id: 4,
    title: "Technical SEO Optimization",
    description:
      "Our goal is to make your website search engine’s best friend by improving technical performance.",
    expandedContent:
      "Next, our goal is to make your website search engines’ best friend. As a performance-driven B2B SEO agency in Mumbai, we focus on essentials such as crawlability and site architecture, while resolving issues like broken links and duplicate content. This ensures a seamless user experience, drives higher organic traffic, and reduces bounce rates across your key pages.",
  },
  {
    id: 5,
    title: "Content Creation and Optimization",
    description:
      "High-quality, relevant content is your way to speak to your audience.",
    expandedContent:
      "High-quality, relevant content is your way to speak to your audience. We take a dual approach by creating new pieces and updating information to make sure your content ranks and resonates. This is where we help you build trust and authority.",
  },
  {
    id: 6,
    title: "Analytics and Reporting",
    description:
      "We track performance through analytics and reporting to refine our strategy.",
    expandedContent:
      "We are all about measuring how far we have to see how far we still have to go. Our detailed analytics and reporting tracks metrics like organic traffic, bounce rates, and conversions to identify trends, refine our strategy, and make sure that every action is toward your business goals. This is what makes up the best B2B SEO agency in Mumbai, India.",
  },
];


  return (
    <section className="w-full bg-white py-8 lg:py-20" data-section="content-process">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-6 lg:mb-8 pt-0">
  <h2 className="[font-family:'DM_Sans',Helvetica] leading-tight">
    <span className="block text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">
      Our Proven B2B SEO Agency <br></br>
    </span>
    <span className="block text-[#543d98] font-bold lg:text-[52px] sm:text-[26px]">
      Framework for Sustainable Growth
    </span>
  </h2>
</div>


        {/* Process Steps */}
        <div className="space-y-4">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ease-out cursor-pointer ${
                hoveredStep === step.id
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
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold transition-colors duration-300 ${
                        hoveredStep === step.id ? "bg-white text-[#543d98]" : "bg-[#543d98]/10 text-[#543d98]"
                      }`}
                    >
                      {step.id}
                    </div>
                    <h3
                      className={`[font-family:'DM_Sans',Helvetica] font-bold text-xl lg:text-2xl transition-colors duration-300 ${
                        hoveredStep === step.id ? "text-white" : "text-[#030019]"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  {/* Description + Arrow (Right) */}
                  <div className="col-span-12 md:col-span-7 flex justify-between items-start">
                    <p
                      className={`[font-family:'DM_Sans',Helvetica] font-normal text-base leading-relaxed transition-colors duration-300 ${
                        hoveredStep === step.id ? "text-white/90" : "text-[#666]"
                      }`}
                    >
                      {step.description}
                    </p>

                    <div
                      className={`flex-shrink-0 ml-4 transition-all duration-300 ${
                        hoveredStep === step.id ? "text-white rotate-90" : "text-[#543d98] rotate-0"
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
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    hoveredStep === step.id ? "max-h-32 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className={`pt-4 border-t ${
                      hoveredStep === step.id ? "border-white/20" : "border-transparent"
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
