"use client";

import { useEffect } from "react";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  videoUrl: string;
  embedUrl: string;
  videoId: string;
  thumbnail: string;
  aspectRatio: string;
  platform: string;
  verified: boolean;
  order: number;
  featured: boolean;
  observations?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  allProjects: Project[];
}

export default function ProjectModal({
  project,
  onClose,
  onSelectProject,
  allProjects,
}: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (!project) return;

      const currentIndex = allProjects.findIndex((p) => p.id === project.id);
      if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % allProjects.length;
        onSelectProject(allProjects[nextIndex]);
      } else if (e.key === "ArrowLeft") {
        const prevIndex = (currentIndex - 1 + allProjects.length) % allProjects.length;
        onSelectProject(allProjects[prevIndex]);
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, onSelectProject, allProjects]);

  if (!project) return null;

  const isVertical = project.aspectRatio === "9:16";
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-backgroundPrimary/95 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-surface border border-borderGrey rounded-md overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-borderGrey/60 bg-backgroundSecondary/60">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-accentGold font-bold tracking-widest">
              0{project.order} / PROJECT
            </span>
            <span className="text-borderGrey">•</span>
            <span className="text-xs font-mono text-textSecondary uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline text-[11px] font-mono text-textSecondary">
              Use ← / → keys to navigate
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-borderGrey hover:border-accentGold flex items-center justify-center text-textSecondary hover:text-accentGold transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Video Container: respects 9:16 vertical vs 16:9 widescreen */}
            <div
              className={`w-full mx-auto ${
                isVertical
                  ? "lg:col-span-5 max-w-[340px] aspect-[9/16] bg-black rounded-lg overflow-hidden border border-borderGrey shadow-2xl"
                  : "lg:col-span-8 aspect-video bg-black rounded-lg overflow-hidden border border-borderGrey shadow-2xl"
              }`}
            >
              {project.embedUrl ? (
                <iframe
                  src={`${project.embedUrl}?autoplay=1&rel=0&modestbranding=1`}
                  title={project.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-textSecondary">
                  <p className="font-display text-lg text-accentGold mb-2">Video Preview Unavailable</p>
                  <p className="text-xs">Original source link available below.</p>
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className={`${isVertical ? "lg:col-span-7" : "lg:col-span-4"} space-y-6`}>
              <div>
                <span className="inline-block px-2.5 py-1 text-[10px] font-mono tracking-widest text-accentGold bg-accentGold/10 border border-accentGold/20 rounded mb-3">
                  {project.platform} • {project.aspectRatio}
                </span>
                <h3
                  id="modal-project-title"
                  className="font-display text-2xl sm:text-3xl font-bold text-textPrimary leading-tight mb-3"
                >
                  {project.title}
                </h3>
                <p className="text-sm font-sans text-textSecondary leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Creative Observations */}
              {project.observations && (
                <div className="p-4 rounded bg-backgroundSecondary border border-borderGrey/70">
                  <p className="text-xs font-mono text-accentGold tracking-widest uppercase mb-2">
                    Creative Direction &amp; Editing Style
                  </p>
                  <p className="font-editorial text-base text-textPrimary italic">
                    &ldquo;{project.observations}&rdquo;
                  </p>
                </div>
              )}

              {/* Technical breakdown */}
              <div className="space-y-3 pt-2 text-xs font-mono text-textSecondary border-t border-borderGrey/50">
                <div className="flex justify-between">
                  <span>ROLE:</span>
                  <span className="text-textPrimary font-semibold">Video Editing / Assembly</span>
                </div>
                <div className="flex justify-between">
                  <span>FORMAT:</span>
                  <span className="text-textPrimary">{project.aspectRatio} Aspect Ratio</span>
                </div>
                <div className="flex justify-between">
                  <span>VERIFICATION:</span>
                  <span className="text-accentGold font-bold">Verified Portfolio Work</span>
                </div>
              </div>

              {/* External Link */}
              <div className="pt-2">
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-backgroundPrimary bg-accentGold hover:bg-[#D8B778] px-5 py-3 rounded-sm transition-colors w-full justify-center"
                >
                  <span>VIEW ORIGINAL SOURCE</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer: Next / Prev Project Navigation */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-borderGrey/60 bg-backgroundSecondary/80 text-xs font-mono">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="flex items-center space-x-2 text-textSecondary hover:text-accentGold transition-colors"
          >
            <span>← PREVIOUS:</span>
            <span className="hidden sm:inline text-textPrimary">{prevProject.title}</span>
          </button>

          <span className="text-textSecondary">
            {currentIndex + 1} of {allProjects.length}
          </span>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="flex items-center space-x-2 text-textSecondary hover:text-accentGold transition-colors"
          >
            <span>NEXT:</span>
            <span className="hidden sm:inline text-textPrimary">{nextProject.title}</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
