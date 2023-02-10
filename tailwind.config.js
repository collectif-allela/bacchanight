/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'primary': '#CEFF44',

      },
      fontFamily: {
        'aeonik': ['var(--aeoik)'],
        'offbit': ['var(--offbit)'],
        'title': ['var(--offbit)'],
        'body': ['var(--aeonik)']
      },
      backgroundImage: {
        'game1': "url('/public/jour_des_mort.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  plugins: [],
}
}
