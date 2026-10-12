"use client";

import { useState } from "react";
import rawProjects from "../data/projects.json";

interface ProjectLink {
  id: string;
  title: string;
  category: string;
  tag: string;
  videoUrl: string;
  platform: string;
  aspectRatio: string;
}

const projects = rawProjects as ProjectLink[];

export default function AllLinksHub() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyUrl = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const directLinks = [
    {
      label: "Official YouTube Channel",
      handle: "@ksnamli",
      url: "https://youtube.com/@ksnamli?si=Xhzz7JyeufiHqJYS",
      type: "Channel Hub",
      badge: "Primary Channel",
      icon: "▶",
    },
    {
      label: "Direct Email Communication",
      handle: "ksnamli3698@gmail.com",
      url: "mailto:ksnamli3698@gmail.com",
      type: "Email",
      badge: "Fast Response",
      icon: "✉",
    },
    {
      label: "Direct Telephone & WhatsApp",
      handle: "+91 8602424055",
      url: "https://wa.me/918602424055",
      type: "Instant Messaging / Call",
      badge: "Direct Contact",
      icon: "✆",
    },
    {
      label: "Google Drive Video Showcase",
      handle: "Private / Showcase Reel",
      url: "https://drive.google.com/file/d/1jJkQvGZM3F49zvwI1YqvR-CWGqLXGrKx/view?usp=drivesdk",
      type: "Drive Video",
      badge: "Cloud Master",
      icon: "☁",
    },
  ];

  return (
    <div id="links" className="w-full space-y-12">
      {/* Introduction text */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-borderGrey/60 pb-6">
        <div>
          <span className="font-mono text-xs text-accentGold tracking-[0.25em] uppercase">
            06 / VERIFIED REPOSITORY
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-textPrimary mt-1">
            ALL PORTFOLIO &amp; CREATIVE LINKS
          </h3>
        </div>
        <p className="font-editorial text-textSecondary text-sm sm:text-base italic max-w-md mt-2 md:mt-0">
          Direct, verified access points to Kunal&apos;s creative output, social channels, and media files.
        </p>
      </div>

      {/* Primary Channel & Contact Hub Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {directLinks.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="OPEN LINK"
            className="p-5 rounded border border-borderGrey/70 bg-surface/40 hover:border-accentGold/80 hover:bg-surface/70 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono">
                <span className="text-accentGold font-bold">{item.type}</span>
                <span className="text-[10px] text-textSecondary px-2 py-0.5 rounded bg-backgroundSecondary border border-borderGrey/60">
                  {item.badge}
                </span>
              </div>
              <h4 className="font-display font-bold text-textPrimary group-hover:text-accentGold transition-colors text-sm mb-1">
                {item.label}
              </h4>
              <p className="font-mono text-xs text-textSecondary truncate">{item.handle}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-borderGrey/50 flex items-center justify-between text-xs font-mono text-accentGold">
              <span>OPEN RESOURCE</span>
              <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                ↗
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Verified Individual Project Links Table */}
      <div className="rounded-lg border border-borderGrey/80 bg-surface/30 overflow-hidden">
        <div className="p-4 bg-backgroundSecondary/80 border-b border-borderGrey/70 flex items-center justify-between">
          <span className="font-mono text-xs text-accentGold tracking-wider font-bold">
            INDIVIDUAL VIDEO REFERENCES &amp; SOURCE URLS
          </span>
          <span className="text-[11px] font-mono text-textSecondary">
            {projects.length} Verified Entries
          </span>
        </div>

        <div className="divide-y divide-borderGrey/50">
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-surface/60 transition-colors"
            >
              <div className="flex items-start sm:items-center space-x-4">
                <span className="font-mono text-xs text-accentGold font-bold px-2 py-1 bg-backgroundPrimary border border-borderGrey rounded">
                  0{idx + 1}
                </span>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-display font-bold text-textPrimary text-sm sm:text-base">
                      {proj.title}
                    </h4>
                    <span className="px-2 py-0.5 text-[9px] font-mono tracking-wider text-accentGold bg-accentGold/10 border border-accentGold/30 rounded">
                      {proj.aspectRatio}
                    </span>
                  </div>
                  <p className="text-xs text-textSecondary font-mono mt-0.5">
                    {proj.platform} &bull; {proj.category}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 self-end sm:self-center">
                <button
                  type="button"
                  onClick={() => copyUrl(proj.id, proj.videoUrl)}
                  className="px-3 py-1.5 text-xs font-mono text-textSecondary hover:text-accentGold border border-borderGrey/70 rounded transition-colors"
                >
                  {copiedId === proj.id ? "COPIED! ✓" : "COPY LINK"}
                </button>
                <a
                  href={proj.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 text-xs font-mono font-bold bg-accentGold text-backgroundPrimary hover:bg-[#D8B778] rounded transition-colors flex items-center space-x-1"
                >
                  <span>WATCH ON {proj.platform.toUpperCase().split(" ")[0]}</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
