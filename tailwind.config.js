/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0066ff',
        'accent-cyan': '#00d9ff',
        'accent-yellow': '#ffd700',
        'bg-dark': '#000000',
        'text-muted': '#b0b8c8',
      },
      fontFamily: {
        'mono': ["'Space Mono'", 'monospace'],
        'sans': ["'Sora'", 'sans-serif'],
      },
      backdropFilter: {
        'blur-30': 'blur(30px)',
        'blur-20': 'blur(20px)',
      },
      zIndex: {
        '50': '50',
        '100': '100',
        '9999': '9999',
      },
    },
  },
  plugins: [],
}
