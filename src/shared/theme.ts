import { Poppins as Poppins, Bitter as Serif } from "@next/font/google";

export const colorTokens = {
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
  },
  background: {
    whiteBlur3: "rgba(255,255,255,0.3)",
    whiteBlur5: "rgba(255,255,255,0.5)",
  },
};

export const PoppinFont = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
