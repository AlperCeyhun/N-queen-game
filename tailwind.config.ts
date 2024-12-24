import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#3e3d39",
        whiteTile: "#ebecd0",
        greenTile: "#739552",
        rangeTile: "#4a4a42",
      },
    },
  },
  plugins: [],
} satisfies Config;
