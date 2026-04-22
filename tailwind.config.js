export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'blc-pink': '#E8185A',
        'blc-cyan': '#00BFFF',
        'blc-black': '#0D0D0D',
        'blc-slate': '#0A1520',
        'blc-text': '#E8F4F8',
        'blc-muted': '#4A7A8A',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
