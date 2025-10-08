import type { Config } from "tailwindcss";
import  fontFamily  from "tailwindcss/defaultTheme";
import animate from "tailwindcss-animate";

const config: Config = {
  
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["'Space Grotesk'", "sans-serif"]
      },
       keyframes: {
        moveX: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        moveX: "moveX 5s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;