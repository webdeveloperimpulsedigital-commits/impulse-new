import{a as i,j as e}from"./index-BIQNvcgQ.js";import{S as u,N as g,P as x,A as f,a as w}from"./pagination-D8NAy9Dx.js";import{B as d}from"./FooterSection-CE4a5ooP.js";const j=()=>{const[a,m]=i.useState(!1),c=i.useRef(null);i.useEffect(()=>{const t=()=>m(window.innerWidth<768);return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]);const n=i.useMemo(()=>[{id:"1",name:"Rahul Shah",title:"Director, HEM Incense",company:"HEM Incense",content:"Our experience of working with the Impulse team has always matched our utmost satisfaction. From starting our new website until today, their dedication, work, and assistance have helped us increase our organic traffic to 300% and increased our lead generation to 150 leads monthly. In addition, their well-focused work has benefited both of our B2B websites. Indeed a team of experts who are always ready to guide and assist you.",avatar:"/rectangle-411.png",location:"Mumbai"},{id:"2",name:"Riddhi Merchant",title:"Partner, Laljee Godhoo & Co",company:"Laljee Godhoo & Co",content:"We love the freshness and authentic ideas team ID comes up with. They definitely take the customers ideas and vision of their company into consideration and work collaboratively. Great team to work with, no fuss!",avatar:"/riddhi.jpg",location:"Mumbai"},{id:"3",name:"Kimari Gosrani",title:"Director of Communication and Strategy, Goma Engineering Pvt. Ltd",company:"Goma Engineering",content:"What I love about the Impulse Digital team is that they are enthusiastic. They are always coming up with genuine suggestions and honest feedback to improve our processes hence ensuring noteworthy results!",avatar:"/rectangle-433.png",location:"Mumbai"},{id:"4",name:"Rajesh Phadke",title:"Co-Founder, Kloudq Technologies Limited",company:"Rhodius Dental",content:"Team Impulse Digital is very helpful and innovative when it comes to crafting digital marketing strategies for us. The best part about working with them is their respect for the strict timelines and the brand values. Even though we are in Pune and they are based in Mumbai, communication and coordination is never a problem and the work gets done efficiently.",avatar:"/Rajesh.jpg",location:"Pune"},{id:"5",name:"Riya Kothari",title:"Growth Engineer - Marketing Sales, Vendiman",company:"Vendiman",content:"Working with Impulse Digital has been an absolute delight. They have a good grasp of the briefs given and their agility, innovative creativity, and professionalism concerning deadlines is what sets them apart. The transformation in our SEO, PPC, and social media management has been incredible, our ranking to the first within three months with 90% of the keywords.",avatar:"/riya.jpg",location:"Mumbai"},{id:"6",name:"Zia Khan",title:"Digital Marketing Manager, Nahar Group",company:"Rafter Group",content:"I have been working with Impulse Digital team for almost 3 years. They have always been ready to help and find solution for any challenge. The Word 'NO' does not exist in their dictionary which is rare to find in many agencies. I wish all good luck and ETA of future to Impulse!",avatar:"/zia.jpg",location:"Mumbai"},{id:"7",name:"Vikram Bhave",title:"Business Development Manager, AUTOMAG India",company:"AUTOMAG India",content:"We first worked with Impulse Digital for our website design, which received great feedback from our management and clients. Impressed by their work, we also trusted them with SEO - and the results have been outstanding. Our organic leads grew from just 1–2 a month to over 20–25 quality B2B leads consistently. The team truly understood our business and delivered results that speak for themselves.",avatar:"/vikram.jpg",location:"Pune"},{id:"8",name:"Samrat Dhar",title:"Managing Partner, Shree Rubber Works",company:"Shree Rubber Works",content:"Partnering with Impulse Digital completely transformed our online presence. They revamped our website and implemented effective SEO strategies that grew our impressions by over 3,500% in just 5 months. We now receive quality leads from India and overseas, with major keywords ranking in the top 10. Their expertise and commitment truly made a difference - highly recommended!",avatar:"/Samrat.jpg",location:"Navi Mumbai"}],[]),o=n.slice(0,4),l=n.slice(4,8),s=({testimonial:t})=>e.jsxs("div",{className:"flex-shrink-0 bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 testimonial-card",style:{width:a?"100%":"550px",marginRight:"16px",height:"300px"},children:[e.jsxs("div",{className:"flex items-center mb-4",style:{gap:"12px"},children:[e.jsx("div",{style:{width:"20%",minWidth:"50px"},children:e.jsx("img",{className:"aspect-square h-full w-full rounded-full object-cover",alt:t.name,src:t.avatar,style:{width:a?"50px":"70px",height:a?"50px":"70px"}})}),e.jsxs("div",{style:{width:"70%"},children:[e.jsx("h4",{className:"[font-family:'DM_Sans',Helvetica] font-semibold text-[#030019] text-sm md:text-base leading-tight",children:t.name}),e.jsx("p",{className:"[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-xs md:text-sm leading-tight mt-1",children:t.title}),e.jsx("p",{className:"[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-xs md:text-sm leading-tight mt-1",children:t.location})]}),e.jsx("div",{style:{width:"10%"},children:e.jsx("img",{src:"/Vector 1.png",alt:"Quote icon",className:"w-4 h-4 md:w-6 md:h-6"})})]}),e.jsx("p",{className:"[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-xs md:text-sm leading-relaxed line-clamp-8",children:t.content})]}),h=()=>e.jsxs("div",{className:"block md:hidden px-4",children:[e.jsx(u,{modules:[g,x,f],slidesPerView:"auto",centeredSlides:!0,loop:!1,spaceBetween:16,onSwiper:t=>c.current=t,autoplay:{delay:4e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},pagination:{clickable:!0,bulletClass:"testimonials-pagination-bullet",bulletActiveClass:"testimonials-pagination-bullet-active"},navigation:{enabled:!0,prevEl:".mobile-prev",nextEl:".mobile-next"},className:"testimonials-swiper",children:n.map(t=>e.jsx(w,{children:e.jsx("div",{className:"pb-4",children:e.jsx(s,{testimonial:t})})},t.id))}),e.jsxs("div",{className:"flex justify-center items-center gap-4 mt-0 mb-12",children:[e.jsx(d,{"aria-label":"Previous testimonial",className:"mobile-prev grid place-items-center w-12 h-12 rounded-full bg-white shadow border border-gray-200 active:scale-95",children:e.jsx("img",{src:"/left-arrow.png",alt:"Prev",className:"w-9 transition-transform duration-300 group-hover:rotate-45 pointer-events-none"})}),e.jsx(d,{"aria-label":"Next testimonial",className:"mobile-next grid place-items-center w-12 h-12 rounded-full shadow border border-gray-200 active:scale-95",children:e.jsx("img",{src:"/right-arrow.png",alt:"Next",className:"w-9 transition-transform duration-300 group-hover:rotate-45 pointer-events-none"})})]})]}),p=()=>e.jsxs("div",{className:"hidden md:block pb-10",children:[e.jsx("div",{className:"relative mb-8 scroller","data-direction":"right",style:{"--duration":"36s"},children:e.jsx("div",{className:"scroller__inner",children:o.concat(o).map((t,r)=>e.jsx("div",{className:"px-2 md:px-2",children:e.jsx(s,{testimonial:t})},`r1-${r}`))})}),e.jsx("div",{className:"relative mb-8 scroller","data-direction":"left",style:{"--duration":"38s"},children:e.jsx("div",{className:"scroller__inner",children:l.concat(l).map((t,r)=>e.jsx("div",{className:"px-2 md:px-2",children:e.jsx(s,{testimonial:t})},`r2-${r}`))})})]});return e.jsxs("section",{className:"relative w-full bg-[#ffffff] py-12 md:py-16 lg:pt-0 overflow-hidden","data-section":"testimonials",children:[e.jsxs("div",{className:"max-w-[1280px] mx-auto px-4 md:px-8 mb-8 md:mb-12 text-center",children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("h2",{className:"[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight",children:[e.jsx("span",{className:"text-[#030019]  lg:text-[34px] sm:text-[16px]",children:"Testimonial"}),e.jsx("br",{}),e.jsx("span",{className:"font-bold text-[#543d98] lg:text-[49px] md:text-[52px] sm:text-[26px]",children:"Real Client Stories"})]})]}),e.jsx(h,{}),e.jsx(p,{}),e.jsx("style",{children:`
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
          /* narrower slides so left/right corners show */
          .testimonials-swiper .swiper-slide {
            width: 86% !important;           /* adjust 82–90% to control peek */
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
      `})]})};export{j as T};
