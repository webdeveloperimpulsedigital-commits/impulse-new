import { Button } from "../../../../../components/ui/button";

// ------------------- Contact & Resources Section -------------------
export const ContactFormSection = () => {

  // 👉 Redirect handler
  const handleSubmit = () => {
    setTimeout(() => {
      window.location.href = "/thank-you"; 
    }, 300);
  };

  return (
    <section
      className="contact-section1 sm:pt-5 sm:pb-16 lg:pt-16 lg:pb-16 bg-white"
      id="contact-us-sec-border"
    >
      <div
        className="max-w-[1280px] mx-auto px-0 lg:px-0 contact-container1"
        data-section="contact-resources"
      >
        {/* LEFT SECTION */}
        <div className="contact-left1">

          <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
            <span className="text-[#030019]">Let's put</span><br />
            <span className="font-bold text-[#030019] lg:text-[52px] md:text-[52px] sm:text-[20px]">
              Your Auto-fill to Use!
            </span>
          </h2>

          <br />

          <ul className="contact-list lg:pt-16 hidden lg:block md:block">
            <img className="c-icon w-120" alt="Call Logo" src="call.png" />
            <li>
              <a href="tel:+919769285224" className="text-[#030019]">+91-9769285224</a>
            </li>

            <img className="c-icon w-120" alt="Email Logo" src="sms-1.png" />
            <li>
              <a href="mailto:collabs@theimpulsedigital.com">
                collabs@theimpulsedigital.com
              </a>
            </li>

            <img className="c-icon w-120" alt="location Logo" src="location.png" />
            <li>
              <address>
                304 – 305, Chirag Infotech, Road No. 16/Z,<br />
                Ambica Nagar, Wagle Industrial Estate,<br />
                Thane, Mumbai 400604
              </address>
            </li>
          </ul>
        </div>

        {/* RIGHT SECTION / FORM */}
        <div className="contact-right-wrapper">
          <div className="contact-right">

            <form
              action="https://forms.zohopublic.in/adwait1/form/ContactUs/formperma/SbvDRXLlEyRPiHH9CreHCVdxUgmscu2nsuEbgU-EVz8/htmlRecords/submit"
              name="form"
              id="form"
              method="POST"
              acceptCharset="UTF-8"
              encType="multipart/form-data"
              target="hidden_iframe_contact"     // 👈 submit in background
              onSubmit={handleSubmit}            // 👈 redirect from React
            >
              {/* REQUIRED ZOHO HIDDEN FIELDS */}
              <input type="hidden" name="zf_referrer_name" value="" />
              <input type="hidden" name="zf_redirect_url" value="" />
              <input type="hidden" name="zc_gad" value="" />

              <label>Company Name<em>*</em></label>
              <input
                type="text"
                name="SingleLine"
                maxLength={255}
                placeholder="Company Name"
                pattern="[A-Za-z ]+"
                title="Only letters and spaces are allowed"
                required
              />

              <label>Name<em>*</em></label>
              <input
                type="text"
                name="SingleLine1"
                maxLength={255}
                placeholder="Name"
                pattern="[A-Za-z ]+"
                title="Only letters and spaces are allowed"
                required
              />

              <label>Email<em>*</em></label>
              <input
                type="email"
                name="Email"
                maxLength={255}
                placeholder="Email"
                required
              />

              <label>Phone<em>*</em></label>
              <input
                type="tel"
                name="PhoneNumber_countrycode"
                maxLength={20}
                pattern="[0-9]{10}"
                placeholder="Phone"
                required
              />

              <label>Message</label>
              <textarea
                name="MultiLine"
                maxLength={65535}
                placeholder="Message"
              />

              <Button className="w-[150px] h-[44px] group inline-flex items-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border-[#543d98] hover:border hover:border-[#543d98]">
                Submit
                <img
                  src="/button-icon.svg"
                  alt="Arrow"
                  className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 pointer-events-none"
                />
              </Button>

            </form>

            {/* 👉 BACKGROUND IFRAME FOR ZOHO SUBMISSION */}
            <iframe
              name="hidden_iframe_contact"
              style={{ display: "none" }}
              title="hidden_iframe_contact"
            />
          </div>
        </div>
      </div>

      {/* INLINE CSS FOR CONTACT LIST */}
      <style>{`
        .contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .contact-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 20px;
          font-size: 16px;
        }

        .contact-list a,
        .contact-list address {
          color: #000000ff;
          text-decoration: none;
          line-height: 1.5;
          font-size: 26px;
          margin-bottom: 21px;
          font-style: normal;
        }

        .contact-list a:hover {
          color: white;
        }
      `}</style>
    </section>
  );
};
