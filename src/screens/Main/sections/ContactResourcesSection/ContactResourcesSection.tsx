import "./ContactResourcesSection.css";
import { useEffect, useRef } from "react";

export const ContactResourcesSection = () => {
  const submitBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://www.google.com/recaptcha/api.js"]'
    );
    if (existing) return;
    const s = document.createElement("script");
    s.src = "https://www.google.com/recaptcha/api.js";
    s.async = true;
    s.defer = true;
    document.body.appendChild(s);
  }, []);

  useEffect(() => {
    (window as any).rccallback1132219000000597005 = function () {
      const recap = document.getElementById("recap1132219000000597005");
      if (recap) recap.setAttribute("captcha-verified", "true");
    };

    (window as any).reCaptchaAlert1132219000000597005 = function () {
      const recap = document.getElementById("recap1132219000000597005");
      if (recap && recap.getAttribute("captcha-verified") === "false") {
        alert("Please verify captcha.");
        return false;
      }
      return true;
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const ok = (window as any).reCaptchaAlert1132219000000597005();
    if (!ok) {
      e.preventDefault();
      return;
    }
    if (submitBtnRef.current) submitBtnRef.current.disabled = true;
  };
  return (
    <section className="contact-section sm:pt-5 lg:pt-16" id="contact-border-sec-two">
      <div className="wrap-contact" data-section="contact-resources">
        {/* LEFT SECTION */}
        <div className="contact-left0">
          <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
            <span className="text-[#030019]">Let's put</span>
            <br />
            <span className="font-bold text-[#ffffff] lg:text-[52px] md:text-[52px] sm:text-[20px]">
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
                      action="https://www.theimpulsedigital.com/api/zoho-lead-gateway.php"
                      name="WebToLeads1132219000000597005"
                      method="POST"
                      acceptCharset="UTF-8"
                      onSubmit={handleSubmit}
                    >
                      <input type="hidden" name="xnQsjsdp" value="129de3e9e86d28352bbc079c3d8a9d4e13b71a04b39d06e245ab5a86066e3e88" />
                      <input type="hidden" name="xmIwtLD" value="3d7313f92ff3e94a2444f046709523e068b4f61545cd79a78b8a0e6ffa24c582a00869d10b70b78f61614cfd5b705d0c" />
                      <input type="hidden" name="actionType" value="TGVhZHM=" />
                      <input type="hidden" name="returnURL" value="https://www.theimpulsedigital.com/thank-you/" />
                      <input type="hidden" name="zc_gad" id="zc_gad" value="" />

                      {/* honeypot */}
                      <input type="text" style={{ display: "none" }} name="aG9uZXlwb3Q" defaultValue="" />

                      {/* MUST match these names */}
                      <input name="Company" placeholder="Company" required />
                      <input name="Last Name" placeholder="Name" required />
                      <input name="Email" placeholder="Email" required />
                      <input name="Phone" placeholder="Phone" required />
                      <textarea name="Description" placeholder="Message" />

                      <div
                        className="g-recaptcha"
                        data-sitekey="6LdaK0osAAAAADC8CEqZGlK1VgN2CkYB-iRXfn3y"
                        data-callback="rccallback1132219000000597005"
                        captcha-verified="false"
                        id="recap1132219000000597005"
                      />

                      <button ref={submitBtnRef} type="submit">
                        Submit
                      </button>
               </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactResourcesSection;
