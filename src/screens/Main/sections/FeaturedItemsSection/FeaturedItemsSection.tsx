import { Helmet } from "react-helmet-async";
import Header from "../../../../components/layout/Header";

export const FeaturedItemsSection = (): JSX.Element => {
  const heroTextLines = ["TURNING", "YOUR BUSINESS", "INTO A BRAND"];

  

  return (
    <>
      {/* ✅ SEO Meta Tags */}
<Helmet>
  {/* Basic SEO */}
  <title>Best Digital Marketing Agency in Mumbai | Impulse Digital</title>
  <meta
    name="description"
    content="Impulse Digital is a top digital marketing agency in Mumbai that helps businesses expand their reach in the digital space with strategy, performance marketing, SEO, social media, content, and creative solutions for brands like Amazon, HUL, OLA, Dmart, HDFC and more."
  />
  <meta
    name="keywords"
    content="digital marketing agency in mumbai, digital marketing company, impulse digital"
  />
  <meta name="robots" content="index, follow" />
  <meta name="revisit-after" content="1 day" />
  <meta name="language" content="English" />
  <meta name="generator" content="N/A" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Best Digital Marketing Agency in Mumbai | Impulse Digital"
  />
  <meta
    property="og:description"
    content="Impulse Digital is a top digital marketing agency in Mumbai that helps businesses expand their reach in the digital space with strategy, performance marketing, SEO, social media, content, and creative solutions."
  />
  <meta property="og:url" content="https://www.theimpulsedigital.com" />
  <meta
    property="og:image"
    content="https://www.theimpulsedigital.com/img/logo-id-new.jpg"
  />
  <meta property="og:site_name" content="Impulse Digital" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@impulsedigi" />
  <meta name="twitter:creator" content="@impulsedigi" />
  <meta
    name="twitter:title"
    content="Best Digital Marketing Agency in Mumbai | Impulse Digital"
  />
  <meta
    name="twitter:description"
    content="Impulse Digital is a top digital marketing agency in Mumbai that helps businesses expand their digital presence with performance ads, SEO, social media, content, design and strategy."
  />
  <meta
    name="twitter:image"
    content="https://www.theimpulsedigital.com/img/logo-id-new.jpg"
  />
  <meta name="twitter:url" content="https://www.theimpulsedigital.com" />

  {/* Canonical + Favicon */}
  <link rel="canonical" href="https://www.theimpulsedigital.com" />
  <link rel="icon" type="image/x-icon" href="/resource-icon.png" />

  {/* ================================
      JSON-LD: ProfessionalService
  ================================= */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Impulse Digital",
        image: "https://www.theimpulsedigital.com/footer-logo.png",
        "@id": "https://www.theimpulsedigital.com/#professionalservice",
        url: "https://www.theimpulsedigital.com",
        telephone: "+91 9769285224",
        priceRange: "INR 50000 and above",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "304-305, Chirag Infotech, Road No. 16/Z, Ambica Nagar, Wagle Industrial Estate",
          addressLocality: "Thane",
          postalCode: "400604",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 19.2034942,
          longitude: 72.9539988,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "10:00",
          closes: "19:00",
        },
        sameAs: [
          "https://in.linkedin.com/company/impulse-digital-marketing-mumbai",
          "https://www.facebook.com/theimpulsedigital",
          "https://twitter.com/impulsedigi",
          "https://instagram.com/_impulse_digital",
          "https://www.youtube.com/channel/UCzQglQAeXGI99Z-LZI9jBkw",
        ],
      }),
    }}
  />

  {/* ================================
      JSON-LD: WebSite + SearchAction
  ================================= */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Impulse Digital",
        url: "https://www.theimpulsedigital.com",
        "@id": "https://www.theimpulsedigital.com/#website",
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://www.theimpulsedigital.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      }),
    }}
  />

  {/* ================================
      JSON-LD: FAQPage
  ================================= */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is a digital marketing agency?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "A digital marketing agency helps businesses grow online using services like performance ads, SEO, social, content, automation and analytics tailored to goals and budgets.",
            },
          },
          {
            "@type": "Question",
            name:
              "What are the benefits of hiring a digital marketing agency to leverage your business?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "You get senior expertise, speed of execution, cross-channel strategy, creative at scale, and measurable performance without building a large in-house team.",
            },
          },
          {
            "@type": "Question",
            name:
              "What is the role of a result-oriented digital marketing agency in elevating your business?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "A results-driven partner aligns channels to KPIs, runs continuous experiments, optimizes budgets in real-time, and reports outcomes clearly to drive revenue and efficiency.",
            },
          },
          {
            "@type": "Question",
            name: "Top 6 services an agency should offer for your business?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Strategy, Performance Ads, SEO, Social & Content, Marketing Automation/CRM, and Analytics/Attribution.",
            },
          },
          {
            "@type": "Question",
            name:
              "What are the advantages of hiring a leading digital marketing agency?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Proven playbooks, specialized teams, enterprise-grade tools, faster time-to-value, and lower total cost of ownership.",
            },
          },
          {
            "@type": "Question",
            name: "Can I expect instant results after hiring an agency?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Some channels show quick lifts, such as performance ads. Others compound over time, such as SEO. A balanced mix delivers both short-term and long-term ROI.",
            },
          },
          {
            "@type": "Question",
            name:
              "Is it possible to measure the efficacy of your digital marketing agency's strategies?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes. With clear KPIs, proper tracking, conversion events, and multi-touch attribution, you can measure impact across the funnel.",
            },
          },
          {
            "@type": "Question",
            name:
              "What is the budget to hire a digital marketing agency for your business?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "The budget to hire the best digital marketing agency in Mumbai depends on your requirements which includes various factors like your scope of services, the industry, the size of your business and, most importantly, your marketing goals and expectations. It is essential to contact the agency directly for any further queries about budget or services to make a better deal. Approximately the budget ranges from 70k to 2 Lakh to hire a good marketing agency for your business. To ensure an informed decision, consider several factors carefully.",
            },
          },
          {
            "@type": "Question",
            name:
              "Before signing up with an agency, should I consider geographic factors like location?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "No, one does not need to consider the agency's location, as digital marketing services are provided online and are certainly not restricted to physical presence or areas. Anyone can easily receive top digital marketing services from Mumbai to anywhere in the world. However, it is essential to consider the following factors: the agency's expertise in your domain, industry alignment, experience, and facilities they provide for online operations to ensure a smooth working process.",
            },
          },
          {
            "@type": "Question",
            name:
              "What skills are necessary for an agency before onboarding?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "When onboarding and deciding on an agency, it is essential to prioritize domain expertise, transparent communication that helps build trust, creative design and marketing strategy, and keeping a track record of quality work. The team of people coordinating should have qualities of problem-solving with efficiency. This shows that the agency is highly dependable and trustworthy.",
            },
          },
        ],
      }),
    }}
  />
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
                        lg:items-start lg:text-left
                        px-0 sm:px-6 md:px-2 lg:px-20 pt-20 lg:pt-24 lg:pl-0 sm:pt-25"
            >
              {/* Main Heading */}
              <div className="mb-8 sm:mb-12 text-center lg:text-left">
                {/* {heroTextLines.map((line, index) => (
                  <h1
                    key={index}
                    className="font-dm-sans font-black text-white text-[32px] sm:text-[48px] md:text-[64px] lg:text-[100px] xl:text-[100px] lg:leading-[100px] xl:leading-[120px] tracking-tight mb-1"
                  >
                    {line}
                  </h1>
                ))} */}

                <h1 className="font-dm-sans font-black text-white text-[32px] sm:text-[48px] md:text-[64px] lg:text-[100px]
                      xl:text-[100px] lg:leading-[100px] xl:leading-[120px] tracking-tight mb-1">
                        {heroTextLines.map((line, index) => (
                          <span key={index}>
                            {line}
                            <br />
                          </span>
                        ))}
                </h1>
              </div>

              {/* Description */}
              <p
                className="font-dm-sans text-white text-sm sm:text-base md:text-lg lg:text-[26px]
                          max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]
                          mx-auto lg:mx-0 lg:leading-[40px] mb-8 sm:mb-12"
              >
                We blend strategy, design, and AI to build iconic brands.
                Because good isn’t enough when great is possible.
              </p>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default FeaturedItemsSection;
