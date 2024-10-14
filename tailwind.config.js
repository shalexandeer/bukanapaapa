import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      colors: {
        primary: "#88C730",
        secondary: "#FFA500",
        backgroundMain: "#F0F1F3",
        textGrayColor: "#979797",
        textBlackColor: "#1D1D1D",

        // Color Brand
        brandColor: "#88C730",
        brandColorLight: "#FFFFFF",

        // Color System
        successColor: "#027A48",
        successGreenLight: "#ECFDF3",
        errorColor: "#B42318",
        errorRedLight: "#FEF3F2",

        // semantic
        bgPrimary: "#FFFFFF",
        bgPrimaryDark: "#0E1217",

        bgSecondary: "#EEEEEE",
        bgSecondaryBlack: "#161A21",
        bgTertiary: "#444444",

        bgSuccess: "#ECFDF3",
        bgError: "#FEF3F2",

        // border
        borderPrimary: "#000000",
        borderSecondary: "#AAAAAA",
        borderPrimaryDark: "#444444",
        borderSuccess: "#027A48",
        borderError: "#B42318",

        // text
        textPrimary: "#141414",
        textPrimaryDark: "#C0C6D6",
        textSecondary: "#AAAAAA",
        textSecondaryDark: "#5D6B7C",
        textSuccess: "#027A48",
        textError: "#B42318",

        // link
        linkPrimary: "#000000",
        linkSecondary: "#666666",
        linkAlternate: "#FFFFFF",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["dark", "forest"],
    logs: false,
  },
};
