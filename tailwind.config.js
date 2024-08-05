/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: {
      screens: {
        sm: "480px",
        md: "560px",
        lg: "840px",
        xl: "1024px",
        "2xl": "1280px",
      },
    },
    extend: {},
    container: {
      center: true,
      padding: "15px",
      lineHeight: "32px",
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({});
    },
  ],
};
