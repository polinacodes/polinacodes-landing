import { site } from '../config/site';
import type { Service } from '../data/services';
import type { ServicePage } from '../data/servicePages';

const areaServed = [
  { '@type': 'Country', name: 'Argentina' },
  { '@type': 'Country', name: 'España' },
  { '@type': 'Place', name: 'Latinoamérica' },
];

export const buildServiceSchema = (service: Service, page: ServicePage) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  serviceType: service.name,
  description: page.seoDescription,
  url: `${site.url}/servicios/${service.slug}/`,
  provider: {
    '@type': 'ProfessionalService',
    name: `${site.name} — Desarrollo web freelance`,
    url: `${site.url}/`,
  },
  areaServed,
});

export const buildBreadcrumbSchema = (service: Service) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${site.url}/` },
    { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${site.url}/servicios/` },
    { '@type': 'ListItem', position: 3, name: service.name, item: `${site.url}/servicios/${service.slug}/` },
  ],
});
