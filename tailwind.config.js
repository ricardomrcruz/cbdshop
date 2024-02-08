module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        playfair: ['Playfair Display', 'serif']
      }
    }
  },
  variants: {
    extend: {
      padding: ['first']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}