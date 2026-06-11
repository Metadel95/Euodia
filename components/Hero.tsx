"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: "100svh",
        minHeight: 600,
        overflow: "hidden",
        background: "var(--void)",
        display: "flex",
        flexDirection: "column",
      }}
      aria-label="Hero"
    >
      {/* ── Video ── */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: ready ? 1 : 0,
          transition: "opacity 1.8s ease",
        }}
      >
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4"  type="video/mp4" />
      </video>

      {/* ── Overlay ── */}
      <div className="video-overlay" style={{ position: "absolute", inset: 0 }} aria-hidden="true" />

      {/* ── Top hairline ── */}
      <div style={{
        position: "absolute",
        top: 60,
        left: 40, right: 40,
        height: 1,
        background: "rgba(199,160,108,0.15)",
      }} aria-hidden="true" />

      {/* ── Content ── */}
      <div style={{
        position: "relative",
        zIndex: 10,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 40px 60px",
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        alignSelf: "center",
      }}>

        {/* Eyebrow */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 28,
          opacity: ready ? 1 : 0,
          transform: ready ? "none" : "translateY(12px)",
          transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
        }}>
          <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} aria-hidden="true" />
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(199,160,108,0.8)",
          }}>
            Worship Collective · Est. 2024
          </span>
        </div>

        {/* ── MASSIVE headline — the juanmora signature ── */}
        <div
          aria-label="Spreading the Fragrance of Christ Through Music and Worship"
          style={{ overflow: "hidden" }}
        >
          {/* Line 1 */}
          <div style={{ overflow: "hidden", marginBottom: "-0.04em" }}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "clamp(4rem, 11vw, 10.5rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.025em",
                color: "var(--parchment)",
                opacity: ready ? 1 : 0,
                transform: ready ? "translateY(0)" : "translateY(100%)",
                transition: "opacity 1s cubic-bezier(0.16,1,0.3,1) 0.35s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.35s",
                display: "block",
              }}
            >
              Spreading the
            </h1>
          </div>

          {/* Line 2 — gold */}
          <div style={{ overflow: "hidden", marginBottom: "-0.04em" }}>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "clamp(4rem, 11vw, 10.5rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.025em",
                color: "var(--gold)",
                opacity: ready ? 1 : 0,
                transform: ready ? "translateY(0)" : "translateY(100%)",
                transition: "opacity 1s cubic-bezier(0.16,1,0.3,1) 0.5s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.5s",
              }}
            >
              Fragrance
            </span>
          </div>

          {/* Line 3 */}
          <div style={{ overflow: "hidden" }}>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "clamp(3rem, 8.5vw, 8rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
                color: "rgba(248,245,239,0.45)",
                opacity: ready ? 1 : 0,
                transform: ready ? "translateY(0)" : "translateY(100%)",
                transition: "opacity 1s cubic-bezier(0.16,1,0.3,1) 0.65s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.65s",
              }}
            >
              of Christ
            </span>
          </div>
        </div>

        {/* ── Bottom row: subtext + buttons ── */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 24,
          marginTop: 48,
          paddingTop: 28,
          borderTop: "1px solid rgba(199,160,108,0.15)",
          opacity: ready ? 1 : 0,
          transform: ready ? "none" : "translateY(16px)",
          transition: "opacity 0.9s ease 0.9s, transform 0.9s ease 0.9s",
        }}>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 300,
            fontSize: "clamp(0.85rem, 1.4vw, 0.95rem)",
            lineHeight: 1.7,
            color: "rgba(248,245,239,0.45)",
            maxWidth: 380,
          }}>
            A worship collective devoted to sharing the beauty of Christ through
            music, community, and worship.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
              aria-label="Join the journey"
            >
              Join the Journey
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className="btn btn-outline"
              onClick={() => document.getElementById("meaning")?.scrollIntoView({ behavior: "smooth" })}
              aria-label="Learn our story"
            >
              Our Story
            </button>
          </div>
        </div>
      </div>

      {/* ── Bottom gradient into page ── */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0, right: 0,
        height: 120,
        background: "linear-gradient(to bottom, transparent, var(--void))",
      }} aria-hidden="true" />

      {/* ── Scroll hint ── */}
      <div style={{
        position: "absolute",
        bottom: 32,
        right: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        opacity: ready ? 0.4 : 0,
        transition: "opacity 0.8s ease 1.5s",
      }} aria-hidden="true">
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: 9,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--parchment)",
          writingMode: "vertical-rl",
        }}>
          scroll
        </span>
        <div style={{
          width: 1,
          height: 48,
          background: "linear-gradient(to bottom, var(--gold), transparent)",
        }} />
      </div>
    </section>
  );
}
