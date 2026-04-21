import { useEffect, useRef, useState } from "react";

export const BrandVisionSection = (): JSX.Element => {
  const overlayText =
    "Smarter, faster & scalable video creation powered by AI video production services.";

  // ================== COUNTERS ==================
  const [counters, setCounters] = useState({
    first: 0, // 70%
    second: 0, // 4X
    third: 0, // 90%
  });

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);
  const rafId = useRef<number | null>(null);

  const animateCounter = (
    target: number,
    duration: number,
    onTick: (value: number) => void,
    decimals?: number
  ) =>
    new Promise<void>((resolve) => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        let current = target * ease;
        current = decimals ? Number(current.toFixed(decimals)) : Math.floor(current);
        onTick(current);
        if (t < 1) rafId.current = requestAnimationFrame(tick);
        else {
          onTick(target);
          resolve();
        }
      };
      rafId.current = requestAnimationFrame(tick);
    });

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          await animateCounter(70, 1000, (v) =>
            setCounters((c) => ({ ...c, first: v }))
          );
          await animateCounter(4, 900, (v) =>
            setCounters((c) => ({ ...c, second: v }))
          );
          await animateCounter(90, 900, (v) =>
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
        {/* Title */}
       <div className="mb-6 lg:mb-8 pt-10">
  <h2 className="[font-family:'DM_Sans',Helvetica] leading-tight">
    <span className="text-[#030019] font-medium lg:text-[34px] sm:text-[16px] block">
      Create More Videos. In Less Time. <br></br>
    </span>
    <span className="text-[#543d98] font-bold lg:text-[52px] sm:text-[26px] block">
    With AI Video Production Agency.
    </span>
  </h2>
</div>

        {/* Image + Counters */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start mb-6">
          {/* IMAGE */}
          <div className="lg:col-span-5 lg:w-[600px]">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/AI Video Production.jpg"
                alt="AI Video Production"
                className="w-full sm:h-[400px] lg:h-[700px] object-cover"
              />
            </div>
          </div>

          {/* MOBILE OVERLAY */}
          <div
            className="block lg:hidden -mt-8 px-2 mt-0"
            style={{ marginTop: "-18%", zIndex: "999" }}
          >
            <div className="bg-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <p className="text-[#030019] font-medium text-[20px] leading-[20px] text-left p-7">
                {overlayText}
              </p>
            </div>
          </div>

          {/* STATS */}
          <div className="lg:mt-[35%] lg:ml-[25%] mt-4 ml-[3%] mr-[3%] lg:col-span-7">
            <div className="relative h-[450px] lg:h-[400px] lg:w-[520px] sm:h-[500px]">
              {/* 70% */}
              <div className="absolute top-6 left-0 text-center">
                <h3 className="text-[#543d98] text-4xl lg:text-6xl font-black leading-none mb-2">
                  {Math.round(counters.first)}%
                  <p className="text-[#030019] text-[16px] leading-relaxed max-w-[250px] font-[400]">
                    Lower production cost than traditional shoots.
                  </p>
                </h3>
              </div>

              {/* 4X */}
              <div className="absolute top-1/2 -translate-y-1/2 right-0 text-center mb-8">
                <h3 className="text-[#543d98] text-4xl lg:text-6xl font-black leading-none mb-2">
                  {counters.second}X
                  <p className="text-[#030019] text-[16px] leading-relaxed max-w-[250px] font-[400]">
                    Faster content scalability using AI automation.
                  </p>
                </h3>
              </div>

              {/* 90% */}
              <div className="absolute bottom-6 left-0 text-center">
                <h3 className="text-[#543d98] text-4xl lg:text-6xl font-black leading-none mb-2">
                  {Math.round(counters.third)}%
                  <p className="text-[#030019] text-[16px] leading-relaxed max-w-[250px] font-[400]">
                    Reduction in reshoots & retakes due to AI precision.
                  </p>
                </h3>
              </div>
            </div>
          </div>

          {/* DESKTOP OVERLAY */}
          <div className="pointer-events-none absolute top-8 left-1/2 -translate-x-1/2 w-full max-w-[700px] px-4 hidden lg:block">
            <div className="pointer-events-auto bg-white rounded-2xl p-5 lg:p-6">
              <p className="text-[#030019] text-[35px] lg:text-[34px] lg:leading-[42px] text-left">
                {overlayText}
              </p>
            </div>
          </div>
        </div>

        {/* Body Copy */}
        <div className="text-left mb-12">
          <p className="text-[12px] lg:text-[24px] text-[#030019]">
            The future of video is intelligent, and at Impulse Digital, our advanced AI video production services help brands create high-quality content faster and at scale. As a strategic AI video production agency, we combine AI-driven tools, avatars, scripts, voiceovers, and automated editing with creative storytelling to deliver consistent, multilingual video experiences without the traditional limitations of shoots. AI eliminates location constraints, accelerates production timelines, and enables rapid content adaptation for global audiences. For brands that need frequent campaigns, faster turnarounds, or scalable communication across markets, AI-powered video becomes a strong competitive advantage. With Impulse Digital, you get technology + creative direction + storytelling in one unified production ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};
