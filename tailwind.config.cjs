/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      serif: ["Recoleta", "serif"],
      sans: ['"Graphik Web"', "system-ui", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
