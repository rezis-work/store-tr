import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        display: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primeColor: "#262626",
        lightText: "#6d6d6d",
      },
      boxShadow: {
        testShadow: "0px 0px 54px -13px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
export default config;
