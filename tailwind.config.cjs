/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 1s var(--animation-delay, 0s) ease forwards",
        "fade-up": "fade-up 1s var(--animation-delay, 0s) ease forwards",
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        shimmer: "shimmer 8s infinite",
        spin: "spin 1s linear infinite",
        "image-glow": "image-glow 1s var(--animation-delay, 0s) ease forwards",
        "fade-out": "fade-out 0.5s ease forwards",
      },
      keyframes: {
        spin: {
          to: { transform: "rotate(1turn)" }
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "none" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "none" },
        },
        "image-glow": {
          "0%": { opacity: "0", animationTimingFunction: "cubic-bezier(0.74, 0.25, 0.76, 1)" },
          "10%": { opacity: "0.7", animationTimingFunction: "cubic-bezier(0.12, 0.01, 0.08, 0.99)" },
          "100%": { opacity: "0.4" },
        },
        marquee: {
          "0%": { transform: "translate(0)" },
          "100%": { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "marquee-vertical": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        shimmer: {
          "0%, 90%, 100%": { backgroundPosition: "calc(-100% - var(--shimmer-width)) 0" },
          "30%, 60%": { backgroundPosition: "calc(100% + var(--shimmer-width)) 0" },
        },
      },
    },
  },
  plugins: [],
};
