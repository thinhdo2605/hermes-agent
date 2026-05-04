import type { Theme } from '../theme.js'
import type { Role } from '../types.js'

export const ROLE: Record<Role, (t: Theme) => { bg: string; body: string; glyph: string; prefix: string }> = {
  assistant: t => ({ bg: '#006400', body: '#00aa00', glyph: t.brand.tool, prefix: '#00aa00' }),
  system: t => ({ bg: '', body: '', glyph: '·', prefix: t.color.muted }),
  tool: t => ({ bg: '', body: t.color.muted, glyph: '⚡', prefix: t.color.muted }),
  user: t => ({ bg: 'red', body: 'red', glyph: t.brand.prompt, prefix: 'red' })
}
