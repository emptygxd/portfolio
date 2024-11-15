/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary-color": "#bd01ff",
      "secondary-color": " #ffffff",
      "accent-color": "#01ffd7",
      "complementary-color": "#ff7f01",
      "background-color": "#1a1a1a",
      "link-color": "#ffcc00",
      "border-divider-color": "#333333",
      black: "#000000",
      white: "#ffffff",
      "html-color": "#FC490B",
      "css-color": "#236091",
      "sass-color": "#CC6699",
      "tailwind-color": "#60DAFA",
      "javascript-color": "#FFDF00",
      "typescript-color": "#3178C6",
      "react-color": "#00DDD8",
      "redux-color": "#764ABC",
      "github-color": "#5C6BC0",
      "figma-color": "#bd01ff",

      "html-hover-color": "#fc490b66",
      "css-hover-color": "#23609166",
      "sass-hover-color": "#cc669966",
      "tailwind-hover-color": "#60dafa66",
      "javascript-hover-color": "#ffdf0066",
      "typescript-hover-color": "#3178C666",
      "react-hover-color": "#00DDD866",
      "redux-hover-color": "#764ABC66",
      "github-hover-color": "#5C6BC066",
      "figma-hover-color": "#bd01ff66",
    },
    screens: {
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      xs: { max: "480px" },
    },
    extend: {},
  },
  plugins: [],
};
