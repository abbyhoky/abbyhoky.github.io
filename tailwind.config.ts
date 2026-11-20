import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#172033",
        muted: "#64748b",
        accent: "#315ee8",
        "accent-soft": "#edf2ff"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(15, 23, 42, 0.07)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
export default config;
