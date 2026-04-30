import "./FAQSection.css";
import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import type { FAQItem } from "../../../../data/faqs";

type FAQSectionProps = {
  faqs: FAQItem[];
};

export const FAQSection = ({ faqs }: FAQSectionProps): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = faqs.map((faq) => ({
    q: faq.question,
    a: faq.answer,
  }));

  if (!items.length) return <></>;

  return (
    <section
      className="w-full bg-white"
      data-section="faq"
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 lg:pt-20 lg:pb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-center text-[#543d98] mb-12">
          <span className="text-black">Questions</span><br />
          We hear from growth leaders
        </h2>

        <div className="faq__grid">
          <div className="faq__list">
            {items.map((item, i) => {
              const open = openIndex === i;

              return (
                <div className={`faqItem ${open ? "is-open" : ""}`} key={i}>
                  <button
                    type="button"
                    className="faqItem__button"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : i)}
                  >
                    <h3 className="faqItem__question">{item.q}</h3>
                    <span
                      className={`faqItem__icon ${open ? "minus" : "plus"}`}
                      aria-hidden
                    />
                  </button>

                  <div className="faqItem__panel" role="region">
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <aside className="faq__card">
            <div className="faq__cardInner">
              <div className="faq__bubble" aria-hidden>
                <center>
                  <img alt="Messages Icon" src="/messages.png" />
                </center>
              </div>

              <h3 className="faq__cardTitle">Do you have more questions?</h3>
              <br />

              <Button className="w-[180px] h-[44px] group sm:inline-flex items-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border-[#543d98] hover:border hover:border-[#543d98]">
                <a
                  href="mailto:collabs@theimpulsedigital.com"
                  className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm md:text-base group-hover:text-[#543d98] transition-colors duration-300"
                >
                  Hit a Direct Mail
                </a>
                <img
                  src="/button-icon.svg"
                  alt="Arrow"
                  className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 group-hover:brightness-0 group-hover:invert-0 group-hover:invert pointer-events-none"
                />
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};