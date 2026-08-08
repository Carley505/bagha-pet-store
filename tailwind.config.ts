import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#67CECD',
        'primary-dark': '#4AACAB',
        'near-black': '#1A1A1A',
        'warm-gray': '#888888',
        'off-white': '#FDFDFB',
        sand: '#F5F1EA',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        script: ['Playfair Display', 'serif'],
        sans: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
