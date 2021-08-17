module.exports = {
  purge: {
    mode: "all",
    preserveHtmlElements: false,
    content: ["./*.html"],
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "strong-cyan": "hsl(172, 67%, 45%)",
        "very-dark-cyan": "hsl(183, 100%, 15%)",
        "dark-grayish-cyan-1": "hsl(186, 14%, 43%)",
        "dark-grayish-cyan-2": "hsl(184, 14%, 56%)",
        "light-grayish-cyan-1": "hsl(185, 41%, 84%)",
        "light-grayish-cyan-2": "hsl(189, 41%, 97%)",
      },
      fontFamily: {
        "space-mono": ["Space Mono", "monospace"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
