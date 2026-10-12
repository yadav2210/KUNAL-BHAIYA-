"use client";

import { Scissors, Video, Palette, Sparkles, Volume2, Film } from "lucide-react";

const SERVICES = [
  {
    id: "cinematic-editing",
    icon: Film,
    tag: "01 / NARRATIVE & COMMERCIAL",
    title: "Cinematic Video Editing",
    description:
      "Transforming raw footage into engaging visual stories through professional editing, thoughtful pacing, seamless transitions, and creative storytelling.",
    specializations: [
      "Brand Films",
      "Digital Commercials",
      "Corporate Films",
      "Promotional Videos",
      "Cinematic Advertisements",
    ],
  },
  {
    id: "colour-grading",
    icon: Palette,
    tag: "02 / LOOK DEVELOPMENT",
    title: "Colour Correction & Grading",
    description:
      "Enhancing every frame with professional colour correction and cinematic grading to establish mood, visual consistency, and a distinctive aesthetic.",
    specializations: [
      "Cinematic Colour Grading",
      "Colour Correction",
      "Shot Matching",
      "Visual Enhancement",
      "Look Development",
    ],
  },
  {
    id: "short-form",
    icon: Scissors,
    tag: "03 / HIGH RETENTION",
    title: "Short-Form Content Editing",
    description:
      "Creating engaging, attention-grabbing short-form videos designed for digital platforms and modern audiences.",
    specializations: [
      "Instagram Reels",
      "YouTube Shorts",
      "Social Media Advertisements",
      "Promotional Reels",
      "Talking-Head Videos",
    ],
  },
  {
    id: "sound-design",
    icon: Volume2,
    tag: "04 / AUDIO & FINISHING",
    title: "Sound Design & Post-Production",
    description:
      "Bringing visuals to life through carefully crafted sound, music synchronization, creative effects, and polished audio.",
    specializations: [
      "Sound Design",
      "Audio Synchronization",
      "Music Editing",
      "Motion Graphics",
      "Final Video Mastering",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#F4F4F4] border border-[#EAEAEA] mb-5">
            <span className="w-2 h-2 rounded-full bg-[#FF8500]" />
            <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#111111]">
              WHAT I DO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
            Creative Solutions for Every Frame.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#666666] leading-relaxed">
            From the first cut to the final colour grade, I provide professional post-production services that bring creative ideas to life.
          </p>
        </div>

        {/* 2-Column Grid (2x2 on desktop, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {SERVICES.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group relative rounded-3xl bg-white border border-[#EAEAEA] p-8 md:p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(0,0,0,0.08)] hover:border-[#111111]/30 transition-all duration-400 transform hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle decorative dot pattern at bottom corner */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 subtle-pattern-dots opacity-40 group-hover:opacity-75 transition-opacity pointer-events-none rounded-full" />

                <div>
                  {/* Top Bar: Icon + Number Tag */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-[#FFF6EE] border border-[#FF8500]/20 flex items-center justify-center text-[#FF8500] group-hover:bg-[#FF8500] group-hover:text-white transition-all duration-300 group-hover:scale-105 shadow-sm">
                      <Icon className="w-7 h-7 stroke-[2.2]" />
                    </div>

                    <span className="text-[10px] font-mono tracking-widest text-[#999999] uppercase">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight mb-4 group-hover:text-[#111111] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#666666] leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Specializations pills */}
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#999999] block mb-2 font-semibold">
                    Specializations:
                  </span>
                  <div className="pt-2 border-t border-[#F2F2F2] flex flex-wrap gap-2 relative z-10">
                    {service.specializations.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-[#F7F7F7] text-[#444444] border border-[#EAEAEA] group-hover:bg-white group-hover:border-[#D6D6D6] transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
