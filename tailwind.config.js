const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      colors: {
        'primary-blue': '#0052cc',
        'accent-cyan': '#4db4d2',
        'accent-yellow': '#c49600',
        'accent-purple': '#c44ce6',
        'accent-light-blue': '#e4effd',
        'accent-light-purple': '#e8d5f2',
        'accent-light-pink': '#f5d5e8',
        'accent-mint': '#d5f0e8',
        'accent-light-coral': '#f5ddd5',
        'accent-light-rose': '#f2e0d5',
        'bg-dark': '#000000',
        'text-muted': '#b0b8c8',
      },
      backgroundImage: {
        'gradient-biomedical-1': 'linear-gradient(135deg, #c44ce6 0%, #6b5bfa 50%, #4db4d2 100%)',
        'gradient-biomedical-2': 'linear-gradient(135deg, #e8d5f2 0%, #d5f0e8 50%, #e4effd 100%)',
        'gradient-biomedical-3': 'linear-gradient(135deg, #f0caf5 0%, #d5f0e8 50%, #f5ddd5 100%)',
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
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
