import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cat: {
          orange: '#F97316',
          'orange-light': '#FED7AA',
          'orange-pale': '#FFF7ED',
          teal: '#0D9488',
          'teal-light': '#CCFBF1',
          'teal-pale': '#F0FDFA',
          cream: '#FFFBEB',
          yellow: '#FCD34D',
          pink: '#FB7185',
          dark: '#1C1917',
          brown: '#78350F',
          grey: '#44403C',
          'light-grey': '#E7E5E4',
          'mid-grey': '#A8A29E',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        cat: '16px',
        'cat-lg': '24px',
      },
      boxShadow: {
        cat: '0 8px 32px rgba(249, 115, 22, 0.12)',
        'cat-lg': '0 20px 60px rgba(249, 115, 22, 0.18)',
        teal: '0 8px 32px rgba(13, 148, 136, 0.12)',
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        wiggle: 'wiggle 2s ease-in-out infinite',
        blink: 'blink 4s ease-in-out infinite',
        tailWag: 'tailWag 1s ease-in-out infinite',
        purr: 'purr 2s ease-in-out infinite',
        slideUp: 'slideUp 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config
