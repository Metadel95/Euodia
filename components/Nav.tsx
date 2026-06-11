"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Our Story", href: "#meaning" },
  { label: "Music", href: "#music" },
  { label: "Community", href: "#cta" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-parchment/95 backdrop-blur-sm border-b border-gold/15"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo mark */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-display text-xl tracking-[0.12em] text-current font-light"
          aria-label="Euodia — go to top"
        >
          <span className={scrolled ? "text-ink" : "text-parchment"}>
            EUODIA
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`nav-link font-sans text-caption tracking-editorial uppercase font-light transition-colors duration-300 ${
                scrolled ? "text-muted hover:text-ink" : "text-parchment/75 hover:text-parchment"
              }`}
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => handleNav("#cta")}
            className={`btn-gold ml-4 px-5 py-2.5 text-caption tracking-editorial uppercase font-sans font-light border transition-all duration-300 ${
              scrolled
                ? "border-gold text-gold hover:bg-gold hover:text-void"
                : "border-parchment/50 text-parchment hover:border-gold hover:text-gold"
            }`}
          >
            Join Us
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-1.5 transition-colors duration-300 ${
            scrolled ? "text-ink" : "text-parchment"
          }`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          ref={menuRef}
          className="menu-open md:hidden bg-parchment border-t border-gold/15"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-6 py-6 flex flex-col gap-6">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left font-sans text-caption tracking-editorial uppercase text-muted hover:text-ink transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#cta")}
              className="btn-gold mt-2 px-5 py-3 text-caption tracking-editorial uppercase font-sans font-light border border-gold text-gold hover:bg-gold hover:text-void transition-all duration-300 text-left"
            >
              Join Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
