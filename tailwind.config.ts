import type { Config } from "tailwindcss";
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      colors: {
        background: "hsl(var(--background))",
        purple: "hsl(var(--purple))",
        primary: "hsl(var(--primary))",
        secondary: "rgba(255,255,255,0.5)",
        border: "rgba(255, 255, 255, .15)",
        secondary_purple: "rgb(203, 163, 255)",
        'gradient-start': '#FFFFFF',
        'gradient-end': '#7218E5',
      },
      lineHeight: {
        3.5: "0.875rem",
        4.5: "1.125rem",
      },
      padding: {
        7.5: "1.875rem",
        15: "3.75rem",
      },
      borderRadius: {
        larger: "0.625rem",
      },
      screens: {
        medium: "810px",
        large: "1200px",
        xlarge: "1440px",
      },
      width: {
        "8xl": "1360px",
        "7.5": "1.875rem",
      },
      minWidth: {
        "8xl": "1360px",
      },
      maxWidth: {
        "8xl": "1360px",
      },
      height: {
        "7.5": "1.875rem",
      },
      fontSize: {
        larger: "1.375rem",
        "3.5xl": "2rem",
        "6.5xl": "4rem",
      }
    },
  },
  plugins: [addVariablesForColors],
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
