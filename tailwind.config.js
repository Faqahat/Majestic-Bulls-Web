/** @type {import('tailwindcss').Config} */
const defaultTheme  = require(`tailwindcss/defaultTheme`);
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",   
  "./components/**/*.{js,ts,jsx,tsx}",  ],

  theme: {
    extend: {
      fontFamily: {
        "pt-mono": "PT Mono, monospace",
        nexa: "Nexa, sans-serif",
      },
      backgroundImage: {
        tale: 'url("../img/tale.png")',
      },

      screens: {
        desktop: { min: "1440px" },
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [ require('tailwind-scrollbar')],
}
