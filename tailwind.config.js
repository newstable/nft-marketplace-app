/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:'selector',
  theme: {
    extend: {
      colors:{
        bgColor: "var(--bgColor)",
        textColor: "var(--textColor)"
      }
    },
  },
  plugins: [],
}