import React, { useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "motion/react";
import Header from "../../components/layout/Header";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Center } from "@react-three/drei";
import { BlogSection } from "./sections/BlogSection/BlogSection";
import { ContactResourcesSection } from "./sections/ContactResourcesSection/ContactResourcesSection";
import { FAQSection } from "./sections/FAQSection/FAQSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { faqData } from "../../data/faqs";

const FloatingLogo = ({ dark = false, className }: { dark?: boolean, className?: string }) => (
  <div className={`absolute z-[100] pointer-events-none ${className ?? "top-10 right-6 md:right-10 lg:right-16"}`}>
    <img
      src="/logo.svg"
      alt="Floating Logo"
      className={`w-[50px] md:w-[70px] lg:w-[90px] animate-[spin_4s_linear_infinite] ${dark ? 'brightness-0' : 'brightness-100'}`}
    />
  </div>
);

const FloatingArrow = () => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  // Animate rotation, interaction, and hover shifts
  useFrame((state, delta) => {
    if (!groupRef.current || !meshRef.current) return;

    // Continuous clockwise rotation (Z-axis, like a clock hand moving top to bottom)
    meshRef.current.rotation.z -= delta * 0.3;

    // React to mouse movement for slight X/Y tilt
    const targetX = (state.pointer.x * Math.PI) / 8;
    const targetY = (state.pointer.y * Math.PI) / 8;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);

    // Shift toward CTA button on hover (CTA is usually on the left/down)
    const targetPos = hovered ? new THREE.Vector3(-0.5, -0.2, 1) : new THREE.Vector3(0, 0, 0);
    groupRef.current.position.lerp(targetPos, 0.08);
  });

  // Create an extruded shape matching the exact SVG logo
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    const scale = 0.02;
    const cx = 164.5;
    const cy = 167.5;
    const pt = (x: number, y: number) => ({ x: (x - cx) * scale, y: -(y - cy) * scale });
    const bz = (
      x1: number, y1: number,
      x2: number, y2: number,
      x3: number, y3: number
    ) => {
      const p1 = pt(x1, y1), p2 = pt(x2, y2), p3 = pt(x3, y3);
      s.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
    };

    const start = pt(277.251, 201.352);
    s.moveTo(start.x, start.y);

    bz(275.503, 224.25, 272.006, 263, 252.771, 263);
    bz(228.29, 263, 235.285, 213.682, 235.285, 190.784);
    bz(235.285, 167.886, 235.285, 97.4316, 202.061, 71.0111);
    bz(168.837, 44.5905, 97.1433, 48.1133, 56.925, 49.8746);
    bz(16.7067, 51.636, 18.4554, 19.9317, 46.4334, 12.8862);
    bz(97.1434, -1.20475, 220.077, -0.354874, 251.022, 28.7381);
    bz(277.251, 53.3976, 279, 97.4315, 279, 125.613);
    bz(279, 155.557, 278.866, 180.205, 277.251, 201.352);

    s.closePath();
    return s;
  }, []);

  const extrudeSettings = {
    steps: 1,
    depth: 0.6,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.1,
    bevelSegments: 6,
  };

  return (
    <group
      ref={groupRef}
      scale={0.75}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <Float
        speed={2} // Animation speed
        rotationIntensity={0.2} // XYZ rotation intensity
        floatIntensity={1.5} // Up/down float intensity
      >
        <Center>
          <mesh ref={meshRef} castShadow receiveShadow rotation={[0, 0, Math.PI / 4]}>
            <extrudeGeometry args={[shape, extrudeSettings]} />
            <meshPhysicalMaterial
              color="#ffffff"
              metalness={0.9}
              roughness={0.15}
              clearcoat={1}
              clearcoatRoughness={0.1}
              envMapIntensity={2.5}
              transmission={0.2}
              thickness={0.5}
            />
          </mesh>
        </Center>
      </Float>
    </group>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

const caseStudies = [
  {
    brand: "Mastercard",
    industry: "Fintech",
    bgColor: "bg-[#e0e7ff]",
    textColor: "text-[#3730a3]",
    title: "90.9% merchant response rate",
    description: "through WhatsApp-led outreach strategy.",
    stats: [
      { label: "Response Rate", value: "90.9%" }
    ],
    image: "/14_mastercard.jpg"
  },
  {
    brand: "DMart",
    industry: "Retail",
    bgColor: "bg-[#fce7f3]",
    textColor: "text-[#9d174d]",
    title: "13.43 lakh unique reach",
    description: "driving footfall for seasonal retail across 13 stores in Pune.",
    stats: [
      { label: "Reach", value: "13.43L" },
      { label: "Stores", value: "13" }
    ],
    image: "/15_Dmart-new.jpg"
  },
  {
    brand: "ElectroMech",
    industry: "Manufacturing",
    bgColor: "bg-[#d1fae5]",
    textColor: "text-[#065f46]",
    title: "20x verified lead growth",
    description: "for Asia's top 10 industrial crane manufacturer.",
    stats: [
      { label: "Lead Growth", value: "20x" }
    ],
    image: "/electromech-case-study.png"
  },
  {
    brand: "HUL",
    industry: "FMCG",
    bgColor: "bg-[#cffafe]",
    textColor: "text-[#164e63]",
    title: "90% higher CTR",
    description: "on a geo-targeted digital coupon campaign across Pune and Delhi.",
    stats: [
      { label: "Higher CTR", value: "90%" }
    ],
    image: "/16_Unilever.jpg"
  },
  {
    brand: "Amazon",
    industry: "Technology",
    bgColor: "bg-[#fef3c7]",
    textColor: "text-[#92400e]",
    title: "Multi-campaign employer branding partner",
    description: "from EVP design to advocacy programmes.",
    stats: [
      { label: "Programs", value: "Multiple" }
    ],
    image: "/Amazon%20EB-new.jpg"
  }
];

const row1Logos = [
  "/Aditya_Birla_Group_Logo.svg (1).jpg",
  "/High Res Logo resize_Artboard 1 copy 40.png",
  "/High Res Logo resize_Artboard 1 copy 52.png",
  "https://www.theimpulsedigital.com/hdfc.jpg",
  "https://www.theimpulsedigital.com/mastercard.jpg",
  "/uppercase.png",
  "/Bajaj group.png",
  "https://www.theimpulsedigital.com/ola.jpg",
  "/High Res Logo resize_Artboard 1 copy 45.png",
  "/High Res Logo resize_Artboard 1 copy 34.png",
  "/High Res Logo resize_Artboard 1 copy 47.png",
];

const row2Logos = [
  "/High Res Logo resize_Artboard 1 copy 43.png",
  "/High Res Logo resize_Artboard 1 copy 42.png",
  "/High Res Logo resize_Artboard 1 copy 38.png",
  "/High Res Logo resize_Artboard 1 copy 39.png",
  "/High Res Logo resize_Artboard 1 copy 58.png",
  "https://www.theimpulsedigital.com/chings.jpg",
  "https://www.theimpulsedigital.com/more.jpg",
  "/High Res Logo resize_Artboard 1 copy 46.png",
  "/High Res Logo resize_Artboard 1 copy 56.png",
  "https://www.theimpulsedigital.com/navayasa.jpg",
  "/High Res Logo resize_Artboard 1 copy 35.png",
];

const row3Logos = [
  "https://www.theimpulsedigital.com/qure-ai.jpg",
  "/High Res Logo resize_Artboard 1 copy 60.png",
  "/High Res Logo resize_Artboard 1 copy 51.png",
  "https://www.theimpulsedigital.com/datar.jpg",
  "/High Res Logo resize_Artboard 1 copy 59.png",
  "/High Res Logo resize_Artboard 1 copy 33.png",
  "https://www.theimpulsedigital.com/lg.jpg",
  "https://www.theimpulsedigital.com/goma.jpg",
  "/High Res Logo resize_Artboard 1 copy 57.png",
  "https://www.theimpulsedigital.com/vendiman.jpg",
];
const servicesData = [
  {
    label: "Where most engagements begin.",
    title: "Growth Intelligence",
    description: "Marketing analytics, campaign intelligence, consumer insights, and competitive sensing that help enterprise marketing teams act on evidence rather than instinct. This is not a dashboard. It is a decision engine.",
    list: ["Marketing Analytics", "Campaign Intelligence", "Consumer Insights", "Competitive Sensing"],
    cta: "Explore Growth Intelligence",
    images: ["/pillar_growth_1_1777367819705.png", "/pillar_growth_2_1777367836183.png"]
  },
  {
    label: "The 2026-native capability.",
    title: "AI Agency",
    description: "Agentic AI for marketing operations, fully AI-produced cinematic brand content, and Generative Search Optimisation for brands that need to move faster than their category allows.",
    list: ["Agentic AI", "Cinematic AI Production", "Generative Search Optimisation"],
    cta: "Explore AI Agency",
    images: ["/pillar_ai_1_1777367757221.png", "/pillar_ai_2_1777367852154.png"]
  },
  {
    label: "The execution engine.",
    title: "Performance Studios",
    description: "Social media, performance marketing, content, website development, and branding, deployed as the execution layer of a strategic engagement, not as standalone deliverables.",
    list: ["Performance Marketing", "Social Media Marketing", "Content Writing Services", "Website Development and Design", "Branding", "Employer Branding"],
    cta: "Explore Performance Studios",
    images: ["/pillar_perf_impulse_1777369235043.png", "/pillar_perf_2_1777367790923.png"]
  }
];

const testimonialsData = [
  {
    id: "7",
    name: "Vikram Bhave",
    title: "Business Development Manager, AUTOMAG India",
    company: "AUTOMAG India",
    content: "We first worked with Impulse Digital for our website design, which received great feedback from our management and clients. Impressed by their work, we also trusted them with SEO — and the results have been outstanding. Our organic leads grew from just 1 to 2 a month to over 20 to 25 quality B2B leads consistently. The team truly understood our business and delivered results that speak for themselves.",
    avatar: "/vikram.jpg",
    location: "Pune",
  },
  {
    id: "5",
    name: "Riya Kothari",
    title: "Growth Engineer, Vendiman",
    company: "Vendiman",
    content: "Working with Impulse Digital has been an absolute delight. They have a good grasp of the briefs given and their agility, innovative creativity, and professionalism concerning deadlines is what sets them apart. The transformation in our SEO, PPC, and social media management has been incredible — our ranking to the first within three months with 90% of the keywords.",
    avatar: "/riya.jpg",
    location: "Mumbai",
  },
  {
    id: "8",
    name: "Samrat Dhar",
    title: "Managing Partner, Shree Rubber Works",
    company: "Shree Rubber Works",
    content: "Partnering with Impulse Digital completely transformed our online presence. They revamped our website and implemented effective SEO strategies that grew our impressions by over 3,500% in just 5 months. We now receive quality leads from India and overseas, with major keywords ranking in the top 10. Their expertise and commitment truly made a difference.",
    avatar: "/Samrat.jpg",
    location: "Navi Mumbai",
  }
];

export const NewHome1 = (): JSX.Element => {
  const faqs = faqData["/new-home"] || [];
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: horizontalScrollProgress } = useScroll({
    target: horizontalContainerRef,
  });

  // Parallax effects
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yRightSide = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const xTransform = useTransform(horizontalScrollProgress, [0, 1], ["0%", "-75%"]);

  return (
    <>
      <Helmet>
        <title>Impulse Digital | AI-Native Growth Intelligence</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="new-home-1-wrapper w-full bg-[#01000B]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
        <style>
          {`
            .new-home-1-wrapper h1,
            .new-home-1-wrapper h2,
            .new-home-1-wrapper h3,
            .new-home-1-wrapper h4,
            .new-home-1-wrapper h5,
            .new-home-1-wrapper h6 ,
            .new-home-1-wrapper div{
              font-family: 'Satoshi', sans-serif !important;
            }
          `}
        </style>
        <section
          ref={containerRef}
          className="relative w-full h-screen min-h-[800px] bg-[#01000B] overflow-hidden flex flex-col"
        >
          {/* Background Video Layer */}
          <motion.div
            className="absolute inset-0 z-0 w-full h-full"
            style={{ y: yBackground }}
          >
            <video
              className="w-full h-full object-cover mix-blend-screen grayscale-[40%] opacity-40"
              autoPlay
              muted
              loop
              playsInline
              poster="/rectangle-35.jpg"
            >
              <source src="/impulse-video-new.mp4" type="video/mp4" />
            </video>
            {/* Deep gradient fade to merge into background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#01000B] via-[#01000B]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#01000B] via-[#01000B]/50 to-transparent" />
          </motion.div>

          {/* Header */}
          <div className="absolute top-0 left-0 w-full z-50">
            <Header />
          </div>

          {/* Content Area - Left/Right Layout */}
          <div className="relative z-20 flex-grow w-full h-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE: Typography & CTA */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col items-start justify-center max-w-[1200px] gap-10"
            >

              <div className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-white drop-shadow-2xl !font-satoshi">
                <motion.div variants={itemVariants}>
                  Most marketing decisions are made without the most important input: your own data.
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <p className="text-white/60 text-sm md:text-base lg:text-[15px] font-light tracking-[0.05em] lg:tracking-[0.1em] uppercase leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Impulse Digital is the AI-native growth intelligence partner for enterprise marketing teams that need to close the gap between what their data knows and what their decisions reflect.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={itemVariants}>
                <a
                  href="/casestudies"
                  className="group relative inline-flex items-center justify-center px-10 py-4 bg-[#543d98] text-[#ffffff] rounded-full font-semibold text-sm md:text-base transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] shadow-[0_0_20px_rgba(84,61,152,0.1)] hover:shadow-[0_0_30px_rgba(84,61,152,0.3)]"
                  style={{ fontFamily: 'Satoshi-Variable, sans-serif' }}>
                  <span className="relative z-10 flex items-center gap-3 tracking-widest uppercase text-sm md:text-base">
                    See how we work
                    <img
                      src="/logo.svg"
                      alt="icon"
                      className="w-5 h-5 md:w-6 md:h-6 object-contain transition-transform duration-500 transform group-hover:rotate-45"
                    />
                  </span>
                  <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-500" />
                </a>


              </motion.div>

            </motion.div>

            {/* RIGHT SIDE: 3D Orbiting Arrow */}
            <motion.div
              className="relative hidden lg:flex flex-col items-center justify-center w-full h-[600px] xl:h-[700px] lg:-mt-32 xl:-mt-48"
              style={{ y: yRightSide }}
            >
              {/* Soft glow halo behind the 3D canvas */}
              <div className="absolute w-[250px] h-[250px] bg-white/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="absolute inset-0 w-full h-full cursor-pointer">
                <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                  <ambientLight intensity={0.4} />
                  <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
                  <directionalLight position={[-10, -10, -5]} intensity={1} color="#aaaaff" />
                  <Environment preset="city" />
                  <FloatingArrow />
                </Canvas>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Full Width Video Section */}
        <section className="relative w-full bg-[#01000B] overflow-hidden">
          <video
            className="w-full h-auto object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/impulse-video-new.mp4" type="video/mp4" />
          </video>
        </section>

        {/* Case Studies Section */}
        <section className="relative w-full bg-[#020018] py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto z-20 pb-[30vh]">
          <FloatingLogo className="top-10 right-6 md:right-10 lg:top-[4.5rem] lg:right-[15rem]" />
          <div className="mb-16 text-center">

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-[#ffffff] mb-4">
              Work that moved<br />
              <span className="text-[#543d98]">something.</span>
            </h2>
          </div>

          <div className="relative flex flex-col gap-8 md:gap-12 mt-16 max-w-[1200px] mx-auto">
            {caseStudies.map((study, idx) => (
              <div
                key={idx}
                className={`sticky flex flex-col md:flex-row items-stretch justify-between w-full min-h-[450px] rounded-[40px] p-8 md:p-14 lg:p-16 shadow-2xl ${study.bgColor} border border-black/5`}
                style={{
                  top: `calc(100px + ${idx * 20}px)`,
                  zIndex: 20 + idx,
                }}
              >
                {/* Left Content Column */}
                <div className="flex flex-col justify-between w-full md:w-[55%] gap-10">
                  <div className="flex flex-col gap-6">
                    <span className={`font-serif italic text-lg md:text-xl font-medium ${study.textColor}`}>
                      {study.industry}
                    </span>
                    <h3 className="font-sans font-bold text-3xl md:text-5xl lg:text-5xl text-gray-900 leading-tight tracking-tight">
                      {study.title}
                    </h3>
                    <p className="font-sans text-gray-700 text-lg md:text-xl leading-relaxed max-w-[90%]">
                      {study.description}
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-8 mt-4 pt-8 border-t border-gray-900/10">
                    {study.stats.map((stat, statIdx) => (
                      <div key={statIdx} className="flex flex-col gap-1">
                        <span className="font-sans text-gray-500 font-medium text-sm tracking-wide uppercase">{stat.label}</span>
                        <span className="font-sans font-bold text-2xl md:text-4xl text-gray-900 tracking-tight">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Image Column */}
                <div className="hidden md:flex w-full md:w-[40%] items-center justify-center mt-10 md:mt-0 relative group">
                  <div className="absolute inset-0 bg-black/5 rounded-[24px] translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
                  <img
                    src={study.image}
                    alt={study.brand}
                    className="w-full h-[300px] md:h-full max-h-[400px] object-cover rounded-[24px] shadow-lg transition-transform duration-700 hover:scale-[1.02]"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
                    <span className="font-sans font-semibold text-gray-900 text-sm">{study.brand}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button at Bottom */}
          <div className="flex justify-center mt-16 md:mt-24 pb-8 relative z-50">
            <a
              href="/casestudies"
              className="group relative inline-flex items-center justify-center px-10 py-4 bg-[#543d98] text-[#ffffff] rounded-full font-semibold text-sm md:text-base transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] shadow-[0_0_20px_rgba(84,61,152,0.1)] hover:shadow-[0_0_30px_rgba(84,61,152,0.3)]"
              style={{ fontFamily: 'Satoshi-Variable, sans-serif' }}>
              <span className="relative z-10 flex items-center gap-3 tracking-widest uppercase text-sm md:text-base">
                See the outcomes
                <img
                  src="/logo.svg"
                  alt="icon"
                  className="w-5 h-5 md:w-6 md:h-6 object-contain transition-transform duration-500 transform group-hover:rotate-45"
                />
              </span>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-500" />
            </a>
          </div>
        </section>

        {/* Clients Section */}
        <section className="relative w-full bg-white py-24 overflow-hidden flex flex-col items-center">
          <FloatingLogo dark className="top-10 right-6 md:right-10 lg:top-[3rem] lg:right-[22rem]" />


          <div className="mb-16 text-center">

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-[#030019] mb-4">
              Trusted by<br />
              <span className="text-[#543d98]">marketing teams at</span>
            </h2>


          </div>

          <div className="relative w-full max-w-[100vw] flex flex-col gap-1 md:gap-1">
            {/* Fade Masks */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Row 1 - Left to Right */}
            <div className="flex overflow-hidden">
              <div className="flex animate-[marquee-ltr_150s_linear_infinite] min-w-full shrink-0 items-center justify-around gap-12 md:gap-24 px-6 md:px-12">
                {row1Logos.map((logo, idx) => (
                  <img key={`r1-1-${idx}`} src={logo} alt="Client Logo" className="h-16 md:h-28 w-auto object-contain opacity-40 hover:opacity-100 hover:grayscale-0 grayscale transition-all duration-300" />
                ))}
              </div>
              <div className="flex animate-[marquee-ltr_150s_linear_infinite] min-w-full shrink-0 items-center justify-around gap-12 md:gap-24 px-6 md:px-12">
                {row1Logos.map((logo, idx) => (
                  <img key={`r1-2-${idx}`} src={logo} alt="Client Logo" className="h-16 md:h-28 w-auto object-contain opacity-40 hover:opacity-100 hover:grayscale-0 grayscale transition-all duration-300" />
                ))}
              </div>
            </div>

            {/* Row 2 - Right to Left */}
            <div className="flex overflow-hidden">
              <div className="flex animate-[marquee_150s_linear_infinite] min-w-full shrink-0 items-center justify-around gap-12 md:gap-24 px-6 md:px-12">
                {row2Logos.map((logo, idx) => (
                  <img key={`r2-1-${idx}`} src={logo} alt="Client Logo" className="h-16 md:h-28 w-auto object-contain opacity-40 hover:opacity-100 hover:grayscale-0 grayscale transition-all duration-300" />
                ))}
              </div>
              <div className="flex animate-[marquee_150s_linear_infinite] min-w-full shrink-0 items-center justify-around gap-12 md:gap-24 px-6 md:px-12">
                {row2Logos.map((logo, idx) => (
                  <img key={`r2-2-${idx}`} src={logo} alt="Client Logo" className="h-16 md:h-28 w-auto object-contain opacity-40 hover:opacity-100 hover:grayscale-0 grayscale transition-all duration-300" />
                ))}
              </div>
            </div>

            {/* Row 3 - Left to Right */}
            <div className="flex overflow-hidden">
              <div className="flex animate-[marquee-ltr_150s_linear_infinite] min-w-full shrink-0 items-center justify-around gap-12 md:gap-24 px-6 md:px-12">
                {row3Logos.map((logo, idx) => (
                  <img key={`r3-1-${idx}`} src={logo} alt="Client Logo" className="h-16 md:h-28 w-auto object-contain opacity-40 hover:opacity-100 hover:grayscale-0 grayscale transition-all duration-300" />
                ))}
              </div>
              <div className="flex animate-[marquee-ltr_150s_linear_infinite] min-w-full shrink-0 items-center justify-around gap-12 md:gap-24 px-6 md:px-12">
                {row3Logos.map((logo, idx) => (
                  <img key={`r3-2-${idx}`} src={logo} alt="Client Logo" className="h-16 md:h-28 w-auto object-contain opacity-40 hover:opacity-100 hover:grayscale-0 grayscale transition-all duration-300" />
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button at Bottom */}
          <div className="flex justify-center mt-16 md:mt-24 pb-8 relative z-50">
            <a
              href="/casestudies"
              className="group relative inline-flex items-center justify-center px-10 py-4 bg-[#543d98] text-[#ffffff] rounded-full font-semibold text-sm md:text-base transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] shadow-[0_0_20px_rgba(84,61,152,0.1)] hover:shadow-[0_0_30px_rgba(84,61,152,0.3)]"
              style={{ fontFamily: 'Satoshi-Variable, sans-serif' }}
            >
              <span className="relative z-10 flex items-center gap-3 tracking-widest uppercase text-sm md:text-base">
                Start a conversation
                <img
                  src="/logo.svg"
                  alt="icon"
                  className="w-5 h-5 md:w-6 md:h-6 object-contain transition-transform duration-500 transform group-hover:rotate-45"
                />
              </span>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-500" />
            </a>
          </div>
        </section>

        {/* Horizontal Scroll Services Section */}
        <section ref={horizontalContainerRef} className="relative w-full h-[400vh] bg-[#0D0D0D]">
          <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
            <motion.div style={{ x: xTransform }} className="flex h-full w-[400vw]">

              {/* Intro Slide */}
              <div className="w-[100vw] h-full flex flex-col justify-center px-6 md:px-12 lg:px-32 shrink-0">
                {/* <span className="text-[#7B61FF] font-sans tracking-widest uppercase mb-4 md:mb-8 font-semibold text-sm md:text-base">What We Do</span> */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-[#ffffff] mb-4">
                  Three ways growth leaders<br />
                  <span className="text-[#543d98]">work with us.</span>
                </h2>
              </div>

              {/* Service Slides */}
              {servicesData.map((service, idx) => (
                <div key={idx} className="w-[100vw] h-full flex items-center justify-center shrink-0 px-6 md:px-12 lg:px-24">
                  <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Left: Text Content */}
                    <div className="flex flex-col w-full lg:w-[40%]">
                      <span className="text-[#7B61FF] font-serif italic text-lg mb-2">{service.label}</span>
                      <h3 className="text-white text-3xl md:text-5xl font-sans font-bold mb-6 pb-6 border-b border-[#7B61FF]/30">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-base md:text-xl mb-8 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="flex flex-col gap-4 mb-12">
                        {service.list.map((item, i) => (
                          <li key={i} className="flex items-center text-white/80 text-base md:text-lg">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#7B61FF] mr-4" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <a href="#" className="flex items-center text-[#7B61FF] font-semibold hover:text-white transition-colors group">
                        {service.cta}
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>

                    {/* Right: Visuals */}
                    <div className="hidden lg:flex w-full lg:w-[60%] h-[500px] gap-6 relative">
                      <div className="w-1/2 h-full rounded-[40px] overflow-hidden relative shadow-[0_0_50px_rgba(123,97,255,0.05)]">
                        <img src={service.images[0]} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                      </div>
                      <div className="w-1/2 h-[80%] mt-auto rounded-[40px] overflow-hidden relative shadow-[0_0_50px_rgba(123,97,255,0.05)]">
                        <img src={service.images[1]} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                      </div>
                    </div>

                  </div>
                </div>
              ))}

            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#ffffff] overflow-hidden">
          <FloatingLogo dark className="top-10 right-6 md:right-10 lg:top-[2.5rem] lg:right-[24rem]" />
          <div className="max-w-[1400px] mx-auto">
            {/* Top Bar / Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-center gap-10 mb-1">
              <div className="mb-16 text-center">

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-[#030019] mb-4">
                  From the teams<br />
                  <span className="text-[#543d98]">we work with.</span>
                </h2>
              </div>


            </div>

            {/* Testimonials Grid (Masonry effect using columns) */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {testimonialsData.map((testimonial, idx) => (
                <div key={idx} className="break-inside-avoid bg-[#f2eeff] rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col gap-6">
                  {/* Card Header */}
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full bg-gray-100 object-cover" />
                      <div className="flex flex-col">
                        <span className="font-sans font-bold text-gray-900 text-sm">{testimonial.name}</span>
                        <span className="font-sans text-gray-500 text-xs">{testimonial.location}</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-[10px] md:text-xs font-medium max-w-full truncate">
                      {testimonial.title}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="font-sans text-gray-800 text-sm leading-relaxed whitespace-pre-wrap">
                    {testimonial.content}
                  </div>

                  {/* Card Footer */}
                  <div className="pt-5 mt-2 border-t border-dashed border-gray-200 flex items-center">
                    <span className="font-sans font-semibold text-gray-400 text-sm tracking-wider uppercase">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <div className="relative w-full">
          <FloatingLogo dark className="top-10 right-6 md:right-10 lg:top-[5.5rem] lg:right-[32rem]" />
          <BlogSection />
        </div>
        <div className="relative w-full">
          <FloatingLogo className="top-10 right-6 md:right-10 lg:top-[3.5rem] lg:right-[49rem]" />
          <ContactResourcesSection />
        </div>
        <div className="relative w-full">
          <FloatingLogo dark className="top-10 right-6 md:right-10 lg:top-[4.5rem] lg:right-[15rem]" />
          <FAQSection faqs={faqs} />
        </div>
        <FooterSection />
      </main>
    </>
  );
};

export default NewHome1;
