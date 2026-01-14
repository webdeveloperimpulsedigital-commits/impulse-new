import "./ContactSection.css";
import { Button } from "../../../../components/ui/button";
import { useRef } from "react"; 
export const ContactSection = () => {
  const submitBtnRef = useRef<HTMLButtonElement | null>(null);

  const validate = (form: HTMLFormElement) => {
    const company = (form.elements.namedItem("Company") as HTMLInputElement | null)?.value?.trim() || "";
    const lastName = (form.elements.namedItem("Last Name") as HTMLInputElement | null)?.value?.trim() || "";
    const email = (form.elements.namedItem("Email") as HTMLInputElement | null)?.value?.trim() || "";
    const phone = (form.elements.namedItem("Phone") as HTMLInputElement | null)?.value?.trim() || "";

    if (!company) return { ok: false, msg: "Company cannot be empty", focus: "Company" };
    if (!lastName) return { ok: false, msg: "Name cannot be empty", focus: "Last Name" };
    if (!email) return { ok: false, msg: "Email cannot be empty", focus: "Email" };
    if (!phone) return { ok: false, msg: "Phone cannot be empty", focus: "Phone" };

    const atpos = email.indexOf("@");
    const dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
      return { ok: false, msg: "Please enter a valid email address.", focus: "Email" };
    }

    return { ok: true as const };
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;

    const res = validate(form);
    if (!res.ok) {
      e.preventDefault();
      alert(res.msg);
      (form.elements.namedItem(res.focus) as HTMLElement | null)?.focus?.();
      return false;
    }

    // prevent double submit
    if (submitBtnRef.current) submitBtnRef.current.setAttribute("disabled", "true");
    return true;
  };

  return (
    <section className="contact-section sm:pt-5 lg:pt-16" id="contact-border-sec-two">
      <div className="wrap-contact" data-section="contact-resources">
        {/* LEFT SECTION */}
        <div className="contact-left0">

          <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
            <span className="text-[#030019]">Let's put</span><br />
            <span className="font-bold text-[#ffffff] lg:text-[52px] md:text-[52px] sm:text-[20px]">
              Your Auto-fill to Use!
            </span>
          </h2>

          <br />

          <ul className="contact-list lg:pt-16 hidden lg:block md:block">
            <img className="c-icon w-120" alt="Call Logo" src="https://www.theimpulsedigital.com/call.png" />
            <li>
              <a href="tel:+919769285224" className="text-[#030019]">+91-9769285224</a>
            </li>

            <img className="c-icon w-120" alt="Email Logo" src="https://www.theimpulsedigital.com/sms-1.png" />
            <li>
              <a href="mailto:collabs@theimpulsedigital.com">
                collabs@theimpulsedigital.com
              </a>
            </li>

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

        {/* RIGHT */}
        <div className="contact-right-wrapper">
          <div className="contact-right">
            <form
              id="webform1132219000000597005"
              action="https://crm.zoho.in/crm/WebToLeadForm"
              name="WebToLeads1132219000000597005"
              method="POST"
              acceptCharset="UTF-8"
              onSubmit={onSubmit}
            >
              {/* === Zoho tokens (same style/type as snippet) === */}
              <input
                type="text"
                style={{ display: "none" }}
                name="xnQsjsdp"
                defaultValue="468c2054aaaf62a4414a75a876f5ad9783a173cddffaf995b01164a96dbe5778"
              />
              <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
              <input
                type="text"
                style={{ display: "none" }}
                name="xmIwtLD"
                defaultValue="5013360728d83b3093448410d551b23964e5a72470334550fc1291dcba72784e3e75ce4484959f2ed511fae378c0ce77"
              />
              <input type="text" style={{ display: "none" }} name="actionType" defaultValue="TGVhZHM=" />
              <input
                type="text"
                style={{ display: "none" }}
                name="returnURL"
                defaultValue="https://www.theimpulsedigital.com/thank-you/"
              />

              {/* honeypot EXACT behavior */}
              <input
                type="text"
                style={{ display: "none" }}
                name="aG9uZXlwb3Q"
                defaultValue=""
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {/* === Fields exactly like Zoho === */}
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
              <input type="text" id="Email" name="Email" maxLength={100} autoComplete="off" required />

              <label>
                Phone <span style={{ color: "red" }}>*</span>
              </label>
              <input type="text" id="Phone" name="Phone" maxLength={30} required />

              <label>Message</label>
              <textarea id="Description" name="Description" />

              

              <Button className="w-[150px] h-[44px] group inline-flex items-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border-[#543d98] hover:border hover:border-[#543d98]" 
              ref={submitBtnRef} type="submit">
                Submit
                <img
                  src="/button-icon.svg"
                  alt="Arrow"
                  className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 pointer-events-none"
                />
              </Button>
            </form>

            {/* IMPORTANT:
              Zoho Analytics script inside React may not execute reliably.
              It is not required for lead creation. Add it globally in index.html if needed.
            */}
          </div>
        </div>
      </div>

         
    </section>
  );
};
export default ContactSection;