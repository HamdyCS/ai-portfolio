/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#051424",
        surface: {
          DEFAULT: "#122131",
          bright: "#2c3a4c",
          high: "#1c2b3c",
          highest: "#273647",
        },
        primary: {
          DEFAULT: "#2dd4bf",
          light: "#3cddc7",
          dark: "#00574d",
        },
        secondary: {
          DEFAULT: "#38bdf8",
        },
        text: {
          primary: "#d4e4fa",
          secondary: "#bacac5",
        },
        outline: {
          DEFAULT: "#859490",
          variant: "#3c4a46",
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Cairo"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
      spacing: {
        gutter: "20px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
