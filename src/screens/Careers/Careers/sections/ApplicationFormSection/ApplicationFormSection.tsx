import React, { useRef, useState } from "react";
import { Card, CardContent } from "../../../../../components/ui/card";
import { Button } from "../../../../../components/ui/button";

export const ApplicationFormSection = (): JSX.Element => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ✅ we will submit via fetch to PHP

    setErrorMsg("");
    setSuccessMsg("");

    if (!formRef.current) return;

    // Basic front-end validation (extra safety)
    const form = formRef.current;
    const position = (form.elements.namedItem("Dropdown") as HTMLSelectElement | null)?.value || "";
    const firstName = (form.elements.namedItem("Name_First") as HTMLInputElement | null)?.value?.trim() || "";
    const lastName = (form.elements.namedItem("Name_Last") as HTMLInputElement | null)?.value?.trim() || "";
    const email = (form.elements.namedItem("Email") as HTMLInputElement | null)?.value?.trim() || "";
    const phone = (form.elements.namedItem("Phone") as HTMLInputElement | null)?.value?.trim() || "";
    const exp = (form.elements.namedItem("Dropdown1") as HTMLSelectElement | null)?.value || "";
    const fileInput = form.elements.namedItem("FileUpload") as HTMLInputElement | null;

    if (!position || position === "-Select-") return setErrorMsg("Please select a position.");
    if (!firstName) return setErrorMsg("Please enter your first name.");
    if (!lastName) return setErrorMsg("Please enter your last name.");
    if (!email) return setErrorMsg("Please enter your email.");
    if (!phone) return setErrorMsg("Please enter your phone number.");
    if (!exp || exp === "-Select-") return setErrorMsg("Please select your experience level.");
    if (!fileInput?.files?.length) return setErrorMsg("Please upload your resume.");

    // Build FormData
    const fd = new FormData(form);

    // IMPORTANT: your PHP endpoint path
    // If your React is deployed on same domain: "/api/send-career.php"
    // If different domain, use full URL: "https://www.theimpulsedigital.com/api/send-career.php"
    const endpoint = "/api/send-career.php";

    try {
      setSubmitting(true);

      const res = await fetch(endpoint, {
        method: "POST",
        body: fd,
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) {
        setErrorMsg(data?.message || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }

      setSuccessMsg("Application submitted successfully. Redirecting...");
      // Reset form (optional)
      form.reset();

      // redirect
      setTimeout(() => {
        window.location.href = "/thank-you";
      }, 600);
    } catch (err) {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="application-form"
      className="w-full bg-[#f8f9fa] py-16 lg:py-24"
      data-section="application-form"
    >
      <div className="max-w-[800px] mx-auto px-4 lg:px-8">
        <Card className="bg-white rounded-2xl border-0 shadow-lg">
          <CardContent className="p-8 lg:p-12">
            <form
              ref={formRef}
              name="careers-form"
              id="careers-form"
              method="POST"
              encType="multipart/form-data"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              {/* ✅ Honeypot (bots fill this, humans won't) */}
              <input
                type="text"
                name="website_check"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
              />

              {/* Position Applying For (Dropdown) */}
              <div className="space-y-2">
                <label className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-base">
                  Position Applying For <em>*</em>
                </label>
                <select
                  name="Dropdown"
                  className="w-full h-[50px] px-4 py-3 bg-[#f8f9fa] rounded-lg border border-gray-200 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base focus:border-[#543d98] focus:outline-none transition-colors"
                  defaultValue="-Select-"
                  required
                >
                  <option value="-Select-">Select Position</option>
                  <option value="Social Media Content Writer">Social Media Content Writer</option>
                  <option value="SEO Executive">SEO Executive</option>
                  <option value="HR Executive">HR Executive</option>
                  <option value="Social Media Intern">Social Media Intern</option>
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
                    placeholder="First Name"
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
                  type="email"
                  maxLength={255}
                  name="Email"
                  placeholder="Enter Your Email Address"
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
                  name="Phone"
                  maxLength={20}
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
                  required
                >
                  <option value="-Select-">Select Experience Level</option>
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
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  className="w-full h-[150px] px-4 py-3 bg-[#f8f9fa] rounded-lg border border-gray-200 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base focus:border-[#543d98] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Portfolio / LinkedIn URL */}
              <div className="space-y-2">
                <label className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-base">
                  Portfolio/LinkedIn URL (Optional)
                </label>
                <input
                  type="url"
                  maxLength={2083}
                  name="Website"
                  placeholder="https://your-portfolio.com or LinkedIn profile"
                  className="w-full h-[50px] px-4 py-3 bg-[#f8f9fa] rounded-lg border border-gray-200 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base focus:border-[#543d98] focus:outline-none transition-colors"
                />
              </div>

              {/* Alerts */}
              {errorMsg ? (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMsg}
                </div>
              ) : null}

              {successMsg ? (
                <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                  {successMsg}
                </div>
              ) : null}

              {/* Submit Button */}
              <div className="pt-6 text-center">
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-[160px] h-[44px] group inline-flex items-center gap-2 px-4 py-6 bg-[#543d98] hover:bg-[#543d98]/90 rounded-xl text-white disabled:opacity-60"
                >
                  <span className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm md:text-base">
                    {submitting ? "Submitting..." : "Submit"}
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
