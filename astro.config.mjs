// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';


// https://astro.build/config
export default defineConfig({
  // Necesario para canonical, og:url y sitemap. Cambialo si tu dominio final es otro.
  site: 'https://polinacodes.dev',
  adapter: vercel(),
});
