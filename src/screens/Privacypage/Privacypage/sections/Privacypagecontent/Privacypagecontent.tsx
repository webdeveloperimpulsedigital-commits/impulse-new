import React from "react";

export const Privacypagecontent = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16 lg:py-24" data-section="contact-info">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-16 items-center text-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl leading-tight">
                Thank You
              </h2>
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base leading-relaxed">
                Located in the heart of Mumbai's business district, our office is easily accessible and equipped 
                with modern facilities for client meetings and collaborative sessions.
              </p>
            </div>

            {/* Office Details */}
           
          </div>

         
        </div>
      </div>
    </section>
  );
};