import React from "react";

export const Thankyoucontent = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16 lg:py-24" data-section="contact-info">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-16 items-center text-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl leading-tight">
                Thank you for contacting us.
              </h2>
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base leading-relaxed">
                
                We’ve received your message and our team will get back to you shortly.
              </p>
            </div>

            {/* Office Details */}
           
          </div>

         
        </div>
      </div>
    </section>
  );
};