import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bean-green': {
          50: '#f7fee7',
          100: '#ecfccb',
          400: '#a3e635',
          500: '#84cc16', // Main bright green
          600: '#65a30d',
          900: '#1a2e05', // Deep footer green
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
