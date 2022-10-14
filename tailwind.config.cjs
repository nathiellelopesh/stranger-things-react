/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./index.html",
    "./src/components/header.jsx",
  ],
  theme: {
    container: {
      center: true, //center the page
    },
    fontFamily: {
      libre: ["Libre Baskerville", "sans-serif"],
      archivo: ["Archivo", "sans-serif"],
      dark: ["Rubik Glitch", "sans-serif"],
    },
    extend: {
      colors: {
        root: {
          primary: "#cf0f0f",
          contrast: "#ffffff",
          field: "#000",
          border: "linear-gradient(#cf0f0f 50%, #ffffff 50%)",
        },
        light: {
          header: "#e3e3e3",
          highlight: "#000000",
          top: "#ffffff",
          bottom: "#e5e5e5",
          footer: "#b5bbbf",
        },
        dark: {
          header: "#220f0f",
          highlight: "#ffffff",
          top: "#000",
          bottom: "rgba(255, 255, 255, 0.1)",
          footer: "#000",
        },
      },
      backgroundImage: {
        header: "url('./src/images/banner/florest.webp')",
        footer: "url('./src/images/footer/tape.svg')",
        form: "url('./src/images/backgrounds/florest.png'), linear-gradient( #ffffff 0%,#ffffff 65%,rgba(255, 255, 255, 0.75) 100%)",
        lgTop: "url('./src/images/characters/kids-on-the-bike.svg')",
        lgBottom: "url('./src/images/characters/inverted-world-monster.svg')",
        lgLamp: "url('./src/images/backgrounds/lamps.png')",
        lgPage:
          "linear-gradient(180deg, #ffffff 0%,#ffffff 65%,rgba(255, 255, 255, 0.75) 100%)",

        darkTop: "url('./src/images/characters/inverted-world-monster.svg')",
        darkBottom: "url('./src/images/characters/kids-on-the-bike.svg')",
        darkLamp: "url('./src/images/backgrounds/lamps-inverted.png')",
        darkPage:
          "linear-gradient( 180deg, #050000 0%, #130404 65%, rgba(19, 1, 1, 0.75) 100%)",
      },
    },
  },
  plugins: [],
};
