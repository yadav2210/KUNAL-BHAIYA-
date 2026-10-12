interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  supporting?: string;
  alignment?: "left" | "center";
}

export default function SectionHeading({
  number,
  title,
  subtitle,
  supporting,
  alignment = "left",
}: SectionHeadingProps) {
  const isCenter = alignment === "center";

  return (
    <div className={`mb-16 md:mb-24 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-4xl"}`}>
      {/* Section indicator */}
      <div className={`flex items-center space-x-3 mb-4 ${isCenter ? "justify-center" : ""}`}>
        <span className="font-mono text-xs text-accentGold tracking-widest font-semibold">
          {number}
        </span>
        <span className="w-8 h-[1px] bg-accentGold/60" />
        <span className="text-[11px] uppercase tracking-[0.25em] text-textSecondary font-mono">
          {subtitle || "SECTION"}
        </span>
      </div>

      {/* Main Title */}
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-textPrimary leading-[1.08] mb-6">
        {title}
      </h2>

      {/* Supporting Text */}
      {supporting && (
        <p className="font-editorial text-lg md:text-xl text-textSecondary leading-relaxed italic max-w-2xl font-normal">
          {supporting}
        </p>
      )}
    </div>
  );
}
