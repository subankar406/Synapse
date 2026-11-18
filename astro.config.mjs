// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Live URL; used for canonical, hreflang and Open Graph links. Update when a custom domain is added.
  site: 'https://synapse.dimensionseven.workers.dev',
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false }, // en at /, fr at /fr/
  },
});
