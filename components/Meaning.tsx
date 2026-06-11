"use client";

import { useEffect, useRef } from "react";
import SectionTitle from "./SectionTitle";

const symbolMeaning = [
  {
    symbol: "☧",
    label: "Chi-Rho",
    body:
      "In the center is the Chi-Rho (XP), one of the earliest Christian symbols representing Christ — used by the early church as a mark of devotion and identity.",
  },
  {
    symbol: "⚜",
    label: "The Lily",
    body:
      "Surrounding it is the lily, symbolizing beauty and fragrance — a flower long associated with purity, the resurrection, and the sweet aroma of a life given to God.",
  },
  {
    symbol: "∿",
    label: "The Name",
    body:
      "Euodia means fragrance, or prosperous journey. Together these elements express our desire to spread the fragrance of Christ through worship and music.",
  },
];

export default function Meaning() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    if (sectionRef.current) {
      // Observe section-level reveals
      sectionRef.current.querySelectorAll(".reveal, .reveal-child, .line-reveal").forEach((el) => {
        observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="meaning"
      ref={sectionRef}
      className="py-24 md:py-36 bg-parchment"
      aria-labelledby="meaning-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top divider */}
        <div className="mb-16 md:mb-24">
          <hr className="line-reveal border-0 h-px bg-gold/25" />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT — Logo/mark */}
          <div className="reveal flex flex-col items-center lg:items-start">
            <div className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center">
              {/* Outer decorative rings */}
              <svg
                viewBox="0 0 200 200"
                fill="none"
                className="absolute inset-0 w-full h-full"
                aria-hidden="true"
              >
                <circle cx="100" cy="100" r="96" stroke="#C7A06C" strokeWidth="0.75" opacity="0.3" />
                <circle cx="100" cy="100" r="80" stroke="#C7A06C" strokeWidth="0.5" opacity="0.2" />
                <circle cx="100" cy="100" r="64" stroke="#C7A06C" strokeWidth="0.5" opacity="0.15" />

                {/* Petal marks at compass points */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x1 = 100 + 64 * Math.sin(rad);
                  const y1 = 100 - 64 * Math.cos(rad);
                  const x2 = 100 + 80 * Math.sin(rad);
                  const y2 = 100 - 80 * Math.cos(rad);
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#C7A06C"
                      strokeWidth="0.75"
                      opacity="0.35"
                    />
                  );
                })}
              </svg>

              {/* Chi-Rho center */}
              <div className="relative z-10 flex flex-col items-center gap-1">
                <span
                  className="font-display text-gold"
                  style={{ fontSize: "clamp(4rem, 8vw, 6rem)", lineHeight: 1 }}
                  aria-label="Chi-Rho symbol"
                >
                  ☧
                </span>
                <span className="font-sans text-caption tracking-editorial uppercase text-gold/60 text-[10px]">
                  Euodia
                </span>
              </div>
            </div>

            {/* Caption below mark */}
            <p className="mt-6 font-sans text-caption tracking-editorial uppercase text-gold/50 text-[10px] text-center lg:text-left">
              The Fragrance of Christ
            </p>
          </div>

          {/* RIGHT — Text */}
          <div className="flex flex-col gap-10">
            <div className="reveal">
              <SectionTitle
                eyebrow="Our Symbol"
                heading="The Lily and XP Symbol"
                id="meaning-heading"
              />
            </div>

            {/* Symbol explanations */}
            <div className="reveal-child flex flex-col gap-8">
              {symbolMeaning.map((item) => (
                <div key={item.label} className="flex gap-5 items-start">
                  <div className="shrink-0 w-9 h-9 flex items-center justify-center border border-gold/30 mt-0.5">
                    <span className="font-display text-gold text-lg" aria-hidden="true">
                      {item.symbol}
                    </span>
                  </div>
                  <div>
                    <p className="font-sans text-caption tracking-editorial uppercase text-gold/70 mb-1.5 text-[11px]">
                      {item.label}
                    </p>
                    <p
                      className="font-sans text-muted font-light leading-relaxed"
                      style={{ fontSize: "clamp(0.875rem, 1.4vw, 0.9375rem)" }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <div className="reveal mt-2 pl-6 border-l border-gold/30">
              <blockquote
                className="font-display italic text-ink/70 font-light"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.7rem)", lineHeight: "1.4" }}
              >
                "For we are to God the pleasing aroma of Christ among those who are being saved."
              </blockquote>
              <cite className="block mt-3 font-sans text-caption tracking-editorial uppercase text-gold/60 not-italic text-[10px]">
                2 Corinthians 2:15
              </cite>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-20 md:mt-28">
          <hr className="line-reveal border-0 h-px bg-gold/25" />
        </div>
      </div>
    </section>
  );
}
