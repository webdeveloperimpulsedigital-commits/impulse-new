// TestimonialsSection.tsx
import { useState, useEffect, useRef, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "../../../../components/ui/button";
 
interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  avatar: string;
  location: string;
}
 
export const TestimonialsSection = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);
 
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
 
  const allTestimonials: Testimonial[] = useMemo(
    () => [
      {
        id: "9",
        name: "Rukmani Vishwanath",
        title: "Head of Corporate Communications, Grasim Industries Limited | Pulp and Fibre",
        company: "Grasim Industries Limited",
        content:
          "Impulse Digital has been a reliable partner in our social media journey. The team is innovative, dependable, humble, and highly collaborative, always taking full ownership of their work. With their creative insights and strong understanding of trends and technology in the social media space, they help us drive campaigns that deliver maximum impact.",
        avatar: "/Rukmani-Vishwanath.png",
        location: "Mumbai",
      },
      {
        id: "10",
        name: "Pratik Shetty",
        title: "Senior Manager, Consumer Insights, Tata Consumer Products",
        company: "Tata Consumer Products",
        content:
          "Impulse Digital has been a dependable partner for our social listening and category landscape needs. What stands out is their agility and flexibility, they consistently deliver high-quality outputs, often within tight timelines.\n\nThey’ve also played a key role in tracking and evaluating our main campaign last year - Agent Chings - where their structured weekly updates on social presence, growth, and sentiment were particularly useful.\n\nTheir approach is practical, client-centric, and focused on delivering actionable insights. Overall, they are reliable and easy to work with.",
        avatar: "/Pratik-Shetty.jpeg",
        location: "Mumbai",
      },
      {
        id: "11",
        name: "Ankit Meena",
        title: "Lead- Digital Marketing and Transformation (Pharma)",
        company: "Himalaya Wellness Company",
        content:
          "I have had the opportunity to work with Impulse Digital team across different organizations and mandates over the years. What stands out for me is the way they approach a brief. They do not look at it as just another task to execute. They take the time to understand the business context, ask the right questions, and come back with ideas that are practical as well as well thought through.\n\nAcross digital strategy, brand communication, content, and performance-led initiatives, the team has consistently brought clarity, creativity, and a strong sense of ownership. They are dependable, collaborative, and easy to work with. Impulse Digital has been a valuable partner in shaping digital initiatives that need both thinking and execution.",
        avatar: "/Ankit.png",
        location: "Mumbai",
      },
      {
        id: "2",
        name: "Riddhi Merchant",
        title: "Partner, Laljee Godhoo & Co",
        company: "Laljee Godhoo & Co",
        content:
          "We love the freshness and authentic ideas team ID comes up with. They definitely take the customers ideas and vision of their company into consideration and work collaboratively. Great team to work with, no fuss!",
        avatar: "/riddhi.jpg",
        location: "Mumbai",
      },
      {
        id: "7",
        name: "Vikram Bhave",
        title: "Business Development Manager, AUTOMAG India",
        company: "AUTOMAG India",
        content:
          "We first worked with Impulse Digital for our website design, which received great feedback from our management and clients. Impressed by their work, we also trusted them with SEO - and the results have been outstanding. Our organic leads grew from just 1–2 a month to over 20–25 quality B2B leads consistently. The team truly understood our business and delivered results that speak for themselves.",
        avatar: "/vikram.jpg",
        location: "Pune",
      },
      {
        id: "3",
        name: "Kimari Gosrani",
        title: "Director of Communication and Strategy, Goma Engineering Pvt. Ltd",
        company: "Goma Engineering",
        content:
          "What I love about the Impulse Digital team is that they are enthusiastic. They are always coming up with genuine suggestions and honest feedback to improve our processes hence ensuring noteworthy results!",
        avatar: "/rectangle-433.png",
        location: "Mumbai",
      },
    ],
    []
  );
 
  const testimonialsRow1 = allTestimonials.slice(0, 3);
  const testimonialsRow2 = allTestimonials.slice(3, 6);
 
  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div
      className="flex-shrink-0 bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 testimonial-card"
      style={{
        width: isMobile ? "100%" : "550px",
        marginRight: "16px",
        height: isMobile ? "100%" : "auto",
        minHeight: "300px",
      }}
    >
      <div className="flex items-center mb-4" style={{ gap: "12px" }}>
        <div style={{ width: "20%", minWidth: "50px" }}>
          <img
            className="aspect-square h-full w-full rounded-full object-cover"
            alt={testimonial.name}
            src={testimonial.avatar}
            style={{
              width: isMobile ? "50px" : "70px",
              height: isMobile ? "50px" : "70px",
            }}
          />
        </div>
        <div style={{ width: "70%" }}>
          <h4 className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#030019] text-sm md:text-base leading-tight">
            {testimonial.name}
          </h4>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-xs md:text-sm leading-tight mt-1">
            {testimonial.title}
          </p>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-xs md:text-sm leading-tight mt-1">
            {testimonial.location}
          </p>
        </div>
        <div style={{ width: "10%" }}>
          <img
            src="/Vector 1.png"
            alt="Quote icon"
            className="w-4 h-4 md:w-6 md:h-6"
          />
        </div>
      </div>
      <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-xs md:text-sm leading-relaxed whitespace-pre-wrap">
        {testimonial.content}
      </p>
    </div>
  );
 
  /* ======== MOBILE SLIDER (corner previews; desktop unchanged) ======== */
  const MobileSlider = () => (
    <div className="block md:hidden px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={"auto"}         // narrower than viewport to show corners
        centeredSlides
        loop={false}                    // show all testimonials once
        spaceBetween={16}
        onSwiper={(s) => (swiperRef.current = s)}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          bulletClass: "testimonials-pagination-bullet",
          bulletActiveClass: "testimonials-pagination-bullet-active",
        }}
        navigation={{
          enabled: true,
          prevEl: ".mobile-prev",
          nextEl: ".mobile-next",
        }}
        className="testimonials-swiper"
      >
        {allTestimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="pb-4 h-full flex">
              <TestimonialCard testimonial={testimonial} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
 
      {/* Mobile arrows */}
      <div className="flex justify-center items-center gap-4 mt-0 mb-12">
        <Button
          aria-label="Previous testimonial"
          className="mobile-prev grid place-items-center w-12 h-12 rounded-full bg-white shadow border border-gray-200 active:scale-95"
        >
          <img
            src="/left-arrow.png"
            alt="Prev"
            className="w-9 transition-transform duration-300 group-hover:rotate-45 pointer-events-none"
          />
        </Button>
        <Button
          aria-label="Next testimonial"
          className="mobile-next grid place-items-center w-12 h-12 rounded-full shadow border border-gray-200 active:scale-95"
        >
          <img
            src="/right-arrow.png"
            alt="Next"
            className="w-9 transition-transform duration-300 group-hover:rotate-45 pointer-events-none"
          />
        </Button>
      </div>
    </div>
  );
 
  /* ======== DESKTOP SCROLLING (UNCHANGED) ======== */
  const DesktopScrolling = () => (
    <div className="hidden md:block pb-10">
      <div
        className="relative mb-8 scroller"
        data-direction="right"
        style={{ ["--duration" as any]: "36s" }}
      >
        <div className="scroller__inner">
          {testimonialsRow1.concat(testimonialsRow1).map((t, i) => (
            <div className="px-2 md:px-2 flex" key={`r1-${i}`}>
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
      </div>
 
      <div
        className="relative mb-8 scroller"
        data-direction="left"
        style={{ ["--duration" as any]: "38s" }}
      >
        <div className="scroller__inner">
          {testimonialsRow2.concat(testimonialsRow2).map((t, i) => (
            <div className="px-2 md:px-2 flex" key={`r2-${i}`}>
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
 
  return (
    <section
      className="relative w-full bg-[#ffffff] py-12 md:py-16 lg:pt-0 overflow-hidden"
      data-section="testimonials"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 mb-8 md:mb-12 text-center">
        <br></br><br></br>
        <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
          <span className="text-[#030019]  lg:text-[34px] sm:text-[16px]">
            Testimonial
          </span>
          <br />
          <span className="font-bold text-[#543d98] lg:text-[49px] md:text-[52px] sm:text-[26px]">
            Real Client Stories
          </span>
        </h2>
 
        {/* <p className="font-normal text-[#030019] text-sm md:text-base lg:leading-[40px] mx-auto max-w-8xl lg:text-[26px] sm:text-[16px]">
          You've heard our side of the story. Only fair you hear our client's too. The truth is we have not worked for them. Instead, we have worked with them to create stories that audiences recall, campaigns they've loved, and impact that can be measured. Here's to their stories in their words.
        </p> */}
      </div>
 
      <MobileSlider />
      <DesktopScrolling />
 
      <style>{`
        /* pagination */
        .testimonials-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #d1d5db;
          opacity: 1;
          border-radius: 999px;
          margin: 0 4px !important;
        }
        .testimonials-pagination-bullet-active {
          width: 18px;
          background: #543d98;
          border-radius: 6px;
        }
 
        /* desktop scrollers (unchanged) */
        .scroller { overflow: hidden; position: relative; }
        .scroller__inner {
          display: flex;
          width: max-content;
          animation: scroll var(--duration, 36s) linear infinite;
          will-change: transform;
          animation-play-state: running;
        }
        .scroller:hover .scroller__inner { animation-play-state: paused !important; }
        .scroller[data-direction="right"] .scroller__inner { animation-name: scroll-right; }
        .scroller[data-direction="left"] .scroller__inner { animation-name: scroll-left; }
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
 
        /* ===== MOBILE-ONLY corner previews (desktop unaffected) ===== */
        @media (max-width: 767px) {
          .testimonials-swiper { overflow: visible; }
          .testimonials-swiper .swiper-wrapper { align-items: stretch; }
          /* narrower slides so left/right corners show */
          .testimonials-swiper .swiper-slide {
            width: 86% !important;           /* adjust 82–90% to control peek */
            height: auto !important;
            transition: transform .5s ease, filter .5s ease, opacity .5s ease, z-index .5s ease;
          }
          /* slight dim on non-active */
          .testimonials-swiper .swiper-slide:not(.swiper-slide-active) .testimonial-card {
            filter: brightness(.96);
          }
          /* subtle depth for prev/next */
          .testimonials-swiper .swiper-slide-prev,
          .testimonials-swiper .swiper-slide-next {
            z-index: 2;
            transform: scale(.96);
          }
          .testimonials-swiper .swiper-slide-prev .testimonial-card,
          .testimonials-swiper .swiper-slide-next .testimonial-card {
            filter: blur(3px) brightness(.93);
          }
          .testimonial-card { border-radius: 18px; }
          /* keep long text tidy on mobile */
          .line-clamp-8 {
            display: -webkit-box;
            -webkit-line-clamp: 8;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      `}</style>
    </section>
  );
};
 
 