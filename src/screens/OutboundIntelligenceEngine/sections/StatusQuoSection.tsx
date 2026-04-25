import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const StatusQuoSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      textRefs.current.forEach((el, index) => {
        gsap.fromTo(el,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#f8f9fa] pt-24 lg:pt-32 pb-[120px] lg:pb-[160px] relative overflow-hidden" 
      style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px", zIndex: 10 }} 
      data-section="status-quo"
    >
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 [font-family:'DM_Sans',Helvetica]">
          
          {/* Card 1 */}
          <div ref={el => { if (el) textRefs.current[0] = el; }} className="bg-white rounded-[32px] p-10 lg:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500">
            <div className="text-[#8468d9]/20 font-black text-6xl lg:text-7xl tracking-tighter mb-12 lg:mb-24 group-hover:text-[#8468d9]/40 transition-colors duration-500">01</div>
            <h3 className="text-[#030019] font-black text-[32px] md:text-[40px] leading-[1.1] tracking-tight">
              Referrals close well. <br/>
              <span className="text-[#8468d9]">They scale poorly.</span>
            </h3>
          </div>

          {/* Card 2 */}
          <div ref={el => { if (el) textRefs.current[1] = el; }} className="bg-white rounded-[32px] p-10 lg:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500">
            <div className="text-[#8468d9]/20 font-black text-6xl lg:text-7xl tracking-tighter mb-12 lg:mb-16 group-hover:text-[#8468d9]/40 transition-colors duration-500">02</div>
            <p className="text-[#030019]/80 text-[20px] md:text-[24px] leading-[1.5] font-medium">
              Traditional outbound throws people at the problem - SDR teams manually researching, writing, sending, and following up. <br/><br/><span className="text-[#030019] font-bold">It works until the cost of scaling it doesn't.</span>
            </p>
          </div>

          {/* Card 3 - Full Width Solution */}
          <div ref={el => { if (el) textRefs.current[2] = el; }} className="lg:col-span-2 bg-[#020018] rounded-[32px] p-10 lg:p-16 relative overflow-hidden group border border-white/10 shadow-2xl">
            {/* Subtle glow effect inside the card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-[#543d98]/30 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 lg:gap-16 items-start lg:items-center">
              <div className="text-white/10 font-black text-6xl lg:text-8xl tracking-tighter group-hover:text-white/20 transition-colors duration-500">03</div>
              <p className="text-white text-[24px] md:text-[32px] lg:text-[40px] leading-[1.25] tracking-tight font-medium max-w-4xl">
                <span className="text-[#cbbaff] font-bold">Archer replaces that entire layer with AI infrastructure.</span> The intelligence is built in. The precision is automatic. The cost stays flat as you scale.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
