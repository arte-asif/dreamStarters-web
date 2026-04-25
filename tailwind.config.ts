import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8DB445",
        secondary: "#69BD46",
        accent: "#231F55",
        ink: "#171531",
        mist: "#F5F8EF",
        cloud: "#F7F8FB"
      },
      boxShadow: {
        soft: "0 20px 70px rgba(35, 31, 85, 0.10)",
        card: "0 18px 45px rgba(35, 31, 85, 0.08)"
      },
      borderRadius: {
        premium: "1.5rem"
      },
      backgroundImage: {
        "hero-soft":
          "linear-gradient(135deg, #ffffff 0%, #f5f8ef 48%, #f7f8fb 100%)"
      }
    }
  },
  plugins: []
};

export default config;
