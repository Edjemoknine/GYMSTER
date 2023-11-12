/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "1rem",
      center: true,
    },
    extend: {
      screens: {
        sm: "640px",
        md: "1024px",
        xl: "1200px",
      },
    },
  },
  plugins: [require("daisyui")],
};
