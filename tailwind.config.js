/** @type {import('tailwindcss').Config} */
// export default {
export default {
  content: ["./src/**/*.{jsx,ts,js}"],
  theme: {
    extend: {
      animation: {
        "flow-circle": "effectCreateActive 3s linear",
      },
      keyframes: {
        effectCreateActive: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
      },
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
        "15vw": "15vw",
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
      boxShadow: {
        "3xl": [
          "1px 2px 4px rgba(0, 0, 0, 0.267)",
          "-1px 3px 4px rgba(0, 0, 0, 0.267)",
        ],
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
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
        "adr-385": "385px",
        "galaxyFold-280": "280px",
      },
    },
  },
  plugins: [],
};
