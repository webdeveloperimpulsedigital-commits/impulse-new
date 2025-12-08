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
            DMart Campaign Success Story
          </h2>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight">
            Driving 13.43 Lac Reach for Seasonal Retail
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] lg:text-[17px] leading-relaxed max-w-[720px] mt-4">
            How we helped DMart connect with college students in Pune for its
            “Trendy College Wear” sale-using a custom landing page, smart
            targeting, and pixel-based tracking to bridge the gap between
            digital awareness and in-store visits.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {/* ============= 1. ABOUT DMART ============= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                <img
                  src="/dmart-store-hero.png"
                  alt="DMart retail store visual"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-4">
                About DMart
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[14px] font-semibold text-[#543d98] mb-1 [font-family:'DM_Sans',Helvetica]">
                    196 Stores
                  </p>
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[14px] leading-relaxed">
                    Across 72 cities in 11 states-serving India’s value-conscious
                    families with everyday essentials.
                  </p>
                </div>

                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[14px] font-semibold text-[#543d98] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Everyday Value Retailer
                  </p>
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[14px] leading-relaxed">
                    Avenue Supermarts Limited operates India&apos;s leading
                    supermarket chain-home utility products, groceries,
                    kitchenware, appliances, and personal care items under one
                    roof.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ============= 2. THE CHALLENGE ============= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                The Challenge
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-5">
                DMart wanted to drive footfalls for a limited-period “Trendy
                College Wear” sale-but with no e-commerce platform in place, we
                needed an innovative way to track and influence offline
                conversions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                    Target Audience
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    College students aged 16–23 in Pune, looking for affordable,
                    trendy fashion.
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                    Tracking Complexity
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    No online checkout-required a solution that could track
                    intent from digital to store.
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                    Store Footfall
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Drive visits to 13 DMart locations across Pune during the
                    campaign period.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                <img
                  src="/dmart-challenge.png"
                  alt="Students shopping trendy college wear at DMart"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* ============= 3. STRATEGIC APPROACH ============= */}
          <div className="space-y-6">
            <div className="max-w-[720px]">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Strategic Approach
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed">
                We designed a full-funnel journey that started on social media
                and ended inside the store-built on a custom landing page,
                platform-specific targeting, and robust tracking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Custom Landing Page
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Built a dynamic page showcasing all 13 DMart store locations
                  with engagement forms to capture student interest.
                </p>
              </div>
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Multi-Platform Targeting
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Optimised campaigns on Facebook and Instagram to capture and
                  retain student attention where they spend most of their time.
                </p>
              </div>
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Pixel Tracking Integration
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Implemented pixel tracking to monitor the user journey from
                  ad click to landing page engagement and store intent.
                </p>
              </div>
            </div>
          </div>

          {/* ============= 4. CREATIVE EXECUTION ============= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                <img
                  src="/dmart-creative-execution.png"
                  alt="Mobile mockups showing DMart campaign creatives"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Creative Execution
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                    Static &amp; Carousel GIF Ads
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Eye-catching, scroll-stopping visuals designed specifically
                    for young audiences and mobile feeds.
                  </p>
                </div>

                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                    A/B Testing Strategy
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Tested reach-based versus click-based objectives to optimise
                    performance and cost efficiency.
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Engagement-Focused Content
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Crafted messaging around student lifestyle, campus fashion,
                  and seasonal buying triggers to maximise relevance.
                </p>
              </div>
            </div>
          </div>

          {/* ============= 5. LANDING PAGE INNOVATION ============= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Landing Page Innovation
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-5">
                The dynamic landing page acted as the bridge between digital and
                physical retail, creating a seamless, trackable experience for
                students.
              </p>

              <div className="space-y-3">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                    Visitor Engagement
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Students filled in details and interacted with the campaign
                    before heading to the store.
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                    Store Locator
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Helped users quickly find their nearest DMart from 13 Pune
                    locations.
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                    In-Store Visit
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    The journey was optimised to convert online interest into
                    walk-ins for the “Trendy College Wear” collection.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                <img
                  src="/dmart-landing-page.jpg"
                  alt="Laptop showing DMart campaign landing page"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* ============= 6. CAMPAIGN RESULTS ============= */}
          <div className="space-y-6">
            <div className="max-w-[720px]">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                DMart Campaign Results at a Glance
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed">
                The campaign delivered strong reach and engagement across
                platforms-while feeding high-intent traffic to the landing page.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-[#F6F6FB] rounded-2xl px-5 py-5">
                <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                  Unique Reach
                </p>
                <p className="text-[#543d98] text-[26px] font-bold [font-family:'DM_Sans',Helvetica]">
                  13.43L
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Students and shoppers reached across Pune.
                </p>
              </div>

              <div className="bg-[#F6F6FB] rounded-2xl px-5 py-5">
                <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                  Unique Clicks
                </p>
                <p className="text-[#543d98] text-[26px] font-bold [font-family:'DM_Sans',Helvetica]">
                  53K
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Landing page visits indicating strong purchase intent.
                </p>
              </div>

              <div className="bg-[#F6F6FB] rounded-2xl px-5 py-5">
                <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                  Post Engagements
                </p>
                <p className="text-[#543d98] text-[26px] font-bold [font-family:'DM_Sans',Helvetica]">
                  55K
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Likes, comments, shares, and other social interactions.
                </p>
              </div>

              <div className="bg-[#F6F6FB] rounded-2xl px-5 py-5">
                <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                  Video Views
                </p>
                <p className="text-[#543d98] text-[26px] font-bold [font-family:'DM_Sans',Helvetica]">
                  70K
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Video engagements that amplified campaign storytelling.
                </p>
              </div>
            </div>
          </div>

          {/* ============= 7. SUCCESS FACTORS & TAKEAWAYS ============= */}
          <div className="space-y-10">
            {/* Success Factors */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left: Copy */}
              <div className="lg:col-span-6">
                <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                  Success Factors
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                    <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                      Innovative Tracking
                    </p>
                    <p className="text-[13px] text-[#4B4B5C]">
                      Overcame brick-and-mortar limitations with pixel
                      integration and a custom landing page.
                    </p>
                  </div>
                  <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                    <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                      Precise Targeting
                    </p>
                    <p className="text-[13px] text-[#4B4B5C]">
                      Laser-focused on college demographics with
                      platform-optimised content.
                    </p>
                  </div>
                  <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                    <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                      Data-Driven Optimisation
                    </p>
                    <p className="text-[13px] text-[#4B4B5C]">
                      A/B testing enabled cost-effective reach and maximum
                      engagement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Visual */}
              <div className="lg:col-span-6">
                <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                  <img
                    src="/dmart-success-team.png"
                    alt="DMart campaign success celebration"
                    className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left: Visual */}
              <div className="lg:col-span-6">
                <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                  <img
                    src="/Analytics dashboard visual for DMart campaign.jpg"
                    alt="Analytics dashboard visual for DMart campaign"
                    className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right: Copy */}
              <div className="lg:col-span-6">
                <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                  Key Takeaways
                </h3>
                <ul className="space-y-3 text-[14px] md:text-[15px] text-[#4B4B5C] [font-family:'DM_Sans',Helvetica] list-disc pl-5">
                  <li>
                    Creative solutions can effectively bridge digital campaigns
                    and physical retail outcomes.
                  </li>
                  <li>
                    Custom landing pages help track offline conversions even for
                    traditional retailers without e-commerce.
                  </li>
                  <li>
                    A multi-platform approach maximises student engagement-here,
                    Facebook + Instagram delivered 13.43 lac reach with
                    compelling assets.
                  </li>
                  <li>
                    Testing and optimisation drive cost efficiency, adding
                    thousands of new followers while keeping spends economical.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Success & Takeaways */}
        </div>
      </div>
    </section>
  );
};
