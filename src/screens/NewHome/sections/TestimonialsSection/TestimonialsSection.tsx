import { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { GridPattern } from "../../../../components/ui/grid-pattern";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

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
  const swiperRef = useRef<SwiperType | null>(null);

  const allTestimonials: Testimonial[] = useMemo(
    () => [
      {
        id: "9",
        name: "Rukmani Vishwanath",
        title: "Head of Corporate Communications",
        company: "Grasim Industries Limited",
        content:
          "Impulse Digital has been a reliable partner in our social media journey. The team is innovative, dependable, humble, and highly collaborative, always taking full ownership of their work. With their creative insights and strong understanding of trends and technology in the social media space, they help us drive campaigns that deliver maximum impact.",
        avatar: "/Rukmani-Vishwanath.png",
        location: "Mumbai",
      },
      {
        id: "10",
        name: "Pratik Shetty",
        title: "Senior Manager, Consumer Insights",
        company: "Tata Consumer Products",
        content:
          "Impulse Digital has been a dependable partner for our social listening and category landscape needs. What stands out is their agility and flexibility, they consistently deliver high-quality outputs, often within tight timelines. They’ve also played a key role in tracking and evaluating our main campaign last year - Agent Chings - where their structured weekly updates on social presence, growth, and sentiment were particularly useful.",
        avatar: "/Pratik-Shetty.jpeg",
        location: "Mumbai",
      },
      {
        id: "11",
        name: "Ankit Meena",
        title: "Lead- Digital Marketing and Transformation",
        company: "Himalaya Wellness Company",
        content:
          "I have had the opportunity to work with Impulse Digital team across different organizations and mandates over the years. What stands out for me is the way they approach a brief. They do not look at it as just another task to execute. They take the time to understand the business context, ask the right questions, and come back with ideas that are practical as well as well thought through. Across digital strategy, brand communication, content, and performance-led initiatives, the team has consistently brought clarity, creativity, and a strong sense of ownership.",
        avatar: "/Ankit.png",
        location: "Mumbai",
      },
      {
        id: "2",
        name: "Riddhi Merchant",
        title: "Partner",
        company: "Laljee Godhoo & Co",
        content:
          "We love the freshness and authentic ideas team ID comes up with. They definitely take the customers ideas and vision of their company into consideration and work collaboratively. Great team to work with, no fuss!",
        avatar: "/riddhi.jpg",
        location: "Mumbai",
      },
      {
        id: "7",
        name: "Vikram Bhave",
        title: "Business Development Manager",
        company: "AUTOMAG India",
        content:
          "We first worked with Impulse Digital for our website design, which received great feedback from our management and clients. Impressed by their work, we also trusted them with SEO - and the results have been outstanding. Our organic leads grew from just 1–2 a month to over 20–25 quality B2B leads consistently. The team truly understood our business and delivered results that speak for themselves.",
        avatar: "/vikram.jpg",
        location: "Pune",
      },
      {
        id: "3",
        name: "Kimari Gosrani",
        title: "Director of Communication and Strategy",
        company: "Goma Engineering Pvt. Ltd",
        content:
          "What I love about the Impulse Digital team is that they are enthusiastic. They are always coming up with genuine suggestions and honest feedback to improve our processes hence ensuring noteworthy results!",
        avatar: "/rectangle-433.png",
        location: "Mumbai",
      },
    ],
    []
  );

  const TestimonialCard = ({ testimonial, index, isMobile }: { testimonial: Testimonial, index: number, isMobile?: boolean }) => (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index + 0.1, duration: 0.8 }}
      whileHover={{ scale: 1.02, y: -6 }}
      className={`${isMobile ? "h-[360px]" : "h-full"} relative grid grid-cols-[auto_1fr] gap-x-4 overflow-hidden border border-[#e2e8f0]/80 rounded-[20px] p-5 md:p-6 bg-white shadow-[0_4px_24px_-8px_rgba(84,61,152,0.08)] hover:shadow-[0_12px_40px_-12px_rgba(84,61,152,0.15)] hover:border-[#543d98]/30 transition-all duration-500 group`}
    >
      {/* Decorative Quote Mark */}
      <div className="absolute top-4 right-4 text-[#543d98]/[0.03] pointer-events-none transform group-hover:scale-110 group-hover:rotate-6 group-hover:text-[#543d98]/[0.05] transition-all duration-700">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.017 21L16.439 16.09C17.242 14.468 17.742 12.921 17.742 11.451C17.742 9.18 16.516 7.8 14.062 7.3V3.6C18.665 4.3 21 7.218 21 12.353C21 15.024 19.986 17.906 17.958 21H14.017ZM3 21L5.422 16.09C6.225 14.468 6.725 12.921 6.725 11.451C6.725 9.18 5.498 7.8 3.045 7.3V3.6C7.647 4.3 9.982 7.218 9.982 12.353C9.982 15.024 8.969 17.906 6.941 21H3Z" />
        </svg>
      </div>

      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#543d98]/5 to-[#543d98]/2 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
          <GridPattern
            width={24}
            height={24}
            x={-12}
            y={4}
            strokeDasharray="4 4"
            className="stroke-[#543d98]/10 absolute inset-0 h-full w-full mix-blend-overlay opacity-50 group-hover:opacity-100 transition-opacity duration-700"
          />
        </div>
      </div>

      <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#543d98] to-[#9b85d9] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"></div>
        <img
          alt={testimonial.name}
          src={testimonial.avatar}
          loading="lazy"
          className="w-full h-full rounded-full object-cover border-2 border-white shadow-sm group-hover:border-[#543d98]/10 transition-colors duration-300"
        />
      </div>

      <div className="relative z-10 flex flex-col h-full justify-start overflow-hidden">
        <div className="-mt-0.5 mb-2 md:mb-3 flex flex-col flex-shrink-0">
          <p className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-[15px] md:text-base leading-tight group-hover:text-[#543d98] transition-colors duration-300">
            {testimonial.name}
          </p>
          <span className="[font-family:'DM_Sans',Helvetica] block text-[11px] md:text-xs mt-1 leading-snug font-medium text-[#543d98]">
            {testimonial.title} at {testimonial.company}
          </span>
        </div>
        <blockquote className="mt-1 overflow-y-auto pr-2 pb-2 flex-1 min-h-0" style={{ scrollbarWidth: 'thin' }}>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-gray-600 group-hover:text-gray-800 text-[13px] md:text-[14px] leading-[1.6] whitespace-pre-wrap transition-colors duration-300">
            {testimonial.content}
          </p>
        </blockquote>
      </div>
    </motion.div>
  );

  return (
    <section
      className="relative w-full bg-[#fdfdff] pt-16 pb-24 md:pt-24"
      data-section="new-testimonials"
      style={{
        position: "relative",
        zIndex: 20,
        marginTop: "-89px",
        borderTopLeftRadius: "55px",
        borderTopRightRadius: "55px",
      }}
    >
      <div aria-hidden className="absolute inset-0 isolate z-0 contain-strict overflow-hidden rounded-t-[55px]">
        <div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(84,61,152,0.06)_0,rgba(84,61,152,0.02)_50%,rgba(84,61,152,0.01)_80%)] absolute top-0 left-0 h-[320px] w-[140px] -translate-y-[87.5px] -rotate-45 rounded-full" />
        <div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(84,61,152,0.04)_0,rgba(84,61,152,0.01)_80%,transparent_100%)] absolute top-0 left-0 h-[320px] w-[60px] translate-x-[5%] -translate-y-1/2 -rotate-45 rounded-full" />
        <div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(84,61,152,0.04)_0,rgba(84,61,152,0.01)_80%,transparent_100%)] absolute top-0 left-0 h-[320px] w-[60px] -translate-y-[87.5px] -rotate-45 rounded-full" />
      </div>

      <div className="w-full overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">

          <div className="mb-12 md:mb-16 flex flex-col items-start">
            <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[24px] md:text-[34px] leading-tight">
              <span className="text-[#030019]">From the teams</span>
              <br />
              <span className="font-bold text-[#543d98] text-[32px] md:text-[52px]">
                we work with.
              </span>
            </h2>
          </div>

          {/* MOBILE SLIDER */}
          <div className="block md:hidden relative mt-8 overflow-visible">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="!pb-8"
            >
              {allTestimonials.map((testimonial, index) => (
                <SwiperSlide key={testimonial.id} className="pb-4 pt-2">
                  <TestimonialCard testimonial={testimonial} index={index} isMobile />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Slider Controls */}
            <div className="mt-2 flex items-center justify-center relative z-20">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  aria-label="Previous testimonial"
                  className="w-14 h-14 rounded-full bg-white border border-gray-100 shadow-[0_4px_20px_-8px_rgba(84,61,152,0.15)] flex items-center justify-center text-[#543d98] hover:bg-gray-50 transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  aria-label="Next testimonial"
                  className="w-14 h-14 rounded-full bg-[#543d98] shadow-lg shadow-[#543d98]/20 flex items-center justify-center text-white hover:bg-[#432f80] transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19l7-7-7-7"/></svg>
                </button>
              </div>
            </div>
          </div>

          {/* DESKTOP GRID */}
          <div className="hidden md:block">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {allTestimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="break-inside-avoid">
                  <TestimonialCard testimonial={testimonial} index={index} isMobile={false} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

