import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        surface: '#141414',
        line: '#2b2b2b',
        text: '#ffffff',
        mute: '#a8a8a8',
        orange: {
          DEFAULT: '#f9a318',
          hover: '#fba92e',
        },
      },
      fontFamily: {
        display: ['var(--display)', 'var(--font-sora)', 'Sora', 'system-ui', 'sans-serif'],
        sans: ['var(--body)', 'var(--font-ibm-plex-sans)', 'IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['var(--mono)', 'var(--font-ibm-plex-mono)', 'IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
