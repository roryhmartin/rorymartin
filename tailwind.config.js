/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#233554",
          DEFAULT: "#112240",
          dark: "#0A192F",
          green: "#64FFDA",
          pink: "#EF476F",
          purple: "#D761FF",
          purpleAlt: "#DF5FFF",
          powderBlue: "#6977FF",
        } ,     
      },
    },
  },
  plugins: [],
}
