interface ExpertiseItem {
  number: string;
  title: string;
  description: string;
  focus: string;
}

const expertiseItems: ExpertiseItem[] = [
  {
    number: "01",
    title: "VIDEO EDITING",
    description:
      "Transforming raw footage into coherent, engaging visual sequences with seamless cut transitions and narrative clarity.",
    focus: "Structure • Continuity • Selection",
  },
  {
    number: "02",
    title: "SHORT-FORM CONTENT",
    description:
      "Editing high-retention content tailored for 9:16 vertical displays across YouTube Shorts, Instagram Reels, and digital platforms.",
    focus: "Hook Creation • Fast Pacing • Vertical Framing",
  },
  {
    number: "03",
    title: "VISUAL STORYTELLING",
    description:
      "Building cinematic tension and narrative progression through calculated shot ordering, tempo variation, and emotional beats.",
    focus: "Narrative Arc • Scene Rhythm • Emotion",
  },
  {
    number: "04",
    title: "RHYTHM & PACING",
    description:
      "Mastering the relationship between sound transients, musical rhythm, and video cut points for energetic synchronization.",
    focus: "Beat Matching • Speed Ramping • Audio Sync",
  },
  {
    number: "05",
    title: "VISUAL FINISHING",
    description:
      "Balancing scene contrast, color tone consistency, composition framing, and clean exported masters.",
    focus: "Color Balance • Frame Composition • Export Precision",
  },
  {
    number: "06",
    title: "CREATIVE CONTENT",
    description:
      "Developing distinctive visual styles that elevate creator content and capture audience attention in competitive digital feeds.",
    focus: "Engagement • Dynamic Movement • Visual Identity",
  },
];

export default function Expertise() {
  return (
    <div className="w-full space-y-16">
      {/* 6 Core Expertise Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertiseItems.map((item) => (
          <div
            key={item.number}
            className="group relative p-8 rounded-md border border-borderGrey/70 bg-surface/30 hover:border-accentGold/80 hover:bg-surface/60 transition-all duration-500 hover:gold-glow flex flex-col justify-between"
          >
            <div>
              {/* Card Number */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-2xl font-bold text-accentGold">
                  {item.number}
                </span>
                <span className="w-6 h-[1px] bg-borderGrey group-hover:w-10 group-hover:bg-accentGold transition-all duration-300" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold text-textPrimary group-hover:text-accentGold transition-colors mb-3 tracking-wide">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm font-sans text-textSecondary leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            {/* Focus area */}
            <div className="pt-4 border-t border-borderGrey/50">
              <p className="text-[11px] font-mono text-textSecondary/80 uppercase tracking-wider">
                <span className="text-accentGold font-bold">FOCUS:</span> {item.focus}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Software & Tools Section: The Creative Toolkit */}
      <div className="rounded-lg border border-borderGrey/80 bg-surface/40 p-8 md:p-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-borderGrey/60">
          <div>
            <span className="text-xs font-mono text-accentGold tracking-widest uppercase">
              CONFIRMED WORKFLOW
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-textPrimary mt-1">
              THE CREATIVE TOOLKIT
            </h3>
          </div>
          <p className="font-editorial text-textSecondary text-base italic max-w-md mt-2 md:mt-0">
            Dedicated software environment utilized for verified post-production &amp; visual execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Confirmed primary software */}
          <div className="p-5 rounded border border-accentGold/50 bg-backgroundSecondary flex items-center space-x-4">
            <div className="w-12 h-12 rounded bg-[#00005B] text-[#9999FF] flex items-center justify-center font-bold text-lg font-mono border border-[#9999FF]/40 shadow-md">
              Ae
            </div>
            <div>
              <h4 className="font-display font-bold text-textPrimary text-sm">
                Adobe After Effects
              </h4>
              <p className="text-xs text-accentGold font-mono">Confirmed Primary Tool</p>
              <p className="text-[11px] text-textSecondary mt-0.5">
                Motion graphics, rhythm cuts &amp; visual effects
              </p>
            </div>
          </div>

          <div className="p-5 rounded border border-borderGrey/60 bg-surface/30 flex items-center space-x-4">
            <div className="w-12 h-12 rounded bg-backgroundPrimary text-accentGold flex items-center justify-center font-bold text-sm font-mono border border-borderGrey">
              9:16
            </div>
            <div>
              <h4 className="font-display font-bold text-textPrimary text-sm">
                Vertical Social Pipeline
              </h4>
              <p className="text-xs text-textSecondary font-mono">YouTube Shorts &amp; Reels</p>
              <p className="text-[11px] text-textSecondary mt-0.5">
                Optimized mobile retention &amp; framing
              </p>
            </div>
          </div>

          <div className="p-5 rounded border border-borderGrey/60 bg-surface/30 flex items-center space-x-4">
            <div className="w-12 h-12 rounded bg-backgroundPrimary text-accentGold flex items-center justify-center font-bold text-sm font-mono border border-borderGrey">
              16:9
            </div>
            <div>
              <h4 className="font-display font-bold text-textPrimary text-sm">
                Cinematic Widescreen
              </h4>
              <p className="text-xs text-textSecondary font-mono">Landscape Format</p>
              <p className="text-[11px] text-textSecondary mt-0.5">
                Atmospheric narrative &amp; sequence pacing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
