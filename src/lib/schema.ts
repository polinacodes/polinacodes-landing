import { site } from '../config/site';
import { services } from '../data/services';

export const buildBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${site.url}/#business`,
  name: `${site.name} — Desarrollo web freelance`,
  url: `${site.url}/`,
  description:
    'Desarrollo web freelance en Argentina: páginas web, tiendas online, landing pages y sistemas a medida.',
  email: 'hola@polinacodes.dev',
  areaServed: [
    { '@type': 'Country', name: 'Argentina' },
    { '@type': 'Country', name: 'España' },
    { '@type': 'Place', name: 'Latinoamérica' },
  ],
  serviceType: ['Desarrollo web', 'Tiendas online', 'Landing pages', 'Sistemas a medida'],
  knowsAbout: ['Tiendanube', 'Shopify', 'WooCommerce', 'Astro', 'React', 'Node.js', 'SEO técnico'],
  founder: { '@type': 'Person', name: 'POLINACODES', jobTitle: 'Desarrolladora web freelance' },
  sameAs: [site.social.github, site.social.linkedin],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de desarrollo web',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.name, description: s.summary },
    })),
  },
});