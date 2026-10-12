"use client";

import { useState } from "react";
import Hero from "../components/Hero";
import VideoShowcase from "../components/VideoShowcase";
import Services from "../components/Services";
import About from "../components/About";
import Clients from "../components/Clients";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import VideoModal from "../components/VideoModal";
import { Project } from "../data/projects";

export default function Home() {
  const [selectedVideoProject, setSelectedVideoProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenVideo = (project: Project) => {
    setSelectedVideoProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedVideoProject(null);
  };

  return (
    <main className="min-h-screen bg-white text-[#111111] flex flex-col selection:bg-[#FF8500] selection:text-white">
      {/* 01 — HERO SECTION */}
      <Hero />

      {/* 02 — FEATURED VIDEO SHOWCASE (3 Rotated Vertical Cards + Ticker) */}
      <VideoShowcase onSelectVideo={handleOpenVideo} />

      {/* 03 — SERVICES SECTION */}
      <Services />

      {/* 04 — ABOUT / STORY SECTION ("Watch My Story" + Curved Arrow + 16:9 Video) */}
      <About onPlayStory={handleOpenVideo} />

      {/* 05 — CLIENTS & BRANDS SECTION */}
      <Clients />

      {/* 06 — FEATURED PROJECTS SECTION (Light Gray Container + Category Tabs + 3-Card Carousel) */}
      <Projects onSelectProject={handleOpenVideo} />

      {/* 07 — CONTACT SECTION (Dark #111111 + "Have a Story in Mind?" + "Let's Work Together") */}
      <Contact />

      {/* Interactive Video & Project Details Modal */}
      <VideoModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        project={selectedVideoProject}
      />
    </main>
  );
}
