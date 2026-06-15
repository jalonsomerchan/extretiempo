// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

const SITE_URL = 'https://extretiempo.alon.one';

const locationSlugs = [
  'badajoz',
  'caceres',
  'merida',
  'plasencia',
  'don-benito',
  'zafra',
  'navalmoral-de-la-mata',
  'almendralejo',
  'villanueva-de-la-serena',
  'montijo',
  'trujillo',
  'coria',
  'piornal',
  'navezuelas',
  'miajadas',
  'jaraiz-de-la-vera',
  'moraleja',
  'valencia-de-alcantara',
  'logrosan',
  'olivenza',
  'jerez-de-los-caballeros',
  'llerena',
];

const staticPages = [
  '/',
  '/tiempo-en-extremadura/',
  '/municipios/',
  '/provincia/caceres/',
  '/provincia/badajoz/',
  '/herramientas/',
  '/hoy/',
  '/rankings/',
  '/fin-de-semana/',
  '/lluvia/',
  '/calor/',
  '/heladas/',
  '/viento/',
  '/calidad-del-aire/',
  '/polen/',
  '/campo/',
  '/historico/',
  '/clima-extremadura/',
  '/rios/',
  '/mapas/extremadura/',
  '/mapas/favoritos/',
  '/mapas/caceres/',
  '/mapas/badajoz/',
  '/mapas/espana/',
  '/mapas/europa/',
];

const sitemapPages = [
  ...staticPages,
  ...locationSlugs.map((slug) => `/localidad/${slug}/`),
].map((path) => new URL(path, SITE_URL).href);

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap({
      customPages: sitemapPages,
    }),
  ],
});
