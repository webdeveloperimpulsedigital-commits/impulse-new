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

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div
      className="flex flex-col h-[380px] md:h-[420px] bg-[#f8f9fc] rounded-[20px] p-6 md:p-8 border border-gray-100 relative group hover:border-[#543d98]/30 transition-colors duration-300"
    >
      {/* Quote Icon */}
      <div className="absolute top-8 right-8 opacity-[0.04]">
        <img
          src="/Vector 1.png"
          alt="Quote icon"
          className="w-8 h-8 md:w-12 md:h-12 brightness-0"
        />
      </div>

      {/* Content */}
      <div className="flex-1 mb-6 pt-2 overflow-y-auto pr-2 custom-scrollbar">
        <p className="[font-family:'DM_Sans',Helvetica] font-normal text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-wrap relative z-10">
          {testimonial.content}
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#543d98]/20">
          <img
            className="w-full h-full object-cover"
            alt={testimonial.name}
            src={testimonial.avatar}
          />
        </div>
        <div className="flex flex-col">
          <h4 className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-sm md:text-base leading-tight">
            {testimonial.name}
          </h4>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-gray-500 text-xs leading-tight mt-1">
            {testimonial.title}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section
      className="relative w-full bg-[#ffffff] py-16 md:py-24"
      data-section="new-testimonials"
      style={{
        position: "relative",
        zIndex: 20,
        marginTop: "-89px",
        borderTopLeftRadius: "55px",
        borderTopRightRadius: "55px",
      }}
    >
      <div className="w-full overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">

          {/* Header Section */}
          <div className="mb-8 md:mb-12">
            <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[24px] md:text-[34px] leading-tight">
              <span className="text-[#030019]">From the teams</span>
              <br />
              <span className="font-bold text-[#543d98] text-[32px] md:text-[52px]">
                we work with.
              </span>
            </h2>
          </div>

          {/* Swiper Slider */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={24}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              loop={true}
              onSwiper={(s) => (swiperRef.current = s)}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                el: ".custom-pagination",
                clickable: true,
                bulletClass: "custom-bullet",
                bulletActiveClass: "custom-bullet-active",
              }}
              navigation={{
                enabled: true,
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              className="!pb-6 md:!pb-0"
            >
              {allTestimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="h-auto">
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Navigation Controls matching website CTAs */}
          <div className="flex items-center justify-between mt-8">
            {/* Arrows */}
            <div className="flex gap-4">
              <button className="custom-prev w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center transition-all duration-300 group hover:scale-105 active:scale-95">
                <img
                  src="/left-arrow.png"
                  alt="Prev"
                  className="w-4 md:w-5 transition-transform duration-300 pointer-events-none group-hover:rotate-45"
                />
              </button>
              <button className="custom-next w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#543d98] shadow-md flex items-center justify-center transition-all duration-300 group hover:scale-105 active:scale-95">
                <img
                  src="/right-arrow.png"
                  alt="Next"
                  className="w-4 md:w-5 transition-transform duration-300 pointer-events-none brightness-0 invert group-hover:rotate-45"
                />
              </button>
            </div>

            {/* Pagination */}
            <div className="custom-pagination flex items-center gap-1.5"></div>
          </div>

        </div>
      </div>

      <style>{`
        .custom-bullet {
          width: 8px;
          height: 8px;
          background: #e5e7eb;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .custom-bullet-active {
          width: 8px;
          height: 8px;
          background: #543d98;
        }
        .custom-pagination {
          width: auto !important;
          position: static !important;
        }
        
        /* Custom scrollbar for testimonials */
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 4px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background: #cbd5e1;
        }
      `}</style>
    </section>
  );
};

