import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import "./FAQSection.css";

type QA = { q: string; a: string };

const DEFAULT_QA: QA[] = [
  {
    q: "What is a digital marketing agency?",
    a: "A digital marketing agency helps businesses grow online using data-driven strategies such as performance advertising, SEO, social media marketing, content, automation, and analytics. At Impulse Digital, every solution is tailored to your business goals, audience, and budget not generic packages."
  },
  {
    q: "What are the benefits of hiring a digital marketing agency to leverage your business?",
    a: "By partnering with a digital marketing agency in Mumbai like Impulse Digital, you gain access to senior-level expertise, faster execution, cross-channel strategy, scalable creativity, and measurable performance without the cost and complexity of building a large in-house team."
  },
  {
    q: "What is the role of a result-oriented digital marketing agency in elevating your business?",
    a: "A result-oriented digital marketing company in Mumbai aligns every channel with clear KPIs. At Impulse Digital, we continuously test, optimize budgets in real time, and focus on outcomes that matter leads, revenue, efficiency, and long-term growth."
  },
  {
    q: "What are the top services an agency should offer for your business?",
    a: [
      "A leading digital marketing company in Mumbai should offer:",
      "Agentic AI",
      "Digital Strategy & Growth Planning",
      "Performance Marketing (Google Ads, Meta, LinkedIn)",
      "SEO (Technical, On-page & Content-led)",
      "Social Media & Content Marketing",
      "Marketing Automation & CRM Integration",
      "Analytics, Tracking & Attribution",
      "Impulse Digital delivers all of these under one unified growth framework."
    ]
  },
  {
    q: "What are the advantages of hiring a leading digital marketing agency?",
    a: "A proven digital marketing agency in Mumbai brings tested playbooks, specialized teams, enterprise-grade tools, faster time-to-value, and a lower total cost of ownership. With Impulse Digital, you also get transparent reporting and direct access to decision-makers."
  },
  {
    q: "Can I expect instant results after hiring an agency?",
    a: "Some channels show quick lifts (e.g., performance ads). Others compound over time (e.g., SEO). A balanced mix delivers both short-term and long-term ROI."
  },
  {
    q: "Is it possible to measure the efficacy of your digital marketing agency’s strategies?",
    a: "Yes. A reliable digital marketing agency in Mumbai sets clear KPIs, implements proper tracking, defines conversion events, and uses attribution models. At Impulse Digital, performance is reviewed regularly and communicated clearly, no vanity metrics."
  },
  {
    q: "What is the budget to hire a digital marketing agency for your business?",
    a: "The cost of hiring a digital marketing agency in Mumbai depends on your scope, industry, business size, and growth goals. Typically, budgets range from ₹70,000 to ₹2,00,000 per month for a professional agency. We recommend discussing requirements directly with Impulse Digital to design a cost-effective, results-focused plan."
  },
  {
    q: "Before signing up with an agency, should I consider geographic factors like location?",
    a: "No, one does not need to consider the agency's location, as digital marketing services are provided online and are certainly not restricted to physical presence or areas. Anyone can easily receive top digital marketing services from Mumbai to anywhere in the world. However, it is essential to consider the following factors: the agency's expertise in your domain, industry alignment, experience, and facilities they provide for online operations to ensure a smooth working process."
  },
  {
    q: "What skills are necessary for an agency before onboarding?",
    a: "When onboarding and deciding on an agency, it is essential to prioritize domain expertise, transparent communication that helps build trust, creative design and marketing strategy, and keeping a track record of quality work. The team of people coordinating should have qualities of problem-solving with efficiency. This shows that the agency is highly dependable and trustworthy."
  }
];



export const FAQSection: React.FC<{ items?: QA[] }> = ({ items = DEFAULT_QA }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="wrap-faq" data-section="faq">
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
                  src="messages.png"
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
