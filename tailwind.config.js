// /** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      "text_color-header": "rgba(255, 255, 255, 0.7)",
      "bg-item": "background: linear-gradient(80deg, #000428, #004e92)",
    },
  },
  fontFamily: {
    body: ['"Roboto"'],
  },
};
export const plugins = [];
