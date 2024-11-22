/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-primary": "#004d40",
        "theme-secondary": "#80cbc4",
        "theme-accent": "#fdd835",
        "theme-text": "#212121",
        "score-excellent": "#16A34A",
        "score-good": "#86EFAC",
        "score-average": "#FACC15",
        "score-poor": "#FB923C",
        "score-critical": "#B91C1C",
      }
    }
  },
  daisyui: {
    themes: []
  },
  plugins: [
    require("daisyui")
  ]
}

