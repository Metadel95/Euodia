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
        background: "#F8F5EF",
        foreground: "#1A1A1A",
        accent: "#ffffff",
        dark: "#111111",
        muted: "#666666",
        "accent-light": "#ffffff",
        "accent-dark": "#000000",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter Variable"', "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.3em",
        wider: "0.15em",
      },
    },
  },
  plugins: [],
};

export default config;
