/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "search_box": "0px 1px 11px 3px #0000000F",
        "loadingBoxShadow": "-1px 0px 27.5px 8px #4B4B4B0D"
      },
    },
  },
  plugins: []
  ,
}