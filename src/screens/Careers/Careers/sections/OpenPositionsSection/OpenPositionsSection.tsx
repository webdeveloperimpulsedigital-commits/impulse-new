import { Button } from "../../../../../components/ui/button";

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  note?: string[];
  applicationdetails?: string;
}

export const OpenPositionsSection = (): JSX.Element => {
  const jobPositions: JobPosition[] = [
    {
      id: "content-writer",
      title: "Social Media Content Writer",
      department: "Content",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "4+ years",
      description: "We’re looking for someone who can write engaging social media content. Your job is simple: take a clear idea and turn it into content people actually want to read, watch, and engage with. You will work closely with our Social Media Head and focus on executing content through strong writing.",
      responsibilities: [
        "Write Instagram captions, reel/video scripts, carousel content, and LinkedIn posts.",
        "Convert briefs into structured content formats.",
        "Adapt one idea into multiple formats (reel, carousel, LinkedIn).",
        "Work across industries like Corporate/B2B, BFSI, Education, and Consumer brands.",
        "Create engaging hooks and scroll-stopping content.",
        "Maintain clarity, structure, and avoid fluff.",
        "Take feedback and iterate quickly."
      ],
      requirements: [
        "Strong English writing skills (clear, simple, engaging).",
        "Understanding of social media hooks and engagement patterns.",
        "Ability to structure short-form and medium-form content.",
        "Good grasp of platform tone (LinkedIn vs Instagram).",
        "Basic Hindi/Marathi understanding is a plus.",
        "Ability to follow briefs and adapt across industries."
      ],

    },

    {
      id: "seo-executive",
      title: "SEO Executive",
      department: "SEO",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "2–3 years",
      description: "We are looking for an SEO Executive who can manage end-to-end SEO activities, improve website rankings, and drive organic traffic growth. The candidate should have strong knowledge of on-page, off-page, and technical SEO along with hands-on experience in SEO tools.",
      responsibilities: [
        "Perform keyword research, competitor analysis, and search intent analysis.",
        "Execute on-page SEO (meta tags, headings, internal linking, schema).",
        "Plan and implement off-page SEO strategies and link building.",
        "Conduct technical SEO audits and coordinate fixes.",
        "Monitor performance using Google Analytics and Search Console.",
        "Track rankings, traffic, and SEO KPIs.",
        "Optimize website structure, speed, and mobile performance.",
        "Collaborate with content team for SEO-friendly content.",
        "Stay updated with SEO trends and Google algorithm updates."
      ],
      requirements: [
        "2–3 years of SEO experience.",
        "Strong understanding of On-page, Off-page, and Technical SEO.",
        "Experience with tools like Ahrefs, SEMrush, Screaming Frog.",
        "Knowledge of Google Analytics and Search Console.",
        "Basic HTML and schema markup understanding.",
        "Strong analytical and problem-solving skills.",
        "Good communication and teamwork."
      ],

    },
    {
      id: "HR Executive",
      title: "HR Executive",
      department: "HR",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "2-3 years",
      description:
        "We are looking for an HR Executive who can manage end-to-end HR activities, improve employee satisfaction, and drive HR initiatives. The candidate should have strong knowledge of HR policies and procedures along with hands-on experience in HR tools.",
      responsibilities: [
        "Perform HR activities such as recruitment, onboarding, employee relations, performance management, and compensation and benefits.",
        "Execute HR policies and procedures.",
        "Monitor employee satisfaction and engagement.",
        "Collaborate with HR team for HR initiatives.",
        "Stay updated with HR trends and regulations."
      ],
      requirements: [
        "1–2 years of HR experience",
        "Good communication and coordination skills",
        "Ability to manage multiple tasks",
        "Basic understanding of HR processes"
      ],
      note: ["This role is primarily focused on recruitment and engagement, with basic exposure to HR operations.",

      ],
      applicationdetails: "Interested candidates are requested to share their updated resume along with current CTC and notice period at hr@theimpulsedigital.com",
    },
    {
      id: "social-media-intern",
      title: "Social Media Intern",
      department: "Social Media",
      location: "Mumbai, India",
      type: "Internship",
      experience: "Fresher",
      description: "We are looking for a passionate and creative Social Media Intern to assist in designing and executing social media campaigns, creating engaging content, and tracking engagement metrics.",
      responsibilities: [
        "Researching, designing and execution of social media campaigns",
        "Assisting in monthly calendars to promote brands on social media platforms",
        "Track and analyze social media engagement for various brands and campaigns",
        "Stay up-to date with social media trends and create trendy reels/media content for social media",
        "Curate and assist in creating high-quality and relevant content such as blogs as well as creative copy for social media posts",
        "Ideate and coordinate with in-house teams to ensure smooth designing of campaigns and social media promotions",
        "Creative ideation with Account Managers and Social Media Strategists."
      ],
      requirements: [
        "Passion for social media marketing and its best practices",
        "Basic knowledge of Photoshop, Canva and other editing platforms",
        "Excellent verbal and written communication skills",
        "Ability to work collaboratively in a team environment"
      ]
    }
  ];

  return (
    <section
      className="w-full bg-white lg:py-0"
      data-section="open-positions"
      id="open-position-sec-border"
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="font-normal text-[#030019] text-lg mb-2">
            Current Openings
          </p>
          <h2 className="font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl mb-6">
            Join Our Growing Team
          </h2>
          <p className="font-normal text-[#030019] text-base max-w-3xl mx-auto leading-relaxed">
            We're looking for talented individuals who share our passion for digital marketing and creativity.
            Explore our current openings below.
          </p>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobPositions.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 p-6 lg:p-8"
            >
              {/* Job Header */}
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#543d98]/10 text-[#543d98] rounded-full text-xs font-medium">
                    {job.department}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                    {job.type}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                    {job.experience}
                  </span>
                </div>

                <h3 className="font-bold text-[#030019] text-xl lg:text-2xl mb-3">
                  {job.title}
                </h3>

                <p className="font-normal text-[#666] text-base leading-relaxed mb-4">
                  {job.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-[#666] mb-6">
                  <img src="/footer-location.png" alt="Location" className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <h4 className="font-bold text-[#030019] text-lg mb-3">
                Key Responsibilities
              </h4>
              <ul className="space-y-2 mb-6">
                {job.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#543d98] mr-2 text-sm">•</span>
                    <span className="text-[#666] text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Requirements */}
              <h4 className="font-bold text-[#030019] text-lg mb-3">
                Candidate Requirements
              </h4>
              <ul className="space-y-2 mb-6">
                {job.requirements.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#543d98] mr-2 text-sm">•</span>
                    <span className="text-[#666] text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              {job.note && (
                <div>
                  <h4 className="font-bold text-[#030019] text-lg mb-3">
                    Notes
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {job.note.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#543d98] mr-2 text-sm">•</span>
                        <span className="text-[#666] text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {job.applicationdetails && (
                <div>

                  <ul className="space-y-2 mb-6">
                    {job.applicationdetails}
                  </ul>
                </div>
              )}

              {/* Apply Button */}
              <Button className="w-[250px] h-[44px] group inline-flex items-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border-[#543d98] hover:border hover:border-[#543d98]">
                <a
                  href="#application-form"
                  className="font-bold text-white text-sm md:text-base group-hover:text-[#543d98] transition-colors duration-300"
                >
                  Apply Now
                </a>

                <img
                  src="/button-icon.svg"
                  alt="Arrow"
                  className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 group-hover:brightness-0"
                />
              </Button>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};