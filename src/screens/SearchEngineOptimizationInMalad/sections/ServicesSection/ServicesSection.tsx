// ServicesSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../../../components/ui/button";

const ServicesSection = () => {
  const services = [
    "Employer Branding",
    "SEO",
    "Website Development",
    "Branding",
    "Pay-Per-Click",
    "Content Writing Services",
  ];

  const stackRef = useRef(null);

  // Mobile slider refs
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  // 👉 added state for dots
  const [slide, setSlide] = useState(0);

  const data = [
    {
      n: "01",
      title: "AI SEO",
      link: "/services/search-engine-optimization/ai-seo-services",
      points: [
        "Search is gradually moving beyond just traditional results. People are also relying on AI tools to find answers, which changes how content is discovered. We make sure your website content is structured in a way that works across both search engines and these newer platforms..",
      ],
      img: "/AI SEO.jpg",
    },
    {
      n: "02",
      title: "Enterprise SEO",
      link: "/services/search-engine-optimization/enterprise-seo-services",
      points: [
        "As websites grow, small issues can start affecting performance, things like indexing gaps or unclear structure. We work on organizing your website better so search engines can navigate and understand it properly.",
      ],
      img: "/service section 520 x 340 - Enterprise SEO.jpg",
    },
    {
      n: "03",
      title: "E-Commerce SEO",
      link: "/services/search-engine-optimization/ecommerce-seo-services",
      points: [
        "For online businesses, visibility directly impacts sales. If your products aren’t easy to find, you’re likely losing potential customers. We focus on improving how your products appear in search so the right users can discover them.",
      ],
      img: "/service section 520 x 340 - Ecommerce SEO.jpg",
    },
    {
      n: "04",
      title: "Local SEO",
      link: "/services/search-engine-optimization/local-seo-services",
      points: [
        "If your audience is in Malad, local visibility becomes important. People nearby are usually closer to taking action. Our strategies are built to help you show up in those searches and attract relevant local inquiries.",
      ],
      img: "/service section 520 x 340 - Local SEO.jpg",
    },
    {
      n: "05",
      title: "B2B SEO",
      link: "/services/search-engine-optimization/b2b-seo-services",
      points: [
        "For service-based businesses, not every visitor matters, but the right visitor does. We focus on targeting searches that reflect actual intent, so you get more meaningful leads.",
      ],
      img: "/service section 520 x 340 - B2B SEO.jpg",
    },
    {
      n: "06",
      title: "App Store Optimization (ASO)",
      link: "/services/search-engine-optimization/aso-services",
      points: [
        "If you have an app, visibility inside app stores is just as important as website visibility. We improve how your app appears so users can find and download it more easily.",
      ],
      img: "/App Store Optimization (ASO).jpg",
    },
    {
      n: "07",
      title: "International SEO",
      link: "/services/search-engine-optimization/international-seo-services",
      points: [
        "If you’re planning to expand beyond your current market, your SEO setup needs to support that. We help structure your website so it can target different regions effectively.",
      ],
      img: "/service section 520 x 340 - International SEO.jpg",
    },

    {
      n: "08",
      title: "Shopify SEO",
      link: "/services/search-engine-optimization/shopify-seo-services",
      points: [
        "Shopify stores sometimes face structural limitations that can affect rankings. We optimize your store so search engines can better understand your products and pages.",
      ],
      img: "/service section 520 x 340 - Shopify SEO.jpg",
    },
    {
      n: "09",
      title: "Conversion Rate Optimization",
      link: "/services/search-engine-optimization/cro-services",
      points: [
        "Traffic alone doesn’t guarantee results. What users do after landing on your site matters just as much. We make small but important changes that help improve conversions over time.",
      ],
      img: "/Conversion Rate Optimization.jpg",
    },
    {
      n: "10",
      title: "Content Marketing",
      link: "/services/search-engine-optimization/content-marketing-services",
      points: [
        "Content works best when it answers what people are actually searching for. We focus on creating useful, relevant content instead of adding pages just for the sake of it.",
      ],
      img: "/Content marketing.jpg",
    },
  ];

  // Desktop: active sticky card (same IntersectionObserver logic)
  useEffect(() => {
    const container = stackRef.current;
    if (!container) return;
    const cards = Array.from(container.querySelectorAll(".card"));

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        cards.forEach((c) => c.classList.remove("is-active"));
        if (visible) visible.target.classList.add("is-active");
      },
      { threshold: [0.55, 0.75] }
    );

    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  // Mobile slider: arrows + swipe (same as your HTML) — only added setSlide to keep dots in sync
  useEffect(() => {
    const slider = sliderRef.current;
    const track = trackRef.current;
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;
    if (!slider || !track || !prevBtn || !nextBtn) return;

    let idx = 0;
    const slideW = () => slider.clientWidth;

    const go = (i) => {
      const max = data.length - 1;
      idx = Math.max(0, Math.min(i, max));
      track.style.transform = `translateX(${-idx * slideW()}px)`;
      prevBtn.disabled = idx === 0;
      nextBtn.disabled = idx === max;
      setSlide(idx); // <-- keep dots in sync
    };

    const onResize = () => go(idx);
    window.addEventListener("resize", onResize);

    const onPrev = () => go(idx - 1);
    const onNext = () => go(idx + 1);
    prevBtn.addEventListener("click", onPrev);
    nextBtn.addEventListener("click", onNext);

    // swipe/drag
    let startX = 0,
      curX = 0,
      dragging = false;

    const onDown = (e) => {
      dragging = true;
      startX = e.clientX;
      curX = startX;
      track.style.transition = "none";
    };

    const onMove = (e) => {
      if (!dragging) return;
      curX = e.clientX;
      const dx = curX - startX;
      track.style.transform = `translateX(${-idx * slideW() + dx}px)`;
    };

    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      track.style.transition = "transform .35s ease";
      const dx = curX - startX;
      if (Math.abs(dx) > 60) go(idx + (dx < 0 ? 1 : -1));
      else go(idx);
      startX = 0;
      curX = 0;
    };

    track.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    go(0);

    return () => {
      window.removeEventListener("resize", onResize);
      prevBtn.removeEventListener("click", onPrev);
      nextBtn.removeEventListener("click", onNext);
      track.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [data.length]);

  // 👉 helper for dot click — no layout changes
  const goTo = (i) => {
    const slider = sliderRef.current;
    const track = trackRef.current;
    if (!slider || !track) return;
    const max = data.length - 1;
    const index = Math.max(0, Math.min(i, max));
    const w = slider.clientWidth;
    setSlide(index);
    track.style.transition = "transform .35s ease";
    track.style.transform = `translateX(${-index * w}px)`;
  };

  return (
    <>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        img{display:block;max-width:100%;height:auto;}

        .wrap{max-width:100%;margin:auto;position:relative;background:var(--bg);padding:4rem 6rem}

        .eyebrow{font-size:20px;letter-spacing:.02em;color:#b7b9c9;margin-bottom:4px;opacity:.85}
        .h1{font-size:56px;font-weight:800;line-height:1.05;margin-bottom:36px}

        /* ---------- DESKTOP (unchanged sticky effect) ---------- */
        .stack{display:grid;grid-template-columns:1fr auto;gap:18px}
        .section{min-height:100vh;display:flex;align-items:center;justify-content:center}
        .card{
          min-height:600px; position:sticky; top:64px;
          display:flex; align-items:flex-start; justify-content:space-between; gap:42px;
          width:100%; background:#020018;
          border-radius:var(--radius); padding:180px 10px 0px; box-shadow:var(--shadow);
          transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .card.is-active{transform:scale(1.01);border:none;}
        .num{flex:0 0 72px;font-weight:700;font-size:42px;letter-spacing:.02em;line-height:1;color:#fff;margin-top:6px}
        .copy{flex:1 1 auto;width:300px;padding-right:10px}
        .copy h3{font-size:40px;font-weight:700;letter-spacing:.01em;margin-bottom:18px}
        .copy ul{list-style:none;display:grid;gap:16px}
        .copy li{font-size:18px;color:#e9eaf5;padding-left:0px;position:relative}
        .copy li::before{content:none;position:absolute;left:0;top:.68em;width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.8)}
        .visual{flex:0 0 420px;display:flex;justify-content:flex-end}
        .shot{width:420px;height:340px;overflow:hidden;border-radius:32px;position:relative;background:linear-gradient(180deg,rgba(255,255,255,.04),transparent)}
        .shot img{width:100%;height:100%;object-fit:cover;border-radius:32px}

        /* Make the title area sticky */
        .wrap > .top-0{
          position: sticky;
          top: 0;
          z-index: 99;
          background: #020018;
        }

        /* Draw a thin HR right under the title block */
        .wrap > .top-0::after{
          content: "";
          display: block;
          height: 1px;
          width: 100%;
          margin-top: 40px;
          background: rgba(255,255,255,0.15);
        }

        /* Ensure the eyebrow line is visible */
        .wrap > .top-0 span:first-child{
          display: block;
          color: rgba(255,255,255,0.72) !important;
          margin-bottom: 4px;
        }

        /* ---------- MOBILE SLIDER (only on <= 980px) ---------- */
        .mobile-slider{display:none}

        @media (max-width:980px){
          .py-8{ padding-top:3rem; }
          .wrap{padding:2.8rem 1.25rem}
          .stack{display:none}
          .mobile-slider{display:block;position:relative;overflow:hidden}
          .track{display:flex;will-change:transform;transition:transform .35s ease}
          .mcard{
            flex:0 0 100%;
            background:var(--card);
            border-radius:var(--radius);
            padding: 45px 0px 20px 10px;
            min-height: calc(88vh - 190px);
            display:flex;flex-direction:column;gap:18px;
            box-shadow:var(--shadow);
          }
          .m-num{font-size:16px;font-weight:400; line-height: 0px;}
          .m-title{font-size:20px;font-weight:700}
          .m-list{list-style:none;display:grid;gap:12px}
          .m-list li{font-size:16px;color:#e9eaf5;padding-left:0px;position:relative}
          .m-list li::before{content:none;position:absolute;left:0;top:.58em;width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.8)}
          .m-shot{width:100%;border-radius:20px;overflow:hidden}
          .m-shot img{width:100%;height:auto;border-radius:20px}

          .mnav{
            position:relative;left:0;right:0;bottom:20px;
            display:flex;justify-content:center;gap:12px;pointer-events:none;
          }
          .navbtn{
            pointer-events:auto;
            width:50px;height:50px;border-radius:999px;border:1px solid rgba(255,255,255,.25);
            background:#ffffff;
            display:grid;place-items:center;backdrop-filter:blur(4px);
          }
          .navbtn svg{width:50px;height:50px}
          .navbtn.next{background:var(--accent);border-color:var(--accent)}
          .navbtn[disabled]{opacity:1}

          .wrap > .top-0{
            position: relative;
            top: 0;
            z-index: 99;
            background: var(--bg);
          }
        }

        @media (max-width:1100px){
          .visual{flex:0 0 440px}
          .shot{width:440px;height:290px}
          .copy h3{font-size:34px}
        }
      `}</style>

      <section
        className="relative w-full bg-[#020018]"
        id="sec-border"
        data-section="services"
      >
        <div className="wrap">
          {/* Fixed/Sticky Header */}
          <div className="top-0 w-full lg:py-8 sm:py-40 md:py-[60px] z-50">
            <div className="mx-auto relative">
              <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
                <span className="text-[#ffffffb2]  lg:text-[34px] sm:text-[16px]">
                  SEO That
                </span>

                <span className="font-bold text-[#ffffff] lg:text-[52px] md:text-[52px] sm:text-[26px]">
                  Moves the Needle
                </span>
              </h2>
            </div>
          </div>

          {/* DESKTOP: sticky stack */}
          <div className="stack" id="stack" ref={stackRef}>
            {data.map((s, i) => (
              <React.Fragment key={s.n}>
                <article className="card  mx-auto" data-index={i}>
                  <div className="num">{s.n}</div>
                  <div className="copy">
                    <h3 className="w-full lg:w-[340px] [font-family:'Satoshi', sans-serif] font-semibold text-white text-[28px] lg:text-[35px] leading-[32px] lg:leading-[40px]">
                      <a href={s.link || ""}>{s.title}</a>
                    </h3>
                    <ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
                  </div>

                  <div className="visual ">
                    <div className="shot">
                      <a href={s.link || "#"}>
                        <img src={s.img} alt={s.title} />
                      </a>
                    </div>
                  </div>

                  <div className="group flex w-60 items-start justify-center lg:justify-end pt-2 lg:pt-[7px]">
                    <a href={s.link || ""}>
                      <img
                        src="/Arrow.png"
                        alt="Arrow"
                        className="w-[56px] lg:w-[80px] object-contain transition-transform duration-300 group-hover:rotate-45 pointer-events-none"
                      />
                    </a>
                  </div>
                </article>

                <div style={{ height: "1px", visibility: "hidden" }} />
              </React.Fragment>
            ))}
          </div>

          {/* MOBILE: horizontal slider */}
          <div className="mobile-slider" id="mobileSlider" ref={sliderRef}>
            <div className="track" id="mobileTrack" ref={trackRef}>
              {data.map((s) => (
                <div className="mcard" key={`m-${s.n}`}>
                  <div className="m-num text-white">{s.n}</div>
                  <div className="m-title text-white">{s.title}</div>
                  <ul className="m-list">
                    {s.points.map((p) => (
                      <li key={`m-${s.n}-${p}`}>{p}</li>
                    ))}
                  </ul>
                  <div className="m-shot">
                    <img src={s.img} alt={s.title} />
                  </div>
                </div>
              ))}
            </div>

            <center>
              <div className="flex items-center justify-center gap-2 mb-5">
                {data.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => goTo(i)}
                    className={`h-2 rounded-full transition-all ${slide === i ? "w-5 bg-[#543d98]" : "w-2 bg-[#D1D5DB]"
                      }`}
                  />
                ))}
              </div>
            </center>
            <br />

            <div className="mnav">
              <Button
                className="navbtn prev group w-15 h-15 rounded-full border-2 border-[#543d98] bg-white flex items-center justify-center group transition-all duration-300 hover:bg-[#f5f5f5] hover:border-[#543d98]"
                id="prevBtn"
                ref={prevBtnRef}
                aria-label="Previous"
              >
                <img
                  src="/left-arrow.png"
                  alt="Next"
                  className="w-9 transition-transform duration-300 group-hover:rotate-45 pointer-events-none"
                />
              </Button>

              <Button
                className="navbtn next group w-15 h-15 rounded-full border-2 border-[#EAEAEA] bg-[#543d98] flex items-center justify-center group transition-all duration-300"
                id="nextBtn"
                ref={nextBtnRef}
                aria-label="Next"
              >
                <img
                  src="/right-arrow.png"
                  alt="Next"
                  className="w-9 transition-transform duration-300 group-hover:rotate-45 pointer-events-none"
                />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
export { ServicesSection };
