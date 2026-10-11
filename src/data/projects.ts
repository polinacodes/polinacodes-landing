import type { ImageMetadata } from 'astro';
import type { ServiceSlug } from './services';

// Para usar fotos reales: guardalas en src/assets/projects/ e importalas:
//   import tiendaModa from '../assets/projects/tienda-moda.jpg';
// y poné `image: tiendaModa` en el proyecto. Astro las optimiza solo (webp, tamaños, lazy).

export type ProjectMockup = 'shop' | 'agency' | 'crm';

export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  /** A qué servicio(s) pertenece. Define en qué páginas de servicio aparece. */
  services: ServiceSlug[];
  /** true = se muestra en el home */
  featured: boolean;
  url?: string;
  image?: ImageMetadata;
  imageAlt?: string;
  /** Placeholder visual mientras no haya `image` */
  mockup?: ProjectMockup;
  metric?: { value: string; label: string };
}

// EJEMPLOS: reemplazar por proyectos reales
export const projects: Project[] = [
  {
    slug: 'ecommerce-moda',
    title: 'E-commerce de moda',
    description: 'Tienda con checkout simplificado y catálogo optimizado.',
    technologies: ['Shopify', 'Liquid', 'SEO'],
    services: ['tiendas-online'],
    featured: true,
    mockup: 'shop',
    metric: { value: '100/100', label: 'Lighthouse' },
  },
  {
    slug: 'landing-servicios',
    title: 'Landing de servicios',
    description: 'Landing de alta conversión enfocada en captar consultas.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    services: ['landing-pages'],
    featured: true,
    mockup: 'agency',
    metric: { value: '0.8s', label: 'carga inicial' },
  },
  {
    slug: 'crm-a-medida',
    title: 'CRM a medida',
    description: 'Panel interno que centraliza clientes, tareas y reportes.',
    technologies: ['React', 'Node.js', 'DB'],
    services: ['sistemas-a-medida'],
    featured: true,
    mockup: 'crm',
    metric: { value: '−42%', label: 'tareas manuales' },
  },
  {
    // Ejemplo de proyecto NO destacado: no sale en el home, sí en su página de servicio
    slug: 'tienda-deco',
    title: 'Tienda de decoración',
    description: 'Migración de plataforma sin perder posicionamiento.',
    technologies: ['WooCommerce', 'PHP'],
    services: ['tiendas-online', 'mantenimiento'],
    featured: false,
    mockup: 'shop',
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);

export const getProjectsByService = (slug: ServiceSlug) =>
  projects.filter((p) => p.services.includes(slug));
