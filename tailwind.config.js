module.exports = {
  prefix: "",
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "login-illustration": "url('assets/login/login-illustration.svg')",
      },
      colors: {
        custom: {
          100: "#E5EBF8",
          200: "#343434",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
};
