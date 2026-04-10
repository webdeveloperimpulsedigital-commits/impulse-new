import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import "./FAQSection.css";

type QA = { q: string; a: string };

const DEFAULT_QA: QA[] = [
  {
    q: "What does it mean that Impulse Digital is a growth partner rather than a vendor?",
    a: "As a leading digital marketing agency in Pune, it means we work as an extension of your team, aligning strategy and execution with your goals and sharing responsibility for outcomes. Collaboration, transparency, and measurable progress drive every decision."
  },
  {
    q: "How do you build a strategy that fits my brand and market?",
    a: "We begin with discovery and a performance audit, define clear objectives, and map audience journeys. From there we create a test and learn roadmap that prioritizes initiatives by impact and effort."
  },
  {
    q: "How will success be measured and reported to us?",
    a: "At our digital marketing agency in Pune, we set KPIs at the start and track visibility, engagement, conversions, and return on investment. Dashboards and review calls convert the data into actions for the next cycle."
  },
  {
    q: "Do you serve only Pune based businesses or work across regions as well?",
    a: "While we are a digital marketing company in Pune, we support clients across India and overseas. Our delivery models remain flexible so collaboration stays smooth regardless of location."
  },
  {
    q: "What services can you manage under one engagement?",
    a: "We offer performance marketing, search engine optimization, social media, content, branding, website design and development, video production, and analytics. You can choose full service or project based support."
  },
  {
    q: "How soon can we expect results from a new engagement?",
    a: "Paid campaigns can show directional signals within days once tracking is verified. Organic growth compounds over weeks and months as technical and content improvements take effect."
  },
  {
    q: "What does the process look like from first call to launch?",
    a: "We align on goals, run an audit, agree on a plan with milestones, set up tracking, and prepare creative and landing experiences. Launch follows a quality checklist so that data and delivery are reliable from day one."
  },
  {
    q: "Can you share case studies and references before we decide?",
    a: "Yes. As a transparent digital marketing company in Pune, we provide public case studies and can share additional references on request, subject to confidentiality terms."
  }
];


export const FAQSection: React.FC<{ items?: QA[] }> = ({ items = DEFAULT_QA }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="wrap-faq" data-section="faq">
      <div className="faq__header">
        

         <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
            <span className="text-[#000000]  lg:text-[34px] sm:text-[16px]">
              FAQ'S &nbsp;
            </span>
            <br />
            <span className="font-bold text-[#543d98] lg:text-[49px] md:text-[52px] sm:text-[20px]">
             Curious Much ?
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
                  <span className="faqItem__question">{item.q}</span>
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
                <img
                  alt="Messages Icon"
                  src="/messages.png"
                />
              </center>
            </div>

            <h3 className="faq__cardTitle">Do you have more questions?</h3><br></br>
            {/* <p className="faq__cardBody">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p> */}

            

                     

                      <Button
                        className="w-[180px] h-[44px] group sm:inline-flex items-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border-[#543d98] hover:border hover:border-[#543d98]"
                      >
                      
                        <a href="mail:collabs@theimpulsedigital.com"                       
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
