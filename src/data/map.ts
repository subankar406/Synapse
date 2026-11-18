import type { MetroLineId } from './metro';

/** Pin placement relative to its dot: where the label sits. */
export type PinPlacement = 'right' | 'left' | 'above' | 'below';

/** Position on the neighbourhood map, in % of the map's width/height. */
export interface MapPoint {
  x: number;
  y: number;
  placement: PinPlacement;
}

export interface Station extends MapPoint {
  name: string;
  lines: MetroLineId[];
  /** Mainline stations get the train icon instead of the round “M”. */
  hub?: boolean;
  /** Label hidden on small screens when zoomed out (avoids overlap with the clinic). */
  nearClinic?: boolean;
}

export type PoiCategory = 'cafe' | 'restaurant' | 'sport' | 'health';

export interface Poi extends MapPoint {
  name: string;
  url: string;
  category: PoiCategory;
}

/** The clinic's own pin. */
export const clinicPoint = { x: 49.467, y: 60.41 };

export const stations: Station[] = [
  { name: 'Gare du Nord', lines: ['4', '5', 'B', 'D'], x: 22.089, y: 10.769, placement: 'right', hub: true },
  { name: 'Gare de l’Est', lines: ['4', '5', '7'], x: 42.178, y: 27.692, placement: 'right', hub: true },
  { name: 'Strasbourg – Saint-Denis', lines: ['4', '8', '9'], x: 19.067, y: 67.692, placement: 'right' },
  { name: 'Château-Landon', lines: ['7'], x: 55.244, y: 18.41, placement: 'right' },
  { name: 'Louis Blanc', lines: ['7', '7b'], x: 68.267, y: 6.0, placement: 'right' },
  { name: 'Colonel Fabien', lines: ['2'], x: 93.333, y: 26.103, placement: 'below' },
  { name: 'Réaumur – Sébastopol', lines: ['3', '4'], x: 11.6, y: 83.333, placement: 'right' },
  { name: 'Magenta', lines: ['E'], x: 38.711, y: 8.718, placement: 'above' },
  { name: 'République', lines: ['3', '5', '8', '9', '11'], x: 60.933, y: 76.359, placement: 'right' },
  { name: 'Jacques Bonsergent', lines: ['5'], x: 47.778, y: 58.359, placement: 'right', nearClinic: true },
  { name: 'Temple', lines: ['3'], x: 47.6, y: 82.103, placement: 'left' },
  { name: 'Goncourt', lines: ['11'], x: 93.644, y: 64.154, placement: 'right' },
  { name: 'Oberkampf', lines: ['5', '9'], x: 86.311, y: 94.308, placement: 'right' },
  { name: 'Château d’Eau', lines: ['4'], x: 28.444, y: 49.333, placement: 'right' },
  { name: 'Arts et Métiers', lines: ['3', '11'], x: 27.156, y: 87.333, placement: 'right' },
  { name: 'Filles du Calvaire', lines: ['8'], x: 73.911, y: 98.359, placement: 'right' },
];

export const pois: Poi[] = [
  { name: 'Mamiche', url: 'https://www.mamiche.fr/', category: 'cafe', x: 42.978, y: 61.179, placement: 'above' },
  { name: 'Blondie', url: 'https://cafeblondie.com/', category: 'cafe', x: 41.378, y: 61.436, placement: 'left' },
  { name: 'HolyBelly', url: 'https://holybellycafe.com/', category: 'cafe', x: 43.378, y: 58.974, placement: 'above' },
  { name: 'Du Pain et des Idées', url: 'https://dupainetdesidees.com/', category: 'cafe', x: 57.333, y: 57.692, placement: 'right' },
  { name: 'Ten Belles', url: 'https://www.tenbelles.com/paris-10', category: 'cafe', x: 65.511, y: 46.205, placement: 'right' },
  { name: 'Sain Boulangerie', url: 'https://www.sain-boulangerie.com/', category: 'cafe', x: 72.844, y: 54.462, placement: 'right' },
  { name: 'Le Verre Volé', url: 'https://verrevole.com/', category: 'restaurant', x: 60.044, y: 49.538, placement: 'left' },
  { name: 'Sur Mer', url: 'https://surmer.restaurant/', category: 'restaurant', x: 56.489, y: 56.974, placement: 'left' },
  { name: 'Early June', url: 'https://early-june.fr/', category: 'restaurant', x: 58.933, y: 49.077, placement: 'above' },
  { name: 'Bouillon République', url: 'https://bouillonlesite.com/', category: 'restaurant', x: 65.111, y: 84.564, placement: 'right' },
  { name: 'EPISOD - République', url: 'https://www.episod.com/', category: 'sport', x: 48.444, y: 56.821, placement: 'left' },
  { name: 'La Montgolfière', url: 'https://lamontgolfiereclub.com/', category: 'sport', x: 57.111, y: 59.744, placement: 'right' },
  { name: 'Jivamukti Yoga', url: 'https://www.jivamuktiyoga.fr/', category: 'sport', x: 64.8, y: 49.128, placement: 'right' },
  { name: 'Neoness', url: 'https://neoness.fr/clubs/neoness-paris-11-republique', category: 'sport', x: 74.978, y: 78.718, placement: 'right' },
  { name: 'CSE Imagerie Médicale', url: 'https://www.cse-radiologie.fr/', category: 'health', x: 60.578, y: 62.308, placement: 'right' },
  { name: 'Pharmacie Beaurepaire', url: 'https://www.pharmaciebeaurepaire.fr/', category: 'health', x: 59.6, y: 69.077, placement: 'right' },
  { name: 'Pharmacie de la République', url: 'https://pharmacie.elsie-sante.fr/281-pharmacie-de-la-place-de-la-republique-elsie-sante', category: 'health', x: 63.556, y: 82.308, placement: 'right' },
  { name: 'Synlab', url: 'https://www.synlab.fr/synlab-paris/', category: 'health', x: 51.467, y: 74.974, placement: 'left' },
];
