/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de incluir tus archivos fuente
  ],
  theme: {
    extend: {
      // No hay soporte directo para box-reflect, pero puedes agregarlo como util clase
    },
  },
plugins: [
  function ({ addUtilities }) {
    addUtilities({
      '.box-reflect-below': {
        '-webkit-box-reflect': 'below 0px linear-gradient(to bottom, rgba(0,0,0,0.05), transparent)',
      },
      '.reflection': {
        '-webkit-box-reflect': 'below 0px linear-gradient(to bottom, rgba(0,0,0,0.05), transparent)',
      },
      });
    }
  ],
}