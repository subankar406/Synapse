import { getRelativeLocaleUrl } from 'astro:i18n';
import { en, type Dictionary } from './en';
import { fr } from './fr';

export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

const dictionaries: Record<Locale, Dictionary> = { en, fr };

/** Intl locale tag used for number/currency formatting. */
export const intlLocale: Record<Locale, string> = { en: 'en-GB', fr: 'fr-FR' };

/** Human label shown in the language switcher. */
export const localeLabel: Record<Locale, string> = { en: 'EN', fr: 'FR' };

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value);
}

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang];
}

/** URL of `path` in a given locale, e.g. localeUrl('fr') → '/fr/'. */
export function localeUrl(lang: Locale, path = ''): string {
  return getRelativeLocaleUrl(lang, path);
}

export function formatPrice(amount: number, lang: Locale): string {
  return new Intl.NumberFormat(intlLocale[lang], {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export type { Dictionary };
export type { Tone, TitleParts, DatedLine, PhysioCopy } from './types';
