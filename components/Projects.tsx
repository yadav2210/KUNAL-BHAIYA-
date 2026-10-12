"use client";

import { useState, useMemo } from "react";
import { CATEGORIES, PROJECTS_DATA, Project } from "../data/projects";
import ProjectCarousel from "./ProjectCarousel";

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All Projects");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All Projects") {
      return PROJECTS_DATA;
    }
    return PROJECTS_DATA.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Main Section Container with very light gray background & large rounded corners */}
        <div className="bg-[#F7F7F7] border border-[#EAEAEA] rounded-[32px] md:rounded-[44px] p-6 sm:p-10 md:p-16 shadow-[0_4px_30px_-5px_rgba(0,0,0,0.03)]">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-[#EAEAEA] mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF8500]" />
              <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#111111]">
                SELECTED PROJECTS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#111111] tracking-tight leading-tight">
              Stories I&apos;ve Brought to Life.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto">
              A collection of creative projects showcasing cinematic editing, colour grading, visual storytelling, and professional post-production.
            </p>

            {/* Horizontal Functional Category Tabs */}
            <div className="mt-10 flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 pb-2">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-tight transition-all duration-300 ${
                      isActive
                        ? "bg-[#111111] text-white shadow-md"
                        : "bg-white text-[#666666] hover:text-[#111111] hover:bg-[#EFEFEF] border border-[#EAEAEA]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Project Carousel */}
          <ProjectCarousel
            projects={filteredProjects}
            onSelectProject={onSelectProject}
          />
        </div>
      </div>
    </section>
  );
}
