/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#F7F7F7",
        "address-gray": "#979797",
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
      boxShadow: {
        "product-card-shadow": "1px 2px 16px 3px rgba(54, 58, 69, 0.08);",
      },
      lineHeight: {
        152: "152%",
      },
      letterSpacing: {
        0.5: "0.5px",
      },
    },
  },
  plugins: [],
};
