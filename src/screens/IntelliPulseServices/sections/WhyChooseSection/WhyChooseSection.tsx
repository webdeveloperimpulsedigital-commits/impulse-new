import React from "react";
 
export const WhyChooseSection = (): JSX.Element => {
  return (
    <section
      className="w-full bg-[#F6F6FB] py-16 lg:py-20"
      id="why-sec-border"
      data-section="why-choose"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-6 lg:mb-8 pt-0">
          <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px] ">
            Why Choose Impulse Digital for Intelli Pulse
          </h2>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight ">
            Insight That Moves Business Forward
          </h2>
        </div>

        {/* ===== MOBILE VIEW ===== */}
        <div className="block lg:hidden space-y-10">
          
          {/* 1 */}
          <div>
            <div className="relative overflow-hidden rounded-[24px] shadow-lg mb-4">
              <img
                src="/impulse-website/why-choose-1.png"
                alt="AI-driven intelligence"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
              AI-Driven Intelligence, Enhanced by Human Insight
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
              We blend advanced AI analytics with expert strategists to deliver
              intelligence that is sharp, contextual, and immediately actionable.
            </p>
          </div>

          {/* 2 */}
          <div>
            <div className="relative overflow-hidden rounded-[24px] shadow-lg mb-4">
              <img
                src="/impulse-website/why-choose-2.jpg"
                alt="Complete market visibility"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
              Complete Market Visibility from Every Digital Signal
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
              We unify search trends, social conversations, and e-commerce signals
              to reveal true consumer behaviour and category shifts.
            </p>
          </div>

          {/* 3 */}
          <div>
            <div className="relative overflow-hidden rounded-[28px] shadow-lg mb-4">
              <img
                src="/impulse-website/content-full-width-img.jpg"
                alt="Insights that convert into fast action"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
              Insights That Convert Into Fast, Strategic Action
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
              Every analysis ends with execution-ready recommendations so your teams
              don’t just receive data — they gain direction that accelerates growth.
            </p>
          </div>
        </div>
        {/* ===== END MOBILE ===== */}

        {/* ===== DESKTOP VIEW ===== */}
        <div className="hidden lg:block">

          {/* Block 1 & 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-8 lg:mb-10 items-start">

            {/* Left */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="relative overflow-hidden rounded-[24px] shadow-lg mb-4">
                <img
                  src="/impulse-website/why-choose-1.png"
                  alt="AI-driven intelligence"
                  className="w-full h-[630px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div><br />
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2 pt-16">
                Complete Market Visibility from Every Digital Signal
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed mb-0">
                From search to social and everything in-between — we decode the signals
                that truly shape consumer decisions.
              </p>
            </div>

            {/* Right */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="pr-2 mb-8 mt-12 pb-16">
                <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2">
                  AI-Driven Intelligence, Enhanced by Human Insight
                </h3>
                <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed max-w-[620px]">
                  Advanced AI finds patterns. Human experts turn them into insight. The
                  perfect blend for precision decision-making.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-[24px] shadow-lg">
                <img
                  src="/impulse-website/why-choose-2.jpg"
                  alt="Complete market visibility"
                  className="w-full h-[630px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Block 3 */}
          <div>
            <div className="relative overflow-hidden rounded-[28px] shadow-lg">
              <img
                src="/impulse-website/content-full-width-img.jpg"
                alt="Insights that convert into fast action"
                className="w-full h-[510px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            <div className="mt-6 max-w-12xl">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2">
                Insights That Convert Into Fast, Strategic Action
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
                We go beyond charts and dashboards — delivering clear recommendations
                that unlock smarter, faster growth.
              </p>
            </div>
          </div>
        </div>
        {/* ===== END DESKTOP ===== */}

      </div>
    </section>
  );
};
