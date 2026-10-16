"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "../images/WhatsApp Image 2026-10-15 at 21.10.04.jpeg";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#showcase", label: "Showcase" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Track active section
      const sections = ["home", "showcase", "services", "about", "projects", "contact"];
      const currentScroll = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (currentScroll >= top && currentScroll < top + height) {
            setActiveHash(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveHash(href);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#EAEAEA] py-3.5 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)]"
            : "bg-white py-5 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link
            href="#home"
            className="flex items-center space-x-2 group focus:outline-none"
            aria-label="Kunal - Video Editor & Colourist"
          >
            <Image
              src={logo}
              alt="Kunal - Video Editor & Colourist"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover"
              priority
            />
            <span className="font-extrabold text-lg md:text-xl tracking-tight text-[#111111]">
              KUNAL
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeHash === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-sm font-medium tracking-tight transition-all duration-200 relative py-1 ${
                    isActive
                      ? "text-[#111111] font-bold"
                      : "text-[#666666] hover:text-[#111111]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#FF8500] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Far Right CTA: "Let's Talk" */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/918602424055"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#111111] text-white hover:bg-[#FF8500] hover:text-black transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#111111] hover:bg-[#F7F7F7] focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed inset-x-0 top-[65px] z-30 bg-white border-b border-[#EAEAEA] shadow-xl md:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 max-h-screen py-6 px-6 pointer-events-auto" : "opacity-0 max-h-0 py-0 px-6 pointer-events-none overflow-hidden"
        }`}
      >
        <div className="flex flex-col space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="text-base font-medium text-[#111111] hover:text-[#FF8500] py-2 border-b border-[#F7F7F7] flex items-center justify-between"
            >
              <span>{link.label}</span>
              <span className="text-xs text-[#FF8500] font-mono">↗</span>
            </a>
          ))}
          <a
            href="https://wa.me/918602424055"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#111111] text-white hover:bg-[#FF8500] hover:text-black transition-colors"
          >
            Let&apos;s Talk ↗
          </a>
        </div>
      </div>
    </>
  );
}
