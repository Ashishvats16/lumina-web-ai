// lib/constants/typography.ts

export const TYPOGRAPHY = {
  // Font Families
  fontFamily: {
    primary: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
  },

  // Font Weights
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Font Sizes
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
  },

  // Line Heights
  lineHeight: {
    tight: '1.2',
    normal: '1.5',
    relaxed: '1.75',
  },
} as const;

// Tailwind class name helpers
export const TEXT_STYLES = {
  // Headings
  h1: 'text-5xl font-bold leading-tight text-gray-900',
  h2: 'text-4xl font-bold leading-tight text-gray-900',
  h3: 'text-3xl font-bold leading-tight text-gray-900',
  h4: 'text-2xl font-bold leading-tight text-gray-900',
  h5: 'text-xl font-semibold leading-tight text-gray-900',
  h6: 'text-lg font-semibold leading-tight text-gray-900',

  // Body Text
  body: 'text-base leading-normal text-gray-700',
  bodyLarge: 'text-lg leading-normal text-gray-700',
  bodySmall: 'text-sm leading-normal text-gray-600',

  // Labels & Captions
  label: 'text-sm font-medium text-gray-700',
  caption: 'text-xs leading-normal text-gray-500',

  // Links
  link: 'text-primary-600 hover:text-primary-700 underline transition-colors',
  linkMuted: 'text-gray-600 hover:text-gray-900 transition-colors',

  // Special
  gradient: 'text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400',
} as const;