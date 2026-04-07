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
          <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">
            Want AI SEO to feel like a superpower
          </h2>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight">
            and not a gamble?
          </h2>
        </div>

        {/* ===== MOBILE-ONLY ===== */}
        <div className="block lg:hidden space-y-10">

          {/* 1 */}
          <div>
            <div className="relative overflow-hidden rounded-[24px] shadow-lg mb-4">
              <img
                src="/Data-Driven, Future-Ready Execution.jfif"
                alt="GEO AEO LLM Strategy"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
              GEO, AEO & LLM-Aligned Strategy
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
              Our AI SEO service & approach combines Generative Engine Optimization, Answer Engine Optimization, and LLM content alignment so AI systems understand, trust, and recommend your brand.
            </p>
          </div>

          {/* 2 */}
          <div>
            <div className="relative overflow-hidden rounded-[24px] shadow-lg mb-4">
              <img
                src="/Ai Seo-03.png"
                alt="Data Driven Execution"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
              Data-Driven, Future-Ready Execution
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
              Every decision is backed by AI insights and real-time signals, ensuring your visibility adapts as search shifts from links to answers.
            </p>
          </div>

          {/* 3 */}
          <div>
            <div className="relative overflow-hidden rounded-[28px] shadow-lg mb-4">
              <img
                src="/Focused on Outcomes, Not Rankings.jfif"
                alt="Outcome Focused SEO"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
              Focused on Outcomes, Not Rankings
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
              We measure success by AI visibility, brand mentions in generative results, and discovery across AI platforms, not just keyword positions.
            </p>
          </div>
        </div>

        {/* ===== DESKTOP-ONLY ===== */}
        <div className="hidden lg:block">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-8 lg:mb-10 items-start">

            {/* Left Column */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="relative overflow-hidden rounded-[24px] shadow-lg mb-4">
                <img
                  src="/Data-Driven, Future-Ready Execution.jfif"
                  alt="GEO AEO LLM Strategy"
                  className="w-full h-[630px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2 pt-16">
                Data-Driven, Future-Ready Execution
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
                Every decision is backed by AI insights and real-time signals, ensuring your visibility adapts as search shifts from links to answers.
              </p>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="pr-2 mb-8 mt-12 pb-16">
                <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2">
                  GEO, AEO & LLM-Aligned Strategy
                </h3>
                <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed max-w-[620px]">
                  Our AI SEO approach combines Generative Engine Optimization, Answer Engine Optimization, and LLM content alignment so AI systems understand, trust, and recommend your brand.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-[24px] shadow-lg">
                <img
                  src="/Ai Seo-03.png"
                  alt="AI SEO Strategy"
                  className="w-full h-[630px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div>
            <div className="relative overflow-hidden rounded-[28px] shadow-lg">
              <img
                src="/Focused on Outcomes, Not Rankings.jfif"
                alt="Outcome Focused SEO"
                className="w-full h-[510px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            <div className="mt-6 max-w-12xl">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2">
                Focused on Outcomes, Not Rankings
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
                We measure success by AI visibility, brand mentions in generative results, and discovery across AI platforms — not just keyword positions.
              </p>
            </div>
          </div>

        </div>
        {/* ===== /DESKTOP ===== */}

      </div>
    </section>
  );
};
