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
          <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">
            Diwali Campaign for LG Hing
          </h2>

          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight">
            Empowering Women, Celebrating Tradition
          </h2>

          <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] lg:text-[17px] leading-relaxed max-w-[720px] mt-4">
            How LG Hing connected brand values to community impact during Diwali.
            2023.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-20">

          {/* ============== 1. ABOUT LG HING ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left: Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                <img
                  src="/lg-hing-packshot.png"
                  alt="LG Hing product visual"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-4">
                The Brand — LG Hing
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[14px] font-semibold text-[#543d98] mb-1">
                    Heritage Since 1894
                  </p>
                  <p className="text-[14px] text-[#4B4B5C] leading-relaxed">
                    India’s trusted compounded hing manufacturer since 1894.
                  </p>
                </div>

                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[14px] font-semibold text-[#543d98] mb-1">
                    Nationwide Reach
                  </p>
                  <p className="text-[14px] text-[#4B4B5C] leading-relaxed">
                    From South India roots to nationwide reach, built on
                    uncompromised quality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ============== 2. DIWALI CHALLENGE ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left copy */}
            <div className="lg:col-span-6">
              <h3 className="text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                The Diwali Challenge
              </h3>

              <p className="text-[15px] text-[#4B4B5C] leading-relaxed mb-5">
                Every brand competing for attention across TV, digital, outdoor.
                Traditional Diwali campaigns felt disconnected from authentic values.
                Need to drive immediate results while building lasting brand love.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="font-semibold text-[#543d98] text-[13px] mb-1">
                    Crowded Season
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Every brand competing for attention.
                  </p>
                </div>

                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="font-semibold text-[#543d98] text-[13px] mb-1">
                    Generic Messaging
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Traditional Diwali campaigns felt disconnected from real values.
                  </p>
                </div>

                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="font-semibold text-[#543d98] text-[13px] mb-1">
                    Sales Pressure
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Need to drive results while building brand love.
                  </p>
                </div>
              </div>
            </div>

            {/* Right visual */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                <img
                  src="/diwali-market-lg-hing.png"
                  alt="Diwali market"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* ============== 3. A DIFFERENT APPROACH ============== */}
          <div className="space-y-6">
            <div className="max-w-[720px]">
              <h3 className="text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                A Different Approach
              </h3>

              <p className="text-[#4B4B5C] leading-relaxed text-[15px] md:text-[16px]">
                Instead of shouting louder, we chose to connect deeper.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="font-semibold text-[#543d98] text-[13px] mb-1">
                  Identify the Real Story
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Local women entrepreneurs at the heart of Diwali celebrations.
                </p>
              </div>

              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="font-semibold text-[#543d98] text-[13px] mb-1">
                  Align With Brand Values
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Empowerment and community support — not just product features.
                </p>
              </div>

              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="font-semibold text-[#543d98] text-[13px] mb-1">
                  Create Emotional Connection
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Celebrate the women who prepare, buy, and sell Diwali snacks.
                </p>
              </div>

            </div>
          </div>

          {/* ============== 4. STRATEGY ============== */}
          <div className="space-y-6">
            <div className="max-w-[720px]">
              <h3 className="text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                The Strategy: Values Over Volume
              </h3>

              <p className="text-[#4B4B5C] text-[15px] leading-relaxed">
                Spotlight the Unsung Heroes. We deep-dived into brand heritage to create a
                video story celebrating women entrepreneurs. Emotional authenticity replaced
                promotional messaging.
              </p>
            </div>
          </div>

          {/* ============== 5. EXECUTION ============== */}
          <div className="space-y-6">
            <h3 className="text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
              Campaign Execution
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="font-semibold text-[#543d98] text-[13px] mb-1">
                  Authentic Video Content
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Real stories, real women, genuine emotional moments.
                </p>
              </div>

              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="font-semibold text-[#543d98] text-[13px] mb-1">
                  Values-First Messaging
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Brand values woven naturally into Diwali narrative.
                </p>
              </div>

              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="font-semibold text-[#543d98] text-[13px] mb-1">
                  Strategic Amplification
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Digital-first approach targeting engaged, values-aligned audiences.
                </p>
              </div>

            </div>
          </div>

          {/* ============== 6. IMPACT ============== */}
          <div className="space-y-6">

            <div className="max-w-[720px]">
              <h3 className="text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Impact That Matters
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[12px] text-[#7B7B8A] mb-1">Sales Increase</p>
                <p className="text-[#543d98] text-[26px] font-bold">5%</p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Within 24 hours of campaign launch.
                </p>
              </div>

              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[12px] text-[#7B7B8A] mb-1">Impressions</p>
                <p className="text-[#543d98] text-[26px] font-bold">507K</p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Massive brand visibility during peak season.
                </p>
              </div>

              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[12px] text-[#7B7B8A] mb-1">Engagements</p>
                <p className="text-[#543d98] text-[26px] font-bold">4.5K</p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Meaningful interactions, not just views.
                </p>
              </div>

            </div>
          </div>

          {/* ============== 7. BEYOND THE NUMBERS ============== */}
          <div className="space-y-6">
            <div className="max-w-[720px]">
              <h3 className="text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Beyond the Numbers
              </h3>

              <p className="text-[#4B4B5C] leading-relaxed text-[15px]">
                More positive reflection among target audiences — seen as supporter
                of community values. Successfully linked brand heritage with social
                purpose. Audience saw themselves and their values reflected in the
                campaign.
              </p>
            </div>
          </div>

          {/* ============== 8. KEY LEARNINGS ============== */}
          <div className="space-y-6">
            <h3 className="text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
              Key Learnings
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="font-semibold text-[#543d98] text-[13px] mb-1">
                  Authenticity Wins
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Real stories of empowerment resonated more than promotional messaging.
                </p>
              </div>

              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="font-semibold text-[#543d98] text-[13px] mb-1">
                  Values Drive Sales
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Purpose-led campaigns can deliver immediate business results.
                </p>
              </div>

              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="font-semibold text-[#543d98] text-[13px] mb-1">
                  Community as Hero
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Shifting spotlight from product to people created deeper loyalty.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
