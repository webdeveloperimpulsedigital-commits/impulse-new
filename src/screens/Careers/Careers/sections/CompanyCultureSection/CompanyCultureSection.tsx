import React, { useMemo } from "react";

const WALL_IMAGES = [
  "/Career Page Images-14.png",
  "/Career Page Images-15.png",
    "/Career Page Images-06.png",
  "/Career Page Images-07.png",
  "/Career Page Images-08.png",
  "/Career Page Images-03.png",
  "/Career Page Images-05.png",
  "/Artboard 2 copy 17.jpg",
  "/Artboard 2 copy 21.jpg",
  "/Artboard 2 copy 20.jpg",
  "/Artboard 2 copy 18.jpg",
  "/Artboard 2 copy 15.jpg",
  "/Career Page Images-09.png",
  "/Career Page Images-10.png",
  "/Career Page Images-11.png",
  "/Career Page Images-12.png",
  "/Career Page Images-13.png",
  "/Career Page Images-01.png",

  
];

const Lane: React.FC<{ images: string[]; direction: "ltr" | "rtl"; speedSec?: number }> = ({
  images,
  direction,
  speedSec = 36,
}) => {
  const loop = useMemo(() => [...images, ...images], [images]);

  return (
    <div className="relative w-full overflow-hidden group">
      <ul
        className={`
          flex gap-8 w-max
          ${direction === "ltr" ? "animate-marquee-ltr" : "animate-marquee-rtl"}
          group-hover:[animation-play-state:paused]
        `}
        style={{ animationDuration: `${speedSec}s` }}
      >
        {loop.map((src, i) => (
          <li key={i} className="shrink-0">
            <div
              className={`
                relative overflow-hidden rounded-[32px] shadow-lg
                w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[32vw] xl:w-[28vw]
                h-[70vw] sm:h-[50vw] md:h-[40vw] lg:h-[30vw] xl:h-[26vw]
                ${i % 2 === 0 ? "mt-6" : "-mt-6"}
                transition-transform duration-300 hover:scale-[1.05]
              `}
            >
              <img
                src={src}
                alt={`Impulse wall ${i + 1}`}
                className="absolute inset-0 w-full h-full object-fill rounded-[32px]"
                loading="lazy"
              />
            </div>
          </li>
        ))}
      </ul>

      <style>{`
        @keyframes marquee-ltr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marquee-rtl {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-ltr { animation: marquee-ltr linear infinite; }
        .animate-marquee-rtl { animation: marquee-rtl linear infinite; }
      `}</style>
    </div>
  );
};

export const CompanyCultureSection = (): JSX.Element => {
  return (
    <section
      className="w-full bg-white py-20 lg:pt-28 lg:pb-32"
      data-section="wall-of-impulse"
    >
      {/* <div className="max-w-[1280px] mx-auto px-4 lg:px-8 mb-8">
        <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl lg:text-4xl">
          Wall of Impulse
        </h3>
        <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] max-w-3xl mt-2">
          A visual flow of moments — two rows sliding in opposite directions,
          each image carrying the pulse of creativity, teamwork, and fun.
        </p>
      </div> */}

      <Lane images={WALL_IMAGES} direction="ltr" speedSec={45} />
      <div className="h-12" />
      <Lane images={[...WALL_IMAGES].reverse()} direction="rtl" speedSec={38} />
    </section>
  );
};
