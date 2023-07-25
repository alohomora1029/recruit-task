/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: "#4CB3F8",
        buttonNormal: "#B3B3B3",
        buttonSecondary: "#4CB3F8",
      },
      borderColor: {
        main: "#4CB3F8",
      },
      textColor: {
        black: "#333333",
        light: "#4D4D4D",
        main: "#4CB3F8",
      },
      backgroundColor: {
        light: "#F5F8FA",
        dark: "#C8E6FA",
      },
      fontSize: {
        title: "24px",
        body: "16px",
        caption: "12px",
        minimum: "10px",
      },
      },
    },
    plugins:[],
  }
