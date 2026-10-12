"use client";

import { Video, Palette, Sliders, Wand2 } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    category: "Video Editing",
    icon: Video,
    skills: [
      "Cinematic Editing",
      "Narrative Editing",
      "Commercial Editing",
      "Short-Form Content",
      "Long-Form Content",
    ],
  },
  {
    category: "Colour & Visuals",
    icon: Palette,
    skills: [
      "Colour Correction",
      "Cinematic Colour Grading",
      "Shot Matching",
      "Visual Enhancement",
      "Look Development",
    ],
  },
  {
    category: "Post-Production",
    icon: Sliders,
    skills: [
      "Sound Design",
      "Music Synchronization",
      "Motion Graphics",
      "Video Transitions",
      "Final Mastering",
    ],
  },
  {
    category: "Creative Skills",
    icon: Wand2,
    skills: [
      "Visual Storytelling",
      "Creative Direction",
      "Content Strategy",
      "Advertising Content",
      "Brand Communication",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-[#FAFAFA] border-t border-[#EAEAEA]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-[#EAEAEA] mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF8500]" />
            <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#111111]">
              MY CREATIVE TOOLKIT
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
            Where Creativity Meets Precision.
          </h2>
        </div>

        {/* 4 Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="group rounded-3xl bg-white border border-[#EAEAEA] p-8 md:p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-cardHover transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF6EE] border border-[#FF8500]/20 flex items-center justify-center text-[#FF8500] group-hover:bg-[#FF8500] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] tracking-tight">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-4 py-2 rounded-full text-xs font-medium bg-[#F7F7F7] text-[#333333] border border-[#EAEAEA] hover:border-[#111111] hover:bg-white transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
