"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import LiquidButton from "@/components/liquid-glass-button";

const LOGO_URL = "https://res.cloudinary.com/dgxqifwdf/image/upload/v1781176122/Artboard_8_4x_ql3h3l.png";
const VIDEO_URL = "https://res.cloudinary.com/dgxqifwdf/video/upload/v1781292143/AQM_xcYBJXwjeIvrLbdMiPKL1pVmzeYsbgPZTR8bfiUOW_YLWxnnEzHQSmy0xac_xkrrlg.mp4";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
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
        <img
          src={LOGO_URL}
          alt="Euodia logo"
          style={{ width: "5rem", height: "5rem", objectFit: "contain", marginBottom: "2.5rem", filter: "drop-shadow(0 4px 24px rgba(199,160,108,0.3))" }}
        />

        <span style={{
          fontFamily: "Inter Variable, Inter, sans-serif",
          fontSize: "0.7rem", letterSpacing: "0.3em",
          textTransform: "uppercase", color: "#DFC099",
          marginBottom: "1.25rem", display: "block",
        }}>
          Euodia Songs
        </span>

        <h1 style={{
          fontFamily: "Cormorant Garamond, Georgia, serif",
          fontWeight: 300,
          fontSize: "clamp(2rem, 6vw, 4.5rem)",
          lineHeight: 1.15,
          color: "#ffffff",
          marginBottom: "1.5rem",
          letterSpacing: "-0.01em",
        }}>
          Spreading the Fragrance of{" "}
          <em style={{ fontStyle: "normal", color: "#DFC099" }}>Christ</em>
          {" "}Through Music and Worship
        </h1>

        <p style={{
          fontFamily: "Inter Variable, Inter, sans-serif",
          fontWeight: 300,
          fontSize: "clamp(0.95rem, 2.5vw, 1.125rem)",
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.7)",
          maxWidth: "38rem",
          marginBottom: "2.5rem",
        }}>
          Euodia is a worship collective devoted to sharing the beauty of Christ
          through music, community, and worship.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", width: "100%", maxWidth: "22rem" }}>
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
          position: "absolute", bottom: "2rem",
          left: "50%", transform: "translateX(-50%)",
          zIndex: 10, background: "none", border: "none",
          color: "rgba(255,255,255,0.45)", cursor: "pointer",
          animation: "bounce 2s ease-in-out infinite",
        }}
      >
        <ChevronDown size={24} strokeWidth={1.5} />
      </button>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(7px); }
        }
      `}</style>
    </section>
  );
}