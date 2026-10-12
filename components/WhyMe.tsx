"use client";

import { Compass, Sparkles, Target, Award } from "lucide-react";

const PRINCIPLES = [
  {
    icon: Compass,
    title: "Story First",
    description: "Every editing decision should strengthen the narrative.",
  },
  {
    icon: Sparkles,
    title: "Visual Excellence",
    description: "Every frame deserves careful attention to colour, composition, and consistency.",
  },
  {
    icon: Target,
    title: "Creative Precision",
    description: "From transitions to sound design, every detail matters.",
  },
  {
    icon: Award,
    title: "Professional Delivery",
    description: "A commitment to quality, communication, and project requirements.",
  },
];

export default function WhyMe() {
  return (
    <section id="why-me" className="py-20 md:py-28 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#F4F4F4] border border-[#EAEAEA] mb-5">
            <span className="w-2 h-2 rounded-full bg-[#FF8500]" />
            <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#111111]">
              MY APPROACH
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight mb-6">
            Creativity With Purpose. <br className="hidden sm:inline" />
            Precision in Every Detail.
          </h2>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto">
            I believe great video editing is more than assembling footage. It&apos;s about understanding the story, capturing emotions, and creating an experience that resonates with viewers.
          </p>

          <p className="text-sm sm:text-base text-[#888888] leading-relaxed max-w-xl mx-auto mt-2">
            I approach every project with a balance of creativity, technical expertise, and attention to detail.
          </p>
        </div>

        {/* 4 Core Principles Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PRINCIPLES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group rounded-3xl bg-[#FAFAFA] hover:bg-white border border-[#EAEAEA] hover:border-[#111111]/30 p-8 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.03)] hover:shadow-cardHover transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#EAEAEA] flex items-center justify-center text-[#111111] group-hover:bg-[#FF8500] group-hover:text-black group-hover:border-[#FF8500] transition-colors mb-6 shadow-sm">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#111111] tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#666666] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EAEAEA]/80 flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF8500]" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#999999]">
                    Core Value 0{idx + 1}
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
