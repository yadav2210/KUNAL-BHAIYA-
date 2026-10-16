"use client";

import { ArrowRight, Play, Sparkles } from "lucide-react";

interface HeroProps {
  onExploreClick?: () => void;
  onContactClick?: () => void;
}

export default function Hero({ onExploreClick, onContactClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden bg-white text-center flex flex-col items-center justify-center"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        {/* Small Introductory Pill Label */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#F4F4F4] border border-[#EAEAEA] mb-8 transition-transform hover:scale-105 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#FF8500]" />
          <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#111111]">
            VIDEO EDITOR | COLOURIST | VISUAL STORYTELLER
          </span>
        </div>

        {/* Main Hero Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold text-[#111111] tracking-tight leading-[1.08] max-w-4xl mb-7">
          Every Frame Has a Story. <br className="hidden sm:inline" />
          <span className="text-[#111111] relative inline-block">
            I Make It Unforgettable.
            <span className="absolute bottom-2 left-0 w-full h-[6px] bg-[#FF8500]/25 -z-10 rounded-full" />
          </span>
        </h1>

        {/* Supporting Descriptions */}
        <p className="text-base sm:text-lg md:text-xl text-[#666666] max-w-3xl leading-relaxed mb-4 font-normal">
          I transform raw footage into compelling visual experiences through cinematic editing, creative storytelling, professional colour grading, and precise sound design.
        </p>

        <p className="text-sm sm:text-base text-[#777777] max-w-2xl leading-relaxed mb-10 font-normal">
          From high-impact commercials to emotionally engaging brand films, I create videos that capture attention, communicate ideas, and leave a lasting impression.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
          <a
            href="#projects"
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full bg-[#111111] text-white text-sm font-semibold tracking-wide hover:bg-[#FF8500] hover:text-black transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Explore My Work</span>
          </a>

          <a
            href="https://wa.me/918602424055"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onContactClick}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full bg-white text-[#111111] border border-[#EAEAEA] text-sm font-semibold tracking-wide hover:border-[#111111] hover:bg-[#F7F7F7] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Let&apos;s Work Together</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Creative Tagline */}
        <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.25em] text-[#888888] border-t border-[#F0F0F0] pt-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF8500]" />
          <span>Crafting Stories. Creating Impact.</span>
        </div>
      </div>
    </section>
  );
}
