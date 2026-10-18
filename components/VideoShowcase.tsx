"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Eye, Sparkles } from "lucide-react";
import { FEATURED_SHOWCASE_VIDEOS, Project } from "../data/projects";

interface VideoShowcaseProps {
  onSelectVideo: (project: Project) => void;
}

const TICKER_ITEMS = [
  "Cinematic Editing",
  "Digital Commercials",
  "Brand Films",
  "Corporate Films",
  "Short-Form Videos",
  "Colour Grading",
  "Social Media Content",
];

export default function VideoShowcase({ onSelectVideo }: VideoShowcaseProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="showcase" className="relative py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Three Large Vertical Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 items-center justify-center max-w-5xl mx-auto py-6">
          {FEATURED_SHOWCASE_VIDEOS.map((item, index) => {
            const isHovered = hoveredCard === item.id;
            // Rotation based on position: Card 1 (-3deg), Card 2 (0deg), Card 3 (+3deg)
            const baseRotation = item.rotation;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => {
                  if ("channelUrl" in item && typeof item.channelUrl === "string" && item.channelUrl) {
                    window.open(item.channelUrl, "_blank", "noopener,noreferrer");
                    return;
                  }
                  onSelectVideo(item as unknown as Project);
                }}
                style={{
                  transform: isHovered
                    ? `scale(1.04) rotate(${baseRotation * 0.2}deg) translateY(-8px)`
                    : `scale(1) rotate(${baseRotation}deg)`,
                  transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
                className="group relative cursor-pointer rounded-3xl overflow-hidden bg-[#111111] border border-[#EAEAEA] shadow-[0_12px_35px_-8px_rgba(0,0,0,0.12)] hover:shadow-[0_24px_50px_-10px_rgba(0,0,0,0.22)] aspect-[9/16] max-h-[580px] w-full flex flex-col justify-between"
              >
                {/* Full-Cover Background Thumbnail */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`object-cover transition-transform duration-700 ease-out ${
                      isHovered ? "scale-110" : "scale-100"
                    }`}
                    priority={index === 1}
                  />
                  {/* Cinematic Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 group-hover:from-black/90 transition-all duration-300" />
                </div>

                {/* Top Badge Area */}
                <div className="relative z-10 p-5 flex items-center justify-between">
                  <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono tracking-wider font-medium">
                    <Eye className="w-3 h-3 text-[#FF8500]" />
                    <span>{item.badge}</span>
                  </span>

                  <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white/90">
                    {item.category}
                  </span>
                </div>

                {/* Centered Play Button */}
                <div className="relative z-10 flex items-center justify-center my-auto">
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-[#111111] shadow-2xl transition-all duration-400 ease-out ${
                      isHovered
                        ? "scale-115 bg-[#FF8500] text-black shadow-[0_0_35px_rgba(255,133,0,0.6)]"
                        : "scale-100 group-hover:scale-110"
                    }`}
                  >
                    <Play className="w-7 h-7 md:w-8 md:h-8 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom Card Information */}
                <div className="relative z-10 p-5 bg-gradient-to-t from-black/95 to-transparent pt-8 text-white space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF8500] block">
                    {item.client}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/70 line-clamp-1 font-normal pt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Horizontal Continuous Category Ticker */}
      <div className="w-full mt-14 md:mt-20 py-5 border-y border-[#EAEAEA] bg-[#FAFAFA] overflow-hidden select-none">
        <div className="flex w-max animate-marquee space-x-10 items-center">
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((cat, idx) => (
            <div key={idx} className="flex items-center space-x-8 shrink-0">
              <span className="text-sm md:text-base font-bold tracking-tight text-[#111111] uppercase hover:text-[#FF8500] transition-colors cursor-default">
                {cat}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8500] shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
