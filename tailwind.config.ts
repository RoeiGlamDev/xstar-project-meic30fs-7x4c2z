import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        glamOrange: '#FFA500', // Custom orange for GlamCS
        glamWhite: '#FFFFFF', // Custom white for GlamCS
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
});