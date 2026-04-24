export const MethodologySection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#f4f4f4] pt-16 lg:pt-20 pb-[120px] lg:pb-[135px] relative overflow-hidden" style={{ marginTop: "-55px", borderTopLeftRadius: "55px", borderTopRightRadius: "55px", zIndex: 60 }} data-section="methodology">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col items-center justify-center">
             {/* 2D AI Engine Animation */}
             <div className="w-full max-w-[400px] aspect-square relative flex items-center justify-center group mx-auto">
               {/* Pulsing ambient background glow */}
               <div className="absolute inset-0 bg-[#8468d9]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />

               {/* Ring 1 - Outer */}
               <div className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-[#543d98]/20 animate-spin" style={{ animationDuration: '40s' }}>
                  {/* Orbiting nodes */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#543d98] rounded-full shadow-[0_0_15px_rgba(84,61,152,0.3)]" />
                  <div className="absolute top-[75%] left-[93.3%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#8468d9] rounded-full shadow-[0_0_10px_rgba(132,104,217,0.4)]" />
                  <div className="absolute top-[75%] left-[6.7%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#543d98] rounded-full shadow-[0_0_10px_rgba(84,61,152,0.4)]" />
               </div>

               {/* Ring 2 - Middle */}
               <div className="absolute inset-10 rounded-full border border-[#8468d9]/30 animate-spin bg-gradient-to-tr from-[#543d98]/5 to-transparent" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
                  {/* Inner nodes */}
                  <div className="absolute top-[14%] right-[14%] translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#8468d9] rounded-full" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-[#543d98] rounded-full" />
               </div>

               {/* Ring 3 - Inner Track */}
               <div className="absolute inset-20 rounded-full border-2 border-[#543d98]/10 border-t-[#543d98]/50 animate-spin" style={{ animationDuration: '15s' }} />

               {/* Connecting Web */}
               <svg className="absolute inset-0 w-full h-full animate-spin" style={{ animationDuration: '40s' }} viewBox="0 0 200 200">
                 <line x1="100" y1="100" x2="100" y2="0" stroke="#543d98" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 4" />
                 <line x1="100" y1="100" x2="186.6" y2="150" stroke="#543d98" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 4" />
                 <line x1="100" y1="100" x2="13.4" y2="150" stroke="#543d98" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 4" />
               </svg>

               {/* Central Core */}
               <div className="absolute w-28 h-28 bg-white rounded-2xl shadow-[0_10px_40px_rgba(84,61,152,0.15)] border border-[#543d98]/15 flex items-center justify-center rotate-45 group-hover:scale-105 transition-transform duration-500 ease-out z-10">
                  {/* Inner core framing */}
                  <div className="w-16 h-16 border border-[#8468d9]/30 flex items-center justify-center rounded-xl relative overflow-hidden bg-[#fbfbfb]">
                     {/* The AI "Brain" - pulsing diamond */}
                     <div className="w-8 h-8 bg-gradient-to-tr from-[#543d98] to-[#8468d9] shadow-[0_0_20px_rgba(84,61,152,0.5)] animate-pulse -rotate-45 rounded-[6px] relative flex items-center justify-center" style={{ animationDuration: '2s' }}>
                        <div className="w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDuration: '1.5s' }} />
                     </div>
                  </div>
                  
                  {/* Decorative core brackets */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[#543d98]/30" />
                  <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-[#543d98]/30" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-[#543d98]/30" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-[#543d98]/30" />
               </div>

               {/* Data Packets */}
               <div className="absolute inset-0 z-0 pointer-events-none">
                 <div className="absolute left-1/2 top-[10%] w-2 h-2 bg-[#8468d9] rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                 <div className="absolute right-[20%] bottom-[30%] w-2 h-2 bg-[#543d98] rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
               </div>
             </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6">
            <h2 className="[font-family:'DM_Sans',Helvetica] leading-tight mb-8">
              <span className="block text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">
                Precision is&nbsp;
              </span>
              <span className="block text-[#543d98] font-bold lg:text-[52px] sm:text-[26px]">
                the product.
              </span>
            </h2>
            
            <div className="space-y-6 text-base md:text-lg text-[#666] leading-relaxed [font-family:'DM_Sans',Helvetica] mb-10">
              <p>
                Most outbound providers sell volume. We sell accuracy.
              </p>
              <p>
                Every prospect in your pipeline has been individually discovered through live market data, not scraped from a purchased database. Every email address has been verified before it is ever touched. Every opening line has been written around a real event in that company's world. Every sequence has been structured to respect the buyer's time and intelligence.
              </p>
              <p>
                The difference is felt in the numbers that matter: open rates, reply rates, and the quality of conversations that reach your sales team. When the foundation is precise, the outcomes follow.
              </p>
            </div>

            {/* Callout Box */}
            <div className="bg-white border-l-4 border-[#543d98] p-6 md:p-8 rounded-r-xl shadow-md">
              <p className="[font-family:'DM_Sans',Helvetica] text-[#333] text-base md:text-lg leading-relaxed font-bold">
                The engine uses AI for enrichment, signal detection, and personalisation at scale. But the strategy, the ICP, and the targeting logic are human-built. Automation without direction is noise. We handle both.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
