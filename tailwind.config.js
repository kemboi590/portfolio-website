import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: { // extends is used to add new properties to the existing tailwindcss properties
      colors: {
        dark: '#1a202c',
        light: '#f7fafc',
        'white': '#ffffff',
        'text-light': '#f7fafc',
      },
    },
  },
  plugins: [],
};
