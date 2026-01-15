import { useEffect, useRef, useState } from "react";

export const ContactFormSection = () => {
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
                className="w-[150px] h-[44px] rounded-xl bg-[#543d98] text-white"
              >
                Submit
              </button>
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
