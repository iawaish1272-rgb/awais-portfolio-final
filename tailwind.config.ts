import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#000000",
        maroon: { primary: "#58111A", glow: "#7A1C2E" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        drift: {
          "0%, 100%": { backgroundPosition: "20% 80%" },
          "50%": { backgroundPosition: "80% 20%" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: ".4", transform: "scale(1.6)" },
        },
      },
      animation: {
        drift: "drift 14s ease-in-out infinite",
        pulseDot: "pulseDot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
