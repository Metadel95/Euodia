export default function Marquee() {
  const items = [
    "Worship",
    "☧",
    "Fragrance of Christ",
    "✦",
    "Music",
    "☧",
    "Community",
    "✦",
    "Devotion",
    "☧",
    "2 Corinthians 2:15",
    "✦",
    "Euodia",
    "☧",
  ];

  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        background: "var(--void)",
        borderTop: "1px solid var(--hairline)",
        borderBottom: "1px solid var(--hairline)",
        padding: "18px 0",
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      <div className="marquee-track" style={{ display: "flex", gap: 48, alignItems: "center" }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: item === "☧" || item === "✦" ? "var(--font-display)" : "var(--font-mono)",
              fontSize: item === "☧" ? 16 : item === "✦" ? 10 : 9,
              letterSpacing: item === "☧" ? 0 : "0.22em",
              textTransform: "uppercase",
              color: item === "☧" ? "var(--gold)" : item === "✦" ? "rgba(199,160,108,0.4)" : "rgba(248,245,239,0.2)",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
