/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        shiraz: "#a7033f",
        "rose-1": "#f20675",
        "rose-2": "#f20587",
        "purple-heart": "#6e3cd9",
        mirage: "#132026",
        "Pickled-Bluewoodapprox": "#37545F",
      },
    },
  },
  plugins: [],
};
