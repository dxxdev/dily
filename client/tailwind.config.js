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
        "dark-gray-2": "#9e9e9e",
        "dark-gray-3": "#262626",
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        "product-card-shadow": "1px 2px 16px 3px rgba(54, 58, 69, 0.08);",
        "menu-shadow": "0px 4px 12px 0px rgba(54, 58, 69, 0.2)",
        "outside-shadow": "-13px 3px 12px -3px rgba(54, 58, 69, 0.2)",
      },
      lineHeight: {
        152: "152%",
        120: "120%",
        140: "140%",
      },
      letterSpacing: {
        0.5: "0.5px",
        0.7: "0.7px",
      },
      width: {
        95: "95px",
        430: "430px",
        550: "550px",
        90: "90px",
        330: "330px",
        30: "30px",
      },
      height: {
        95: "95px",
        430: "430px",
        550: "550px",
        90: "90px",
        330: "330px",
        30: "30px",
      },
      gap: {
        30: "30px",
        15: "15px",
      },
      padding: {
        30: "30px",
        60: "60px",
        70: "70px",
      },
    },
  },
  plugins: [],
};
