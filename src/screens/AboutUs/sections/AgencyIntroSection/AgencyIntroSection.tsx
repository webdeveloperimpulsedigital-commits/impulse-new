import React from "react";

export const AgencyIntroSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16 lg:py-28" id="abt-sec-border">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 space-y-20 lg:space-y-28">
        {/* ================= HERO ================= */}
       <section className="relative overflow-hidden rounded-[32px] border border-[#ece8ff] bg-[#563d99] shadow-[0_22px_55px_rgba(15,23,42,0.18)]">
  
  {/* SUBTLE GRADIENT FOR DEPTH */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/15" />

  {/* CONTENT */}
  <div className="relative px-6 py-10 md:px-12 md:py-14 lg:px-16">
    <p className="text-white/70 text-[12px] tracking-[0.18em] uppercase mb-3">
      ABOUT US
    </p>

    <h1 className="[font-family:'DM_Sans',Helvetica] font-extrabold text-white text-[30px] md:text-[54px] leading-[1.05] max-w-3xl">
      Marketing that doesn’t need babysitting.
    </h1>

    <p className="text-white/85 text-[15px] md:text-[20px] leading-[1.6] mt-4 max-w-3xl">
      We take full ownership of your marketing, then prove it with outcomes.
    </p>
  </div>
</section>


        {/* ============ WHAT WE SOLVE ============ */}
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          {/* Text */}
          <div className="space-y-4">
            <h2 className="text-[#543d98] font-bold text-[22px] md:text-[34px] leading-[1.15]">
              What We’re Here to Solve
            </h2>

            <div className="space-y-4 text-[#030019] text-[14px] md:text-[18px] leading-[1.75]">
              <p>
                Impulse Digital is a marketing agency built for brands that want marketing
                to run smoothly and actually move the needle.{" "}
                <span className="font-semibold">Not louder. Not busier. Better.</span>
              </p>

              <p>
                We work with teams who would rather spend their time building the business
                than chasing vendors, reviewing endless drafts, or sitting in meetings that
                do not change decisions.
              </p>

              <p>
                Increasingly, that also means building systems where technology and AI reduce
                friction, not add complexity.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl border border-[#ece8ff] bg-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
            <div className="aspect-[16/10]">
              <img
                src="/Career Page Images-14.png"
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
          </div>
        </section>

        {/* ============ BELIEFS ============ */}
        <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
          {/* Left image */}
          <div className="relative overflow-hidden rounded-3xl border border-[#ece8ff] bg-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.10)] order-2 lg:order-1">
            <div className="aspect-[16/11]">
              <img
                src="/Career Page Images-03.png"
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
          </div>

          {/* Right text */}
          <div className="space-y-5 order-1 lg:order-2">
            <h2 className="text-[#543d98] font-bold text-[22px] md:text-[34px] leading-[1.15]">
              What We Actually Believe
            </h2>

            <div className="space-y-3">
              {[
                "Marketing should feel clear, not chaotic.",
                "Execution should feel reliable, not reactive.",
                "Results should be the conversation, not activity.",
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-start gap-3 rounded-2xl border border-[#ece8ff] bg-white p-4 shadow-[0_10px_25px_rgba(15,23,42,0.05)]"
                >
                  <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f0ebff] text-[#543d98] font-bold">
                    ✓
                  </span>
                  <p className="text-[#030019] text-[14px] md:text-[18px] leading-[1.7]">
                    {t}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-slate-700 text-[14px] md:text-[18px] leading-[1.75]">
              <p>
                We believe technology should remove manual effort, surface better decisions,
                and let humans focus on what actually matters.
              </p>
              <p>
                If we are your agency, marketing should stop being a daily burden for your
                leadership team.
              </p>
            </div>
          </div>
        </section>

        {/* ============ EXPERIENCE ============ */}
        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          {/* Text */}
          <div className="space-y-4">
            <h2 className="text-[#543d98] font-bold text-[22px] md:text-[34px] leading-[1.15]">
              What Working With Us Feels Like
            </h2>

            <div className="space-y-4 text-[#030019] text-[14px] md:text-[18px] leading-[1.75]">
              <p>
                You get fewer follow-ups, fewer loose ends, and fewer “quick calls” to fix
                avoidable problems.
              </p>

              <p>
                You get strategy that shows up before the work does. You get content and
                campaigns that are built to perform, not just exist.
              </p>

              <p>
                Behind the scenes, we use data, automation, and AI-led systems to make marketing
                faster, smarter, and more consistent.
              </p>

              <p className="font-semibold text-[#030019]">
                Marketing becomes a system, not a scramble.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl border border-[#ece8ff] bg-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
            <div className="aspect-[16/11]">
              <img
                src="/Career Page Images-15.png"
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
          </div>
        </section>

        {/* ============ HUMANS ============ */}
        <section className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-4">
            <h2 className="text-[#543d98] font-bold text-[22px] md:text-[34px] leading-[1.15]">
              The Humans Behind the Work
            </h2>

            <div className="space-y-4 text-[#030019] text-[14px] md:text-[18px] leading-[1.75]">
              <p>We are led by a senior team that stays close to the work.</p>
              <p>
                Strategy is not a one-time deck. Creative is not “just designs.” Execution is not
                “figure it out.”
              </p>
              <p>
                We combine human judgement with technology-driven workflows, so clients do not have
                to manage what they have already outsourced.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#ece8ff] bg-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
            <div className="aspect-[16/12]">
              <img
                src="/Artboard 2 copy 21.jpg"
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
          </div>
        </section>

        {/* ============ WHO THIS IS FOR ============ */}
        <section className="border-t border-[#ece8ff] pt-14">
  <div className="max-w-4xl space-y-6">
    <h2 className="text-[#543d98] font-bold text-[22px] md:text-[34px] leading-[1.15]">
      Who This Works Best For
    </h2>

    <div className="space-y-4 text-[#030019] text-[14px] md:text-[18px] leading-[1.75]">
      <p>
        If you want a partner who can simplify complexity and still deliver serious
        outcomes, we will work well together.
      </p>
      <p>
        If you need an agency that requires constant steering,{" "}
        <span className="font-semibold">we are not it.</span>
      </p>
    </div>

    {/* CTA STRIP */}
    <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between rounded-3xl border border-[#ece8ff] bg-[#f8f5ff] px-6 py-6">
      <p className="text-[16px] md:text-[20px] font-medium text-[#030019] leading-[1.4]">
        You focus on the business.{" "}
        <span className="text-[#543d98] font-bold">
          We make sure marketing keeps up.
        </span>
      </p>

      <a
        href="#contact"
        className="inline-flex items-center justify-center rounded-full bg-[#543d98] px-6 py-3 text-[14px] md:text-[15px] font-semibold text-white shadow-md hover:bg-[#4a338b] transition"
      >
        Start the conversation
      </a>
    </div>
  </div>
</section>

      </div>
    </section>
  );
};
