"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, ArrowUpRight, Sparkles } from "lucide-react";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="group relative cursor-pointer flex flex-col rounded-3xl overflow-hidden bg-[#111111] border border-[#EAEAEA] shadow-[0_10px_30px_-6px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_-8px_rgba(0,0,0,0.22)] transition-all duration-500 transform hover:-translate-y-2 aspect-[9/15] w-full select-none"
    >
      {/* 75% - 80% Top Area: Video Thumbnail */}
      <div className="relative h-[76%] w-full overflow-hidden bg-black">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`object-cover transition-transform duration-700 ease-out ${
            isHovered ? "scale-108" : "scale-100"
          }`}
        />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
          {project.badge ? (
            <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#FF8500] border border-[#FF8500]/30">
              {project.badge}
            </span>
          ) : (
            <span />
          )}

          {project.views && (
            <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 border border-white/10">
              {project.views}
            </span>
          )}
        </div>

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 group-hover:from-black/90 transition-colors duration-300" />

        {/* Centered Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-[#111111] shadow-xl transition-all duration-300 ${
              isHovered
                ? "scale-115 bg-[#FF8500] text-black shadow-[0_0_30px_rgba(255,133,0,0.65)]"
                : "scale-100 group-hover:scale-108"
            }`}
          >
            <Play className="w-6 h-6 fill-current translate-x-0.5" />
          </div>
        </div>
      </div>

      {/* 20% - 24% Bottom Area: Premium Black Information Area */}
      <div className="relative h-[24%] w-full bg-[#111111] text-white p-5 flex flex-col justify-between border-t border-white/10">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF8500]">
              {project.client}
            </span>
            <span className="text-[10px] font-mono text-[#888888]">{project.year}</span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug line-clamp-1 group-hover:text-white mt-0.5">
            {project.title}
          </h3>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="text-[11px] text-[#AAAAAA] font-normal font-sans">
            {project.category}
          </span>
          <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#FF8500] group-hover:text-black flex items-center justify-center text-white transition-colors duration-200">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
