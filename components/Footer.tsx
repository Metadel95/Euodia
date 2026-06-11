"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/utils";

const LOGO_URL = "https://res.cloudinary.com/dgxqifwdf/image/upload/v1781176122/Artboard_8_4x_ql3h3l.png";

const socialLinks = [
  { label: "Instagram", href: SOCIAL_LINKS.instagram, icon: Instagram },
  { label: "YouTube", href: SOCIAL_LINKS.youtube, icon: Youtube },
  { label: "Email", href: SOCIAL_LINKS.email, icon: Mail },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-background border-t border-foreground/8 py-12 px-6"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-2"
        >
          <img
            src={LOGO_URL}
            alt="Euodia"
            className="w-12 h-12 object-contain"
          />
          <span className="font-serif tracking-widest uppercase text-sm font-light text-foreground">
            Euodia
          </span>
        </motion.div>

        <motion.nav
          aria-label="Social media links"
          className="flex items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={`Follow Euodia on ${label}`}
              className="text-muted hover:text-accent transition-colors duration-300"
            >
              <Icon size={18} strokeWidth={1.5} />
            </a>
          ))}
        </motion.nav>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-2 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="font-sans text-xs text-muted">
            &copy; {year} Euodia. All rights reserved.
          </p>
          <span className="hidden sm:inline text-muted/40 text-xs">·</span>
          <p className="font-sans text-xs text-muted/60 font-light italic">
            Made with devotion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
