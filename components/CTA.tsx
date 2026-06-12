"use client";

import { useEffect, useRef } from "react";
import { Instagram, Youtube, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/utils";

const socialLinks = [
  { label: "Instagram", href: SOCIAL_LINKS.instagram, icon: Instagram },
  { label: "YouTube",   href: SOCIAL_LINKS.youtube,   icon: Youtube   },
  { label: "Email",     href: SOCIAL_LINKS.email,      icon: Mail      },
];

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>(".reveal");
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="journey"
      ref={sectionRef}
      style={{ background: "#111111", padding: "6rem 1.5rem" }}
    >
      <style>{`
        .cta-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1);
        }
        .cta-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .cta-delay-1 { transition-delay: 0.12s; }
        .cta-delay-2 { transition-delay: 0.24s; }
        .cta-delay-3 { transition-delay: 0.36s; }
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.9rem 1.75rem;
          border: 1px solid rgba(255,255,255,0.18);
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          font-family: Inter Variable, Inter, sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          transition: border-color 0.25s ease, color 0.25s ease;
          flex: 1;
          min-width: 0;
        }
        .social-link:hover {
          border-color: #C7A06C;
          color: #C7A06C;
        }
        .social-links-row {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          width: 100%;
          max-width: 20rem;
          margin: 3rem auto 0;
        }
        @media (min-width: 480px) {
          .social-links-row {
            flex-direction: row;
            max-width: 36rem;
          }
        }
        .cta-ornament {
          display: flex;
          align-items: center;
          gap: 1rem;
          max-width: 32rem;
          margin: 0 auto 4rem;
        }
        .cta-ornament::before, .cta-ornament::after {
          content: "";
          flex: 1;
          height: 1px;
          background: rgba(199,160,108,0.25);
        }
      `}</style>

      <div style={{ maxWidth: "48rem", margin: "0 auto", textAlign: "center" }}>

        <div className="cta-ornament reveal cta-reveal">
          <span style={{
            fontFamily: "Inter Variable, Inter, sans-serif",
            fontSize: "0.68rem", letterSpacing: "0.3em",
            textTransform: "uppercase", color: "#ffffff",
            whiteSpace: "nowrap",
          }}>
            Come and See
          </span>
        </div>

        <div className="reveal cta-reveal">
          <span style={{
            fontFamily: "Inter Variable, Inter, sans-serif",
            fontSize: "0.7rem", letterSpacing: "0.3em",
            textTransform: "uppercase", color: "#ffffff",
            display: "block", marginBottom: "1rem",
          }}>
            Worship with Us
          </span>
          <h2 style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontWeight: 300,
            fontSize: "clamp(2.2rem, 6vw, 4rem)",
            lineHeight: 1.15,
            color: "#ffffff",
            marginBottom: "1.25rem",
          }}>
            Join Us on the Journey
          </h2>
          <p style={{
            fontFamily: "Inter Variable, Inter, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)",
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.65)",
            maxWidth: "36rem",
            margin: "0 auto",
          }}>
            Follow Euodia for a journey of worship and devotion, where music and
            faith blend to create a beautiful fragrance of praise.
          </p>
        </div>

        {/* Social links */}
        <div className="social-links-row reveal cta-reveal cta-delay-2">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="social-link"
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
            >
              <Icon size={15} strokeWidth={1.5} />
              {label}
            </a>
          ))}
        </div>

        {/* Scripture */}
        <blockquote
          className="reveal cta-reveal cta-delay-3"
          style={{
            marginTop: "3.5rem",
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "rgba(255,255,255,0.25)",
            lineHeight: 1.7,
          }}
        >
          "For we are to God the pleasing aroma of Christ among those who are being saved."
          <footer style={{
            fontStyle: "normal",
            fontFamily: "Inter Variable, Inter, sans-serif",
            fontSize: "0.68rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.18)",
            marginTop: "0.6rem",
            display: "block",
          }}>
            2 Corinthians 2:15
          </footer>
        </blockquote>

      </div>
    </section>
  );
}