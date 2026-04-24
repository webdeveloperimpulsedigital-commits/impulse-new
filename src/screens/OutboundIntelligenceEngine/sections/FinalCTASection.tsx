import { useState } from "react";

export const FinalCTASection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    companyName: "",
    websiteUrl: "",
    name: "",
    email: "",
    phone: "",
    targetAudience: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your interest. We will be in touch within 48 hours.");
    setFormData({
      companyName: "",
      websiteUrl: "",
      name: "",
      email: "",
      phone: "",
      targetAudience: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="w-full bg-[#020018] py-16 lg:py-20 rounded-t-[55px] -mt-[55px] relative z-[65]" id="contact-border-sec-two" data-section="final-cta">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div className="flex flex-col justify-center">
            <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-white lg:text-[56px] sm:text-[32px] leading-[1.1] mb-8">
              Your pipeline should not depend on luck.
            </h2>
            <div className="text-white/60 text-sm [font-family:'DM_Sans',Helvetica]">
              Limited engagements per quarter. Response within 48 hours.
            </div>
          </div>

          <div className="bg-[#111111] border border-white/10 p-8 md:p-10 rounded-2xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="companyName" className="text-white/80 text-sm font-medium">Company Name</label>
                  <input required type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} className="bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-purple-400 transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="websiteUrl" className="text-white/80 text-sm font-medium">Website URL</label>
                  <input required type="url" id="websiteUrl" name="websiteUrl" value={formData.websiteUrl} onChange={handleChange} className="bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-purple-400 transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-white/80 text-sm font-medium">Your Name</label>
                  <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-purple-400 transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-white/80 text-sm font-medium">Phone Number</label>
                  <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-purple-400 transition-colors" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-white/80 text-sm font-medium">Work Email</label>
                <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-purple-400 transition-colors" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="targetAudience" className="text-white/80 text-sm font-medium">Who are you trying to reach?</label>
                <textarea required id="targetAudience" name="targetAudience" value={formData.targetAudience} onChange={handleChange} rows={3} className="bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-purple-400 transition-colors resize-none" placeholder="e.g. VP of Sales at Series B B2B SaaS companies in the US..." />
              </div>

              <button type="submit" className="mt-4 w-full bg-white text-black font-semibold text-lg py-4 hover:bg-gray-200 transition-colors duration-300 rounded-sm">
                Apply for an ICP Diagnostic
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
