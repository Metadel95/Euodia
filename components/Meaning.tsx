"use client";

import { useEffect, useRef, useState } from "react";

const SYMBOL_URL = "https://res.cloudinary.com/dgxqifwdf/image/upload/v1781195838/Artboard_5_4x_cszeny.png";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Meaning() {
  const { ref, inView } = useInView();

  return (
    <section
      id="meaning"
      className="bg-background py-24 md:py-36 px-6"
      aria-labelledby="meaning-heading"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className={`ornament-line mb-20 transition-opacity duration-700 ${inView ? "opacity-100" : "opacity-0"}`}>
          <span className="font-sans text-xs tracking-widest text-accent uppercase px-4">
            Our Symbol
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: Logo */}
          <div className={`flex justify-center transition-all duration-700 delay-100 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-20"
                style={{ background: "#3d3d3d", transform: "scale(1.4)" }}
                aria-hidden="true"
              />
              <img
                src={SYMBOL_URL}
                alt="Euodia logo — Chi-Rho symbol surrounded by lily"
                className="w-56 h-56 md:w-72 md:h-72 object-contain relative z-10"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex flex-col gap-8">
            <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <span className="font-sans text-xs tracking-widest text-accent uppercase block mb-4">
                The Meaning of Euodia
              </span>
              <h2
                id="meaning-heading"
                className="font-serif font-light text-4xl md:text-5xl text-foreground leading-tight"
              >
                The Lily and{" "}
                <em className="not-italic text-accent">XP Symbol</em>
              </h2>
            </div>

            <div className={`w-12 h-px bg-accent transition-all duration-500 delay-300 ${inView ? "scale-x-100" : "scale-x-0"}`} style={{ transformOrigin: "left" }} />

            <div className={`flex flex-col gap-6 text-muted font-sans font-light text-base leading-relaxed transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <p>
                In the center is the{" "}
                <strong className="font-medium text-foreground">Chi-Rho (XP)</strong>
                , one of the earliest Christian symbols representing Christ.
              </p>
              <p>
                Surrounding it is the{" "}
                <strong className="font-medium text-foreground">lily</strong>,
                symbolizing beauty and fragrance — an ancient emblem of purity
                and the divine presence.
              </p>
              <p>
                The name{" "}
                <strong className="font-medium text-foreground">Euodia</strong>{" "}
                means{" "}
                <em className="italic text-accent">fragrance</em> or{" "}
                <em className="italic text-accent">prosperous journey</em>.
              </p>
              <p>
                Together these elements express our desire to spread the
                fragrance of Christ through worship and music — a living,
                fragrant offering to the Lord.
              </p>
            </div>
          </div>
        </div>

        <div className={`ornament-line mt-20 transition-opacity duration-700 delay-200 ${inView ? "opacity-100" : "opacity-0"}`}>
          <span className="font-serif italic text-xs text-muted px-4">
            εὐωδία — A fragrant aroma
          </span>
        </div>
      </div>
    </section>
  );
}