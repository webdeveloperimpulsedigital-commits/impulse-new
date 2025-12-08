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
            Mastercard – Digital Outreach Success Story
          </h2>

          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight">
            Driving Merchant Adoption Through WhatsApp
          </h2>

          <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] lg:text-[17px] leading-relaxed max-w-[720px] mt-4">
            See how Mastercard unlocked merchant activation by using community influence, 
            cluster-head advocacy and direct WhatsApp engagement -achieving a 90.9% response rate 
            and driving meaningful product inquiries.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-20">

          {/* ============== 1. ABOUT MASTERCARD ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-6">
              <div className="relative rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                <img
                  src="/14_mastercard.jpg"
                  alt="Mastercard product dashboard"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-4">
                About Mastercard
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[14px] font-semibold text-[#543d98] mb-1">
                    Global Payment Leader
                  </p>
                  <p className="text-[14px] text-[#4B4B5C] leading-relaxed">
                    Second-largest payment processor worldwide.
                  </p>
                </div>

                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                  <p className="text-[14px] font-semibold text-[#543d98] mb-1">
                    Core Business
                  </p>
                  <p className="text-[14px] text-[#4B4B5C] leading-relaxed">
                    Facilitating debit, credit and prepaid transactions between 
                    merchant banks and card issuers. 
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ============== 2. THE CHALLENGE ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-5 order-2 lg:order-1">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                The Challenge
              </h3>

              <p className="text-[15px] md:text-[16px] text-[#4B4B5C] leading-relaxed">
                Mastercard needed to increase sales of payment processing devices through digital 
                channels -reaching merchants from grassroots to enterprise level.
              </p>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                <img
                  src="/Team reviewing performance dashboards in a meeting.png"
                  alt="Business team reviewing growth charts"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* ============== 3. STRATEGIC APPROACH ============== */}
          <div className="space-y-6">

            <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px]">
              Strategic Approach: A Four-Phase Process
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="font-semibold text-[#543d98] text-[14px] mb-2">01 -Objective Analysis</p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Reviewed brand goals and sales targets.
                </p>
              </div>

              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="font-semibold text-[#543d98] text-[14px] mb-2">02 -Audience Definition</p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Identified cluster heads as key merchant influencers.
                </p>
              </div>

              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="font-semibold text-[#543d98] text-[14px] mb-2">03 -Channel Selection</p>
                <p className="text-[13px] text-[#4B4B5C]">
                  WhatsApp chosen for its personal and trusted communication.
                </p>
              </div>

              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="font-semibold text-[#543d98] text-[14px] mb-2">04 -Content Creation</p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Custom video featuring real cluster-head testimonials.
                </p>
              </div>
            </div>
          </div>

          {/* ============== 4. COMMUNITY INSIGHT ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                <img
                  src="/Cluster heads meeting merchants.png"
                  alt="Cluster heads meeting merchants"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Key Insight: Community Leaders Drive Influence
              </h3>

              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#4B4B5C] mb-4">
                Instead of targeting individual merchants, Mastercard focused on cluster heads -
                trusted community influencers who shape purchase decisions.
              </p>

              <p className="text-[14px] text-[#4B4B5C]">
                Peer influence accelerates adoption better than traditional advertising, enabling 
                quick, high-trust conversions.
              </p>
            </div>
          </div>

          {/* ============== 5. EXECUTION VIA WHATSAPP ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-5 order-2 lg:order-1">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                WhatsApp as the Game-Changer
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-[14px] text-[#543d98]">Video Content</p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Authentic testimonials from cluster heads explaining product benefits.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[14px] text-[#543d98]">Direct Channel</p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Unique WhatsApp number enabled personalised conversations.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[14px] text-[#543d98]">Real-Time Response</p>
                  <p className="text-[13px] text-[#4B4B5C]">
                    Dedicated executive monitored and responded instantly, reducing friction.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#f3efff]">
                <img
                  src="/mastercard-whatsapp.png"
                  alt="WhatsApp merchant engagement interface"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* ============== 6. WHY THE STRATEGY WORKED ============== */}
          <div className="space-y-6 max-w-[900px]">
            <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px]">
              Why This Strategy Worked
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="font-semibold text-[#543d98] text-[14px] mb-1">
                  Trusted Messengers
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Cluster heads provided authenticity, credibility and trust.
                </p>
              </div>

              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="font-semibold text-[#543d98] text-[14px] mb-1">
                  Right Platform
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  WhatsApp ensured seamless communication merchants already use.
                </p>
              </div>

              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="font-semibold text-[#543d98] text-[14px] mb-1">
                  Immediate Access
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  24/7 monitoring reduced drop-off and improved conversion.
                </p>
              </div>

              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="font-semibold text-[#543d98] text-[14px] mb-1">
                  Clear Messaging
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Video testimonials conveyed benefits quickly and persuasively.
                </p>
              </div>
            </div>
          </div>

          {/* ============== 7. RESULTS ============== */}
          <div className="space-y-6 max-w-[900px]">
            <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px]">
              Impressive Results Achieved
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[12px] text-[#7B7B8A] mb-1">Queries Received</p>
                <p className="text-[#543d98] text-[26px] font-bold">101</p>
                <p className="text-[13px] text-[#4B4B5C]">Strong merchant interest generated.</p>
              </div>

              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[12px] text-[#7B7B8A] mb-1">Response Rate</p>
                <p className="text-[#543d98] text-[26px] font-bold">90.9%</p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Exceptional engagement and high-intent queries.
                </p>
              </div>

              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="text-[12px] text-[#7B7B8A] mb-1">24/7 Monitoring</p>
                <p className="text-[#543d98] text-[26px] font-bold">Continuous</p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Real-time query management across merchants.
                </p>
              </div>
            </div>
          </div>

          {/* ============== 8. KEY TAKEAWAYS ============== */}
          <div className="space-y-6 max-w-[900px]">
            <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px]">
              Key Takeaways
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="font-semibold text-[#543d98] text-[14px] mb-1">
                  Community Influence Drives Conversion
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Leveraging community leaders amplifies trust and reach.
                </p>
              </div>

              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="font-semibold text-[#543d98] text-[14px] mb-1">
                  WhatsApp Enables Personal Connection at Scale
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Familiar platform + real-time responses = higher engagement.
                </p>
              </div>

              <div className="bg-[#F6F6FB] rounded-2xl px-4 py-4">
                <p className="font-semibold text-[#543d98] text-[14px] mb-1">
                  Video Content Resonates Strongly
                </p>
                <p className="text-[13px] text-[#4B4B5C]">
                  Authentic testimonials outperform traditional marketing.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
