"use client";

import { useEffect, useRef } from "react";
import { Instagram, Youtube, Mail } from "lucide-react";
import SectionTitle from "./SectionTitle";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/euodiaworship",
    icon: Instagram,
    description: "Follow our journey on Instagram",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@euodiaworship",
    icon: Youtube,
    description: "Watch worship sessions on YouTube",
  },
  {
    label: "Email",
    href: "mailto:hello@euodia.co",
    icon: Mail,
    description: "Get in touch by email",
  },
];

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRef.current?.querySelectorAll(".reveal, .reveal-child, .line-reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="py-28 md:py-40 bg-void relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <svg viewBox="0 0 800 800" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl">
          <circle cx="400" cy="400" r="380" stroke="#C7A06C" strokeWidth="1" fill="none" />
          <circle cx="400" cy="400" r="300" stroke="#C7A06C" strokeWidth="0.75" fill="none" />
          <circle cx="400" cy="400" r="220" stroke="#C7A06C" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center">

        {/* Eyebrow */}
        <div className="reveal mb-10 flex items-center gap-3">
          <span className="divider-gold opacity-60" aria-hidden="true" />
          <span className="font-sans text-caption tracking-editorial uppercase text-gold/70">
            The Journey
          </span>
          <span className="divider-gold opacity-60" aria-hidden="true" />
        </div>

        {/* Heading */}
        <div className="reveal mb-6">
          <h2
            id="cta-heading"
            className="font-display text-parchment font-light leading-none"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4.8rem)",
              letterSpacing: "-0.025em",
              lineHeight: "1.05",
            }}
          >
            Join Us on{" "}
            <em className="text-gold/85 italic font-light">the Journey</em>
          </h2>
        </div>

        {/* Body */}
        <p
          className="reveal font-sans text-parchment/45 font-light max-w-md mx-auto mb-14"
          style={{ fontSize: "clamp(0.9rem, 1.5vw, 1rem)", lineHeight: "1.8" }}
        >
          Follow Euodia for a journey of worship and devotion, where music and
          faith blend to create a beautiful fragrance of praise.
        </p>

        {/* Social buttons */}
        <div className="reveal-child flex flex-col sm:flex-row items-center gap-4">
          {socials.map(({ label, href, icon: Icon, description }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={description}
              className={`btn-gold group flex items-center gap-2.5 px-7 py-3.5 font-sans text-caption tracking-editorial uppercase font-light transition-all duration-300 ${
                label === "Instagram"
                  ? "bg-gold text-void hover:bg-gold-dark"
                  : "border border-parchment/20 text-parchment/70 hover:border-gold hover:text-gold"
              }`}
            >
              <Icon
                size={13}
                className="transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
              {label}
            </a>
          ))}
        </div>

        {/* Bottom scripture */}
        <div className="reveal mt-20 flex flex-col items-center gap-3">
          <span className="divider-gold opacity-30 mx-auto" aria-hidden="true" />
          <p className="font-display italic text-parchment/25 font-light text-sm">
            2 Corinthians 2:14
          </p>
        </div>
      </div>
    </section>
  );
}
