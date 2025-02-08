import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // theme: {
  //   extend: {
  //     colors: {
  //       lightmode: {
  //         background: "var(--background-light)",
  //         middleground: "var(--middleground-light)",
  //         foreground: "var(--foreground-light)",
  //       },
  //       darkmode: {
  //         background: "var(--background-dark)",
  //         middleground: "var(--middleground-dark)",
  //         foreground: "var(--foreground-dark)",
  //       },
  //     },
  theme: {
    extend: {
      colors: {
        background: "#ffffff", // White
        foreground: "#f2f2f2", // Grey
      },
      fontFamily: {
        sans: ["Source Sans 3", "sans-serif"],
      },
    },
  },

  plugins: [],
} satisfies Config;
