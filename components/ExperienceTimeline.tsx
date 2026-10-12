export default function ExperienceTimeline() {
  const experiences = [
    {
      company: "Tech Mahindra",
      role: "Customer Support Executive",
      period: "September 2025 – February 2026",
      type: "Professional Discipline",
      details:
        "Handled high-volume client workflows, deadline-sensitive problem resolution, and detailed quality reporting.",
    },
    {
      company: "TaskUs",
      role: "Customer Relationship Manager",
      period: "May 2024 – July 2025",
      type: "Professional Discipline",
      details:
        "Managed client engagement, workflow organization, cross-functional communication, and strict delivery timelines.",
    },
    {
      company: "Teleperformance",
      role: "Technical Support Agent",
      period: "April 2023 – April 2024",
      type: "Professional Discipline",
      details:
        "Analytical troubleshooting, systematic process adherence, and precision-driven technical resolution.",
    },
  ];

  const education = [
    {
      institution: "IGNOU (Indira Gandhi National Open University)",
      degree: "Bachelor of Science (B.Sc.)",
      period: "2021 – 2025",
      location: "India",
    },
    {
      institution: "Sainik School Jalna, Maharashtra",
      degree: "Secondary & Higher Secondary Education",
      period: "2012 – 2018",
      location: "Maharashtra, India",
    },
  ];

  const transferableStrengths = [
    "Deadline Management",
    "Attention to Detail",
    "Effective Communication",
    "High-Pressure Problem Solving",
    "Client Collaboration",
    "Disciplined Time Allocation",
  ];

  return (
    <div className="w-full space-y-16">
      {/* Transferable Strengths Header Banner */}
      <div className="p-6 rounded-md border border-borderGrey/80 bg-surface/30">
        <p className="text-xs font-mono text-accentGold uppercase tracking-widest mb-3">
          TRANSFERABLE PROFESSIONAL DISCIPLINE
        </p>
        <p className="text-sm font-sans text-textSecondary mb-4">
          A disciplined foundation developed through structured professional experience, bringing rigor, clear communication, and deadline punctuality to every creative video project.
        </p>
        <div className="flex flex-wrap gap-2">
          {transferableStrengths.map((str) => (
            <span
              key={str}
              className="px-3 py-1 text-xs font-mono text-textPrimary bg-backgroundPrimary border border-borderGrey rounded"
            >
              ✓ {str}
            </span>
          ))}
        </div>
      </div>

      {/* Two-column Timeline: Experience & Education */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left: Professional Background */}
        <div>
          <h3 className="font-display text-xl font-bold text-textPrimary mb-8 flex items-center space-x-3">
            <span className="text-accentGold font-mono text-sm">01.</span>
            <span>PROFESSIONAL BACKGROUND</span>
          </h3>

          <div className="relative border-l border-borderGrey/80 pl-6 sm:pl-8 space-y-10 ml-2">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-backgroundPrimary border-2 border-accentGold group-hover:scale-125 transition-transform" />

                <div className="space-y-1">
                  <span className="text-xs font-mono text-accentGold tracking-wider">
                    {exp.period}
                  </span>
                  <h4 className="font-display text-lg font-bold text-textPrimary">
                    {exp.role}
                  </h4>
                  <p className="font-mono text-xs text-textSecondary uppercase">
                    {exp.company}
                  </p>
                  <p className="text-xs text-textSecondary font-sans pt-2 leading-relaxed">
                    {exp.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Academic & Military School Foundation */}
        <div>
          <h3 className="font-display text-xl font-bold text-textPrimary mb-8 flex items-center space-x-3">
            <span className="text-accentGold font-mono text-sm">02.</span>
            <span>EDUCATION &amp; FOUNDATION</span>
          </h3>

          <div className="relative border-l border-borderGrey/80 pl-6 sm:pl-8 space-y-10 ml-2">
            {education.map((edu, idx) => (
              <div key={idx} className="relative group">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-backgroundPrimary border-2 border-accentGold group-hover:scale-125 transition-transform" />

                <div className="space-y-1">
                  <span className="text-xs font-mono text-accentGold tracking-wider">
                    {edu.period}
                  </span>
                  <h4 className="font-display text-lg font-bold text-textPrimary">
                    {edu.degree}
                  </h4>
                  <p className="font-mono text-xs text-textSecondary uppercase">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-textSecondary font-sans pt-1">
                    {edu.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
