"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import VideoModal from "./VideoModal";
import { PROJECTS_DATA, Project } from "../data/projects";

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = ["ALL", "BRAND FILMS", "DIGITAL COMMERCIALS", "SHORT-FORM", "COLOUR GRADING"];

  const filteredProjects = activeCategory === "ALL"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category.toUpperCase() === activeCategory);

  return (
    <div className="w-full">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-[#EAEAEA] pb-6">
        <span className="text-xs font-mono text-[#FF8500] tracking-widest mr-2 uppercase">
          FILTER WORK:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-xs font-mono tracking-widest uppercase rounded-full transition-all duration-300 ${
              activeCategory === cat
                ? "bg-[#111111] text-white font-bold shadow-md"
                : "text-[#666666] hover:text-[#111111] bg-white border border-[#EAEAEA] hover:border-[#111111]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Project Video Modal */}
      <VideoModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </div>
  );
}
