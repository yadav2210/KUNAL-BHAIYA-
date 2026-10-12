"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Project } from "../data/projects";
import ProjectCard from "./ProjectCard";

interface ProjectCarouselProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export default function ProjectCarousel({ projects, onSelectProject }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Dragging state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const dragDistance = useRef(0);

  // Cards visible per view: desktop 3, tablet 2, mobile 1
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - cardsPerView);

  // Reset index if category filter shrinks project list
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [projects.length, maxIndex, currentIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  }, [maxIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Drag / Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    isDragging.current = true;
    dragDistance.current = 0;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    startX.current = clientX;
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging.current) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    dragDistance.current = clientX - startX.current;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (dragDistance.current < -50) {
      handleNext();
    } else if (dragDistance.current > 50) {
      handlePrev();
    }
  };

  if (projects.length === 0) {
    return (
      <div className="py-20 text-center text-[#666666]">
        No projects in this category yet.
      </div>
    );
  }

  // Calculate slide offset percentage
  const cardWidthPercentage = 100 / cardsPerView;
  const transformStyle = `translateX(-${currentIndex * cardWidthPercentage}%)`;

  return (
    <div className="relative w-full">
      {/* Carousel Track Container */}
      <div
        ref={containerRef}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onMouseLeave={handleTouchEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="overflow-hidden w-full py-4 select-none cursor-grab active:cursor-grabbing"
      >
        <div
          className="flex transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transform: transformStyle,
            gap: "1.75rem", // 28px gap
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                flex: `0 0 calc(${cardWidthPercentage}% - ${(1.75 * (cardsPerView - 1)) / cardsPerView}rem)`,
              }}
              className="shrink-0 transition-opacity duration-300"
            >
              <ProjectCard
                project={project}
                onClick={() => {
                  if (Math.abs(dragDistance.current) < 10) {
                    if (project.openExternally) {
                      window.open(project.videoUrl, "_blank", "noopener,noreferrer");
                      return;
                    }
                    onSelectProject(project);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Controls Bottom Bar */}
      <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#EAEAEA]">
        {/* Pagination Dots / Progress indicator */}
        <div className="flex items-center space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-8 bg-[#FF8500]"
                  : "w-2 bg-[#D1D1D1] hover:bg-[#888888]"
              }`}
            />
          ))}
          <span className="text-xs font-mono text-[#888888] ml-3">
            0{currentIndex + 1} / 0{maxIndex + 1}
          </span>
        </div>

        {/* Circular Prev & Next Buttons */}
        <div className="flex items-center space-x-3">
          {/* Previous Button: Minimal gray/black */}
          <button
            onClick={handlePrev}
            aria-label="Previous Project"
            className="w-12 h-12 rounded-full bg-white border border-[#EAEAEA] text-[#111111] hover:bg-[#111111] hover:text-white hover:border-[#111111] flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Next Button: Orange background, white arrow */}
          <button
            onClick={handleNext}
            aria-label="Next Project"
            className="w-12 h-12 rounded-full bg-[#FF8500] text-white flex items-center justify-center transition-all duration-300 shadow-[0_4px_16px_rgba(255,133,0,0.35)] hover:bg-[#E67700] hover:scale-105 active:scale-95"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
