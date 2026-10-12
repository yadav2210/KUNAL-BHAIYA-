"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

const YouTubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.95 0-1.72-.78-1.72-1.73s.77-1.73 1.72-1.73c.96 0 1.73.78 1.73 1.73s-.77 1.73-1.73 1.73m1.4 9.74v-8.37H5.06v8.37h2.8z" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-[#EAEAEA] py-12 md:py-16 text-[#111111]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#F0F0F0]">
          {/* Left: Brand Identity */}
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-[#111111]">
              KUNAL.
            </span>
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#666666] uppercase mt-1">
              VIDEO EDITOR &amp; COLOURIST
            </span>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex flex-wrap gap-6 sm:gap-8 text-sm font-medium text-[#666666]">
            <a href="#home" className="hover:text-[#111111] transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-[#111111] transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-[#111111] transition-colors">
              Services
            </a>
            <a href="#projects" className="hover:text-[#111111] transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-[#111111] transition-colors">
              Contact
            </a>
          </nav>

          {/* Right: Social Media Icons + Back to Top */}
          <div className="flex items-center space-x-3">
            <a
              href="https://youtube.com/@ksnamli?si=Xhzz7JyeufiHqJYS"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-10 h-10 rounded-full border border-[#EAEAEA] flex items-center justify-center text-[#666666] hover:text-[#111111] hover:border-[#111111] hover:bg-[#F7F7F7] transition-all duration-200"
            >
              <YouTubeIcon />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-[#EAEAEA] flex items-center justify-center text-[#666666] hover:text-[#111111] hover:border-[#111111] hover:bg-[#F7F7F7] transition-all duration-200"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-[#EAEAEA] flex items-center justify-center text-[#666666] hover:text-[#111111] hover:border-[#111111] hover:bg-[#F7F7F7] transition-all duration-200"
            >
              <LinkedInIcon />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center hover:bg-[#FF8500] hover:text-black transition-all duration-200 shadow-sm"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#888888] gap-4">
          <p>© 2026. All Rights Reserved.</p>
          <p className="font-mono text-[11px] text-[#AAAAAA]">
            Crafted With Creativity. Perfected Frame by Frame.
          </p>
        </div>
      </div>
    </footer>
  );
}
