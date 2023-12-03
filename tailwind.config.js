/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        // secondary: '#149ddd',
        // secondary: '#717fe0',
        secondary: '#d1ab7f',
        tertiary: '#202020',
        black: '#222',
        slate: {
          10: '#f1f3f4',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
      backgroundImage: {
        hero: "url('/hero.jpg')",
        footer: "url('/footer.jpg')"
      }
    },
  },
  plugins: [],
};

