export const EconomicsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#020018] relative overflow-visible" style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px", zIndex: 30 }} data-section="economics">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-40">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* Sticky Left Column */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-40 lg:self-start lg:h-fit">
            <div className="relative">
              {/* Subtle accent line */}
              <div className="w-12 h-1 bg-[#8468d9] mb-8" />
              
              <h2 className="[font-family:'DM_Sans',Helvetica] leading-tight text-white mb-8">
                <span className="block font-medium lg:text-[40px] sm:text-[24px]">
                  The math behind
                </span>
                <span className="block text-[#8468d9] font-bold lg:text-[64px] sm:text-[36px]">
                  precision.
                </span>
              </h2>
              
              <p className="[font-family:'DM_Sans',Helvetica] text-lg md:text-xl text-white/70 leading-relaxed max-w-md font-light">
                Every channel has a cost-per-conversation. Inbound compounds slowly. Ads scale expensively. Referrals are unpredictable. 
                <br /><br />
                <span className="text-white font-medium">Outbound is the only channel where you choose exactly who enters your pipeline.</span>
              </p>
            </div>
          </div>

          {/* Scrolling Right Column */}
          <div className="w-full lg:w-7/12 mt-12 lg:mt-0">
            <div className="flex flex-col gap-12 lg:gap-[30vh]">
              
              {/* Block 1 */}
              <div className="relative group perspective-1000">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#543d98]/0 via-[#543d98]/10 to-[#543d98]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl rounded-[40px]" />
                <div className="bg-[#0a0726] border border-[#543d98]/20 p-10 lg:p-14 rounded-[32px] relative transform transition-all duration-700 hover:border-[#8468d9]/50 hover:-translate-y-2">
                  <div className="text-[#8468d9]/10 font-black text-[120px] lg:text-[180px] absolute -top-10 -right-6 lg:-right-10 leading-none select-none group-hover:text-[#8468d9]/20 transition-colors duration-700">
                    1
                  </div>
                  <div className="relative z-10">
                    <p className="[font-family:'DM_Sans',Helvetica] text-white/80 text-[20px] lg:text-[24px] leading-[1.6] font-light mt-16 lg:mt-24">
                      <span className="text-white font-bold block mb-2 text-2xl lg:text-3xl">B2B cost per qualified lead</span> 
                      via paid channels: Rs. 3,000 to Rs. 15,000+. Most go cold within a week.
                    </p>
                  </div>
                </div>
              </div>

              {/* Block 2 */}
              <div className="relative group perspective-1000 lg:ml-12">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#543d98]/0 via-[#543d98]/10 to-[#543d98]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl rounded-[40px]" />
                <div className="bg-[#0a0726] border border-[#543d98]/20 p-10 lg:p-14 rounded-[32px] relative transform transition-all duration-700 hover:border-[#8468d9]/50 hover:-translate-y-2">
                  <div className="text-[#8468d9]/10 font-black text-[120px] lg:text-[180px] absolute -top-10 -right-6 lg:-right-10 leading-none select-none group-hover:text-[#8468d9]/20 transition-colors duration-700">
                    2
                  </div>
                  <div className="relative z-10">
                    <p className="[font-family:'DM_Sans',Helvetica] text-white/80 text-[20px] lg:text-[24px] leading-[1.6] font-light mt-16 lg:mt-24">
                      <span className="text-white font-bold block mb-2 text-2xl lg:text-3xl">Outbound identifies</span> 
                      the specific company, the specific person, and the specific reason to reach out. Every touch is intentional.
                    </p>
                  </div>
                </div>
              </div>

              {/* Block 3 */}
              <div className="relative group perspective-1000 lg:ml-24">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#543d98]/0 via-[#543d98]/10 to-[#543d98]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl rounded-[40px]" />
                <div className="bg-[#0a0726] border border-[#543d98]/20 p-10 lg:p-14 rounded-[32px] relative transform transition-all duration-700 hover:border-[#8468d9]/50 hover:-translate-y-2">
                  <div className="text-[#8468d9]/10 font-black text-[120px] lg:text-[180px] absolute -top-10 -right-6 lg:-right-10 leading-none select-none group-hover:text-[#8468d9]/20 transition-colors duration-700">
                    3
                  </div>
                  <div className="relative z-10">
                    <p className="[font-family:'DM_Sans',Helvetica] text-white/80 text-[20px] lg:text-[24px] leading-[1.6] font-light mt-16 lg:mt-24">
                      <span className="text-white font-bold block mb-2 text-2xl lg:text-3xl">When a single new account</span> 
                      can change a quarter's trajectory, precision outbound pays for itself fast.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
