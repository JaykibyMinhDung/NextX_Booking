/** @type {import('tailwindcss').Config} */
// export default {
export default {
  content: ["./src/**/*.{jsx,ts,js}"],
  theme: {
    extend: {
      spacing: {
        "10%": "10%",
        "12%": "12%",
        "15%": "15%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "33%": "33%",
        "37%": "37%",
        "35%": "35%",
        "40%": "40%",
        "88%": "88%",
        "90%": "90%",
        "100%": "100%",
        "10vh": "10vh",
        "20vh": "20vh",
        "12vh": "12vh",
        "13.3vh": "13.3vh",
        "15vh": "15vh",
        "25vh": "25vh",
        "30vh": "30vh",
        "30.8vh": "30.8vh",
        "33vh": "33vh",
        "35vh": "35vh",
        "40vh": "40vh",
        "100px": "28rem",
      },
      backgroundColor: {
        "blue-transparent": "#D16121",
        "orange-navbar": "#f67227",
        "search-white": "#FDE3D4",
      },
      textColor: {
        "orange-navbar": "#f67227",
      },
      colors: {
        "orange-navbar": "#f67227",
      },
      screens: {
        "adr-300": "300px",
        "galaxyFold-280": "280px",
      },
    },
  },
  plugins: [],
};
