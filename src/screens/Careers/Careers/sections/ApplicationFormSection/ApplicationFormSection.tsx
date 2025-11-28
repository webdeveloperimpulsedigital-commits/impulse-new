import React from "react";
import { Card, CardContent } from "../../../../../components/ui/card";
import { Button } from "../../../../../components/ui/button";

export const ApplicationFormSection = (): JSX.Element => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Do NOT preventDefault – we want the browser to submit to Zoho
    // Redirect shortly after, so Zoho gets the data in the hidden iframe
    setTimeout(() => {
      window.location.href = "/thank-you"; // or full URL if needed
      // e.g. "https://www.theimpulsedigital.com/thank-you"
    }, 300);
  };

  return (
    <section
      id="application-form"
      className="w-full bg-[#f8f9fa] py-16 lg:py-24"
      data-section="application-form"
    >
      <div className="max-w-[800px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-3xl md:text-4xl lg:text-5xl mb-6">
            Apply Now
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
            Ready to join our team? Fill out the form below and attach your resume. <br />
            We'll get back to you within 48 hours.
          </p>
        </div>

        {/* Application Form */}
        <Card className="bg-white rounded-2xl border-0 shadow-lg">
          <CardContent className="p-8 lg:p-12">
            <form
              action="https://forms.zohopublic.in/adwait1/form/Careers/formperma/GKY3G9OL-53XSaF-g9oblI3hLZeb9tOF4_dU-ORfagA/htmlRecords/submit"
              name="form"
              id="form"
              method="POST"
              acceptCharset="UTF-8"
              encType="multipart/form-data"
              className="space-y-6"
              target="hidden_iframe"          // submit to Zoho in background
              onSubmit={handleSubmit}         // control redirect from React
            >
              {/* Zoho hidden fields */}
              <input type="hidden" name="zf_referrer_name" value="" />
              <input type="hidden" name="zf_redirect_url" value="" />
              <input type="hidden" name="zc_gad" value="" />

              {/* Position Applying For (Dropdown) */}
              <div className="space-y-2">
                <label className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-base">
                  Position Applying For <em>*</em>
                </label>
                <select
                  name="Dropdown"
                  className="w-full h-[50px] px-4 py-3 bg-[#f8f9fa] rounded-lg border border-gray-200 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base focus:border-[#543d98] focus:outline-none transition-colors"
                  defaultValue="-Select-"
                >
                  <option value="-Select-">Position Applying For</option>
                  <option value="Digital Marketing Manager">Digital Marketing Manager</option>
                  <option value="Content Writer">Content Writer</option>
                  <option value="SEO Specialist">SEO Specialist</option>
                  <option value="Graphic Designer">Graphic Designer</option>
                </select>
              </div>

              {/* Name – First & Last */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-base">
                    First Name <em>*</em>
                  </label>
                  <input
                    type="text"
                    maxLength={255}
                    name="Name_First"
                    placeholder="Name"
                    // @ts-ignore Zoho-specific attribute
                    fieldType={7}
                    className="w-full h-[50px] px-4 py-3 bg-[#f8f9fa] rounded-lg border border-gray-200 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base focus:border-[#543d98] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-base">
                    Last Name <em>*</em>
                  </label>
                  <input
                    type="text"
                    maxLength={255}
                    name="Name_Last"
                    placeholder="Last Name"
                    // @ts-ignore
                    fieldType={7}
                    className="w-full h-[50px] px-4 py-3 bg-[#f8f9fa] rounded-lg border border-gray-200 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base focus:border-[#543d98] focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-base">
                  Email <em>*</em>
                </label>
                <input
                  type="text"
                  maxLength={255}
                  name="Email"
                  placeholder="Enter Your Email Address"
                  // @ts-ignore
                  fieldType={9}
                  className="w-full h-[50px] px-4 py-3 bg-[#f8f9fa] rounded-lg border border-gray-200 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base focus:border-[#543d98] focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-base">
                  Phone <em>*</em>
                </label>
                <input
                  type="text"
                  name="PhoneNumber_countrycode"
                  maxLength={20}
                  // @ts-ignore Zoho attributes
                  compname="PhoneNumber"
                  // @ts-ignore
                  phoneFormat="1"
                  // @ts-ignore
                  isCountryCodeEnabled={false}
                  // @ts-ignore
                  fieldType={11}
                  id="international_PhoneNumber_countrycode"
                  placeholder="Enter Your Phone Number"
                  className="w-full h-[50px] px-4 py-3 bg-[#f8f9fa] rounded-lg border border-gray-200 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base focus:border-[#543d98] focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Years of Experience */}
              <div className="space-y-2">
                <label className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-base">
                  Years of Experience <em>*</em>
                </label>
                <select
                  name="Dropdown1"
                  className="w-full h-[50px] px-4 py-3 bg-[#f8f9fa] rounded-lg border border-gray-200 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base focus:border-[#543d98] focus:outline-none transition-colors"
                  defaultValue="-Select-"
                >
                  <option value="-Select-">Select Experience Level</option>
                  <option value="Select experience level">Select experience level</option>
                  <option value="0-1 years (Fresher)">0-1 years (Fresher)</option>
                  <option value="1-2 years">1-2 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5+ years">5+ years</option>
                </select>
              </div>

              {/* Upload Resume */}
              <div className="space-y-2">
                <label className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-base">
                  Upload Resume <em>*</em>
                </label>
                <input
                  type="file"
                  name="FileUpload"
                  // @ts-ignore
                  checktype="c1"
                  accept=".pdf,.doc,.docx"
                  className="w-full h-[50px] file:mr-4 file:px-4 file:py-2 file:rounded-lg file:border-0 file:bg-[#543d98] file:text-white file:text-sm bg-[#f8f9fa] rounded-lg border border-gray-200 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base focus:border-[#543d98] focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Cover Letter / Message */}
              <div className="space-y-2">
                <label className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-base">
                  Cover Letter / Message
                </label>
                <textarea
                  name="MultiLine"
                  maxLength={65535}
                  placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
                  className="w-full h-[150px] px-4 py-3 bg-[#f8f9fa] rounded-lg border border-gray-200 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base focus:border-[#543d98] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Portfolio / LinkedIn URL */}
              <div className="space-y-2">
                <label className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-base">
                  Portfolio/LinkedIn URL (Optional)
                </label>
                <input
                  type="text"
                  maxLength={2083}
                  name="Website"
                  placeholder="https://your-portfolio.com or LinkedIn profile"
                  className="w-full h-[50px] px-4 py-3 bg-[#f8f9fa] rounded-lg border border-gray-200 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base focus:border-[#543d98] focus:outline-none transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6 text-center">
                <Button
                  type="submit"
                  className="w-[160px] h-[44px] group inline-flex items-center gap-2 px-4 py-6 bg-[#543d98] hover:bg-[#543d98]/90 rounded-xl text-white"
                >
                  <span className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm md:text-base">
                    Submit
                  </span>
                  <img
                    src="/button-icon.svg"
                    alt="Arrow"
                    className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45 pointer-events-none"
                  />
                </Button>
              </div>

              {/* Privacy Notice */}
              <div className="pt-4 text-center">
                <p className="text-xs text-[#666] leading-relaxed">
                  By submitting this application, you agree to our privacy policy.
                  We will only use your information for recruitment purposes.
                </p>
              </div>
            </form>

            {/* Hidden iframe to receive Zoho response */}
            <iframe
              name="hidden_iframe"
              style={{ display: "none" }}
              title="hidden_iframe_for_zoho"
            />
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base mb-4">
            Have questions about any position? Contact our HR team:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:careers@theimpulsedigital.com"
              className="flex items-center gap-2 text-[#543d98] hover:text-[#543d98]/80 transition-colors"
            >
              <img src="/sms.png" alt="Email" className="w-4 h-4" />
              <span className="[font-family:'DM_Sans',Helvetica] font-medium">
                careers@theimpulsedigital.com
              </span>
            </a>
            <span className="hidden sm:block text-[#666]">|</span>
            <a
              href="tel:+919769285224"
              className="flex items-center gap-2 text-[#543d98] hover:text-[#543d98]/80 transition-colors"
            >
              <img src="/footer-call.png" alt="Phone" className="w-4 h-4" />
              <span className="[font-family:'DM_Sans',Helvetica] font-medium">
                +91-8850234353
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
