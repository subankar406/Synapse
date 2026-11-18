import type { ImageKey } from './images';
import type { Tone } from '../i18n/types';

export interface Physio {
  /** Also the key of this person's copy in i18n `physio`. */
  id: 'lena' | 'louis';
  name: string;
  firstName: string;
  image: ImageKey;
  /** Accent colour for this person's buttons and headings. */
  tone: Tone;
  doctolibUrl: string;
}

export const team: Physio[] = [
  {
    id: 'lena',
    name: 'Lena May',
    firstName: 'Lena',
    image: 'lena',
    tone: 'primary',
    doctolibUrl: 'https://www.doctolib.fr/masseur-kinesitherapeute/paris/lena-may?pid=practice-880670',
  },
  {
    id: 'louis',
    name: 'Louis Neyret',
    firstName: 'Louis',
    image: 'louis',
    tone: 'secondary',
    doctolibUrl: 'https://www.doctolib.fr/masseur-kinesitherapeute/paris/louis-neyret?pid=practice-880670',
  },
];
