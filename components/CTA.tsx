"use client";

import { useEffect, useRef } from "react";

const socials = [
  { label: "Instagram", href: "https://instagram.com/euodiaworship" },
  { label: "YouTube",   href: "https://youtube.com/@euodiaworship" },
  { label: "Email",     href: "mailto:hello@euodia.co" },
];

export default function CTA() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal, .line-grow").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="cta"
      ref={ref}
      style={{ background: "var(--void)", padding: "120px 0" }}
      aria-labelledby="cta-heading"
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        {/* Label row */}
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
            02 — Community
          </span>
        </div>

        {/* Giant heading */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ overflow: "hidden" }}>
            <h2
              id="cta-heading"
              className="reveal"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "clamp(3.5rem, 10vw, 10rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                color: "var(--parchment)",
              }}
            >
              Join Us
            </h2>
          </div>
          <div style={{ overflow: "hidden" }}>
            <h2
              className="reveal d1"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "clamp(3.5rem, 10vw, 10rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                color: "var(--gold)",
              }}
            >
              on the Journey
            </h2>
          </div>
        </div>

        {/* Body + actions */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px 100px",
          alignItems: "end",
        }}
          className="cta-grid"
        >
          <p className="reveal d2" style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 300,
            fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
            lineHeight: 1.8,
            color: "rgba(248,245,239,0.45)",
            maxWidth: 440,
          }}>
            Follow Euodia for a journey of worship and devotion — where music
            and faith blend to create a beautiful fragrance of praise. We'd love
            to have you with us.
          </p>

          <div className="reveal d3" style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
            {socials.map((s, i) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: i === 0 ? "var(--void)" : "rgba(248,245,239,0.6)",
                  background: i === 0 ? "var(--gold)" : "none",
                  border: i === 0 ? "none" : "1px solid rgba(199,160,108,0.3)",
                  padding: "11px 28px",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (i !== 0) {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                    (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                  } else {
                    (e.currentTarget as HTMLElement).style.background = "#b8904e";
                  }
                }}
                onMouseLeave={(e) => {
                  if (i !== 0) {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(199,160,108,0.3)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(248,245,239,0.6)";
                  } else {
                    (e.currentTarget as HTMLElement).style.background = "var(--gold)";
                  }
                }}
              >
                {s.label}
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom rule */}
        <div
          className="line-grow"
          style={{ height: 1, background: "var(--hairline)", marginTop: 100 }}
          aria-hidden="true"
        />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
