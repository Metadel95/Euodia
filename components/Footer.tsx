import { Instagram, Youtube, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-void border-t border-parchment/5 py-10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <span
              className="font-display text-gold"
              style={{ fontSize: "1.25rem" }}
              aria-hidden="true"
            >
              ☧
            </span>
            <span className="font-display text-parchment/60 tracking-[0.15em] text-sm font-light uppercase">
              Euodia
            </span>
          </div>

          {/* Center */}
          <p className="font-sans text-parchment/25 text-[11px] tracking-editorial uppercase text-center">
            Made with devotion &nbsp;·&nbsp; © {year} Euodia
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            {[
              { href: "https://instagram.com/euodiaworship", Icon: Instagram, label: "Instagram" },
              { href: "https://youtube.com/@euodiaworship", Icon: Youtube, label: "YouTube" },
              { href: "mailto:hello@euodia.co", Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                className="text-parchment/25 hover:text-gold transition-colors duration-300"
              >
                <Icon size={14} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
