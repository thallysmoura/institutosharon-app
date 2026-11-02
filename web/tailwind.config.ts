import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14110a',
        ivory: '#fbf8f1',
        sand: '#f3ede0',
        line: '#e7dfcb',
        gold: { 300: '#e6cc7a', 400: '#d4af37', 500: '#b8902f', 600: '#9a7721', 700: '#7d5f12' },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: { soft: '0 24px 60px -34px rgba(20,17,10,.45)' },
    },
  },
  plugins: [],
};
export default config;
