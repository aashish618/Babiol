import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f5f1ed',
        foreground: '#1a1a1a',
        primary: '#2c5282',
        secondary: '#4a90a4',
        accent: '#10b981',
        muted: '#e5e1d8',
        border: '#d4cfc0',
      },
    },
  },
  plugins: [],
}
export default config
