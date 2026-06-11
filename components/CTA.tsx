"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/utils";
import SectionTitle from "./SectionTitle";

const socialLinks = [
  {
    label: "Instagram",
    href: SOCIAL_LINKS.instagram,
    icon: Instagram,
    description: "Follow our worship journey on Instagram",
  },
  {
    label: "YouTube",
    href: SOCIAL_LINKS.youtube,
    icon: Youtube,
    description: "Watch worship sessions on YouTube",
  },
  {
    label: "Email",
    href: SOCIAL_LINKS.email,
    icon: Mail,
    description: "Send us an email",
  },
];

export default function CTA() {
  return (
    <section
      id="journey"
      className="bg-dark py-24 md:py-36 px-6"
      aria-labelledby="cta-heading"
    >
      {/* Top ornamental line */}
      <motion.div
        className="max-w-2xl mx-auto mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px opacity-20" style={{ background: "linear-gradient(to right, transparent, #C7A06C)" }} />
          <span className="font-sans text-xs tracking-widest text-accent uppercase px-2">
            Come and See
          </span>
          <div className="flex-1 h-px opacity-20" style={{ background: "linear-gradient(to left, transparent, #C7A06C)" }} />
        </div>
      </motion.div>

      <div className="max-w-3xl mx-auto text-center">
        <SectionTitle
          eyebrow="Worship with Us"
          heading="Join Us on the Journey"
          subheading="Follow Euodia for a journey of worship and devotion, where music and faith blend to create a beautiful fragrance of praise."
          light
        />

        {/* Social links */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {socialLinks.map(({ label, href, icon: Icon, description }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={description}
              className="flex items-center justify-center gap-3 px-7 py-3.5 border border-white/20 text-white/80 font-sans text-sm tracking-wider uppercase hover:border-accent hover:text-accent transition-all duration-300 min-w-[160px]"
            >
              <Icon size={16} strokeWidth={1.5} />
              {label}
            </a>
          ))}
        </motion.div>

        {/* Scripture */}
        <motion.blockquote
          className="mt-16 text-white/30 font-serif italic text-base md:text-lg font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          "For we are to God the pleasing aroma of Christ among those who are being saved."
          <footer className="not-italic font-sans text-xs tracking-wider text-white/20 mt-2 block uppercase">
            2 Corinthians 2:15
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}