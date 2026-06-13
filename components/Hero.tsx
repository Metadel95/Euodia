"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import LiquidButton from "@/components/liquid-glass-button";

const LOGO_URL = "https://res.cloudinary.com/dgxqifwdf/image/upload/v1781176122/Artboard_8_4x_ql3h3l.png";
const VIDEO_URL = "https://res.cloudinary.com/dgxqifwdf/video/upload/v1781292143/AQM_xcYBJXwjeIvrLbdMiPKL1pVmzeYsbgPZTR8bfiUOW_YLWxnnEzHQSmy0xac_xkrrlg.mp4";

const HEADLINE = "Spreading the Fragrance of Christ Through Music and Worship";

// ── Letter blur-sharpen variants (Framer Motion enhancement) ──
// Opacity is intentionally NOT animated here — the CSS "heroFadeUp"
// animation on the parent <h1> already handles visibility/entrance.
// If Framer Motion fails to mount, letters simply stay at opacity 1,
// filter: blur(0) — i.e. plain, fully visible text. No invisible state.
const letterContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.018, delayChildren: 0.05 },
  },
};

const letterAnimation = {
  hidden: { filter: "blur(8px)" },
  show: { filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } },
};

function BlurredStagger({ text }: { text: string }) {
  return (
    <motion.span
      variants={letterContainer}
      initial="hidden"
      animate="show"
      style={{ display: "inline" }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letterAnimation}
          style={{ display: "inline" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
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
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes heroBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(7px); }
        }
        .hero-fade-up {
          opacity: 0;
          animation: heroFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .hero-fade-in {
          opacity: 0;
          animation: heroFadeIn 0.9s ease forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-fade-up, .hero-fade-in {
            animation: none;
            opacity: 1;
          }
          .hero-scroll-btn {
            animation: none !important;
          }
        }
      `}</style>

      {/* Always-visible dark base */}
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
        padding: "2rem 1.5rem",
        width: "100%", maxWidth: "56rem",
        margin: "0 auto",
      }}>

        {/* Logo — CSS fade up, no JS dependency */}
        <img
          src={LOGO_URL}
          alt="Euodia logo"
          className="hero-fade-up"
          style={{
            width: "5rem", height: "5rem", objectFit: "contain",
            marginBottom: "2.5rem",
            filter: "drop-shadow(0 4px 24px rgba(199,160,108,0.3))",
            animationDelay: "0.1s",
          }}
        />

        {/* Eyebrow — CSS fade up */}
        <span
          className="hero-fade-up"
          style={{
            fontFamily: "Inter Variable, Inter, sans-serif",
            fontSize: "0.7rem", letterSpacing: "0.3em",
            textTransform: "uppercase", color: "#DFC099",
            marginBottom: "1.25rem", display: "block",
            animationDelay: "0.25s",
          }}
        >
          Euodia Songs
        </span>

        {/* Headline — CSS fade up (guaranteed) + Framer letter blur-sharpen (enhancement) */}
        <h1
          className="hero-fade-up"
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontWeight: 300,
            fontSize: "clamp(2rem, 6vw, 4.5rem)",
            lineHeight: 1.15,
            color: "#ffffff",
            letterSpacing: "-0.01em",
            margin: "0 0 1.5rem",
            animationDelay: "0.4s",
          }}
        >
          <BlurredStagger text={HEADLINE} />
        </h1>

        {/* Subheading — CSS fade up, after headline */}
        <p
          className="hero-fade-up"
          style={{
            fontFamily: "Inter Variable, Inter, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(0.95rem, 2.5vw, 1.125rem)",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.7)",
            maxWidth: "38rem",
            marginBottom: "2.5rem",
            animationDelay: "1.2s",
          }}
        >
          Euodia is a worship collective devoted to sharing the beauty of Christ
          through music, community, and worship.
        </p>

        {/* Buttons — CSS fade up */}
        <div
          className="hero-fade-up"
          style={{
            display: "flex", flexDirection: "column", gap: "0.75rem",
            width: "100%", maxWidth: "22rem",
            animationDelay: "1.45s",
          }}
        >
          <LiquidButton onClick={() => scrollTo("journey")}>
            Join the Journey
          </LiquidButton>
          <LiquidButton onClick={() => scrollTo("meaning")}>
            Learn Our Story
          </LiquidButton>
        </div>
      </div>

      {/* Scroll indicator — CSS fade in + bounce */}
      <button
        onClick={() => scrollTo("meaning")}
        aria-label="Scroll down"
        className="hero-fade-in hero-scroll-btn"
        style={{
          position: "absolute", bottom: "1.5rem",
          left: "50%", transform: "translateX(-50%)",
          zIndex: 10, background: "none", border: "none",
          color: "rgba(255,255,255,0.45)", cursor: "pointer",
          padding: "0.5rem",
          animation: "heroFadeIn 0.9s ease 1.8s forwards, heroBounce 2s ease-in-out 1.8s infinite",
        }}
      >
        <ChevronDown size={22} strokeWidth={1.5} />
      </button>
    </section>
  );
}