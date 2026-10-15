import type { ImageMetadata } from 'astro';
import type { ServiceSlug } from './services';
import abuelaTienda from '../assets/projects/abuela-tienda.webp';
import glamConfessionsTienda from '../assets/projects/glam-confessions-tienda.webp';
import lunatycaTienda from '../assets/projects/lunatyca-tienda.webp';
import ondoAsesoresLanding from '../assets/projects/ondo-asesores-landing.webp';
import portfolioPolinacodes from '../assets/projects/portfolio-polinacodes.webp';

export type ProjectMockup = 'shop' | 'agency' | 'crm';

export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  services: ServiceSlug[];
  featured: boolean;
  url?: string;
  image?: ImageMetadata;
  imageAlt?: string;
  mockup?: ProjectMockup;
  metric?: { value: string; label: string };
}

export const projects: Project[] = [
  {
    slug: 'abuela-tienda',
    title: 'Abuela',
    description: 'Rediseño de la tienda en Tiendanube, con diseño a medida en CSS, catálogo ordenado y SEO técnico.',
    technologies: ['Tiendanube', 'CSS'],
    services: ['tiendas-online', 'mantenimiento-web'],
    featured: true,
    url:'https://abuela2.mitiendanube.com/',
    image: abuelaTienda,
    imageAlt: 'Captura de la tienda online de Abuela',
    // metric: { value: '100/100', label: 'Lighthouse' },
  },
  {
    slug: 'lunatyca-tienda',
    title: 'Lunatyca',
    description: 'Rediseño de la tienda en Tiendanube con diseño a medida, catálogo por categorías y SEO avanzado.',
    technologies: ['Tiendanube', 'CSS'],
    services: ['tiendas-online', 'mantenimiento-web'],
    featured: true,
    url:'https://lunatyca.mitiendanube.com/',
    image: lunatycaTienda,
    imageAlt: 'Captura de la tienda online de Lunatyca',
    // metric: { value: '0.8s', label: 'carga inicial' },
  },
  // {
  //   slug: 'portfolio-polinacodes',
  //   title: 'Portfolio personal',
  //   description: 'Mi portfolio profesional en Astro, TypeScript y Tailwind CSS: proyectos, habilidades y contacto.',
  //   technologies: ['Astro', 'TypeScript', 'Tailwind CSS'],
  //   services: ['landing-pages'],
  //   featured: false,
  //   url:'https://portfolio.polinacodes.dev/',
  //   image: portfolioPolinacodes,
  //   imageAlt: 'Captura del portfolio de PolinaCodes',
  //   metric: { value: '99', label: 'PageSpeed móvil' },
  // },
  {
    slug: 'glam-confessions-tienda',
    title: 'Glam Confessions',
    description: 'Tienda online de maquillaje en WordPress y WooCommerce, con diseño propio hecho con Elementor.',
    technologies: ['WordPress', 'Elementor', 'WooCommerce', 'PHP'],
    services: ['tiendas-online'],
    featured: true,
    url:'https://glamconfessions.com.ar/',
    image: glamConfessionsTienda,
    imageAlt: 'Captura de la tienda online de Glam Confessions',
  },
  // {
  //   slug: 'ondo-asesores-landing',
  //   title: 'Landing para asesoría',
  //   description: 'Landing de demostración para una asesoría de autónomos y pymes, pensada para conseguir consultas, con SEO y GEO desde la base.',
  //   technologies: ['HTML', 'CSS', 'JavaScript'],
  //   services: ['landing-pages'],
  //   featured: false,
  //   url:'https://ondo-asesores.vercel.app/',
  //   image: ondoAsesoresLanding,
  //   imageAlt: 'Captura de la landing page para Asesores',
  // },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);

export const getProjectsByService = (slug: ServiceSlug) =>
  projects.filter((p) => p.services.includes(slug));
