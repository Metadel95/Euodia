import { cn } from "@/lib/utils";

interface EuodiaLogoProps {
  className?: string;
  light?: boolean;
  showWordmark?: boolean;
}

export default function EuodiaLogo({
  className,
  light = false,
  showWordmark = false,
}: EuodiaLogoProps) {
  const goldColor = "#C7A06C";
  const textColor = light ? "#FFFFFF" : "#1A1A1A";

  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      {/* The mark: Chi-Rho (XP) surrounded by lily petals */}
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        role="img"
        aria-label="Euodia logo — Chi-Rho symbol surrounded by lily"
      >
        {/* Outer ring */}
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke={goldColor}
          strokeWidth="0.8"
          opacity="0.6"
        />

        {/* Lily petals — 6 petals radiating outward */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 50 + 30 * Math.cos(rad);
          const cy = 50 + 30 * Math.sin(rad);
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx="8"
              ry="14"
              fill={goldColor}
              opacity="0.25"
              transform={`rotate(${angle + 90}, ${cx}, ${cy})`}
            />
          );
        })}

        {/* Inner circle behind symbol */}
        <circle cx="50" cy="50" r="20" fill={goldColor} opacity="0.12" />
        <circle
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke={goldColor}
          strokeWidth="0.6"
          opacity="0.5"
        />

        {/* Chi — X stroke */}
        <line
          x1="39"
          y1="39"
          x2="61"
          y2="61"
          stroke={goldColor}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <line
          x1="61"
          y1="39"
          x2="39"
          y2="61"
          stroke={goldColor}
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Rho — vertical stroke + loop at top */}
        <line
          x1="50"
          y1="35"
          x2="50"
          y2="65"
          stroke={goldColor}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M50 35 Q60 35 60 43 Q60 51 50 51"
          fill="none"
          stroke={goldColor}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>

      {showWordmark && (
        <span
          className="font-serif tracking-widest uppercase text-sm font-light"
          style={{ color: textColor }}
        >
          Euodia
        </span>
      )}
    </div>
  );
}
