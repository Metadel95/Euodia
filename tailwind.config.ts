import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#F8F5EF",
        ink: "#1A1A1A",
        gold: "#C7A06C",
        void: "#111111",
        muted: "#666666",
        "gold-dark": "#A6824A",
        "parchment-dark": "#EDE8DF",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 8rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 5rem)", { lineHeight: "0.95", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.8rem, 3.5vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75", letterSpacing: "0.01em" }],
        "caption": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.12em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "section": "clamp(5rem, 10vw, 9rem)",
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fadeIn 1.2s ease forwards",
        "line-grow": "lineGrow 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(32px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        lineGrow: {
          from: { scaleX: "0" },
          to: { scaleX: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
