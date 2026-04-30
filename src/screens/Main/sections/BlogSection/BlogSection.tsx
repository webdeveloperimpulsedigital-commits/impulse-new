import { Button } from "../../../../components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface BlogPost {
  id: string | number;
  author: string;
  date: string;
  title: string;
  description: string;
  image: string;
  url: string;
  category?: string;
}

export const BlogSection = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://www.theimpulsedigital.com/blog/wp-json/wp/v2/posts?_embed&per_page=3"
        );
        const data = await response.json();

        const formattedPosts: BlogPost[] = data.map((post: any) => ({
          id: post.id,
          author: post._embedded?.author?.[0]?.name || "Admin",
          date: new Date(post.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          title: post.title?.rendered?.replace(/<[^>]*>/g, "") || "",
          description:
            post.excerpt?.rendered?.replace(/<[^>]*>/g, "").trim() || "",
          image:
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "/default-blog.jpg",
          url: post.link,
          category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Blog",
        }));

        setBlogPosts(formattedPosts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const BlogCard = ({ post }: { post: BlogPost }) => (
    <article
      className="card group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm
                 h-full flex flex-col basis-0 grow
                 transition-[flex-basis] duration-500 ease-in-out"
    >
      <div className="w-full md:h-[58%] hover:h-[58%] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          style={{ borderRadius: "12px" }}
        />
      </div>

      <div className="flex-1 p-4 md:p-5 flex flex-col min-h-0 overflow-hidden">
        <div className="flex items-center justify-between gap-3 mb-2 shrink-0">
          <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-xs md:text-sm">
            {post.date}
          </span>
        </div>

        <h3
          className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-sm md:text-base leading-snug mb-2
                       group-hover:text-[#543d98] transition-colors line-clamp-2"
        >
          {post.title}
        </h3>

        <div
          className="desc flex-1 overflow-hidden group-hover:overflow-auto pr-0 group-hover:pr-1
                     text-[#666] text-xs md:text-sm leading-relaxed"
        >
          <p className="[font-family:'DM_Sans',Helvetica] whitespace-pre-line">
            {post.description}
          </p>
        </div>

        <div
          className="mt-3 flex items-center gap-2 text-[#543d98] opacity-1 -translate-x-1
                        transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
        >
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-sm">
              Read More
            </span>
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );

  const MobileSlider = () => (
    <div className="lg:pt-5 block md:hidden px-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={16}
        loop={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".blog-button-next",
          prevEl: ".blog-button-prev",
        }}
        pagination={{
          clickable: true,
          bulletClass: "blog-pagination-bullet",
          bulletActiveClass: "blog-pagination-bullet-active",
        }}
        className="blog-swiper"
      >
        {blogPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="pb-4" style={{ height: "650px" }}>
              <BlogCard post={post} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center mt-4">
        <Button className="w-[220px] h-[44px] group flex items-center justify-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border-[#543d98] hover:border hover:border-[#543d98]">
          <Link
            to="/blogs"
            className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm group-hover:text-[#543d98] transition-colors duration-300"
          >
            See All Articles
          </Link>
          <img
            src="/button-icon.svg"
            alt="Arrow"
            className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 group-hover:brightness-0 group-hover:invert-0 group-hover:invert pointer-events-none"
          />
        </Button>
      </div>

      <div className="flex justify-center items-center gap-4 mt-4">
        <Button className="group blog-nav-button blog-button-prev ">
          <img
            src="/left-arrow.png"
            alt="Prev"
            className="w-9 transition-transform duration-300 group-hover:rotate-45 pointer-events-none"
          />
        </Button>
        <Button className="group blog-nav-button blog-button-next ">
          <img
            src="/right-arrow.png"
            alt="Next"
            className="w-9 transition-transform duration-300 group-hover:rotate-45 pointer-events-none"
          />
        </Button>
      </div>
    </div>
  );

  const DesktopGrid = () => (
    <div className="hidden md:block">
      <div className="blog-row flex gap-4 md:gap-5 md:h-[650px] overflow-hidden pt-2">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );

  if (loading) {
    return (
      <section className="bg-gray mx-auto px-0 md:px-8 lg:px-20 py-10 sm:pt-8 lg:pt-16 pb-16 sec-border-abt">
        <div className="mx-auto px-4 md:px-4">
          <p className="text-center text-[#666] text-sm md:text-base">
            Loading articles...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="bg-gray mx-auto px-0 md:px-8 lg:px-20 py-10 sm:pt-8 lg:pt-16 pb-16 sec-border-abt"
      id="sec-border"
      data-section="blog"
    >
      <div className="mx-auto px-4 md:px-4">
        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6">
          <div className="text-left max-w-2xl">
            <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
              <span className="text-[#030019] lg:text-[34px] sm:text-[16px]">
                Sharing is
              </span>
              <br />
              <span className="font-bold text-[#543d98] lg:text-[49px] md:text-[52px] sm:text-[26px]">
                How We Grow Together
              </span>
            </h2>
          </div>

          <div className="flex-shrink-0 hidden md:block">
            <Button className="w-[220px] h-[44px] group inline-flex items-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border-[#543d98] hover:border hover:border-[#543d98]">
              <Link
                to="https://www.theimpulsedigital.com/blog/"
                className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm md:text-base group-hover:text-[#543d98] transition-colors duration-300"
              >
                See All Articles
              </Link>
              <img
                src="/button-icon.svg"
                alt="Arrow"
                className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 group-hover:brightness-0 group-hover:invert-0 group-hover:invert pointer-events-none"
              />
            </Button>
          </div>
        </div>

        <MobileSlider />
        <DesktopGrid />
      </div>

      <style>{`
        .blog-row .card {
          flex: 1 1 0%;
          transition: flex-basis 0.6s ease-in-out;
        }
        .blog-row:has(.card:hover) .card { flex-basis: 22.5%; }
        .blog-row:has(.card:hover) .card:hover { flex-basis: 45%; }

        .desc::-webkit-scrollbar { width: 6px; }
        .desc::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 9999px; }
        .desc { scrollbar-width: thin; }

        #blog .w-full { height: 390px; border-radius: 13px; }
        .blog-row .card {
          flex: 1 1 0%;
          background: #fff;
          padding: 1rem;
          height: 650px;
          gap: 0px;
        }

        .blog-swiper { overflow: hidden; padding-bottom: 0px !important; }
        .blog-swiper .swiper-pagination {
          bottom: 20px !important;
          position: relative !important;
          text-align: center;
          margin-top: 20px;
        }
        .blog-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(84, 61, 152, 0.3);
          border-radius: 50%;
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .blog-pagination-bullet-active {
          background: #543d98;
        }

        .blog-button-prev { background: #fff; }
        .blog-nav-button {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          color: #666;
        }
        .blog-nav-button:hover {
          transform: scale(1.1);
          border-color: #543d98;
          background: #543d98;
          color: white;
        }
        .blog-nav-button svg {
          width: 20px;
          height: 20px;
          stroke-width: 2;
        }

        @media (max-width: 767px) {
          .blog-swiper { overflow: hidden; }
          .blog-swiper .swiper-slide {
            width: 86% !important;
            transition: transform .5s ease, filter .5s ease, opacity .5s ease, z-index .5s ease;
          }
          .blog-swiper .swiper-slide-prev,
          .blog-swiper .swiper-slide-next { transform: scale(.97); }

          .blog-swiper .swiper-pagination { display: none !important; }

          .card { background: #ffffff; padding: 0px; }
        }
      `}</style>
    </section>
  );
};