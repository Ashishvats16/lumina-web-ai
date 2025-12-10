// lib/constants/colors.ts

export const COLORS = {
  // Primary Colors
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },

  // Success Colors
  success: {
    50: '#ecfdf5',
    100: '#d1fae5',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
  },

  // Warning Colors
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
  },

  // Danger Colors
  danger: {
    50: '#fef2f2',
    100: '#fee2e2',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
  },

  // Gray Scale
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },

  // Backgrounds
  background: {
    primary: '#ffffff',
    secondary: '#f9fafb',
    tertiary: '#f3f4f6',
  },

  // Gradients
  gradient: {
    primary: 'linear-gradient(to right, #3b82f6, #60a5fa)',
    heroText: {
      from: '#2563eb',
      to: '#60a5fa',
    },
  },
} as const;

// Tailwind class name helpers for backgrounds
export const BG_STYLES = {
  primary: 'bg-white',
  secondary: 'bg-gray-50',
  tertiary: 'bg-gray-100',
  
  success: 'bg-success-500',
  warning: 'bg-warning-500',
  danger: 'bg-danger-500',
  
  primaryLight: 'bg-primary-50',
  successLight: 'bg-success-50',
  warningLight: 'bg-warning-50',
  dangerLight: 'bg-danger-50',
} as const;

// Tailwind class name helpers for text colors
export const TEXT_COLORS = {
  primary: 'text-gray-900',
  secondary: 'text-gray-700',
  muted: 'text-gray-600',
  subtle: 'text-gray-500',
  
  brand: 'text-primary-600',
  success: 'text-success-600',
  warning: 'text-warning-600',
  danger: 'text-danger-600',
} as const;