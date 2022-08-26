/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      BGPrimary: 'FFFFFF',
      BGSecondary: 'F5F6FC',
      TextPrimary: '000000',
      TextSecondary: '6E6E6E',
      TextTertiary: '373F41',
      TextOnDark: 'FFFFFF',
      BtnPrimary: {
        start: '396AFC',
        end: '2948FF',
      },
      BtnSecondary: '6F6F6F',
      BtnTertiary: {
        start: 'FF4A2A',
        end: 'FF2600',
      },
      BtnQuarternary: {
        start: 'FCFCFC',
        end: 'F1F1F1',
      },
      BtnQuanary: {
        start: '1BD1C3',
        end: '32D971',
      },
      LinePrimary: 'F3F3F3',
      LineSecondary: 'D9D9D9',
      Highlight: '7BFF4D',
    },
    //extend: {},
  },
  plugins: [],
}
