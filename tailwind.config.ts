import type { Config } from "tailwindcss";
import flowbitePlugin from "flowbite/plugin";
import typographyPlugin from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.mdx",
    "./src/*.{ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        project: "auto 1fr",
      },
      // Project write-ups (`prose prose-invert`), in the site's colors
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-invert-body": "#D4D4D4",
            "--tw-prose-invert-headings": "#FFFFFF",
            "--tw-prose-invert-lead": "#D4D4D4",
            "--tw-prose-invert-links": "#3BF686",
            "--tw-prose-invert-bold": "#FFFFFF",
            "--tw-prose-invert-counters": "#3BF686",
            "--tw-prose-invert-bullets": "#3BF686",
            "--tw-prose-invert-hr": "#4D4D4D",
            "--tw-prose-invert-quotes": "#FFFFFF",
            "--tw-prose-invert-quote-borders": "#3BF686",
            "--tw-prose-invert-code": "#80FFA3",
            "--tw-prose-invert-pre-code": "#E5E7EB",
            "--tw-prose-invert-pre-bg": "#1E1F26",
            "a": { textDecoration: "none" },
            "a:hover": { textDecoration: "underline" },
            "code::before": { content: "none" },
            "code::after": { content: "none" },
            ":not(pre) > code": {
              backgroundColor: "#323443",
              padding: "0.15em 0.4em",
              borderRadius: "0.375rem",
              fontWeight: "400",
            },
            "pre": { border: "1px solid #3F4152" },
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:last-of-type::after": { content: "none" },
          },
        },
      },
    },
  },
  plugins: [flowbitePlugin, typographyPlugin],
};

export default config;
