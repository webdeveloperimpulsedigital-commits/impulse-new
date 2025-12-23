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
            Aditya Birla Group: A Force for Good
          </h2>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight">
            Transforming Corporate Purpose into a National Movement
          </h2>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {/* ============== 1) OVERVIEW ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[28px] overflow-hidden shadow-lg bg-[#20124d]">
                <img
                  src="/ffg-main.jpg"
                  alt="Campaign visual"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Copy */}
            <div className="lg:col-span-6">
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed">
                Aditya Birla Group undertook a meaningful shift in its corporate
                brand narrative, moving from “Big in Your Life” to “A Force for
                Good.” This was not just a positioning update. It was the
                articulation of a larger purpose to enrich lives, inspire trust,
                and create measurable positive change.
              </p>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mt-4">
                The objective of this campaign was to introduce Force for Good
                to the nation with credibility and scale, in a way that felt
                human, participative, and rooted in impact.
              </p>
            </div>
          </div>

          {/* ============== 2) THE IDEA ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                The Idea
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed">
                To launch a purpose-led narrative at national scale, ABG
                partnered with Kaun Banega Crorepati, one of India’s most
                trusted and widely watched platforms.
              </p>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mt-4">
                In a high-impact integration, every question asked on the show
                symbolised the education of a child sponsored by Aditya Birla
                Group. This connection made the campaign tangible and
                emotionally resonant, turning purpose into a real-world outcome
                rather than a slogan.
              </p>
            </div>

            {/* Right: Visual */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <img
                  src="/heroes-banner.jpg"
                  alt="National platform visual"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* ============== 3) IMPULSE DIGITAL’S ROLE ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <img
                  src="/aston.png"
                  alt="Execution and coordination visual"
                  className="w-full h-[240px] md:h-[300px] lg:h-[340px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Impulse Digital’s Role
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-4">
                Impulse Digital supported the campaign by strengthening the
                creative and executional ecosystem across digital and broadcast
                touchpoints, ensuring the narrative translated seamlessly across
                platforms while staying consistent and clear.
              </p>

              <ul className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed space-y-2">
                <li>
                  Supported the campaign with digital and television-ready
                  creative assets
                </li>
                <li>
                  Designed cohesive visual communication bridging television,
                  social media, and corporate channels
                </li>
                <li>
                  Enabled real-time coordination across stakeholders to ensure a
                  smooth rollout
                </li>
              </ul>

              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mt-4">
                Our focus was precision and consistency at scale.
              </p>
            </div>
          </div>

          {/* ============== 4) IMPACT ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Impact
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-5">
                The campaign delivered strong national visibility while
                reinforcing ABG’s purpose-led identity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    TV Reach
                  </p>
                  <p className="text-[#543d98] text-[22px] font-bold [font-family:'DM_Sans',Helvetica]">
                    4.3 Mn+
                  </p>
                </div>

                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Digital Reach
                  </p>
                  <p className="text-[#543d98] text-[22px] font-bold [font-family:'DM_Sans',Helvetica]">
                    1 Mn+
                  </p>
                </div>

                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Brand Recall
                  </p>
                  <p className="text-[#543d98] text-[18px] font-bold [font-family:'DM_Sans',Helvetica]">
                    Enhanced through purpose-linked storytelling
                  </p>
                </div>

                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Perception Shift
                  </p>
                  <p className="text-[#543d98] text-[18px] font-bold [font-family:'DM_Sans',Helvetica]">
                    From corporate conglomerate to purposeful enabler
                  </p>
                </div>
              </div>

              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mt-6">
                This campaign was not built for volume alone. It was built for
                credibility. By anchoring Force for Good within a trusted
                cultural platform, ABG introduced its purpose in a way that felt
                authentic, accessible, and outcome-led.
              </p>

              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mt-4">
                For Impulse Digital, this work reflects our ability to support
                high-stakes corporate narratives where scale, sensitivity, and
                storytelling must coexist.
              </p>
            </div>

            {/* Right: Visual */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#20124d]">
                <img
                  src="/impact-forse.jpg"
                  alt="Impact visual"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        {/* /space-y wrapper */}
      </div>
    </section>
  );
};
