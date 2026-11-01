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
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        line: 'var(--line)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        accent: {
          DEFAULT: '#F9A318',
          hover: '#fba92e',
          ink: '#000000',
        },
      },
      borderRadius: {
        card: '10px',
        btn: '10px',
        panel: '16px',
        chip: '999px',
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
