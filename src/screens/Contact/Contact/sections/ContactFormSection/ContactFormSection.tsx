import React, { useEffect, useRef } from "react";
import { Button } from "../../../../../components/ui/button";

export const ContactFormSection = () => {
  const submitBtnRef = useRef<HTMLButtonElement | null>(null);

  // Load Google reCAPTCHA script (Zoho requires this)
  useEffect(() => {
    const existing = document.querySelector('script[src="https://www.google.com/recaptcha/api.js"]');
    if (existing) return;

    const s = document.createElement("script");
    s.src = "https://www.google.com/recaptcha/api.js";
    s.async = true;
    s.defer = true;
    document.body.appendChild(s);
  }, []);

  // ✅ EXACT functions from Zoho snippet (kept same IDs)
  useEffect(() => {
    (window as any).rccallback1132219000000597005 = function () {
      const recap = document.getElementById("recap1132219000000597005");
      if (recap) recap.setAttribute("captcha-verified", "true");

      const err = document.getElementById("recapErr1132219000000597005");
      if (err && err.style.visibility === "visible") err.style.visibility = "hidden";
    };

    (window as any).reCaptchaAlert1132219000000597005 = function () {
      const recap = document.getElementById("recap1132219000000597005");
      if (recap && recap.getAttribute("captcha-verified") === "false") {
        const err = document.getElementById("recapErr1132219000000597005");
        if (err) err.style.visibility = "visible";
        return false;
      }
      return true;
    };

    (window as any).validateEmail1132219000000597005 = function () {
      const form = document.forms["WebToLeads1132219000000597005"];
      const emailFld = form?.querySelectorAll?.("[ftype=email]") || [];
      for (let i = 0; i < emailFld.length; i++) {
        const emailVal = (emailFld[i] as HTMLInputElement).value;
        if (emailVal.trim().length !== 0) {
          const atpos = emailVal.indexOf("@");
          const dotpos = emailVal.lastIndexOf(".");
          if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
            alert("Please enter a valid email address.");
            (emailFld[i] as HTMLElement).focus();
            return false;
          }
        }
      }
      return true;
    };

    (window as any).checkMandatory1132219000000597005 = function () {
      const mndFileds = ["Company", "Last Name", "Email", "Phone"];
      const fldLangVal = ["Company", "Name", "Email", "Phone"];

      for (let i = 0; i < mndFileds.length; i++) {
        const fieldObj = (document.forms["WebToLeads1132219000000597005"] as any)?.[mndFileds[i]];
        if (fieldObj) {
          if ((String(fieldObj.value).trim()).length === 0) {
            alert(fldLangVal[i] + " cannot be empty");
            fieldObj.focus();
            return false;
          }
          if (fieldObj.nodeName === "SELECT" && fieldObj.options[fieldObj.selectedIndex].value === "-None-") {
            alert(fldLangVal[i] + " cannot be none");
            fieldObj.focus();
            return false;
          }
          if (fieldObj.type === "checkbox" && fieldObj.checked === false) {
            alert("Please accept " + fldLangVal[i]);
            fieldObj.focus();
            return false;
          }
        }
      }

      if (!(window as any).validateEmail1132219000000597005()) return false;
      if (!(window as any).reCaptchaAlert1132219000000597005()) return false;

      // disable submit to prevent double submit
      if (submitBtnRef.current) submitBtnRef.current.setAttribute("disabled", "true");

      // ✅ IMPORTANT: must return true to allow submit
      return true;
    };
  }, []);

  return (
    <section className="contact-section1 sm:pt-5 sm:pb-16 lg:pt-16 lg:pb-16 bg-white" id="contact-us-sec-border">
      <div className="max-w-[1280px] mx-auto px-0 lg:px-0 contact-container1">
        {/* LEFT SECTION */}
        <div className="contact-left1">
          <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
            <span className="text-[#030019]">Let's put</span>
            <br />
            <span className="font-bold text-[#030019] lg:text-[52px] md:text-[52px] sm:text-[20px]">
              Your Auto-fill to Use!
            </span>
          </h2>

          <br />

          <ul className="contact-list lg:pt-16 hidden lg:block md:block">
            <img className="c-icon w-120" alt="Call Logo" src="https://www.theimpulsedigital.com/call.png" />
            <li>
              <a href="tel:+919769285224" className="text-[#030019]">
                +91-9769285224
              </a>
            </li>

            <img className="c-icon w-120" alt="Email Logo" src="https://www.theimpulsedigital.com/sms-1.png" />
            <li>
              <a href="mailto:collabs@theimpulsedigital.com">collabs@theimpulsedigital.com</a>
            </li>

            <img className="c-icon w-120" alt="location Logo" src="https://www.theimpulsedigital.com/location.png" />
            <li>
              <address>
                304 – 305, Chirag Infotech, Road No. 16/Z,
                <br />
                Ambica Nagar, Wagle Industrial Estate,
                <br />
                Thane, Mumbai 400604
              </address>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="contact-right-wrapper">
          <div className="contact-right">
            <form
              id="webform1132219000000597005"
              action="https://crm.zoho.in/crm/WebToLeadForm"
              name="WebToLeads1132219000000597005"
              method="POST"
              acceptCharset="UTF-8"
              onSubmit={() => {
                // Zoho-style onsubmit validation
                document.charset = "UTF-8";
                return (window as any).checkMandatory1132219000000597005();
              }}
            >
              {/* ✅ MUST match your Zoho snippet tokens */}
              <input type="text" style={{ display: "none" }} name="xnQsjsdp" defaultValue="129de3e9e86d28352bbc079c3d8a9d4e13b71a04b39d06e245ab5a86066e3e88" />
              <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
              <input type="text" style={{ display: "none" }} name="xmIwtLD" defaultValue="3d7313f92ff3e94a2444f046709523e068b4f61545cd79a78b8a0e6ffa24c582a00869d10b70b78f61614cfd5b705d0c" />
              <input type="text" style={{ display: "none" }} name="actionType" defaultValue="TGVhZHM=" />
              <input
                type="text"
                style={{ display: "none" }}
                name="returnURL"
                defaultValue="https://www.theimpulsedigital.com/thank-you/"
              />

              {/* honeypot */}
              <input type="text" style={{ display: "none" }} name="aG9uZXlwb3Q" defaultValue="" tabIndex={-1} autoComplete="off" aria-hidden="true" />

              {/* Fields */}
              <label>
                Company <span style={{ color: "red" }}>*</span>
              </label>
              <input type="text" id="Company" name="Company" maxLength={200} required />

              <label>
                Name <span style={{ color: "red" }}>*</span>
              </label>
              <input type="text" id="Last_Name" name="Last Name" maxLength={80} required />

              <label>
                Email <span style={{ color: "red" }}>*</span>
              </label>
              <input type="text" ftype="email" id="Email" name="Email" maxLength={100} autoComplete="off" required />

              <label>
                Phone <span style={{ color: "red" }}>*</span>
              </label>
              <input type="text" id="Phone" name="Phone" maxLength={30} required />

              <label>Message</label>
              <textarea id="Description" name="Description" />

              {/* ✅ Zoho reCAPTCHA block (NOT react-google-recaptcha) */}
              <div className="mt-3 mb-2">
                <div
                  className="g-recaptcha"
                  data-sitekey="6LdaK0osAAAAADC8CEqZGlK1VgN2CkYB-iRXfn3y"
                  data-theme="light"
                  data-callback="rccallback1132219000000597005"
                  captcha-verified="false"
                  id="recap1132219000000597005"
                />
                <div
                  id="recapErr1132219000000597005"
                  style={{ fontSize: 12, color: "red", visibility: "hidden" }}
                >
                  Captcha validation failed. If you are not a robot then please try again.
                </div>
              </div>

              <Button
                className="w-[150px] h-[44px] group inline-flex items-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border-[#543d98] hover:border hover:border-[#543d98]"
                ref={submitBtnRef}
                type="submit"
              >
                Submit
                <img
                  src="/button-icon.svg"
                  alt="Arrow"
                  className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 pointer-events-none"
                />
              </Button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .w-120 { width: 7%; max-width: 10%; }
        .contact-list { list-style: none; padding: 0; margin: 0; }
        .contact-list li { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 20px; font-size: 16px; }
        .contact-list a, .contact-list address { color: #000000ff; text-decoration: none; line-height: 1.5; font-size: 26px; margin-bottom: 21px; font-style: normal; }
      `}</style>
    </section>
  );
};
