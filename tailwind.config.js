/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "15px",
      lineHeight: "32px",
    },
    fontFamily: {
      spartan: ["League Spartan", "sans-serif"],
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        "li:hover": {
          cursor: "pointer",
          color: "#748be4",
        },
      });
    },
  ],
};