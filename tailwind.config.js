/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        logo:"url('src/assets/images/logo.jpg')",
        banner:"url('src/assets/images/banner2.jpg')",
      }
    },
  },
  plugins: [],
}