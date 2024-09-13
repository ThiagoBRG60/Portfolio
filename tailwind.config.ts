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
      },
      animation: {
        fadeInMove: 'fadeInMove 1.5s ease',
        fadeIn: 'fadeIn 2s ease',
        fadeInScale: 'fadeInScale 1.5s forwards'
      },
      keyframes: {
        fadeInMove: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-100%)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0%)'
          }
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          }
        },
        fadeInScale: {
          '0%': {
            transform: 'scale(0.5)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        }
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
