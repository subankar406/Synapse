import type { Dictionary } from '../i18n/en';
import { site } from '../data/site';
import { team } from '../data/team';
import { prices } from '../data/content';

/**
 * Structured data (JSON-LD) for search and answer engines:
 *  - the clinic as a schema.org Physiotherapy business (address, geo, hours, staff, prices)
 *  - the FAQ section as a FAQPage, so answers can be quoted directly
 */
export function structuredData(t: Dictionary, pageUrl: string, imageUrl: string) {
  const clinic = {
    '@type': ['Physiotherapy', 'MedicalBusiness'],
    '@id': `${pageUrl}#clinic`,
    name: site.name,
    description: t.meta.description,
    url: pageUrl,
    image: imageUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.locality,
      addressCountry: site.address.country,
    },
    geo: { '@type': 'GeoCoordinates', ...site.geo },
    hasMap: site.mapsUrl,
    openingHoursSpecification: site.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    availableLanguage: ['French', 'English'],
    medicalSpecialty: ['Musculoskeletal', 'Rheumatologic'],
    employee: team.map((p) => ({
      '@type': 'Person',
      name: p.name,
      jobTitle: t.physio[p.id].title,
      url: p.doctolibUrl,
    })),
    makesOffer: prices.map((p) => ({
      '@type': 'Offer',
      name: `${t.pricing.items[p.key]} (${p.duration})`,
      price: p.amount,
      priceCurrency: 'EUR',
    })),
  };

  const faq = {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: t.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return { '@context': 'https://schema.org', '@graph': [clinic, faq] };
}
