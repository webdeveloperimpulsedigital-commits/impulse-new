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
          <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px] ">
            Agents Built Around
          </h2>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight ">
            Your Reality
          </h2>
        </div>

        {/* ===== MOBILE-ONLY ===== */}
        <div className="block lg:hidden space-y-10">
          {/* 1 */}
          <div>
            <div className="relative overflow-hidden rounded-[24px] shadow-lg mb-4">
              <img
                src="/Data-driven intelligence that learns and adapts.jfif"
                alt="Creative workspace content writing"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
              Tailored AI solutions built for your business goals
            </h3>

            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
              We Don’t Just Build AI Agents. We engineer intelligent systems that work like real team members.
              At Impulse, our Agentic AI solutions are custom-built around your business goals, workflows, and data,
              ensuring every agent understands context, adapts to change, and delivers measurable outcomes.
            </p>
          </div>

          {/* 2 */}
          <div>
            <div className="relative overflow-hidden rounded-[24px] shadow-lg mb-4">
              <img
                src="/Tailored AI solutions built for your business goals.jfif"
                alt="Laptop with content writing screen"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
              Data-driven intelligence that learns and adapts
            </h3>

            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
              Built for Real Business Use. Our Agentic AI systems are designed to solve real operational challenges
              - not run demos. Every agent is trained on your workflows, data, and goals to deliver outcomes that matter.
            </p>
          </div>

          {/* 3 */}
          <div>
            <div className="relative overflow-hidden rounded-[28px] shadow-lg mb-4">
              <img
                 src="/seamless integration.jfif"
                alt="Content strategy workspace"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
              Seamless integration across your existing digital stack
            </h3>

            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
              End-to-End Execution. From research and strategy to deployment and optimization, we manage the complete
              Agentic AI lifecycle - so you focus on growth while your AI works in the background.
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
                  src="/Data-driven intelligence that learns and adapts.jfif"
                  alt="Laptop with content writing screen"
                  className="w-full h-[630px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <br></br>

              {/* Content 1 */}
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2 pt-16">
                Data-driven intelligence that learns and adapts
              </h3>

              <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed mb-0">
                Built for Real Business Use. Our Agentic AI systems are designed to solve real operational challenges
                - not run demos. Every agent is trained on your workflows, data, and goals to deliver outcomes that matter.
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
                  src="/Tailored AI solutions built for your business goals.jfif"
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
                src="/seamless integration.jfif"
                alt="Content strategy workspace"
                className="w-full h-[510px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            <div className="mt-6 max-w-12xl">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2">
                Seamless integration across your existing digital stack
              </h3>

              <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
                End-to-End Execution. From research and strategy to deployment and optimization, we manage the complete
                Agentic AI lifecycle - so you focus on growth while your AI works in the background.
              </p>
            </div>
          </div>
        </div>
        {/* ===== /DESKTOP-ONLY ===== */}
      </div>
    </section>
  );
};
