/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'pw-gray-light': '#F3F3F3',
        'pw-gray-md': '#F2F4F7',
        'pw-gray-dark': '#667085',
        'pw-black': '#030303',
        'purple-light': '#EBE9FE',
        'purple-mid': '#9B8AFB',
        'purple-dark': '#6938EF',
      },
      boxShadow: {
        custom: '0px -3px 10px 0px rgba(0, 0, 0, 0.25)',
        highlight: '1px 1px 10px 0px rgba(105, 56, 239, 1)',
      },
    },
  },
  plugins: [],
}
