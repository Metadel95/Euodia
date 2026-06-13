"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import LiquidButton from "@/components/liquid-glass-button";

const LOGO_URL = "https://res.cloudinary.com/dgxqifwdf/image/upload/v1781176122/Artboard_8_4x_ql3h3l.png";
const VIDEO_URL = "https://res.cloudinary.com/dgxqifwdf/video/upload/v1781292143/AQM_xcYBJXwjeIvrLbdMiPKL1pVmzeYsbgPZTR8bfiUOW_YLWxnnEzHQSmy0xac_xkrrlg.mp4";

const LINE1 = "Spreading the Fragrance of Christ";
const LINE2 = "Through Music and Worship";

const sequenceVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

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
        @keyframes heroBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(7px); }
        }
      `}</style>

      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "linear-gradient(160deg, #0e0c0a 0%, #1a1410 50%, #0a0908 100%)"
      }} />

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

      <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "rgba(0,0,0,0.58)" }} />
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)"
      }} />

      <motion.div
        initial={reduceMotion ? "visible" : "hidden"}
        animate="visible"
        variants={sequenceVariants}
        style={{
          position: "relative", zIndex: 10,
          display: "flex", flexDirection: "column", alignItems: "center",
          textAlign: "center",
          padding: "5rem 1.5rem 3rem",
          width: "100%", maxWidth: "52rem",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >

        <motion.img
          variants={fadeUpVariants}
          src={LOGO_URL}
          alt="Euodia logo"
          style={{
            width: "clamp(3.5rem, 10vw, 5rem)",
            height: "clamp(3.5rem, 10vw, 5rem)",
            objectFit: "contain",
            marginBottom: "2rem",
            filter: "drop-shadow(0 4px 24px rgba(199,160,108,0.3))",
          }}
        />

        <motion.span
          variants={fadeUpVariants}
          style={{
            fontFamily: "Inter Variable, Inter, sans-serif",
            fontSize: "0.68rem", letterSpacing: "0.3em",
            textTransform: "uppercase", color: "#DFC099",
            marginBottom: "1.25rem", display: "block",
          }}
        >
          Euodia Songs
        </motion.span>

        <motion.h1
          variants={fadeUpVariants}
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontWeight: 300,
            fontSize: "clamp(1.75rem, 5vw, 4rem)",
            lineHeight: 1.2,
            color: "#ffffff",
            marginBottom: "1.25rem",
            letterSpacing: "-0.01em",
            width: "100%",
          }}
        >
          <span style={{ display: "block" }}>{LINE1}</span>
          <span style={{ display: "block" }}>{LINE2}</span>
        </motion.h1>

        <motion.p
          variants={fadeUpVariants}
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

        <motion.div
          variants={fadeUpVariants}
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

        <motion.button
          variants={fadeUpVariants}
          onClick={() => scrollTo("meaning")}
          aria-label="Scroll down"
          style={{
            marginTop: "2.5rem",
            background: "none", border: "none",
            color: "rgba(255,255,255,0.45)", cursor: "pointer",
            padding: "0.5rem",
            animation: reduceMotion ? "none" : "heroBounce 2s ease-in-out 2s infinite",
          }}
        >
          <ChevronDown size={22} strokeWidth={1.5} />
        </motion.button>
      </motion.div>
    </section>
  );
}