/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPurple: "#7B2FA1",
        brandBlue: "#1496D2",
        brandNavy: "#1F2A6B",
      },
    },
  },
  plugins: [],
};
