import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inknut': ['Inknut Antiqua', 'sans-serif'],
        'Raleway': ["Raleway", 'sans-serif'],
      },
      backgroundImage: {
          'cfef00': '#F1B533',
          'c4e201': '#F1B534',
      },
      scale: {
        'zoomIMG': '0.75',
      }
    },
  },
  plugins: [],
};

export default config;
