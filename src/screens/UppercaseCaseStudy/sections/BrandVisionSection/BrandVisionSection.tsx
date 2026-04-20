// BrandVisionSection.tsx
import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";


export const BrandVisionSection = (): JSX.Element => {
  // ✅ Replace these with your actual images (keep them in /public)
  const heroImg = "/Resolution.png";
  const challengeImg = "/The Opportunity.png";
  const shift = "/The Shift.jpg";
  const Campaign = "/Building the Campaign.png";
  const real = "/Keeping It Real.png";
  const AI = "/AI.png";
  const outcome = "/outcome.jpg";
  const closing = "/closing.jpg";

  // ✅ Slider images (your own)
  const sliderImages = [
    "/best cbse school in thane west.jpg",
    "/best international schools in thane.jpg",
    "/best preschool in thane west.jpg",
    "/best preschool in thane.jpg",
    "/cbse schools in thane west.jpg",
    "/cbse schools in thane.jpg",
    "/international schools in thane.jpg",
    "/kindergarten in thane.jpg",
    "/nursery school.jpg",
    "/playgroups in thane west.jpg",
     "/playgroups in thane.jpg",
      "/playschools in thane.jpg",
       "/preschool in thane.jpg",
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const prev = () =>
    setActiveSlide((p) => (p - 1 + sliderImages.length) % sliderImages.length);
  const next = () => setActiveSlide((p) => (p + 1) % sliderImages.length);

  return (
    <section className="w-full bg-white lg:py-16 sm:py-10"
    id="sec-border">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="mb-12 lg:mb-14 pt-10">
          {/* <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">
            SEO Success Story
          </h2> */}
          <h1 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[28px] leading-tight">
            Turning a year-end insight into a product-led social campaign

          </h1>
          <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] lg:text-[17px] leading-relaxed max-w-[1400px] mt-4">
           When Uppercase wanted to show up around New Year, the obvious route was to do what everyone else does. Talk about resolutions, make a reel, move on.
We didn’t want to do that. Instead, we asked a simple question. What do people actually do with resolutions?
That’s where the idea came from.
          </p>
        </div>

<div className="w-full rounded-[20px] overflow-hidden">
  <video
    src="/uppercasestudy-video.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="
      w-full 
      h-[35vh] 
      sm:h-[35vh] 
      md:h-[80vh] 
      lg:h-[100vh] 
      object-contain
    "
  />
</div>
<br></br><br></br>
        <div className="space-y-16 lg:space-y-20">
          {/* ================= 1) HERO + RESULT ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <img
                  src={heroImg}
                  alt="SEO Success Story cover"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
                {/* <div className="absolute left-4 bottom-4 bg-white/90 backdrop-blur rounded-2xl px-4 py-3 shadow">
                  <p className="text-[12px] text-[#7B7B8A] [font-family:'DM_Sans',Helvetica]">
                    Result
                  </p>
                  <p className="text-[#543d98] text-[22px] font-bold [font-family:'DM_Sans',Helvetica]">
                    55% keywords on Page 1
                  </p>
                </div> */}
              </div>
            </div>

            {/* Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Carry Your Resolution
              </h3>
              {/* <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed">
                A focused SEO program to improve visibility for high-intent
                admission searches and drive stronger enquiry volume through
                organic discovery.
              </p> */}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Plays
                  </p>
                  <p className="text-[#543d98] text-[22px] font-bold [font-family:'DM_Sans',Helvetica]">
                    5.49M
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Views
                  </p>
                  <p className="text-[#543d98] text-[22px] font-bold [font-family:'DM_Sans',Helvetica]">
                    868K+
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Likes
                  </p>
                  <p className="text-[#543d98] text-[22px] font-bold [font-family:'DM_Sans',Helvetica]">
                    100K+
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= 2) CHALLENGE (with imagery) ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Copy */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                The Opportunity
              </h3>

              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-5">
                <strong>Making New Year feel less generic</strong><br></br>
                Every brand shows up at year-end saying roughly the same thing. New year, new goals, new you.
The challenge was to not sound like the tenth version of that.
At the same time, this couldn’t just be a “nice thought.” The product had to belong in the story.
So the job was clear:
              </p>

              <ul className="space-y-2 text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed [font-family:'DM_Sans',Helvetica] bg-[#F6F6FB] rounded-[28px] p-6">
                <li>• Make the idea feel real, not motivational</li>
                <li>• Make the brand feel natural, not inserted</li>
                <li>• Make it work as a social film, not just a seasonal post</li>
              </ul>

              {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Rankings
                  </p>
                  <p className="text-[#543d98] text-[20px] font-bold [font-family:'DM_Sans',Helvetica]">
                    Zero Page 1
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Traffic
                  </p>
                  <p className="text-[#543d98] text-[20px] font-bold [font-family:'DM_Sans',Helvetica]">
                    Limited Organic
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Impact
                  </p>
                  <p className="text-[#543d98] text-[20px] font-bold [font-family:'DM_Sans',Helvetica]">
                    Lost Enquiries
                  </p>
                </div>
              </div> */}
            </div>

            {/* Visual */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <img
                  src={challengeImg}
                  alt="Visibility challenge visual"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* ================= 3) STRATEGY (with imagery) ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <img
                  src={shift}
                  alt="SEO strategy visual"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                The Shift
              </h3>

              <div className="bg-[#F6F6FB] rounded-[28px] p-6">
                {/* <ul className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed space-y-3">
                  <li>
                    <span className="font-semibold text-[#030019]">
                      Purchase & admission intent keywords:
                    </span>{" "}
                    high-conversion search terms used during school selection.
                  </li>
                  <li>
                    <span className="font-semibold text-[#030019]">
                      On-page optimisation:
                    </span>{" "}
                    content updates, meta tags, keyword placement across key
                    pages.
                  </li>
                  <li>
                    <span className="font-semibold text-[#030019]">
                      Off-page authority building:
                    </span>{" "}
                    quality backlinks from education directories and local
                    citations.
                  </li>
                  <li>
                    <span className="font-semibold text-[#030019]">
                      Strategic blog publishing:
                    </span>{" "}
                    content addressing admission questions and school
                    highlights.
                  </li>
                </ul> */}
                <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-5">
                <strong>From “resolutions” to something you actually carry</strong><br></br>
                We moved away from thinking of resolutions as promises people make once and forget.
Instead, we treated them like something people carry with them. Through travel, work, routines, everyday life.
That one shift made everything simpler.
Now the story could move across real situations, while staying anchored in one idea:
you don’t just set resolutions. you carry them.
And once that clicked, the product didn’t need to be forced in. It just made sense.
              </p>
              </div>
            </div>
          </div>

          {/* ================= 4) KEYWORDS (with imagery) ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Copy */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Building the Campaign
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-5">
                <strong>Making the idea hold together</strong><br></br>
                A good line is easy. Making it work across multiple moments is harder.
We mapped out different situations where this idea could show up, and made sure everything still felt like part of one story.
That meant figuring out:
              </p>
              <ul className="space-y-2 text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed [font-family:'DM_Sans',Helvetica] bg-[#F6F6FB] rounded-[28px] p-6">
                <li>• What the mood should feel like</li>
                <li>• Where the story plays out</li>
                <li>• How the product shows up without interrupting the moment</li>
                <li>• How everything ties back to the same thought</li>
              </ul>
<p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-5">
                This is what keeps a campaign from feeling stitched together.
              </p>

              {/* <div className="flex flex-wrap gap-2">
                {[
                  "nursery school",
                  "international school in thane",
                  "cbsc school in thane",
                  "schools in thane",
                  "international preschool",
                ].map((k) => (
                  <span
                    key={k}
                    className="bg-[#F6F6FB] border border-[#E7E7F2] rounded-full px-4 py-2 text-[13px] text-[#4B4B5C] [font-family:'DM_Sans',Helvetica]"
                  >
                    {k}
                  </span>
                ))}
              </div> */}
            </div>

            {/* Visual */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <img
                  src={Campaign}
                  alt="Keyword research and intent mapping visual"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* ================= 5) RESULTS (with imagery) ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <img
                  src={AI}
                  alt="Results after first month optimisation"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                How We Used AI
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-6">
                <strong>Not the idea, but how we brought it to life</strong><br></br>
                This campaign was executed end-to-end using AI.
From scripting and visual development to model creation, video generation, voiceover, and background music, every part of the film was built using AI tools.
But that wasn’t the point.
AI didn’t give us the idea. It helped us execute it faster, more flexibly, and with far more room to experiment.
It allowed us to:
              </p>
<ul className="space-y-2 text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed [font-family:'DM_Sans',Helvetica] bg-[#F6F6FB] rounded-[28px] p-6">
                <li>• Explore multiple visual directions quickly</li>
                <li>• Iterate without production constraints</li>
                <li>• Build a complete film without traditional shoot dependencies</li>
                
              </ul>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-6">
              The result is what you see.<br></br>
A film that feels complete, not compromised.
            </p>
              {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Achievement
                  </p>
                  <p className="text-[#543d98] text-[20px] font-bold [font-family:'DM_Sans',Helvetica]">
                    55%
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Ranking
                  </p>
                  <p className="text-[#543d98] text-[20px] font-bold [font-family:'DM_Sans',Helvetica]">
                    Page 1
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Impact
                  </p>
                  <p className="text-[#543d98] text-[20px] font-bold [font-family:'DM_Sans',Helvetica]">
                    Enquiries ↑
                  </p>
                </div>
              </div> */}
            </div>
          </div>


          {/* ==========================Keep it real ==================*/}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            

            {/* Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Keeping It Real
              </h3>

              <div className="bg-[#F6F6FB] rounded-[28px] p-6">
                {/* <ul className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed space-y-3">
                  <li>
                    <span className="font-semibold text-[#030019]">
                      Purchase & admission intent keywords:
                    </span>{" "}
                    high-conversion search terms used during school selection.
                  </li>
                  <li>
                    <span className="font-semibold text-[#030019]">
                      On-page optimisation:
                    </span>{" "}
                    content updates, meta tags, keyword placement across key
                    pages.
                  </li>
                  <li>
                    <span className="font-semibold text-[#030019]">
                      Off-page authority building:
                    </span>{" "}
                    quality backlinks from education directories and local
                    citations.
                  </li>
                  <li>
                    <span className="font-semibold text-[#030019]">
                      Strategic blog publishing:
                    </span>{" "}
                    content addressing admission questions and school
                    highlights.
                  </li>
                </ul> */}
                <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-5">
                <strong>Making sure the product actually belongs</strong><br></br>
                If the product feels pasted in, the whole thing falls apart.
                So we kept it simple. The bag is part of movement. And this campaign is about carrying things forward.
                That overlap is what made it work.
                The story stayed emotional, but never drifted away from what the brand actually sells.
              </p>
              </div>
            </div>

            {/* Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <img
                  src={real}
                  alt="SEO strategy visual"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>


          {/* ==========================Outcome ==================*/}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
             {/* Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <img
                  src={outcome}
                  alt="SEO strategy visual"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Outcome
              </h3>

              <div className="bg-[#F6F6FB] rounded-[28px] p-6">
                {/* <ul className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed space-y-3">
                  <li>
                    <span className="font-semibold text-[#030019]">
                      Purchase & admission intent keywords:
                    </span>{" "}
                    high-conversion search terms used during school selection.
                  </li>
                  <li>
                    <span className="font-semibold text-[#030019]">
                      On-page optimisation:
                    </span>{" "}
                    content updates, meta tags, keyword placement across key
                    pages.
                  </li>
                  <li>
                    <span className="font-semibold text-[#030019]">
                      Off-page authority building:
                    </span>{" "}
                    quality backlinks from education directories and local
                    citations.
                  </li>
                  <li>
                    <span className="font-semibold text-[#030019]">
                      Strategic blog publishing:
                    </span>{" "}
                    content addressing admission questions and school
                    highlights.
                  </li>
                </ul> */}
                <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-5">
                <strong>It landed well</strong><br></br>
                The reel went live in December 2025 and performed strongly on Instagram.
              </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Plays
                  </p>
                  <p className="text-[#543d98] text-[22px] font-bold [font-family:'DM_Sans',Helvetica]">
                    5,490,885
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Views
                  </p>
                  <p className="text-[#543d98] text-[22px] font-bold [font-family:'DM_Sans',Helvetica]">
                   868,662
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Likes
                  </p>
                  <p className="text-[#543d98] text-[22px] font-bold [font-family:'DM_Sans',Helvetica]">
                    100,654
                  </p>
                </div>
              </div>

              </div>
            </div>

           
          </div>



          {/* ==========================Approach==================*/}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            

            {/* Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Approach
              </h3>

              <div className="bg-[#F6F6FB] rounded-[28px] p-6">
                {/* <ul className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed space-y-3">
                  <li>
                    <span className="font-semibold text-[#030019]">
                      Purchase & admission intent keywords:
                    </span>{" "}
                    high-conversion search terms used during school selection.
                  </li>
                  <li>
                    <span className="font-semibold text-[#030019]">
                      On-page optimisation:
                    </span>{" "}
                    content updates, meta tags, keyword placement across key
                    pages.
                  </li>
                  <li>
                    <span className="font-semibold text-[#030019]">
                      Off-page authority building:
                    </span>{" "}
                    quality backlinks from education directories and local
                    citations.
                  </li>
                  <li>
                    <span className="font-semibold text-[#030019]">
                      Strategic blog publishing:
                    </span>{" "}
                    content addressing admission questions and school
                    highlights.
                  </li>
                </ul> */}
                <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-5">
                <strong>This is how we approach AI-led work</strong><br></br>
                AI is powerful. But on its own, it doesn’t solve anything.
                What matters is the thinking behind it.
                This project worked because the idea was clear first.
                AI simply helped us bring it to life in a faster, more efficient way.
                That’s how we approach AI.
                Not as the idea.
                As the enabler.
              </p>
              </div>
            </div>

            {/* Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <video
  src="/UC - Kids.mp4"
  controls
  autoPlay
  loop
  muted
  className="w-full h-[50vh] object-cover rounded-[28px]"
/>
              </div>
            </div>
          </div>


          {/* ==========================Closing==================*/}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
             {/* Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <img
                  src={closing}
                  alt="SEO strategy visual"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Copy */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Closing
              </h3>

              <div className="bg-[#F6F6FB] rounded-[28px] p-6">
                {/* <ul className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed space-y-3">
                  <li>
                    <span className="font-semibold text-[#030019]">
                      Purchase & admission intent keywords:
                    </span>{" "}
                    high-conversion search terms used during school selection.
                  </li>
                  <li>
                    <span className="font-semibold text-[#030019]">
                      On-page optimisation:
                    </span>{" "}
                    content updates, meta tags, keyword placement across key
                    pages.
                  </li>
                  <li>
                    <span className="font-semibold text-[#030019]">
                      Off-page authority building:
                    </span>{" "}
                    quality backlinks from education directories and local
                    citations.
                  </li>
                  <li>
                    <span className="font-semibold text-[#030019]">
                      Strategic blog publishing:
                    </span>{" "}
                    content addressing admission questions and school
                    highlights.
                  </li>
                </ul> */}
                <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-5">
                If you’re exploring how AI can actually work for your brand, not just exist in it, we should talk.
                We help teams build campaigns where the thinking is strong, and AI is used to execute it better.
              </p>

               <Button
                          variant="outline"
                          className="w-[150px] h-[44px] group hidden sm:inline-flex items-center gap-2 px-4 py-5 bg-[#543d98] rounded-xl hover:bg-[#543d98] hover:text-[#ffffff] text-[#ffffff]"
                        >
                          <Link
                            to="/contact-us/"
                            className="[font-family:'DM_Sans',Helvetica] font-bold text-sm md:text-base"
                          >
                            Contact Us
                          </Link>
                          <img
                            src="/button-icon.svg"
                            alt="Arrow"
                            className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 group-hover:brightness-0 group-hover:invert pointer-events-none"
                          />
                        </Button>
              </div>
            </div>

           
          </div>



          
        </div>
      </div>
    </section>
  );
};
