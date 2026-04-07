import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";
import "./FAQSection.css";

type QA = { q: string; a: string };

const DEFAULT_QA: QA[] = [
  {
    q: "What is B2B SEO service and how is it different from B2C or D2C SEO?",
    a: "B2B SEO focuses on reaching business decision-makers through targeted search visibility, high-value content, and long-term trust building. Unlike B2C or D2C SEO, which often targets quick consumer actions, B2B SEO supports longer sales cycles and complex decision-making. As a strategic B2B SEO agency, Impulse Digital prioritizes authority, credibility, and qualified B2B lead generation over short-term traffic spikes."
  },
  {
    q: "How does Impulse Digital align SEO with the B2B buyer journey?",
    a: "At Impulse Digital, we design SEO strategies around the three core stages of the B2B buyer journey: awareness, consideration, and decision. Each piece of content is mapped to a specific stage so your audience finds the right information at the right time. This structured approach helps us perform as a results-driven B2B SEO company, supporting informed decisions rather than rushed conversions."
  },
  {
    q: "How do you reach and influence multiple decision-makers?",
    a: "B2B buying decisions rarely involve just one person. We create role-specific content that speaks directly to technical heads, finance teams, procurement managers, and executive leadership. As an experienced B2B SEO agency in Mumbai, we ensure that every stakeholder finds content aligned with their priorities, strengthening trust and improving conversion potential across the funnel."
  },
  {
    q: "What is your approach to keyword research for niche B2B industries?",
    a: "Our keyword research combines qualitative industry understanding with quantitative data analysis. Instead of chasing vanity keywords, we focus on intent-driven, niche-specific phrases that signal real buying interest or problem-solving needs. This approach allows Impulse Digital to deliver SEO strategies that attract high-quality leads, not just traffic."
  },
  {
    q: "How do you establish authority and trust for B2B brands?",
    a: "Authority is built through consistency and expertise. We produce expert-led content, earn backlinks from credible industry sources, showcase real case studies, and maintain a strong digital footprint. This proven framework positions your brand as a trusted voice and reinforces the credibility expected from a leading B2B SEO company."
  },
  {
    q: "What technical elements are part of B2B SEO optimization?",
    a: "Our technical SEO framework focuses on site architecture, page speed, indexation, schema markup, and strong on-page and off-page SEO practices. We also improve navigation and ensure all key pages are fully crawlable. These foundations allow our B2B SEO agency to improve both discoverability and user experience at scale."
  },
  {
    q: "How does Impulse Digital measure success in B2B SEO campaigns?",
    a: "Success goes beyond rankings. We track organic visibility, lead quality, engagement metrics, and conversions from target segments. Using tools like GA4 and Google Tag Manager, we ensure every SEO improvement aligns with long-term revenue and growth objectives — not just surface-level metrics."
  },
  {
    q: "Can you manage SEO for global or region-specific B2B operations?",
    a: "Yes. Impulse Digital builds multilingual and multi-regional SEO strategies using correct hreflang implementation and localized content. Whether you’re targeting India, the US, or global markets, our approach ensures consistency in brand voice while adapting to regional search behavior — a key strength of our B2B SEO agency in Mumbai."
  }
];


export const FAQSection: React.FC<{ items?: QA[] }> = ({ items = DEFAULT_QA }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
   <section className="max-w-[1280px] mx-auto px-4 lg:px-8 lg:pt-20 lg:pb-20" data-section="faq">
      <div className="faq__header">
         <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
            <span className="text-[#000000]  lg:text-[34px] sm:text-[16px]">
              FAQ's &nbsp;
            </span>
            <br />
            <span className="font-bold text-[#543d98] lg:text-[49px] md:text-[52px] sm:text-[20px]">
             Curious Much?
            </span>
          </h2>
      </div>

      <div className="faq__grid">
        {/* Left: Accordion */}
        <div className="faq__list">
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div className={`faqItem ${open ? "is-open" : ""}`} key={i}>
                <button
                  className="faqItem__button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <h3 className="faqItem__question">{item.q}</h3>
                  <span className={`faqItem__icon ${open ? "minus" : "plus"}`} aria-hidden />
                </button>
                <div className="faqItem__panel" role="region">
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Card */}
        <aside className="faq__card">
          <div className="faq__cardInner">
            <div className="faq__bubble" aria-hidden>
              <center>
                <img alt="Messages Icon" src="/messages.png" />
              </center>
            </div>

            <h3 className="faq__cardTitle">Do you have more questions?</h3><br></br>
            {/* <p className="faq__cardBody">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p> */}

             <Button
                        className="w-[180px] h-[44px] group sm:inline-flex items-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border-[#543d98] hover:border hover:border-[#543d98]"
                      >
                      
                        <a href="mailto:collabs@theimpulsedigital.com"
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
    </section>
  );
};

export default FAQSection;
