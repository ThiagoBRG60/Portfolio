import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textPrimary: "#ffffff",
        textSecondary: "#AAA6C3",
        highlight: "#915eff",
        background: "#050816",
        cardsbg: '#070C20'
      },
      backgroundImage: {
        "intro-section-bg": "url(/backgrounds/intro-section-bg.avif)",
        "peaks-detail-bg": "url(/backgrounds/peaks-detail-bg.svg)",
        "contact-waves-bg": "url(/backgrounds/contact-section-bg.avif)"
      }
    },
    screens: {
      'xxs': '375px',
      'xs': '420px',
      ...defaultTheme.screens
    },
    plugins: [],
  },
};
export default config;
