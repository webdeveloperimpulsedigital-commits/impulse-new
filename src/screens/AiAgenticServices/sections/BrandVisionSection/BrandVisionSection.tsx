import { useEffect, useRef, useState } from "react";

export const BrandVisionSection = (): JSX.Element => {
  const overlayText =
    "Empowering brands with intelligent automation, we build Agentic AI systems that think, act, and deliver real business impact.";

  // ================== COUNTERS ==================
  const [counters, setCounters] = useState({
    first: 0,  // 92%
    second: 0, // 3X
    third: 0,  // 1,000+
  });

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);
  const rafId = useRef<number | null>(null);

  // ---- Helper: animate a single counter with rAF + easing
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

          // 1) 0 -> 92 (%)
          await animateCounter(92, 1200, (v) =>
            setCounters((c) => ({ ...c, first: v }))
          );

          await new Promise((r) => setTimeout(r, 100));

          // 2) 0 -> 3.0 (X, decimals)
          await animateCounter(3, 1000, (v) =>
            setCounters((c) => ({ ...c, second: v }))
          , { decimals: 1 });

          await new Promise((r) => setTimeout(r, 100));

          // 3) 0 -> 1000 (int)
          await animateCounter(1000, 900, (v) =>
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
          <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px] ">
            Meet The AI 

          </h2>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight ">
            That Doesn’t Wait For Instructions
          </h2>
        </div>

        {/* Image + Overlay + Counters */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start mb-6">
          {/* IMAGE */}
          <div className="lg:col-span-5 lg:w-[600px]">
            <div className="relative rounded-2xl overflow-hidden shadow-lg ">
              <img
                src="/Agentic Ai-01.png"
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

          {/* STATS / COUNTERS */}
          <div className="lg:mt-[35%] lg:ml-[25%] mt-4 ml-[3%] mr-[3%] lg:col-span-7">
            <div className="relative h-[450px] lg:h-[400px] lg:w-[520px] sm:h-[500px]">
              
              {/* 92% */}
              <div className="absolute top-6 left-0 text-center">
                <h3 className="[font-family:'Space Grotesk', sans-serif] text-[#543d98] text-4xl lg:text-6xl font-black leading-none mb-2 transition-all">
                  {Math.round(counters.first)}%
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[16px] leading-relaxed max-w-[260px] font-[400] mt-2">
                    client productivity improvement through AI-driven workflows and automation.
                  </p>
                </h3>
              </div>

              {/* 3X */}
              <div className="absolute top-1/2 -translate-y-1/2 right-0 text-center mb-8">
                <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] text-4xl lg:text-6xl font-black leading-none mb-2">
                  {counters.second.toFixed(1)}X
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[16px] leading-relaxed max-w-[260px] font-[400] mt-2">
                    faster task execution with custom agent systems built for marketing, sales, and operations.
                  </p>
                </h3>
              </div>

              {/* 1,000+ */}
              <div className="absolute bottom-6 left-0 text-center">
                <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] text-4xl lg:text-6xl font-black leading-none mb-2">
                  {Math.round(counters.third).toLocaleString()}+
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[16px] leading-relaxed max-w-[260px] font-[400] mt-2">
                    hours saved monthly for clients through intelligent AI automation.
                  </p>
                </h3>
              </div>

            </div>
          </div>

          {/* DESKTOP OVERLAY TEXT */}
          <div className="pointer-events-none absolute top-8 left-1/2 -translate-x-1/2 w-full max-w-[700px] px-4 hidden lg:block">
            <div className="pointer-events-auto bg-white rounded-2xl p-5 lg:p-6">
              <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[35px] lg:text:[34px] sm:leading-[20px] lg:leading-[42px] text-left">
                {overlayText}
              </p>
            </div>
          </div>
        </div>

        {/* Body Copy */}
        <div className="text-left mb-12">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[12px] lg:text-[24px] text-[#030019]">
          Our Agentic AI offering equips your brand with intelligent digital agents that don’t just chat - they act. These agents are powered by a central intelligence engine connected to your CRM, APIs, data systems, and communication channels, giving them full context about leads, past interactions, funnel stages and campaign history. As a result, they can engage prospects across channels (WhatsApp, email, voice, social, SMS), respond intelligently in multiple languages, recall past conversations, handle objections, and even book appointments - all while preserving your brand’s tone and compliance requirements. Our Agentic AI becomes an always-on digital teammate that automates follow-ups, revives cold leads, nurtures prospects, and ensures no opportunity slips through the cracks - elevating productivity, improving conversions, and freeing your human team to focus on strategy and growth.
          </p>
        </div>
      </div>
    </section>
  );
};
