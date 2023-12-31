/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    minHeight: {
      "1": "100%",
      "8/10": "80%",
      "1/2": "50%",
      "1/3": "33%",
    },
  },
  width:{
    "86": "350px",
    "4/5": "80%",
    "1/2": "50%",
    "1/3": "33%",
  },
  plugins: [],
  darkMode: "class",
};
