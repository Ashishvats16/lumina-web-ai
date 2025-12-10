// lib/constants/ui.ts

// Button variants and sizes
export const BUTTON_STYLES = {
  base: 'px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2',
  
  variants: {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    outline: 'border-2 border-gray-300 bg-white text-gray-900 hover:border-gray-400 focus:ring-gray-500',
    success: 'bg-success-500 text-white hover:bg-success-600 focus:ring-success-500',
    danger: 'bg-danger-500 text-white hover:bg-danger-600 focus:ring-danger-500',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
  },
  
  sizes: {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-3.5 text-lg',
  },
} as const;

// Card styles
export const CARD_STYLES = {
  base: 'bg-white rounded-xl border border-gray-200 transition-all duration-200',
  hover: 'hover:shadow-lg hover:border-gray-300',
  shadow: 'shadow-card',
  body: 'p-6',
} as const;

// Input styles
export const INPUT_STYLES = {
  base: 'w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all duration-200 text-base',
  error: 'border-danger-500 focus:ring-danger-500',
  disabled: 'bg-gray-100 cursor-not-allowed opacity-60',
  label: 'block text-sm font-medium text-gray-700 mb-2',
} as const;

// Badge styles
export const BADGE_STYLES = {
  base: 'px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1',
  
  variants: {
    success: 'bg-success-100 text-success-700',
    warning: 'bg-warning-100 text-warning-700',
    danger: 'bg-danger-100 text-danger-700',
    primary: 'bg-primary-100 text-primary-700',
    gray: 'bg-gray-100 text-gray-700',
  },
} as const;

// Status colors for video states
export const STATUS_STYLES = {
  completed: 'bg-success-100 text-success-700',
  processing: 'bg-primary-100 text-primary-700',
  uploading: 'bg-warning-100 text-warning-700',
  failed: 'bg-danger-100 text-danger-700',
  pending: 'bg-gray-100 text-gray-700',
} as const;

// Container styles
export const CONTAINER_STYLES = {
  base: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  narrow: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
  wide: 'max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8',
  full: 'w-full px-4 sm:px-6 lg:px-8',
} as const;

// Section padding
export const SECTION_STYLES = {
  padding: 'py-16 sm:py-20 lg:py-28',
  paddingSmall: 'py-12 sm:py-16 lg:py-20',
  paddingLarge: 'py-20 sm:py-24 lg:py-32',
} as const;

// Animation styles
export const ANIMATION_STYLES = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  transition: 'transition-all duration-200',
  transitionSlow: 'transition-all duration-300',
} as const;

// Spacing
export const SPACING = {
  section: {
    sm: 'py-12 sm:py-16 lg:py-20',
    md: 'py-16 sm:py-20 lg:py-28',
    lg: 'py-20 sm:py-24 lg:py-32',
  },
  container: {
    sm: 'px-4 sm:px-6',
    md: 'px-4 sm:px-6 lg:px-8',
  },
} as const;