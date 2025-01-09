import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightmode: {
          background: "var(--background-light)",
          middleground: "var(--middleground-light)",
          foreground: "var(--foreground-light)",
        },
        darkmode: {
          background: "var(--background-dark)",
          middleground: "var(--middleground-dark)",
          foreground: "var(--foreground-dark)",
        },
      },
      fontFamily: {
        Sans: ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  
  plugins: [],
} satisfies Config;
