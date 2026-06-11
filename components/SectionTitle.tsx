"use client";

import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  heading,
  subheading,
  align = "center",
  light = false,
  className,
}: SectionTitleProps) {
  const textAlign = align === "left" ? "left" : align === "right" ? "right" : "center";

  return (
    <div
      className={cn(className)}
      style={{ textAlign, display: "flex", flexDirection: "column", gap: "1rem", alignItems: align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start" }}
    >
      {eyebrow && (
        <span style={{
          fontFamily: "Inter Variable, Inter, sans-serif",
          fontSize: "0.7rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: light ? "#DFC099" : "#C7A06C",
        }}>
          {eyebrow}
        </span>
      )}
      <h2 style={{
        fontFamily: "Cormorant Garamond, Georgia, serif",
        fontWeight: 300,
        fontSize: "clamp(2.2rem, 6vw, 4rem)",
        lineHeight: 1.15,
        color: light ? "#ffffff" : "#1A1A1A",
      }}>
        {heading}
      </h2>
      {subheading && (
        <p style={{
          fontFamily: "Inter Variable, Inter, sans-serif",
          fontWeight: 300,
          fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)",
          lineHeight: 1.8,
          color: light ? "rgba(255,255,255,0.65)" : "#666666",
          maxWidth: "38rem",
        }}>
          {subheading}
        </p>
      )}
    </div>
  );
}