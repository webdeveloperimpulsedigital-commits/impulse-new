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
            Aditya Birla Group × Brut India
          </h2>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight">
            Ten Stories. One Purpose.
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] lg:text-[17px] leading-relaxed max-w-[760px] mt-4">
            Humanising corporate purpose through real change. As Force for Good
            evolved beyond launch moments and live activations, ABG set out to
            deepen its purpose narrative by bringing real people and real impact
            to the forefront.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {/* ============== 1. OVERVIEW + IMAGERY ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Imagery */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <div className="grid grid-cols-12 gap-2 p-2">
                  <div className="col-span-7 rounded-[22px] overflow-hidden bg-[#20124d]">
                    <img
                      src="/brut-logo.png"
                      alt="Force for Good hero frame"
                      className="w-full h-[280px] md:h-[340px] lg:h-[360px] object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-span-5 grid grid-rows-2 gap-2">
                    <div className="rounded-[22px] overflow-hidden bg-[#20124d]">
                      <img
                        src="/brut-1.png"
                        alt="Changemaker story frame"
                        className="w-full h-[136px] md:h-[166px] lg:h-[176px] object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="rounded-[22px] overflow-hidden bg-[#20124d]">
                      <img
                        src="/brut3.png"
                        alt="Community impact frame"
                        className="w-full h-[136px] md:h-[166px] lg:h-[176px] object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* <p className="[font-family:'DM_Sans',Helvetica] text-[#7B7B8A] text-[12px] mt-3">
                Imagery placeholders: replace with final Brut India frames, BTS
                stills, or social-first thumbnails.
              </p> */}
            </div>

            {/* Right: Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Purpose, made personal and lived
              </h3>

              <div className="space-y-4">
                <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed">
                  The objective was to move purpose from institution to
                  individual. To show how everyday actions across India embody
                  the idea of being a Force for Good, in a way that felt
                  authentic, contemporary, and culturally relevant.
                </p>

                <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed">
                  In partnership with Brut India, ABG spotlighted ten real-life
                  changemakers from across the country. Rather than focusing on
                  scale alone, the campaign focused on depth. Each story showed
                  how purpose lives not just in organisations, but in people.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Stories
                  </p>
                  <p className="text-[#543d98] text-[22px] font-bold [font-family:'DM_Sans',Helvetica]">
                    10
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Platform Partner
                  </p>
                  <p className="text-[#543d98] text-[22px] font-bold [font-family:'DM_Sans',Helvetica]">
                    Brut India
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Campaign Views
                  </p>
                  <p className="text-[#543d98] text-[22px] font-bold [font-family:'DM_Sans',Helvetica]">
                    27M+
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ============== 2. THE IDEA ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[24px] md:text-[28px] mb-3">
                The Idea
              </h3>

              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed">
                The result was a storytelling platform that connected ABG’s
                corporate philosophy with grassroots action, making Force for
                Good feel personal, relatable, and lived.
              </p>

              <div className="mt-6 bg-[#F6F6FB] rounded-[24px] p-5">
                <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-semibold mb-2">
                  What made it work
                </p>
                <ul className="space-y-2 text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed [font-family:'DM_Sans',Helvetica]">
                  <li>• Real people, real impact, across diverse communities</li>
                  <li>• Depth-first storytelling over “scale-only” narratives</li>
                  <li>
                    • A cohesive story universe that stayed contemporary and
                    culturally relevant
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#20124d]">
                <img
                  src="/brut-abg.jfif"
                  alt="Force for Good collage of changemakers"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* ============== 3. IMPULSE DIGITAL’S ROLE ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <img
                  src="/team-idea.jfif"
                  alt="Production and creative supervision"
                  className="w-full h-[240px] md:h-[300px] lg:h-[340px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Impulse Digital’s Role
              </h3>

              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-5">
                We played a strategic role in shaping the narrative and
                execution, ensuring the stories remained impactful, cohesive,
                and scalable across platforms.
              </p>

              <div className="bg-[#F6F6FB] rounded-[24px] p-5">
                <ul className="space-y-2 text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed [font-family:'DM_Sans',Helvetica]">
                  <li>
                    • Developed a prioritisation matrix to identify and shortlist
                    the most impactful stories
                  </li>
                  <li>
                    • Provided creative supervision and narrative structuring for
                    the hero films
                  </li>
                  <li>
                    • Designed short-format content optimised for cross-platform
                    amplification and engagement
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ============== 4. IMPACT ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 space-y-4">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[24px] md:text-[28px]">
                Impact
              </h3>

              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed">
                The campaign established a long-term digital storytelling
                property with significant reach and relevance, strengthening
                ABG’s social storytelling by connecting corporate purpose to
                real-world action.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Total Views
                  </p>
                  <p className="text-[#543d98] text-[20px] font-bold [font-family:'DM_Sans',Helvetica]">
                    27M+
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Digital IP
                  </p>
                  <p className="text-[#543d98] text-[20px] font-bold [font-family:'DM_Sans',Helvetica]">
                    Evergreen
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Storytelling Shift
                  </p>
                  <p className="text-[#543d98] text-[20px] font-bold [font-family:'DM_Sans',Helvetica]">
                    Participation
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#20124d]">
                <img
                  src="/impact-brut.png"
                  alt="Force for Good social content frames"
                  className="w-full h-[240px] md:h-[300px] lg:h-[340px] object-cover"
                  loading="lazy"
                />
              </div>

              <div className="mt-4 bg-[#F6F6FB] rounded-[24px] p-5">
                <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed">
                  This campaign marked a shift from purpose as proclamation to
                  purpose as participation. By amplifying real voices and lived
                  impact, Force for Good became a shared idea rather than a
                  top-down message.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /space-y wrapper */}
      </div>
    </section>
  );
};
