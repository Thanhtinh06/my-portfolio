import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/page/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "coder-girl ": "./src/shared/assets/view-3d-woman-using-laptop.jpg",
        "coder-girl-pink ": "./src/shared/assets/6500_5_08.jpgx",
      },
      colors: {
        primary: {
          pink: "#F3CFC6",
          pinkDark: "#867070",
          pinkLight: "#FFE6E6",
          pinkMiddle: "#D5B4B4",
          white: "#ffffff",
          grey: "#B1B8C2",
          pinkLight2: "#F5EBEB",
        },
        secondary: {
          roseGold: "#E0BFB8",
          black: "#3B3A3A",
          blackLight: "#757575",
        },
      },
    },
  },
  plugins: [require("tailwindcss-gradients")],
};
export default config;
