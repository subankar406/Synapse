import type { MetroLineId } from './metro';

/** Facts about the clinic that don't change between languages. */
export const site = {
  name: 'Synapse',
  address: {
    street: '24 boulevard de Magenta',
    city: '75010 Paris',
    full: '24 boulevard de Magenta, 75010 Paris',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=24+boulevard+de+Magenta+75010+Paris',
  orderUrl: 'https://www.ordremk.fr/',
  legalUrl: '#',
  privacyUrl: '#',
  /** Nearby stations shown in the hero and clinic info rows. */
  stations: [
    { name: 'République', lines: ['3', '5', '8', '9', '11'] },
    { name: 'Jacques Bonsergent', lines: ['5'] },
  ] satisfies Array<{ name: string; lines: MetroLineId[] }>,
} as const;

/** Section anchors, in navigation order. Labels live in i18n `nav.items`. */
export const sections = ['cabinet', 'equipe', 'expertises', 'vision', 'infos', 'faq'] as const;
export type SectionId = (typeof sections)[number];
