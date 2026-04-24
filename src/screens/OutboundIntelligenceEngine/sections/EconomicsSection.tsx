export const EconomicsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white pt-16 lg:pt-20 pb-[120px] lg:pb-[135px] relative overflow-hidden" style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px", zIndex: 30 }} data-section="economics">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="mb-6 lg:mb-10">
          <h2 className="[font-family:'DM_Sans',Helvetica] leading-tight">
            <span className="block text-[#030019] lg:text-[34px] sm:text-[16px] font-medium">
              The math behind&nbsp;
            </span>
            <span className="block text-[#543d98] font-bold lg:text-[52px] sm:text-[26px]">
              outbound.
            </span>
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] mt-6 text-base md:text-lg text-[#666] leading-relaxed max-w-3xl">
            Every growth channel has a cost-per-conversation. Inbound compounds slowly. Paid media scales expensively. Events are one-off. Referrals are unpredictable.
            <br /><br />
            Outbound is different. When done with precision, it is the only channel where you choose exactly who enters your pipeline, and every cost is tied directly to a conversation with a qualified buyer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white border border-gray-200 p-8 lg:p-10 rounded-[24px] flex flex-col justify-center min-h-[200px] hover:border-[#543d98]/50 hover:shadow-lg transition-all duration-300">
            <p className="[font-family:'DM_Sans',Helvetica] text-[#333] text-[18px] leading-[1.6]">
              <span className="text-[#543d98] font-bold">Average B2B cost</span> per qualified lead through paid channels: Rs. 3,000 to Rs. 15,000+. Most go cold within a week.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 p-8 lg:p-10 rounded-[24px] flex flex-col justify-center min-h-[200px] hover:border-[#543d98]/50 hover:shadow-lg transition-all duration-300">
            <p className="[font-family:'DM_Sans',Helvetica] text-[#333] text-[18px] leading-[1.6]">
              <span className="text-[#543d98] font-bold">Outbound identifies</span> the specific company, the specific person, and the specific reason to reach out. Every touch is intentional.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-8 lg:p-10 rounded-[24px] flex flex-col justify-center min-h-[200px] hover:border-[#543d98]/50 hover:shadow-lg transition-all duration-300">
            <p className="[font-family:'DM_Sans',Helvetica] text-[#333] text-[18px] leading-[1.6]">
              <span className="text-[#543d98] font-bold">When a single new account</span> can change a quarter's trajectory, the economics of precision outbound are hard to argue with.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
