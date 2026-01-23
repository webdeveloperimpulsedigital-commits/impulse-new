import React from "react";

export const WhyChooseSection = (): JSX.Element => {
  return (
    <section
      className="w-full bg-[#F6F6FB] py-16 lg:py-20"
      id="why-sec-border"
      data-section="why-choose"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 lg:mb-8 pt-0">
  <h2 className="[font-family:'DM_Sans',Helvetica] leading-tight">
    <span className="block text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">
      Agents Built Around&nbsp;
    </span>
    <span className="block text-[#543d98] font-bold lg:text-[52px] sm:text-[26px]">
      Your Reality
    </span>
  </h2>
</div>


        {/* ===== MOBILE-ONLY ===== */}
        <div className="block lg:hidden space-y-10">
          {/* 1 */}
          <div>
            <div className="relative overflow-hidden rounded-[24px] shadow-lg mb-4">
              <img
                src="/Data-driven intelligence that learns and adapts.jpg"
                alt="Creative workspace content writing"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
              Tailored Agentic AI Services Built for Your Business Goals
            </h3>

            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
             We Don’t Just Build Agentic AI Agents. We engineer intelligent systems that work like real team members. At Impulse Digital, our agentic AI service are custom-built around your business goals, workflows, and data, ensuring every agent understands context, adapts to change, and delivers measurable outcomes.
            </p>
          </div>

          {/* 2 */}
          <div>
            <div className="relative overflow-hidden rounded-[24px] shadow-lg mb-4">
              <img
                src="/Tailored AI solutions built for your business goals.jpg"
                alt="Laptop with content writing screen"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
              Agentic AI Powered by Data That Learns and Adapts
            </h3>

            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
              Built for real business use, our agentic ai agency designs sgentic ai systems to solve real operational challenges, not run demos. Every agent is trained on your workflows, data, and goals to deliver outcomes that truly matter.
            </p>
          </div>

          {/* 3 */}
          <div>
            <div className="relative overflow-hidden rounded-[28px] shadow-lg mb-4">
              <img
                 src="/seamless integration.jpg"
                alt="Content strategy workspace"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
              Agentic AI Agency Enabling Seamless Integration Across Your Digital Stack
            </h3>

            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
              End-to-End Execution. From research and strategy to deployment and optimization, our Agentic AI Agency manages the complete agentic ai lifecycle so you can focus on growth while your AI works in the background.
            </p>
          </div>
        </div>

        {/* ===== DESKTOP-ONLY ===== */}
        <div className="hidden lg:block">
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-8 lg:mb-10 items-start">
            {/* Left Column */}
            <div className="lg:col-span-6 flex flex-col">
              {/* Image 1 */}
              <div className="relative overflow-hidden rounded-[24px] shadow-lg mb-4">
                <img
                  src="/Data-driven intelligence that learns and adapts.jpg"
                  alt="Laptop with content writing screen"
                  className="w-full h-[630px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <br></br>

              {/* Content 1 */}
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2 pt-16">
                Agentic AI Powered by Data That Learns and Adapts
              </h3>

              <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed mb-0">
                Built for real business use, our agentic ai agency designs sgentic ai systems to solve real operational challenges, not run demos. Every agent is trained on your workflows, data, and goals to deliver outcomes that truly matter.
              </p>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="pr-2 mb-8 mt-12 pb-16">
                <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2">
                  Tailored AI solutions built for your business goals
                </h3>

                <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed max-w-[620px]">
                  We Don’t Just Build AI Agents. We engineer intelligent systems that work like real team members.
                  At Impulse, our Agentic AI solutions are custom-built around your business goals, workflows, and data,
                  ensuring every agent understands context, adapts to change, and delivers measurable outcomes.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-[24px] shadow-lg">
                <img
                  src="/Tailored AI solutions built for your business goals.jpg"
                  alt="Creative workspace content writing"
                  className="w-full h-[630px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Full-width banner + copy below */}
          <div>
            <div className="relative overflow-hidden rounded-[28px] shadow-lg">
              <img
                src="/seamless integration.jpg"
                alt="Content strategy workspace"
                className="w-full h-[510px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            <div className="mt-6 max-w-12xl">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2">
                Agentic AI Agency Enabling Seamless Integration Across Your Digital Stack
              </h3>

              <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
                End-to-End Execution. From research and strategy to deployment and optimization, our Agentic AI Agency manages the complete agentic ai lifecycle so you can focus on growth while your AI works in the background.
              </p>
            </div>
          </div>
        </div>
        {/* ===== /DESKTOP-ONLY ===== */}
      </div>
    </section>
  );
};
