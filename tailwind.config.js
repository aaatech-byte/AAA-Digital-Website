/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1bce8c', // Emerald green
        secondary: '#064E3B', // Dark green
        accent: '#34D399', // Light green
      },
    },
  },
  plugins: [],
};