// @ts-check
import { defineConfig } from 'astro/config';

import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';

const SITE_URL = 'https://extretiempo.alon.one';
const BUILD_TIME = new Date();

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

const pagePriorities = new Map([
  ['/', 1],
  ['/tiempo-en-extremadura/', 0.95],
  ['/municipios/', 0.9],
  ['/rankings/', 0.9],
  ['/hoy/', 0.9],
  ['/mapas/extremadura/', 0.85],
  ['/provincia/caceres/', 0.85],
  ['/provincia/badajoz/', 0.85],
]);

function priorityForPage(url) {
  const pathname = new URL(url).pathname;

  if (pagePriorities.has(pathname)) {
    return pagePriorities.get(pathname) ?? 0.8;
  }

  if (pathname.startsWith('/localidad/')) {
    return 0.82;
  }

  if (pathname.startsWith('/mapas/')) {
    return 0.72;
  }

  return 0.76;
}

function changefreqForPage(url) {
  const pathname = new URL(url).pathname;

  if (pathname === '/' || pathname === '/hoy/' || pathname.startsWith('/localidad/')) {
    return ChangeFreqEnum.HOURLY;
  }

  if (pathname === '/historico/' || pathname === '/clima-extremadura/') {
    return ChangeFreqEnum.WEEKLY;
  }

  return ChangeFreqEnum.DAILY;
}

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap({
      customPages: sitemapPages,
      changefreq: ChangeFreqEnum.DAILY,
      priority: 0.8,
      lastmod: BUILD_TIME,
      serialize(item) {
        item.changefreq = changefreqForPage(item.url);
        item.priority = priorityForPage(item.url);
        return item;
      },
    }),
  ],
});
