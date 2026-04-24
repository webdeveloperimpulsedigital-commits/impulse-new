export const MethodologySection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#f4f4f4] pt-16 lg:pt-20 pb-[120px] lg:pb-[135px] relative overflow-hidden" style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px", zIndex: 60 }} data-section="methodology">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-min">
          
          {/* Main Title Block - Spans 2 columns */}
          <div className="col-span-1 md:col-span-2 bg-white rounded-[32px] p-10 lg:p-14 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col justify-center">
            <h2 className="[font-family:'DM_Sans',Helvetica] leading-[1.1] mb-6">
              <span className="block text-[#030019] font-medium lg:text-[40px] sm:text-[24px]">
                Precision is
              </span>
              <span className="block text-[#543d98] font-bold lg:text-[64px] sm:text-[36px] tracking-tight">
                the product.
              </span>
            </h2>
            <p className="[font-family:'DM_Sans',Helvetica] text-lg lg:text-2xl text-[#666] leading-relaxed font-light max-w-xl">
              Every prospect individually discovered through live data. Every email verified. Every sequence designed to respect the buyer's intelligence.
            </p>
          </div>

          {/* Animation Block - Spans 1 column, rows 2 */}
          <div className="col-span-1 md:col-span-1 md:row-span-2 bg-[#020018] rounded-[32px] p-8 flex flex-col items-center justify-center relative overflow-hidden border border-[#543d98]/20 shadow-xl min-h-[400px]">
             {/* 2D AI Engine Animation */}
             <div className="w-full max-w-[280px] aspect-square relative flex items-center justify-center group mx-auto">
               {/* Pulsing ambient background glow */}
               <div className="absolute inset-0 bg-[#8468d9]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />

               {/* Ring 1 - Outer */}
               <div className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-[#543d98]/30 animate-spin" style={{ animationDuration: '40s' }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#543d98] rounded-full shadow-[0_0_15px_rgba(84,61,152,0.3)]" />
                  <div className="absolute top-[75%] left-[93.3%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#8468d9] rounded-full shadow-[0_0_10px_rgba(132,104,217,0.4)]" />
                  <div className="absolute top-[75%] left-[6.7%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#543d98] rounded-full shadow-[0_0_10px_rgba(84,61,152,0.4)]" />
               </div>

               {/* Ring 2 - Middle */}
               <div className="absolute inset-8 rounded-full border border-[#8468d9]/40 animate-spin bg-gradient-to-tr from-[#543d98]/10 to-transparent" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
                  <div className="absolute top-[14%] right-[14%] translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#8468d9] rounded-full" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-[#543d98] rounded-full" />
               </div>

               {/* Ring 3 - Inner Track */}
               <div className="absolute inset-16 rounded-full border-2 border-[#543d98]/20 border-t-[#543d98]/70 animate-spin" style={{ animationDuration: '15s' }} />

               {/* Connecting Web */}
               <svg className="absolute inset-0 w-full h-full animate-spin" style={{ animationDuration: '40s' }} viewBox="0 0 200 200">
                 <line x1="100" y1="100" x2="100" y2="0" stroke="#8468d9" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="4 4" />
                 <line x1="100" y1="100" x2="186.6" y2="150" stroke="#8468d9" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="4 4" />
                 <line x1="100" y1="100" x2="13.4" y2="150" stroke="#8468d9" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="4 4" />
               </svg>

               {/* Central Core */}
               <div className="absolute w-20 h-20 bg-[#0a0726] rounded-2xl shadow-[0_0_30px_rgba(84,61,152,0.4)] border border-[#543d98]/40 flex items-center justify-center rotate-45 group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] z-10">
                  <div className="w-12 h-12 border border-[#8468d9]/50 flex items-center justify-center rounded-xl relative overflow-hidden bg-[#0a0726]">
                     <div className="w-6 h-6 bg-gradient-to-tr from-[#543d98] to-[#8468d9] shadow-[0_0_20px_rgba(84,61,152,0.8)] animate-pulse -rotate-45 rounded-[4px] relative flex items-center justify-center" style={{ animationDuration: '2s' }}>
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{ animationDuration: '1.5s' }} />
                     </div>
                  </div>
               </div>
               
               {/* Data Packets */}
               <div className="absolute inset-0 z-0 pointer-events-none">
                 <div className="absolute left-1/2 top-[10%] w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                 <div className="absolute right-[20%] bottom-[30%] w-2 h-2 bg-[#8468d9] rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
               </div>
             </div>
          </div>

          {/* Small Feature Block */}
          <div className="col-span-1 md:col-span-1 bg-[#543d98] rounded-[32px] p-10 lg:p-12 text-white flex flex-col justify-between shadow-[0_20px_40px_rgba(84,61,152,0.2)]">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-10">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <p className="[font-family:'DM_Sans',Helvetica] text-xl lg:text-2xl font-bold leading-tight">
              Every opening line written around a real signal.
            </p>
          </div>

          {/* Wide Feature Block */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-white rounded-[32px] p-10 lg:p-12 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-4 uppercase tracking-wider text-sm">
              The Engine
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#333] text-lg md:text-xl leading-relaxed font-medium">
              Uses AI for enrichment, signal detection, and personalisation at scale. The strategy, the ICP, and the targeting logic are human-built. <span className="text-[#543d98]">Automation without direction is noise. We handle both.</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
