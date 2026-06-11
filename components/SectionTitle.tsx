interface SectionTitleProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionTitle({
  eyebrow,
  heading,
  subheading,
  align = "left",
  light = false,
}: SectionTitleProps) {
  const center = align === "center";

  return (
    <div className={`flex flex-col gap-4 ${center ? "items-center text-center" : "items-start"}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
          <span
            className={`divider-gold ${center ? "" : ""}`}
            aria-hidden="true"
          />
          <span
            className={`font-sans text-caption tracking-editorial uppercase ${
              light ? "text-gold/70" : "text-gold"
            }`}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`font-display font-light leading-none ${
          light ? "text-parchment" : "text-ink"
        }`}
        style={{
          fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
          letterSpacing: "-0.02em",
          lineHeight: "1.05",
        }}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={`font-sans font-light max-w-lg ${
            light ? "text-parchment/55" : "text-muted"
          }`}
          style={{ fontSize: "clamp(0.9rem, 1.5vw, 1rem)", lineHeight: "1.75" }}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
