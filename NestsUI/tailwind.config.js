/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-1": "var(--gradient-1)",
        "gradient-2": "var(--gradient-2)",
        "gradient-3": "var(--gradient-3)",
        "gradient-4": "var(--gradient-4)",
        "gradient-5": "var(--gradient-5)",
        "gradient-6": "var(--gradient-6)",
        "gradient-7": "var(--gradient-7)",
        "gradient-8": "var(--gradient-8)",
        "gradient-9": "var(--gradient-9)",
        "gradient-10": "var(--gradient-10)",
        "gradient-11": "var(--gradient-11)",
      },
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        "foreground-2": "rgb(var(--foreground-2) / <alpha-value>)",
        "foreground-2-hover": "rgb(var(--foreground-2-hover) / <alpha-value>)",
        "foreground-3": "rgb(var(--foreground-3) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        highlight: "rgb(var(--highlight) / <alpha-value>)",
        delete: "rgb(var(--delete) / <alpha-value>)",
        bitcoin: "rgb(var(--bitcoin) / <alpha-value>)",
        "off-white": "rgb(var(--off-white) / <alpha-value>)",
      },
    },
  },
  safelist: [
    {
      pattern: /bg-gradient-[\d]+/i,
    },
  ],
  plugins: [],
};
