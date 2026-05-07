import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // All cat color utilities used dynamically
    'bg-orange-500', 'bg-orange-100', 'bg-orange-50',
    'text-orange-500', 'text-orange-600', 'text-orange-700',
    'border-orange-200', 'border-orange-300',
    'from-orange-500', 'to-orange-600',
    'bg-teal-600', 'bg-teal-100', 'bg-teal-50',
    'text-teal-600', 'text-teal-700',
    'border-teal-200',
    'from-teal-600', 'to-teal-700',
    'bg-purple-100', 'bg-purple-50',
    'text-purple-600',
    'border-purple-200',
    'from-purple-500', 'to-purple-700',
    'bg-amber-100', 'bg-amber-50',
    'text-amber-600', 'text-amber-700',
    'border-amber-200',
    'from-amber-500', 'to-orange-600',
    'bg-green-100', 'bg-green-50',
    'text-green-600',
    'border-green-200',
    'from-green-500', 'to-teal-600',
    'bg-blue-100', 'bg-blue-50',
    'text-blue-600',
    'border-blue-200',
    'from-blue-500', 'to-indigo-600',
    'bg-sky-50', 'text-sky-600', 'border-sky-200',
    'bg-cyan-50', 'text-cyan-600', 'border-cyan-200',
    'md:col-span-2',
    'animate-float', 'animate-wiggle', 'animate-purr',
    'animate-blink', 'animate-tailWag',
    'translate-y-2', 'rotate-45', '-translate-y-2', '-rotate-45',
    'opacity-0', 'scale-x-0',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          600: '#0d9488',
          700: '#0f766e',
        },
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        purr: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
        },
        blink: {
          '0%, 90%, 100%': { transform: 'scaleY(1)' },
          '95%': { transform: 'scaleY(0.05)' },
        },
        tailWag: {
          '0%, 100%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(15deg)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        wiggle: 'wiggle 0.5s ease-in-out',
        purr: 'purr 2s ease-in-out infinite',
        blink: 'blink 4s ease-in-out infinite',
        tailWag: 'tailWag 1s ease-in-out infinite',
        slideUp: 'slideUp 0.6s ease forwards',
        fadeInDown: 'fadeInDown 0.2s ease forwards',
      },
      boxShadow: {
        orange: '0 8px 32px rgba(249,115,22,0.2)',
        'orange-lg': '0 20px 60px rgba(249,115,22,0.25)',
        teal: '0 8px 32px rgba(13,148,136,0.2)',
      },
    },
  },
  plugins: [],
}

export default config