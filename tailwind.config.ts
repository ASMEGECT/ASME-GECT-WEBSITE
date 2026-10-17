import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#090B0E",
        foreground: "#F4F5F7",
        surface: {
          50: "#1A1E26",
          100: "#14171F",
          200: "#0F1218",
          300: "#0B0D12",
          card: "#11141C",
          elevated: "#181D28",
          border: "rgba(255, 255, 255, 0.08)",
          "border-strong": "rgba(255, 255, 255, 0.16)",
        },
        asme: {
          red: "#E32619",
          "red-hover": "#FF3526",
          "red-glow": "rgba(227, 38, 25, 0.25)",
          blue: "#1A5CCF",
          cyan: "#00A3FF",
          amber: "#F59E0B",
          emerald: "#10B981",
        },
        muted: {
          foreground: "#8E97A6",
          border: "rgba(255, 255, 255, 0.06)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        container: "1400px",
      },
      animation: {
        "pulse-subtle": "pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "marquee": "marquee 25s linear infinite",
        "border-glow": "borderGlow 4s ease infinite",
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(227, 38, 25, 0.3)" },
          "50%": { borderColor: "rgba(227, 38, 25, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
