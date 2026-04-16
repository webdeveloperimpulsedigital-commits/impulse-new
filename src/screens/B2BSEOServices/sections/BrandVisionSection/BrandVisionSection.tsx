import { useEffect, useRef, useState } from "react";

export const BrandVisionSection = (): JSX.Element => {
  const overlayText =
    "Through a proven B2B SEO agency framework, we help your business get noticed, trusted, and chosen by the right people.";

  // ================== COUNTERS ==================
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  // ---- Counter Animation ----
  const animateCounter = (
    target: number,
    duration: number,
    onTick: (value: number) => void,
    options?: { decimals?: number }
  ) =>
    new Promise<void>((resolve) => {
      const start = performance.now();
      const decimals = options?.decimals ?? 0;
      let rafId: number;

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
          rafId = requestAnimationFrame(tick);
        } else {
          onTick(target);
          resolve();
        }
      };

      rafId = requestAnimationFrame(tick);
    });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            await animateCounter(5, 1200, setFirst);
            await new Promise((r) => setTimeout(r, 100));

            await animateCounter(300, 1000, setSecond);
            await new Promise((r) => setTimeout(r, 100));

            await animateCounter(5.5, 900, setThird, { decimals: 1 });
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
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
            <span className="block text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">
              B2B SEO Agency  <br></br>
            </span>
            <span className="block text-[#543d98] font-bold lg:text-[52px] sm:text-[26px]">
              Built for Long Cycles & Lasting ROI
            </span>
          </h2>
        </div>

        {/* Image + Overlay + Counters */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start mb-6">
          {/* IMAGE */}
          <div className="lg:col-span-5 lg:w-[600px]">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/b2b About service - 451 x 500.jpg"
                alt="SEO workspace"
                className="w-full sm:h-[400px] lg:h-[700px] object-cover"
              />
            </div>
          </div>

          {/* MOBILE OVERLAY */}
          <div className="block lg:hidden relative -mt-16 z-10 px-2">
            <div className="bg-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium text-[20px] leading-[20px] text-left p-4">
                {overlayText}
              </p>
            </div>
          </div>

          {/* COUNTERS */}
          <div className="lg:mt-[35%] lg:ml-[25%] mt-4 ml-[3%] mr-[3%] lg:col-span-7">
            <div className="relative h-[450px] lg:h-[400px] lg:w-[520px] sm:h-[500px]">
              
              {/* 5 Million+ */}
              <div className="absolute top-6 left-0 text-center">
                <h3 className="text-[#543d98] text-4xl lg:text-6xl font-black leading-none mb-2">
                  {first} <span className="text-2xl lg:text-4xl">Million+</span>
                </h3>
                <p className="text-[#030019] text-[16px] max-w-[250px]">
                  organic visits generated for B2B clients, improving their online presence.
                </p>
              </div>

              {/* 300% */}
              <div className="absolute top-1/2 -translate-y-1/2 right-0 text-center">
                <h3 className="text-[#543d98] text-4xl lg:text-6xl font-black">
                  {second}%
                </h3>
                <p className="text-[#030019] text-[16px] max-w-[250px]">
                  return on investment (ROI) for B2B clients utilizing SEO as a primary acquisition channel.
                </p>
              </div>

              {/* 5.5X */}
              <div className="absolute bottom-6 left-0 text-center">
                <h3 className="text-[#543d98] text-4xl lg:text-6xl font-black">
                  {third.toFixed(1)}X
                </h3>
                <p className="text-[#030019] text-[16px] max-w-[250px]">
                  business growth for our clients after leveraging our expert B2B SEO services.
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
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[12px] lg:text-[24px] text-[#030019]"> 
            B2B audiences make decisions based on information, and we help you deliver it effectively. As a strategic B2B SEO agency in Mumbai, 
            we position your brand as an expert voice that resonates with decision-makers. Through research-driven SEO, we elevate your visibility 
            across the platforms that matter most to your audience. 
            </p><br></br> 
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[12px] lg:text-[24px] text-[#030019]"> 
              Impulse strengthens credibility by combining thought leadership with measurable strategy.
               We build engagement that nurtures leads, builds authority, and drives results. Our methods 
               support long sales cycles while maintaining trust throughout the process. With Impulse,
                your brand is not only visible but respected and remembered.
                </p> 
        </div>
      </div>

      {/* Spacer (keeps layout balanced) */}
      

      <style>{`
        .mb-14 { margin-bottom: 40px; }
      `}</style>
    </section>
  );
};