import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./themes/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        'background-alt': "var(--background-alt)",
        foreground: "var(--foreground)",
        link: "var(--link)",
        "link-hover": "var(--link-hover)",
        invert: "var(--invert)"
      },
    },
  },
  plugins: [],
} satisfies Config;
