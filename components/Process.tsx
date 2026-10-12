"use client";

import { Eye, Film, Sparkles, CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: Eye,
    title: "Understand the Vision",
    description:
      "Every project begins with understanding the story, creative direction, target audience, and intended message.",
  },
  {
    step: "02",
    icon: Film,
    title: "Build the Narrative",
    description:
      "I carefully select and structure footage to establish a compelling visual flow, maintaining rhythm, emotion, and storytelling.",
  },
  {
    step: "03",
    icon: Sparkles,
    title: "Refine Every Frame",
    description:
      "Through professional colour correction, cinematic grading, sound design, and visual enhancements, I bring consistency and depth to the final edit.",
  },
  {
    step: "04",
    icon: CheckCircle2,
    title: "Deliver the Experience",
    description:
      "Every project undergoes careful refinement to ensure a polished, professional final video optimized for its intended platform.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#F4F4F4] border border-[#EAEAEA] mb-5">
            <span className="w-2 h-2 rounded-full bg-[#FF8500]" />
            <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#111111]">
              FROM RAW FOOTAGE TO FINAL FRAME
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
            A Thoughtful Process Behind Every Great Edit.
          </h2>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl bg-[#FAFAFA] hover:bg-white border border-[#EAEAEA] hover:border-[#111111]/30 p-8 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.03)] hover:shadow-cardHover transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number with Orange Accent */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-[#FF8500]">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white border border-[#EAEAEA] flex items-center justify-center text-[#111111] group-hover:bg-[#FF8500] group-hover:text-black group-hover:border-[#FF8500] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#111111] tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#666666] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EAEAEA]/80 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF8500]" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#999999]">
                    Phase {item.step}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
