/**
 * Paris metro / RER lines used on the site. Colours are tokens in
 * styles/tokens.css (`--line-*`); `light` lines use white text.
 */
export const metroLines = {
  '2': { token: '--line-2', light: true },
  '3': { token: '--line-3' },
  '4': { token: '--line-4', light: true },
  '5': { token: '--line-5' },
  '7': { token: '--line-7' },
  '7b': { token: '--line-7b', small: true },
  '8': { token: '--line-8' },
  '9': { token: '--line-9' },
  '11': { token: '--line-11', light: true },
  B: { token: '--line-rer-b', rer: true },
  D: { token: '--line-rer-d', rer: true },
  E: { token: '--line-rer-e', rer: true },
} as const satisfies Record<string, { token: string; light?: boolean; rer?: boolean; small?: boolean }>;

export type MetroLineId = keyof typeof metroLines;
