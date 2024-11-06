/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-main-color": "rgba(var(--bg-from-color))",
        "bg-secondary-color": "rgba(var(--bg-to-color))",
        "sections-bg-1": "rgba(var(--sections-bg-1))",
        "sections-bg-2": "rgba(var(--sections-bg-2))",
        "elements-color-main": "rgba(var(--elements-color-main))",
        "redc": "rgba(var(--redc))",
        "yellowc": "rgba(var(--yellowc))",
        "purplec": "rgba(var(--purplec))",
        "logo-color": "rgba(var(--logo-color))"
      },
    },
  },
  plugins: [],
};
