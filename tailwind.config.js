module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Courier New, Courier, monospace",
      },
      colors: {
        theme_purple: "#8D53FF",
        theme_pink: "#CA6BE6",
        theme_white: "#f8f8f8",
        theme_dark: "#1f1f1f",
        theme_red: "#FF6057",
        theme_yellow: "#FFBD2E",
        theme_green: "#27C93F",
        theme_lightgray: "#c9c9c9",
        theme_gray: "#8c8c8c",
        theme_terminal: "#27242f",
      },
      boxShadow: {
        custom: " 0 .5rem 1rem rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
