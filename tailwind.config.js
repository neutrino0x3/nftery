module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      skyBlue: "#8ECAE6",
      midBlue: "#219EBC",
      midnightBlue: "#023047",
      creepyYellow: "#FFB703",
      gamingOrange: "#FB8500",
    },
    extend: {
      fontFamily: {
        display: ["Roboto Mono", "Menlo", "monospace"],
        body: ["Roboto Mono", "Menlo", "monospace"],
        secular: ["Secular One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
