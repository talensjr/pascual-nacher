/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(33, 39, 55)",
        secondary: "rgb(234, 237, 243)",
      },
      fontFamily: {
        sans: ["Fira Sans", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
