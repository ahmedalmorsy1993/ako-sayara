import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: '#000623',
        navy: {
          900: '#000623',
          800: '#0B1A2F',
          700: '#0F2744',
          600: '#12294A',
          500: '#1C3454',
          400: '#2A4060',
        },
        brand: {
          blue: '#1B6FF2',
          'blue-hover': '#2579FF',
          'blue-dark': '#1559CC',
          cyan: '#1BB2DE',
          gold: '#FFD700',
          orange: '#FF6B35',
          green: '#6BBC61',
          red: '#FF0000',
        },
        muted: {
          DEFAULT: '#8899AA',
          light: '#C4D3E8',
        },
      },
      borderColor: {
        navy: 'rgba(28, 52, 84, 0.5)',
      },
    },
  },
  plugins: [],
} satisfies Config
