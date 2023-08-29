/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./core/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#295FA6",
        "secondary-blue": "#CCE3FF",
        "primary-text": "#414141",
        "secondary-text": "#9B9B9B",
        "grey-accent": "#D9D9D9",
      },
      backgroundImage: {
        "gradient-45": "linear-gradient(45deg, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
