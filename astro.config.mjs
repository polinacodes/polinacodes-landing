// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';


import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  site: 'https://polinacodes.dev',

  adapter: vercel(),
  integrations: [sitemap()],
});