export const colors = {
  primary: '#3F7FB8',
  secondary: '#7FA88E',
  accent: '#E2C46A',
  soft: '#F3D5C8',
  background: '#E8F1F6',
  card: '#FFFFFF',
  text: '#243447',
  textMuted: '#7A8B9C',
  border: '#D0DCE6',
  error: '#C45C4A',
  onPrimary: '#FFFFFF',
} as const;

export type ThemeColors = typeof colors;
