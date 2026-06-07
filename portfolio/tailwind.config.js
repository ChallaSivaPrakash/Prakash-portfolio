/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-950': '#1a0b2e',
        'accent-green': '#00ff9d',
        'accent-blue': '#00c8ff',
        'accent-purple': '#a855f7',
        'accent-orange': '#f59e0b',
        'accent-emerald': '#10b981',
        'accent-pink': '#ec4899',
      },
      animation: {
        'shiny': 'shiny 3s linear infinite',
        'marquee': 'marquee 150s linear infinite',
      },
      keyframes: {
        shiny: {
          '0%': { backgroundPosition: '0% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
