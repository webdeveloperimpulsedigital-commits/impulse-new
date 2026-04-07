import { useEffect, useRef, useState } from "react";

export const BrandVisionSection = (): JSX.Element => {
  const overlayText =
    "We help you show why working with you feels worth it.";

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

          await animateCounter(85, 1200, (v) =>
            setCounters((c) => ({ ...c, first: v }))
          );

          await new Promise((r) => setTimeout(r, 100));

          await animateCounter(70, 1000, (v) =>
            setCounters((c) => ({ ...c, second: v }))
          );

          await new Promise((r) => setTimeout(r, 100));

          await animateCounter(25, 900, (v) =>
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
          <h2 className="text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">
            Because Great Talent
          </h2>
          <h2 className="font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight">
            Follows Great Stories
          </h2>
        </div>

        {/* Image + Overlay + Counters */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start mb-6">
          
          {/* IMAGE */}
          <div className="lg:col-span-5 lg:w-[600px]">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/employee About service - 451 x 500.jpg"
                alt="SEO workspace"
                className="w-full sm:h-[400px] lg:h-[700px] object-cover"
              />
            </div>
          </div>

          {/* MOBILE OVERLAY */}
          <div className="block lg:hidden relative -mt-16 z-10 px-2">
            <div className="bg-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <p className="text-[#030019] font-medium text-[20px] leading-[20px] text-left p-4">
                {overlayText}
              </p>
            </div>
          </div>

          {/* COUNTERS */}
          <div className="lg:mt-[35%] lg:ml-[25%] mt-4 ml-[3%] mr-[3%] lg:col-span-7">
            <div className="relative h-[450px] lg:h-[400px] lg:w-[520px] sm:h-[500px]">
              
              {/* 85% */}
              <div className="absolute top-6 left-0 text-center">
                <h3 className="text-[#543d98] text-4xl lg:text-6xl font-black">
                  {Math.round(counters.first)}%
                </h3>
                <p className="text-[#030019] text-[16px] max-w-[250px]">
                  of our clients report improved employer brand perception within 6 months.
                </p>
              </div>

              {/* 70% */}
              <div className="absolute top-1/2 -translate-y-1/2 right-0 text-center">
                <h3 className="text-[#543d98] text-4xl lg:text-6xl font-black">
                  {Math.round(counters.second)}%
                </h3>
                <p className="text-[#030019] text-[16px] max-w-[250px]">
                  increase in application rates for clients with targeted employer branding campaigns.
                </p>
              </div>

              {/* 25% */}
              <div className="absolute bottom-6 left-0 text-center">
                <h3 className="text-[#543d98] text-4xl lg:text-6xl font-black">
                  {Math.round(counters.third)}%
                </h3>
                <p className="text-[#030019] text-[16px] max-w-[250px]">
                  decrease in employee turnover rates within the first year of implementing our employer branding strategies.
                </p>
              </div>
            </div>
          </div>

          {/* DESKTOP OVERLAY */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-full max-w-[700px] px-4 hidden lg:block">
            <div className="bg-white rounded-2xl p-6">
              <p className="text-[#030019] text-[34px] leading-[42px]">
                {overlayText}
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="text-left mb-12">
          <p className="text-[12px] lg:text-[24px] text-[#030019]">
           We help you show why working with you feels worth it. Impulse transforms employee experiences into stories that attract and inspire great talent. We create employer brands that balance authenticity with aspiration, showing who you are and why it matters. From internal communication to external campaigns, we build genuine connections with potential hires. Our work enhances your reputation and strengthens retention by turning employees into advocates. We help you become the workplace people want to grow with. With Impulse, your culture becomes your strongest selling point.
          </p>
        </div>
      </div>

      {/* Spacer to maintain layout */}

      <style>{`
        .mb-14 { margin-bottom: 40px; }
      `}</style>
    </section>
  );
};