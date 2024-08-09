/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        secondaryGreen: "hsl(75, 94%, 57%)",
        primarygray: {
          700: "hsl(0, 0%, 20%)",
          800: "hsl(0, 0%, 12%)",
          900: "hsl(0, 0%, 8%)",
        },
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      
      },
    },
  },
  plugins: [],
};
