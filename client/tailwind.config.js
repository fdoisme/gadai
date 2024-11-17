/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    // screens: {
    //   'phone': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'tablet': '768px',
    //   // => @media (min-width: 1024px) { ... }

    //   'desktop': '1536px',
    //   // => @media (min-width: 1280px) { ... }
    // },
    extend: {
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
        '6': '6 6 0%',
      }
    },
  },
  plugins: [],
}

