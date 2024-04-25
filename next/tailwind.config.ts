import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'titillium-web': ['var(--titillium-web)'],
        lora: ['var(--lora)'],
        'roboto-mono': ['var(--roboto-mono)']
      }
    }
  },
  plugins: []
}

export default config
