"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Our Story",   href: "#meaning" },
  { label: "The Symbol",  href: "#meaning" },
  { label: "Join Us",     href: "#journey" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        transition: "background 0.4s ease, border-color 0.4s ease",
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(199,160,108,0.15)" : "1px solid transparent",
      }}
    >
      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "0 40px",
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(248,245,239,0.9)",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          aria-label="Euodia — back to top"
        >
          Euodia
        </button>

        {/* Desktop links */}
        <nav
          style={{ display: "flex", gap: 40, alignItems: "center" }}
          className="hidden-mobile"
          aria-label="Main navigation"
        >
          {links.map((l) => (
            <button key={l.href} onClick={() => go(l.href)} className="nav-link">
              {l.label}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="show-mobile"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(248,245,239,0.5)",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          aria-label={open ? "Close menu" : "Menu"}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          background: "rgba(10,10,10,0.97)",
          borderTop: "1px solid rgba(199,160,108,0.12)",
          padding: "32px 40px 40px",
        }}>
          {links.map((l, i) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(2rem, 8vw, 3.5rem)",
                color: i === 0 ? "var(--gold)" : "rgba(248,245,239,0.5)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 0",
                lineHeight: 1.1,
                transition: "color 0.2s",
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
