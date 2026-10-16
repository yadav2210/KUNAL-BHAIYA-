"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import logo from "../images/WhatsApp Image 2026-10-15 at 21.10.04.jpeg";

const YouTubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Kunal - Video Editor & Colourist"
              className="h-14 w-14 rounded-full object-cover"
            />
            <span className="font-extrabold text-xl tracking-tight text-[#111111]">
              KUNAL
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
