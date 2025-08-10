import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0054d3', // Science Blue
          50: '#eff8ff',
          100: '#dcefff',
          200: '#b9e3ff',
          300: '#85d3ff',
          400: '#4bbbff',
          500: '#20a2ff',
          600: '#0086ff',
          700: '#0068eb',
          800: '#0054d3', // Primary
          900: '#003d9c',
        },
        secondary: {
          DEFAULT: '#f97230', // Crusta
          50: '#fff4ed',
          100: '#ffe5d4',
          200: '#ffc8a8',
          300: '#ffa271',
          400: '#ff7038',
          500: '#fe4f18',
          600: '#f97230', // Secondary
          700: '#d4380a',
          800: '#b02d0b',
          900: '#8f2710',
        },
        neutral: {
          DEFAULT: '#737373', // Gray
          50: '#f9f9f9',
          100: '#f1f1f1',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#737373', // Neutral
          800: '#5a5a5a',
          900: '#4a4a4a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Source Serif 4', 'Georgia', 'Times New Roman', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#374151',
            maxWidth: 'none',
            lineHeight: '1.7',
            h1: {
              color: '#111827',
              fontWeight: '700',
              lineHeight: '1.2',
            },
            h2: {
              color: '#111827',
              fontWeight: '600',
              lineHeight: '1.3',
            },
            h3: {
              color: '#111827',
              fontWeight: '600',
              lineHeight: '1.4',
            },
          }
        }
      }
    },
  },
  plugins: [],
} satisfies Config;