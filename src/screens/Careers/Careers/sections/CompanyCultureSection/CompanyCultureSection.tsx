import React from "react";

export const CompanyCultureSection = (): JSX.Element => {
  return (
    <section
      className="w-full bg-gradient-to-b from-[#f8f5ff] via-white to-[#f4f7fb] py-20 lg:pt-28 lg:pb-32"
      data-section="company-culture"
    >
      {/* ✅ CHANGED ONLY THIS WRAPPER: removed max-w + mx-auto to make full width */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16 space-y-16 lg:space-y-24">

      {/* 1. HERO SECTION */}
<section>
  <div className="mb-10">
    <div className="relative overflow-hidden rounded-[32px] aspect-[16/16] md:aspect-[16/8] shadow-[0_24px_60px_rgba(15,23,42,0.25)]">

      {/* VIDEO (fixed to cover) */}
      <video
        className="absolute inset-0 w-full h-full object-cover scale-[1.08]"
        src="/career-new.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/10" />

      {/* OVERLAY TAGLINE */}
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-[24px] sm:text-[32px] md:text-[48px] leading-[1.1] max-w-4xl">
          For People Who Hate Mediocre
        </h3>
      </div>

    </div>
  </div>

  <div className="mx-auto text-left mb-10">
    <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[16px] md:text-[24px] leading-[1.6] md:leading-[1.5]">
      We don’t “do digital.” We build systems – AI systems, content systems,
      marketing systems – that help brands scale smarter. If you want to
      innovate solutions for real-world challenges, you&apos;re in the right
      place.
    </p>
  </div>
</section>



        {/* 2. The 'Us' in Impulse */}
        <section>
          {/* Heading on top */}
          <div className="mb-8">
            {/* Heading */}
            <h3
              className="
        [font-family:'DM_Sans',Helvetica]
        font-bold text-[#543d98]
        text-[20px] md:text-[52px]
        leading-[1.2] md:leading-[1.1]
      "
            >
              The ‘Us’ in Impulse.
            </h3>

            {/* Paragraph – full width */}
            <p
              className="
        [font-family:'DM_Sans',Helvetica]
        text-[#030019]
        text-[16px] md:text-[24px]
        leading-[1.6] md:leading-[1.5]
        mt-4
      "
            >
              No claims of being the best or the biggest here. But we punch well
              above our weight. We work with some of India’s and the world’s
              most respected brands across tech, engineering, automotive,
              manufacturing, fashion, D2C, and global conglomerates – including
              Aditya Birla Group, Bajaj Group, Tata Consumer, Chings, Hindalco,
              Amazon India, Automag, and more.
            </p>
          </div>

          <div className="rounded-3xl bg-white/80 border border-[#ece8ff] shadow-[0_18px_45px_rgba(15,23,42,0.06)] p-6 md:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)] items-start">
              {/* Content list – PREMIUM POINTERS */}
              <div>
                <p className="font-medium text-xs md:text-sm tracking-[0.18em] text-slate-500 uppercase mb-4">
                  We&apos;re obsessed with
                </p>

                <ul className="grid gap-5 md:grid-cols-2">
                  {[
                    "people who take ownership and think like founders",
                    "work that shifts business outcomes",
                    "storytelling backed by insight",
                    "creativity powered by AI",
                    "processes that reduce chaos",
                    "growth that’s fast and sustainable",
                  ].map((item) => (
                    <li
                      key={item}
                      className="group flex items-start gap-4 rounded-2xl bg-white/70 border border-[#ece8ff] p-4 md:p-5 shadow-[0_10px_25px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)] transition-all"
                    >
                      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0ebff] text-[#543d98] shadow-sm">
                        <span className="text-lg leading-none">●</span>
                      </span>

                      <span className="text-[15px] md:text-[16.5px] leading-snug text-[#030019]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image – unchanged */}
              <div className="relative">
                <div className="absolute -inset-6 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_top,#e4dcff_0,transparent_60%),radial-gradient(circle_at_bottom,#ffe3f0_0,transparent_55%)] opacity-70 blur-xl" />
                <div className="relative overflow-hidden rounded-3xl bg-slate-200 shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                  <img
                    src="/Untitled-1-01.png"
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
            {/* Heading */}
            <div className="mb-6">
              <h3
                className="
          [font-family:'DM_Sans',Helvetica]
          font-bold text-[#543d98]
          text-[20px] md:text-[52px]
          leading-[1.2] md:leading-[1.1]
        "
              >
                THE CODE WE LIVE BY.
              </h3>

              <p
                className="
          [font-family:'DM_Sans',Helvetica]
          text-[#030019]
          text-[16px] md:text-[20px]
          leading-[1.6]
          mt-2
        "
              >
                Values (Written as actions, not posters)
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
              {/* LEFT: Featured Image */}
              <div className="relative overflow-hidden rounded-3xl border border-[#ece8ff] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                <div className="relative aspect-[16/10] bg-slate-200">
                  <img
                    src="/Untitled-1-02.png"
                    alt="Own the outcome"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                </div>
              </div>

              {/* RIGHT: Code List */}
              <div className="flex flex-col gap-3">
                {[
                  {
                    code: "01",
                    title: "Own the outcome, not just the task.",
                    body: "We’re allergic to excuses. If it’s yours, you’ll get the support to make it great.",
                  },
                  {
                    code: "02",
                    title: "Build. Don’t wait to be told.",
                    body: "We love people who create solutions instead of waiting for permission.",
                  },
                  {
                    code: "03",
                    title: "Speak openly. Feedback is a gift.",
                    body: "We critique the work, not the person.",
                  },
                  {
                    code: "04",
                    title: "Check your ego at the login screen.",
                    body: "Great ideas can come from anyone. We listen.",
                  },
                  {
                    code: "05",
                    title: "Learn fast. Adapt faster.",
                    body: "AI is rewriting the industry. We ride the wave, not fight it.",
                  },
                  {
                    code: "06",
                    title: "Have fun. Seriously.",
                    body: "If we’re not enjoying the work, we fix the process.",
                  },
                ].map((item) => (
                  <div
                    key={item.code}
                    className="rounded-2xl bg-white/70 border border-[#ece8ff] p-4 hover:bg-white transition"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f0ebff] text-[#543d98] text-sm font-bold">
                        {item.code}
                      </span>
                      <div>
                        <p className="font-semibold text-[#030019] text-[20px]">
                          {item.title}
                        </p>
                        <p className="text-slate-600 text-[16px] mt-1">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Life at Impulse */}
        <section>
          <div className="space-y-7">
            <div className="w-full">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-[20px] md:text-[52px] leading-[1.2] md:leading-[1.1]">
                Life at Impulse
              </h3>

              <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[16px] md:text-[24px] leading-[1.5] mt-3">
                Life here isn’t perfect. But it’s pretty damn good.
              </p>
            </div>

            {(() => {
              const images = [
                "/Career Page Images-03.png",
                "/Career Page Images-15.png",
                "/Career Page Images-14.png",
                "/Career Page Images-13.png",
                "/Career Page Images-12.png",
                "/Career Page Images-11.png",
                "/Career Page Images-10.png",
                "/Career Page Images-09.png",
                "/Career Page Images-08.png",
                "/Career Page Images-07.png",
                "/Career Page Images-06.png",
                "/Career Page Images-05.png",
                "/Artboard 2 copy 22.jpg",
                "/Artboard 2 copy 21.jpg",
                "/Artboard 2 copy 23.jpg",
                "/Artboard 2 copy 15.jpg",
              ];

              return (
                <>
                  {/* MOBILE */}
                  <div className="md:hidden overflow-hidden">
                    <div className="flex w-max gap-4 wall-track-mobile">
                      {[...Array(2)].map((_, cloneIdx) => (
                        <div key={cloneIdx} className="flex gap-4">
                          {images.map((img, idx) => (
                            <div
                              key={`${cloneIdx}-${idx}`}
                              className="relative overflow-hidden rounded-3xl aspect-[4/3] w-[78vw] bg-slate-200 shadow-[0_16px_40px_rgba(15,23,42,0.10)]"
                            >
                              <img
                                src={img}
                                alt="Life at Impulse"
                                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>

                    <style>{`
                      @keyframes wallMobileSlide {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                      }
                      .wall-track-mobile {
                        animation: wallMobileSlide 60s linear infinite;
                        will-change: transform;
                      }
                      .wall-track-mobile:hover { animation-play-state: paused; }
                      @media (prefers-reduced-motion: reduce) {
                        .wall-track-mobile { animation: none; transform: none; }
                      }
                    `}</style>
                  </div>

                  {/* DESKTOP/TABLET */}
                  <div className="hidden md:block">
                    <div className="relative overflow-hidden">
                      <div className="wall-peek-track">
                        {images.concat(images).map((img, idx) => (
                          <div
                            key={idx}
                            className="wall-peek-slide relative overflow-hidden rounded-3xl bg-slate-200 shadow-[0_16px_40px_rgba(15,23,42,0.10)]"
                          >
                            <img
                              src={img}
                              alt="Life at Impulse"
                              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <style>{`
                      .wall-peek-track{
                        display:flex;
                        gap: 20px;
                        width: max-content;
                        will-change: transform;
                        animation: wallPeekSlide 80s linear infinite;
                      }
                      .wall-peek-track:hover{ animation-play-state: paused; }
                      .wall-peek-slide{
                        flex: 0 0 auto;
                        width: 66vw;
                        max-width: 720px;
                        aspect-ratio: 4 / 3;
                      }
                      @keyframes wallPeekSlide{
                        0%   { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                      }
                      @media (min-width: 1280px){
                        .wall-peek-slide{ width: 58vw; max-width: 760px; }
                      }
                      @media (prefers-reduced-motion: reduce){
                        .wall-peek-track{ animation: none; transform: none; }
                      }
                    `}</style>
                  </div>
                </>
              );
            })()}
          </div>
        </section>

        {/* 5. We Invest in People, Not Headcount */}
        <section>
          <div className="rounded-3xl bg-white/80 border border-[#ece8ff] shadow-[0_18px_45px_rgba(15,23,42,0.06)] p-6 md:p-8 lg:p-10">
            <div className="mb-8">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-[20px] md:text-[52px] leading-[1.15]">
                We Invest in People, Not Headcount.
              </h3>

              <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[16px] md:text-[24px] leading-[1.5] mt-3 max-w-3xl">
                We don’t hire people to keep seats warm. We hire people we want
                to grow.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] items-stretch">
              <div className="rounded-3xl border border-[#ece8ff] bg-white/70 p-5 md:p-6">
                <p className="font-medium text-[12px] md:text-[14px] tracking-[0.18em] text-slate-500 uppercase mb-4">
                  Here&apos;s how we do that
                </p>

                <ul className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Work that challenges you",
                    "Freedom to experiment",
                    "Access to industry-leading tools",
                    "Cross-team exposure & leadership opportunities",
                  ].map((item) => (
                    <li
                      key={item}
                      className="group flex items-start gap-3 rounded-2xl border border-[#ece8ff] bg-gradient-to-br from-[#f8f5ff] via-white to-[#f3f6ff] p-4 md:p-5 shadow-[0_10px_25px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)] transition"
                    >
                      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0ebff] text-[#543d98] shadow-sm">
                        <span className="text-base font-bold">✓</span>
                      </span>
                      <span className="text-[16px] md:text-[18px] leading-snug text-[#030019]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-[#ece8ff] bg-gradient-to-br from-[#543d98] via-[#6f56d6] to-[#a78bfa] p-[1px] shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
                <div className="rounded-3xl bg-white/90 p-5 md:p-6 h-full">
                  <p className="font-medium text-[12px] md:text-[14px] tracking-[0.18em] text-slate-500 uppercase mb-4">
                    What the team says
                  </p>

                  <div className="grid gap-4">
                    {[
                      "“The freedom to experiment here is insane.”",
                      "“I’ve worked on global clients within my first month.”",
                    ].map((quote) => (
                      <blockquote
                        key={quote}
                        className="relative rounded-2xl bg-white border border-[#ece8ff] px-4 py-4 md:px-5 md:py-5 shadow-[0_10px_25px_rgba(15,23,42,0.06)]"
                      >
                        <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-[#543d98]" />
                        <p className="pl-3 italic text-[#030019] text-[16px] md:text-[18px] leading-relaxed">
                          {quote}
                        </p>
                      </blockquote>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Hiring process */}
        <section>
          <div className="rounded-3xl bg-white/80 border border-[#ece8ff] shadow-[0_18px_45px_rgba(15,23,42,0.06)] p-6 md:p-8 lg:p-10 overflow-hidden">
            <div className="mb-6 max-w-3xl">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-[20px] md:text-[52px] leading-[1.15]">
                We Don’t Ghost. We Don’t Drag. We Don’t Sugarcoat.
              </h3>

              <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[16px] md:text-[24px] leading-[1.5] mt-3">
                A clear, respectful, and fast hiring process.
              </p>
            </div>

            {(() => {
              const steps = [
                { step: "01", title: "Quick Call", body: "A 15-minute chat to understand fit." },
                {
                  step: "02",
                  title: "Skill Assessment",
                  body: "A fitting assignment - dummy or clearly tagged as a paid live project. No unpaid labour.",
                },
                {
                  step: "03",
                  title: "Deep Dive Interview",
                  body: "We talk about your work, your growth path, and your expectations.",
                },
                { step: "04", title: "Offer", body: "Transparent, fast, and fair." },
              ];

              return (
                <>
                  <div className="relative">
                    <div className="flex gap-6 w-max hiring-track hover:[animation-play-state:paused]">
                      {[...Array(2)].map((_, cloneIdx) => (
                        <div key={cloneIdx} className="flex gap-6">
                          {steps.map((item) => (
                            <div
                              key={`${cloneIdx}-${item.step}`}
                              className="relative w-[260px] md:w-[300px] rounded-3xl border border-[#ece8ff] bg-gradient-to-br from-[#f8f5ff] via-white to-[#f3f6ff] p-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)]"
                            >
                              <div className="mb-4 flex items-center justify-between">
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#543d98] text-white font-bold shadow-md">
                                  {item.step}
                                </span>
                                <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                                  Step
                                </span>
                              </div>

                              <p className="font-semibold text-[#030019] text-[16px] md:text-[18px] mb-2">
                                {item.title}
                              </p>

                              <p className="text-[14px] md:text-[16px] text-slate-700 leading-relaxed">
                                {item.body}
                              </p>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  <style>{`
                    @keyframes hiringSlide {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(-50%); }
                    }
                    .hiring-track {
                      animation: hiringSlide 36s linear infinite;
                      will-change: transform;
                    }
                    @media (prefers-reduced-motion: reduce) {
                      .hiring-track { animation: none; transform: none; }
                    }
                  `}</style>
                </>
              );
            })()}

            <div className="mt-6 rounded-2xl border border-[#ece8ff] bg-white/70 px-5 py-4">
              <p className="text-[16px] md:text-[20px] font-medium text-[#030019]">
                If you&apos;re good, we move fast. Really fast.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
