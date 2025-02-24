/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // Use a custom class or inline CSS for video backgrounds
        'headerVideo': 'url("/src/assets/2239241-hd_1920_1080_24fps.mp4")',
      },
      colors:{
        primary:'#3e7071',
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-out',
        slideIn: 'slideIn 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
