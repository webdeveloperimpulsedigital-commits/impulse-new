import React from "react";
import { BrainCircuit } from "lucide-react";

export const AgencyIntroSection = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">

      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-purple-300 blur-3xl opacity-30 rounded-full" />

      <div className="max-w-7xl mx-auto px-6">

       {/* HERO */}
<div className="grid md:grid-cols-2 gap-12 items-center rounded-[36px] bg-gradient-to-r from-[#4b378a] to-[#5a42a1] p-12 shadow-xl">

  <div>
    <h1 className="text-white font-extrabold text-[34px] md:text-[56px] leading-tight">
      Marketing that doesn’t need babysitting.
    </h1>

    <p className="mt-5 text-white/90 text-lg">
      We take full ownership of your marketing, then prove it with outcomes.
    </p>
  </div>

  <video
    className="rounded-3xl shadow-xl w-full h-auto"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/career-new.mp4" type="video/mp4" />
  </video>

</div>


        {/* SOLVE */}
        <div className="grid md:grid-cols-2 gap-16 items-center mt-28">

          <div>
            <h2 className="text-[#543d98] text-3xl font-bold">
              What We’re Here to Solve
            </h2>

            <p className="text-slate-700 mt-4">
              Impulse Digital is a marketing agency built for brands that want marketing to run smoothly and actually move the needle.
            </p>

            <p className="font-semibold mt-4">
              Not louder. Not busier. Better.
            </p>

            <p className="text-slate-700 mt-4">
              We work with teams who would rather spend their time building the business than chasing vendors, reviewing endless drafts, or sitting in meetings that do not change decisions.
            </p>

            <p className="text-slate-700 mt-4">
              Increasingly, that also means building systems where technology and AI reduce friction, not add complexity.
            </p>
          </div>

          <img
            src="/team-two.jpg"
            className="rounded-3xl shadow-xl"
            alt=""
          />

        </div>

        {/* BELIEFS */}
        <div className="mt-28">

          <h2 className="text-[#543d98] text-3xl font-bold mb-10">
            What We Actually Believe
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Marketing should feel clear, not chaotic.",
              "Execution should feel reliable, not reactive.",
              "Results should be the conversation, not activity."
            ].map((b) => (
              <div key={b} className="p-6 rounded-2xl border bg-[#fbfaff]">
                <div className="h-10 w-10 mb-4 rounded-xl bg-gradient-to-br from-[#543d98] to-[#7c63d6]" />
                <p className="font-medium">{b}</p>
              </div>
            ))}

          </div>

          <p className="text-slate-700 mt-8">
            We believe technology should remove manual effort, surface better decisions, and let humans focus on what actually matters.
          </p>

          <p className="text-slate-700 mt-4">
            If we are your agency, marketing should stop being a daily burden for your leadership team.
          </p>

        </div>

        {/* FEELS */}
        <div className="grid md:grid-cols-2 gap-16 items-center mt-28">

          <div>
            <h2 className="text-[#543d98] text-3xl font-bold mb-8">
              What Working With Us Feels Like
            </h2>

            <div className="space-y-4 text-slate-700">

              <p>You get fewer follow-ups, fewer loose ends, and fewer “quick calls” to fix avoidable problems.</p>
              <p>You get strategy that shows up before the work does.</p>
              <p>You get content and campaigns that are built to perform, not just exist.</p>
              <p>Behind the scenes, we use data, automation, and AI-led systems to make marketing faster, smarter, and more consistent.</p>
              <p>On the surface, it simply feels easier.</p>
              <p className="font-semibold">Marketing becomes a system, not a scramble.</p>

            </div>
          </div>

          <img
            src="/team-3.jpg"
            className="rounded-3xl shadow-xl"
            alt=""
          />

        </div>

        {/* HUMANS */}
        <div className="grid md:grid-cols-2 gap-16 items-center mt-28">

          <img
            src="/sir.jpg"
            className="rounded-3xl shadow-xl"
            alt=""
          />

          <div>
            <h2 className="text-[#543d98] text-3xl font-bold">
              The Humans Behind the Work
            </h2>

            <p className="text-slate-700 mt-4">
              We are led by a senior team that stays close to the work.
            </p>

            <p className="text-slate-700 mt-4">
              Strategy is not a one-time deck. Creative is not “just designs.” Execution is not “figure it out.”
            </p>

            <p className="text-slate-700 mt-4">
              We combine human judgement with technology-driven workflows, so clients do not have to manage what they have already outsourced.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-32 rounded-[36px] bg-[#543d98] p-16 text-white">

          {/* <BrainCircuit size={36} /> */}

          <h2 className="mt-6 text-4xl font-extrabold">
            Who This Works Best For
          </h2>

          <p className="mt-4">
            If you want a partner who can simplify complexity and still deliver serious outcomes, we will work well together.
          </p>

          <p className="mt-4 font-semibold">
            If you need an agency that requires constant steering, we are not it.
          </p>

          <p className="mt-10 text-2xl font-bold">
            You focus on the business.
            <br />
            We make sure marketing keeps up.
          </p>

          <a
            href="mailto:collabs@theimpulsedigital.com"
            className="inline-block mt-10 bg-white text-[#543d98] px-10 py-4 rounded-full font-semibold"
          >
            Start the conversation
          </a>

        </div>

      </div>
    </section>
  );
};

export default AgencyIntroSection;
