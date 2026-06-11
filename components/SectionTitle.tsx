import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
  inView?: boolean;
}

export default function SectionTitle({
  eyebrow,
  heading,
  subheading,
  align = "center",
  light = false,
  className,
  inView = true,
}: SectionTitleProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  return (
    <div
      className={cn(
        "flex flex-col gap-4 transition-all duration-700",
        alignClass,
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "font-sans text-xs tracking-widest uppercase",
            light ? "text-accent-light" : "text-accent"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-serif font-light leading-tight",
          "text-4xl md:text-5xl lg:text-6xl",
          light ? "text-white" : "text-foreground"
        )}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={cn(
            "font-sans font-light text-base md:text-lg max-w-2xl leading-relaxed",
            light ? "text-white/70" : "text-muted"
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}