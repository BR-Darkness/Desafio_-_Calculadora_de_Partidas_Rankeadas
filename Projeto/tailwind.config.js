/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgColor': '#0E0E0E',
        'inputColor': '#0C0C0C',
        'borderColor': '#242424',
        'accentColor': '#FFB904',
        'textColor': '#BBBBBB',

        // Ranks:
        'iron': '#545554',
        'bronze': '#966b18',
        'silver': '#8c9291',
        'gold': '#FFB904',
        'diamond': '#297184',
        'legendary': '#6bce9a',
        'immortal': '#b02639',
      },
      fontFamily: {
        'sans': ['"Inter"'],
      },
    },
  },
  plugins: [],
}

