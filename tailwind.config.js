/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A0E1A',
          navy: '#28365A',
          card: '#1E2A4B',
          slate: '#34436A',
          teal: '#4276B4',
          tealLight: '#8FADD4',
          orange: '#C43F34',
          orangeHover: '#A8322A',
        },
        togetha: {
          purple: '#6F47C6',
          purpleLight: '#A58AE2',
          purpleSoft: '#F3E8FF',
          green: '#357F5F',
          greenLight: '#79B493',
          coral: '#C43F34',
          blue: '#4276B4',
          navy: '#28365A',
          warning: '#B3261E',
        }
      },
      fontFamily: {
        sans: ['Figtree', 'system-ui', 'sans-serif'],
        serif: ['Source Serif 4', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
