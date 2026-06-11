"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const LOGO_URL = "https://res.cloudinary.com/dgxqifwdf/image/upload/v1781176122/Artboard_8_4x_ql3h3l.png";
const VIDEO_URL = "https://res.cloudinary.com/dgxqifwdf/video/upload/v1781176987/AQM_xcYBJXwjeIvrLbdMiPKL1pVmzeYsbgPZTR8bfiUOW_YLWxnnEzHQSmy0xac_xkrrlg.mp4";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  const scrollToMeaning = () => {
    document.getElementById("meaning")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToJourney = () => {
    document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background: always-visible dark gradient underneath */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900" />

      {/* Video — fades in on top once loaded */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlay={() => setVideoLoaded(true)}
          onLoadedData={() => setVideoLoaded(true)}
          aria-hidden="true"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay — always visible */}
      <div className="absolute inset-0 z-[1] bg-black/55" />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Content — NO whileInView, only animate (triggers on mount) */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto w-full">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mb-10"
        >
          <img
            src={LOGO_URL}
            alt="Euodia logo"
            className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-lg"
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-xs tracking-widest uppercase text-accent-light mb-5 block"
        >
          A Worship Collective
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
          className="font-serif font-light text-white leading-tight mb-6"
          style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
        >
          Spreading the Fragrance of{" "}
          <em className="not-italic text-accent-light">Christ</em> Through Music
          and Worship
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
          className="font-sans font-light text-white/75 text-base md:text-lg leading-relaxed max-w-2xl mb-10"
        >
          Euodia is a worship collective devoted to sharing the beauty of Christ
          through music, community, and worship.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.95 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <button
            onClick={scrollToJourney}
            className="px-8 py-3.5 bg-accent text-white font-sans text-sm tracking-wider uppercase hover:bg-accent-dark transition-colors duration-300 min-w-[180px]"
          >
            Join the Journey
          </button>
          <button
            onClick={scrollToMeaning}
            className="px-8 py-3.5 border border-white/40 text-white font-sans text-sm tracking-wider uppercase hover:border-white/80 hover:bg-white/5 transition-all duration-300 min-w-[180px]"
          >
            Learn Our Story
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToMeaning}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white/80 transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={24} strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  );
}