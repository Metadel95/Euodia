"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import LiquidButton from "@/components/liquid-glass-button";

const LOGO_URL = "https://res.cloudinary.com/dgxqifwdf/image/upload/v1781176122/Artboard_8_4x_ql3h3l.png";
const VIDEO_URL = "https://res.cloudinary.com/dgxqifwdf/video/upload/v1781292143/AQM_xcYBJXwjeIvrLbdMiPKL1pVmzeYsbgPZTR8bfiUOW_YLWxnnEzHQSmy0xac_xkrrlg.mp4";

const LINE1 = "Spreading the Fragrance of Christ";
const LINE2 = "Through Music and Worship";

// Detect if device can run complex JS animations smoothly
function useCanAnimate() {
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasGoodHardware = navigator.hardwareConcurrency ? navigator.hardwareConcurrency >= 4 : false;

    // Use rich animations on desktop, or powerful mobile devices
    const ok = !prefersReduced && (!isMobile || hasGoodHardware);
    setCanAnimate(ok);
  }, []);

  return canAnimate;
}

// ── Rich version: Framer Motion blurred stagger ──
function BlurredStaggerRich({ text, startDelay }: { text: string; startDelay: number }) {
  // Dynamically import so it doesn't load on mobile at all
  const [Motion, setMotion] = useState<any>(null);

  useEffect(() => {
    import("framer-motion").then((m) => setMotion(m));
  }, []);

  if (!Motion) return <span style={{ opacity: 0 }}>{text}</span>;

  return (
    <>
      {text.split("").map((char, i) => (
        <Motion.motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.4, ease: "easeOut", delay: startDelay + i * 0.018 }}
          style={{ display: "inline" }}
        >
          {char === " " ? "\u00A0" : char}
        </Motion.motion.span>
      ))}
    </>
  );
}

// ── Simple version: pure CSS fade, works everywhere ──
function BlurredStaggerSimple({ text, startDelay }: { text: string; startDelay: number }) {
  return (
    <span
      style={{
        opacity: 0,
        display: "inline",
        animation: `heroFadeUp 0.8s ease forwards`,
        animationDelay: `${startDelay}s`,
      }}
    >
      {text}
    </span>
  );
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canAnimate = useCanAnimate();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Small delay so canAnimate is resolved before first render
    const t = setTimeout(() => setReady(true), 50);
    return () => clearTimeout(t);
  }, []);

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

  const headlineDuration = 0.5 + (LINE1.length + LINE2.length) * 0.018 + 0.4;

  // Simple animation delays (CSS)
  const d = {
    logo:    0.15,
    eyebrow: 0.3,
    line1:   0.45,
    line2:   0.7,
    sub:     1.1,
    buttons: 1.3,
    scroll:  1.5,
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

      {/* Content — only render after canAnimate is resolved */}
      {ready && (
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
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}>
            {canAnimate ? (
              // Desktop: beautiful blurred stagger per letter
              <>
                <span style={{ display: "block" }}>
                  <BlurredStaggerRich text={LINE1} startDelay={0.45} />
                </span>
                <span style={{ display: "block" }}>
                  <BlurredStaggerRich text={LINE2} startDelay={0.45 + LINE1.length * 0.018 + 0.05} />
                </span>
              </>
            ) : (
              // Mobile: smooth CSS fade per line
              <>
                <span style={{ display: "block" }}>
                  <BlurredStaggerSimple text={LINE1} startDelay={d.line1} />
                </span>
                <span style={{ display: "block" }}>
                  <BlurredStaggerSimple text={LINE2} startDelay={d.line2} />
                </span>
              </>
            )}
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
            animation: `heroFadeUp 0.9s ease forwards ${canAnimate ? headlineDuration : d.sub}s`,
          }}>
            Euodia is a worship collective devoted to sharing the beauty of Christ
            through music, community, and worship.
          </p>

          {/* Buttons */}
          <div style={{
            display: "flex", flexDirection: "column",
            gap: "0.75rem", width: "100%", maxWidth: "20rem",
            opacity: 0,
            animation: `heroFadeUp 0.8s ease forwards ${canAnimate ? headlineDuration + 0.2 : d.buttons}s`,
          }}>
            <LiquidButton onClick={() => scrollTo("journey")}>
              Join the Journey
            </LiquidButton>
            <LiquidButton onClick={() => scrollTo("meaning")}>
              Learn Our Story
            </LiquidButton>
          </div>
        </div>
      )}

      {/* Scroll indicator */}
      {ready && (
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
            animation: `heroFadeIn 0.8s ease forwards ${canAnimate ? headlineDuration + 0.5 : d.scroll}s,
                        heroBounce 2s ease-in-out ${canAnimate ? headlineDuration + 0.5 : d.scroll}s infinite`,
            transform: "translateX(-50%)",
          }}
        >
          <ChevronDown size={22} strokeWidth={1.5} />
        </button>
      )}
    </section>
  );
}