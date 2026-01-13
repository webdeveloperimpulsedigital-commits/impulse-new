import { useRef } from "react";
import { Button } from "../../../../../components/ui/button";

export const ContactFormSection = () => {
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
    <section className="contact-section1 sm:pt-5 sm:pb-16 lg:pt-16 lg:pb-16 bg-white" id="contact-us-sec-border">
      <div className="max-w-[1280px] mx-auto px-0 lg:px-0 contact-container1">
        {/* LEFT */}
        <div className="contact-left1">
          <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
            <span className="text-[#030019]">Let's put</span>
            <br />
            <span className="font-bold text-[#030019] lg:text-[52px] md:text-[52px] sm:text-[20px]">
              Your Auto-fill to Use!
            </span>
          </h2>
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

              <Button
                type="submit"
                ref={submitBtnRef}
                className="w-[150px] h-[44px] group inline-flex items-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border-[#543d98] hover:border hover:border-[#543d98]"
              >
                Submit
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
