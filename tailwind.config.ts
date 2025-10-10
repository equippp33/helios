// tailwind.config.ts

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        // Define the 'slide-left' animation keyframes
        'slide-left': {
          // 0% (Start): Move the element 100% of its own width to the right (off-screen)
          '0%': { transform: 'translateX(100%)' }, 
          // 100% (End): Move the element 100% of its own width to the left (off-screen)
          '100%': { transform: 'translateX(-100%)' }, 
        },
      },
      animation: {
        // Apply the keyframes with a duration, speed, and iteration count
        'move': 'slide-left 10s linear infinite', // 25s duration, linear speed, infinite loop
      },
    },
  },
  plugins: [],
};

export default config;