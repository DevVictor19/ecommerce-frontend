import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#00c9a7',
          default: '#00afa6',
          dark: '#00949c',
        },
        secondary: {
          light: '#017a8b',
          default: '#266074',
          dark: '#2f4858',
        },
      },
    },
  },
  plugins: [],
};
export default config;
