import { useEffect, useRef } from "react";

export const StatusQuoSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100");
            entry.target.classList.remove("translate-y-12", "opacity-0");
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -100px 0px" }
    );

    const items = sectionRef.current?.querySelectorAll(".stagger-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-white pt-16 lg:pt-20 pb-[120px] lg:pb-[135px] relative overflow-hidden" 
      style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px", zIndex: 10 }} 
      data-section="status-quo"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-16 lg:gap-24 max-w-5xl [font-family:'DM_Sans',Helvetica]">
          
          {/* Statement 1 */}
          <div className="stagger-item opacity-0 translate-y-12 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] flex flex-col lg:flex-row gap-6 lg:gap-12 items-start group">
             <div className="text-[#8468d9]/20 font-bold text-4xl lg:text-6xl group-hover:text-[#8468d9] transition-colors duration-500 hidden lg:block mt-2">01</div>
             <h3 className="text-[#030019] font-bold text-[32px] md:text-[48px] lg:text-[64px] leading-[1.1] tracking-tight">
               Referrals got you here. <br className="hidden lg:block"/>
               <span className="text-[#666] font-light">They will not get you there.</span>
             </h3>
          </div>

          {/* Statement 2 */}
          <div className="stagger-item opacity-0 translate-y-12 transition-all duration-1000 delay-200 ease-[cubic-bezier(0.19,1,0.22,1)] flex flex-col lg:flex-row gap-6 lg:gap-12 items-start lg:ml-24 group">
             <div className="text-[#8468d9]/20 font-bold text-4xl lg:text-6xl group-hover:text-[#8468d9] transition-colors duration-500 hidden lg:block">02</div>
             <p className="text-[#333] text-[20px] md:text-[28px] lg:text-[36px] leading-[1.3] font-medium max-w-3xl">
               Inbound compounds slowly. Ads generate volume, rarely the right conversations. And your sales team should be closing, not prospecting.
             </p>
          </div>

          {/* Statement 3 */}
          <div className="stagger-item opacity-0 translate-y-12 transition-all duration-1000 delay-500 ease-[cubic-bezier(0.19,1,0.22,1)] flex flex-col lg:flex-row gap-6 lg:gap-12 items-start lg:ml-48 group">
             <div className="text-[#543d98]/20 font-bold text-4xl lg:text-6xl group-hover:text-[#543d98] transition-colors duration-500 hidden lg:block mt-2">03</div>
             <h3 className="text-[#543d98] font-black text-[36px] md:text-[52px] lg:text-[72px] leading-[1.1] tracking-tight">
               The gap is not effort. <br className="hidden lg:block"/>
               <span className="underline decoration-[#8468d9]/30 underline-offset-[12px] group-hover:decoration-[#8468d9] transition-colors duration-500">It is infrastructure.</span>
             </h3>
          </div>

        </div>
      </div>
    </section>
  );
};
