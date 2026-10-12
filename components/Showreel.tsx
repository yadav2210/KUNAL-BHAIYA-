"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { STORY_VIDEO, Project } from "../data/projects";

interface ShowreelProps {
  onOpenShowreel: (project: Project) => void;
}

export default function Showreel({ onOpenShowreel }: ShowreelProps) {
  const [isHovered, setIsHovered] = useState(false);

  const showreelItem: Project = {
    id: "main-showreel",
    title: "A Story in Every Frame.",
    client: "Official Cinematic Showreel",
    category: "Showreel",
    thumbnail: STORY_VIDEO.thumbnail,
    videoUrl: STORY_VIDEO.videoUrl,
    embedUrl: STORY_VIDEO.embedUrl,
    description:
      "A collection of my creative work, bringing together cinematic storytelling, dynamic editing, visual aesthetics, and professional colour grading. Every cut, transition, and colour choice is crafted with purpose.",
    role: "Video Editor & Colourist",
    deliverables: ["4K Master", "Cinematic Cut", "Colour Suite"],
    year: "2026",
    badge: "Official Showreel",
    views: "Cinema Reel",
  };

  return (
    <section id="showreel" className="py-20 md:py-28 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col items-center text-center">
        {/* Section Header */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#F4F4F4] border border-[#EAEAEA] mb-5">
          <span className="w-2 h-2 rounded-full bg-[#FF8500]" />
          <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#111111]">
            WATCH MY WORK
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight mb-4">
          A Story in Every Frame.
        </h2>

        <p className="text-base sm:text-lg text-[#666666] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          A collection of my creative work, bringing together cinematic storytelling, dynamic editing, visual aesthetics, and professional colour grading. Every cut, transition, and colour choice is crafted with purpose.
        </p>

        {/* Cinematic Video Showcase Box */}
        <div className="w-full max-w-4xl md:w-[84%] mb-10">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onOpenShowreel(showreelItem)}
            className="group relative cursor-pointer aspect-video rounded-3xl md:rounded-[32px] overflow-hidden bg-black border border-[#EAEAEA] shadow-[0_16px_45px_-12px_rgba(0,0,0,0.18)] hover:shadow-cardHover transition-all duration-500 transform hover:scale-[1.015]"
          >
            <Image
              src={STORY_VIDEO.thumbnail}
              alt="Official Cinematic Showreel"
              fill
              sizes="(max-width: 1024px) 100vw, 85vw"
              className={`object-cover transition-transform duration-700 ease-out ${
                isHovered ? "scale-106" : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/30 group-hover:from-black/85 transition-colors duration-300" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-[#111111] shadow-2xl transition-all duration-300 ${
                  isHovered
                    ? "scale-115 bg-[#FF8500] text-black shadow-[0_0_40px_rgba(255,133,0,0.65)]"
                    : "scale-100 group-hover:scale-110"
                }`}
              >
                <Play className="w-8 h-8 md:w-10 md:h-10 fill-current translate-x-0.5" />
              </div>
            </div>

            <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-white text-xs font-mono">
              <span className="uppercase tracking-widest text-white/90">
                Official Showreel &bull; 24 FPS
              </span>
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                {STORY_VIDEO.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Button: Watch My Showreel */}
        <button
          onClick={() => onOpenShowreel(showreelItem)}
          className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-full bg-[#111111] text-white text-sm font-semibold tracking-wide hover:bg-[#FF8500] hover:text-black transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Watch My Showreel</span>
        </button>
      </div>
    </section>
  );
}
