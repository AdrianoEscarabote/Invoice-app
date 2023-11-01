import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark_purple: "#7C5DFA",
        light_purple: "#9277FF",
        dark_blue: "#1E2139",
        almost_dark_blue: "#252945",
        light_gray: "#DFE3FA",
        almost_black: "#0C0E16",
        red: "#EC5757",
        light_red: "#9277FF",
        lightBg: "#F8F8FB",
        darkBg: "#141625",
      },
    },
  },
  plugins: [],
};
export default config;
