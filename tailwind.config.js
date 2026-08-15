/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f4f6f8',
          100: '#e6eaee',
          200: '#c9d2db',
          300: '#a3b1c0',
          400: '#7a8b9d',
          500: '#5b6c80',
          600: '#455465',
          700: '#334050',
          800: '#1f2937',
          900: '#111827',
          950: '#0a0e14',
        },
        teal: {
          50: '#effcfb',
          100: '#c9f5f1',
          200: '#96eae3',
          300: '#5fd8d0',
          400: '#33bfb7',
          500: '#189d97',
          600: '#0f7d79',
          700: '#106462',
          800: '#124f4f',
          900: '#124342',
        },
        cream: {
          50: '#FBF8F2',
          100: '#F7F3EC',
          200: '#F1ECE2',
          300: '#E8E1D3',
        },
        amber: {
          50: '#fffaeb',
          100: '#fef0c7',
          200: '#fde08a',
          300: '#fbc94d',
          400: '#f9b423',
          500: '#f19a0b',
          600: '#d67607',
          700: '#b1560a',
          800: '#8f430f',
          900: '#763810',
        },
      },
      boxShadow: {
        glow: '0 0 60px -15px rgba(24, 157, 151, 0.35)',
        card: '0 1px 2px rgba(17, 24, 39, 0.04), 0 8px 24px -8px rgba(17, 24, 39, 0.08)',
        'card-hover': '0 4px 8px rgba(17, 24, 39, 0.06), 0 16px 40px -12px rgba(17, 24, 39, 0.16)',
        photo: '0 2px 6px rgba(17, 24, 39, 0.08), 0 14px 36px -10px rgba(17, 24, 39, 0.18), 0 0 0 1px rgba(95, 216, 208, 0.18)',
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(17,24,39,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,24,39,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
