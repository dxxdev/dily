/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#F7F7F7",
        "medium-gray-2": "#EFEFEF",
        "medium-gray": "#DADCDC",
        "dark-gray": "#363A45",
        "bright-green": "#00C65E",
        "light-orange": "#FFB762",
        "bright-orange": "#F89358",
        "light-green": "#CCEFDB",
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
