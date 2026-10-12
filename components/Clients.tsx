"use client";

import { BRAND_CLIENTS } from "../data/projects";

export default function Clients() {
  return (
    <section id="clients" className="py-16 md:py-20 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#888888] font-mono">
            Brands I&apos;ve Worked With
          </p>
        </div>

        {/* Minimal Brand Logos Display (Responsive Grid & Marquee) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6 items-center">
          {BRAND_CLIENTS.map((brand, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center p-4 rounded-2xl border border-[#EAEAEA] bg-[#FAFAFA] hover:bg-white hover:border-[#111111]/30 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.03)] hover:shadow-md cursor-default text-center h-24"
            >
              <span className="font-extrabold text-xs sm:text-sm tracking-wider text-[#777777] group-hover:text-[#111111] group-hover:scale-105 transition-all duration-300 font-sans">
                {brand.logoText}
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#AAAAAA] group-hover:text-[#FF8500] transition-colors mt-1 font-mono">
                {brand.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
