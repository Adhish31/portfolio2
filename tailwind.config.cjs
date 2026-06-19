module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00D9FF',
        'neon-purple': '#A855F7',
        'dark-bg': '#050816',
        'dark-secondary': '#0b1224',
        'dark-tertiary': '#121a34',
        'light-text': '#f3f8ff',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
        'space-mono': ['Space Mono', 'monospace'],
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'button-glow': 'button-glow 1.8s ease-in-out infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 30px rgba(0, 217, 255, 0.8)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%, 100%': { textShadow: '0 0 10px rgba(0, 217, 255, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(0, 217, 255, 1)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'button-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.4), 0 0 35px rgba(168, 85, 247, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 217, 255, 0.8), 0 0 50px rgba(168, 85, 247, 0.35)' },
        },
      },
      backdropBlur: {
        'xl': '20px',
      },
    },
  },
  plugins: [],
}
