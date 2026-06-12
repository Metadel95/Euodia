"use client";

import { Instagram, Youtube, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/utils";

const LOGO_URL = "https://res.cloudinary.com/dgxqifwdf/image/upload/v1781176122/Artboard_8_4x_ql3h3l.png";

const socialLinks = [
  { label: "Instagram", href: SOCIAL_LINKS.instagram, icon: Instagram },
  { label: "YouTube",   href: SOCIAL_LINKS.youtube,   icon: Youtube   },
  { label: "Email",     href: SOCIAL_LINKS.email,      icon: Mail      },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: "#F8F5EF",
      borderTop: "1px solid rgba(26,26,26,0.08)",
      padding: "3rem 1.5rem",
    }}>
      <div style={{
        maxWidth: "72rem", margin: "0 auto",
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: "1.5rem",
      }}>
        <img
          src={LOGO_URL}
          alt="Euodia"
          style={{ width: "2.5rem", height: "2.5rem", objectFit: "contain" }}
        />

        <nav aria-label="Social links" style={{ display: "flex", gap: "1.5rem" }}>
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              style={{ color: "#888", transition: "color 0.2s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C7A06C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
            >
              <Icon size={17} strokeWidth={1.5} />
            </a>
          ))}
        </nav>

        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          gap: "0.25rem", textAlign: "center",
        }}>
          <p style={{
            fontFamily: "Inter Variable, Inter, sans-serif",
            fontSize: "0.75rem", color: "#888",
          }}>
            &copy; {year} Euodia. All rights reserved.
          </p>
          <p style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontStyle: "italic", fontSize: "0.8rem", color: "#aaa",
          }}>
            Made with devotion.
          </p>
        </div>
      </div>
    </footer>
  );
}