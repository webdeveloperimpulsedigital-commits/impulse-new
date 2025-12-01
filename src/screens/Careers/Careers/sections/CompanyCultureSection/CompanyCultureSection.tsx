import React from "react";

export const CompanyCultureSection = (): JSX.Element => {
  return (
    <section
      className="w-full bg-gradient-to-b from-[#f8f5ff] via-white to-[#f4f7fb] py-20 lg:pt-28 lg:pb-32"
      data-section="company-culture"
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 space-y-16 lg:space-y-24">
        {/* 1. HERO SECTION */}
        <section>
          {/* Heading & copy on top (2-line style) */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="[font-family:'DM_Sans',Helvetica] text-lg md:text-xl text-[#030019] mb-1">
              For People Who Hate Mediocre
            </p>
            <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
              Not just a job. A place to build your best work.
            </h2>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-base md:text-lg">
              We don’t “do digital.” We build systems — AI systems, content systems,
              marketing systems — that help brands scale smarter. If you want to
              innovate solutions for real-world challenges, you&apos;re in the right
              place.
            </p>

            {/* Hero tags */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {[
                "AI Systems",
                "Content Engines",
                "Performance Marketing",
                "Strategy + Execution",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-[#f0ebff] text-[#543d98] px-3 py-1 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Full-width video / montage – clean, no content overlay (only play icon) */}
          <div className="mt-10">
            <div className="relative overflow-hidden rounded-[32px] aspect-[16/7] md:aspect-[16/6] bg-[url('/careers/hero-montage-wide.jpg')] bg-cover bg-center shadow-[0_24px_60px_rgba(15,23,42,0.25)]">
              <button
                type="button"
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="inline-flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-white/95 text-[#543d98] shadow-2xl text-2xl">
                  ▶
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* 2. The 'Us' in Impulse */}
        <section>
          {/* Heading on top (2-line style) */}
          <div className="max-w-3xl mb-8">
            <p className="[font-family:'DM_Sans',Helvetica] text-lg md:text-xl text-[#030019] mb-1">
              Who We Build With
            </p>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-2xl md:text-3xl lg:text-4xl">
              The ‘Us’ in Impulse.
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-base md:text-lg max-w-3xl mt-4">
              No claims of being the best or the biggest here. But we punch well
              above our weight. We work with some of India’s and the world’s most
              respected brands across tech, engineering, automotive, manufacturing,
              fashion, D2C, and global conglomerates — including Aditya Birla Group,
              Bajaj Group, Tata Consumer, Chings, Hindalco, Amazon India, Automag,
              and more.
            </p>
          </div>

          <div className="rounded-3xl bg-white/80 border border-[#ece8ff] shadow-[0_18px_45px_rgba(15,23,42,0.06)] p-6 md:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)] items-start">
              {/* Content list – bigger points */}
              <div>
                <p className="font-medium text-xs md:text-sm tracking-[0.18em] text-slate-500 uppercase mb-3">
                  We&apos;re obsessed with
                </p>
                <ul className="grid gap-4 md:grid-cols-2 text-base md:text-lg text-[#030019] leading-relaxed">
                  {[
                    "people who take ownership and think like founders",
                    "work that shifts business outcomes",
                    "storytelling backed by insight",
                    "creativity powered by AI",
                    "processes that reduce chaos",
                    "growth that’s fast and sustainable",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f0ebff] text-[11px] text-[#543d98]">
                        ●
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Big imagery card – only image now */}
              <div className="relative">
                <div className="absolute -inset-6 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_top,#e4dcff_0,transparent_60%),radial-gradient(circle_at_bottom,#ffe3f0_0,transparent_55%)] opacity-70 blur-xl" />
                <div className="relative overflow-hidden rounded-3xl bg-slate-200 shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                  <img
                    src="/careers/us-impulse-big.jpg"
                    alt="Impulse team collaborating"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Code We Live By */}
        <section>
          <div className="rounded-3xl bg-white/80 border border-[#ece8ff] shadow-[0_18px_45px_rgba(15,23,42,0.06)] p-6 md:p-8 lg:p-10">
            {/* Heading in 2-line style */}
            <div className="mb-6">
              <p className="[font-family:'DM_Sans',Helvetica] text-lg md:text-xl text-[#030019] mb-1">
                How We Work
              </p>
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-2xl md:text-3xl lg:text-4xl">
                The Code We Live By.
              </h3>
            </div>

            <ol className="grid gap-4 md:grid-cols-2 text-sm md:text-base text-[#030019] max-w-4xl">
              {[
                {
                  code: "01",
                  title: "Own the outcome, not just the task.",
                  body: "We’re allergic to excuses. If it’s yours, you’ll get the support to make it great.",
                  img: "/careers/code-01.jpg",
                },
                {
                  code: "02",
                  title: "Build. Don’t wait to be told.",
                  body: "We love people who create solutions instead of waiting for permission.",
                  img: "/careers/code-02.jpg",
                },
                {
                  code: "03",
                  title: "Speak openly. Feedback is a gift.",
                  body: "We critique the work, not the person.",
                  img: "/careers/code-03.jpg",
                },
                {
                  code: "04",
                  title: "Check your ego at the login screen.",
                  body: "Great ideas can come from anyone. We listen.",
                  img: "/careers/code-04.jpg",
                },
                {
                  code: "05",
                  title: "Learn fast. Adapt faster.",
                  body: "AI is rewriting the industry. We ride the wave, not fight it.",
                  img: "/careers/code-05.jpg",
                },
                {
                  code: "06",
                  title: "Have fun. Seriously.",
                  body: "If we’re not enjoying the work, we fix the process.",
                  img: "/careers/code-06.jpg",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#f8f5ff] via-white to-[#f3f6ff] border border-[#ece8ff] p-4 md:p-5 flex gap-3 md:gap-4"
                >
                  <div className="relative h-16 w-16 md:h-20 md:w-20 shrink-0 overflow-hidden rounded-xl bg-slate-200">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                    <span className="absolute bottom-1 left-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-[#543d98] shadow-sm">
                      {item.code}
                    </span>
                  </div>
                  <div className="relative">
                    <p className="font-semibold mb-1">{item.title}</p>
                    <p className="text-sm md:text-[15px] text-slate-700">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 4. Life at Impulse */}
        <section>
          <div className="space-y-7">
            {/* Heading in 2-line style */}
            <div className="max-w-3xl">
              <p className="[font-family:'DM_Sans',Helvetica] text-lg md:text-xl text-[#030019] mb-1">
                Inside the Studio
              </p>
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-2xl md:text-3xl lg:text-4xl">
                Life at Impulse
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-base md:text-lg mt-3">
                Life here isn’t perfect. But it’s pretty damn good.
              </p>
            </div>

            {/* Bigger mosaic grid */}
            <div className="grid gap-4 lg:grid-cols-6 auto-rows-[200px] md:auto-rows-[220px]">
              {[
                {
                  label: "Candid brainstorms",
                  cls: "lg:col-span-3 lg:row-span-2",
                  img: "/careers/life-brainstorm.jpg",
                },
                {
                  label: "Celebrations & wins",
                  cls: "lg:col-span-3 lg:row-span-1",
                  img: "/careers/life-celebrations.jpg",
                },
                {
                  label: "Shoots & production days",
                  cls: "lg:col-span-2 lg:row-span-1",
                  img: "/careers/life-shoots.jpg",
                },
                {
                  label: "Chai breaks & random ideas",
                  cls: "lg:col-span-2 lg:row-span-1",
                  img: "/careers/life-chai.jpg",
                },
                {
                  label: "Team offsites",
                  cls: "lg:col-span-2 lg:row-span-1",
                  img: "/careers/life-offsites.jpg",
                },
                {
                  label: "Festival décor & behind-the-scenes chaos",
                  cls: "lg:col-span-4 lg:row-span-1",
                  img: "/careers/life-festive.jpg",
                },
              ].map((item, idx) => (
                <div
                  key={item.label}
                  className={`group relative overflow-hidden rounded-3xl bg-slate-900/5 ${item.cls}`}
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-95 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                    <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.18em] text-slate-200 mb-1">
                      Life at Impulse
                    </p>
                    <p className="text-xs sm:text-sm text-white font-semibold drop-shadow">
                      {item.label}
                    </p>
                  </div>
                  {idx === 0 && (
                    <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium text-[#543d98] shadow-sm">
                      Day-in-the-life moments
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5–9 unchanged layout-wise, but headings converted to 2-line style */}

        {/* 5. We Invest in People, Not Headcount */}
        <section>
          <div className="rounded-3xl bg-white/80 border border-[#ece8ff] shadow-[0_18px_45px_rgba(15,23,42,0.06)] p-6 md:p-8 lg:p-10 space-y-6">
            <div>
              <p className="[font-family:'DM_Sans',Helvetica] text-lg md:text-xl text-[#030019] mb-1">
                How We Grow People
              </p>
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-2xl md:text-3xl lg:text-4xl">
                We Invest in People, Not Headcount.
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-base md:text-lg max-w-3xl mt-3 mb-4">
                We don’t hire people to keep seats warm. We hire people we want
                to grow.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
              <div>
                <p className="font-medium text-xs md:text-sm tracking-[0.18em] text-slate-500 uppercase mb-3">
                  Here&apos;s how we do that
                </p>
                <ul className="grid gap-3 md:grid-cols-2 text-sm md:text-base text-[#030019] mb-4">
                  {[
                    "Work that challenges you",
                    "Freedom to experiment",
                    "Access to industry-leading tools",
                    "Cross-team exposure & leadership opportunities",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#f0ebff] text-[10px] text-[#543d98]">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-3 md:grid-cols-1">
                {[
                  "“The freedom to experiment here is insane.”",
                  "“I’ve worked on global clients within my first month.”",
                ].map((quote) => (
                  <blockquote
                    key={quote}
                    className="relative rounded-2xl bg-gradient-to-br from-[#f8f5ff] via-white to-[#f3f6ff] border border-[#ece8ff] px-4 py-4 md:px-5 md:py-5 text-sm md:text-base text-[#030019]"
                  >
                    <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-[#543d98]" />
                    <p className="pl-2 md:pl-3 italic">{quote}</p>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Hiring process */}
        <section>
          <div className="rounded-3xl bg-white/80 border border-[#ece8ff] shadow-[0_18px_45px_rgba(15,23,42,0.06)] p-6 md:p-8 lg:p-10">
            <div className="mb-3">
              <p className="[font-family:'DM_Sans',Helvetica] text-lg md:text-xl text-[#030019] mb-1">
                How We Hire
              </p>
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-2xl md:text-3xl lg:text-4xl">
                We Don’t Ghost. We Don’t Drag. We Don’t Sugarcoat.
              </h3>
            </div>
            <p className="text-sm md:text-base text-[#030019] mb-6 max-w-3xl">
              A clear, respectful, and fast hiring process.
            </p>

            <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 text-sm md:text-base text-[#030019]">
              {[
                {
                  step: "01",
                  title: "Quick Call",
                  body: "A 15-minute chat to understand fit.",
                },
                {
                  step: "02",
                  title: "Skill Assessment",
                  body: "A fitting assignment — dummy or clearly tagged as a paid live project. No unpaid labour.",
                },
                {
                  step: "03",
                  title: "Deep Dive Interview",
                  body: "We talk about your work, your growth path, and your expectations.",
                },
                {
                  step: "04",
                  title: "Offer",
                  body: "Transparent, fast, and fair.",
                },
              ].map((item) => (
                <li
                  key={item.step}
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#f8f5ff] via-white to-[#f3f6ff] border border-[#ece8ff] p-4 md:p-5 flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#543d98] text-xs font-semibold text-white shadow-md">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-slate-500">
                      Step
                    </span>
                  </div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-xs md:text-sm text-slate-700">{item.body}</p>
                </li>
              ))}
            </ol>

            <p className="mt-4 text-sm md:text-base font-medium text-[#030019]">
              If you&apos;re good, we move fast. Really fast.
            </p>
          </div>
        </section>

        {/* 7. Pick Your Next Adventure */}
        <section>
          <div className="rounded-3xl bg-white/90 border border-dashed border-[#d9d2ff] p-6 md:p-8 lg:p-10">
            <div className="mb-3">
              <p className="[font-family:'DM_Sans',Helvetica] text-lg md:text-xl text-[#030019] mb-1">
                Roles & Opportunities
              </p>
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-2xl md:text-3xl lg:text-4xl">
                Pick Your Next Adventure.
              </h3>
            </div>
            <p className="text-sm md:text-base text-[#030019] mb-4 max-w-3xl">
              Explore roles across strategy, creative, performance, tech, and
              operations.
            </p>
            <div className="mt-4 rounded-2xl border border-[#ece8ff] bg-gradient-to-r from-[#f8f5ff] via-white to-[#f3f6ff] px-5 py-6 text-sm text-slate-600 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-medium text-[#030019]">
                  Open positions will be listed here via your jobs component /
                  API.
                </p>
                <p className="text-xs md:text-[13px] text-slate-600 mt-1">
                  Plug in your live job feed so candidates can discover the role
                  that fits their next chapter.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm text-[#543d98]">
                  🔍
                </span>
                <span className="text-xs md:text-sm text-slate-700">
                  Strategy, design, media, tech, ops & more.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Culture Video / Mini Doc */}
        <section>
          <div className="rounded-3xl bg-gradient-to-br from-[#543d98] via-[#7b5df4] to-[#f97373] p-[1px] shadow-[0_22px_55px_rgba(15,23,42,0.22)]">
            <div className="rounded-3xl bg-[#0b041b]/95 p-6 md:p-8 lg:p-10">
              <div className="mb-6">
                <p className="[font-family:'DM_Sans',Helvetica] text-lg md:text-xl text-violet-100 mb-1">
                  Our Story in 90 Seconds
                </p>
                <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-2xl md:text-3xl lg:text-4xl">
                  The Impulse Story.
                </h3>
              </div>
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
                <div>
                  <p className="text-sm md:text-base text-slate-100 mb-4 max-w-3xl">
                    A 60–90 second showreel that tells what we do, why we exist,
                    how our team works, and the vibe that holds it all together.
                  </p>
                  <p className="text-xs md:text-sm text-violet-200">
                    Perfect for your careers page, social, and onboarding decks.
                  </p>
                </div>

                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl bg-slate-900 aspect-video flex items-center justify-center">
                    <div className="absolute inset-0 bg-[url('/impulse-story-placeholder.jpg')] bg-cover bg-center opacity-60" />
                    <button className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-[#543d98] shadow-lg">
                      ▶
                    </button>
                  </div>
                  <p className="mt-3 text-[11px] text-violet-100">
                    Embed culture video / mini doc here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Let’s Build Something Worth Showing Off */}
        <section>
          <div className="rounded-3xl bg-[#543d98] text-white px-6 py-8 md:px-10 md:py-10 shadow-[0_20px_60px_rgba(15,23,42,0.35)]">
            <div className="mb-4">
              <p className="[font-family:'DM_Sans',Helvetica] text-lg md:text-xl text-violet-100 mb-1">
                Ready To Say Hi?
              </p>
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-2xl md:text-3xl lg:text-4xl">
                Let’s Build Something Worth Showing Off.
              </h3>
            </div>
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
              <div>
                <p className="[font-family:'DM_Sans',Helvetica] text-base md:text-lg mb-4 max-w-3xl">
                  Tell us who you are, what drives you, and what kind of work
                  makes you lose track of time.
                </p>
                <p className="text-xs md:text-sm text-violet-100">
                  This is where your application form or &quot;Say hi&quot;
                  form connects, so we can start a real conversation — not just
                  collect another resume.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 border border-white/25 p-4 md:p-5 backdrop-blur-sm flex flex-col gap-3">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-violet-100">
                  Next step
                </p>
                <p className="text-sm md:text-base">
                  Drop in your portfolio, LinkedIn, or the one project you&apos;re
                  most proud of. Tell us what you&apos;d love to build here.
                </p>
                <button
                  type="button"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-white text-[#543d98] px-4 py-2 text-xs md:text-sm font-semibold shadow-md hover:bg-violet-50 transition-colors"
                >
                  Open application form
                  <span className="ml-1.5 text-[11px]">↗</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
