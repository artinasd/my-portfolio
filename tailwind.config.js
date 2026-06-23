/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Vazirmatn', 'ui-sans-serif', 'system-ui'],
        body: ['Vazirmatn', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        ink: '#ffffff',
        moss: '#10b981',
        sage: '#3f3f46',
        mint: '#10b981',
        pearl: '#09090b',
        amber: '#f59e0b',
        coral: '#ef4444',
        slate: {
          950: '#030712',
          900: '#0f172a',
          800: '#1e293b'
        },
        zinc: {
          950: '#09090b',
          900: '#18181b',
          800: '#27272a'
        }
      },
      boxShadow: {
        glow: '0 0 50px -12px rgba(16, 185, 129, 0.25)',
        card: '0 0 0 1px rgba(255, 255, 255, 0.05), 0 20px 50px rgba(0, 0, 0, 0.5)'
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        orbit: 'orbit 18s linear infinite',
        reveal: 'reveal 900ms cubic-bezier(.2,.8,.2,1) both',
        marquee: 'marquee 28s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' }
        },
        orbit: {
          from: { transform: 'rotate(0deg) translateX(10px) rotate(0deg)' },
          to: { transform: 'rotate(360deg) translateX(10px) rotate(-360deg)' }
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(24px) scale(.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(50%)' }
        }
      }
    }
  },
  plugins: []
}
