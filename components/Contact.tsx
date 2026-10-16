"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "ksnamli3698@gmail.com";
  const phoneNumber = "+91 8602424055";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#111111] text-white relative overflow-hidden">
      {/* Subtle ambient glow in background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF8500]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Subheading & Info */}
          <div className="lg:col-span-12 space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15">
              <span className="w-2 h-2 rounded-full bg-[#FF8500] animate-pulse" />
              <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#FF8500]">
                Let&apos;s Collaborate
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Have a Vision? Let&apos;s Bring It to Life.
            </h2>

            <p className="text-base sm:text-lg text-[#999999] leading-relaxed max-w-xl font-normal">
              Whether you&apos;re creating a cinematic brand film, launching a digital advertising campaign, or developing engaging social media content, I&apos;m here to help turn your ideas into impactful visual stories.
            </p>

            <p className="text-base sm:text-lg text-white/80 font-medium">
              Let&apos;s collaborate and create something worth watching.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://wa.me/918602424055"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#FF8500] text-black text-sm font-semibold tracking-wide hover:bg-[#E67700] transition-all duration-300"
              >
                Start a Project
              </a>
              <a
                href="https://wa.me/918602424055"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm font-semibold tracking-wide hover:bg-white/10 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>

            {/* Direct Channels */}
            <div className="pt-6 space-y-4">
              {/* Copyable Email Box */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="group inline-flex items-center space-x-3 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 text-left"
                >
                  <Mail className="w-4 h-4 text-[#FF8500]" />
                  <span className="text-sm font-mono text-white/90">{emailAddress}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/70 group-hover:bg-[#FF8500] group-hover:text-black transition-colors font-mono">
                    {copiedEmail ? "Copied!" : "Click to copy"}
                  </span>
                </button>
                <a
                  href="tel:+918602424055"
                  className="inline-flex items-center space-x-3 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 text-left"
                >
                  <Phone className="w-4 h-4 text-[#FF8500]" />
                  <span className="text-sm font-mono text-white/90">{phoneNumber}</span>
                </a>
              </div>

              {/* Social Channels Pills */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://wa.me/918602424055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-[#FF8500] hover:text-black border border-white/10 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
              <p className="text-lg sm:text-xl font-semibold italic text-[#FF8500] pt-4">
                Your Vision. My Creativity. One Powerful Story.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
