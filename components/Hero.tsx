"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import LiquidButton from "@/components/liquid-glass-button";

const LOGO_URL = "https://res.cloudinary.com/dgxqifwdf/image/upload/v1781176122/Artboard_8_4x_ql3h3l.png";
const VIDEO_URL = "https://res.cloudinary.com/dgxqifwdf/video/upload/v1781292143/AQM_xcYBJXwjeIvrLbdMiPKL1pVmzeYsbgPZTR8bfiUOW_YLWxnnEzHQSmy0xac_xkrrlg.mp4";

const LINE1 = "Spreading the Fragrance of Christ";
const LINE2 = "Through Music and Worship";

const WORD_STAGGER = 0.07;
const WORD_DURATION = 0.8;

// ── Word-by-word reveal: translateY + slight rotateX tilt, pure CSS ──
function StaggerWords({ text, startDelay }: { text: string; startDelay: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            marginRight: "0.28em",
            opacity: 0,
            transform: "translateY(40px) rotateX(-50deg)",
            transformOrigin: "50% 100%",
            animation: `heroWordIn ${WORD_DURATION}s cubic-bezier(0.16,1,0.3,1) forwards`,
            animationDelay: `${startDelay + i * WORD_STAGGER}s`,
          }}
        >
          {word}
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.load();
    video.play().catch(() => {});
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Timing — derived from word counts so longer lines don't overlap subsequent elements
  const line1Words = LINE1.split(" ").length;
  const line2Words = LINE2.split(" ").length;
  const line1Start = 0.45;
  const line2Start = 0.7;
  const headlineEnd =
    Math.max(
      line1Start + (line1Words - 1) * WORD_STAGGER,
      line2Start + (line2Words - 1) * WORD_STAGGER
    ) + WORD_DURATION;

  const d = {
    logo: 0.15,
    eyebrow: 0.3,
    sub: headlineEnd,
    buttons: headlineEnd + 0.2,
    scroll: headlineEnd + 0.5,
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes heroWordIn {
          from { opacity: 0; transform: translateY(40px) rotateX(-50deg); }
          to   { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }
        @keyframes heroBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(7px); }
        }
      `}</style>

      {/* Dark base */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "linear-gradient(160deg, #0e0c0a 0%, #1a1410 50%, #0a0908 100%)"
      }} />

      {/* Video */}
      <video
        ref={videoRef}
        autoPlay loop muted playsInline preload="auto"
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, zIndex: 1,
          width: "100%", height: "100%", objectFit: "cover",
        }}
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Overlays */}
      <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "rgba(0,0,0,0.58)" }} />
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)"
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 10,
        display: "flex", flexDirection: "column", alignItems: "center",
        textAlign: "center",
        padding: "5rem 1.5rem 3rem",
        width: "100%", maxWidth: "52rem",
        margin: "0 auto",
        boxSizing: "border-box",
      }}>

        {/* Logo */}
        <img
          src={LOGO_URL}
          alt="Euodia logo"
          style={{
            width: "clamp(3.5rem, 10vw, 5rem)",
            height: "clamp(3.5rem, 10vw, 5rem)",
            objectFit: "contain",
            marginBottom: "2rem",
            filter: "drop-shadow(0 4px 24px rgba(199,160,108,0.3))",
            opacity: 0,
            animation: `heroFadeUp 0.9s ease forwards ${d.logo}s`,
          }}
        />

        {/* Eyebrow */}
        <span style={{
          fontFamily: "Inter Variable, Inter, sans-serif",
          fontSize: "0.68rem", letterSpacing: "0.3em",
          textTransform: "uppercase", color: "#DFC099",
          marginBottom: "1.25rem", display: "block",
          opacity: 0,
          animation: `heroFadeIn 0.8s ease forwards ${d.eyebrow}s`,
        }}>
          Euodia Songs
        </span>

        {/* Headline */}
        <h1 style={{
          fontFamily: "Cormorant Garamond, Georgia, serif",
          fontWeight: 300,
          fontSize: "clamp(1.75rem, 5vw, 4rem)",
          lineHeight: 1.2,
          color: "#ffffff",
          marginBottom: "1.25rem",
          letterSpacing: "-0.01em",
          width: "100%",
          perspective: "600px",
        }}>
          <span style={{ display: "block" }}>
            <StaggerWords text={LINE1} startDelay={line1Start} />
          </span>
          <span style={{ display: "block" }}>
            <StaggerWords text={LINE2} startDelay={line2Start} />
          </span>
        </h1>

        {/* Subheading */}
        <p style={{
          fontFamily: "Inter Variable, Inter, sans-serif",
          fontWeight: 300,
          fontSize: "clamp(0.88rem, 2.2vw, 1.05rem)",
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.7)",
          maxWidth: "34rem",
          marginBottom: "2.25rem",
          opacity: 0,
          animation: `heroFadeUp 0.9s ease forwards ${d.sub}s`,
        }}>
          Euodia is a worship collective devoted to sharing the beauty of Christ
          through music, community, and worship.
        </p>

        {/* Buttons */}
        <div style={{
          display: "flex", flexDirection: "column",
          gap: "0.75rem", width: "100%", maxWidth: "20rem",
          opacity: 0,
          animation: `heroFadeUp 0.8s ease forwards ${d.buttons}s`,
        }}>
          <LiquidButton onClick={() => scrollTo("journey")}>
            Join the Journey
          </LiquidButton>
          <LiquidButton onClick={() => scrollTo("meaning")}>
            Learn Our Story
          </LiquidButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("meaning")}
        aria-label="Scroll down"
        style={{
          position: "absolute", bottom: "1.5rem",
          left: "50%",
          zIndex: 10, background: "none", border: "none",
          color: "rgba(255,255,255,0.45)", cursor: "pointer",
          padding: "0.5rem",
          opacity: 0,
          animation: `heroFadeIn 0.8s ease forwards ${d.scroll}s,
                      heroBounce 2s ease-in-out ${d.scroll}s infinite`,
          transform: "translateX(-50%)",
        }}
      >
        <ChevronDown size={22} strokeWidth={1.5} />
      </button>
    </section>
  );
}