import { NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import Header from "../../../../../components/layout/Header";

export const ContactHeroSection = (): JSX.Element => {
  const heroTextLines = ["Contact Us"];

  return (
    <> 
      {/* ✅ SEO Meta Tags */}
     <Helmet>
      <meta name="description" content="If you are looking for digital marketing solutions for your brand, feel free to submit the inquiry form or give us a call." />
<meta name="keywords" content="contact us, impulse digital" />
<title>Get In Touch | Impulse Digital</title>
<meta name="robots" content="index, follow" />
<meta name="revisit-after" content="1 day" />
<meta name="language" content="English" />
<meta name="generator" content="N/A" />
<meta property="og:title" content="Get In Touch | Impulse Digital" />
<meta property="og:description" content="If you are looking for digital marketing solutions for your brand, feel free to submit the inquiry form or give us a call." />
<meta property="og:url" content="https://www.theimpulsedigital.com/contact-us" />
<meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
<meta property="og:site_name" content="Impulse Digital" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@impulsedigi" />
<meta name="twitter:creator" content="@impulsedigi" />
<meta name="twitter:title" content="Get In Touch | Impulse Digital" />
<meta name="twitter:description" content="If you are looking for digital marketing solutions for your brand, feel free to submit the inquiry form or give us a call." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
<meta name="twitter:url" content="https://www.theimpulsedigital.com/contact-us" />
<link rel="canonical" href="https://www.theimpulsedigital.com/contact-us" />
  
    </Helmet>
         

      {/* ✅ Hero Section */}
      <section
        className="relative w-full h-screen min-h-[600px] mb-0 h-[600px] sm:h-[700px] md:h-[800px] lg:h-[820px] rounded-t-[55px] overflow-hidden"
        data-section="hero"
      >
        <header>
          {/* Common header (overlay) */}
          <Header />

          <div className="absolute inset-0 w-full h-[598px] sm:h-[698px] md:h-[798px] lg:h-[818px] bg-[url(/rectangle-35.png)] bg-cover bg-center">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/rectangle-35.png"
              >
                <source src="/bg-video.mp4" type="video/mp4" />
              </video>
              {/* Dark overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundColor: "#020018", opacity: 0.85 }}
                aria-hidden="true"
              />
            </div>

            {/* Hero Content */}
            <div
              className="xl:w-[1450px] lg:w-[1290px] mx-auto absolute inset-0 flex flex-col justify-center
                        items-center text-center
                        lg:items-center lg:text-center
                        px-0 sm:px-6 md:px-2 lg:px-20 pt-20 lg:pt-24 lg:pl-0 sm:pt-25"
            >
              {/* Main Heading */}
              <div className="mb-8 sm:mb-12 text-center lg:text-center">
                <h1 className="[font-family:'DM_Sans',Helvetica] font-black text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-[40px] tracking-tight mb-6">
                  {heroTextLines.map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h1>
              </div>

              {/* Description */}
              {/* Breadcrumb */}
              <nav className="flex items-center justify-center gap-2 text-white/80 text-sm">
                  <NavLink to="/" className="hover:text-white transition-colors">
                    Home
                  </NavLink>
                  <span className="select-none">{">"}</span>
                  <span className="text-white">Contact Us</span>
                </nav>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

