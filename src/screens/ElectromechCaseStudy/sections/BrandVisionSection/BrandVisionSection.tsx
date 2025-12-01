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
            ElectroMech Digital Transformation
          </h2>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight">
            Asia’s Top Crane Manufacturer Goes Truly Digital
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] lg:text-[17px] leading-relaxed max-w-[720px] mt-4">
            For ElectroMech, one of Asia’s top 10 industrial crane manufacturers,
            we rebuilt the digital engine-from website architecture and SEO to
            content and social media-to unlock sustainable organic growth,
            better-quality leads, and stronger global visibility.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {/* ============== 1. RESULTS THAT SPEAK VOLUMES ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Results That Speak Volumes
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-5">
                Within months of launch, ElectroMech shifted from a fragmented,
                low-visibility presence to a cohesive, high-performing digital
                ecosystem-driving measurable gains in rankings, leads, and
                engagement.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    First Page Rankings
                  </p>
                  <p className="text-[#543d98] text-[22px] font-bold [font-family:'DM_Sans',Helvetica]">
                    200%
                  </p>
                  <p className="text-[12px] text-[#7B7B8A]">
                    Doubled in just 6 months
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Verified Leads
                  </p>
                  <p className="text-[#543d98] text-[22px] font-bold [font-family:'DM_Sans',Helvetica]">
                    20×
                  </p>
                  <p className="text-[12px] text-[#7B7B8A]">
                    Exponential lead-generation growth
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Social Engagement
                  </p>
                  <p className="text-[#543d98] text-[22px] font-bold [font-family:'DM_Sans',Helvetica]">
                    300%
                  </p>
                  <p className="text-[12px] text-[#7B7B8A]">
                    Massive jump in audience interaction
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <img
                  src="/electromech-results-graph.png"
                  alt="Growth chart visual for ElectroMech"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* ============== 2. THE CHALLENGE & MARKET REALITY ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Challenge */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[24px] md:text-[28px]">
                The Challenge
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed">
                ElectroMech’s digital presence hadn’t kept pace with its market
                leadership. A single domain was stretched to serve multiple
                countries and three verticals-ElectroMech, YALE, and Cranedge-
                resulting in diluted relevance and weak organic performance.
              </p>

              <ul className="space-y-2 text-[14px] md:text-[15px] text-[#4B4B5C] [font-family:'DM_Sans',Helvetica]">
                <li>
                  <span className="font-semibold">Complex Website Structure:</span>{" "}
                  one domain, multiple countries, three business lines.
                </li>
                <li>
                  <span className="font-semibold">Technical Issues:</span> poor
                  indexing, low visibility, and spam backlinks hurting authority.
                </li>
                <li>
                  <span className="font-semibold">Social Media Gaps:</span>{" "}
                  inconsistent brand presence and low engagement.
                </li>
              </ul>
            </div>

            {/* Market Reality */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[24px] md:text-[28px]">
                Market Reality
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed">
                The cranes and material-handling space is crowded with new
                entrants and global players, making it harder than ever to earn
                trust and stay visible.
              </p>

              <ul className="space-y-2 text-[14px] md:text-[15px] text-[#4B4B5C] [font-family:'DM_Sans',Helvetica]">
                <li>
                  <span className="font-semibold">Crowded marketplace:</span>{" "}
                  constant influx of new brands vying for attention.
                </li>
                <li>
                  <span className="font-semibold">
                    Trust & credibility pressure:
                  </span>{" "}
                  strong brand awareness and organic visibility are now
                  non-negotiable.
                </li>
                <li>
                  <span className="font-semibold">Fragmented global presence:</span>{" "}
                  digital infrastructure made cohesive worldwide reach difficult.
                </li>
              </ul>
            </div>
          </div>

          {/* ============== 3. STRATEGIC APPROACH ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Our Strategic Approach
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-5">
                We rebuilt the foundation first-then scaled performance. From
                audits and restructuring to SEO and performance marketing, every
                step was designed to serve both global and regional goals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    label: "01. Technical Audit & Research",
                    copy: "Deep dive into industry, products, competition, and search behaviour.",
                  },
                  {
                    label: "02. Website Restructuring",
                    copy: "Created a clear, country- and vertical-specific architecture.",
                  },
                  {
                    label: "03. Content Enhancement",
                    copy: "Sharper, uniform content across website and social channels.",
                  },
                  {
                    label: "04–05. SEO & Performance",
                    copy: "Keyword gap analysis plus brand-led campaigns across digital platforms.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-[#F6F6FB] rounded-2xl px-4 py-3 h-full"
                  >
                    <p className="text-[13px] font-semibold text-[#543d98] mb-1 [font-family:'DM_Sans',Helvetica]">
                      {item.label}
                    </p>
                    <p className="text-[13px] text-[#4B4B5C] [font-family:'DM_Sans',Helvetica]">
                      {item.copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <img
                  src="/electromech-strategy-dashboard.png"
                  alt="Strategy and analytics dashboard visual"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* ============== 4. WEBSITE TRANSFORMATION ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <img
                  src="/electromech-website-revamp.png"
                  alt="ElectroMech website revamp visual"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Website Transformation
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-5">
                The website became the core sales asset-revamped to be faster,
                clearer, and more aligned with how global buyers actually search
                and evaluate solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[13px] font-semibold text-[#543d98] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Website Revamp
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    UX and content structured with SEO-first thinking.
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[13px] font-semibold text-[#543d98] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Multi-Country Structure
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Seamless navigation for regions and verticals.
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[13px] font-semibold text-[#543d98] mb-1 [font-family:'DM_Sans',Helvetica]">
                    SEO Optimisation
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Stronger visibility and more relevant organic traffic.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ============== 5. SOCIAL MEDIA REVOLUTION ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Before */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[24px] md:text-[28px] mb-2">
                Social Media Revolution
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-4">
                A scattered, low-energy presence was transformed into a unified,
                on-brand ecosystem that educated, engaged, and converted.
              </p>

              <div className="bg-[#FFF5F5] rounded-2xl px-4 py-4 mb-4">
                <p className="text-[13px] font-semibold text-[#C05621] mb-2 [font-family:'DM_Sans',Helvetica]">
                  Before
                </p>
                <ul className="list-disc list-inside text-[13px] text-[#4B4B5C] space-y-1">
                  <li>Inconsistent branding</li>
                  <li>Low follower count</li>
                  <li>Minimal engagement</li>
                  <li>Scattered messaging</li>
                </ul>
              </div>

              <div className="bg-[#F0FFF4] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#276749] mb-2 [font-family:'DM_Sans',Helvetica]">
                  After
                </p>
                <ul className="list-disc list-inside text-[13px] text-[#4B4B5C] space-y-1">
                  <li>Unified, recognizable brand presence</li>
                  <li>Thriving, relevant community</li>
                  <li>300% engagement growth</li>
                  <li>Tailor-made campaigns for each audience</li>
                </ul>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <img
                  src="/electromech-social-feed.png"
                  alt="ElectroMech social media feed mockup"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* ============== 6. IMPACT ON BUSINESS GROWTH ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <img
                  src="/electromech-celebration-team.png"
                  alt="Team celebrating business growth"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Impact on Business Growth
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-5">
                Beyond metrics, ElectroMech gained a scalable, future-ready
                digital foundation that supports sales, branding, and global
                expansion.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[13px] font-semibold text-[#543d98] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Higher ROI
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Improved returns on digital investments across channels.
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[13px] font-semibold text-[#543d98] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Quality Leads
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    20× verified, high-intent leads from targeted traffic.
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[13px] font-semibold text-[#543d98] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Brand Authority
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    First-page rankings doubled, strengthening category leadership.
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[13px] font-semibold text-[#543d98] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Business Goals
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Digital helped efficiently conquer key growth objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /space-y wrapper */}
      </div>
    </section>
  );
};
