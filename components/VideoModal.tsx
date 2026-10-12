"use client";

import { useEffect, useRef, useState } from "react";
import { X, Play, Pause, Volume2, VolumeX, Maximize2, ExternalLink, Sparkles } from "lucide-react";
import { Project } from "../data/projects";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function VideoModal({ isOpen, onClose, project }: VideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [useIframe, setUseIframe] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md transition-all duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div
        ref={containerRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-[#111111] text-white rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[92vh]"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161616]">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF8500] animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-[#999999] font-mono">
              {project.category} &bull; {project.client}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-200 hover:rotate-90"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Section */}
        <div className="relative bg-black flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[460px] max-h-[62vh]">
          {project.embedUrl ? (
            <div className="relative w-full h-full aspect-video min-h-[300px] md:min-h-[480px]">
              <iframe
                src={project.embedUrl}
                title={project.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              <video
                ref={videoRef}
                src={project.videoUrl}
                poster={project.thumbnail}
                className="w-full max-h-[58vh] object-contain"
                autoPlay
                playsInline
                loop
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Custom Video Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 hover:text-[#FF8500] transition-colors"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-1.5 hover:text-[#FF8500] transition-colors"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                  <span className="text-xs font-mono text-white/80">{project.title}</span>
                </div>

                <button
                  onClick={toggleFullscreen}
                  className="p-1.5 hover:text-[#FF8500] transition-colors"
                  aria-label="Toggle Fullscreen"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Project Meta Information Footer */}
        <div className="p-6 md:p-8 bg-[#111111] overflow-y-auto space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                {project.badge && (
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FF8500]/20 text-[#FF8500] border border-[#FF8500]/30 uppercase tracking-wider">
                    {project.badge}
                  </span>
                )}
                {project.views && (
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-white/80">
                    {project.views}
                  </span>
                )}
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                {project.title}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              {project.videoUrl && (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-[#FF8500] hover:text-black text-white text-xs font-bold uppercase tracking-wider transition-all duration-300"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="md:col-span-2 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#999999]">Overview</h4>
              <p className="text-white/80 leading-relaxed font-sans">
                {project.description}
              </p>
            </div>

            <div className="space-y-4 bg-white/5 p-4 rounded-2xl border border-white/10">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#999999] block mb-0.5">
                  Role
                </span>
                <span className="text-white font-medium">{project.role}</span>
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#999999] block mb-0.5">
                  Client
                </span>
                <span className="text-white font-medium">{project.client}</span>
              </div>
              {project.deliverables && project.deliverables.length > 0 && (
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#999999] block mb-1">
                    Deliverables
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-white/10 text-white/90"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
