import { useEffect, useRef, useState } from "react";

export const BrandVisionSection = (): JSX.Element => {
  const overlayText =
    "Making every word count, we write what moves minds and markets.";

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
    onTick: (value: number) => void
  ) =>
    new Promise<void>((resolve) => {
      const start = performance.now();

      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - t, 3);

        let current = Math.floor(target * ease);

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

          await animateCounter(70, 1000, (v) =>
            setCounters((c) => ({ ...c, second: v }))
          );

          await new Promise((r) => setTimeout(r, 100));

          await animateCounter(10000, 900, (v) =>
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
  <h2 className="leading-tight">
    <span className="text-[#030019] font-medium lg:text-[34px] sm:text-[16px] block">
      Turn Brand Vision <br></br>
    </span>
    <span className="font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] block">
      Into Words That Convert
    </span>
  </h2>
</div>

        {/* Image + Overlay + Counters */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start mb-6">
          
          {/* IMAGE */}
          <div className="lg:col-span-5 lg:w-[600px]">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/content-wrriting-service-about-us.jpg"
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
              
              {/* 95% */}
              <div className="absolute top-6 left-0 text-center">
                <h3 className="text-[#543d98] text-4xl lg:text-6xl font-black">
                  {Math.round(counters.first)}%
                </h3>
                <p className="text-[#030019] text-[16px] max-w-[250px]">
                  client satisfaction rate with the content delivered.
                </p>
              </div>

              {/* 70% */}
              <div className="absolute top-1/2 -translate-y-1/2 right-0 text-center">
                <h3 className="text-[#543d98] text-4xl lg:text-6xl font-black">
                  {Math.round(counters.second)}%
                </h3>
                <p className="text-[#030019] text-[16px] max-w-[250px]">
                  average increase in organic traffic for clients due to our SEO-optimized content.
                </p>
              </div>

              {/* 10,000+ */}
              <div className="absolute bottom-6 left-0 text-center">
                <h3 className="text-[#543d98] text-4xl lg:text-6xl font-black">
                  {Math.round(counters.third).toLocaleString()}+
                </h3>
                <p className="text-[#030019] text-[16px] max-w-[250px]">
                  successful content pieces published for clients across various industries.
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

        {/* Body copy */}
        <div className="text-left mb-12">
          <p className="text-[12px] lg:text-[24px] text-[#030019]">
            Your brand has a story, and we give it a voice that is hard to forget. From thought-leading blogs to crisp ad copy, we craft content that informs, inspires, and converts. Our writers understand tone, purpose, and audience intent, ensuring your message always lands right. At Impulse, we blend creativity with context so your brand speaks with clarity and confidence. Every piece of content is SEO-informed, emotionally intelligent, and tailored for performance. We make sure your words sound human yet strategic, helping your brand earn attention and trust. With Impulse, your words do not just fill space, they make an impact that lasts.
          </p><br></br>
        </div>
      </div>

      {/* Spacer (keeps layout same) */}
      <div className="h-[80px] sm:h-0"></div>
    </section>
  );
};