module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#64ffda',
        dark: '#0a192f',
        darker: '#1a1f28',
        light: '#ffffff',
        darkText: '#8892b0',
        lightText: '#4a5568',
        border: '#2d3748',
      },
    },
  },
  plugins: [],
}
