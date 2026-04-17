import { NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import Header from "../../../../components/layout/Header";

export const AiSeoAgencyHeroSection = (): JSX.Element => {
  const heroTextLines = ["AI SEO SERVICE"];
  const schema = {
    "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.theimpulsedigital.com/services/search-engine-optimization/ai-seo-agency/#service",
  "name": "AI SEO Services",
  "url": "https://www.theimpulsedigital.com/services/search-engine-optimization/ai-seo-agency",
  "description": "Impulse Digital provides AI SEO services using entity optimization, structured data, GEO, AEO, and LLM-aligned content frameworks to improve brand visibility across AI-driven discovery systems.",
  "serviceType": [
    "AI SEO",
    "Answer Engine Optimization",
    "Generative Engine Optimization",
    "Entity SEO",
    "Structured Data SEO"
  ],
  "provider": {
    "@type": "Organization",
    "name": "Impulse Digital",
    "url": "https://www.theimpulsedigital.com/"
  },
  "areaServed": ["IN", "US"]

  };

  return (
    <>
      {/* ✅ SEO Meta Tags */}
  <Helmet> 
    <title>AI SEO Agency in India | Advanced AI SEO Service</title>
    <meta name="description" content="Partner with a top AI SEO agency in Mumbai, India that delivers data-driven AI SEO services to boost organic rankings, enhance search visibility, and accelerate business growth with intelligent automation and strategic optimization."/>
    <meta name="keywords" content="ai seo agency, ai seo service, mumbai, india, impulse digital"/>
    <meta property="og:title" content="AI SEO Agency in India | Advanced AI SEO Service" />
    <meta name="robots" content="index, follow"/>
    <meta property="og:description" content="Partner with a top AI SEO agency in Mumbai, India that delivers data-driven AI SEO services to boost organic rankings, enhance search visibility, and accelerate business growth with intelligent automation and strategic optimization. team helps us stand out from a cluster of digital marketing agencies in Mumbai. We are handling a plethora of clients which includes Amazon, HUL, OLA, Dmart, HDFC, and more big market giants." />
    <meta property="og:url" content="https://www.theimpulsedigital.com" />
    <meta property="og:image" content="https://www.theimpulsedigital.com/AI-SEO-Agency.jpg" />
    <meta property="og:site_name" content="Impulse Digital" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@impulsedigi" />
    <meta name="twitter:creator" content="@impulsedigi" />
    <meta name="twitter:title" content="AI SEO Agency in India | Advanced AI SEO Service" />
    <meta name="twitter:description" content="Partner with a top AI SEO agency in Mumbai, India that delivers data-driven AI SEO services to boost organic rankings, enhance search visibility, and accelerate business growth with intelligent automation and strategic optimization. team helps us stand out from a cluster of digital marketing agencies in Mumbai. We are handling a plethora of clients which includes Amazon, HUL, OLA, Dmart, HDFC, and more big market giants." />
    <meta name="twitter:image" content="https://www.theimpulsedigital.com/AI-SEO-Agency.jpg" />
    <meta name="twitter:url" content="https://www.theimpulsedigital.com/services/search-engine-optimization/ai-seo-agency" />
    <link rel="canonical" href="https://www.theimpulsedigital.com/services/search-engine-optimization/ai-seo-agency" />
    <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    
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
                <source src="/seo-video.mp4" type="video/mp4" />
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
                    <NavLink to="/services" className="hover:text-white transition-colors">
                      Services
                    </NavLink>
                    
                    <span className="select-none">{">"}</span>
                    <NavLink to="/services/search-engine-optimization" className="hover:text-white transition-colors">
                      Seo
                    </NavLink>
                    <span className="select-none">{">"}</span>
                    <span className="text-white">AI SEO SERVICE</span>
                  </nav>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

