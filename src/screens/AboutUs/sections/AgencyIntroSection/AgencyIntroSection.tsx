import React from "react";

export const AgencyIntroSection = (): JSX.Element => {
  const beliefs = [
    "Marketing should feel clear, not chaotic.",
    "Execution should feel reliable, not reactive.",
    "Results should be the conversation, not activity.",
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-28" id="abt-sec-border">
      <div className="mx-auto px-6 lg:px-10">
        {/* HERO */}
        <header className="relative overflow-hidden rounded-[32px] border border-[#ece8ff] bg-[#563d99] shadow-[0_22px_55px_rgba(15,23,42,0.18)]">
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/15" />
          <div className="relative px-6 py-12 md:px-12 md:py-16 lg:px-14">
            <h1 className="[font-family:'DM_Sans',Helvetica] font-extrabold text-white text-[30px] md:text-[54px] leading-[1.05]">
              Marketing that doesn’t need babysitting.
            </h1>
            <p className="text-white/85 text-[15px] md:text-[20px] leading-[1.7] mt-5 max-w-3xl">
              We take full ownership of your marketing, then prove it with outcomes.
            </p>
          </div>
        </header>

        {/* CONTENT */}
        <div className="mt-12 lg:mt-16 space-y-8">
          {/* CARD 1 */}
          <section className="rounded-[28px] border border-[#ece8ff] bg-white p-6 md:p-10 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
            <h2 className="text-[#543d98] font-bold text-[22px] md:text-[34px] leading-[1.15]">
              What We’re Here to Solve
            </h2>

            <div className="mt-5 space-y-4 text-[#030019] text-[14px] md:text-[18px] leading-[1.85]">
              <p>
                Impulse Digital is a marketing agency built for brands that want marketing to run
                smoothly and actually move the needle.{" "}
                <span className="font-semibold">Not louder. Not busier. Better.</span>
              </p>
              <p>
                We work with teams who would rather spend their time building the business than
                chasing vendors, reviewing endless drafts, or sitting in meetings that do not
                change decisions.
              </p>
              <p>
                Increasingly, that also means building systems where technology and AI reduce
                friction, not add complexity.
              </p>
            </div>
          </section>

          {/* CARD 2 */}
          <section className="rounded-[28px] border border-[#ece8ff] bg-[#fbfaff] p-6 md:p-10 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
            <h2 className="text-[#543d98] font-bold text-[22px] md:text-[34px] leading-[1.15]">
              What We Actually Believe
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {beliefs.map((t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-[#ece8ff] bg-white p-5 shadow-[0_10px_25px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f0ebff] text-[#543d98] font-bold">
                      ✓
                    </span>
                    <p className="text-[#030019] text-[14px] md:text-[16px] leading-[1.6] font-medium">
                      {t}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4 text-slate-700 text-[14px] md:text-[18px] leading-[1.85]">
              <p>
                We believe technology should remove manual effort, surface better decisions, and
                let humans focus on what actually matters.
              </p>
              <p>
                If we are your agency, marketing should stop being a daily burden for your
                leadership team.
              </p>
            </div>
          </section>

          {/* CARD 3 */}
          <section className="rounded-[28px] border border-[#ece8ff] bg-white p-6 md:p-10 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
            <h2 className="text-[#543d98] font-bold text-[22px] md:text-[34px] leading-[1.15]">
              What Working With Us Feels Like
            </h2>

            <div className="mt-5 space-y-4 text-[#030019] text-[14px] md:text-[18px] leading-[1.85]">
              <p>
                You get fewer follow-ups, fewer loose ends, and fewer “quick calls” to fix
                avoidable problems.
              </p>
              <p>
                You get strategy that shows up before the work does. You get content and campaigns
                that are built to perform, not just exist.
              </p>
              <p>
                Behind the scenes, we use data, automation, and AI-led systems to make marketing
                faster, smarter, and more consistent.
              </p>
              <p className="font-semibold text-[#030019]">
                Marketing becomes a system, not a scramble.
              </p>
            </div>
          </section>

          {/* CARD 4 */}
          <section className="rounded-[28px] border border-[#ece8ff] bg-[#fbfaff] p-6 md:p-10 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
            <h2 className="text-[#543d98] font-bold text-[22px] md:text-[34px] leading-[1.15]">
              The Humans Behind the Work
            </h2>

            <div className="mt-5 space-y-4 text-[#030019] text-[14px] md:text-[18px] leading-[1.85]">
              <p>We are led by a senior team that stays close to the work.</p>
              <p>
                Strategy is not a one-time deck. Creative is not “just designs.” Execution is not
                “figure it out.”
              </p>
              <p>
                We combine human judgement with technology-driven workflows, so clients do not
                have to manage what they have already outsourced.
              </p>
            </div>
          </section>
        </div>

        {/* CTA */}
        <section className="mt-12 lg:mt-16 border-t border-[#ece8ff] pt-12">
          <div className="relative w-full overflow-hidden rounded-[36px] bg-gradient-to-r from-[#4b378a] to-[#5a42a1] px-8 py-14 md:px-14 md:py-18 shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
            <div className="absolute inset-0 bg-gradient-to-br from-black/15 via-transparent to-black/20" />
            <div className="relative max-w-4xl">
              <h2 className="text-white font-extrabold text-[26px] md:text-[44px] leading-[1.1]">
                Who This Works Best For
              </h2>

              <div className="mt-6 space-y-4 text-white/90 text-[14px] md:text-[18px] leading-[1.75]">
                <p>
                  If you want a partner who can simplify complexity and still deliver serious
                  outcomes, we will work well together.
                </p>
                <p className="font-semibold text-white">
                  If you need an agency that requires constant steering, we are not it.
                </p>
              </div>

              <p className="mt-10 text-white font-bold text-[18px] md:text-[26px] leading-[1.2]">
                You focus on the business.
                <br />
                We make sure marketing keeps up.
              </p>

              <div className="mt-8">
                <a
    href="mailto:collabs@theimpulsedigital.com"
    className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-[14px] md:text-[15px] font-semibold text-[#3d2a73] shadow-md hover:opacity-90 transition"
  >
    Start the conversation
  </a>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </section>
  );
};

export default AgencyIntroSection;
