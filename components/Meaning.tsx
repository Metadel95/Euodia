"use client";

import { useEffect, useRef } from "react";

const LOGO_URL = "https://res.cloudinary.com/dgxqifwdf/image/upload/v1781195838/Artboard_5_4x_cszeny.png";

export default function Meaning() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>(".reveal");
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
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
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        <div className="ornament reveal">
          <span style={{
            fontFamily: "Inter Variable, Inter, sans-serif",
            fontSize: "0.7rem", letterSpacing: "0.3em",
            textTransform: "uppercase", color: "#000000",
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
                background: "#000000",
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
                textTransform: "uppercase", color: "#000000",
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
                <em style={{ fontStyle: "normal", color: "#000000" }}>XP Symbol</em>
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
                <em style={{ fontStyle: "italic", color: "#000000" }}>fragrance</em> or{" "}
                <em style={{ fontStyle: "italic", color: "#000000" }}>prosperous journey</em>.
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