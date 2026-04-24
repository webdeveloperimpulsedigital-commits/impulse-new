export const ScarcitySection = (): JSX.Element => {
  return (
    <section className="w-full bg-white pt-16 lg:pt-20 pb-[120px] lg:pb-[135px] relative overflow-hidden" style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px", zIndex: 70 }} data-section="scarcity">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
        <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[44px] sm:text-[24px] leading-tight mb-8">
          We take on a limited number of engagements per quarter.
        </h2>
        
        <div className="space-y-6 [font-family:'DM_Sans',Helvetica] text-[#666] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          <p>
            Every engagement gets dedicated attention. Prospects are individually enriched. Opening lines are written around real signals. Weekly cycles are reviewed, refined, and deployed with care. That depth of execution means we keep the number of active engagements intentionally small.
          </p>
          <p>
            The best way to explore whether this is the right fit is a focused conversation about your ICP and your market. No pitch deck. No generic walkthrough. Just a direct discussion about who you are trying to reach and whether we can help you get there.
          </p>
        </div>
      </div>
    </section>
  );
};
