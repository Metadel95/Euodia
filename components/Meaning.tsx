"use client";

import { useEffect, useRef } from "react";

export default function Meaning() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );
    ref.current?.querySelectorAll(".reveal, .reveal-left, .line-grow").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="meaning"
      ref={ref}
      style={{ background: "var(--void)", padding: "120px 0" }}
      aria-labelledby="meaning-heading"
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        {/* ── Top rule ── */}
        <div
          className="line-grow"
          style={{ height: 1, background: "var(--hairline)", marginBottom: 80 }}
          aria-hidden="true"
        />

        {/* ── Section label row ── */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 80,
          flexWrap: "wrap",
          gap: 16,
        }}>
          <span className="reveal" style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(199,160,108,0.6)",
          }}>
            01 — Our Identity
          </span>
          <span className="reveal d2" style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(248,245,239,0.2)",
          }}>
            2 Cor. 2:14–15
          </span>
        </div>

        {/* ── Two-column ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px 100px",
          alignItems: "start",
        }}
          className="meaning-grid"
        >
          {/* LEFT — giant section heading + symbol */}
          <div>
            {/* Heading */}
            <div style={{ overflow: "hidden", marginBottom: 8 }}>
              <h2
                id="meaning-heading"
                className="reveal"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: "clamp(3rem, 6vw, 6rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.025em",
                  color: "var(--parchment)",
                }}
              >
                The Lily
              </h2>
            </div>
            <div style={{ overflow: "hidden", marginBottom: 48 }}>
              <h2
                className="reveal d1"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  fontSize: "clamp(3rem, 6vw, 6rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.025em",
                  color: "var(--gold)",
                }}
              >
                & XP Symbol
              </h2>
            </div>

            {/* SVG Chi-Rho mark */}
            <div
              className="reveal d2"
              style={{
                width: "100%",
                maxWidth: 320,
                aspectRatio: "1",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                viewBox="0 0 300 300"
                fill="none"
                aria-label="Chi-Rho with lily symbol — the Euodia emblem"
                style={{ width: "100%", height: "100%" }}
              >
                {/* Outer rings */}
                {[140, 118, 98, 80].map((r, i) => (
                  <circle
                    key={r}
                    cx="150" cy="150" r={r}
                    stroke="#C7A06C"
                    strokeWidth={i === 0 ? 0.5 : 0.4}
                    opacity={[0.18, 0.12, 0.1, 0.08][i]}
                  />
                ))}
                {/* Radial tick marks */}
                {Array.from({ length: 24 }, (_, i) => {
                  const a = (i * 15 * Math.PI) / 180;
                  const r1 = 80, r2 = i % 6 === 0 ? 100 : 86;
                  return (
                    <line
                      key={i}
                      x1={150 + r1 * Math.sin(a)}
                      y1={150 - r1 * Math.cos(a)}
                      x2={150 + r2 * Math.sin(a)}
                      y2={150 - r2 * Math.cos(a)}
                      stroke="#C7A06C"
                      strokeWidth={i % 6 === 0 ? 0.7 : 0.4}
                      opacity={i % 6 === 0 ? 0.35 : 0.15}
                    />
                  );
                })}
                {/* Chi-Rho center glyph */}
                <text
                  x="150" y="165"
                  textAnchor="middle"
                  fontSize="72"
                  fontFamily="Georgia, serif"
                  fill="#C7A06C"
                  opacity="0.9"
                  aria-hidden="true"
                >
                  ☧
                </text>
                {/* Wordmark below glyph */}
                <text
                  x="150" y="210"
                  textAnchor="middle"
                  fontSize="10"
                  fontFamily="'DM Mono', monospace"
                  fill="#C7A06C"
                  opacity="0.4"
                  letterSpacing="6"
                  aria-hidden="true"
                >
                  EUODIA
                </text>
              </svg>
            </div>
          </div>

          {/* RIGHT — body text */}
          <div style={{ paddingTop: 8 }}>

            {/* Body paragraphs */}
            {[
              {
                label: "Chi-Rho",
                body: "In the center is the Chi-Rho (XP), one of the earliest Christian symbols representing Christ — used by the early church as a mark of devotion and identity in a world that often opposed it.",
              },
              {
                label: "The Lily",
                body: "Surrounding it is the lily, symbolizing beauty and fragrance — a flower long associated with purity, the resurrection, and the sweet aroma of a life poured out before God.",
              },
              {
                label: "The Name",
                body: "Euodia means fragrance, or prosperous journey. Together these elements express our desire to spread the fragrance of Christ through worship and music — everywhere we go.",
              },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`reveal d${i + 1}`}
                style={{
                  marginBottom: 40,
                  paddingBottom: 40,
                  borderBottom: i < 2 ? "1px solid var(--hairline)" : "none",
                }}
              >
                <span style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  opacity: 0.7,
                  marginBottom: 10,
                }}>
                  {`0${i + 1} — ${item.label}`}
                </span>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: "clamp(0.9rem, 1.4vw, 1rem)",
                  lineHeight: 1.8,
                  color: "rgba(248,245,239,0.5)",
                }}>
                  {item.body}
                </p>
              </div>
            ))}

            {/* Pull quote */}
            <div
              className="reveal d4"
              style={{
                borderLeft: "2px solid var(--gold)",
                paddingLeft: 24,
                marginTop: 8,
              }}
            >
              <blockquote style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)",
                lineHeight: 1.4,
                color: "rgba(248,245,239,0.7)",
                marginBottom: 12,
              }}>
                "For we are to God the pleasing aroma of Christ among those who are being saved."
              </blockquote>
              <cite style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(199,160,108,0.5)",
                fontStyle: "normal",
              }}>
                2 Corinthians 2:15
              </cite>
            </div>
          </div>
        </div>

        {/* ── Bottom rule ── */}
        <div
          className="line-grow"
          style={{ height: 1, background: "var(--hairline)", marginTop: 100 }}
          aria-hidden="true"
        />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .meaning-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
      `}</style>
    </section>
  );
}
