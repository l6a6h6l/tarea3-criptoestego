/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          900: '#0a0e27',
          800: '#1a1f3a'
        },
        // Identidad UEES (acentos institucionales)
        uees: {
          DEFAULT: '#6B3852',
          deep:    '#4A2438',
          light:   '#8B4D6B'
        },
        gold: {
          DEFAULT: '#D4A574',
          dim:     '#A8835D'
        },
        cream: '#F5E6D3',
        // Temáticos por concepto (mantenidos)
        crypto: {
          DEFAULT: '#A855F7',
          glow: 'rgba(168, 85, 247, 0.35)'
        },
        stego: {
          DEFAULT: '#22C55E',
          glow: 'rgba(34, 197, 94, 0.35)'
        },
        cyber: {
          DEFAULT: '#06B6D4',
          glow: 'rgba(6, 182, 212, 0.35)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        serif: ['Georgia', '"Times New Roman"', 'ui-serif', 'serif']
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 24px rgba(168, 85, 247, 0.35)' },
          '50%': { boxShadow: '0 0 48px rgba(168, 85, 247, 0.7)' }
        },
        'pulse-uees': {
          '0%, 100%': { boxShadow: '0 0 24px rgba(107, 56, 82, 0.40)' },
          '50%':      { boxShadow: '0 0 48px rgba(212, 165, 116, 0.55)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        'pulse-uees': 'pulse-uees 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 2.5s linear infinite',
        'shimmer': 'shimmer 3s linear infinite'
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(168,85,247,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.06) 1px, transparent 1px)',
        'radial-purple':
          'radial-gradient(circle at 20% 10%, rgba(168, 85, 247, 0.18), transparent 50%)',
        'radial-green':
          'radial-gradient(circle at 80% 90%, rgba(34, 197, 94, 0.16), transparent 55%)',
        'radial-uees':
          'radial-gradient(ellipse at top, rgba(107, 56, 82, 0.28) 0%, transparent 60%)'
      }
    }
  },
  plugins: []
}
