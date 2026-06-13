"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import LiquidButton from "@/components/liquid-glass-button";

const LOGO_URL = "https://res.cloudinary.com/dgxqifwdf/image/upload/v1781176122/Artboard_8_4x_ql3h3l.png";
const VIDEO_URL = "https://res.cloudinary.com/dgxqifwdf/video/upload/v1781292143/AQM_xcYBJXwjeIvrLbdMiPKL1pVmzeYsbgPZTR8bfiUOW_YLWxnnEzHQSmy0xac_xkrrlg.mp4";

const LINE1 = "Spreading the Fragrance of Christ";
const LINE2 = "Through Music and Worship";

function BlurredStagger({ text, startDelay }: { text: string; startDelay: number }) {
  return (
    <>
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline",
            opacity: 0,
            filter: "blur(10px)",
            animation: `blurIn 0.35s ease forwards`,
            animationDelay: `${startDelay + i * 0.018}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
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
        @keyframes blurIn {
          from { opacity: 0; filter: blur(10px); }
          to   { opacity: 1; filter: blur(0px);  }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes heroBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(7px); }
        }
        .hero-logo    { opacity: 0; animation: fadeUp  0.8s ease forwards; animation-delay: 0.15s; }
        .hero-eyebrow { opacity: 0; animation: fadeIn  0.7s ease forwards; animation-delay: 0.35s; }
        .hero-sub     { opacity: 0; animation: fadeUp  0.8s ease forwards; animation-delay: 1.7s;  }
        .hero-buttons { opacity: 0; animation: fadeUp  0.7s ease forwards; animation-delay: 1.95s; }
        .hero-scroll  { opacity: 0; animation: fadeIn  0.8s ease forwards; animation-delay: 2.2s;  }
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
          className="hero-logo"
          style={{
            width: "clamp(3.5rem, 10vw, 5rem)",
            height: "clamp(3.5rem, 10vw, 5rem)",
            objectFit: "contain",
            marginBottom: "2rem",
            filter: "drop-shadow(0 4px 24px rgba(199,160,108,0.3))",
          }}
        />

        {/* Eyebrow */}
        <span
          className="hero-eyebrow"
          style={{
            fontFamily: "Inter Variable, Inter, sans-serif",
            fontSize: "0.68rem", letterSpacing: "0.3em",
            textTransform: "uppercase", color: "#DFC099",
            marginBottom: "1.25rem", display: "block",
          }}
        >
          Euodia Songs
        </span>

        {/* Headline — pure CSS blurred stagger */}
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
          <span style={{ display: "block" }}>
            <BlurredStagger text={LINE1} startDelay={0.5} />
          </span>
          <span style={{ display: "block" }}>
            <BlurredStagger text={LINE2} startDelay={0.5 + LINE1.length * 0.018 + 0.05} />
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="hero-sub"
          style={{
            fontFamily: "Inter Variable, Inter, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(0.88rem, 2.2vw, 1.05rem)",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.7)",
            maxWidth: "34rem",
            marginBottom: "2.25rem",
          }}
        >
          Euodia is a worship collective devoted to sharing the beauty of Christ
          through music, community, and worship.
        </p>

        {/* Buttons */}
        <div
          className="hero-buttons"
          style={{
            display: "flex", flexDirection: "column",
            gap: "0.75rem", width: "100%", maxWidth: "20rem",
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

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("meaning")}
        aria-label="Scroll down"
        className="hero-scroll"
        style={{
          position: "absolute", bottom: "1.5rem",
          left: "50%",
          zIndex: 10, background: "none", border: "none",
          color: "rgba(255,255,255,0.45)", cursor: "pointer",
          padding: "0.5rem",
          animation: "heroBounce 2s ease-in-out infinite, fadeIn 0.8s ease forwards 2.2s",
          transform: "translateX(-50%)",
        }}
      >
        <ChevronDown size={22} strokeWidth={1.5} />
      </button>
    </section>
  );
}