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
            Aditya Birla Group: Fours for Good
          </h2>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight">
            Turning Sporting Moments into Real Futures
          </h2>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {/* ============== 1) OVERVIEW ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[28px] overflow-hidden shadow-lg bg-[#20124d]">
                <img
                  src="/rahul-dravid.png"
                  alt=""
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Copy */}
            <div className="lg:col-span-6">
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed">
                Following the national introduction of Force for Good, Aditya
                Birla Group sought to deepen public participation by translating
                everyday moments of joy into meaningful social impact.
              </p>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mt-4">
                Cricket, with its unmatched emotional pull in India, offered the
                ideal platform. The objective of this campaign was to extend
                ABG’s purpose into a live sporting environment where impact could
                be created in real time and felt immediately.
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
                Launched during the Border Gavaskar Trophy, Fours for Good was a
                simple yet powerful idea rooted in action.
              </p>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mt-4">
                Every four scored on the field translated into a real-world
                outcome. A child receiving professional cricket training at the
                Rahul Dravid Academy.
              </p>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mt-4">
                By linking an in-game moment to a tangible future opportunity,
                the campaign turned spectator excitement into collective
                participation, reinforcing Force for Good as a purpose that
                moves with the nation.
              </p>
            </div>

            {/* Right: Visual */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <img
                  src="/05_Employer Branding.jpg"
                  alt=""
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
                  src="/After about us section 800 x 530 2.jpg"
                  alt=""
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
                Impulse Digital took end-to-end creative and technical ownership
                of the campaign, ensuring the idea translated seamlessly across
                platforms while remaining measurable and scalable.
              </p>

              <ul className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed space-y-2">
                <li>Led the creative and technical execution of the campaign</li>
                <li>
                  Designed and managed the microsite for registrations and
                  campaign tracking
                </li>
                <li>
                  Developed digital and television assets including banners,
                  L-bands, and short-format videos
                </li>
                <li>
                  Continuously optimised performance using engagement analytics
                  and real-time monitoring
                </li>
              </ul>

              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mt-4">
                Our role focused on precision execution while maintaining the
                integrity of the core idea.
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
                The campaign successfully converted live sporting moments into
                lasting opportunity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    200+ children received free professional cricket training
                  </p>
                </div>

                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    8.1 million+ audience impressions across digital platforms
                  </p>
                </div>

                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Strengthened ABG’s association with India’s most loved sport
                  </p>
                </div>

                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Reinforced the Force for Good purpose through visible,
                    measurable action
                  </p>
                </div>
              </div>

              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mt-6">
                Fours for Good demonstrated how purpose can be activated at scale
                without losing simplicity or authenticity. By embedding impact
                directly into a live sporting context, the campaign allowed
                audiences to feel part of the outcome, not just the message.
              </p>

              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mt-4">
                For Impulse Digital, this campaign reflects our strength in
                translating purpose-led ideas into structured, performance-driven
                executions that work across high-pressure, real-time
                environments.
              </p>
            </div>

            {/* Right: Visual */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#20124d]">
                <img
                  src="/rahul-dravid.png"
                  alt=""
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
