// BrandVisionSection.tsx
import React from "react";

export const BrandVisionSection = (): JSX.Element => {
  return (
    <section
      className="w-full bg-white lg:py-16 sm:py-10"
      id="sec-border"
      data-section="brand-vision"
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">

        {/* ================== HEADER ================== */}
        <div className="mb-10 lg:mb-14 pt-4">
          <h2 className="text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">
            HUL Digital Campaign Success
          </h2>

          <h2 className="font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight">
            90+ years heritage, 50+ FMCG brands, India's largest consumer goods 
manufacturer

          </h2>

          
        </div>

        <div className="space-y-16 lg:space-y-20">

          {/* ================== CHALLENGE ================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                <img
                  src="/hul-challenge.png"
                  alt="HUL campaign challenge visual"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6">
              <h3 className="text-[#543d98] font-bold text-[26px] md:text-[30px] mb-4">
                The Challenge
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="font-semibold text-[#543d98] mb-1">
                    Online-Offline Integration
                  </p>
                  <p className="text-[#4B4B5C] text-[14px] leading-relaxed">
                    Executing a productive couponing campaign across Pune and Delhi.
                  </p>
                </div>

                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="font-semibold text-[#543d98] mb-1">
                    Generate & Redeem
                  </p>
                  <p className="text-[#4B4B5C] text-[14px] leading-relaxed">
                    Encourage online coupon generation for offline store redemption.
                  </p>
                </div>

                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="font-semibold text-[#543d98] mb-1">
                    Target Audience
                  </p>
                  <p className="text-[#4B4B5C] text-[14px] leading-relaxed">
                    Reaching consumers within selected geo-locations effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================== STRATEGIC APPROACH ================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Text */}
            <div className="lg:col-span-6">
              <h3 className="text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Strategic Approach
              </h3>

              <p className="text-[#4B4B5C] text-[15px] leading-relaxed mb-5">
                A precision-driven strategy combining proximity targeting, metro audience 
                segmentation, and product categorisation enabled HUL to maximise coupon 
                generation efficiently.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[12px] text-[#7B7B8A]">Platform Selection</p>
                  <p className="text-[#543d98] font-bold text-[22px] leading-tight">
                    Facebook & Instagram
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    3-km radius targeting with audience behaviour insights.
                  </p>
                </div>

                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[12px] text-[#7B7B8A]">Geographic Focus</p>
                  <p className="text-[#543d98] font-bold text-[22px] leading-tight">
                    Pune & Delhi
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Localised campaigns tailored to metro consumption patterns.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                <img
                  src="/hul-map.png"
                  alt="India map for geo targeting strategy"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* ================== PRODUCT BIFURCATION ================== */}
          <div>
            <h3 className="text-[#543d98] font-bold text-[26px] md:text-[30px] mb-4">
              Product Bifurcation Strategy
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F6F6FB] rounded-2xl px-5 py-5">
                <p className="font-semibold text-[#543d98] mb-1">Premium Products</p>
                <p className="text-[#4B4B5C] text-[14px] leading-relaxed">
                  Targeted messaging for high-value product categories.
                </p>
              </div>

              <div className="bg-[#F6F6FB] rounded-2xl px-5 py-5">
                <p className="font-semibold text-[#543d98] mb-1">Non-Premium Products</p>
                <p className="text-[#4B4B5C] text-[14px] leading-relaxed">
                  Broad-reach communication for daily essentials and mass appeal.
                </p>
              </div>
            </div>
          </div>

          {/* ================== USER JOURNEY ================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Text */}
            <div className="lg:col-span-6">
              <h3 className="text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                User Journey
              </h3>

              <div className="space-y-4">
                {[
                  "Landing Page Arrival - User details captured",
                  "Contact Verification - Phone number authentication",
                  "System Transfer - Data sent to HUL backend",
                  "Coupon Generation - SMS coupon delivered instantly",
                ].map((step, i) => (
                  <div
                    key={i}
                    className="bg-[#F6F6FB] rounded-2xl px-4 py-3 text-[14px] text-[#4B4B5C]"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg">
                <img
                  src="/hul-user-journey.png"
                  alt="User journey visual"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* ================== RESULTS ================== */}
<div className="space-y-6">
  <h3 className="text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
    Campaign Results
  </h3>

  <div className="space-y-4">
    {[
      { label: "Higher CTR", value: "90%" },
      { label: "Increase in Clicks", value: "41.8%" },
      { label: "Impression Growth", value: "79.7%" },
      { label: "Landing Page Sessions", value: "12.5K" },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-[#F6F6FB] rounded-[40px] px-6 py-5 sm:px-10 sm:py-6 flex flex-col sm:flex-row sm:items-baseline sm:justify-between shadow-sm"
      >
        <p className="text-[13px] sm:text-[14px] text-[#7B7B8A] mb-1 sm:mb-0">
          {item.label}
        </p>
        <p className="text-[#543d98] text-[26px] sm:text-[32px] font-bold leading-none">
          {item.value}
        </p>
      </div>
    ))}
  </div>
</div>


          {/* ================== KEY TAKEAWAYS ================== */}
          <div className="space-y-4">
            <h3 className="text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
              Key Takeaways
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Strategic segmentation improved targeting precision.",
                "3-km proximity targeting maximized campaign relevance.",
                "Seamless backend integration enabled smooth coupon delivery.",
                "12,548+ sessions achieved with outstanding engagement.",
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-[#F6F6FB] rounded-2xl px-4 py-4 text-[14px] text-[#4B4B5C]"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
