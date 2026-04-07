import "./ContactSection.css";
import { useEffect, useRef, useState } from "react";

export const ContactSection = () => {
  const submitBtnRef = useRef<HTMLButtonElement | null>(null);
  const [captchaOk, setCaptchaOk] = useState(false);

  // Load reCAPTCHA script (explicit render mode)
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://www.google.com/recaptcha/api.js?render=explicit"]'
    );
    if (existing) return;

    const s = document.createElement("script");
    s.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    s.async = true;
    s.defer = true;
    document.body.appendChild(s);
  }, []);

  // Global callback called by reCAPTCHA when user solves it
  useEffect(() => {
    (window as any).rccallback1132219000000597005 = function () {
      setCaptchaOk(true);
    };
  }, []);

  // Force render captcha after script is ready (React SPA needs this)
  useEffect(() => {
    const interval = setInterval(() => {
      const grecaptcha = (window as any).grecaptcha;
      const el = document.getElementById("recap1132219000000597005");

      if (grecaptcha && el && !el.getAttribute("data-rendered")) {
        grecaptcha.render("recap1132219000000597005", {
          sitekey: "6LdaK0osAAAAADC8CEqZGlK1VgN2CkYB-iRXfn3y",
          callback: "rccallback1132219000000597005",
          "expired-callback": () => setCaptchaOk(false),
        });
        el.setAttribute("data-rendered", "true");
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!captchaOk) {
      e.preventDefault();
      alert("Please verify captcha.");
      return;
    }

    // Prevent double-submit
    if (submitBtnRef.current) submitBtnRef.current.disabled = true;
  };

  return (
    <section className="contact-section sm:pt-5 lg:pt-16" id="contact-border-sec-two">
      <div className="wrap-contact" data-section="contact-resources">
        {/* LEFT: heading + contact details */}
        <div className="contact-left0">
          <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
            <span className="text-[#ffffff] lg:text-[34px] sm:text-[16px]">Let's put</span>
            <br />
            <span className="font-bold text-[#ffffff] lg:text-[52px] md:text-[52px] sm:text-[20px]">
               Your Auto-fill to Use!
            </span>
          </h2>
          <br />
 
          {/* ✅ Hide contact list on mobile; show on desktop */}
          <ul className="contact-list pt-16 hidden lg:block">
            <img className="c-icon w-120" alt="Call Logo" src="https://www.theimpulsedigital.com/call.png" />
            <li><a href="tel:+919769285224">+91-9769285224</a></li>
  
            <img className="c-icon w-120" alt="Email Logo" src="https://www.theimpulsedigital.com/sms-1.png" />
            <li><a href="mailto:collabs@theimpulsedigital.com">collabs@theimpulsedigital.com</a></li>
 
            <img className="c-icon w-120" alt="location Logo" src="https://www.theimpulsedigital.com/location.png" />
            <li>
              <address>
                304 – 305, Chirag Infotech, Road No. 16/Z,<br />
                Ambica Nagar, Wagle Industrial Estate,<br />
                Thane, Mumbai 400604
              </address>
            </li>
          </ul>
        </div>
 
        {/* RIGHT: Zoho form embed */}
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
              {/* Zoho required hidden fields */}
              <input
                type="hidden"
                name="xnQsjsdp"
                value="129de3e9e86d28352bbc079c3d8a9d4e13b71a04b39d06e245ab5a86066e3e88"
              />
              <input
                type="hidden"
                name="xmIwtLD"
                value="3d7313f92ff3e94a2444f046709523e068b4f61545cd79a78b8a0e6ffa24c582a00869d10b70b78f61614cfd5b705d0c"
              />
              <input type="hidden" name="actionType" value="TGVhZHM=" />
              <input
                type="hidden"
                name="returnURL"
                value="https://www.theimpulsedigital.com/thank-you/"
              />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />

              {/* Honeypot */}
              <input
                type="text"
                style={{ display: "none" }}
                name="aG9uZXlwb3Q"
                defaultValue=""
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {/* Fields (names must match Zoho) */}
              <label>
                Company <span style={{ color: "red" }}>*</span>
              </label>
              <input name="Company" placeholder="Company" required />

              <label>
                Name <span style={{ color: "red" }}>*</span>
              </label>
              <input name="Last Name" placeholder="Name" required />

              <label>
                Email <span style={{ color: "red" }}>*</span>
              </label>
              <input name="Email" placeholder="Email" required />

              <label>
                Phone <span style={{ color: "red" }}>*</span>
              </label>
              <input name="Phone" placeholder="Phone" required />

              <label>Message</label>
              <textarea name="Description" placeholder="Message" />

              {/* reCAPTCHA container (rendered explicitly) */}
              <div
                id="recap1132219000000597005"
                style={{ marginTop: 12, marginBottom: 12 }}
              />

              <button
                ref={submitBtnRef}
                type="submit"
                disabled={!captchaOk}
                className="inline-flex justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#543d98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 w-[180px] h-[44px] group sm:inline-flex items-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border-[#543d98] hover:border hover:border-[#543d98]">
              
                Submit

                <img src="https://www.theimpulsedigital.com/button-icon.svg" alt="Arrow" className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 group-hover:brightness-0 group-hover:invert-0 group-hover:invert pointer-events-none"></img>
              </button>
            </form>
          </div>
        </div>
      </div>
 
      <br></br><br></br>
 
      
    </section>
  );
};
 
export default ContactSection; 