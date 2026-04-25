export const ScarcitySection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#020018] pt-24 lg:pt-32 pb-[120px] lg:pb-[140px] relative overflow-hidden" style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px", zIndex: 70 }} data-section="scarcity">
      {/* Cinematic Glowing Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8468d9]/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className="[font-family:'DM_Sans',Helvetica] font-light text-white lg:text-[64px] sm:text-[32px] leading-tight mb-8">
          <span className="block font-bold">Limited engagements</span>
          <span className="text-[#8468d9] italic">per quarter.</span>
        </h2>
        
        <div className="space-y-6 [font-family:'DM_Sans',Helvetica] text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
          <p>
            Every Archer deployment requires custom AI configuration and strategic calibration specific to your ICP and market. That depth means we keep active engagements small.
          </p>
        </div>
      </div>
    </section>
  );
};
