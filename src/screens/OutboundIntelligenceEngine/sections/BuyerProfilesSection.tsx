export const BuyerProfilesSection = (): JSX.Element => {
  const profiles = [
    {
      title: "Entering a new market",
      desc: "Need pipeline where no one knows you. The AI finds and reaches the right buyers faster than any human team can.",
      img: "/img-1.png",
    },
    {
      title: "Scaling without scaling headcount",
      desc: "Your sales team converts well. You need more at-bats without hiring more SDRs. The engine delivers volume without headcount.",
      img: "/img-2.png",
    },
    {
      title: "Replacing manual prospecting",
      desc: "Your team is spending hours on research and outreach that an AI can do in minutes, at higher accuracy and lower cost.",
      img: "/img-3.png",
    },
  ];

  return (
    <section className="w-full bg-white pt-16 lg:pt-20 pb-[120px] lg:pb-[135px] relative" style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px", zIndex: 50 }} data-section="buyer-profiles">
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
            When your deal size justifies precision and your sales cycle involves real decision-makers, an AI-powered outbound engine is not a luxury. It is the most efficient way to fill your pipeline.
          </p>
        </div>

        <div className="flex flex-col gap-[30vh] lg:gap-[50vh] w-full relative pb-[20vh]">
          {profiles.map((profile, index) => {
            return (
              <div 
                key={index}
                className="sticky w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-center bg-[#020018] rounded-[40px] p-6 lg:p-12 shadow-2xl border border-[#543d98]/30 overflow-hidden group"
                style={{
                  top: `${120 + index * 40}px`,
                  zIndex: 10 + index,
                  height: "auto",
                  minHeight: "450px"
                }}
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-[#8468d9]/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-10 lg:pr-8">
                  <h3 className="[font-family:'DM_Sans',Helvetica] font-black text-white text-3xl lg:text-5xl mb-6 leading-[1.1] tracking-tight">
                    {profile.title}
                  </h3>
                  <p className="[font-family:'DM_Sans',Helvetica] text-white/70 text-lg lg:text-xl leading-relaxed max-w-xl font-medium">
                    {profile.desc}
                  </p>
                </div>

                {/* Image Side */}
                <div className="w-full lg:w-1/2 overflow-hidden rounded-[24px] relative aspect-video lg:aspect-[4/3] shadow-2xl z-10 border border-white/5">
                  <div className="absolute inset-0 bg-[#543d98]/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700 z-10" />
                  <img
                    src={profile.img}
                    alt={profile.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"
                  />
                  {/* Subtle decorative number */}
                  <div className="absolute -bottom-8 -right-4 text-white/20 font-black text-[140px] leading-none select-none z-20 pointer-events-none drop-shadow-2xl">
                    0{index + 1}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
