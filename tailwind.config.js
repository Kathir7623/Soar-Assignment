module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: {
          400: "var(--blue_gray_400)",
          600: "var(--blue_gray_600)",
          800: "var(--blue_gray_800)",
          900: "var(--blue_gray_900)",
        },
        gray: {
          100: "var(--gray_100)",
          300: "var(--gray_300)",
          900: "var(--gray_900)",
          "100_01": "var(--gray_100_01)",
          "100_02": "var(--gray_100_02)",
          "100_03": "var(--gray_100_03)",
          "100_04": "var(--gray_100_04)",
          "300_cc": "var(--gray_300_cc)",
        },
        green: { 600: "var(--green_600)",
        },
        indigo: {
          100: "var(--indigo_100)",
          200: "var(--indigo_200)",
          300: "var(--indigo_300)",
          500: "var(--indigo_500)",
          700: "var(--indigo_700)",
          "300_02": "var(--indigo_300_02)",
          "600_01": "var(--indigo_600_01)",
        },
        red: {
          700: "var(--red_700)",
        },
        white: {
          a700: "var(--white_a700)",
          a700_26: "var(--white_a700_26)",
          a700_b2: "var(--white_a700_b2)",
        },
      boxShadow: {
        xs: "4px 4px 18px -2px #e6e3e7cc",
      },
      fontFamily: {inter: "Inter",lato: "Lato"},
      backgroundImage: { gradient: "linear-gradient(180deg, #ffffff26, #ffffff26)" },
      },
    },
    plugins: [require("@tailwindcss/forms")],
  };
