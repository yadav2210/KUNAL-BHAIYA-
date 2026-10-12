"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, Send, Check, Phone } from "lucide-react";

// Inline Brand SVGs for perfect rendering and 0 dependency issues
const LinkedInIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.95 0-1.72-.78-1.72-1.73s.77-1.73 1.72-1.73c.96 0 1.73.78 1.73 1.73s-.77 1.73-1.73 1.73m1.4 9.74v-8.37H5.06v8.37h2.8z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Brand Film",
    message: "",
  });

  const emailAddress = "hello@tusharedits.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#111111] text-white relative overflow-hidden">
      {/* Subtle ambient glow in background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF8500]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Subheading & Info */}
          <div className="lg:col-span-7 space-y-6">
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
                href="mailto:hello@tusharedits.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#FF8500] text-black text-sm font-semibold tracking-wide hover:bg-[#E67700] transition-all duration-300"
              >
                Start a Project
              </a>
              <a
                href="mailto:hello@tusharedits.com"
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
              </div>

              {/* Social Channels Pills */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-[#FF8500] hover:text-black border border-white/10 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300"
                >
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-[#FF8500] hover:text-black border border-white/10 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300"
                >
                  <InstagramIcon />
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://whatsapp.com"
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

          {/* Right Column: Interactive Quick Proposal Box */}
          <div className="lg:col-span-5 bg-[#181818] border border-white/10 rounded-3xl p-7 md:p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Start a Collaboration</h3>
            <p className="text-xs text-[#999999] mb-6">
              Drop project briefs, timeline goals, or request editing availability.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#FF8500]/20 text-[#FF8500] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Dispatched!</h4>
                <p className="text-xs text-[#999999]">
                  Thank you! I will review your project requirements and respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#999999] block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#FF8500] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#999999] block mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@brand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#FF8500] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#999999] block mb-1">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#202020] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF8500] transition-colors"
                  >
                    <option value="Brand Film">Brand Film / Commercial</option>
                    <option value="Short-Form">Short-Form Social / Reels</option>
                    <option value="Corporate">Corporate Film / Documentary</option>
                    <option value="Colour Grading">Colour Correction &amp; Grading</option>
                    <option value="Full Post-Production">Full Post-Production</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#999999] block mb-1">
                    Project Overview
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell me about the story, timeline, and reference vision..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#FF8500] transition-colors resize-none"
                  />
                </div>

                {/* Primary CTA with diagonal arrow upward */}
                <button
                  type="submit"
                  className="group w-full py-4 rounded-full bg-[#FF8500] hover:bg-[#E67700] text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:-translate-y-0.5"
                >
                  <span>Let&apos;s Work Together</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
