module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        backgroundImage: {
          'index': 'url(/images/index.jpg)',
        }
      },
      fontFamily: {
        main_text: ['TTOctosquares-Regular', 'sans-serif'],
        main_title: ['TTOctosquares-Bold', 'sans-serif'],
    },
    variants: {
      extend: {},
    },
    plugins: [require("daisyui")],
  }
}
