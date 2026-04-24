export const BuyerProfilesSection = (): JSX.Element => {
  const profiles = [
    {
      title: "Entering a new market",
      desc: "Building pipeline where no one knows you yet. Outbound is the fastest path to the right conversations.",
      img: "/img-1.png",
    },
    {
      title: "Strong closers, thin top-of-funnel",
      desc: "Your team converts well but spends too much time finding their next conversation. The engine fills the gap.",
      img: "/img-2.png",
    },
    {
      title: "Outgrown referrals",
      desc: "The next phase of growth needs a system, not a network.",
      img: "/img-3.png",
    },
  ];

  return (
    <section className="w-full bg-white pt-16 lg:pt-20 pb-[120px] lg:pb-[135px] relative overflow-hidden" style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px", zIndex: 50 }} data-section="buyer-profiles">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mb-16 md:mb-24">
          <h2 className="[font-family:'DM_Sans',Helvetica] leading-tight mb-6">
            <span className="block text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">
              Built for businesses where
            </span>
            <span className="block text-[#543d98] font-bold lg:text-[52px] sm:text-[26px]">
              every conversation counts.
            </span>
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] text-base md:text-lg text-black leading-relaxed">
            When your sales cycle involves multiple stakeholders, considered decisions, and meaningful contract values, every new conversation at the top of your funnel matters.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 lg:gap-6 h-auto md:h-[500px] w-full">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="group relative flex-1 md:hover:flex-[1.5] lg:hover:flex-[2] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] bg-[#030019] rounded-[32px] overflow-hidden flex flex-col justify-end p-8 lg:p-12 cursor-pointer border border-[#543d98]/20 hover:border-[#8468d9] min-h-[250px] md:min-h-0"
            >
              {/* Background Image Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={profile.img}
                  alt={profile.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] filter grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030019] via-[#030019]/60 to-transparent" />
              </div>

              {/* Massive subtle background number */}
              <div className="absolute top-4 left-6 text-white/10 font-black text-[80px] lg:text-[120px] leading-none select-none transition-transform duration-700 group-hover:-translate-y-4 z-10 drop-shadow-xl">
                0{index + 1}
              </div>

              <div className="relative z-10 flex flex-col h-full justify-end">
                <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-xl lg:text-2xl mb-2 lg:mb-0 transform transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-4">
                  {profile.title}
                </h3>

                {/* The description expands on hover on desktop, always visible on mobile */}
                <div className="md:max-h-0 md:opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] overflow-hidden">
                  <p className="[font-family:'DM_Sans',Helvetica] text-white/70 text-base lg:text-lg leading-relaxed pt-2">
                    {profile.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
