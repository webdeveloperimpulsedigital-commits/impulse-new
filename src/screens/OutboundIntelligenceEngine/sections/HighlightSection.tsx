export const HighlightSection = (): JSX.Element => {
  return (
    <section 
      className="w-full relative bg-white overflow-hidden z-30 pt-12 lg:pt-16 pb-6" 
      style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px" }} 
      data-section="highlight"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* The Purple Card */}
        <div className="w-full bg-[#543d98] rounded-[32px] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-[0_15px_50px_-15px_rgba(84,61,152,0.4)]">
          
          {/* Subtle internal glowing/texture to make the card look premium */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white opacity-5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black opacity-20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3" />
            {/* Subtle diagonal line pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 1px, transparent 60px)" }}></div>
          </div>

          <p className="[font-family:'DM_Sans',Helvetica] text-[18px] md:text-[24px] lg:text-[28px] xl:text-[30px] text-white/90 font-light leading-[1.6] text-center max-w-4xl mx-auto relative z-10">
            The Outbound Intelligence Engine identifies the exact decision-makers who match your business, reaches them with precision-timed, personalised outreach, and starts conversations that lead to revenue. <span className="font-bold text-white">No ads. No inbound dependency. Direct access to the people who should be buying from you.</span>
          </p>
          
        </div>
      </div>
    </section>
  );
};
