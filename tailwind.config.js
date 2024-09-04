/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors:{
          'mantis': {
            '50': '#f2fbf3',
            '100': '#e0f8e2',
            '200': '#c3efc8',
            '300': '#94e19e',
            '400': '#4ac45a',
            '500': '#38af48',
            '600': '#299037',
            '700': '#23722f',
            '800': '#205b29',
            '900': '#1c4b24',
            '950': '#0a2910',
          },
          'shark': {
            '50': '#f2f8f9',
            '100': '#deebef',
            '200': '#c0d7e1',
            '300': '#95bccb',
            '400': '#6297ae',
            '500': '#477b93',
            '600': '#3d657d',
            '700': '#375567',
            '800': '#334857',
            '900': '#2e3e4b',
            '950': '#1d2a35',
          },
          'bunker': {
            '50': '#f4f7fb',
            '100': '#e8eff6',
            '200': '#cdddea',
            '300': '#a1c1d8',
            '400': '#6ea0c2',
            '500': '#4c84ab',
            '600': '#3a6a8f',
            '700': '#305574',
            '800': '#2b4961',
            '900': '#283f52',
            '950': '#0f171f',
          },
        }
        ,keyframes: {
          marquee: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        },
        animation: {
          marquee: 'marquee 5s linear infinite',
        },
  },
  plugins: [],
}
}

