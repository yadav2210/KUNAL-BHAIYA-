"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Sparkles, Quote } from "lucide-react";
import { STORY_VIDEO, Project } from "../data/projects";

interface AboutProps {
  onPlayStory: (project: Project) => void;
}

export default function About({ onPlayStory }: AboutProps) {
  const [isHovered, setIsHovered] = useState(false);

  const storyProjectItem: Project = {
    id: "story-reel",
    title: "More Than Just Editing. It's About Storytelling.",
    client: "Official Story Reel",
    category: "Showreel",
    thumbnail: STORY_VIDEO.thumbnail,
    videoUrl: STORY_VIDEO.videoUrl,
    embedUrl: STORY_VIDEO.embedUrl,
    description:
      "A cinematic exploration of rhythm, movement, and intentional storytelling across commercial, corporate, and brand film edits.",
    role: "Video Editor & Colourist",
    deliverables: ["4K Cinema Master", "Color Grading", "Sound Design"],
    year: "2026",
    badge: "Featured Showreel",
    views: "24 FPS Master",
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col items-center">
        {/* Section Header */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#F4F4F4] border border-[#EAEAEA] mb-5">
          <span className="w-2 h-2 rounded-full bg-[#FF8500]" />
          <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#111111]">
            BEHIND THE EDIT
          </span>
        </div>

        <div className="relative mb-12 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
            More Than Just Editing. <br className="hidden sm:inline" />
            It&apos;s About Storytelling.
          </h2>

          {/* Decorative Curved Arrow pointing toward the video */}
          <div className="hidden lg:block absolute -right-20 -top-2 pointer-events-none select-none">
            <svg
              className="w-20 h-20 text-[#FF8500]"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 20 C60 10, 80 50, 45 75" />
              <path d="M42 62 L45 76 L59 72" />
            </svg>
            <span className="font-mono text-[10px] font-bold text-[#FF8500] tracking-wider -mt-1 block -rotate-6">
              Watch Reel
            </span>
          </div>
        </div>

        {/* Large 16:9 Video Container (75% - 85% width) */}
        <div className="w-full max-w-4xl md:w-[84%] mb-14">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onPlayStory(storyProjectItem)}
            className="group relative cursor-pointer aspect-video rounded-3xl md:rounded-[32px] overflow-hidden bg-black border border-[#EAEAEA] shadow-[0_16px_45px_-12px_rgba(0,0,0,0.18)] hover:shadow-[0_24px_60px_-10px_rgba(0,0,0,0.25)] transition-all duration-500 transform hover:scale-[1.015]"
          >
            {/* Embedded YouTube Video to keep the same design while adding the requested iframe */}
            <iframe
              src="https://www.youtube-nocookie.com/embed/j7R27wLLBr0?autoplay=1&mute=1&controls=1&rel=0"
              title="Kunal creative story reel"
              className="absolute inset-0 h-full w-full pointer-events-none z-10"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

            {/* High-Resolution Thumbnail */}
            <Image
              src={STORY_VIDEO.thumbnail}
              alt="Kunal Video Editor Behind The Edit"
              fill
              sizes="(max-width: 1024px) 100vw, 85vw"
              className={`object-cover transition-transform duration-700 ease-out z-0 ${
                isHovered ? "scale-106" : "scale-100"
              }`}
              priority
            />

            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/30 group-hover:from-black/85 transition-colors duration-300 z-20" />

            {/* Play Button */}
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

          </div>
        </div>

        {/* Narrative Content */}
        <div className="max-w-3xl mx-auto space-y-6 text-[#444444] text-base sm:text-lg leading-relaxed font-normal">
          <p className="text-xl sm:text-2xl font-bold text-[#111111] leading-snug tracking-tight text-center sm:text-left">
            I&apos;m a passionate Video Editor and Colourist who believes every frame has the power to communicate emotions, inspire audiences, and bring stories to life.
          </p>

          <p>
            My expertise lies in transforming raw footage into visually compelling narratives through creative editing, cinematic colour grading, seamless transitions, thoughtful pacing, and immersive sound design.
          </p>

          <p>
            I have worked on a variety of projects, including digital commercials, brand films, corporate films, advertisements, and social media content.
          </p>

          <p>
            My approach combines technical precision with creative storytelling, ensuring every project delivers a polished visual experience while maintaining its unique identity.
          </p>

          <p className="font-medium text-[#111111]">
            Whether it&apos;s a 15-second advertisement or a cinematic corporate film, my goal remains the same: <span className="font-bold">to create content that looks exceptional, tells a meaningful story, and connects with its audience.</span>
          </p>

          {/* Philosophy Card Callout */}
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-[#F7F7F7] border border-[#EAEAEA] relative overflow-hidden">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF6EE] border border-[#FF8500]/25 flex items-center justify-center text-[#FF8500] shrink-0">
                <Quote className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF8500] font-bold block mb-1">
                  My Philosophy
                </span>
                <p className="text-lg sm:text-xl font-bold text-[#111111] italic leading-snug">
                  &ldquo;Great editing isn&apos;t about how many cuts you make. It&apos;s about how deeply every frame connects with the audience.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
