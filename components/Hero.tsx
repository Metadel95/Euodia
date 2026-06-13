"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import LiquidButton from "@/components/liquid-glass-button";

const LOGO_URL = "https://res.cloudinary.com/dgxqifwdf/image/upload/v1781176122/Artboard_8_4x_ql3h3l.png";
const VIDEO_URL = "https://res.cloudinary.com/dgxqifwdf/video/upload/v1781292143/AQM_xcYBJXwjeIvrLbdMiPKL1pVmzeYsbgPZTR8bfiUOW_YLWxnnEzHQSmy0xac_xkrrlg.mp4";

const LINE1 = "Spreading the Fragrance of Christ";
const LINE2 = "Through Music and Worship";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0  },
};

function BlurredStagger({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.35, delay: delay + i * 0.018 }}
          style={{ display: "inline" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
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
        <motion.img
          src={LOGO_URL}
          alt="Euodia logo"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{
            width: "clamp(3.5rem, 10vw, 5rem)",
            height: "clamp(3.5rem, 10vw, 5rem)",
            objectFit: "contain",
            marginBottom: "2rem",
            filter: "drop-shadow(0 4px 24px rgba(199,160,108,0.3))",
          }}
        />

        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            fontFamily: "Inter Variable, Inter, sans-serif",
            fontSize: "0.68rem", letterSpacing: "0.3em",
            textTransform: "uppercase", color: "#DFC099",
            marginBottom: "1.25rem", display: "block",
          }}
        >
          Euodia Songs
        </motion.span>

        {/* Headline — blurred stagger, split into 2 lines */}
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
            <BlurredStagger text={LINE1} delay={0.45} />
          </span>
          <span style={{ display: "block" }}>
            <BlurredStagger text={LINE2} delay={0.45 + LINE1.length * 0.018 + 0.05} />
          </span>
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.6 }}
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
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.85 }}
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
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("meaning")}
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.8 }}
        style={{
          position: "absolute", bottom: "1.5rem",
          left: "50%", transform: "translateX(-50%)",
          zIndex: 10, background: "none", border: "none",
          color: "rgba(255,255,255,0.45)", cursor: "pointer",
          animation: "bounce 2s ease-in-out infinite",
          padding: "0.5rem",
        }}
      >
        <ChevronDown size={22} strokeWidth={1.5} />
      </motion.button>
    </section>
  );
}