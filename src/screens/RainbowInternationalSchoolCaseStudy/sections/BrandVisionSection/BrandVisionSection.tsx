// BrandVisionSection.tsx
import React, { useState } from "react";

export const BrandVisionSection = (): JSX.Element => {
  // ✅ Replace these with your actual images (keep them in /public)
  const heroImg = "/SEO Success Story cover.png";
  const challengeImg = "/Visibility challenge visual.png";
  const strategyImg = "/SEO strategy visual.png";
  const keywordsImg = "/Keyword research and intent mapping visual.png";
  const resultsImg = "/Results after first month optimisation.png";

  // ✅ Slider images (your own)
  const sliderImages = [
    "/best cbse school in thane west.jpg",
    "/best international schools in thane.jpg",
    "/best preschool in thane west.jpg",
    "/best preschool in thane.jpg",
    "/cbse schools in thane west.jpg",
    "/cbse schools in thane.jpg",
    "/international schools in thane.jpg",
    "/kindergarten in thane.jpg",
    "/nursery school.jpg",
    "/playgroups in thane west.jpg",
     "/playgroups in thane.jpg",
      "/playschools in thane.jpg",
       "/preschool in thane.jpg",
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const prev = () =>
    setActiveSlide((p) => (p - 1 + sliderImages.length) % sliderImages.length);
  const next = () => setActiveSlide((p) => (p + 1) % sliderImages.length);

  return (
    <section className="w-full bg-white lg:py-16 sm:py-10"
    id="sec-border">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="mb-12 lg:mb-14 pt-10">
          {/* <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">
            SEO Success Story
          </h2> */}
          <h1 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[28px] leading-tight">
            Rainbow International School
          </h1>
          <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] lg:text-[17px] leading-relaxed max-w-[780px] mt-4">
            How Impulse Digital drove 55% SEO keywords to Google’s first page
            after the first month of SEO optimisation.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {/* ================= 1) HERO + RESULT ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <img
                  src={heroImg}
                  alt="SEO Success Story cover"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
                <div className="absolute left-4 bottom-4 bg-white/90 backdrop-blur rounded-2xl px-4 py-3 shadow">
                  <p className="text-[12px] text-[#7B7B8A] [font-family:'DM_Sans',Helvetica]">
                    Result
                  </p>
                  <p className="text-[#543d98] text-[22px] font-bold [font-family:'DM_Sans',Helvetica]">
                    55% keywords on Page 1
                  </p>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Overview
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed">
                A focused SEO program to improve visibility for high-intent
                admission searches and drive stronger enquiry volume through
                organic discovery.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Goal
                  </p>
                  <p className="text-[#030019] text-[14px] font-medium [font-family:'DM_Sans',Helvetica]">
                    Win admission searches
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Focus
                  </p>
                  <p className="text-[#030019] text-[14px] font-medium [font-family:'DM_Sans',Helvetica]">
                    Local + intent keywords
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Outcome
                  </p>
                  <p className="text-[#030019] text-[14px] font-medium [font-family:'DM_Sans',Helvetica]">
                    Page 1 visibility
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= 2) CHALLENGE (with imagery) ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Copy */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                The Challenge
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-5">
                Despite strong academic credentials, Rainbow had low online
                visibility for admission searches. Parents researching schools
                couldn’t find them at the right moment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Rankings
                  </p>
                  <p className="text-[#543d98] text-[20px] font-bold [font-family:'DM_Sans',Helvetica]">
                    Zero Page 1
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Traffic
                  </p>
                  <p className="text-[#543d98] text-[20px] font-bold [font-family:'DM_Sans',Helvetica]">
                    Limited Organic
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Impact
                  </p>
                  <p className="text-[#543d98] text-[20px] font-bold [font-family:'DM_Sans',Helvetica]">
                    Lost Enquiries
                  </p>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <img
                  src={challengeImg}
                  alt="Visibility challenge visual"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* ================= 3) STRATEGY (with imagery) ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <img
                  src={strategyImg}
                  alt="SEO strategy visual"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Our SEO Strategy
              </h3>

              <div className="bg-[#F6F6FB] rounded-[28px] p-6">
                <ul className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed space-y-3">
                  <li>
                    <span className="font-semibold text-[#030019]">
                      Purchase & admission intent keywords:
                    </span>{" "}
                    high-conversion search terms used during school selection.
                  </li>
                  <li>
                    <span className="font-semibold text-[#030019]">
                      On-page optimisation:
                    </span>{" "}
                    content updates, meta tags, keyword placement across key
                    pages.
                  </li>
                  <li>
                    <span className="font-semibold text-[#030019]">
                      Off-page authority building:
                    </span>{" "}
                    quality backlinks from education directories and local
                    citations.
                  </li>
                  <li>
                    <span className="font-semibold text-[#030019]">
                      Strategic blog publishing:
                    </span>{" "}
                    content addressing admission questions and school
                    highlights.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ================= 4) KEYWORDS (with imagery) ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Copy */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Keyword Research & Intent Mapping
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-5">
                We analysed parent search behaviour and prioritised keywords with
                the highest conversion potential and local relevance.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "nursery school",
                  "international school in thane",
                  "cbsc school in thane",
                  "schools in thane",
                  "international preschool",
                ].map((k) => (
                  <span
                    key={k}
                    className="bg-[#F6F6FB] border border-[#E7E7F2] rounded-full px-4 py-2 text-[13px] text-[#4B4B5C] [font-family:'DM_Sans',Helvetica]"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <img
                  src={keywordsImg}
                  alt="Keyword research and intent mapping visual"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* ================= 5) RESULTS (with imagery) ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <img
                  src={resultsImg}
                  alt="Results after first month optimisation"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Results After First Month
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-6">
                55% of targeted keywords achieved first-page rankings, driving a
                significant increase in organic traffic, admission enquiries,
                and website engagement.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Achievement
                  </p>
                  <p className="text-[#543d98] text-[20px] font-bold [font-family:'DM_Sans',Helvetica]">
                    55%
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Ranking
                  </p>
                  <p className="text-[#543d98] text-[20px] font-bold [font-family:'DM_Sans',Helvetica]">
                    Page 1
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Impact
                  </p>
                  <p className="text-[#543d98] text-[20px] font-bold [font-family:'DM_Sans',Helvetica]">
                    Enquiries ↑
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= 6) SLIDER ================= */}
          <div className="space-y-5">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[24px] md:text-[28px]">
                  Real SEO Wins
                </h3>
              </div>

              <div className="hidden sm:flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="px-4 py-2 rounded-full bg-[#F6F6FB] border border-[#E7E7F2] text-[#030019] text-[14px] [font-family:'DM_Sans',Helvetica] hover:shadow"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="px-4 py-2 rounded-full bg-[#543d98] text-white text-[14px] [font-family:'DM_Sans',Helvetica] hover:shadow"
                >
                  Next
                </button>
              </div>
            </div>

            <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
              <div className="relative w-full">
                <img
                  src={sliderImages[activeSlide]}
                  alt={`Gallery image ${activeSlide + 1}`}
                  className="w-full h-[260px] md:h-[360px] lg:h-[420px] object-contain"
                  loading="lazy"
                />

                {/* Mobile controls */}
                <div className="sm:hidden absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    className="px-4 py-2 rounded-full bg-white/90 backdrop-blur border border-[#E7E7F2] text-[#030019] text-[14px] [font-family:'DM_Sans',Helvetica]"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="px-4 py-2 rounded-full bg-[#543d98]/95 backdrop-blur text-white text-[14px] [font-family:'DM_Sans',Helvetica]"
                  >
                    Next
                  </button>
                </div>

                {/* Dots */}
                <div className="absolute inset-x-0 bottom-4 hidden sm:flex items-center justify-center gap-2">
                  {sliderImages.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={[
                        "h-2.5 rounded-full transition-all",
                        idx === activeSlide ? "w-8 bg-white" : "w-2.5 bg-white/60",
                      ].join(" ")}
                    />
                  ))}
                </div>
              </div>
            </div>

            <br></br><br></br>
          </div>
        </div>
      </div>
    </section>
  );
};
