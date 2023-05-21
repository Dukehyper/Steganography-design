/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "seccondary-30": "#4285f4",
        black: "#000",
        gray: {
          "100": "#1e1e1e",
          "200": "rgba(0, 0, 0, 0.69)",
        },
        "primary-60": "#fff",
        gainsboro: "#d9d9d9",
      },
      fontFamily: {
        "circular-std": "'Circular Std'",
        inter: "Inter",
      },
      borderRadius: {
        xl: "20px",
        "8xs": "5px",
        "11xl": "30px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      lg: "18px",
      "29xl": "48px",
      "13xl": "32px",
      "56xl": "75px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
