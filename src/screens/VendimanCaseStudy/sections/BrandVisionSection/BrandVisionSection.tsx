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
            Digital Growth for Vendiman
          </h2> */}
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight">
            From Zero Digital Presence to Market Leader
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] lg:text-[17px] leading-relaxed max-w-[720px] mt-4">
            Discover how we took Vendiman from almost no digital footprint to a
            category-leading smart vending brand in just 60 days-through a full
            website overhaul, SEO foundation building and a social media
            transformation that drove explosive awareness, traffic and leads.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {/* ============== 1. ABOUT VENDIMAN ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                <img
                  src="/17_Vendiman.jpg"
                  alt="Vendiman smart vending machine visual"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-4">
                About Vendiman
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[14px] font-semibold text-[#543d98] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Smart Micro Retail
                  </p>
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[14px] leading-relaxed">
                    Vendiman is India&apos;s leading new-age vending solution,
                    delivering everyday convenience through smart, automated
                    micro retail experiences.
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[14px] font-semibold text-[#543d98] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Easier. Smarter. Safer.
                  </p>
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[14px] leading-relaxed">
                    From healthy meals to premium beverages, Vendiman combines
                    technology and curation to make snacking easier, smarter and
                    safer for modern India.
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
                With a sharp digital transformation roadmap, Vendiman went from
                minimal visibility to owning key search terms, generating
                qualified leads and building a strong social presence in record
                time.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Keywords on Page 1
                  </p>
                  <p className="text-[#543d98] text-[26px] font-bold [font-family:'DM_Sans',Helvetica]">
                    87%
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Majority of targeted queries ranked on page one within two
                    months.
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Organic Traffic Surge
                  </p>
                  <p className="text-[#543d98] text-[26px] font-bold [font-family:'DM_Sans',Helvetica]">
                    90%
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Massive uplift in qualified visitors engaging with the new
                    website.
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Organic Leads Generated
                  </p>
                  <p className="text-[#543d98] text-[26px] font-bold [font-family:'DM_Sans',Helvetica]">
                    44
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    11 leads in month one and 33 in month two, signalling
                    exponential growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                <img
                  src="/vendiman-growth-dashboard.png"
                  alt="Vendiman analytics dashboard showing growth"
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
                The Challenge: Limited Digital Footprint
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-5">
                Vendiman had a single-page website and almost no digital
                presence. Their product breadth, brand story and strong value
                proposition were not visible to the right audiences online.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                    Limited Digital Footprint
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    A single-page static site could not showcase the full
                    product range or innovation story.
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                    Irrelevant Traffic
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Low-quality visitors with minimal conversion potential
                    hampered revenue growth.
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                    Weak Social Presence
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Monotonous, outdated content failed to engage modern,
                    tech-savvy audiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                <img
                  src="/project-2-jpg.png"
                  alt="Marketer reviewing low website analytics"
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
                We created a holistic digital roadmap for Vendiman, combining
                positioning, website transformation, SEO foundations and social
                media revitalisation to unlock scalable growth.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Brand Message Development
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Defined a compelling narrative around ease of use, safety and
                  everyday convenience.
                </p>
              </div>
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Website Restructure
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Shifted from a single page to a multi-page experience that
                  showcased the complete product ecosystem.
                </p>
              </div>
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  SEO Foundation
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Built a robust SEO base with competitor analysis and strategic
                  keyword research.
                </p>
              </div>
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Social Media Revitalisation
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Introduced a modern mix of purposeful statics and engaging
                  video reels.
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
                We activated the strategy through a phased execution across the
                website, search and social-backed by continuous monitoring and
                optimisation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Deep Market Analysis
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Studied competitors and mapped customer preferences to shape
                  the content and UX.
                </p>
              </div>
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Keyword Targeting
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Selected 15 high-value search terms and optimised pages to win
                  those queries.
                </p>
              </div>
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  On-Page &amp; Off-Page SEO
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Implemented content enhancements, technical fixes and off-page
                  activities for authority.
                </p>
              </div>
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Social Media Transformation
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Built a lifestyle-focused content mix that improved
                  interactions, awareness and lead quality.
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
                In just two months, Vendiman&apos;s transformed digital ecosystem
                started delivering measurable business results across search,
                traffic and lead generation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Search Visibility
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  87% of targeted keywords ranking on page one within two
                  months.
                </p>
              </div>
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Qualified Traffic
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  90% organic traffic surge from relevant, high-intent visitors.
                </p>
              </div>
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Lead Pipeline
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  44 organic leads generated in the first two months, setting a
                  strong growth trajectory.
                </p>
              </div>
            </div>
          </div>

          {/* ============== 7. DIGITAL SUCCESS STORY CLOSE ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                <img
                  src="/Team reviewing performance dashboards.png"
                  alt="Digital success visual with vending machine and growth"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Digital Transformation Success Story
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed">
                Vendiman&apos;s journey shows what&apos;s possible when a clear brand
                story, a high-performing website, SEO foundations and modern
                social content work together. From zero meaningful presence to a
                market-leading position online-the brand now has a scalable
                digital engine powering future growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
