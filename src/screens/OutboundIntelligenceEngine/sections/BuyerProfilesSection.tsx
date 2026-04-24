export const BuyerProfilesSection = (): JSX.Element => {
  const profiles = [
    {
      title: "Entering a new market",
      desc: "Companies expanding into a new vertical, geography, or buyer segment that need to build pipeline where no one knows them yet. Outbound is the fastest path to the right conversations.",
    },
    {
      title: "Strong closers, thin top-of-funnel",
      desc: "Sales teams that convert well but spend too much time sourcing their own conversations. The engine fills the gap so your closers can focus on what they do best.",
    },
    {
      title: "Outgrown referrals",
      desc: "Founders and revenue leaders who know that the next phase of growth requires a repeatable system for meeting decision-makers they would never encounter through their existing network.",
    },
  ];

  return (
    <section className="w-full bg-white pt-16 lg:pt-20 pb-[120px] lg:pb-[135px] relative overflow-hidden" style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px", zIndex: 50 }} data-section="buyer-profiles">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mb-16 md:mb-24">
          <h2 className="[font-family:'DM_Sans',Helvetica] leading-tight mb-6">
            <span className="block text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">
              Built for&nbsp;
            </span>
            <span className="block text-[#543d98] font-bold lg:text-[52px] sm:text-[26px]">
              high-value sales.
            </span>
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] text-base md:text-lg text-[#666] leading-relaxed">
            When your sales cycle involves multiple stakeholders, considered decisions, and meaningful contract values, every new conversation at the top of your funnel matters. The Outbound Intelligence Engine is designed for exactly that kind of business, where precision is not a luxury, it is how revenue happens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {profiles.map((profile, index) => (
            <div key={index} className="bg-white border border-gray-200 p-8 lg:p-10 rounded-[24px] shadow-lg hover:shadow-xl hover:border-[#543d98]/50 transition-all duration-300">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-4">
                {profile.title}
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#666] text-base leading-relaxed">
                {profile.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
