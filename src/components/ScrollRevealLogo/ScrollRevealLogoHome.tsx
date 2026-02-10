import React, { useEffect, useLayoutEffect, useState } from "react";

interface ScrollRevealLogoProps {
  className?: string;
}

type DeviceState = {
  isMobile: boolean;
  isTablet: boolean;
};

const getDeviceState = (): DeviceState => {
  if (typeof window === "undefined") return { isMobile: false, isTablet: false };
  const w = window.innerWidth;
  return { isMobile: w < 768, isTablet: w >= 768 && w < 1024 };
};

const getHeroSize = (isMobile: boolean, isTablet: boolean) =>
  isMobile ? "60px" : isTablet ? "80px" : "300px";

export const ScrollRevealLogoHome: React.FC<ScrollRevealLogoProps> = ({
  className = "",
}) => {
  const [{ isMobile, isTablet }, setDevice] = useState<DeviceState>(() =>
    getDeviceState()
  );

  // ✅ Start with a safe base style so logo never flashes huge on first paint
  const [logoStyle, setLogoStyle] = useState<React.CSSProperties>(() => {
    const { isMobile, isTablet } = getDeviceState();
    const size = getHeroSize(isMobile, isTablet);

    return {
      position: "absolute",
      top: "0px",
      right: "0px",
      width: size,
      height: size,
      opacity: 0, // keep hidden until we compute correct section placement
      zIndex: 999,
      transition: "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
      willChange: "top,left,right,width,height,filter,opacity,transform",
    };
  });

  const [isVisible, setIsVisible] = useState(false);

  // Track screen size
  useEffect(() => {
    const checkScreenSize = () => setDevice(getDeviceState());
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // ✅ useLayoutEffect prevents the "big flash" by applying style before paint
  useLayoutEffect(() => {
    const handleScroll = () => {
      const winHeight = window.innerHeight;
      const vw = window.innerWidth;
      const sections = document.querySelectorAll("[data-section]");

      const applyStyle = (style: React.CSSProperties) => {
        setIsVisible(true);
        setLogoStyle((prev) => ({
          ...prev,
          ...style,
          opacity: 1, // reveal only after computed
        }));
      };

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        // Check if section is in the middle of viewport
        if (rect.top <= winHeight / 2 && rect.bottom >= winHeight / 2) {
          const sectionName = section.getAttribute("data-section") || "";

          // Absolute position on page
          const sectionTop = window.scrollY + rect.top;

          // (kept from your code, even if unused in styles right now)
          const sectionHeight = rect.height;
          const scrollProgress = Math.max(
            0,
            Math.min(1, (window.scrollY - sectionTop) / sectionHeight)
          );
          void scrollProgress;

          // HERO
          if (sectionName === "hero") {
            const size = getHeroSize(isMobile, isTablet);
            const top = sectionTop + (isMobile ? 180 : isTablet ? 200 : 250);
            const right = isMobile
              ? 40
              : isTablet
              ? 40
              : Math.max(80, Math.floor(vw * 0.1));

            applyStyle({
              position: "absolute",
              top: `${top}px`,
              right: `${right}px`,
              left: "auto",
              transform: "none",
              filter: "brightness(1)",
              width: size,
              height: size,
              transition: "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
            });
          }

          // HERO - NAVI MUMBAI
          else if (sectionName === "hero-navi-mumbai") {
            const size = getHeroSize(isMobile, isTablet);
            const top = sectionTop + (isMobile ? 120 : isTablet ? 200 : 250);
            const right = isMobile
              ? 40
              : isTablet
              ? 40
              : Math.max(80, Math.floor(vw * 0.1));

            applyStyle({
              position: "absolute",
              top: `${top}px`,
              right: `${right}px`,
              left: "auto",
              transform: "none",
              filter: "brightness(1)",
              width: size,
              height: size,
              zIndex: 999,
              transition: "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
            });
          }

          // INDIA HERO
          else if (sectionName === "india-hero") {
            const size = getHeroSize(isMobile, isTablet);
            const top = sectionTop + (isMobile ? 120 : isTablet ? 200 : 250);
            const right = isMobile
              ? 40
              : isTablet
              ? 40
              : Math.max(80, Math.floor(vw * 0.1));

            applyStyle({
              position: "absolute",
              top: `${top}px`,
              right: `${right}px`,
              left: "auto",
              transform: "none",
              filter: "brightness(1)",
              width: size,
              height: size,
              zIndex: 999,
              transition: "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
            });
          }

          // ABOUT
          else if (sectionName === "about") {
            const size = isMobile ? "50px" : isTablet ? "60px" : "80px";
            const top = sectionTop + (isMobile ? 30 : isTablet ? 100 : 120);
            const right = isMobile
              ? 20
              : isTablet
              ? 40
              : Math.max(80, Math.floor(vw * 0.08));

            applyStyle({
              position: "absolute",
              top: `${top}px`,
              left: "auto",
              right: `${right}px`,
              transform: "none",
              filter: "brightness(0)",
              width: size,
              height: size,
              zIndex: 999,
              transition: "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
            });
          }

          // SERVICES
          else if (sectionName === "services") {
            const size = isMobile ? "60px" : isTablet ? "80px" : "100px";
            const top = sectionTop + (isMobile ? 65 : isTablet ? 80 : 120);
            const right = isMobile
              ? 20
              : isTablet
              ? 40
              : Math.max(80, Math.floor(vw * 0.1));

            applyStyle({
              position: "absolute",
              top: `${top}px`,
              right: `${right}px`,
              left: "auto",
              transform: "none",
              filter: "brightness(1)",
              width: size,
              height: size,
              zIndex: 999,
              transition: "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
            });
          }

          // CLIENTS
          else if (sectionName === "clients") {
            const size = isMobile ? "50px" : isTablet ? "70px" : "80px";
            const top = sectionTop + (isMobile ? 50 : isTablet ? 260 : 80);
            const left = isMobile
              ? 300
              : isTablet
              ? 650
              : Math.max(10, Math.floor(vw * 0.56));

            applyStyle({
              position: "absolute",
              top: `${top}px`,
              left: left,
              right: "auto",
              transform: "translateX(-50%)",
              filter: "brightness(0)",
              width: size,
              height: size,
              zIndex: 999,
              transition: "all 1.5s cubic-bezier(0.22, 1, 0.36, 1)",
            });
          }

          // PORTFOLIO
          else if (sectionName === "portfolio") {
            const size = isMobile ? "50px" : isTablet ? "70px" : "80px";
            const top = sectionTop + (isMobile ? 130 : isTablet ? 260 : 60);
            const left = isMobile
              ? 300
              : isTablet
              ? 650
              : Math.max(10, Math.floor(vw * 0.56));

            applyStyle({
              position: "absolute",
              top: `${top}px`,
              left: left,
              right: "auto",
              transform: "translateX(-50%)",
              filter: "brightness(0)",
              width: size,
              height: size,
              zIndex: 999,
              transition: "all 1.5s cubic-bezier(0.22, 1, 0.36, 1)",
            });
          }

          // CASE STUDIES
          else if (sectionName === "case-studies") {
            const size = isMobile ? "50px" : isTablet ? "70px" : "80px";
            const top = sectionTop + (isMobile ? 40 : isTablet ? 120 : 100);
            const right = isMobile
              ? 20
              : isTablet
              ? 240
              : Math.min(Math.max(100, Math.floor(vw * 0.27)), 500);

            applyStyle({
              position: "absolute",
              top: `${top}px`,
              left: "auto",
              right: `${right}px`,
              transform: "none",
              filter: "brightness(0)",
              width: size,
              height: size,
              zIndex: 999,
              transition: "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
            });
          }

          // TESTIMONIALS
          else if (sectionName === "testimonials") {
            const size = isMobile ? "50px" : isTablet ? "70px" : "80px";
            const top = sectionTop + (isMobile ? 40 : isTablet ? 80 : 10);
            const right = isMobile
              ? 20
              : isTablet
              ? 40
              : Math.max(80, Math.floor(vw * 0.08));

            applyStyle({
              position: "absolute",
              top: `${top}px`,
              left: "auto",
              right: `${right}px`,
              transform: "none",
              filter: "brightness(0)",
              width: size,
              height: size,
              zIndex: 999,
              transition: "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
            });
          }

          // BLOG
          else if (sectionName === "blog") {
            const size = isMobile ? "50px" : isTablet ? "60px" : "80px";
            const top = sectionTop + (isMobile ? 35 : isTablet ? 80 : 80);
            const left = isMobile
              ? 300
              : isTablet
              ? 420
              : Math.max(10, Math.floor(vw * 0.6));

            applyStyle({
              position: "absolute",
              top: `${top}px`,
              left: left,
              right: "auto",
              transform: "translateX(-50%)",
              filter: "brightness(0)",
              width: size,
              height: size,
              zIndex: 999,
              transition: "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
            });
          }

          // CONTACT RESOURCES
          else if (sectionName === "contact-resources") {
            const size = isMobile ? "50px" : isTablet ? "70px" : "80px";
            const top = sectionTop + (isMobile ? 0 : isTablet ? 100 : -20);
            const right = isMobile ? 10 : isTablet ? 40 : 53.5;

            applyStyle({
              position: "absolute",
              top: `${top}px`,
              left: "auto",
              right: `${right}%`,
              transform: "none",
              filter: "brightness(1)",
              width: size,
              height: size,
              zIndex: 999,
              transition: "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
            });
          }

          // RESOURCES
          else if (sectionName === "resources") {
            const size = isMobile ? "50px" : isTablet ? "70px" : "80px";
            const top = sectionTop + (isMobile ? 60 : isTablet ? 750 : 120);
            const right = isMobile
              ? 20
              : isTablet
              ? 40
              : Math.max(80, Math.floor(vw * 0.1));

            applyStyle({
              position: "absolute",
              top: `${top}px`,
              left: "auto",
              right: `${right}px`,
              transform: "none",
              filter: "brightness(1)",
              width: size,
              height: size,
              zIndex: 999,
              transition: "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
            });
          }

          // CONTACT
          else if (sectionName === "contact") {
            const size = isMobile ? "50px" : isTablet ? "70px" : "80px";
            const top = sectionTop + (isMobile ? 100 : isTablet ? 150 : 200);
            const left = isMobile
              ? 20
              : isTablet
              ? 40
              : Math.max(10, Math.floor(vw * 0.4));

            applyStyle({
              position: "absolute",
              top: `${top}px`,
              left: `${left}px`,
              right: "auto",
              transform: "none",
              filter: "brightness(1)",
              width: size,
              height: size,
              zIndex: 999,
              transition: "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
            });
          }

          // FAQ
          else if (sectionName === "faq") {
            const size = isMobile ? "50px" : isTablet ? "70px" : "80px";
            const top = sectionTop + (isMobile ? 50 : isTablet ? 70 : 80);
            const right = isMobile
              ? 20
              : isTablet
              ? 40
              : Math.max(180, Math.floor(vw * 0.2));

            applyStyle({
              position: "absolute",
              top: `${top}px`,
              left: "auto",
              right: `${right}px`,
              transform: "none",
              filter: "brightness(0)",
              width: size,
              height: size,
              zIndex: 999,
              transition: "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
            });
          }
        }
      });
    };

    handleScroll(); // initial layout pass
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, isTablet]);

  // 👇 don't render until visible
  if (!isVisible) return null;

  return (
    <div
      className={`${className}`}
      style={{
        animation: "spin360 4s linear infinite",
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
        ...logoStyle,
      }}
    >
      <img
        className="w-full h-full"
        alt="Scroll Reveal Logo"
        src="/logo.svg"
        style={{ width: "100%", height: "100%", display: "block" }}
      />

      <style>{`
        @keyframes spin360 {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
