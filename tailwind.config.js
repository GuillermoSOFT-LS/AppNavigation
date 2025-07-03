/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app","./Components/", "./presentation/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
          'work-black': ['WorkSans-Black', 'sans-serif'],
          'work-light': ['WorkSans-Light', 'sans-serif'],
          'work-medium': ['WorkSans-Medium', 'sans-serif'],
      },
        colors: {
          WB: {
              W: '#ffffff',
              G: '#a69e9e',
              B: '#222222'
          },
          primary: '#49129C',
            secondary: {
               DEFAULT: '#B40086',
                100: '#C51297',
                200: '#831266',
            },
            tertiary: '#EF2967',
        }
    },
  },
  plugins: [],
}