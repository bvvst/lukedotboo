const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        space: ["SpaceGrotesk"],
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-image-rendering")(),
    plugin(
      function ({ matchUtilities, theme }) {
        matchUtilities(
          {
            "squircle-radius": (value) => ({
              "--squircle-radius": value,
            }),
          },
          { values: theme("squircleRadius") }
        );
      },
      {
        theme: {
          squircleRadius: {
            sm: "2px" /* 2px */,
            md: "4px",
            lg: "6px",
            xl: "8px",
            "2xl": "12px",
            "3xl": "16px",
            "4xl": "24px",
          },
        },
      }
    ),
    plugin(
      function ({ matchUtilities, theme }) {
        matchUtilities(
          {
            "squircle-smooth": (value) => ({
              "--squircle-smooth": value,
            }),
          },
          { values: theme("squircleSmooth") }
        );
      },
      {
        theme: {
          squircleSmooth: {
            sm: "0.2",
            md: "0.6",
            lg: "0.8",
            xl: "1",
          },
        },
      }
    ),
    // plugin(
    //   function ({ matchUtilities, theme }) {
    //     matchUtilities(
    //       {
    //         "squircle-outline": (value) => ({
    //           "--squircle-outline": value,
    //         }),
    //       },
    //       { values: theme("squircleOutline") }
    //     );
    //   },
    //   {
    //     theme: {
    //       squircleOutline: {
    //         1: "1px",
    //         2: "2px",
    //         3: "3px",
    //         4: "4px",
    //       },
    //     },
    //   }
    // ),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".squircle": {
          "-webkit-mask-image": "paint(squircle)",
          "mask-image": "paint(squircle)",
        },
      });
    }),
  ],
};
