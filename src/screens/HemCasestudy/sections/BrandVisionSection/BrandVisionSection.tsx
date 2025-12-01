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
            SEO for HEM Incense
          </h2>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight">
            From Invisible to #1 on Google
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] lg:text-[17px] leading-relaxed max-w-[720px] mt-4">
            See how we helped HEM Corporation transform its digital presence
            with market-specific SEO, technical clean-up and website
            restructuring—driving 300% more first-page rankings and 5× growth in
            organic traffic across key markets.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {/* ============== 1. ABOUT HEM INCENSE ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                <img
                  src="/13_HEM.jpg"
                  alt="HEM Incense product visual"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-4">
                About HEM Incense
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[14px] font-semibold text-[#543d98] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Global Leader
                  </p>
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[14px] leading-relaxed">
                    HEM Corporation is one of the world’s leading incense
                    manufacturers, exporting to more than 70 countries and
                    serving millions of customers worldwide.
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[14px] font-semibold text-[#543d98] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Three Decades of Excellence
                  </p>
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[14px] leading-relaxed">
                    With 30+ years of experience and a reputation for quality
                    and reliability, HEM is a heritage brand ready for
                    next-gen digital growth.
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
                After restructuring the web presence and executing a focused SEO
                roadmap, HEM jumped to the first page for core keywords and
                unlocked sustained, qualified traffic.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    First-Page Rankings
                  </p>
                  <p className="text-[#543d98] text-[26px] font-bold [font-family:'DM_Sans',Helvetica]">
                    300%
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Dramatic lift in search visibility across high-intent
                    keywords.
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Organic Traffic Growth
                  </p>
                  <p className="text-[#543d98] text-[26px] font-bold [font-family:'DM_Sans',Helvetica]">
                    5×
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Exponential increase in relevant visitors and leads.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                <img
                  src="/hem-growht-seo.png"
                  alt="SEO growth graph for HEM Incense"
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
                The Challenge: Declining Digital Presence
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-5">
                Despite strong offline brand recall and rising demand for
                incense, HEM’s digital footprint was lagging. Technical issues
                and a one-size-fits-all site held back visibility and traffic.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                    Limited Market Reach
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    One site focused mainly on India, missing the USA and other
                    high-value regions.
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                    Technical Issues
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Complex structure, indexing problems and crawl inefficiency
                    affecting rankings.
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                    Link Quality Problems
                  </p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Weak authority and spammy backlinks hurting search
                    credibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                <img
                  src="/Marketer analysing declining traffic.png"
                  alt="Marketer analysing declining traffic"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* ============== 4. CORE PROBLEMS IDENTIFIED ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[24px] md:text-[28px] mb-3">
                Core Problems Identified
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed">
                A detailed audit revealed structural, geographic and tracking
                issues that were masking true performance and limiting organic
                growth.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Structural Complexity
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Poorly organised website architecture created navigation and
                  indexing challenges.
                </p>
              </div>
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Single Domain Limitation
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  One domain trying to serve all countries led to diluted
                  targeting and mixed signals.
                </p>
              </div>
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Traffic Decline
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Inaccurate and falling organic traffic numbers despite strong
                  brand awareness.
                </p>
              </div>
            </div>
          </div>

          {/* ============== 5. OUR STRATEGIC SEO APPROACH ============== */}
          <div className="space-y-6">
            <div className="max-w-[720px]">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Our Strategic SEO Approach
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed">
                We began by refining and optimising the HEM Incense ecosystem
                with deep research, market-specific sites and technical
                clean-up—built to scale across countries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Research &amp; Analysis
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Comprehensive competitor and market audit to understand demand
                  patterns, category search behaviour and localisation needs.
                </p>
              </div>
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Website Redesign
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Re-architected the India site and built a dedicated USA
                  website from scratch for sharper positioning.
                </p>
              </div>
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Multi-Country Websites
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Created separate country sites to enable targeted SEO
                  strategies tailored to each market.
                </p>
              </div>
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Technical SEO Optimisation
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Fixed crawl and indexing issues, cleaned up links, and
                  standardised content for consistency and relevance.
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
                The combined impact of technical clean-up, content refinement
                and market-specific websites was visible in both traffic and
                business metrics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  USA Website Success
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  300% increase in website traffic with first-page rankings
                  driving qualified leads and intent-rich visitors.
                </p>
              </div>
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  India Website Growth
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Steady, relevant traffic for a newer site translated into
                  healthy revenue outcomes.
                </p>
              </div>
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[13px] font-semibold text-[#543d98] mb-1">
                  Enhanced Visibility
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  HEM moved to the first page for key markets and high-volume
                  incense terms, securing a defensible search moat.
                </p>
              </div>
            </div>
          </div>

          {/* ============== 7. SEO SUCCESS STORY CLOSE ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                <img
                  src="/hem-success-story.png"
                  alt="SEO success visual with growth arrow"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                SEO Success Story
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed">
                Through strategic SEO implementation, market-specific website
                development and technical optimisation, HEM Corporation
                re-engineered its digital presence. The result: 300% more
                first-page rankings and 5× growth in organic traffic—laying a
                strong foundation for continued global expansion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
