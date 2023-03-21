/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.{html,js}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    background: "#112240",
                    light: "#233554",
                    DEFAULT: "#112240",
                    dark: "#0A192F",
                    green: "#64FFDA",
                    pink: "#EF476F",
                    purple: "#D761FF",
                    purpleAlt: "#DF5FFF",
                    powderBlue: "#6977FF",
                },
            },
            boxShadow: {
                "brand-shadow": "5px 5px 0px #233554",
                "brand-shadow-dark": "5px 5px 0px #0A192F",
                "brand-shadow-circle": "0px 10px 0px #0A192F",
                "brand-shadow-dark-lg": "10px 10px 0px #0A192F",
                "brand-shadow-alt": "5px 5px 0px #112240",
            },
            dropShadow: {
                "img-shadow": "5px 5px 0px #0A192F",
            },
        },
    },
    plugins: [],
};
