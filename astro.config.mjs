// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://extretiempo.alon.one",
  integrations: [
    sitemap({
      changefreq: "hourly",
      priority: 0.8,
      lastmod: new Date(),
    }),
  ],
});
