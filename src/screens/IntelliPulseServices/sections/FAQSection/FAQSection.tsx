import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import "./FAQSection.css";

type QA = { q: string; a: string };

const DEFAULT_QA: QA[] = [
  {
    q: "What exactly is Intelli Pulse?",
    a: "Intelli Pulse is Impulse Digital’s AI-driven social and market intelligence solution that unifies digital signals — conversations, reviews, search trends, and competitor activity — to deliver actionable insights and recommendations."
  },
  {
    q: "How does Intelli Pulse collect and analyse data?",
    a: "It gathers information from multiple sources such as social media, eCommerce reviews, search data, community discussions, and competitor communication. AI frameworks then process this data to decode trends, sentiment, triggers, and opportunities."
  },
  {
    q: "Can Intelli Pulse work for small and mid-sized businesses?",
    a: "Yes. Intelli Pulse is modular and scalable, making it suitable for startups, growing brands, and large enterprises. We customise the intelligence framework based on your category and business goals."
  },
  {
    q: "Do we need a technical team to use Intelli Pulse?",
    a: "No. We deliver insights in clear dashboards, reports, and summaries that are easy to interpret. Our team manages all technical complexity at the backend so you can focus on decisions."
  },
  {
    q: "What kind of insights can Intelli Pulse provide?",
    a: "It uncovers emerging trends, consumer attitudes, sentiment shifts, purchase triggers, barriers, competitor narratives, influencer effectiveness, and category opportunities — all directly mapped to business actions."
  },
  {
    q: "How frequently do we receive insights or reports?",
    a: "You can choose project-based, monthly, quarterly, or always-on models. We offer dashboards, real-time alerts, deep-dive studies, and scheduled reports depending on your need and cadence."
  },
  {
    q: "Does Intelli Pulse integrate with our existing tools?",
    a: "Yes. We export insights, dashboards, and datasets in formats like CSV, Excel, and PDF, and support integrations as per your existing ecosystem requirements."
  },
  {
    q: "Is the data collection process compliant and secure?",
    a: "Absolutely. Intelli Pulse uses GDPR-compliant systems, ethical data listening practices, and secure pipelines to ensure privacy, safety, and complete confidentiality."
  },
  {
    q: "Can Intelli Pulse help with campaign and influencer evaluation?",
    a: "Yes. It measures campaign resonance, sentiment before and after activation, engagement quality, influencer relevance, and total impact — ensuring smarter future optimisation."
  },
  {
    q: "How long does a typical Intelli Pulse project take?",
    a: "Timelines vary based on depth and scope. Rapid studies can be completed in a few days, while deeper category or U&A studies take 2–4 weeks. Always-on monitoring continues throughout the engagement."
  }
];


export const FAQSection: React.FC<{ items?: QA[] }> = ({ items = DEFAULT_QA }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
   <section className="max-w-[1280px] mx-auto px-4 lg:px-8 lg:pt-20 lg:pb-20" data-section="faq">
       <h2 className="text-center [font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight mx-auto">
  <span className="text-[#000000] lg:text-[34px] sm:text-[16px]">
    FAQ's &nbsp;
  </span>
  <br />
  <span className="font-bold text-[#543d98] lg:text-[49px] md:text-[52px] sm:text-[20px]">
    Curious Much?
  </span>
</h2>


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
