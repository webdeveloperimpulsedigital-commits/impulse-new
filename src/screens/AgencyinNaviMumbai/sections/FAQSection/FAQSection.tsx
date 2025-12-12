import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import "./FAQSection.css";

type QA = { q: string; a: string };

const DEFAULT_QA: QA[] = [
  {
    q: "What does Impulse Digital do for brands in Navi Mumbai?",
    a: "We plan and execute digital marketing that aligns with business goals. Our team blends strategy, creative, media, web, content, and analytics to build visibility, engagement, and conversions."
  },
  {
    q: "How do you create a strategy that matches our goals and timelines?",
    a: "We begin with discovery and an audit of your market and current performance, define clear objectives, and build a roadmap that prioritizes actions by expected impact and required effort."
  },
  {
    q: "Which services can you manage within one engagement?",
    a: "We manage performance marketing, search engine optimization, social media, content creation, branding, website design and development, video production, and analytics under one coordinated plan."
  },
  {
    q: "Do you work only with brands in Navi Mumbai or across regions as well?",
    a: "We are based in Navi Mumbai and partner with clients across India and overseas. Collaboration is supported through shared workspaces, regular reviews, and clear points of contact."
  },
  {
    q: "How do you measure success and report progress?",
    a: "Success is defined through agreed KPIs such as reach, engagement, qualified leads, sales, and return on investment. Dashboards and review calls translate data into actions for the next cycle."
  },
  {
    q: "How quickly can we expect results after launch?",
    a: "Paid campaigns can show early signals within days once tracking is verified, while organic growth builds over weeks and months as technical fixes, content, and community programs take effect."
  },
  {
    q: "Will you handle content creation and production or do we need other partners?",
    a: "Our in-house teams produce copy, design, and video so execution stays consistent with strategy. We can also collaborate with your existing partners where preferred."
  },
  {
    q: "Can you share case studies and learning resources before we decide?",
    a: "Yes. Public case studies and knowledge resources are available, and additional references can be shared on request subject to confidentiality. We can outline expected benchmarks for similar categories."
  },
  {
    q: "How do you ensure brand safety and data privacy?",
    a: "We request only the access required, follow your privacy and compliance policies, and document permissions in the agreement. Creative and placements follow platform guidelines and category norms."
  },
  {
    q: "How do we get a proposal tailored to our needs?",
    a: "Share your objectives, timelines, target markets, and any past reports through the contact form. We will set a discovery call and return with a plan that includes scope, milestones, and measurement."
  }
];


export const FAQSection: React.FC<{ items?: QA[] }> = ({ items = DEFAULT_QA }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="wrap-faq" data-section="faq">
      <div className="faq__header">
        

         <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
            <span className="text-[#000000]  lg:text-[34px] sm:text-[16px]">
              FAQ'S
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
