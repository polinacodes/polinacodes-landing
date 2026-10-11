import { site } from '../config/site';
import { services } from '../data/services';

export const buildBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: `${site.name} — Desarrollo Web Freelance`,
  url: `${site.url}/`,
  description: 'Desarrollo web, e-commerce, landing pages y sistemas a medida.',
  areaServed: 'AR',
  serviceType: 'Desarrollo web freelance',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de desarrollo web',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.name },
    })),
  },
});
