import { useEffect, useRef, useState } from "react";

export const BrandVisionSection = (): JSX.Element => {
  const overlayText =
    "We scale your growth with a strategic enterprise SEO service across markets and millions of pages.";

  // ================== COUNTERS ==================
  const [counters, setCounters] = useState({
    first: 0,
    second: 0,
    third: 0,
  });

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);
  const rafId = useRef<number | null>(null);

  const animateCounter = (
    target: number,
    duration: number,
    onTick: (value: number) => void,
    options?: { decimals?: number }
  ) =>
    new Promise<void>((resolve) => {
      const start = performance.now();
      const decimals = options?.decimals ?? 0;

      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - t, 3);

        let current = target * ease;

        if (decimals === 0) current = Math.floor(current);

        if (decimals > 0) {
          const factor = Math.pow(10, decimals);
          current = Math.round(current * factor) / factor;
        }

        onTick(current);

        if (t < 1) {
          rafId.current = requestAnimationFrame(tick);
        } else {
          onTick(target);
          resolve();
        }
      };

      rafId.current = requestAnimationFrame(tick);
    });

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          await animateCounter(95, 1200, (v) =>
            setCounters((c) => ({ ...c, first: v }))
          );

          await new Promise((r) => setTimeout(r, 100));

          await animateCounter(80, 1000, (v) =>
            setCounters((c) => ({ ...c, second: v }))
          );

          await new Promise((r) => setTimeout(r, 100));

          await animateCounter(
            3.5,
            900,
            (v) => setCounters((c) => ({ ...c, third: v })),
            { decimals: 1 }
          );
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section
      className="w-full bg-white lg:py-5 sm:py-8"
      id="sec-border"
      data-section="brand-vision"
      ref={sectionRef}
    >
      <div className="max-w-[1280px] mx-auto px-2 lg:px-5 sm:py-10">
        {/* Title */}
        <div className="mb-6 lg:mb-8 pt-10">
          <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px] ">
<<<<<<< HEAD
            SEO That Keeps
=======
          Enterprise SEO Service That Keeps
>>>>>>> e3a529919e97fb1effbdfcc7bc1a27af3cdc9680
          </h2>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight ">
            Up With the Scale of Your Business
          </h2>
        </div>

        {/* Image + Overlay + Counters */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start mb-6">
          {/* IMAGE */}
          <div className="lg:col-span-5 lg:w-[600px]">
            <div className="relative rounded-2xl overflow-hidden shadow-lg ">
              <img
                src="/enterprise About service - 451 x 500.jpg"
                alt="SEO workspace"
                className="w-full sm:h-[400px] lg:h-[700px] object-cover"
              />
            </div>
          </div>

          {/* MOBILE OVERLAY TEXT */}
          <div
            className="block lg:hidden -mt-8 px-2 mt-0"
            style={{ marginTop: "-18%", zIndex: "999" }}
          >
            <div className="bg-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium text-[20px] leading-[20px] text-left p-7">
                {overlayText}
              </p>
            </div>
          </div>

          {/* STATS */}
          <div className="lg:mt-[35%] lg:ml-[25%] mt-4 ml-[3%] mr-[3%] lg:col-span-7">
            <div className="relative h-[450px] lg:h-[400px] lg:w-[520px] sm:h-[500px]">
              {/* 95% */}
              <div className="absolute top-6 left-0 text-center">
                <h3 className="[font-family:'Space Grotesk', sans-serif] text-[#543d98] text-4xl lg:text-6xl font-black leading-none mb-2">
                  {Math.round(counters.first)}%
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[16px] leading-relaxed max-w-[250px] font-[400]">
                    growth in lead generation or conversion through search engine optimization efforts.
                  </p>
                </h3>
              </div>

              {/* 80% */}
              <div className="absolute top-1/2 -translate-y-1/2 right-0 text-center">
                <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] text-4xl lg:text-6xl font-black leading-none mb-2">
                  {Math.round(counters.second)}%
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[16px] leading-relaxed max-w-[250px] font-[400]">
                    global brands enhanced their online visibility with our custom SEO strategies.
                  </p>
                </h3>
              </div>

              {/* 3.5X */}
              <div className="absolute bottom-6 left-0 text-center">
                <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] text-4xl lg:text-6xl font-black leading-none mb-2">
                  {counters.third.toFixed(1)}X
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[16px] leading-relaxed max-w-[250px] font-[400]">
                    clients achieved top 1st page search rankings for their target keywords.
                  </p>
                </h3>
              </div>
            </div>
          </div>

          {/* DESKTOP OVERLAY */}
          <div className="pointer-events-none absolute top-8 left-1/2 -translate-x-1/2 w-full max-w-[700px] px-4 hidden lg:block">
            <div className="pointer-events-auto bg-white rounded-2xl p-5 lg:p-6">
              <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[35px] lg:leading-[42px]">
                {overlayText}
              </p>
            </div>
          </div>
        </div>

        {/* Body copy */}
        <div className="text-left mb-12">
<<<<<<< HEAD
          <p className="[font-family:'DM_Sans',Helvetica] text-[12px] lg:text-[24px] text-[#030019]">
            Large websites require large-scale thinking, and that is where we excel. We simplify complex SEO ecosystems with automation, advanced tools, and enterprise-grade strategy. From managing thousands of URLs to optimizing multilingual and multi-region content, Impulse ensures every page performs efficiently. We help large organizations achieve consistency across departments, devices, and geographies. Our approach unites marketing, technical, and content teams toward shared growth goals. Through continuous tracking and adaptive optimization, we ensure long-term performance, not temporary results. At Impulse, scale is not a challenge, it is where we thrive.
          </p>
=======
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[12px] lg:text-[24px] text-[#030019]">
           Large websites require large-scale thinking, and that is where we excel as a trusted enterprise SEO company in India. We simplify complex SEO ecosystems with automation, advanced tools, and a strategic enterprise SEO service approach designed for scale. From managing thousands of URLs to optimizing multilingual and multi-region content, Impulse ensures every page performs efficiently. We help large organizations achieve consistency across departments, devices, and geographies. Our approach unites marketing, technical, and content teams toward shared growth goals. Through continuous tracking and adaptive optimization, we ensure long-term performance, not temporary results. At Impulse, scale is not a challenge, it is where we thrive.</p>
>>>>>>> e3a529919e97fb1effbdfcc7bc1a27af3cdc9680
        </div>
      </div>
    </section>
  );
};