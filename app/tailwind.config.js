/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnightblue: "#281156",
        white: "#fff",
        deeppink: { "100": "#ff0f7b", "200": "#ff0099" },
        gray: "#000123",
        black: "#000",
      },
      fontFamily: {
        "ttoctosquares-regular": "TTOctosquares-Regular",
        "ttoctosquares-black": "TTOctosquares-Black",
      },
      borderRadius: { xl: "20px", "11xl": "30px", "31xl": "50px" },
    },
    fontSize: { xl: "1.25rem", "2xl": "1.31rem", "41xl": "3.75rem" },
  },
  corePlugins: { preflight: false },
};
