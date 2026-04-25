import { NavLink } from "react-router-dom";

export const ScarcitySection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#020018] pt-24 lg:pt-32 pb-[120px] lg:pb-[140px] relative overflow-hidden" style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px", zIndex: 70 }} data-section="scarcity">
      {/* Cinematic Glowing Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8468d9]/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        
        {/* Main Heading */}
        <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-[32px] md:text-[52px] lg:text-[72px] leading-[1.1] mb-12 tracking-tight">
          Your pipeline, <br className="hidden md:block"/>
          <span className="text-[#8468d9]">powered by intelligence.</span>
        </h2>
        
        {/* Subheading */}
        <h3 className="[font-family:'DM_Sans',Helvetica] font-light text-white text-[28px] md:text-[36px] lg:text-[42px] leading-tight mb-8 mt-4">
          <span className="block font-bold">Limited engagements</span>
          <span className="text-[#8468d9] italic">per quarter.</span>
        </h3>
        
        <div className="space-y-6 [font-family:'DM_Sans',Helvetica] text-white/70 text-lg md:text-[20px] leading-relaxed max-w-3xl mx-auto font-light mb-12">
          <p>
            Every Archer deployment requires custom AI configuration and strategic calibration specific to your ICP and market. That depth means we keep active engagements small.
          </p>
        </div>

        {/* CTA Button */}
        <NavLink
          to="/contact-us/"
          className="group inline-flex items-center gap-2 px-8 py-4 sm:px-10 sm:py-5 bg-white rounded-full hover:bg-[#543d98] hover:text-[#ffffff] text-[#543d98] transition-colors duration-300 font-dm-sans font-bold text-base md:text-xl"
        >
          <span>Apply for an ICP Diagnostic</span>
          <img src="/vector-1-3.svg" alt="Arrow" className="w-5 h-5 transition-all duration-300 group-hover:rotate-45 group-hover:brightness-0 group-hover:invert pointer-events-none" />
        </NavLink>
      </div>
    </section>
  );
};
