module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      smUp: { max: "640px" },
      mdUp: { max: "768px" },
      lgUp: { max: "1024px" },
      xlUp: { max: "1280px" },
    },
    extend: {},
  },
  plugins: [],
};
