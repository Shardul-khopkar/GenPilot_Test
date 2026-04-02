export const API_ENDPOINTS = {
  ANALYZE: '/api/analyze',
  STATUS: '/api/status',
  HEALTH: '/health',
} as const;

export const ROUTES = {
  HOME: '/',
  HOW_IT_WORKS: '/how-it-works',
  DOCS: '/docs',
  CONTACT: '/contact',
  REQUEST_ACCESS: '/request-access',
} as const;

export const COLORS = {
  PRIMARY_BLUE: '#0066ff',
  ACCENT_CYAN: '#00d9ff',
  ACCENT_YELLOW: '#ffd700',
  BG_DARK: '#000000',
  TEXT_MUTED: '#b0b8c8',
} as const;

export const GENOME_BUILDS = ['hg19', 'hg38'] as const;

export const PROTEIN_VARIANTS = [
  'Cas9',
  'Cas12a',
  'Nickase',
  'Prime Editor',
] as const;
