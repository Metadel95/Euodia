"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--void)", padding: "40px 0 48px" }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "0 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.1rem",
            color: "var(--gold)",
            opacity: 0.8,
          }} aria-hidden="true">☧</span>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(248,245,239,0.3)",
          }}>Euodia</span>
        </div>

        {/* Center */}
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: 9,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "rgba(248,245,239,0.18)",
        }}>
          Made with devotion · © {year}
        </p>

        {/* Social */}
        <div style={{ display: "flex", gap: 28 }}>
          {[
            { label: "Ig", href: "https://instagram.com/euodiaworship" },
            { label: "Yt", href: "https://youtube.com/@euodiaworship" },
            { label: "Em", href: "mailto:hello@euodia.co" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(248,245,239,0.22)",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(248,245,239,0.22)"; }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
