import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'it'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Tutti i locale usano il prefisso /en, /it (comportamento esplicito)
  localePrefix: 'always'
});