/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Base surfaces — near-black with a faint violet undertone
        ink: {
          950: "#07060c",
          900: "#0b0a12",
          800: "#121019",
          700: "#1a1724",
        },
        // Purple/violet accent ramp
        violet: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
        },
        magenta: {
          400: "#e879f9",
          500: "#d946ef",
          600: "#c026d3",
        },
        mist: {
          100: "#f5f5f7",
          300: "#c7c5d1",
          400: "#9c99ac",
          500: "#716e82",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        stat: ["'Bebas Neue'", "sans-serif"],
      },
      backgroundImage: {
        "grid-mesh":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(circle at 20% 20%, rgba(139,92,246,0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(217,70,239,0.18), transparent 40%), radial-gradient(circle at 50% 100%, rgba(124,58,237,0.15), transparent 50%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(139,92,246,0.35)",
        "glow-sm": "0 0 20px rgba(139,92,246,0.25)",
        card: "0 8px 32px rgba(0,0,0,0.45)",
      },
      animation: {
        "pulse-slow": "pulse-slow 6s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        "float-delay": "float 7s ease-in-out infinite 2s",
        "spin-slow": "spin 14s linear infinite",
        marquee: "marquee 32s linear infinite",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: 0.7, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.08)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
