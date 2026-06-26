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
        bg: '#0a0f1a',
        surface: '#111827',
        primary: '#3b82f6',
        cyan: '#06b6d4',
        success: '#10b981',
        warning: '#f59e0b',
        purple: '#8b5cf6',
        pink: '#ec4899',
        'text-primary': '#f8fafc',
        'text-secondary': '#94a3b8',
        'text-muted': '#64748b',
        'border-base': 'rgba(255, 255, 255, 0.07)',
        'border-hover': 'rgba(59, 130, 246, 0.25)',
        'surface-glass': 'rgba(17, 24, 39, 0.55)',
      },
      fontFamily: {
        inter: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        geist: ['Geist', 'Inter', 'sans-serif'],
      },
      backdropBlur: {
        glass: '12px',
        sidebar: '20px',
      },
      width: {
        sidebar: '280px',
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s infinite',
        'pulse-glow': 'pulse-glow 2s infinite',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 8px rgba(16, 185, 129, 0.6)' },
          '50%': { boxShadow: '0 0 16px rgba(16, 185, 129, 0.9)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
