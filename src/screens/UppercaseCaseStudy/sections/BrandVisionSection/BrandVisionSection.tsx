import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ─── Scroll reveal hook ─── */
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Animated counter ─── */
function useCounter(target: number, active: boolean, duration = 2000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return value;
}

/* ─── Formatters ─── */
function formatNum(n: number, raw: number) {
  if (raw >= 1_000_000) return (n / 1_000_000).toFixed(n === raw ? 2 : 1) + "M+";
  if (raw >= 1_000) return (n / 1_000).toFixed(n === raw ? 0 : 0) + "K+";
  return n.toLocaleString();
}

/* ─── Section wrapper with reveal animation ─── */
function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(48px)",
        transition: `opacity 0.85s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.85s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Pill label ─── */
function Pill({ label }: { label: string }) {
  return (
    <span
      className="inline-block text-[11px] font-semibold tracking-[0.22em] uppercase px-3 py-1 rounded-full mb-4"
      style={{ background: "rgba(84,61,152,0.1)", color: "#543d98" }}
    >
      {label}
    </span>
  );
}

/* ─── Section heading ─── */
function SectionHeading({ title, accent = false }: { title: string; accent?: boolean }) {
  return (
    <h2
      className="font-black leading-tight mb-4"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
        color: accent ? "#543d98" : "#0f0a2e",
        letterSpacing: "-0.02em",
      }}
    >
      {title}
    </h2>
  );
}

/* ─── Bullet list with animated markers ─── */
function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 mt-4">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3"
          style={{ color: "#4B4B5C", fontSize: "1rem", lineHeight: 1.65 }}
        >
          <span
            className="mt-1.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
            style={{ background: "rgba(84,61,152,0.12)" }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 5l2.5 2.5L8 3" stroke="#543d98" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ─── Quote block ─── */
function QuoteBlock({ text }: { text: string }) {
  return (
    <div
      className="relative mt-6 p-6 rounded-[20px]"
      style={{ background: "linear-gradient(135deg, rgba(84,61,152,0.07) 0%, rgba(167,139,250,0.07) 100%)", borderLeft: "3px solid #543d98" }}
    >
      <p className="text-[1rem] italic leading-relaxed" style={{ color: "#2d1f6e" }}>
        "{text}"
      </p>
    </div>
  );
}

/* ─── Main export ─── */
export const BrandVisionSection = (): JSX.Element => {

  /* ─── Images ─── */
  const images = {
    opportunity: "/The Opportunity.png",
    shift: "/The Shift.jpg",
    campaign: "/Building the Campaign.png",
    ai: "/AI.png",
    keepingReal: "/Keeping It Real.png",
    carryYour: "/Carry Your Resolution.png",
    resolution: "/Resolution.png",
    closing: "/closing.png",
  };

  /* ─── Stats counter section visibility ─── */
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsActive(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const plays = useCounter(5490885, statsActive, 2400);
  const views = useCounter(868662, statsActive, 2400);
  const likes = useCounter(100654, statsActive, 2400);

  /* ─── Shared prose styles ─── */
  const prose: React.CSSProperties = { color: "#4B4B5C", fontSize: "1rem", lineHeight: 1.8 };

  return (
    <article className="w-full bg-white" style={{ overflowX: "hidden" }}>

      {/* ═══════════════════════════════════════════════
          INTRO — "That's where the idea came from"
      ═══════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-16">
        <RevealSection>
          <p
            className="uppercase tracking-[0.22em] text-xs font-semibold mb-5"
            style={{ color: "#543d98" }}
          >
            Uppercase · December 2025
          </p>

          <h1
            className="font-black leading-none mb-8"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              color: "#0f0a2e",
              letterSpacing: "-0.03em",
              maxWidth: "14ch",
            }}
          >
            Turning a year-end insight into a{" "}
            <em style={{ color: "#543d98", fontStyle: "normal" }}>product-led</em> social campaign.
          </h1>
        </RevealSection>

        <RevealSection delay={0.15}>
          <div
            className="grid md:grid-cols-2 gap-8 mt-4"
            style={{ borderTop: "1px solid rgba(84,61,152,0.12)", paddingTop: "2.5rem" }}
          >
            <p style={prose}>
              Around New Year, every brand tries to say something about resolutions.
              Uppercase could've done the same. Another reel, another "new year, new you" line.
            </p>
            <p style={prose}>
              We didn't want to go there. So we stepped back and asked something simpler —
              <strong style={{ color: "#0f0a2e" }}> what do people actually do with resolutions once January starts?</strong>{" "}
              That's where the idea came from.
            </p>
          </div>
        </RevealSection>
      </section>

      {/* ═══════════════════════════════════════════════
          FULL-WIDTH CAMPAIGN IMAGE
      ═══════════════════════════════════════════════ */}
      <RevealSection>
        <div
          className="relative overflow-hidden"
          style={{ height: "clamp(320px, 52vw, 680px)" }}
        >
          <img
            src={images.carryYour}
            alt="Carry Your Resolution Campaign"
            className="w-full h-full object-cover"
            style={{ transform: "scale(1.02)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(2,0,24,0.55) 0%, transparent 50%)" }}
          />
          <div className="absolute bottom-10 left-8 md:left-16 lg:left-24">
            <p
              className="text-white font-black"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(1.4rem, 3vw, 2.6rem)",
                letterSpacing: "-0.02em",
                textShadow: "0 2px 24px rgba(0,0,0,0.5)",
              }}
            >
              This year, my resolutions are moving with me.
            </p>
            <p
              className="text-white/80 mt-1 font-semibold tracking-wide uppercase text-sm"
            >
              UPPERCASE: Carry Your Resolution.
            </p>
          </div>
        </div>
      </RevealSection>

      {/* ═══════════════════════════════════════════════
          THE OPPORTUNITY
      ═══════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <RevealSection>
            <Pill label="The Opportunity" />
            <SectionHeading title="Making New Year feel less repetitive" accent />
            <p style={prose}>
              Year-end marketing is crowded. Everyone shows up saying more or less the same thing.
              The real challenge was to say something people <em>wouldn't</em> scroll past.
            </p>
            <p style={{ ...prose, marginTop: "1rem" }}>
              At the same time, this couldn't just be a nice thought. The product had to feel like it belonged.
              So the job was straightforward:
            </p>
            <BulletList
              items={[
                "Don't sound like everyone else",
                "Don't force the brand into the story",
                "Make something that actually works on social",
              ]}
            />
          </RevealSection>

          <RevealSection delay={0.18}>
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-[32px] opacity-20"
                style={{ background: "radial-gradient(ellipse at 60% 40%, #a78bfa 0%, transparent 70%)" }}
              />
              <img
                src={images.opportunity}
                alt="The Opportunity"
                className="w-full rounded-[28px] object-cover relative z-10"
                style={{ height: "clamp(280px, 40vw, 520px)", boxShadow: "0 32px 64px rgba(84,61,152,0.18)" }}
              />
            </div>
          </RevealSection>
        </div>

        {/* Divider */}
        <div
          className="mt-28 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(84,61,152,0.2), transparent)" }}
        />
      </section>

      {/* ═══════════════════════════════════════════════
          THE SHIFT
      ═══════════════════════════════════════════════ */}
      <section
        className="w-full py-28 px-0"
        style={{ background: "linear-gradient(135deg, #0f0a2e 0%, #2d1f6e 50%, #1a0f45 100%)" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <RevealSection delay={0.05}>
              <div className="relative overflow-hidden rounded-[28px]"
                style={{ height: "clamp(280px, 38vw, 480px)", boxShadow: "0 40px 80px rgba(0,0,0,0.4)" }}
              >
                <img
                  src={images.shift}
                  alt="The Shift"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, rgba(84,61,152,0.3) 0%, transparent 60%)" }}
                />
              </div>
            </RevealSection>

            <RevealSection delay={0.2}>
              <Pill label="The Shift" />
              <h2
                className="font-black leading-tight mb-6 text-white"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                From{" "}
                <span style={{ color: "#a78bfa" }}>"resolutions"</span>{" "}
                to something you carry.
              </h2>

              <p style={{ ...prose, color: "rgba(255,255,255,0.72)" }}>
                We stopped looking at resolutions as promises.
                Instead, we treated them like something you carry with you — through travel, work, routines, everything.
              </p>
              <p style={{ ...prose, color: "rgba(255,255,255,0.72)", marginTop: "1rem" }}>
                That made things click. Now the story could move through real-life situations without losing the core idea.
              </p>

              <div
                className="mt-8 p-6 rounded-[20px]"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(167,139,250,0.2)",
                }}
              >
                <p
                  className="text-xl font-bold text-white text-center"
                  style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.015em" }}
                >
                  You don't just <em style={{ color: "#a78bfa", fontStyle: "normal" }}>set</em> resolutions.
                  <br />
                  You <em style={{ color: "#a78bfa", fontStyle: "normal" }}>carry</em> them.
                </p>
              </div>

              <p style={{ ...prose, color: "rgba(255,255,255,0.6)", marginTop: "1.25rem" }}>
                Once that landed, the product didn't need help. It fit right in.
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          BUILDING THE CAMPAIGN
      ═══════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <RevealSection>
            <Pill label="Building the Campaign" />
            <SectionHeading title="Making sure it all holds together" accent />
            <p style={prose}>
              Coming up with a line is one part. Making it work across different moments is the real job.
              We mapped out how this idea would show up in different situations and made sure it still felt like one story.
            </p>
            <p style={{ ...prose, marginTop: "0.75rem" }}>That meant figuring out:</p>
            <BulletList
              items={[
                "What each moment should feel like",
                "Where it plays out",
                "How the product shows up without interrupting",
                "How everything ties back to the same thought",
              ]}
            />
          </RevealSection>

          <RevealSection delay={0.15}>
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-[32px] opacity-15"
                style={{ background: "radial-gradient(ellipse, #543d98 0%, transparent 70%)" }}
              />
              <img
                src={images.campaign}
                alt="Building the Campaign"
                className="w-full rounded-[28px] object-cover relative z-10"
                style={{ height: "clamp(280px, 40vw, 520px)", boxShadow: "0 32px 64px rgba(84,61,152,0.18)" }}
              />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          RESOLUTION IMAGE — full bleed
      ═══════════════════════════════════════════════ */}
      <RevealSection>
        <div
          className="relative overflow-hidden"
          style={{ height: "clamp(260px, 45vw, 600px)" }}
        >
          <img
            src={images.resolution}
            alt="Campaign creative scenes"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(15,10,46,0.7) 0%, transparent 50%)" }}
          />
        </div>
      </RevealSection>

      {/* ═══════════════════════════════════════════════
          HOW WE USED AI
      ═══════════════════════════════════════════════ */}
      <section
        className="w-full py-28"
        style={{ background: "#f7f5ff" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealSection delay={0.05}>
              <div
                className="relative overflow-hidden rounded-[28px]"
                style={{ height: "clamp(280px, 38vw, 520px)", boxShadow: "0 32px 64px rgba(84,61,152,0.14)" }}
              >
                <img
                  src={images.ai}
                  alt="How We Used AI"
                  className="w-full h-full object-cover"
                />
              </div>
            </RevealSection>

            <RevealSection delay={0.2}>
              <Pill label="How We Used AI" />
              <SectionHeading title="Not for the idea, but for everything after." accent />

              {/* AI stack callout */}
              <div
                className="grid grid-cols-3 gap-3 mb-6"
              >
                {["Script", "Visuals", "Models", "Video", "Voice", "Music"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-center py-3 px-2 rounded-[14px] text-center font-semibold text-sm"
                    style={{ background: "white", color: "#543d98", boxShadow: "0 4px 16px rgba(84,61,152,0.1)" }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p style={prose}>
                This entire film was built using AI — script, visuals, models, video, voiceover, music. Everything.
                But that's not what made it work.
              </p>
              <QuoteBlock text="AI didn't give us the idea. It helped us execute it better." />
              <p style={{ ...prose, marginTop: "1rem" }}>
                It gave us speed, flexibility, and room to try multiple directions without the usual production constraints.
                So instead of worrying about logistics, we could focus on getting the story right.
              </p>
              <p style={{ ...prose, marginTop: "0.75rem", fontWeight: 600, color: "#0f0a2e" }}>
                The end result doesn't feel like an "AI film." It just feels like a complete piece of work.
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          KEEPING IT REAL
      ═══════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <RevealSection>
            <Pill label="Keeping It Real" />
            <SectionHeading title="Making sure the product earns its place." accent />
            <p style={prose}>
              If the product feels forced, people switch off instantly. So we kept it simple.
            </p>
            <div
              className="my-6 p-6 rounded-[20px] grid grid-cols-2 gap-4"
              style={{ background: "rgba(84,61,152,0.06)" }}
            >
              <div className="text-center p-4 rounded-[14px] bg-white" style={{ boxShadow: "0 4px 12px rgba(84,61,152,0.08)" }}>
                <p className="font-bold text-sm uppercase tracking-widest mb-1" style={{ color: "#543d98" }}>Campaign</p>
                <p className="text-sm" style={{ color: "#4B4B5C" }}>About carrying things forward</p>
              </div>
              <div className="text-center p-4 rounded-[14px] bg-white" style={{ boxShadow: "0 4px 12px rgba(84,61,152,0.08)" }}>
                <p className="font-bold text-sm uppercase tracking-widest mb-1" style={{ color: "#543d98" }}>Product</p>
                <p className="text-sm" style={{ color: "#4B4B5C" }}>Something you carry</p>
              </div>
            </div>
            <p style={prose}>
              That overlap did most of the work. The product didn't need to be explained — it just fit.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-[32px] opacity-20"
                style={{ background: "radial-gradient(ellipse at 40% 60%, #a78bfa 0%, transparent 70%)" }}
              />
              <img
                src={images.keepingReal}
                alt="Keeping It Real"
                className="w-full rounded-[28px] object-cover relative z-10"
                style={{ height: "clamp(280px, 40vw, 520px)", boxShadow: "0 32px 64px rgba(84,61,152,0.18)" }}
              />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          OUTCOME / STATS — the big numbers
      ═══════════════════════════════════════════════ */}
      <section
        className="w-full py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f0a2e 0%, #2d1f6e 60%, #543d98 100%)" }}
      >
        {/* Decorative glow orbs */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 600, height: 600,
            top: "50%", left: "5%",
            transform: "translateY(-50%)",
            background: "radial-gradient(circle, rgba(167,139,250,0.18) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 400, height: 400,
            bottom: "0%", right: "10%",
            background: "radial-gradient(circle, rgba(84,61,152,0.35) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <RevealSection>
            <div className="text-center mb-16">
              <Pill label="Outcome" />
              <h2
                className="font-black text-white leading-tight"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(2rem, 5vw, 4.5rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                It did what it{" "}
                <span style={{ color: "#a78bfa" }}>needed to do.</span>
              </h2>
              <p
                className="mt-4 max-w-lg mx-auto"
                style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", lineHeight: 1.7 }}
              >
                The reel went live in December 2025 and picked up strong traction on Instagram.
              </p>
            </div>
          </RevealSection>

          {/* Stats grid */}
          <div ref={statsRef} className="grid sm:grid-cols-3 gap-6 md:gap-10">
            {[
              { value: plays, raw: 5490885, label: "Plays", icon: "▶" },
              { value: views, raw: 868662, label: "Views", icon: "👁" },
              { value: likes, raw: 100654, label: "Likes", icon: "❤" },
            ].map(({ value, raw, label, icon }, i) => (
              <RevealSection key={label} delay={i * 0.12}>
                <div
                  className="relative overflow-hidden rounded-[28px] p-8 flex flex-col items-center justify-center text-center"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(167,139,250,0.2)",
                    boxShadow: "0 24px 48px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
                    minHeight: 200,
                  }}
                >
                  <span className="text-3xl mb-3">{icon}</span>
                  <span
                    className="font-black text-white block"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "clamp(2.8rem, 6vw, 5rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      background: "linear-gradient(135deg, #fff 0%, #c4b5fd 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {formatNum(value, raw)}
                  </span>
                  <span
                    className="mt-2 font-semibold tracking-[0.18em] uppercase text-xs"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {label}
                  </span>

                  {/* corner accent */}
                  <div
                    className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-20"
                    style={{ background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)" }}
                  />
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FULL-WIDTH VIDEO SECTION
      ═══════════════════════════════════════════════ */}
      <RevealSection>
        <div
          className="relative w-full"
          style={{ height: "clamp(340px, 60vw, 800px)" }}
        >
          <video
            src="/uppercasestudy-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 flex items-end justify-center pb-12"
            style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(2,0,24,0.7) 100%)" }}
          >
            <p
              className="text-white/60 text-sm tracking-widest uppercase text-center"
            >
              Campaign Film · Uppercase · 2025
            </p>
          </div>
        </div>
      </RevealSection>

      {/* ═══════════════════════════════════════════════
          OUR APPROACH TO AI-LED WORK
      ═══════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-28">
        <RevealSection>
          <div
            className="rounded-[32px] p-10 md:p-16"
            style={{
              background: "linear-gradient(135deg, #f7f5ff 0%, #ede9ff 100%)",
              border: "1px solid rgba(84,61,152,0.12)",
            }}
          >
            <Pill label="Our Approach" />
            <h2
              className="font-black leading-tight mb-8"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3.2rem)",
                color: "#0f0a2e",
                letterSpacing: "-0.025em",
                maxWidth: "20ch",
              }}
            >
              This is how we approach{" "}
              <span style={{ color: "#543d98" }}>AI-led work.</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  num: "01",
                  title: "Idea first. Always.",
                  body: "A lot of brands are using AI right now. Most of the time, it shows — because the work starts with the tool, not the thinking.",
                },
                {
                  num: "02",
                  title: "AI amplifies. Humans decide.",
                  body: "We don't approach it that way. For us, the idea comes first. AI just helps us get there faster, test more, and execute without friction.",
                },
                {
                  num: "03",
                  title: "The work is the proof.",
                  body: "If you're not using AI for the sake of it, but to make the work better — that's exactly how we think too.",
                },
              ].map(({ num, title, body }) => (
                <div
                  key={num}
                  className="p-7 rounded-[22px] bg-white"
                  style={{ boxShadow: "0 8px 32px rgba(84,61,152,0.08)" }}
                >
                  <p
                    className="font-black text-5xl mb-4"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "rgba(84,61,152,0.12)",
                      lineHeight: 1,
                    }}
                  >
                    {num}
                  </p>
                  <h3
                    className="font-bold text-[1.15rem] mb-2"
                    style={{ color: "#0f0a2e", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {title}
                  </h3>
                  <p style={{ ...prose, fontSize: "0.92rem" }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ═══════════════════════════════════════════════
          CLOSING CTA
      ═══════════════════════════════════════════════ */}
      <section
        className="w-full py-28 relative overflow-hidden"
        style={{ background: "#0f0a2e" }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute pointer-events-none"
          style={{
            inset: 0,
            background: "radial-gradient(ellipse at 80% 50%, rgba(84,61,152,0.35) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-[980px] mx-auto px-6 text-center relative z-10">
          <RevealSection>
            <img
              src="/uppercase.png"
              alt="Uppercase"
              className="h-10 mx-auto mb-10 object-contain"
              style={{ filter: "brightness(0) invert(1) opacity(0.7)" }}
            />

            <h2
              className="font-black text-white mb-6 leading-tight"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(2rem, 5vw, 4.5rem)",
                letterSpacing: "-0.03em",
              }}
            >
              If this looks like the kind of work{" "}
              <span style={{ color: "#a78bfa" }}>you want,</span>
            </h2>

            <p
              className="mb-10 mx-auto"
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "1.1rem",
                lineHeight: 1.75,
                maxWidth: "52ch",
              }}
            >
              If you're not using AI for the sake of it, but to make the work better we should talk.
            </p>

            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 font-semibold px-8 py-4 rounded-full text-white transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #543d98, #7c5cbf)",
                fontSize: "1rem",
                boxShadow: "0 8px 32px rgba(84,61,152,0.5)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 48px rgba(84,61,152,0.75)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(84,61,152,0.5)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Let's Build Something
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.75 9h10.5M9.75 4.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-30">
              <Link to="/casestudies" className="text-white text-sm hover:opacity-60 transition-opacity">
                ← Back to Case Studies
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Global styles for this page */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;900&display=swap');
      `}</style>
    </article>
  );
};