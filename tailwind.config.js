/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F2DD66',
        secondary: '#E50E2D',
        accent: '#EADA9C',
        accent2: '#F2EFE6',
        neutral: '#1A1A1A',
        neutral2: '#131313',
        neutral3: '#222222',
      },
      fontFamily: {
        sans: ['var(--saira-font)'],
      },
      boxShadow: {
        custom: '0 5px 20px #000',
      },
    },
  },
  plugins: [],
};
