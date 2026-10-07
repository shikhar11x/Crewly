export const spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 } as const;
export const radius = { sm: 6, md: 10, lg: 16, pill: 999 } as const;

export const typography = {
  display: { fontSize: 28, lineHeight: 34, fontWeight: '700' },
  title: { fontSize: 20, lineHeight: 26, fontWeight: '600' },
  body: { fontSize: 16, lineHeight: 22, fontWeight: '400' },
  label: { fontSize: 14, lineHeight: 18, fontWeight: '500' },
  caption: { fontSize: 12, lineHeight: 16, fontWeight: '400' },
} as const;

export const shadows = {
  card: {
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
} as const;

const light = {
  background: '#F6F7F9',
  surface: '#FFFFFF',
  border: '#E3E6EB',
  text: '#101828',
  textMuted: '#5B6577',
  primary: '#3B5BDB',
  onPrimary: '#FFFFFF',
  success: '#12805C',
  warning: '#B25E09',
  danger: '#C0262D',
  skeleton: '#E6E9EF',
};

const dark: typeof light = {
  background: '#0B0F17',
  surface: '#151B26',
  border: '#263040',
  text: '#F2F4F7',
  textMuted: '#98A2B3',
  primary: '#7C93F5',
  onPrimary: '#0B0F17',
  success: '#3DD598',
  warning: '#F5A524',
  danger: '#FF6B72',
  skeleton: '#1F2733',
};

export const palettes = { light, dark };
export type Colors = typeof light;
export type TypographyVariant = keyof typeof typography;
