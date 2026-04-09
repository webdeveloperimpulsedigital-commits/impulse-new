import { useEffect, useRef, useState } from "react";

export const BrandVisionSection = (): JSX.Element => {
  const overlayText =
    "Grow Your Store Faster With a Trusted Ecommerce SEO Agency That Turns Searches Into Sales.";

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

          await animateCounter(90, 1200, (v) =>
            setCounters((c) => ({ ...c, first: v }))
          );

          await new Promise((r) => setTimeout(r, 100));

          await animateCounter(150, 1000, (v) =>
            setCounters((c) => ({ ...c, second: v }))
          );

          await new Promise((r) => setTimeout(r, 100));

          await animateCounter(97, 900, (v) =>
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
          <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">
            eCommerce SEO Service
          </h2>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight">
            That drives Carts, Not Just Clicks
          </h2>
        </div>

        {/* Image + Overlay + Counters */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start mb-6">
          
          {/* IMAGE */}
          <div className="lg:col-span-5 lg:w-[600px]">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/ecommerce About service -  451 x 500.jpg"
                alt="SEO workspace"
                className="w-full sm:h-[400px] lg:h-[700px] object-cover"
              />
            </div>
          </div>

          {/* MOBILE OVERLAY */}
          <div
            className="block lg:hidden px-2"
            style={{ marginTop: "-18%", zIndex: 10 }}
          >
            <div className="pointer-events-auto bg-white rounded-2xl p-5 lg:p-6">
              <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[35px] lg:text:[34px] sm:leading-[20px] lg:leading-[42px] text-left">
                {overlayText}
              </p>
            </div>
          </div>

          {/* COUNTERS */}
          <div className="lg:mt-[35%] lg:ml-[25%] mt-4 mx-[3%] lg:col-span-7">
            <div className="relative h-[450px] lg:h-[400px] lg:w-[520px] sm:h-[500px]">

              {/* 90% */}
              <div className="absolute top-6 left-0 text-center">
                <h3 className="text-[#543d98] text-4xl lg:text-6xl font-black">
                  {counters.first}%
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[16px] leading-relaxed max-w-[250px] font-[400]">
                    of eCommerce clients saw a significant increase in organic traffic within 3 months.
                  </p>
                </h3>
              </div>

              {/* 150% */}
              <div className="absolute top-1/2 -translate-y-1/2 right-0 text-center">
                <h3 className="text-[#543d98] text-4xl lg:text-6xl font-black">
                  {counters.second}%
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[16px] leading-relaxed max-w-[250px] font-[400]">
                    average increase in sales for clients with our eCommerce SEO strategies.
                  </p>
                </h3>
              </div>

              {/* 97% */}
              <div className="absolute bottom-6 left-0 text-center">
                <h3 className="text-[#543d98] text-4xl lg:text-6xl font-black">
                  {counters.third}%
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[16px] leading-relaxed max-w-[250px] font-[400]">
                    eCommerce SEO client achieving top 3 Google rankings, driving more organic sales.
                  </p>
                </h3>
              </div>

            </div>
          </div>

          {/* DESKTOP OVERLAY */}
          <div className="pointer-events-none absolute top-8 left-1/2 -translate-x-1/2 w-full max-w-[700px] px-4 hidden lg:block">
            <div className="pointer-events-auto bg-white rounded-2xl p-6">
              <p className="text-[#030019] text-[34px] leading-[42px]">
                {overlayText}
              </p>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="text-left mb-12">
          <p className="text-[12px] lg:text-[24px] text-[#030019]">
            Your products deserve attention, and we make sure they get it as a trusted ecommerce SEO company focused on performance-driven growth. We optimize your store to rank higher, load faster, and convert better through strategic e commerce SEO services designed for online retailers. Our team refines every element, from product pages and category layouts to checkout flow, ensuring a seamless user experience. Impulse makes your brand visible where customers are ready to buy. We align design, content, and analytics to create shopping experiences that inspire trust. Beyond visibility, we focus on repeat conversions and long-term ROI. More clicks, better carts, and higher sales are all part of our strategy.
          </p>
        </div>
      </div>
    </section>
  );
};
