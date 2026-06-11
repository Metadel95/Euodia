"use client";

import { motion } from "framer-motion";

const LOGO_URL = "https://res.cloudinary.com/dgxqifwdf/image/upload/v1781176122/Artboard_8_4x_ql3h3l.png";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function Meaning() {
  return (
    <section
      id="meaning"
      className="bg-background py-24 md:py-36 px-6"
      aria-labelledby="meaning-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="ornament-line mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="font-sans text-xs tracking-widest text-accent uppercase px-4">
            Our Symbol
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: Logo */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-20"
                style={{ background: "#3d3d3d", transform: "scale(1.4)" }}
                aria-hidden="true"
              />
              <img
                src="https://res.cloudinary.com/dgxqifwdf/image/upload/v1781195838/Artboard_5_4x_cszeny.png"
                alt="Euodia logo — Chi-Rho symbol surrounded by lily"
                className="w-56 h-56 md:w-72 md:h-72 object-contain relative z-10"
              />
            </div>
          </motion.div>

          {/* Right: Text */}
          <div className="flex flex-col gap-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0}
            >
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
            </motion.div>

            <motion.div
              className="w-12 h-px bg-accent"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            />

            <motion.div
              className="flex flex-col gap-6 text-muted font-sans font-light text-base leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.15}
            >
              <p>
                In the center is the{" "}
                <strong className="font-medium text-foreground">
                  Chi-Rho (XP)
                </strong>
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
            </motion.div>
          </div>
        </div>

        <motion.div
          className="ornament-line mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="font-serif italic text-xs text-muted px-4">
            εὐωδία — A fragrant aroma
          </span>
        </motion.div>
      </div>
    </section>
  );
}
