import React from "react";

export const WhyChooseSection = (): JSX.Element => {
  const points = [
    {
      title: "Creative Storytelling with Strategic Depth",
      description:
        "Every video is designed with purpose - tailored to your brand message, audience, and business objectives.",
      img: "/Production Expertise.jpg",
    },
    {
      title: "End-to-End Production Expertise",
      description:
        "From scripting to shooting, editing, animations, sound, and final delivery - we manage the entire workflow seamlessly.",
      img: "/Creative Storytelling.jpg",
    },
    {
      title: "Cinematic Quality, No Compromise",
      description:
        "We use high-grade equipment, studio setups, and industry-standard post-production workflows to ensure exceptional output.",
      img: "/Cinematic Quality.jpg",
    },
  ];

  return (
    <section
      className="w-full bg-[#F6F6FB] py-16 lg:py-20"
      id="why-sec-border"
      data-section="why-choose"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 lg:mb-8 pt-0">
          <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">
            Why Brands
          </h2>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight">
             Trust Us With Their Videos
          </h2>
        </div>

        {/* ===== MOBILE ===== */}
        <div className="block lg:hidden space-y-10">
          {points.map((item, index) => (
            <div key={index}>
              <div className="relative overflow-hidden rounded-[24px] shadow-lg mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
                {item.title}
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ===== DESKTOP ===== */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-8 lg:mb-10 items-start">
            {/* Left Column */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="relative overflow-hidden rounded-[24px] shadow-lg mb-4">
                <img
                  src={points[0].img}
                  alt={points[0].title}
                  className="w-full h-[630px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2 pt-16">
                {points[0].title}
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed mb-0">
                {points[0].description}
              </p>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="pr-2 mb-8 mt-12 pb-16">
                <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2">
                  {points[1].title}
                </h3>
                <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed max-w-[620px]">
                  {points[1].description}
                </p>
              </div>

              <div className="relative overflow-hidden rounded-[24px] shadow-lg">
                <img
                  src={points[1].img}
                  alt={points[1].title}
                  className="w-full h-[630px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Full-width third point */}
          <div>
            <div className="relative overflow-hidden rounded-[28px] shadow-lg">
              <img
                src={points[2].img}
                alt={points[2].title}
                className="w-full h-[510px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            <div className="mt-6 max-w-12xl">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2">
                {points[2].title}
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
                {points[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
