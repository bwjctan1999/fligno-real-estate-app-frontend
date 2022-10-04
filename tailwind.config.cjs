/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        border: "inset 0px 0px 0px 2px",
      },
    },
    colors: {
      transparent: "transparent",
      BGPrimary: "#FFFFFF",
      BGSecondary: "#F5F6FC",
      TextPrimary: "#000000",
      TextSecondary: "#6E6E6E",
      TextTertiary: "#373F41",
      TextOnDark: "#FFFFFF",
      BtnPrimary: {
        start: "#396AFC",
        end: "#2948FF",
      },
      BtnSecondary: "#6F6F6F",
      BtnTertiary: {
        start: "#FF4A2A",
        end: "#FF2600",
      },
      BtnQuarternary: {
        start: "#FCFCFC",
        end: "#F1F1F1",
      },
      BtnQuanary: {
        start: "#54C058",
        end: "#4CAF50",
      },
      LinePrimary: "#F3F3F3",
      LineSecondary: "#D9D9D9",
      Highlight: "#7BFF4D",
      Skeleton: {
        start: "#c2cfd6",
        end: "#F0F3F5",
      },
    },
    //extend: {},
  },
  plugins: [],
};
