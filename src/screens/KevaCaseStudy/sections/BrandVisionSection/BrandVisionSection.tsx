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
          {/* <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">
            Digital Growth for Keva Flavours
          </h2> */}
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight">
            Transforming Flavour Innovation Into Market Leadership
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] lg:text-[17px] leading-relaxed max-w-[720px] mt-4">
            See how strategic digital marketing elevated Keva Flavours from a
            traditional supplier to a global industry powerhouse—with
            multi-channel campaigns, website optimisation and precise targeting
            driving 185% higher sales, 20× more verified leads and 400% social
            media growth.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {/* ============== 1. ABOUT KEVA FLAVOURS ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                <img
                  src="/keva-lab.png"
                  alt="Keva Flavours R&D and flavour lab visual"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-4">
                About Keva Flavours
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[14px] font-semibold text-[#543d98] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Global Flavour Excellence
                  </p>
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[14px] leading-relaxed">
                    Keva Flavours is a leading supplier to food and beverage
                    companies worldwide, backed by decades of expertise in
                    flavours, fragrances and aroma ingredients.
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[14px] font-semibold text-[#543d98] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Strong Group Legacy
                  </p>
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[14px] leading-relaxed">
                    Headquartered in Mumbai and a subsidiary of S.H. Kelkar &amp;
                    Co. Ltd, Keva serves both B2B and B2C markets with
                    innovation-led flavour solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ============== 2. IMPRESSIVE RESULTS DELIVERED ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Impressive Results Delivered
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-5">
                With a sharp digital strategy spanning website excellence,
                targeted campaigns and marketplace optimisation, Keva achieved
                remarkable business growth across channels.
              </p>

              <div className="grid grid-cols-2 gap-4 max-w-md">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Website Sales Increase
                  </p>
                  <p className="text-[#543d98] text-[26px] font-bold [font-family:'DM_Sans',Helvetica]">
                    185%
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Dramatic revenue uplift via optimised digital journeys.
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Verified Lead Growth
                  </p>
                  <p className="text-[#543d98] text-[26px] font-bold [font-family:'DM_Sans',Helvetica]">
                    20×
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Exponential increase in qualified B2B &amp; B2C prospects.
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Amazon Sales Growth
                  </p>
                  <p className="text-[#543d98] text-[26px] font-bold [font-family:'DM_Sans',Helvetica]">
                    64.78%
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Enhanced marketplace visibility and stronger conversions.
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Social Media Growth
                  </p>
                  <p className="text-[#543d98] text-[26px] font-bold [font-family:'DM_Sans',Helvetica]">
                    400%
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Rapid expansion of brand presence across key platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                <img
                  src="/keva-growth-dashboard.png"
                  alt="Digital marketing growth dashboard for Keva Flavours"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* ============== 3. THE CHALLENGE ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                The Challenge: Competing in a Crowded Market
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-5">
                Keva operated in an intensely competitive domestic and global
                flavour landscape. They needed a faster way to reach the right
                audiences, acquire quality leads and scale visibility across
                regions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                    Market Competition
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Intense rivalry across domestic and international flavour
                    markets.
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                    Lead Acquisition
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Difficulty reaching and converting qualified B2B and B2C
                    prospects efficiently.
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                    Global Reach
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Needed quicker and more accurate penetration across multiple
                    regions.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                <img
                  src="/keva-market-challenge.png"
                  alt="Retail shelves visual for flavour products"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* ============== 4. CORE STRATEGIC PILLARS ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[24px] md:text-[28px] mb-3">
                Core Strategic Pillars
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed">
                Our approach combined deep market understanding, competitive
                intelligence and a redesigned digital ecosystem to position Keva
                for sustained global growth.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Deep Market Analysis
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Mapped consumer geography, demographics, preferences and
                  flavour interests.
                </p>
              </div>
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Competitive Intelligence
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Analysed competitor positioning to uncover whitespace and
                  differentiation opportunities.
                </p>
              </div>
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Website Optimisation
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Enhanced SEO, product visualisation and user experience across
                  key pages.
                </p>
              </div>
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Regional Targeting
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Built campaigns aligned to regional demand and audience
                  behaviour.
                </p>
              </div>
            </div>
          </div>

          {/* ============== 5. IMPLEMENTATION STRATEGY ============== */}
          <div className="space-y-6">
            <div className="max-w-[720px]">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Implementation Strategy
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed">
                We combined website excellence with targeted campaigns and a
                multi-channel roadmap to connect Keva with high-value audiences
                at scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Website Excellence
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Product page optimisation, strategic keyword integration and
                  improved visual storytelling.
                </p>
              </div>
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Targeted Campaigns
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Facebook lead generation for domestic and global markets with
                  precision audience targeting.
                </p>
              </div>
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  B2B Brand Building
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  LinkedIn initiatives to strengthen Keva’s position with
                  industry decision-makers.
                </p>
              </div>
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Multi-Channel Growth
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Integrated website, social and marketplace efforts for maximum
                  reach and impact.
                </p>
              </div>
            </div>
          </div>

          {/* ============== 6. REMARKABLE OUTCOMES ============== */}
          <div className="space-y-6">
            <div className="max-w-[720px]">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Remarkable Outcomes
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed">
                The result was a digitally transformed growth engine—delivering
                higher sales, stronger lead funnels and a significantly expanded
                brand footprint across markets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Revenue Impact
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  185% increase in website sales as digital channels became a
                  key growth driver.
                </p>
              </div>
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Lead Engine
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  20× growth in verified leads from focused, insight-led
                  campaigns.
                </p>
              </div>
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Brand Visibility
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  400% expansion in social media presence and stronger marketplace
                  performance.
                </p>
              </div>
            </div>
          </div>

          {/* ============== 7. DIGITAL GROWTH STORY CLOSE ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                <img
                  src="/hem-growht-seo.png"
                  alt="Digital success visual with growth arrow"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Digital Growth Success Story
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed">
                From intense competition to category-defining visibility, Keva
                Flavours used data-driven strategy and creative excellence to
                unlock 185% sales growth, 20× more verified leads and 400% social
                expansion. This digital foundation now powers their next chapter
                of domestic and global growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
