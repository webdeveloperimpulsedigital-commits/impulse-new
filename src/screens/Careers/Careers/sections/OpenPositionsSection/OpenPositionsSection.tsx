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
}

export const OpenPositionsSection = (): JSX.Element => {
  const jobPositions: JobPosition[] = [
    {
      id: "social-media-manager",
      title: "Social Media Manager",
      department: "Social Media",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "4–6 years",
      description:
        "We are looking for an experienced Social Media Manager who understands platform behaviour, digital storytelling, and brand communication. The ideal candidate should be able to plan, create, and execute social media strategies that drive engagement, visibility, and growth across multiple platforms.",
      responsibilities: [
        "Develop and execute platform-specific social media strategies for brand awareness and engagement.",
        "Plan, organise, and manage monthly content calendars.",
        "Coordinate with design, content, and marketing teams for cohesive brand communication.",
        "Oversee daily posting, scheduling, and performance tracking across platforms.",
        "Analyse insights and analytics to optimise content performance.",
        "Stay updated with platform updates, algorithms, and social media trends.",
        "Manage comments, messages, and ORM responses.",
        "Contribute creative ideas for campaigns and social-first concepts.",
        "Monitor competitors and industry trends."
      ],
      requirements: [
        "Minimum 4–6 years of social media management experience (agency preferred).",
        "Strong understanding of platform algorithms and best practices.",
        "Good communication and copywriting abilities.",
        "Ability to analyse data and create actionable strategies.",
        "Basic knowledge of Canva or creative briefing tools."
      ]
    },

    {
      id: "video-editor",
      title: "Video Editor",
      department: "Creative",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "4+ years",
      description:
        "We’re looking for an experienced Video Editor who is well-versed with modern editing techniques, the latest industry tools, and emerging technologies. The ideal candidate should be able to create high-quality, engaging video content tailored for digital platforms.",
      responsibilities: [
        "Edit and finalise high-quality videos for social media, campaigns, ads, and branded content.",
        "Collaborate with the creative team to bring concepts to life.",
        "Use modern editing styles, effects, transitions, and storytelling methods.",
        "Handle raw footage, sound, colour grading, motion graphics, and exports.",
        "Stay updated with AI tools, editing plugins, and industry trends.",
        "Ensure timely delivery while maintaining quality.",
        "Organise files, maintain backups, and manage workflows."
      ],
      requirements: [
        "Minimum 4 years of professional editing experience.",
        "Strong command of Adobe Premiere Pro, Final Cut Pro, After Effects, etc.",
        "Familiarity with AI editing workflows and plugins.",
        "Strong sense of pacing, audio syncing, colour correction, and storytelling.",
        "Ability to work independently and collaboratively.",
        "Portfolio showcasing past editing work.",
        "Bonus: Knowledge of videography."
      ]
    },

    // ⭐ NEW COPYWRITER POSITION ADDED HERE
    {
      id: "copywriter",
      title: "Copywriter",
      department: "Content",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "2+ years",
      description:
        "Elevate our current copy game to new heights. We’re looking for someone whose words are rooted in research, insight, relevance, and a dash of wit. Your copy should not only earn client praise but also drive measurable engagement across content assets and deliver better results for paid campaigns.",
      responsibilities: [
        "Work on 8+ brands in parallel for tactical campaigns and ongoing projects.",
        "Assist the strategy team with 4+ pitches every month.",
        "Guide a team of 2+ interns on copy and content tasks.",
        "Create hero campaign copy monthly in collaboration with creative & social teams.",
        "Act as a quality controller for all internal content assets.",
        "Deliver fresh, insight-driven, creative copy for multiple platforms.",
        "Support pitch decks with strong narratives and messaging structures."
      ],
      requirements: [
        "Exceptional written and verbal communication skills.",
        "A passion for storytelling and a flair for creativity.",
        "Ability to meet deadlines without breaking a sweat.",
        "Experience in copywriting across platforms is a strong advantage.",
        "Minimum 2 years of experience in an agency environment.",
        "High attention to detail and proofreading ability."
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

              {/* Apply Button */}
              <Button className="w-[250px] h-[44px] group inline-flex items-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border-[#543d98] hover:border hover:border-[#543d98]">
                <a
                  href="mailto:hr@theimpulsedigital.com"
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
