/**
 * Every photo on the site, by key (brand artwork lives in src/assets/brand). Drop the file at `public<src>` and it
 * appears automatically; until then a tinted placeholder of `placeholder`
 * colour is rendered in its place (see components/ui/Media.astro).
 */
export interface ImageSpec {
  src: string;
  /** CSS colour (token) shown while the file is missing. */
  placeholder: string;
}

export const images = {
  // Hero & clinic
  hero: { src: '/images/clinic/hero.jpg', placeholder: 'var(--color-mint)' },
  reception: { src: '/images/clinic/reception.jpg', placeholder: 'var(--color-blush)' },
  room: { src: '/images/clinic/room.jpg', placeholder: 'var(--color-mint)' },
  entrance: { src: '/images/clinic/entrance.jpg', placeholder: 'var(--color-blush)' },
  training: { src: '/images/clinic/training.jpg', placeholder: 'var(--color-mint)' },

  // Team
  lena: { src: '/images/team/lena-may.jpg', placeholder: 'var(--color-white)' },
  louis: { src: '/images/team/louis-neyret.jpg', placeholder: 'var(--color-mint)' },

  // Expertises
  expMusculo: { src: '/images/expertises/musculoskeletal.jpg', placeholder: 'var(--color-mint)' },
  expOrtho: { src: '/images/expertises/orthopaedics.jpg', placeholder: 'var(--color-mint)' },
  expSport: { src: '/images/expertises/sports.jpg', placeholder: 'var(--color-mint)' },
  expRheum: { src: '/images/expertises/rheumatology.jpg', placeholder: 'var(--color-mint)' },
  expPelvic: { src: '/images/expertises/pelvic-health.jpg', placeholder: 'var(--color-blush)' },
  expReturn: { src: '/images/expertises/return-to-sport.jpg', placeholder: 'var(--color-cream)' },
} satisfies Record<string, ImageSpec>;

export type ImageKey = keyof typeof images;
