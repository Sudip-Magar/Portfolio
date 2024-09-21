/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'bg1': '#212428',
        'bg2':'#191B1E'
      },
      borderColor:{
        'mybord':'#32363B'
      },
      borderWidth:{
        'mywidth': '6px'
      },
      fontFamily:{
        'font':'font-family: "Poppins", system-ui'
      },
      colors:{
        'colo1':'#FF014F',
        'gra2':'#1e2024',
        'gra1':'#23272b',
        'bg2':'#212428'
      },
      boxShadow:{
        'cussha':'10px 10px 19px #1c1e22,-10px -10px 19px #262a2e',
      },
      fontSize:{
        'myfont':'48px'
      },
      width:{
        'mywidth': '30%',
        'w95':'98%',
        'w96':'96%',
        'w85':'85%',
        'w70':'70%',
        'w90':'90%',
        'w82':'82%',
        'w30':'33%',
        'w67':'67%'
      }
      

    },
  },
  plugins: [],
}

