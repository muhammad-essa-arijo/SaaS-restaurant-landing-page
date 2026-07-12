import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Playfair Display", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        gold: {
          50: "#fefef8",
          100: "#fefcf1",
          200: "#fde8c2",
          300: "#fdd293",
          400: "#fcc257",
          500: "#f5a623",
          600: "#d4851f",
          700: "#b36a1a",
          800: "#924d16",
          900: "#773a11",
        },
        charcoal: {
          50: "#f9f8f7",
          100: "#f3f0ed",
          200: "#e6e1dc",
          300: "#d9d2c9",
          400: "#c5b7ac",
          500: "#8b7d75",
          600: "#6b5d55",
          700: "#544b47",
          800: "#3d3632",
          900: "#2a2420",
        },
        cream: {
          50: "#fffef9",
          100: "#fffef5",
          200: "#fffbeb",
          300: "#fff8dc",
          400: "#fff4c4",
          500: "#fff0a8",
          600: "#f0de87",
          700: "#dcc966",
          800: "#c8b545",
          900: "#8d7c1f",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
        "slide-left": "slideLeft 0.6s ease-out",
        "slide-right": "slideRight 0.6s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "soft-lg": "0 10px 25px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
        "soft-xl": "0 20px 40px -5px rgba(0, 0, 0, 0.08), 0 8px 12px -4px rgba(0, 0, 0, 0.04)",
        "glow": "0 0 30px 0 rgba(245, 166, 35, 0.2)",
        "glow-lg": "0 0 60px 0 rgba(245, 166, 35, 0.3)",
      },
      backdropBlur: {
        xs: "4px",
      },
      spacing: {
        "safe": "max(1rem, env(safe-area-inset-bottom))",
      },
    },
  },
  plugins: [],
};

export default config;
