import { useEffect, useRef, useState } from "react";

export const BrandVisionSection = (): JSX.Element => {
  const overlayText =
    "We make paid ads feel less like spending and more like scaling.";

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

          await animateCounter(50, 1200, (v) =>
            setCounters((c) => ({ ...c, first: v }))
          );

          await new Promise((r) => setTimeout(r, 100));

          await animateCounter(7, 1000, (v) =>
            setCounters((c) => ({ ...c, second: v }))
          );

          await new Promise((r) => setTimeout(r, 100));

          await animateCounter(100, 900, (v) =>
            setCounters((c) => ({ ...c, third: v }))
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
        <div className="mb-6 lg:mb-8 pt-10">
          <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px] ">
             From Insights to Impact
          </h2>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight ">
PPC that works for your business!
          </h2>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start mb-6">
          <div className="lg:col-span-5 lg:w-[600px]">
            <div className="relative rounded-2xl overflow-hidden shadow-lg ">
              <img
                src="/About service - 451 x 500.jpg"
                alt="SEO workspace"
                className="w-full sm:h-[400px] lg:h-[700px] object-cover"
              />
            </div>
          </div>

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

          <div className="lg:mt-[35%] lg:ml-[25%] mt-4 ml-[3%] mr-[3%] lg:col-span-7">
            <div className="relative h-[450px] lg:h-[400px] lg:w-[520px] sm:h-[500px]">
              
              <div className="absolute top-6 left-0 text-center">
                <h3 className="[font-family:'Space Grotesk', sans-serif] text-[#543d98] text-4xl lg:text-6xl font-black leading-none mb-2 transition-all">
                  {Math.round(counters.first)}%
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[16px] leading-relaxed max-w-[250px] font-[400]">
                    reduction in cost-per-acquisition (CPA) for our PPC clients.
                  </p>
                </h3>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 right-0 text-center mb-8">
                <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] text-4xl lg:text-6xl font-black leading-none mb-2">
                  {Math.round(counters.second)}X
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[16px] leading-relaxed max-w-[250px] font-[400]">
                    average ROI for clients from Google Ads campaigns.
                  </p>
                </h3>
              </div>

              <div className="absolute bottom-6 left-0 text-center">
                <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] text-4xl lg:text-6xl font-black leading-none mb-2">
                  {Math.round(counters.third)} <span className="align-baseline text-2xl lg:text-4xl">Million+</span>
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[16px] leading-relaxed max-w-[250px] font-[400]">
                    reach to the right target audience for our clients.
                  </p>
                </h3>
              </div>

            </div>
          </div>

          <div className="pointer-events-none absolute top-8 left-1/2 -translate-x-1/2 w-full max-w-[700px] px-4 hidden lg:block">
            <div className="pointer-events-auto bg-white rounded-2xl p-5 lg:p-6">
              <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[35px] lg:text:[34px] sm:leading-[20px] lg:leading-[42px] text-left">
                {overlayText}
              </p>
            </div>
          </div>
        </div>

        <div className="text-left mb-12">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[12px] lg:text-[24px] text-[#030019]">
           Clicks are easy; conversions are earned. We build PPC campaigns that reaches the right audience with purpose and precision. We analyze, optimize, and refine every ad to ensure strong performance and return on investment. From Google Ads to Meta campaigns, we design data-led strategies that deliver. Every campaign is tracked, measured, and improved for continuous growth. Our focus is on real business impact, not empty metrics. With Impulse, your paid media becomes a growth engine that scales effortlessly.
          </p>
        </div>
      </div>

      <br /><br />

      <style>{`
        .mb-14{ marging-bottom: 40px; }
      `}</style>
    </section>
  );
};