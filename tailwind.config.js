/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1040px',
      xl: '1280px',
      '2xl' : '1536px',
    }
  },
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
        'bgimg': "url('bg.jpg')",
      },
      colors: {
        customColor: '#38568C', // Define your RGB color here
      },
    }
  }
}