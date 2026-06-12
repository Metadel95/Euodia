"use client";

import { useEffect, useRef } from "react";

const LOGO_URL = "https://res.cloudinary.com/dgxqifwdf/image/upload/v1781176122/Artboard_8_4x_ql3h3l.png";

export default function Meaning() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>(".reveal");
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="meaning"
      ref={sectionRef}
      style={{ background: "#F8F5EF", padding: "6rem 1.5rem" }}
    >
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1);
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.32s; }
        .meaning-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
          align-items: center;
          max-width: 72rem;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .meaning-grid {
            grid-template-columns: 1fr 1fr;
            gap: 5rem;
          }
        }
        .ornament {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 4rem;
        }
        .ornament::before, .ornament::after {
          content: "";
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(199,160,108,0.5), transparent);
        }
        .scale-line {
          width: 3rem;
          height: 1px;
          background: #C7A06C;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s;
        }
        .scale-line.visible {
          transform: scaleX(1);
        }
      `}</style>

      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        <div className="ornament reveal">
          <span style={{
            fontFamily: "Inter Variable, Inter, sans-serif",
            fontSize: "0.7rem", letterSpacing: "0.3em",
            textTransform: "uppercase", color: "#C7A06C",
            padding: "0 1rem",
          }}>
            Our Symbol
          </span>
        </div>

        <div className="meaning-grid">
          {/* Logo */}
          <div className="reveal" style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", inset: 0,
                background: "#C7A06C",
                borderRadius: "50%",
                filter: "blur(48px)",
                opacity: 0.18,
                transform: "scale(1.4)",
              }} />
              <img
                src={LOGO_URL}
                alt="Euodia Chi-Rho lily logo"
                style={{
                  width: "clamp(14rem, 40vw, 18rem)",
                  height: "clamp(14rem, 40vw, 18rem)",
                  objectFit: "contain",
                  position: "relative", zIndex: 1,
                }}
              />
            </div>
          </div>

          {/* Text */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            <div className="reveal">
              <span style={{
                fontFamily: "Inter Variable, Inter, sans-serif",
                fontSize: "0.7rem", letterSpacing: "0.3em",
                textTransform: "uppercase", color: "#C7A06C",
                display: "block", marginBottom: "1rem",
              }}>
                The Meaning of Euodia
              </span>
              <h2 style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontWeight: 300,
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                lineHeight: 1.2,
                color: "#1A1A1A",
              }}>
                The Lily and{" "}
                <em style={{ fontStyle: "normal", color: "#C7A06C" }}>XP Symbol</em>
              </h2>
            </div>

            <div className="scale-line reveal" />

            <div className="reveal reveal-delay-1" style={{
              display: "flex", flexDirection: "column", gap: "1.1rem",
              fontFamily: "Inter Variable, Inter, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              lineHeight: 1.8,
              color: "#666666",
            }}>
              <p>
                In the center is the{" "}
                <strong style={{ fontWeight: 500, color: "#1A1A1A" }}>Chi-Rho (XP)</strong>,
                one of the earliest Christian symbols representing Christ.
              </p>
              <p>
                Surrounding it is the{" "}
                <strong style={{ fontWeight: 500, color: "#1A1A1A" }}>lily</strong>,
                symbolizing beauty and fragrance — an ancient emblem of purity and the divine presence.
              </p>
              <p>
                The name{" "}
                <strong style={{ fontWeight: 500, color: "#1A1A1A" }}>Euodia</strong>{" "}
                means{" "}
                <em style={{ fontStyle: "italic", color: "#C7A06C" }}>fragrance</em> or{" "}
                <em style={{ fontStyle: "italic", color: "#C7A06C" }}>prosperous journey</em>.
              </p>
              <p>
                Together these elements express our desire to spread the fragrance of Christ
                through worship and music — a living, fragrant offering to the Lord.
              </p>
            </div>
          </div>
        </div>

        <div className="ornament reveal" style={{ marginTop: "4rem", marginBottom: 0 }}>
          <span style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontStyle: "italic",
            fontSize: "0.8rem",
            color: "#888",
            padding: "0 1rem",
          }}>
            εὐωδία — A fragrant aroma
          </span>
        </div>

      </div>
    </section>
  );
}