import tailwindScrollbarHide from "tailwind-scrollbar-hide";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [tailwindScrollbarHide],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: "#1C1E1F", // Main primary color
        onPrimary: "#FFFFFF", // Text on Primary

        // Secondary colors
        secondary: "#1C1E1F", // Secondary color linked to Primary
        onSecondary: "#86ABFF", // Text on Secondary

        // Tertiary colors
        tertiary: "#1C1E1F", // Tertiary color linked to Primary
        onTertiary: "#a7a7a7", // Text on Tertiary

        // Background colors
        background: "#1C1D1F", // Background color
        onBackground: "#5b5a5a", // Text on Background

        // Surface colors
        surface: "#1C1D1F", // Surface color
        onSurface: "#FFFFFF", // Text on Surface

        // Error colors
        error: "#B3261E", // Error color
        onError: "#FFFFFF", // Text on Error

        // Additional colors
        outline: "#5b5a5a", // Outline color
        shadow: "#FFFFFF", // Shadow color
        scrim: "#1C1E1F", // Scrim color

        // Resume Primary colors
        primaryResume: "#252F51", // Main primary color
        onPrimaryResume: "#e8edff", // Text on Primary

        // Resume Secondary colors
        secondaryResume: "#FFFFFF", // Secondary color linked to Primary
        onSecondaryResume: "#1C1E1F", // Text on Secondary
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontWeight: {
        thin: 100,
        light: 300,
        regular: 400,
        semiBold: 600,
      },
      fontSize: {
        // Display styles - font-size / line-height
        "display-large": ["57px", "64px"],
        "display-medium": ["45px", "52px"],
        "display-small": ["36px", "44px"],

        // Headline styles
        "headline-large": ["56px", "90px"],
        "headline-large-mobile": [
          "36px",
          {
            lineHeight: "70px",
          },
        ],
        "headline-medium": [
          "36px",
          {
            lineHeight: "48px",
            fontWeight: 600,
          },
        ],
        "headline-medium-mobile": [
          "28px",
          {
            lineHeight: "48px",
            fontWeight: 600,
          },
        ],
        "headline-small": [
          "22px",
          {
            lineHeight: "56px",
            fontWeight: 100,
          },
        ],
        "headline-small-mobile": [
          "18px",
          {
            lineHeight: "56px",
            fontWeight: 100,
          },
        ],

        // Body styles
        "body-large": ["16px", "24px"],
        "body-medium": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: 300,
          },
        ],
        "body-small": ["14px", "16px"],

        // Label styles
        "label-large": ["24px", "auto"],
        "label-medium": [
          "16px",
          {
            lineHeight: "22px",
            fontWeight: 100,
          },
        ],
        "label-medium-mobile": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: 100,
          },
        ],
        "label-small": ["14px", "16px"],

        // Title styles
        "title-large": ["24px", "auto"],
        "title-large-mobile": ["22px", "auto"],
        "title-medium": [
          "16px",
          {
            lineHeight: "auto",
            fontWeight: 100,
          },
        ],
        "title-small": [
          "14px",
          {
            lineHeight: "auto",
            fontWeight: 100,
          },
        ],
      },
      boxShadow: {
        "shadow-sm": "box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "shadow-box":
          -"shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "shadow-md":
          "box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        "shadow-lg":
          "box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        "shadow-xl":
          "box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "shadow-2xl": "box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25)",
        "shadow-inner": "box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        "shadow-none": "box-shadow: 0 0 #0000",
      },
    },
  },
};
