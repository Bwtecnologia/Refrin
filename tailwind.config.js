/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          300: "#0D509E",
        },
        slate:{
          500:"#F5F5F5"
        }
        
      }
    },
  },
  plugins: [],
}

