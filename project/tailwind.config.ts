// next.config.js

const withMT = require("@material-tailwind/react/utils/withMT");
const daisyui = require("daisyui");

module.exports = withMT({
  // Your original Tailwind CSS configuration
  // Ensure you're using the correct setup for Tailwind CSS
  // This example assumes you're using JIT mode
  mode: 'jit',
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [daisyui],
});
