import type { ImageKey } from './images';
import type { Dictionary } from '../i18n/en';

/** Price list. Labels come from i18n `pricing.items[key]`; amounts are formatted per locale. */
export const prices: Array<{ key: keyof Dictionary['pricing']['items']; duration: string; amount: number }> = [
  { key: 'assessment', duration: '1 h', amount: 96 },
  { key: 'followUp', duration: '30 min', amount: 48 },
  { key: 'coachingLong', duration: '1 h', amount: 96 },
  { key: 'coachingShort', duration: '30 min', amount: 48 },
  { key: 'dryNeedling', duration: '30 min', amount: 48 },
];

/**
 * Expertise cards, in order. Copy is i18n `expertises.items[i]`.
 * `photo: false` keeps the design's flat colour tile instead of an image.
 */
export const expertiseImages: Array<{ image: ImageKey; photo: boolean }> = [
  { image: 'expMusculo', photo: true },
  { image: 'expOrtho', photo: true },
  { image: 'expSport', photo: true },
  { image: 'expRheum', photo: true },
  { image: 'expPelvic', photo: false },
  { image: 'expReturn', photo: false },
];

/** Clinic gallery tiles, in grid order. Alt text is i18n `clinic.gallery[key]`. */
export const gallery: Array<{ key: keyof Dictionary['clinic']['gallery']; image: ImageKey; area?: 'tall' | 'wide' }> = [
  { key: 'reception', image: 'reception', area: 'tall' },
  { key: 'room', image: 'room' },
  { key: 'entrance', image: 'entrance' },
  { key: 'training', image: 'training', area: 'wide' },
];
