export const colors = {
  // Primary colors
  primary: {
    resume: '#7085c9',
    onPrimary: '#ffffff',
    onPrimaryResume: '#7085c9',
  },

  // Secondary colors
  secondary: {
    resume: '#e8edff',
    onSecondaryResume: '#7085c9',
  },

  // Background colors
  background: {
    default: '#ffffff',
    onBackground: '#000000',
  },

  // Status colors
  status: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },

  // Neutral colors
  neutral: {
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
} as const;

export type Colors = typeof colors;
