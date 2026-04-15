import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink:       '#0C0C0D',
        'ink-1':   '#111113',
        'ink-2':   '#161618',
        'ink-3':   '#1D1D20',
        seam:      '#272729',
        'seam-2':  '#313134',
        dust:      '#606062',
        mist:      '#909090',
        fog:       '#B8B8B2',
        paper:     '#EFEFEA',
        gold:      '#C9A84C',
        'gold-hi': '#D4B668',
        'gold-lo': 'rgba(201,168,76,0.14)',
        'gold-line':'rgba(201,168,76,0.28)',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        mono:  ['var(--font-geist-mono)', 'Courier New', 'monospace'],
        sans:  ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { wrap: '1280px' },
      borderRadius: { qr: '2px' },
    },
  },
  plugins: [],
}

export default config
