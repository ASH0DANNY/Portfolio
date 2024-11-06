/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#3182CE",
        secondary: "#F472B6",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        itim: ["Itim", "sans-serif"],
        knewave: ["knewave", "sans-serif"],
        JetBrainsMono: ["JetBrains Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
