/** Colour accents a heading fragment can take (maps to .tone-* utilities). */
export type Tone = 'primary' | 'secondary';

/** A heading made of plain and colour-accented fragments. */
export type TitleParts = Array<string | { text: string; tone: Tone }>;

/** A dated line in a CV-style list (degree, experience, training). */
export interface DatedLine {
  date: string;
  text: string;
}

export interface PhysioCopy {
  title: string;
  portraitAlt: string;
  /** Paragraphs before the sub-heading. May contain inline <strong>. */
  intro: string[];
  subheading: string;
  /** Paragraphs after the sub-heading. */
  body: string[];
  experienceTitle: string;
  degree: DatedLine[];
  experience: DatedLine[];
  trainings: DatedLine[];
  bookLabel: string;
}
