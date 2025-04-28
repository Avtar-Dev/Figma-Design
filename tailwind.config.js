/** @type {import('tailwindcss').config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Tailwind will scan these files for class names
  theme: {
    extend: {
      screens: {
        sm: "300px",
      },
    },
  },
  plugins: [],
};
