import type { MetroLineId } from './metro';

/** Facts about the clinic that don't change between languages. */
export const site = {
  name: 'Synapse',
  address: {
    street: '24 boulevard de Magenta',
    city: '75010 Paris',
    full: '24 boulevard de Magenta, 75010 Paris',
    /** Short form for tight spots (mobile map card). */
    short: '24 bd de Magenta · 75010',
    postalCode: '75010',
    locality: 'Paris',
    country: 'FR',
  },
  /** Google Maps page for the clinic; every address on the site links here. */
  mapsUrl: 'https://maps.app.goo.gl/jjotVGiTyxbXkJjA8',
  /** Google Maps embed; `{lang}` is replaced with the page language for localised map labels. */
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.3686947204174!2d2.3617789!3d48.870247600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e0eba9c67d9%3A0x768b06411fe05cd7!2s24%20Bd%20de%20Magenta%2C%2075010%20Paris%2C%20France!5e0!3m2!1s{lang}!2sfr!4v1795030031551!5m2!1s{lang}!2sfr',
  /** Coordinates of the clinic (from the Google Maps embed). */
  geo: { latitude: 48.8702476, longitude: 2.3617789 },
  /**
   * Opening hours for structured data (schema.org format).
   * TODO: confirm with the clinic — these match the placeholder hours shown on the page.
   */
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '20:00' },
    { days: ['Saturday'], opens: '09:00', closes: '13:00' },
  ],
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
