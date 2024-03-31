/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        18: '4.5rem',
        50: '12.5rem',
        42: '10.5rem',
        0.25: '0.0625rem',
        2.5: '0.625rem',
      },
    },
  },
  plugins: [],
}
