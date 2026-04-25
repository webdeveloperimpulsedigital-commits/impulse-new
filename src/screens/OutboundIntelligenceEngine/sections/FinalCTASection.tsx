import { NavLink } from "react-router-dom";

export const FinalCTASection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#020018] pt-24 lg:pt-32 pb-[120px] lg:pb-[140px] relative overflow-hidden" style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px", zIndex: 75 }} data-section="final-cta">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8468d9]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#543d98]/20 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1000px] mx-auto px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        
        {/* Main Heading */}
        <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-[32px] md:text-[52px] lg:text-[72px] leading-[1.1] mb-12 tracking-tight">
          Your pipeline, <br className="hidden md:block"/>
          <span className="text-[#8468d9]">powered by intelligence.</span>
        </h2>
        
        {/* Subheading & Paragraph Area */}
        <div className="mt-8 lg:mt-12 flex flex-col items-center">
          <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] mb-6">
            Limited engagements <br />
            <span className="text-[#8468d9] italic font-normal">per quarter.</span>
          </h3>
          
          <p className="[font-family:'DM_Sans',Helvetica] text-white/70 text-base md:text-lg lg:text-[20px] max-w-[800px] leading-[1.6] mb-12 font-medium">
            Every Archer deployment requires custom AI configuration and strategic calibration specific to your ICP and market. That depth means we keep active engagements small.
          </p>
          
          {/* CTA Button */}
          <NavLink
            to="/contact-us/"
            className="group inline-flex items-center gap-2 px-8 py-4 sm:px-10 sm:py-5 bg-white rounded-full hover:bg-[#543d98] hover:text-[#ffffff] text-[#543d98] transition-colors duration-300 font-dm-sans font-bold text-base md:text-xl"
          >
            <span>Apply for an ICP Diagnostic</span>
            <img src="/vector-1-3.svg" alt="Arrow" className="w-5 h-5 transition-all duration-300 group-hover:rotate-45 group-hover:brightness-0 group-hover:invert pointer-events-none" />
          </NavLink>
        </div>

      </div>
    </section>
  );
};
