import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

import { fontSize } from './tailwind-settings/fontSize';
import { screens } from './tailwind-settings/screens';
import { settings } from './tailwind-settings/settings';
import { spaces } from './tailwind-settings/spaces';

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      screens,
      fontSize,
      minHeight: spaces.height,
      height: spaces.height,
      minWidth: spaces.width,
      width: spaces.width,
      maxHeight: spaces.height,
      maxWidth: spaces.width,
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      spacing: {
        half: '50%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        ...settings.extendedLength,
      },
      borderRadius: {
        half: '50%',
        inherit: 'inherit',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      content: {
        none: '""',
      },
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(({ addVariant }) => {
      addVariant('optional', '&:optional');
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('hocus-visible', ['&:hover', '&:focus-visible']);
      addVariant('group-hocus', [':merge(.group):hover &', ':merge(.group):focus &']);
      addVariant('group-hocus-visible', [
        ':merge(.group):hover &',
        ':merge(.group):focus-visible &',
      ]);
      addVariant('inverted-colors', '@media (inverted-colors: inverted)');
    }),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.no-scrollbar': {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
          '-webkit-scrollbar': 'none',
        },
      });
    }),
  ],
} satisfies Config;

export default config;
