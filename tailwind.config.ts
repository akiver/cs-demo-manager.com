import { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}', './docs/**/*.mdx'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-home': 'radial-gradient(circle, #949494 0%, rgba(255, 255, 255, 0) 100%)',
      },
    },
  },
};

export default config;
