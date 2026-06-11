"use client";

import { useRef, useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const LOGO_URL = "https://res.cloudinary.com/dgxqifwdf/image/upload/v1781176122/Artboard_8_4x_ql3h3l.png";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const fallbackTimer = setTimeout(() => setVideoLoaded(true), 3000);

    const handleCanPlay = () => {
      clearTimeout(fallbackTimer);
      setVideoLoaded(true);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.play().catch(() => {});

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      clearTimeout(fallbackTimer);
    };
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
      {/* Video background */}
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
          onError={() => setVideoLoaded(true)}
          aria-hidden="true"
        >
          <source
            src="https://res.cloudinary.com/dgxqifwdf/video/upload/q_auto,f_auto/v1781176987/AQM_xcYBJXwjeIvrLbdMiPKL1pVmzeYsbgPZTR8bfiUOW_YLWxnnEzHQSmy0xac_xkrrlg.mp4"
            type="video/mp4"
          />
        </video>
        {/* Fallback gradient shown until video is ready */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 transition-opacity duration-1000 ${
            videoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)",
          }}
        />
      </div>

      {/* Content — uses CSS animations so it works without JS hydration */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto w-full hero-content">
        <div className="mb-12 hero-item" style={{ animationDelay: "0.2s" }}>
          <img
            src={LOGO_URL}
            alt="Euodia logo"
            className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-lg"
          />
        </div>

        <span
          className="font-sans text-xs tracking-widest uppercase text-accent-light mb-6 block hero-item"
          style={{ animationDelay: "0.4s" }}
        >
          Euodia songs and worship
        </span>

        <h1
          className="font-serif font-light text-white leading-tight mb-6 hero-item"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
            animationDelay: "0.55s",
          }}
        >
          Spreading the Fragrance of{" "}
          <em className="not-italic text-accent-light">Christ</em> Through Music
          and Worship
        </h1>

        <p
          className="font-sans font-light text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mb-12 hero-item"
          style={{ animationDelay: "0.75s" }}
        >
          Euodia is a worship collective devoted to sharing the beauty of Christ
          through music, community, and worship.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 items-center hero-item"
          style={{ animationDelay: "0.9s" }}
        >
          <button
            onClick={scrollToJourney}
            className="group relative px-8 py-3.5 bg-accent text-white font-sans text-sm tracking-wider uppercase hover:bg-accent-dark transition-colors duration-300 min-w-[180px]"
            aria-label="Join the Journey — scroll to join section"
          >
            Join the Journey
          </button>
          <button
            onClick={scrollToMeaning}
            className="px-8 py-3.5 border border-white/40 text-white font-sans text-sm tracking-wider uppercase hover:border-white/80 hover:bg-white/5 transition-all duration-300 min-w-[180px]"
            aria-label="Learn Our Story — scroll to about section"
          >
            Learn Our Story
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToMeaning}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white/80 transition-colors duration-300 hero-item"
        style={{ animationDelay: "1.5s" }}
        aria-label="Scroll down"
      >
        <div className="animate-bounce">
          <ChevronDown size={24} strokeWidth={1.5} />
        </div>
      </button>
    </section>
  );
}