/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spin: {
          from: { trasnform: "rotate(0deg)" },
          to: { transform: "rotate(180deg)" },
        },
      },
      animation: {
        spin: "spin 1s linear"
      },
    },
  },
  plugins: [],
}

