"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollDown = () => {
    const el = document.getElementById("meaning");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] overflow-hidden bg-void flex flex-col"
      aria-label="Hero section"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        {/* 
          Replace these src paths with your actual video files.
          Place your video in /public/videos/hero.mp4
          and /public/videos/hero.webm for best cross-browser support.
        */}
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center">

        {/* Logo wordmark */}
        <div
          className={`mb-12 md:mb-16 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          {/* Chi-Rho + Lily SVG mark */}
          <div className="flex flex-col items-center gap-3">
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              aria-hidden="true"
              className="mb-2"
            >
              {/* Outer lily petals (simplified) */}
              <circle cx="26" cy="26" r="24" stroke="#C7A06C" strokeWidth="0.75" opacity="0.5" />
              <circle cx="26" cy="26" r="18" stroke="#C7A06C" strokeWidth="0.5" opacity="0.3" />
              {/* Chi-Rho (XP) */}
              <text
                x="50%"
                y="54%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="24"
                fontFamily="Georgia, serif"
                fill="#C7A06C"
                opacity="0.95"
              >
                ☧
              </text>
            </svg>
            <span
              className="font-display text-parchment/95 tracking-[0.35em] text-sm font-light uppercase"
            >
              Euodia
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1
          className={`font-display text-parchment font-light leading-none tracking-tight max-w-3xl mx-auto mb-6 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            fontSize: "clamp(2.4rem, 6vw, 5.5rem)",
            lineHeight: "1.05",
            transitionDelay: "0.3s",
          }}
        >
          Spreading the Fragrance
          <em className="block text-gold/90 font-light italic">
            of Christ
          </em>
          Through Music and Worship
        </h1>

        {/* Subheadline */}
        <p
          className={`font-sans text-parchment/60 font-light max-w-xl mx-auto mb-12 md:mb-16 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)",
            lineHeight: "1.75",
            transitionDelay: "0.55s",
          }}
        >
          Euodia is a worship collective devoted to sharing the beauty of Christ
          through music, community, and worship.
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.75s" }}
        >
          <button
            onClick={() => {
              const el = document.getElementById("cta");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-gold px-8 py-3.5 bg-gold text-void font-sans text-caption tracking-editorial uppercase font-light hover:bg-gold-dark transition-colors duration-300"
            aria-label="Join the journey"
          >
            Join the Journey
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("meaning");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 border border-parchment/40 text-parchment font-sans text-caption tracking-editorial uppercase font-light hover:border-gold hover:text-gold transition-all duration-300"
            aria-label="Learn our story"
          >
            Learn Our Story
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1.2s" }}
      >
        <button
          onClick={scrollDown}
          className="flex flex-col items-center gap-2 text-parchment/40 hover:text-gold transition-colors duration-300"
          aria-label="Scroll down"
        >
          <span className="font-sans text-caption tracking-editorial uppercase text-[10px]">
            Scroll
          </span>
          <ChevronDown size={14} className="animate-bounce" />
        </button>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-parchment to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
