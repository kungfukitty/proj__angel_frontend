import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#FFF9E6",
          100: "#FCEFC2",
          200: "#F8DF85",
          300: "#F4CF47",
          400: "#F0C10F",
          500: "#D4AF37", // metallic gold vibe
          600: "#B8962E",
          700: "#8F7323",
          800: "#6B551A",
          900: "#3F320F"
        }
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"]
      },
      boxShadow: {
        "gold": "0 10px 30px rgba(212, 175, 55, 0.25)"
      },
      borderRadius: {
        "2xl": "1rem"
      }
    }
  },
  plugins: []
};

export default config;
