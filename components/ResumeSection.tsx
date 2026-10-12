"use client";

import { useState } from "react";

export default function ResumeSection() {
  const [copied, setCopied] = useState(false);

  const resumeText = `KUNAL SINGH SONGARA
Video Editor | Visual Storyteller
Location: Ratlam, Madhya Pradesh, India
Email: ksnamli3698@gmail.com | Phone: +91 8602424055
YouTube: https://youtube.com/@ksnamli

PROFILE
Creative Video Editor and visual storyteller with demonstrated craftsmanship in high-retention short-form video assembly, beat-synchronized pacing, narrative sequencing, and cinematic visual composition. Strong professional discipline, attention to cut precision, and deadline adherence.

CORE CREATIVE CAPABILITIES
• Video Editing & Sequence Assembly
• Short-Form Video & Retention Pacing (9:16 vertical formatting)
• Kinetic Audio-Visual Beat Synchronization
• Visual Storytelling & Narrative Flow
• Adobe After Effects Motion & Effects Pipeline

PORTFOLIO HIGHLIGHTS
• Dynamic Rhythm Short (YouTube Shorts) - Audio-visual beat sync & fast cut transitions
• Cinematic Visual Story (Landscape 16:9) - Atmospheric grading & mood-driven editorial pacing
• Kinetic Sequence Cuts (Social Shorts) - Speed ramping & retention-focused framing

PROFESSIONAL EXPERIENCE (TRANSFERABLE DISCIPLINE)
• Tech Mahindra | Customer Support Executive (Sep 2025 – Feb 2026)
• TaskUs | Customer Relationship Manager (May 2024 – Jul 2025)
• Teleperformance | Technical Support Agent (Apr 2023 – Apr 2024)

EDUCATION
• Bachelor of Science (B.Sc.) | IGNOU (2021 – 2025)
• Secondary & Higher Secondary Education | Sainik School Jalna, Maharashtra (2012 – 2018)`;

  const handleDownload = () => {
    const blob = new Blob([resumeText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Kunal_Singh_Songara_Video_Editor_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="resume" className="w-full">
      <div className="rounded-lg border border-borderGrey bg-surface/40 p-6 sm:p-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-borderGrey/60 pb-6 mb-6">
          <div>
            <span className="font-mono text-xs text-accentGold tracking-widest uppercase">
              RECRUITER READY
            </span>
            <h3 className="font-display text-2xl font-bold text-textPrimary mt-1">
              CURATED VIDEO EDITOR RÉSUMÉ
            </h3>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleCopy}
              className="px-4 py-2 text-xs font-mono tracking-wider border border-borderGrey hover:border-accentGold text-textPrimary rounded transition-colors"
            >
              {copied ? "COPIED! ✓" : "COPY TEXT"}
            </button>
            <button
              onClick={handleDownload}
              className="px-5 py-2 text-xs font-mono font-bold tracking-wider bg-accentGold text-backgroundPrimary hover:bg-[#D8B778] rounded transition-colors"
            >
              DOWNLOAD ↓
            </button>
          </div>
        </div>

        {/* Formatted Resume Preview */}
        <pre className="font-mono text-xs sm:text-[13px] text-textSecondary bg-backgroundSecondary/80 p-6 rounded border border-borderGrey/50 overflow-x-auto whitespace-pre-wrap leading-relaxed">
          {resumeText}
        </pre>
      </div>
    </div>
  );
}
