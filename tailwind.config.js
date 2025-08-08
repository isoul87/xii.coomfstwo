/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      // Menambahkan definisi keyframes untuk animasi marquee
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      // Menambahkan utility class untuk menggunakan animasi marquee
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      colors: {
        primary: '#106ebe',
        secondary: '#0ffcbe',
        dark: '#0f172a'
      },
      screens: {
        '2xl': '1320px'
      },
    },
  },
  plugins: [ 
    // Tambahkan plugin jika Anda menggunakan, misalnya: plugin 'paused'
    function ({ addVariant }) {
        addVariant('paused', '&:hover');
    },
  ],
}

