/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Protest Strike", "sans-serif"],
      },
      colors: {
        light: {
          primary: "#8B5CF6", // purple-500 (main violet color)
          bodyBg: "#e9eaf0", // light gray background
          card: "#d3d4db", // white card background
          primaryText: "#6B46C1  ", // darker violet for CTA hover
          text: "#111827", // dark gray text
        },
        dark: {
          primary: "#A78BFA", // lighter purple-400 for dark mode
          bodyBg: "#111827", // dark gray background
          card: "#EBECF0", // slightly lighter dark gray for cards
          ctaHover: "#9333EA", // vivid purple for CTA hover in dark mode
          text: "#F3F4F6", // light gray text
        },
      },
      gridTemplateColumns: {
        "large": "40% 60%",
      },
    },
  },
  plugins: [],
};
