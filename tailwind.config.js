/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ice: 'rgb(var(--c-ice) / <alpha-value>)',
        sky: 'rgb(var(--c-sky) / <alpha-value>)',
        azure: 'rgb(var(--c-azure) / <alpha-value>)',
        cyan: { electric: 'rgb(var(--c-cyan) / <alpha-value>)' },
        cobalt: 'rgb(var(--c-cobalt) / <alpha-value>)',
        night: 'rgb(var(--c-night) / <alpha-value>)',
        surface: 'rgb(var(--c-bg) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(14, 90, 200, 0.18)',
        glow: '0 0 0 1px rgba(0, 163, 255, 0.25), 0 12px 40px -8px rgba(0, 163, 255, 0.3)',
      },
    },
  },
  plugins: [],
};