/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        deeppink: { "100": "#ff0f7b", "200": "#ff0099" },
        white: "#fff",
        gray: "#000123",
      },
      fontFamily: {
        "ttoctosquares-regular": "TTOctosquares-Regular",
        "ttoctosquares-black": "TTOctosquares-Black",
      },
      borderRadius: { xxs: "5px", small: "20px", base: "30px", large: "50px" },
    },
    fontSize: { sm: "1.25rem", base: "1.31rem", lg: "3.75rem", xl: "3.88rem" },
  },
  corePlugins: { preflight: false },
};
