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
      colors:{
        sky: "#00a6f4",
        skylight: "#EDF9FD",
        purple: "#CFCEFF",
        purpleLight: "#F1F0FF",
        darkpurple:"#9810fa",
        yellow: "#FAE27C",
        yellowLight: "#FEFCE8",
        candy: "#feafc7",
        candylight: "#feccdc",
        cyan: "#53eafd",
        cyanlight: "#a2f4fd",
        rose: "#ff2056",
        roselight: "#ff637e",
        emerald:"#00d492",
        emeraldlight:"#a4f4cf",
      }
    },
  },
  plugins: [],
};
export default config;
