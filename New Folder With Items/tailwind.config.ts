import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#bcd5ff',
          300: '#8eb8ff',
          400: '#5e92ff',
          500: '#2f6fff',
          600: '#1d52db',
          700: '#183fb0',
          800: '#1a378a',
          900: '#1a326d'
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
