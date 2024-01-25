/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'] , // or any globs of files  you'd like to scan, 
  theme: {
    screens: {
      xs: '376px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        blue: 'hsl(246, 80%, 60%)',
        lightRedWork: 'hsl(15, 100%, 70%)',
        softBluePlay: 'hsl(195, 74%, 62%)',
        lightRedStudy: 'hsl(348, 100%, 68%)',
        limeGreenExercise: 'hsl(145, 58%, 55%)',
        violetSocial: 'hsl(264, 64%, 52%)',
        softOrangeSelfcare: 'hsl(43, 84%, 65%)',
        veryDarkBlue: 'hsl(226, 43%, 10%)',
        darkBlue: 'hsl(235, 46%, 20%)',
        desaturatedBlue: 'hsl(235, 45%, 61%)',
        bluePurple: 'hsl(253, 54%, 43%)',
        paleBlue: 'hsl(236, 100%, 87%)',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
      fontSize: {
        lg: '18px',
      },
      fontWeight: {
        extrabold: '300',
        black: '400',
        extrablack: '500',
      },
      zIndex: {
        '-1': '-1',
        '0': '0',
        '20': '20',
      },
    },
  },
  plugins: [],
}
  
