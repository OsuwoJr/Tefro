/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          900: '#004d40',
          800: '#00796b',
          700: '#009688',
          600: '#26a69a',
          500: '#4db6ac',
          400: '#80cbc4',
          300: '#b2dfdb',
          200: '#e0f2f1',
          100: '#f1f8f7',
          50: '#e0f2f1'
        },
      },
      boxShadow: {
        glow: '0 0 8px rgba(255, 255, 255, 0.5)',
        lg: '0 0 16px rgba(255, 255, 255, 0.5)',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  plugins: [],
};