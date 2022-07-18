module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "#6e6e6e",
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    },
  },
  plugins: [],
};
