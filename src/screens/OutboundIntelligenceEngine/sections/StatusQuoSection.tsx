export const StatusQuoSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white pt-16 lg:pt-20 pb-[120px] lg:pb-[135px] relative overflow-hidden" style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px", zIndex: 10 }} data-section="status-quo">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-[720px] mx-auto flex flex-col gap-8 text-center [font-family:'DM_Sans',Helvetica]">
          <p className="text-[#666] text-base md:text-lg lg:text-xl leading-relaxed">
            Referrals got you here. They will not get you there. Every growth-stage company reaches the point where word-of-mouth plateaus and the next phase of revenue needs a system behind it, not luck.
          </p>
          <p className="text-[#666] text-base md:text-lg lg:text-xl leading-relaxed">
            Inbound takes 6 to 18 months to compound. Performance ads generate volume, but rarely the right conversations. And your sales team should be closing, not spending half their week prospecting from a LinkedIn search bar.
          </p>
          <p className="text-[#333] text-base md:text-lg lg:text-xl font-bold leading-relaxed">
            The gap is not effort. It is the absence of infrastructure that knows exactly who to reach, when to reach them, and what to say when you do.
          </p>
        </div>
      </div>
    </section>
  );
};
