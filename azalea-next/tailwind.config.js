/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'azalea-purple': '#7E4AB8',
        purple: {
          300: '#c4a1d8',
          500: '#a855f7', 
          700: '#8b5cf6',
          900: '#7E4AB8',
        }
      }
    },
  },
  plugins: [],
}
